import React from 'react'
import Modal from '../UI/Modal'
import classes from './Cart.module.css'


const Cart = () => {

    const cartItem =<ul className={classes['atcart-item']}>
                        {[
                        {id: 'c1', name: 'sushi', amount: '2', price: '12.45'} // for example
                        ].map((item) => {<li>item.name</li>})}
                    </ul>

  return (
    <Modal>
      {cartItem}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>35.84</span>
      </div>
      <div className={classes.actions}>
        <button className={classes['button--alt']}>Close</button>
        <button className={classes.button}>Order</button>
      </div>
    </Modal>
  )
}

export default Cart
