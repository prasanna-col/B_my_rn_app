import React from 'react';
import { TextInput } from 'react-native'
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

import { render, fireEvent, cleanup } from '@testing-library/react-native';

// it('does stuff', () => {
//   const mock = jest.fn()
//   const component = render(<EmailInput validateEmail={mock} />)
//   fireEvent.changeText(component.findByType('TextInput'), 'test')
//   expect(mock).toHaveBeenCalledWith('test')
// })

afterEach(cleanup);

describe('<EmailInput />', () => {
  it('should match the snapshot', () => {
    const rendered = render(<EmailInput value={'abacaba'} />).toJSON();
    
    expect(rendered).toMatchSnapshot();
  });
  
  it('should fire onChange events', () => {
    const onChange = jest.fn();
    const rendered = render(<EmailInput onChangeText={onChange} />);
    const inputComponent = rendered.getByTestId('email-input');
    
    fireEvent(inputComponent, 'changeText', 'new text');
    
    // expect(onChange).toHaveBeenCalledWith('new text');
    expect(onChange).toHaveValue("test@mail.com");
  });
  
  it('should fire onSubmit events', () => {
    const onSubmit = jest.fn();
    const rendered = render(<EmailInput validateEmail={onSubmit} />);
    const buttonComponent = rendered.getByTestId('submit-btn');
    
    fireEvent(buttonComponent, 'press');
    
    // expect(onSubmit).toHaveBeenCalledWith('');
    expect(onSubmit).toHaveBeenCalled();
  });
});


// let total = 1 + 1

// it('should run test flawlessly', () => {
//     expect(total).toBe(2)
// })

// it('should fail the test', () => {
//     expect(total).toBe(2)
// })