import React from 'react';
import renderer from 'react-test-renderer';
import Adapter from 'enzyme-adapter-react-16';
import { configure, shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

configure({ adapter: new Adapter() });

import BitcoinWidget from './bitcoinWidget';

let wrapper;

const props = {
  logo: 'foo',
  coin: {
    price: 0
  },
  refresh: jest.fn()
};

describe('<BitcoinWidget /> layout', () => {

  beforeEach(() => {
    wrapper = shallow(<BitcoinWidget {...props}/>);
  });

  it('renders correct markup', () => {
    expect(wrapper.find('header').length).toBe(1);
    expect(wrapper.find('button').length).toBe(1);
  });

  it('should render a component matching the snapshot', () => {
    const tree = toJson(wrapper);
    expect(tree).toMatchSnapshot();
    expect(wrapper).toHaveLength(1);
  });
});
