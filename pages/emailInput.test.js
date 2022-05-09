import React from 'react';
import {TextInput} from 'react-native'
// import App from './App'
import EmailInput from './emailInput'
// import {shallow} from 'enzyme';
// const Enzyme = require('enzyme');
// const EnzymeAdapter = require('enzyme-adapter-react-15');

// Setup enzyme's react adapter
// Enzyme.configure({ adapter: new EnzymeAdapter() });

// const mock = jest.fn();
// const wrapper = shallow(<App validateEmail={mock} />);
// wrapper.find('TextInput').simulate('changeText', 'abc@yop.in');
// expect(mock).toHaveBeenCalledWith('abc@yop.in');

// import { render, act, fireEvent } from 'react-native-testing-library'
import {render, fireEvent} from '@testing-library/react-native';
it ('does stuff', () => {
    const mock = jest.fn()
    const component = render(<EmailInput validateEmail={mock}/>)
    fireEvent.changeText(component.findByType(TextInput), 'test')
    expect(mock).toHaveBeenCalledWith('test')
  })


// let total = 1 + 1

// it('should run test flawlessly', () => {
//     expect(total).toBe(2)
// })

// it('should fail the test', () => {
//     expect(total).toBe(2)
// })