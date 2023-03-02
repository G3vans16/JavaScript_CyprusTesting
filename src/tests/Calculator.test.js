import React from 'react';
import Calculator from '../containers/Calculator';
import {render, fireEvent} from '@testing-library/react';

describe('Calculator', () => {
  let container;
  let runningTotal;

  beforeEach(() => {
    container = render(<Calculator/>)
    runningTotal = container.getByTestId('running-total');
  })

  it('should change running total on number enter', () => {
    const button4 = container.getByTestId('number4');
    fireEvent.click(button4);
    expect(runningTotal.textContent).toEqual('4');
  })

// calculator.add() - add 1 to 4 and get 5
  it('should be able to add two numbers', () => {
    const button4 = container.getByTestId('number4');
    const button1 = container.getByTestId('number1');
    const buttonAdd = container.getByTestId('operator-add');
    const buttonEquals = container.getByTestId('operator-equals');
    fireEvent.click(button4);
    fireEvent.click(buttonAdd);
    fireEvent.click(button1);
    fireEvent.click(buttonEquals);
    expect(runningTotal.textContent).toEqual('5')
  })

// calculator.subtract() subtract 4 from 7 and get 3
  it('should be able to subtract two numbers', () => {
    const button7 = container.getByTestId('number7');
    const button4 = container.getByTestId('number4');
    const buttonSubtract = container.getByTestId('operator-subtract');
    const buttonEquals = container.getByTestId('operator-equals');
    fireEvent.click(button7);
    fireEvent.click(buttonSubtract);
    fireEvent.click(button4);
    fireEvent.click(buttonEquals);
    expect(runningTotal.textContent).toEqual('3')
  })


// calculator.multiply() - multiply 3 by 5 and get 15
  it('should be able to multiply two numbers', () => {
    const button3 = container.getByTestId('number3');
    const button5 = container.getByTestId('number5');
    const buttonMultiply = container.getByTestId('operator-multiply');
    const buttonEquals = container.getByTestId('operator-equals');
    fireEvent.click(button3);
    fireEvent.click(buttonMultiply);
    fireEvent.click(button5);
    fireEvent.click(buttonEquals);
    expect(runningTotal.textContent).toEqual('15')
  })

// calculator.divide() - divide 21 by 7 and get 3
  it('should be able to divide two numbers', () => {
    const button2 = container.getByTestId('number2');
    const button1 = container.getByTestId('number1');
    const button7 = container.getByTestId('number7');
    const buttonDivide = container.getByTestId('operator-divide');
    const buttonEquals = container.getByTestId('operator-equals');
    fireEvent.click(button2);
    fireEvent.click(button1);
    fireEvent.click(buttonDivide);
    fireEvent.click(button7);
    fireEvent.click(buttonEquals);
    expect(runningTotal.textContent).toEqual('3')
  })

// calculator.numberClick() - concatenate multiple number button clicks
  it('should be able to concatenate multiplt number button clicks', () => {
    const button2 = container.getByTestId('number2');
    const button1 = container.getByTestId('number1');
    const button7 = container.getByTestId('number7');
    fireEvent.click(button2);
    fireEvent.click(button1);
    fireEvent.click(button7);
    expect(runningTotal.textContent).toEqual('217')
  })

// calculator.operatorClick() - chain multiple operations together
  it('should be able to concatenate multiplt number button clicks', () => {
    const button2 = container.getByTestId('number2');
    const button8 = container.getByTestId('number8');
    const button7 = container.getByTestId('number7');
    const buttonMultiply = container.getByTestId('operator-multiply');
    const buttonSubtract = container.getByTestId('operator-subtract');
    const buttonEquals = container.getByTestId('operator-equals');
    fireEvent.click(button2);
    fireEvent.click(buttonMultiply);
    fireEvent.click(button8);
    fireEvent.click(buttonSubtract);
    fireEvent.click(button7);
    fireEvent.click(buttonEquals);
    expect(runningTotal.textContent).toEqual('9')
  })


// calculator.clearClick() - clear the running total without affecting the calculation
  it('should be able to clear the running total without affecting the calculation', () => {
    const button5 = container.getByTestId('number5');
    const button2 = container.getByTestId('number2');
    const buttonClear = container.getByTestId('clear');
    const buttonAdd = container.getByTestId('operator-add');
    const buttonEquals = container.getByTestId('operator-equals');
    fireEvent.click(button5);
    fireEvent.click(buttonAdd);
    fireEvent.click(button5);
    fireEvent.click(buttonEquals);
    fireEvent.click(buttonClear);
    fireEvent.click(buttonAdd);
    fireEvent.click(button2);
    fireEvent.click(buttonEquals);
    expect(runningTotal.textContent).toEqual('12')
  })

})