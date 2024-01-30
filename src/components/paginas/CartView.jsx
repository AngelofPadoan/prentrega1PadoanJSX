import React from 'react';
import { useCart, cartActions } from '../componentes/CartContext';

const CarritoView = () => {
    const { cartState, dispatch } = useCart();

    const toggleCart = () => {
        dispatch({ type: cartActions.TOGGLE_CART });
    };

    const removeFromCart = (zapatilla) => {
        dispatch({ type: cartActions.REMOVE_FROM_CART, payload: zapatilla.id });
    };

    const increaseQuantity = (zapatilla) => {
        dispatch({ type: cartActions.INCREASE_QUANTITY, payload: zapatilla.id });
    };

    const decreaseQuantity = (zapatilla) => {
        dispatch({ type: cartActions.DECREASE_QUANTITY, payload: zapatilla.id });
    };

    return (
        <div className="CarritoView">
            <h2>Su carrito</h2>
                <div className="carrito_center">
                    {cartState.cartItems.length === 0 ? (
                        <p className='vacio'>Usted no tiene productos dentro del carrito</p>
                    ) : (
                        cartState.cartItems.map((item) => (
                            <div className="carrito_item" key={item.id}>
                                <img src={item.imagen} alt={item.nombre} />
                                <div>
                                    <h4>{item.nombre}</h4>
                                    <p className="pricee">${item.precio * item.cantidad}</p>
                                </div>
                                <div className='cantidades'>
                                    <box-icon
                                    name="plus"
                                    type="solid"
                                    onClick={() => increaseQuantity(item)}
                                    ></box-icon>
                                    <p className="cantidad">{item.cantidad}</p>
                                    <box-icon
                                    name="minus"
                                    type="solid"
                                    onClick={() => decreaseQuantity(item)}
                                    ></box-icon>
                                </div>
                                <div className="remove-item" onClick={() => removeFromCart(item)}>
                                    <box-icon name="trash"></box-icon>
                                </div>
                            </div>
                        ))
                    )}
                </div>
                <div className="carrito-footer">
                    <h3>Total: ${cartState.cartItems.reduce((total, item) => total + item.precio * item.cantidad, 0)}</h3>
                    <button className="btn-buy">Comprar</button>
                </div>
        <button className='buTon' onClick={toggleCart}>Cerrar Carrito</button>
        </div>
    );
};

export default CarritoView;