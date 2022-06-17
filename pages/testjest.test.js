import React from 'react';
import {cleanup, render} from '@testing-library/react-native';
import renderer, { create } from 'react-test-renderer'
import TestJT from './testjest';

afterEach(cleanup);

describe('TestJT', () => {

  test("function test testID",()=>{
    let FuncTest = create(<TestJT/>).getInstance();
    expect(FuncTest.dataFunc(5)).toBe(25)
  })

  it('should show hello world', () => {
    const helloWorldText = 'Hello World!';
    const notFoundText = 'Not found text';

    const {toJSON, getByText, queryByText} = render(<TestJT />);

    const foundHelloWorldTextElement = getByText(helloWorldText);
    const notFoundTextElement = queryByText(notFoundText);

    expect(foundHelloWorldTextElement.props.children).toEqual(helloWorldText);
    expect(notFoundTextElement).toBeNull();
    expect(toJSON()).toMatchSnapshot();
  });

  it('should find the button via testId', () => {
    const testIdName = 'pressMeButton';

    const {getByTestId} = render(<TestJT />);

    const foundButton = getByTestId(testIdName);

    expect(foundButton).toBeTruthy();
  });

  it('should find the button via accessibilityLabel', () => {
    const accessibilityLabel = 'Press me';

    const {getByA11yLabel} = render(<TestJT />);

    const foundButton = getByA11yLabel(accessibilityLabel);

    expect(foundButton).toBeTruthy();
  });

  it('should find the button title', () => {
    const title = 'Press me!';

    const {getByText} = render(<TestJT />);

    const foundButtonTitle = getByText(title);

    expect(foundButtonTitle.props.children).toEqual(title);
  });
});