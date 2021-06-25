import React from 'react';

import CartIcon from '../Cart/CartIcon.js';

import classes from './HeaderCartButton.module.css';

const HeaderCartButton=props=>{
     
    return <button className={classes.CartButton}>
        <span className={classes.icon}><CartIcon/></span>
        <span>Your Cart</span>
        <span className={classes.badge}> 3 </span>
    </button>
};

export default HeaderCartButton;