'use strict';

var postcss = require('postcss');
var syntax = require('postcss-scss');
var globalVars = require('./');
var assume = require('assume');

function check(input, output, opts) {
  var processor = postcss([globalVars(opts)]);
  assume(processor.process(input, { syntax: syntax }).css).equals(output);
};

describe('postcss-global-scss-vars', function () {

  it('injects variables correctly', function () {
    check('/* test code */', '$varOne: #FFF;\n$varTwo: #000\n/* test code */', {
      variables: {
        varOne: '#FFF',
        varTwo: '#000'
      }
    });
  });

});
