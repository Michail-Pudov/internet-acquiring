import { ADD_PRODUCT, DELETE_PRODUCT, EDIT_COUNT_PRODUCT } from './action-types'

const initialState = {
  products: []
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_PRODUCT:
      const array = [...state.products, {
        product: action.product,
        quantity: action.quantity
      }]
      return {
        ...state,
        products: array
      }

    case DELETE_PRODUCT:
      const arr = JSON.parse(JSON.stringify(state.products)) //согласен, не самый "красивый" способ
      arr.splice(action.index, 1)
      return {
        ...state,
        products: arr
      }
    case EDIT_COUNT_PRODUCT:
      const newArray = JSON.parse(JSON.stringify(state.products))
      newArray[action.index].quantity = action.quantity
      return {
        ...state,
        products: newArray
      }
    default:
      return state;
  }
};
