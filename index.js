module.exports = parse;

var TAG_MATCH = /^\s*<([a-zA-Z\-]+)(?:\s|>)/,
    document = window.document;

function getTag(source) {
    var match = TAG_MATCH.exec(source);
    if (match) {
        return match[1];
    }
}

function getNode(source) {
    var container = document.createElement('div');
    container.innerHTML = source;
    if (container.children.length !== 1) {
        return null;
    }

    var item = container.children[0];
    container.removeChild(item);
    return item;
}

function wrap(source, levels) {
    var node = getNode(source);
    if (!node) {
        return null;
    }

    while (levels--) {
        if (node.children.length !== 1) {
            return null;
        }

        node = node.children[0];
    }

    return node;
}

function parse(source) {
    // Hacky way to parse special cases of tags
    // Cleaner way would be to create the required parent (e.g. `<tr>`) and set
    // innerHTML, but this does not work in IE 9
    var tag = getTag(source);
    if (tag === 'td') {
        return wrap('<table><tbody><tr>' + source + '</tr></tbody></table', 3);
    } else if (tag === 'tr') {
        return wrap('<table><tbody>' + source + '</tbody></table>', 2);
    }

    return getNode(source);
}
