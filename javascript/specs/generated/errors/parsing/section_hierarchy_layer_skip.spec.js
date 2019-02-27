const eno = require('../../../..');

describe('Starting a section two levels deeper than the current one', () => {
  it('throws the expected ParseError', () => {
    let error = null;

    const input = `# section\n` +
                  `### subsubsection`;

    try {
      eno.parse(input);
    } catch(_error) {
      if(_error instanceof eno.ParseError) {
        error = _error;
      } else {
        throw _error;
      }
    };

    expect(error).toBeInstanceOf(eno.ParseError);
    
    const text = `Line 2 starts a section that is more than one level deeper than the current one.`;
    
    expect(error.text).toEqual(text);
    
    const snippet = `   Line | Content\n` +
                    ` *    1 | # section\n` +
                    ` >    2 | ### subsubsection`;
    
    expect(error.snippet).toEqual(snippet);
    
    expect(error.selection.from.line).toEqual(1);
    expect(error.selection.from.column).toEqual(0);
    expect(error.selection.to.line).toEqual(1);
    expect(error.selection.to.column).toEqual(17);
  });
});