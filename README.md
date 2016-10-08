# hmong-spellchecker
A NPM module to check if a word is a Romanized Hmong word using this simple regular expression:

```
'\b([flsvyz]|[cdkpqrt]h?|[hm]l?|(pl)h?|(hm)l?|(hn)y?|[nx]y?|(nc)h?|(nk)h?|(np)[hl]?|(nplh)|(nq)h?|(nr)h?|(nt)[hsx]?|(ntsh)|(ntxh)|(t[sx]?h?))?(a[iuw]?|ee?|ia?|oo?|ua?|w){1}[bdgjmsv]?\b'
``` 

1) There are only XX amount of beginning consonants in a Romanized Hmong word
2) There are only XX amount of vowels in the middle of a Romanized Hmong word
3) There are only X amount of ending tones in a Romanized Hmong word

There are a few Hmong dialects around the world. The two most popular one, in America at least, are Hmong White (dawb) and Hmong Green (leeg). The regular expression above accounts for both dialects.

If a word passes the regular expression above, the word will be piped to a dictionary of known, defined Hmong words to make sure that the word is spelled correctly.  