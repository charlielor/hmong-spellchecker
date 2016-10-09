'use strict';

var hmongre = new RegExp('\b([flsvyz]|[cdkpqrt]h?|[hm]l?|(pl)h?|(hm)l?|(hn)y?|[nx]y?|(nc)h?|(nk)h?|(np)[hl]?|(nplh)|(nq)h?|(nr)h?|(nt)[hsx]?|(ntsh)|(ntxh)|(t[sx]?h?))?(a[iuw]?|ee?|ia?|oo?|ua?|w){1}[bdgjmsv]?\b');

// Exporting a named function
module.exports.check = function(word) {
    // If word is null
    if (word === null) {
        return false;
    }

    // If word is not a Number, return regex match else return false
    if (Number.isNaN(word)) {
        return word.match(hmongre);
    } else {
        return false;
    }
};
