'use strict';

var should = require('should');
var hmongspellchecker = require('../lib/spellchecker');

describe('Invalid Hmong words', function () {
    it('empty string', function () {
        hmongspellchecker.check('', function (result) {
            result.should.equal(false);
        });
    });

    it('null', function () {
        hmongspellchecker.check(null, function (result) {
            result.should.equal(false);
        });
    })

    it('only spaces', function () {
        hmongspellchecker.check('   ', function (result) {
            result.should.equal(false);
        });
    });

    it('only special characters', function () {
        hmongspellchecker.check('!@#$%', function (result) {
            result.should.equal(false);
        });
    });

    it('only integers', function () {
        hmongspellchecker.check(12345, function (result) {
            result.should.equal(false);
        });
    });

    it('only decimal', function () {
        hmongspellchecker.check(12.345, function (result) {
            result.should.equal(false);
        });
    });

    it('only unicode', function() {
        hmongspellchecker.check('\u03A9', function (result) {
            result.should.equal(false);
        });
    })

    it('invalid word - "Stuffed"', function () {
        hmongspellchecker.check('Stuffed', function (result) {
            result.should.equal(false);
        });
    });

    it('invalid word - "Chicken"', function () {
        hmongspellchecker.check('Chicken', function (result) {
            result.should.equal(false);
        });
    });

    it('invalid word - "Wings"', function () {
        hmongspellchecker.check('Wings', function (result) {
            result.should.equal(false);
        });
    });

    it('invalid word - "I"', function () {
        hmongspellchecker.check('I', function (result) {
            result.should.equal(false);
        });
    });

    it('invalid word - "LoVe"', function () {
        hmongspellchecker.check('LoVe', function (result) {
            result.should.equal(false);
        });
    });

    it('invalid word - "march"', function () {
        hmongspellchecker.check('march', function (result) {
            result.should.equal(false);
        });
    });

    it('invalid word - "B1rthD4y5"', function () {
        hmongspellchecker.check('B1rthD4y5', function (result) {
            result.should.equal(false);
        });
    });
});

describe('Valid Hmong words', function () {
    describe('hmong white words', function () {
        it('valid word - "kooj"', function () {
            hmongspellchecker.check('kooj', function (result) {
                result.should.equal(true);
            });
        });

        it('valid word - "tis"', function () {
            hmongspellchecker.check('tis', function (result) {
                result.should.equal(true);
            });
        });

        it('valid word - "qaib"', function () {
            hmongspellchecker.check('qaib', function (result) {
                result.should.equal(true);
            });
        });

        it('valid word - "LIAB"', function () {
            hmongspellchecker.check('LIAB', function (result) {
                result.should.equal(true);
            });
        });

        it('valid word - "nTsUaB"', function () {
            hmongspellchecker.check('nTsUaB', function (result) {
                result.should.equal(true);
            });
        });
    });

    describe('hmong green words', function () {
        it('valid word - "dlaab"', function () {
            hmongspellchecker.check('dlaab', function (result) {
                result.should.equal(true);
            });
        });

        it('valid word - "XAAV"', function () {
            hmongspellchecker.check('XAAV', function (result) {
                result.should.equal(true);
            });
        });

        it('valid word - ""', function () {
            hmongspellchecker.check('XAAV', function (result) {
                result.should.equal(true);
            });
        });
    });
});