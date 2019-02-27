const eno = require('../../../..');

describe('Querying an empty fieldset for a required but missing entry', () => {
  it('throws the expected ValidationError', () => {
    let error = null;

    const input = `fieldset:`;

    try {
      eno.parse(input).fieldset('fieldset').requiredEntry('entry');
    } catch(_error) {
      if(_error instanceof eno.ValidationError) {
        error = _error;
      } else {
        throw _error;
      }
    };

    expect(error).toBeInstanceOf(eno.ValidationError);
    
    const text = `The fieldset entry 'entry' is missing - in case it has been specified look for typos and also check for correct capitalization.`;
    
    expect(error.text).toEqual(text);
    
    const snippet = `   Line | Content\n` +
                    ` *    1 | fieldset:`;
    
    expect(error.snippet).toEqual(snippet);
    
    expect(error.selection.from.line).toEqual(0);
    expect(error.selection.from.column).toEqual(9);
    expect(error.selection.to.line).toEqual(0);
    expect(error.selection.to.column).toEqual(9);
  });
});

describe('Querying a fieldset with two entries for a required but missing entry', () => {
  it('throws the expected ValidationError', () => {
    let error = null;

    const input = `fieldset:\n` +
                  `entry = value\n` +
                  `entry = value`;

    try {
      eno.parse(input).fieldset('fieldset').requiredEntry('missing');
    } catch(_error) {
      if(_error instanceof eno.ValidationError) {
        error = _error;
      } else {
        throw _error;
      }
    };

    expect(error).toBeInstanceOf(eno.ValidationError);
    
    const text = `The fieldset entry 'missing' is missing - in case it has been specified look for typos and also check for correct capitalization.`;
    
    expect(error.text).toEqual(text);
    
    const snippet = `   Line | Content\n` +
                    ` *    1 | fieldset:\n` +
                    ` ?    2 | entry = value\n` +
                    ` ?    3 | entry = value`;
    
    expect(error.snippet).toEqual(snippet);
    
    expect(error.selection.from.line).toEqual(0);
    expect(error.selection.from.column).toEqual(9);
    expect(error.selection.to.line).toEqual(0);
    expect(error.selection.to.column).toEqual(9);
  });
});

describe('Querying a fieldset with entries, empty lines and comments for a required but missing entry', () => {
  it('throws the expected ValidationError', () => {
    let error = null;

    const input = `fieldset:\n` +
                  `\n` +
                  `> comment\n` +
                  `entry = value\n` +
                  `\n` +
                  `> comment\n` +
                  `entry = value`;

    try {
      eno.parse(input).fieldset('fieldset').requiredEntry('missing');
    } catch(_error) {
      if(_error instanceof eno.ValidationError) {
        error = _error;
      } else {
        throw _error;
      }
    };

    expect(error).toBeInstanceOf(eno.ValidationError);
    
    const text = `The fieldset entry 'missing' is missing - in case it has been specified look for typos and also check for correct capitalization.`;
    
    expect(error.text).toEqual(text);
    
    const snippet = `   Line | Content\n` +
                    ` *    1 | fieldset:\n` +
                    ` ?    2 | \n` +
                    ` ?    3 | > comment\n` +
                    ` ?    4 | entry = value\n` +
                    ` ?    5 | \n` +
                    ` ?    6 | > comment\n` +
                    ` ?    7 | entry = value`;
    
    expect(error.snippet).toEqual(snippet);
    
    expect(error.selection.from.line).toEqual(0);
    expect(error.selection.from.column).toEqual(9);
    expect(error.selection.to.line).toEqual(0);
    expect(error.selection.to.column).toEqual(9);
  });
});