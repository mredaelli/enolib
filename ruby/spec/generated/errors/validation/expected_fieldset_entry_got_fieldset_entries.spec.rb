describe 'Expecting a fieldset entry but getting two fieldset entries' do
  it 'raises the expected ValidationError' do
    error = nil

    input = "fieldset:\n" +
            "entry = value\n" +
            "entry = value"

    begin
      Enolib.parse(input).fieldset('fieldset').entry('entry')
    rescue => _error
      if _error.is_a?(Enolib::ValidationError)
        error = _error
      else
        raise _error
      end
    end

    expect(error).to be_a(Enolib::ValidationError)
    
    text = "Only a single fieldset entry with the key 'entry' was expected."
    
    expect(error.text).to eq(text)
    
    snippet = "   Line | Content\n" +
              "      1 | fieldset:\n" +
              " >    2 | entry = value\n" +
              " >    3 | entry = value"
    
    expect(error.snippet).to eq(snippet)
    
    expect(error.selection[:from][:line]).to eq(1)
    expect(error.selection[:from][:column]).to eq(0)
    expect(error.selection[:to][:line]).to eq(1)
    expect(error.selection[:to][:column]).to eq(13)
  end
end

describe 'Expecting a fieldset entry but getting two fieldset entries with comments, empty lines and continuations' do
  it 'raises the expected ValidationError' do
    error = nil

    input = "fieldset:\n" +
            "> comment\n" +
            "entry = value\n" +
            "\\ continuation\n" +
            "\\ continuation\n" +
            "\n" +
            "> comment\n" +
            "entry = value\n" +
            "| continuation"

    begin
      Enolib.parse(input).fieldset('fieldset').entry('entry')
    rescue => _error
      if _error.is_a?(Enolib::ValidationError)
        error = _error
      else
        raise _error
      end
    end

    expect(error).to be_a(Enolib::ValidationError)
    
    text = "Only a single fieldset entry with the key 'entry' was expected."
    
    expect(error.text).to eq(text)
    
    snippet = "   Line | Content\n" +
              "      1 | fieldset:\n" +
              "      2 | > comment\n" +
              " >    3 | entry = value\n" +
              " *    4 | \\ continuation\n" +
              " *    5 | \\ continuation\n" +
              "      6 | \n" +
              "      7 | > comment\n" +
              " >    8 | entry = value\n" +
              " *    9 | | continuation"
    
    expect(error.snippet).to eq(snippet)
    
    expect(error.selection[:from][:line]).to eq(2)
    expect(error.selection[:from][:column]).to eq(0)
    expect(error.selection[:to][:line]).to eq(4)
    expect(error.selection[:to][:column]).to eq(14)
  end
end