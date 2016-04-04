# postcss-global-scss-vars

Inject global variables into your scss using postcss. This is a `postcss` plugin for the `postcss-scss` syntax which prepends variables into any `scss` file. e.g.

``` scss
/* Any scss content */
```

becomes

``` scss
$anyVariable: #000;
$otherVariable: #FFF;
$heyAVariable: #333;
/* Any scss content */
```

## Usage

Simple usage can be inferred from the tests:

``` js
var postcss = require('postcss');
var syntax = require('postcss-scss');
var globalVars = require('postcss-global-scss-vars');

var injectVars = globalVars({
  variables: {
    anyVariable: '#000',
    otherVariable: '#FFF',
    heyAVariable: '#333'
  }
});

var processor = postcss([injectVars]);
var output = processor.process('/* Any scss content */', { syntax: syntax });
console.log(output.css);
```


##### LICENSE: MIT
##### AUTHOR: [Charlie Robbins](https://github.com/indexzero)
