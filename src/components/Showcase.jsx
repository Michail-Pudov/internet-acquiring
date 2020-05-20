import React, { PureComponent } from 'react'
import Card from './components/Card'
import './Showcase.css'

class Showcase extends PureComponent {
  constructor(props) {
    super(props)

    this.state = {
      products: [
        {
          title: 'Кроссовки Brulloff',
          img: './MP002XW0Q9O5_8822551_2_v1.webp',
          description: 'Кроссовки от премиум бренда выполнены из натуральной кожи.',
          price: 4900000,
        }, {
          title: 'Кроссовки Adidas',
          img: './AD002AWHLQG8_10319203_2_v1.webp',
          description: 'Кроссовки выполнены из дышащего текстиля. Эти кроссовки с более тонкой подошвой позволяют лучше чувствовать поверхность. Широкая передняя часть повышает устойчивость во время движения в сторону.',
          price: 1349000,
        }, {
          title: 'Кроссовки Nike',
          img: './NI464AWHUPB6_10391119_2_v1.webp',
          description: 'Кроссовки Nike Air Vapormax 360 с длинной подошвой из пеноматериала и вставкой Vapormax Air обеспечивают выдающийся комфорт в ярком стиле 90-х, вдохновленном Air Max 360.',
          price: 1749000,
        }
      ]
    }
  }

  render() {

    return (
      <div className='showcase'>
        {this.state.products.map((item, index) => {
          return <Card key={index} product={item}></Card>
        })}
      </div>
    )
  }
}

export default Showcase
