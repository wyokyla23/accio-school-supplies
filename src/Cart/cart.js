import React from 'react'
import IconButton from '@material-ui/core/IconButton';
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";

export default function Cart({ favorited }) {

  return (
    <div>
      <header className="shop-header">
        <h1 style={{ marginLeft: '2.5em' }}>Accio School Supplies</h1>
        <IconButton style={{ marginRight: '2.5em' }}>
          <ShoppingCartIcon style={{ color: 'white' }} />
        </IconButton>
      </header><h1>Cart</h1>
    </div>
  )
}