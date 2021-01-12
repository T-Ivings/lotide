# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @kingphazer/lotide`

**Require it:**

`const _ = require('@kingphazer/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `head(...)`: returns first element in array
* `tail(...)`: returns the array minus the first element
* `middle(...)`: returns the middle of an array, two elements max
* `assertArraysEqual(...)`: assertion test between two arrays
* `assertEqual(...)`: assertion test between primitives
* `assertObjectsEqual(...)`: assertion test between two objects
* `countLetters(...)`: counts each letter in a string and returns a count of each unique letter
* `countOnly(...)`: same as count letters only counts an array of 'items' instead and returns a unique count
* `eqArrays(...)`: checks if two arrays are equal
* `findKey(...)`: searches for a key in an array with a matching value, and returns the key
* `findKeyByValue(...)`: searches for key by value
* `flatten(...)`: unnests nested arrays
* `letterPositions(...)`: returns letters in the position they first appear in a string, as well as return a count of repeats
* `map(...)`: breaks an array into singular arrays and returns set numbers
* `takeUntil(...)`: takes in an array and a user set "break" and only returns array until said break
* ` without(...)`: compares two arrays and returns the first array minus similar elements from the second array

 