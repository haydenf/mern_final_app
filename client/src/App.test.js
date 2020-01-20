import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import App from './App';

configure({ adapter: new Adapter() });

const setup = (props={}, state=null) => {
      return shallow(<App {...props} /> )
  }
  
  const findByTestAttr = (wrapper, val) => {
      return wrapper.find(`[data-test="${val}"]`);
  }

  test('renders without crashing', () => {
        const wrapper = setup();
        const appComponent = findByTestAttr(wrapper, 'component-app')
        expect(appComponent.length).toBe(1)
    });

  test('renders increment button', () => {
        const wrapper = setup();
        const button = findByTestAttr(wrapper, 'button')
        expect(button.length).toBe(1)
    });