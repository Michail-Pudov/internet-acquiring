import { ADD_PRODUCT, DELETE_PRODUCT, EDIT_COUNT_PRODUCT } from './action-types'

export function addProduct(product, quantity) {
  return {
    type: ADD_PRODUCT,
    product,
    quantity
  }
}

export function deleteProduct(index) {
  return {
    type: DELETE_PRODUCT,
    index
  }
}

export function editCountProduct(index, quantity) {
  return {
    type: EDIT_COUNT_PRODUCT,
    index,
    quantity
  }
}
