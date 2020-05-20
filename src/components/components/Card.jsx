import React, { PureComponent } from 'react'
import Modal from './components/Modal'
import { connect } from "react-redux";
import { addProduct } from '../../redux/action'
import './Card.css'

class Card extends PureComponent {
  constructor(props) {
    super(props)

    this.state = {
      modal: false,
      count: 0,
      added: false
    }
  }

  openAndCloseModal = () => {
    this.setState({
      modal: !this.state.modal
    })
  }

  onChange = (e) => {
    this.setState({
      [e.target.name]: +e.target.value
    })
  }

  addGoods = (product) => {
    if (this.state.count === 0) {
      document.querySelector('.message').innerHTML = 'Выберите количество';
      return
    }
    this.props.addProduct(product, this.state.count)
    this.setState({
      added: true
    })
  }

  render() {
    const { product } = this.props;
    const modal = (
      <div className="modal">
        <div className="modal__block">
          <div className='modal__close'>
            <img src="./Иконка_крестика_(ei).svg.png" alt="" style={{ width: '30px', height: '30px' }} onClick={this.openAndCloseModal} />
          </div>
          <div className='modal__image'>
            <img src={product.img} alt="" style={{ width: '100px', height: '150px' }} />
          </div>
          <div className='modal__content'>
            <h4><i>{product.title}</i></h4>
            <p><b>Цена: {product.price / 100}</b></p>
            <p>{product.description}</p>
          </div>
          <div className='modal__purchase'>
            {this.state.added ? <p>Товары добавлены в корзину</p> : <>
              <input type="number" min='1' max='5' name='count' onChange={this.onChange} className='input__number' />
              <button onClick={() => this.addGoods(product)}>В корзину</button></>}
          </div>
          <p className='message'></p>
        </div>
      </div>
    )
    return (
      <>
        {this.state.modal ? <Modal>{modal}</Modal> : null}
        <div className='card__product' onClick={this.openAndCloseModal}>
          <img src={product.img} alt="" />
          <h4><i>{product.title}</i></h4>
          <p><b>Цена: {product.price / 100}</b></p>
        </div>
      </>
    )
  }
}

const mapStateToProps = state => ({});

const mapDispatchToProps = {
  addProduct
};
export default connect(mapStateToProps, mapDispatchToProps)(Card);
