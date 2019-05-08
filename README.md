# fntstring

[![](https://img.shields.io/circleci/project/github/btk5h/fntstring/master.svg?style=flat-square&logo=circleci)](https://circleci.com/gh/btk5h/fntstring)
[![](https://img.shields.io/codeclimate/maintainability/btk5h/fntstring.svg?style=flat-square&logo=code-climate)](https://codeclimate.com/github/btk5h/fntstring)
[![](https://img.shields.io/codecov/c/github/btk5h/fntstring.svg?style=flat-square&logo=codecov)](https://codecov.io/gh/btk5h/fntstring)

## Motivation

This library was built from a need to construct many large strings with many parameters. In a few projects, I found
myself writing many functions that look like this:

```js
function formatUser({ user }) { /* ... */ }
function formatTime({ startDate, endDate }) { /* ... */ }
function formatPreferences({ preferences }) { /* ... */ }
function pluralizePreference({ preferences }) { /* ... */ }

function greet(context) {
  const formattedUser = formatUser(context)
  const formattedTime = formatTime(context)
  const formattedPreferences = formatPreferences(context)
  const pluralizedPreference = pluralizePreference(context)
  
  return `Hi ${formattedUser}, ${formattedTime} and ${pluralizedPreference} ${formattedPreferences}`
}
```

fntstring simplifies that design pattern by taking away all of the boilerplate:

```js
function formatUser({ user }) { /* ... */ }
function formatTime({ startDate, endDate }) { /* ... */ }
function formatPreferences({ preferences }) { /* ... */ }
function pluralizePreference({ preferences }) { /* ... */ }

const greet = fnt`Hi ${formatUser}, ${formatTime} and ${pluralizePreference} ${formatPreferences}`
```

## Usage

```js
import { fnt, get, firstOf } from "fntstring"

const name = fnt`${get("firstName")} ${get("lastName")}`
const greet = fnt`Hello, ${firstOf(name, get())}` // fntstrings are composable!

greet({ firstName: "John", lastName: "Doe" }) // "Hello, John Doe"
greet("world") // "Hello, world"
```

## API

All of fntstring's APIs are accessible as named exports.

### fnt

> ``fnt`tagged template` => (context: Object) => String``

### get

> `get(key: String) => (context: Object) => String`

### firstOf

> `firstOf(...expressions: Object) => (context: Object) => String`

### list, listAnd, listOr

> `list(key: String, options: String) => (context: Object) => String`

> `listAnd(key: String) => (context: Object) => String`

> `listOr(key: String) => (context: Object) => String`

### pipe

> `pipe<Output>(...steps: Function) => (context: Object) => Output`
