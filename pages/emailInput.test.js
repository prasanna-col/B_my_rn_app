import React from 'react';
import EmailInput from './emailInput'
// import {shallow} from 'enzyme';
const Enzyme = require('enzyme');
const EnzymeAdapter = require('enzyme-adapter-react-15');

// Setup enzyme's react adapter
Enzyme.configure({ adapter: new EnzymeAdapter() });

const mock = jest.fn();
const wrapper = Enzyme.shallow(<EmailInput validateEmail={mock} />);
wrapper.find('TextInput').simulate('changeText', 'abc@yop.in');
expect(mock).toHaveBeenCalledWith('abc@yop.in');

// import { render, act, fireEvent } from 'react-native-testing-library'

// it ('does stuff', () => {
//     const mock = jest.fn()
//     const component = render(<EmailInput validateEmail={mock}/>)
//     fireEvent.changeText(component.findByType(TextInput), 'test')
//     expect(mock).toHaveBeenCalledWith('test')
//   })