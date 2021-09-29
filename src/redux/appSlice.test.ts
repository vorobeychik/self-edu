import reducer, { setQuery } from './appSlice';

const initialState = {
  query: '',
  videos: [],
};

test('should return the initial state', () => {
  expect(reducer(undefined, { type:'init' })).toEqual(
    initialState,
  );
});

test('should set query', () => {
  const query = '123';
  expect(reducer(initialState, setQuery(query))).toEqual(
    {
      ...initialState,
      query,
    },
  );
});