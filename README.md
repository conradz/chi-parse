# chi-parse

[![NPM](https://nodei.co/npm/chi-parse.png?compact=true)](https://nodei.co/npm/chi-parse/)

[![Build Status](https://drone.io/github.com/conradz/chi-parse/status.png)](https://drone.io/github.com/conradz/chi-parse/latest)
[![Dependency Status](https://gemnasium.com/conradz/chi-parse.png)](https://gemnasium.com/conradz/chi-parse)

[![Selenium Test Status](https://saucelabs.com/browser-matrix/chi-parse.svg)](https://saucelabs.com/u/chi-parse)

Parse a string containing HTML into a single DOM node.

It will take care of handling nodes that can only be parsed in certain
contexts, such as `<td>` and `<tr>` nodes.

Warning: This treats the text as HTML source, make sure all input data is
trusted!

## Example

```js
var parse = require('chi-parse');

var src = '<p>Hello World!</p>',
    node = parse(src);

console.log(node.tagName); // "P"
```

## Reference

    parse(source)

Parses the HTML source specified by `source` into a single DOM node. If the
source contains none or more than one DOM elements, it will return `null`. Note
that this will ignore non-element nodes, such as text nodes, etc.

