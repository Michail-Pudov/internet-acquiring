import React, { PureComponent } from 'react'
import Modal from './components/components/Modal'
import { connect } from "react-redux";
import { payment } from '../fetches/paymentFetch'
import { deleteProduct, editCountProduct } from '../redux/action'
import './Basket.css'

class Basket extends PureComponent {
  constructor(props) {
    super(props)

    this.state = {
      modal: false,
      edit: false
    }
  }

  openAndCloseModal = () => {
    this.setState({
      modal: !this.state.modal
    })
  }

  removeItem = (index) => {
    this.props.deleteProduct(index)
  }

  async goPayment(sum) {
    if (sum === 0) {
      document.querySelector('.modal__total-sum').innerHTML = '<p>Корзина пуста</p>';
      return
    }
    const items = []
    this.props.products.forEach(element => {
      const obj = {
        Name: element.product.title,
        Price: element.product.price,
        Quantity: element.quantity,
        Amount: element.product.price * element.quantity,
        PaymentMethod: "full_prepayment",
        PaymentObject: "commodity",
        Tax: "vat10",
        Ean13: "0123456789"
      }
      items.push(obj)
    });
    const data = {
      amount: sum,
      items
    }
    let result = await payment(data)
    window.open(result.PaymentURL)
  }

  onChangeEdit = () => {
    this.setState({
      edit: true
    })
  }

  saveProduct = (event, index) => {
    const count = event.target.previousSibling.value
    this.props.editCountProduct(index, count)
    this.setState({
      edit: false
    })
  }

  render() {
    const sum = this.props.products.reduce((accum, elem) => {
      return accum + (elem.product.price * elem.quantity)
    }, 0)
    const modal = <div className="modal">
      <div className="modal__block">
        <div className='modal__close'>
          <img src="./Иконка_крестика_(ei).svg.png" alt="" style={{ width: '30px', height: '30px' }} onClick={this.openAndCloseModal} />
        </div>
        <div className='basket__modal__content'>
          <h2>Ваши товары:</h2>
          {this.props.products.map((item, index) => {
            return (
              <div key={index} className="modal__content__product">
                <img src={item.product.img} alt="" className='basket__img__product' />
                <p>Товар: {item.product.title}</p>
                <p>Количество: {item.quantity}</p>
                {this.state.edit ?
                  <>
                    <input type="number" min='1' max='5' name='count' className='input__number' />
                    <img src="./39830.svg" alt="" onClick={(e) => this.saveProduct(e, index)} className='icon' />
                  </>
                  :
                  <img src='./61456.png' alt="" className='icon' onClick={this.onChangeEdit} />}
                <img src="./15026.png" alt="" className='icon' onClick={() => this.removeItem(index)} />
              </div>
            )
          })}
        </div>
        <div className='form-payment'>
          <div className='modal__total-sum'>
            <p>Общая сумма: {sum / 100}</p>
          </div>
          <div className='modal__payment'>
            <button onClick={() => this.goPayment(sum)} className='button__modal'>Оплатить</button>
          </div>
        </div>
      </div>
    </div>

    return (
      <>
        {this.state.modal ? <Modal>{modal}</Modal> : null}
        <div className='basket'>
          <button onClick={this.openAndCloseModal} className='basket__button'><h4>Корзина <img src="./15026.png" alt="" style={{ width: '17px', height: '17px' }} /></h4></button>
        </div>
      </>
    )
  }
}
const mapStateToProps = state => ({
  products: state.products
});

const mapDispatchToProps = {
  deleteProduct,
  editCountProduct
};
export default connect(mapStateToProps, mapDispatchToProps)(Basket);
