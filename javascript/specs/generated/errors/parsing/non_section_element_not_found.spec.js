const enolib = require('../../../..');

describe('Copying a non-section element that does not exist', () => {
  it('throws the expected ParseError', () => {
    let error = null;

    const input = `copy < element`;

    try {
      enolib.parse(input);
    } catch(_error) {
      if(_error instanceof enolib.ParseError) {
        error = _error;
      } else {
        throw _error;
      }
    }

    expect(error).toBeInstanceOf(enolib.ParseError);
    
    const text = `In line 1 the non-section element 'element' should be copied, but it was not found.`;
    
    expect(error.text).toEqual(text);
    
    const snippet = `   Line | Content\n` +
                    ` >    1 | copy < element`;
    
    expect(error.snippet).toEqual(snippet);
    
    expect(error.selection.from.line).toEqual(0);
    expect(error.selection.from.column).toEqual(0);
    expect(error.selection.to.line).toEqual(0);
    expect(error.selection.to.column).toEqual(14);
  });
});

describe('Copying a non-section element whose key only exists on a section', () => {
  it('throws the expected ParseError', () => {
    let error = null;

    const input = `# section\n` +
                  `\n` +
                  `# other_section\n` +
                  `\n` +
                  `copy < section`;

    try {
      enolib.parse(input);
    } catch(_error) {
      if(_error instanceof enolib.ParseError) {
        error = _error;
      } else {
        throw _error;
      }
    }

    expect(error).toBeInstanceOf(enolib.ParseError);
    
    const text = `In line 5 the non-section element 'section' should be copied, but it was not found.`;
    
    expect(error.text).toEqual(text);
    
    const snippet = `   Line | Content\n` +
                    `   ...\n` +
                    `      3 | # other_section\n` +
                    `      4 | \n` +
                    ` >    5 | copy < section`;
    
    expect(error.snippet).toEqual(snippet);
    
    expect(error.selection.from.line).toEqual(4);
    expect(error.selection.from.column).toEqual(0);
    expect(error.selection.to.line).toEqual(4);
    expect(error.selection.to.column).toEqual(14);
  });
});

describe('Copying an implied fieldset whose key only exists on a section', () => {
  it('throws the expected ParseError', () => {
    let error = null;

    const input = `# section\n` +
                  `\n` +
                  `# other_section\n` +
                  `\n` +
                  `copy < section\n` +
                  `entry = value`;

    try {
      enolib.parse(input);
    } catch(_error) {
      if(_error instanceof enolib.ParseError) {
        error = _error;
      } else {
        throw _error;
      }
    }

    expect(error).toBeInstanceOf(enolib.ParseError);
    
    const text = `In line 5 the non-section element 'section' should be copied, but it was not found.`;
    
    expect(error.text).toEqual(text);
    
    const snippet = `   Line | Content\n` +
                    `   ...\n` +
                    `      3 | # other_section\n` +
                    `      4 | \n` +
                    ` >    5 | copy < section\n` +
                    `      6 | entry = value`;
    
    expect(error.snippet).toEqual(snippet);
    
    expect(error.selection.from.line).toEqual(4);
    expect(error.selection.from.column).toEqual(0);
    expect(error.selection.to.line).toEqual(4);
    expect(error.selection.to.column).toEqual(14);
  });
});

describe('Copying an implied list whose key only exists on a section', () => {
  it('throws the expected ParseError', () => {
    let error = null;

    const input = `# section\n` +
                  `\n` +
                  `# other_section\n` +
                  `\n` +
                  `copy < section\n` +
                  `- item`;

    try {
      enolib.parse(input);
    } catch(_error) {
      if(_error instanceof enolib.ParseError) {
        error = _error;
      } else {
        throw _error;
      }
    }

    expect(error).toBeInstanceOf(enolib.ParseError);
    
    const text = `In line 5 the non-section element 'section' should be copied, but it was not found.`;
    
    expect(error.text).toEqual(text);
    
    const snippet = `   Line | Content\n` +
                    `   ...\n` +
                    `      3 | # other_section\n` +
                    `      4 | \n` +
                    ` >    5 | copy < section\n` +
                    `      6 | - item`;
    
    expect(error.snippet).toEqual(snippet);
    
    expect(error.selection.from.line).toEqual(4);
    expect(error.selection.from.column).toEqual(0);
    expect(error.selection.to.line).toEqual(4);
    expect(error.selection.to.column).toEqual(14);
  });
});