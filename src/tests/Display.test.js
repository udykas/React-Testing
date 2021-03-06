import React from 'react';
import ReactDOM from 'react-dom';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Display from '../components/Display/Display';

Enzyme.configure({ adapter: new Adapter() });

describe('<Display />', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Display />, div);
  });
  it('should have two divs', () => {
    const display = shallow(<Display />);
    expect(display.find('div').length).toBe(2);
  })
  it('should display the given value', () => {
    const display = shallow(<Display value="Hello World!" />);
    expect(display.contains(<div>Hello World!</div>)).toBe(true);
  })
});