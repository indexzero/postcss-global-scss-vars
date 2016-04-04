'use strict';

var postcss = require('postcss');
var debug = require('diagnostics')('postcss-global-scss-vars');

module.exports = postcss.plugin('postcss-global-scss-vars', function (opts) {
  opts = opts || {};
  opts.variables = opts.variables || {}

  return function (css, result) {
    var decls = Object.keys(opts.variables)
      .map(function (prop) {
        debug(prop, opts.variables[prop]);
        return postcss.decl({ prop: '$' + prop, value: opts.variables[prop] });
      });

    debug(decls);
    css.prepend(decls);
  };
});
