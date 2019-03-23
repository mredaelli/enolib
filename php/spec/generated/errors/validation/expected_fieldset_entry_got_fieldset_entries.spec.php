<?php declare(strict_types=1);

describe('Expecting a fieldset entry but getting two fieldset entries', function() {
  it('throws the expected ValidationError', function() {
    $error = null;

    $input = "fieldset:\n" .
             "entry = value\n" .
             "entry = value";

    try {
      Enolib\Parser::parse($input)->fieldset('fieldset')->entry('entry');
    } catch(Enolib\ValidationError $_error) {
      $error = $_error;
    }

    expect($error)->toBeAnInstanceOf('Enolib\ValidationError');
    
    $text = "Only a single fieldset entry with the key 'entry' was expected.";
    
    expect($error->text)->toEqual($text);
    
    $snippet = "   Line | Content\n" .
               "      1 | fieldset:\n" .
               " >    2 | entry = value\n" .
               " >    3 | entry = value";
    
    expect($error->snippet)->toEqual($snippet);
    
    $selection = [[1,0], [1,13]];
    
    expect($error->selection)->toEqual($selection);
  });
});

describe('Expecting a fieldset entry but getting two fieldset entries with comments, empty lines and continuations', function() {
  it('throws the expected ValidationError', function() {
    $error = null;

    $input = "fieldset:\n" .
             "> comment\n" .
             "entry = value\n" .
             "\\ continuation\n" .
             "\\ continuation\n" .
             "\n" .
             "> comment\n" .
             "entry = value\n" .
             "| continuation";

    try {
      Enolib\Parser::parse($input)->fieldset('fieldset')->entry('entry');
    } catch(Enolib\ValidationError $_error) {
      $error = $_error;
    }

    expect($error)->toBeAnInstanceOf('Enolib\ValidationError');
    
    $text = "Only a single fieldset entry with the key 'entry' was expected.";
    
    expect($error->text)->toEqual($text);
    
    $snippet = "   Line | Content\n" .
               "      1 | fieldset:\n" .
               "      2 | > comment\n" .
               " >    3 | entry = value\n" .
               " *    4 | \\ continuation\n" .
               " *    5 | \\ continuation\n" .
               "      6 | \n" .
               "      7 | > comment\n" .
               " >    8 | entry = value\n" .
               " *    9 | | continuation";
    
    expect($error->snippet)->toEqual($snippet);
    
    $selection = [[2,0], [4,14]];
    
    expect($error->selection)->toEqual($selection);
  });
});