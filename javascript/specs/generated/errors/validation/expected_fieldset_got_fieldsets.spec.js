const enolib = require('../../../..');

describe('Expecting a fieldset but getting two fieldsets', () => {
  it('throws the expected ValidationError', () => {
    let error = null;

    const input = `fieldset:\n` +
                  `entry = value\n` +
                  `fieldset:\n` +
                  `entry = value`;

    try {
      enolib.parse(input).fieldset('fieldset');
    } catch(_error) {
      if(_error instanceof enolib.ValidationError) {
        error = _error;
      } else {
        throw _error;
      }
    }

    expect(error).toBeInstanceOf(enolib.ValidationError);
    
    const text = `Only a single fieldset with the key 'fieldset' was expected.`;
    
    expect(error.text).toEqual(text);
    
    const snippet = `   Line | Content\n` +
                    ` >    1 | fieldset:\n` +
                    ` *    2 | entry = value\n` +
                    ` >    3 | fieldset:\n` +
                    ` *    4 | entry = value`;
    
    expect(error.snippet).toEqual(snippet);
    
    expect(error.selection.from.line).toEqual(0);
    expect(error.selection.from.column).toEqual(0);
    expect(error.selection.to.line).toEqual(1);
    expect(error.selection.to.column).toEqual(13);
  });
});

describe('Expecting a fieldset but getting two fieldsets with comments, empty lines and continuations', () => {
  it('throws the expected ValidationError', () => {
    let error = null;

    const input = `> comment\n` +
                  `fieldset:\n` +
                  `entry = value\n` +
                  `\n` +
                  `entry = value\n` +
                  `\n` +
                  `fieldset:\n` +
                  `> comment\n` +
                  `entry = value`;

    try {
      enolib.parse(input).fieldset('fieldset');
    } catch(_error) {
      if(_error instanceof enolib.ValidationError) {
        error = _error;
      } else {
        throw _error;
      }
    }

    expect(error).toBeInstanceOf(enolib.ValidationError);
    
    const text = `Only a single fieldset with the key 'fieldset' was expected.`;
    
    expect(error.text).toEqual(text);
    
    const snippet = `   Line | Content\n` +
                    `      1 | > comment\n` +
                    ` >    2 | fieldset:\n` +
                    ` *    3 | entry = value\n` +
                    ` *    4 | \n` +
                    ` *    5 | entry = value\n` +
                    `      6 | \n` +
                    ` >    7 | fieldset:\n` +
                    ` *    8 | > comment\n` +
                    ` *    9 | entry = value`;
    
    expect(error.snippet).toEqual(snippet);
    
    expect(error.selection.from.line).toEqual(1);
    expect(error.selection.from.column).toEqual(0);
    expect(error.selection.to.line).toEqual(4);
    expect(error.selection.to.column).toEqual(13);
  });
});