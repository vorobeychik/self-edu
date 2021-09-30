import Search  from './Search';
import { fireEvent, render } from '@testing-library/react';
import React from 'react';
import { store } from '../../redux/store';
import { Provider } from 'react-redux';
import  userEvent  from '@testing-library/user-event';

describe('Search component', () => {
  it('should render a components', () => {
    expect(render(
        <Provider store={store}>
          <Search />
        </Provider>)).toBeDefined();
  });

  it('should change input value', () => {
    const { getByTestId } = render(
        <Provider store={store}>
          <Search />
        </Provider>);
    const input  = getByTestId('search');
    const testInputValue = '123';
    userEvent.type(input, testInputValue);
    expect(input.getAttribute('value')).toEqual(testInputValue);
  });


});