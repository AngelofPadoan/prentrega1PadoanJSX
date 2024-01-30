import React, { useState } from 'react';
import { Link } from "react-router-dom";
import "boxicons";
import CartWidget from '../paginas/CartWidget';
import { useCart, cartActions } from '../componentes/CartContext';

export const NavBar = () => {
    // { isCartOpen, setIsCartOpen }
    const { cartState, dispatch } = useCart();

    const [isCartOpen, setIsCartOpen] = useState(false);

    const totalCartItems = cartState.cartItems.reduce((total, item) => total + item.cantidad, 0);

    const toggleCart = () => {
        dispatch({ type: cartActions.TOGGLE_CART });
        setIsCartOpen(!isCartOpen);
    }

    return (
        <div className="Navbar">
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container-fluid">
                    <a className="navbar-brand" href="/"><img className="logo-tienda" src="/img01.jpg" alt="imagen tienda" /></a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <Link className="nav-link" to='/'>Inicio</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to='/Catalogo'>Catalogo</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to='/Nosotros'>Nosotros</Link>
                            </li>
                        </ul>
                        <div className="cart" onClick= {toggleCart}>
                            <box-icon name="cart"></box-icon>
                            <span className="item__total">{totalCartItems}</span>
                        </div>
                        <CartWidget />
                    </div>
                </div>
            </nav>
        </div>
    );
}




