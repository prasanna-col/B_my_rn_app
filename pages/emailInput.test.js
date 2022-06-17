import React from 'react';
import { TextInput } from 'react-native'
import EmailInput from './emailInput'
import renderer, { create } from 'react-test-renderer' // we can use this for (renderer.create)
// import { create} from 'react-test-renderer' // or we can use this directly (create)

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

// describe('<EmailInput />', () => {
//   it('should match the snapshot', () => {
//     const rendered = render(<EmailInput value={'abacaba'} />).toJSON();

//     expect(rendered).toMatchSnapshot();
//   });

//   it('should fire onChange events', () => {
//     const onChange = jest.fn();
//     const rendered = render(<EmailInput onChangeText={onChange} />);
//     const inputComponent = rendered.getByTestId('email-input');

//     fireEvent(inputComponent, 'changeText', 'new text');

//     // expect(onChange).toHaveBeenCalledWith('test@mail.com');
//     // expect(onChange).toHaveValue("test@mail.com");
//   });

//   it('should fire onSubmit events', () => {
//     const onSubmit = jest.fn();
//     const rendered = render(<EmailInput validateEmail={onSubmit} />);
//     const buttonComponent = rendered.getByTestId('submit-btn');

//     fireEvent(buttonComponent, 'press');

//     // expect(onSubmit).toHaveBeenCalledWith('');
//     // expect(onSubmit).toHaveBeenCalled();
//   });


// });

describe('TextInput property check', () => {

  it('should find the button via testId', () => {
    const testIdName = 'email-input';

    const { getByTestId } = render(<EmailInput />);

    const foundButton = getByTestId(testIdName);

    expect(foundButton).toBeTruthy();
  });

  it("validateEmail function",()=>{
    let Valid = create(<EmailInput/>).getInstance();

    let input1="abc.com"
    let input2="abc@as.s"
    let input3="abc@as.in"
    let input4="a@g.c"


    // expect(Valid.validateEmail(input1)).toEqual(false)
    // expect(Valid.props.validateEmail(input1)).toEqual(false)
    expect(Valid.validateEmail(input1) ).toEqual(false)
  })

  test("function test testID",()=>{
    let FuncTest = create(<EmailInput/>).getInstance();
    expect(FuncTest.instance.dataFunc(5)).toBe(10)
  })

})

describe('Button property check', () => {

  it('should find the button via testId', () => {
    const testIdName = 'submit-btn';

    const { getByTestId } = render(<EmailInput />);

    const foundButton = getByTestId(testIdName);

    expect(foundButton).toBeTruthy();
  });

  it('should find the button via accessibilityLabel', () => {
    const accessibilityLabel = 'SubmitLabel';

    const { getByA11yLabel } = render(<EmailInput />);

    const foundButton = getByA11yLabel(accessibilityLabel);

    expect(foundButton).toBeTruthy();
  });

  it('should find the button title', () => {
    const title = 'Submit';

    const { getByText } = render(<EmailInput />);

    const foundButtonTitle = getByText(title);

    expect(foundButtonTitle.props.children).toEqual(title);
  });

})

describe('Snap component', () => {
  it('Component: renders correctly', () => {
    const tree = renderer.create(<EmailInput />).toJSON();
    expect(tree).toMatchSnapshot();
  });
})



// describe('Your component', () => {
//   it('Component: renders correctly', () => {
//     const tree = renderer.create(<EmailInput />).toJSON();
//     expect(tree).toMatchSnapshot();
//   });

//   it('Has  TextInput', () => {
//     const tree2 = renderer.create(<EmailInput />).toJSON();
//     expect(findElement(tree2, '#email')).toBeDefined();
//   });
// });

// let total = 1 + 1

// it('should run test flawlessly', () => {
//     expect(total).toBe(2)
// })

// it('should fail the test', () => {
//     expect(total).toBe(2)
// })