import React, { PureComponent } from 'react'
import Modal from './components/Modal'
import './Card.css'

class Card extends PureComponent {
  constructor(props) {
    super(props)

    this.state = {

    }
  }

  render() {
    const { product } = this.props
    return (
      <div className='card__product'>
        <img src={product.img} alt="" />
        <h3>{product.title}</h3>
        <p>Цена: {product.price / 100}</p>
      </div>
    )
  }
}

export default Card
