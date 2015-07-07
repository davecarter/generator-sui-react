import React from 'react';
import TestUtils from 'react/lib/ReactTestUtils';
import {createComponent} from './utilities';
import expect from 'expect';
import <%= pascal_name %> from '../src/<%= component_name %>';

describe('<%= component_name %> component test suite', function () {

  describe('loading', function() {
    it('component is loaded properly', function () {
      expect(<%= pascal_name %>).toNotBe(undefined);
    });
  });

  describe('<%= component_name %> renders properly', function () {
    let component;

    beforeEach(() => {
      component = createComponent(<%= pascal_name %>);
    });

    afterEach(() => {
      component = null;
    });

    it('renders correctly', function() {
      expect(component).toExist();
    });
  });
});
