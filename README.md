# chi-parse

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

