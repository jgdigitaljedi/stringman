# Stringman

Stringman (short for "string manipulator") aims to make some of the common types of string manipulation easier. Most of the functionality contained within Stringman isn't particularly difficult to write, but the value it provides lies within the fact that Stringman has an ever-growing collection of functionality that will save you time and headaches. A lot of the typical regular expression scenarios that JavaScript developers encounter are covered here.

Stringman is in the early stages right now and I am adding functionality fairly regularly while making so I don't make breaking changes to existing methods.

Examples of the type of functionality include (but are not limited to):

- validate whether string is url, email, ip address, fraction, semantic version, and more
- return text from inside or outside of parenthesis
- remove an email address from a string
- convert a hex color to rgb and vice versa
- remove extra whitespace, line breaks, tabs, etc from a string
- validate passwords with given parameters
- return word counts for a given string
- much more

Also, typescript types are included. A full list of funtionality/features is below.

## Install

```
npm i -S stringman
```

## Example usage

The documentation has examples for every single method, but here is a simple example to get an idea of how to use Stringman:

```js
import { parens } from 'stringman'; // const parens = require('stringman').parens;
const noParens = parens.remove('this will come back (and this will be removed)');
console.log(noParens); // 'this will come back'
```

## Documentation

[https://jgdigitaljedi.github.io/stringman/](https://jgdigitaljedi.github.io/stringman/)
If you have further questions, viewing the [tests in the repo](https://github.com/jgdigitaljedi/stringman/tree/master/src/__tests__) can really clear some things up as well.

## Contributing

I haven't though too much about this yet as the project is very young. Just contact me if you are interested in contributing.

## Functionality

Stringman is written in modules with a variety of functionality and that can be imported individually. See the documentation in the link above for more details and usage examples.

#### colors module

- rgbToHex => Takes rgb color values and returns hexidecimal equivalent
- isHex => Takes a string and returns boolean indicating whether it is a valid hexidecimal color
- hexToRgb => Takes a hexidecimal color string and returns the rgb value
- luminance => Takes a hex color value and a percentage and returns a hex color string that is the result of lightening or darkening the original color by the percentage. Does not work on black or white (yet)!
- hexToHsl => Takes a string representing a hex color code and returns the hsl equivalent in an object with keys for h, s, and l
- rgbToHsl => Takes each of the 3 rgb number values as individual arguments and returns the hsl equivalent in an object with keys for h, s, and l

#### email module

- retrieve => Takes a string and returns a valid email address if one is present in the string
- isValid => Takes a string and returns boolean to represent whether or not string is a valid email address
- remove => Takes a string and returns the string with any email addresses removed
- swap => Takes 2 strings (a string with an email address and another string) and returns the first string with the email address swapped for the second string

#### ip module

- isValid => Takes a string and returns boolean to represent whether or not string is a valid IP address
- retrieve => Takes a string and returns a valid IP address if one is present in the string
- remove => Takes a string and returns the string with any ip addresses removed
- swap => Takes 2 strings (a string with an IP address and another string) and returns the first string with the IP address swapped for the second string
- expression => optionally takes boolean to add global flag and returns regular expression used for matching an IP address

#### numbers module

- containsNum => returns boolean indicating whether argument contains a number
- whole => Takes a string or a number and returns boolean for whether it is a valid whole number (integer)
- decimal => Takes a string or a number and returns a boolean for whether it is a valid decimal (float)
- fraction => Takes a string and returns a boolean for whether it is a valid fraction.
- containsDecimal => Takes a string and returns boolean indicating whether string contains a decimal (float) somwhere in it
- containsFraction => Takes a string and returns a boolean indicating whether the string contains a fraction
- convertToHex => Takes a number as a string or number form and returns the hexidecimal equivalent
- isPhoneNumber => Takes a string or number and validates whether it is a valid phone number format.

#### parens module

- remove => Takes string and returns string with parenthesis and contain between parenthesis removed
- inside => Takes string and returns array of strings containing what was inside any number of sets of parenthesis
- swap => Takes 2 strings, swaps anything in parenthesis INCLUDING THE PARENTHESIS from the first string with the second string

#### password module

- buildRegex => Takes min, max, and string of special characters and returns a RegExp for validating passwords
- isValid => Takes parameters for building a regular expression then validates the string sent and returns a boolean value
- isValidAdvanced => Validates using regex like isValid but also checks for specific number of different types of characters (slightly slower than 'isValid')

#### semver module

NOTE: This module uses look-behinds right now so it will not work in IE, Edge, and older versions of other browsers. I plan on revisiting this module to see if the same functionality can be achieved without this restriction.

- retrieve => returns semantic version from string if present
- isValid => Tests if argument is valid semantic version
- remove => Removes semantic version from string, trims, and returns result
- expression => Returns RegExp variable used to test for semantic version
- swap => takes 2 strings and returns string with any semantic versions in the first string replaced by the second string

#### url module

- retrieve => Takes string and returns any matches for a valid URL from the string
- isValid => Takes a string and returns whether string is a valid URL as a boolean
- remove => Takes string, removes any URLs, trims, and returns string
- getDomain => Takes url string, tries to return just the domain
- expression => Returns RegExp for testing URLs
- swap => takes a string with a url and a second string, swaps any urls in the first string with the second string, and returns the result

#### whitespace module

- removeBreaks => Takes a string and returns that string with all carriage returns and line breaks removed
- removeTabs => Takes a string and returns that string with alltabs removed
- removeAll => Takes a string and returns that string with all whitespace removed
- singleSpace => Takes a string, replaces all instances or 2 or more consecutive spaces with a single space, and returns string
- replaceWith => Takes a string, an enumerable object with boolean values to detrermine what will be replaced, another string to replace things, and an optional 4th argument for whether it should be returned with multiple consecutive spaces changed to single spaces with and returns the result of replacing the values designated in the 2nd argument with the contents of the 3 argument

#### words module

- specificWordCount => Takes 2 strings and returns a number for the number of times the second string exists in the first string; optionally takes third boolean argument to make case sensitive
- wordCount => Takes a string and returns the number of words in the string as a number
- allWordCount => Takes a string, counts the number of occurences of each word in the string, and returns as an object
