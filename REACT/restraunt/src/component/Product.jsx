import React from 'react'
import Productbox from './Productbox'
import product1 from '../images/s1.png'
import product2 from '../images/s2.png'

function Product() {
  return (
    <div id='products'>
        <h1>CHOOSE & ENJOY</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit ducimus neque recusandae, maiores eaque distinctio harum atque impedit quisquam dolore earum quae, cumque maxime eius repellendus ipsum voluptatum tempore magnam?</p>
        <div className="a-container">
            <Productbox image={product1} title="Luger Burger"/>
            <Productbox image={product2} title="La Pigeon Burger"/>
            <Productbox image={product1} title="Luger Burger"/>
            <Productbox image={product2} title="La Pigeon Burger"/>
        </div>
    </div>
  )
}

export default Product