module.exports = parse;

var TAG_MATCH = /^\s*<([a-zA-Z\-]+)(?:\s|>)/

// Override container type for tags that can only be parsed in special
// contexts.
var parentTags = {
    'td': 'tr',
    'tr': 'tbody'
}

function getTag(source) {
    var match = TAG_MATCH.exec(source);
    if (match) {
        return match[1];
    }
}

function createContainer(source) {
    var tag = getTag(source),
        parent = parentTags.hasOwnProperty(tag) ? parentTags[tag] : 'div';
    return document.createElement(parent);
}

function parse(source) {
    var container = createContainer(source);
    container.innerHTML = source;

    if (container.children.length !== 1) {
        return null;
    }

    var item = container.children[0];
    container.removeChild(item);
    return item;
}
