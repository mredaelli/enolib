//  GENERATED ON 2019-02-27T11:40:28 - DO NOT EDIT MANUALLY

exports.en = {
  contentHeader: 'Content',
  gutterHeader: 'Line',
  missingComment: 'A required comment for this element is missing.',
  unexpectedElement: 'This element was not expected, make sure it is at the right place in the document and that its key is not mis-typed.',
  commentError: (message) => `There is a problem with the comment of this element: ${message}`,
  cyclicDependency: (line, key) => `In line ${line} '${key}' is copied into itself.`,
  elementError: (message) => `There is a problem with this element: ${message}`,
  expectedElementGotElements: (key) => `Instead of the expected single element '${key}' several elements with this key were found.`,
  expectedFieldGotFields: (key) => `Instead of the expected single field '${key}' several fields with this key were found.`,
  expectedFieldGotFieldset: (key) => `Instead of the expected field '${key}' a fieldset with this key was found.`,
  expectedFieldGotList: (key) => `Instead of the expected field '${key}' a list with this key was found.`,
  expectedFieldGotSection: (key) => `Instead of the expected field '${key}' a section with this key was found.`,
  expectedFieldsGotFieldset: (key) => `Only fields with the key '${key}' were expected, but a fieldset with this key was found.`,
  expectedFieldsGotList: (key) => `Only fields with the key '${key}' were expected, but a list with this key was found.`,
  expectedFieldsGotSection: (key) => `Only fields with the key '${key}' were expected, but a section with this key was found.`,
  expectedFieldsetEntryGotFieldsetEntries: (key) => `Instead of the expected single fieldset entry '${key}' several fieldset entries with this key were found.`,
  expectedFieldsetGotField: (key) => `Instead of the expected fieldset '${key}' a field with this key was found.`,
  expectedFieldsetGotFieldsets: (key) => `Instead of the expected single fieldset '${key}' several fieldsets with this key were found.`,
  expectedFieldsetGotList: (key) => `Instead of the expected fieldset '${key}' a list with this key was found.`,
  expectedFieldsetGotSection: (key) => `Instead of the expected fieldset '${key}' a section with this key was found.`,
  expectedFieldsetsGotField: (key) => `Only fieldsets with the key '${key}' were expected, but a field with this key was found.`,
  expectedFieldsetsGotList: (key) => `Only fieldsets with the key '${key}' were expected, but a list with this key was found.`,
  expectedFieldsetsGotSection: (key) => `Only fieldsets with the key '${key}' were expected, but a section with this key was found.`,
  expectedListGotField: (key) => `Instead of the expected list '${key}' a field with this key was found.`,
  expectedListGotFieldset: (key) => `Instead of the expected list '${key}' a fieldset with this key was found.`,
  expectedListGotLists: (key) => `Instead of the expected single list '${key}' several lists with this key were found.`,
  expectedListGotSection: (key) => `Instead of the expected list '${key}' a section with this key was found.`,
  expectedListsGotField: (key) => `Only lists with the key '${key}' were expected, but a field with this key was found.`,
  expectedListsGotFieldset: (key) => `Only lists with the key '${key}' were expected, but a fieldset with this key was found.`,
  expectedListsGotSection: (key) => `Only lists with the key '${key}' were expected, but a section with this key was found.`,
  expectedSectionGotEmpty: (key) => `Instead of the expected section '${key}' an empty element with this key was found.`,
  expectedSectionGotField: (key) => `Instead of the expected section '${key}' a field with this key was found.`,
  expectedSectionGotFieldset: (key) => `Instead of the expected section '${key}' a fieldset with this key was found.`,
  expectedSectionGotList: (key) => `Instead of the expected section '${key}' a list with this key was found.`,
  expectedSectionGotSections: (key) => `Instead of the expected single section '${key}' several sections with this key were found.`,
  expectedSectionsGotEmpty: (key) => `Only sections with the key '${key}' were expected, but an empty element with this key was found.`,
  expectedSectionsGotField: (key) => `Only sections with the key '${key}' were expected, but a field with this key was found.`,
  expectedSectionsGotFieldset: (key) => `Only sections with the key '${key}' were expected, but a fieldset with this key was found.`,
  expectedSectionsGotList: (key) => `Only sections with the key '${key}' were expected, but a list with this key was found.`,
  invalidLine: (line) => `Line ${line} does not follow any specified pattern.`,
  keyError: (message) => `There is a problem with the key of this element: ${message}`,
  missingElement: (key) => `The element '${key}' is missing - in case it has been specified look for typos and also check for correct capitalization.`,
  missingElementForContinuation: (line) => `Line ${line} contains a line continuation without a continuable element being specified before.`,
  missingField: (key) => `The field '${key}' is missing - in case it has been specified look for typos and also check for correct capitalization.`,
  missingFieldValue: (key) => `The field '${key}' must contain a value.`,
  missingFieldset: (key) => `The fieldset '${key}' is missing - in case it has been specified look for typos and also check for correct capitalization.`,
  missingFieldsetEntry: (key) => `The fieldset entry '${key}' is missing - in case it has been specified look for typos and also check for correct capitalization.`,
  missingFieldsetEntryValue: (key) => `The fieldset entry '${key}' must contain a value.`,
  missingFieldsetForFieldsetEntry: (line) => `Line ${line} contains a fieldset entry without a fieldset being specified before.`,
  missingList: (key) => `The list '${key}' is missing - in case it has been specified look for typos and also check for correct capitalization.`,
  missingListForListItem: (line) => `Line ${line} contains a list item without a list being specified before.`,
  missingListItemValue: (key) => `The list '${key}' may not contain empty items.`,
  missingSection: (key) => `The section '${key}' is missing - in case it has been specified look for typos and also check for correct capitalization.`,
  nonSectionElementNotFound: (line, key) => `In line ${line} the non-section element '${key}' should be copied, but it was not found.`,
  sectionHierarchyLayerSkip: (line) => `Line ${line} starts a section that is more than one level deeper than the current one.`,
  sectionNotFound: (line, key) => `In line ${line} the section '${key}' should be copied, but it was not found.`,
  twoOrMoreTemplatesFound: (key) => `There are at least two elements with the key '${key}' that qualify for being copied here, it is not clear which to copy.`,
  unterminatedEscapedKey: (line) => `In line ${line} the key of an element is escaped, but the escape sequence is not terminated until the end of the line.`,
  unterminatedMultilineField: (key, line) => `The multiline field '${key}' starting in line ${line} is not terminated until the end of the document.`,
  valueError: (message) => `There is a problem with the value of this element: ${message}`
};