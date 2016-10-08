# hmong-spellchecker
A NPM module to check if a word is a Romanized Hmong word using this simple regular expression:
```
'\b([flsvyz]|[cdkpqrt]h?|[hm]l?|(pl)h?|(hm)l?|(hn)y?|[nx]y?|(nc)h?|(nk)h?|(np)[hl]?|(nplh)|(nq)h?|(nr)h?|(nt)[hsx]?|(ntsh)|(ntxh)|(t[sx]?h?))?(a[iuw]?|ee?|ia?|oo?|ua?|w){1}[bdgjmsv]?\b'
``` 

# Installation
```
$ npm install hmong-spellchecker
```

# Usage
```
var hsc = require('hmong-spellchecker');

hsc.check('qaib'); // true
hsc.check('chicken'); // false
```

# Method
```
check(word) - Checks word against regular expression and returns true if it matches else false
```

# Testing
```
$ mocha tests/spellchecker.js
```

# Notes

1) There are only XX amount of beginning consonants in a Romanized Hmong word
2) There are only XX amount of vowels in the middle of a Romanized Hmong word
3) There are only X amount of ending tones in a Romanized Hmong word

There are a few Hmong dialects around the world. The two most popular one, in America at least, are Hmong White (dawb) and Hmong Green (lees). The regular expression above accounts for both dialects.

# Contributers
