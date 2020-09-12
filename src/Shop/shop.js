import React from "react";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";

export default function Shop(props) {
  return (
    <div className="shop-content">
      <header className="shop-header">
        <h2>Accio School Supplies!</h2>
        <ShoppingCartIcon />
      </header>
      <h1>Shop</h1>
    </div>
  );
}
