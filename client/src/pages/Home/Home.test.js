import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });
import React from 'react';
import { shallow } from 'enzyme';
import Home from './Home';
describe('First React component test with Enzyme', () => {
  it('renders without crashing', () => {
     shallow(<Home />);
   });
});