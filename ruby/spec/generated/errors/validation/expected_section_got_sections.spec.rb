describe 'Expecting a section but getting two sections' do
  it 'raises the expected ValidationError' do
    error = nil

    input = "# section\n" +
            "\n" +
            "# section\n" +
            ""

    begin
      Enolib.parse(input).section('section')
    rescue => _error
      if _error.is_a?(Enolib::ValidationError)
        error = _error
      else
        raise _error
      end
    end

    expect(error).to be_a(Enolib::ValidationError)
    
    text = "Only a single section with the key 'section' was expected."
    
    expect(error.text).to eq(text)
    
    snippet = "   Line | Content\n" +
              " >    1 | # section\n" +
              "      2 | \n" +
              " >    3 | # section\n" +
              "      4 | "
    
    expect(error.snippet).to eq(snippet)
    
    expect(error.selection[:from][:line]).to eq(0)
    expect(error.selection[:from][:column]).to eq(0)
    expect(error.selection[:to][:line]).to eq(0)
    expect(error.selection[:to][:column]).to eq(9)
  end
end

describe 'Expecting a section but getting two sections with elements, empty lines and continuations' do
  it 'raises the expected ValidationError' do
    error = nil

    input = "> comment\n" +
            "# section\n" +
            "\n" +
            "field: value\n" +
            "\n" +
            "# section\n" +
            "\n" +
            "list:\n" +
            "- item\n" +
            "\\ continuation\n" +
            "\n" +
            "- item"

    begin
      Enolib.parse(input).section('section')
    rescue => _error
      if _error.is_a?(Enolib::ValidationError)
        error = _error
      else
        raise _error
      end
    end

    expect(error).to be_a(Enolib::ValidationError)
    
    text = "Only a single section with the key 'section' was expected."
    
    expect(error.text).to eq(text)
    
    snippet = "   Line | Content\n" +
              "      1 | > comment\n" +
              " >    2 | # section\n" +
              " *    3 | \n" +
              " *    4 | field: value\n" +
              "      5 | \n" +
              " >    6 | # section\n" +
              " *    7 | \n" +
              " *    8 | list:\n" +
              " *    9 | - item\n" +
              " *   10 | \\ continuation\n" +
              " *   11 | \n" +
              " *   12 | - item"
    
    expect(error.snippet).to eq(snippet)
    
    expect(error.selection[:from][:line]).to eq(1)
    expect(error.selection[:from][:column]).to eq(0)
    expect(error.selection[:to][:line]).to eq(3)
    expect(error.selection[:to][:column]).to eq(12)
  end
end