/* eslint no-unused-expressions:0 */
import {expect} from 'chai';
import <%= pascal_name %> from '../src/<%= component_name %>';

describe('<%= component_name %> component test suite', () => {

  describe('<%= component_name %>', () => {
    it('should be loaded properly', () => {
      expect(<%= pascal_name %>).to.not.be.undefined;
    });
  });

});
