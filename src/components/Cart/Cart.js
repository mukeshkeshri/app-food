import { useContext } from 'react';

import Modal from '../UI/Modal.js'
import CartItem from './CartItem';

import classes from './Cart.module.css';
import CartContext from '../../store/cart-context';


const Cart = (props) => {

    const cartCtx = useContext(CartContext);

    const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`;

    const hasItems = cartCtx.items.length > 0;

    const cartItemRemoveHandler = (id) => {
        cartCtx.removeItem(id);

    };

    const cartItemAddHandler = (item) => {
        cartCtx.addItem({ ...item, amount: 1 });
    };

    const cartItems = <ul className={classes['cart-items']}>

        {cartCtx.items.map((item) =>
            <CartItem
                key={item.id}
                name={item.name}
                amount={item.amount}
                price={item.price}
                onRemove={cartItemRemoveHandler.bind(null, item.id)}
                onAdd={cartItemAddHandler.bind(null, item)}
            ></CartItem>
        )}</ul>;





    /*const submito=()=>{ 
        
       fetch("../../create",
            {
               method: 'POST',
               body: JSON.stringify({
                   Orderdata:cartCtx.items
               })
            })

       console.log(cartCtx);
   }*/

    


    return (


        <Modal>
            {cartItems}
            <div>
                <span className={classes.total}>Total Amount</span>
                <span>{totalAmount}</span>
            </div>
            <div className={classes.actions}>
                <button className={classes['button--alt']} onClick={props.onCloseCart}>Close</button>

                <form className="form">
                    {hasItems && <button type="submit" className={classes['button--alt']}>Order</button>}
                </form>

            </div>
        </Modal>
    )
};

export default Cart;