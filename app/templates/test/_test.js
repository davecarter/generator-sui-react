import expect from 'expect';
import <%= pascal_name %> from '../src/<%= component_name %>';
import React from 'react';
import {createComponent, shallowRender} from './utilities';

describe('<%= component_name %> component test suite', function () {

  describe('loading', function() {
    it('all components are loaded properly', function () {
      expect(<%= pascal_name %>).toNotBe(undefined);
    });
  });

  describe('<%= pascal_name %> component', function() {
    let card;

    beforeEach(() => {
      card = shallowRender(<%= pascal_name %>, { landscapeLayout: false });
    });

    afterEach(() => {
      card = null;
    });

    it('renders correctly', function() {
      expect(card).toExist();
    });
  });
});
