input = <<~DOC.strip
> comment
# section

field: value

list:
- item
- item

> comment
- item

## subsection

fieldset:
entry = value

> comment
entry = value
DOC

describe Enolib::TerminalReporter do
  it 'produces colored terminal output' do
    document = Enolib.parse(input, reporter: Enolib::TerminalReporter)
    context = document.instance_variable_get(:@context)

    snippet = context.reporter.new(context)
                              .report_element(context.document[:elements].first)
                              .snippet()

    # Uncomment to inspect
    # puts snippet

    expect(snippet).to match_snapshot
  end
end
