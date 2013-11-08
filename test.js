'use strict';

var test = require('tape'),
    parse = require('./');

test('create div element', function(t) {
    var el = parse('<div>test</div>');
    t.equal(el.tagName, 'DIV');
    t.equal(el.innerHTML, 'test');
    t.equal(el.parentNode, null);
    t.end();
});

test('include attributes', function(t) {
    var el = parse('<div class="test"></div>');
    t.equal(el.tagName, 'DIV');
    t.equal(el.className, 'test');
    t.end();
});

test('return null when no elements', function(t) {
    var el = parse('test');
    t.equal(el, null);
    t.end();
});

test('return null when multiple elements', function(t) {
    var el = parse('<div></div><div></div>');
    t.equal(el, null);
    t.end();
});

test('parse non-terminated element', function(t) {
    var el = parse('<p>');
    t.equal(el.tagName, 'P');
    t.end();
});

/* Test problematic elements */
test('create td element', function(t) {
    var el = parse('<td></td>');
    t.equal(el.tagName, 'TD');
    t.end();
});

test('create tr element', function(t) {
    var el = parse('<tr></tr>');
    t.equal(el.tagName, 'TR');
    t.end();
});

test('create style element', function(t) {
    var el = parse('<style>.h1 { }</style>');
    t.equal(el.tagName, 'STYLE');
    t.end();
});

test('create script element', function(t) {
    var el = parse('<script>"hello world";</script>');
    t.equal(el.tagName, 'SCRIPT');
    t.end();
});

test('create link element', function(t) {
    var el = parse('<link>');
    t.equal(el.tagName, 'LINK');
    t.end();
});
