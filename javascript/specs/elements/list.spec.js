const eno = require('../..');
const { Field } = require('../../lib/elements/field.js');

describe('List', () => {
  let list;

  beforeEach(() => {
    const document = eno.parse(`
list:
- item
- other
    `.trim());

    list = document.list('list');
  });

  it('is untouched after initialization', () => {
    expect(list._touched).toBe(false);
  });

  it('has only untouched items after initialization', () => {
    for(const item of list.items()) {
      expect(item._touched).toBe(false);
    }
  });

  describe('items()', () => {
    let items;

    beforeEach(() => {
      items = list.items();
    });

    it('touches the list itself', () => {
      expect(list._touched).toBe(true);
    });

    it('does not touch the list items', () => {
      for(const item of items) {
        expect(item._touched).toBe(false);
      }
    });

    it('returns the items', () => {
      for(const item of items) {
        expect(item).toBeInstanceOf(Field);
      }
    });
  });

  describe('optionalStringValues()', () => {
    let values;

    beforeEach(() => {
      values = list.optionalStringValues();
    });

    it('returns the values', () => {
      expect(values).toEqual(['item', 'other']);
    });

    it('touches the list itself', () => {
      expect(list._touched).toBe(true);
    });

    it('touches all list items', () => {
      for(const item of list.items()) {
        expect(item._touched).toBe(true);
      }
    });
  });

  describe('requiredValues(loader)', () => {
    beforeEach(() => {
      values = list.requiredValues(value => value.toUpperCase());
    });

    it('returns the processed values', () => {
      expect(values).toEqual(['ITEM', 'OTHER']);
    });

    it('touches the element', () => {
      expect(list._touched).toBe(true);
    });

    it('touches all list items', () => {
      for(const item of list.items()) {
        expect(item._touched).toBe(true);
      }
    });
  });

  describe('length()', () => {
    it('returns the number of items', () => {
      expect(list.length()).toBe(2);
    });
  });

  describe('raw()', () => {
    it('returns a native object representation', () => {
      expect(list.raw()).toEqual({ list: ['item', 'other'] });
    });
  });

  describe('toString()', () => {
    it('returns a debug abstraction', () => {
      expect(list.toString()).toEqual('[object List key=list items=2]');
    });
  });

  describe('toStringTag symbol', () => {
    it('returns a custom tag', () => {
      expect(Object.prototype.toString.call(list)).toEqual('[object List]');
    });
  });

  describe('touch()', () => {
    beforeEach(() => {
      list.touch();
    });

    it('touches the list itself', () => {
      expect(list._touched).toBe(true);
    });

    it('touches the list items', () => {
      for(const item of list.items()) {
        expect(item._touched).toBe(true);
      }
    });
  });
});
