# Stringman

Stringman (short for "string manipulator") aims to make some of the common types of string manipulation easier. Most of the functionality contained within Stringman isn't particularly difficult to write, but the value it provides lies within the fact that Stringman has an ever-growing collection of functionality that will save you time and headaches. A lot of the typical regular expression scenarios that JavaScript developers encounter are covered here.

Stringman is in the very early stages right now and I am still figuring out how I want to structure this and what functionality to include. Examples of the type of functionality include (but are not limited to):

- validate whether string is url
- return text from inside of parenthesis
- validate whether string is a valid semantic version
- remove an email address from a string
- convert a hex color to rgb and vice versa
- much more

Also, typescript types are included.

## Install

```
npm i -S stringman
```

## Documentation

[https://jgdigitaljedi.github.io/stringman/](https://jgdigitaljedi.github.io/stringman/)

## Contributing

I haven't though too much about this yet as the project is very young. Just contact me if you are interested in contributing.

## Functionality

Stringman is written in modules with a variety of functionality and that can be imported individually. See the documentation for more details and usage examples.

#### colors module

- rgbToHex => Takes rgb color values and returns hexidecimal equivalent
- isHex => Takes a string and returns boolean indicating whether it is a valid hexidecimal color
- hexToRgb => Takes a hexidecimal color string and returns the rgb value
- luminance => Takes a hex color value and a percentage and returns a hex color string that is the result of lightening or darkening the original color by the percentage. Does not work on black or white (yet)!

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
