var assert = require("assert");
var React = require('react');
var TestUtils = require('react/lib/ReactTestUtils');
var expect = require('expect');
var <%= component_name %> = require('../src/<%= component_name %>');


describe('<%= component_name %> component test suite', function () {
  it('loads without problems', function () {
    assert.notEqual(undefined, <%= component_name %>);
  });
});