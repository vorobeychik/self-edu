import Search  from './Search';
import { fireEvent, render } from '@testing-library/react';
import React from 'react';
import { store } from '../../redux/store';
import { Provider } from 'react-redux';

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
    fireEvent.change( input, { target:{ value: '123' } });
    expect(input.getAttribute('value')).toEqual('123');
  });


});