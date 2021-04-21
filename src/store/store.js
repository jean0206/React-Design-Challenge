import {createStore} from 'redux';

const initialState = {
  products: [],
};

const addToCar = (state, item) => {
  const result = state.products.filter(product => product.id === item.id);
  if (result.length === 0) {
    return {...state, products: state.products.concat(item)};
  } else {
    return {...state};
  }
};

const car_reducer = (state = initialState, action) => {
  console.log(action);
  switch (action.type) {
    case 'ADD_TO_CAR':
      return addToCar(state, action.item);
  }
  return state;
};

export default createStore(car_reducer);
