'use strict';

var assert = require('assert');
var hasAttributeSelector = require('..');

var attributeSelectors = [
  '[hidden]',
  '[disabled]',
  '[type="string"]'
]

var noAttributeSelectors = [
  'foo',
  '#bar',
  'li > li',
  '[]'
]

describe('has-attribute-selector', function() {

  it('should do something return true when an attribute selector exists', function() {
    attributeSelectors.forEach(function(selector) {
      assert.ok(hasAttributeSelector(selector))
    })
  })

  it('should do something return false when no attribute selector exists', function() {
    noAttributeSelectors.forEach(function(selector) {
      assert.ok(!hasAttributeSelector(selector))
    })
  })
})
