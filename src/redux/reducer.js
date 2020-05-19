import { } from "./action-types";

const initialState = {
  products: [{
    product: {
      title: '',
      img: '',
      description: '',
      price: 0,
    },
    quantity: 0
  }]
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};
