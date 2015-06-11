var assert = require("assert");
var React = require('react');
var TestUtils = require('react/lib/ReactTestUtils');
var expect = require('expect');
var <%= pascal_name %> = require('../src/<%= component_name %>');


describe('<%= component_name %> component test suite', function () {
  it('loads without problems', function () {
    assert.notEqual(undefined, <%= pascal_name %>);
  });
  
  it('renders into document', function(){
    var root = TestUtils.renderIntoDocument(<<%= pascal_name %> />);
    expect(root).toExist();
  });
});