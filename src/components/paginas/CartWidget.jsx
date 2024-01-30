import React from 'react';
import { useCart, cartActions } from '../componentes/CartContext';

const CartWidget = () => {
    const { cartState, dispatch } = useCart();
    // { isCartOpen, setIsCartOpen }
    // const [isVisible, setIsVisible] = useState(false);

    const toggleCart = () => {
        // setIsCartOpen(!isCartOpen);
        dispatch({ type: cartActions.TOGGLE_CART });
        // setIsVisible(!isVisible);
    };

    // const addToCart = (zapatilla) => {
    //     const itemInCart = cartState.cartItems.find((item) => item.id === zapatilla.id);

    //     if (itemInCart) {
    //         dispatch({ type: cartActions.INCREASE_QUANTITY, payload: zapatilla.id });
    //     } else {
    //         dispatch({ type: cartActions.ADD_TO_CART, payload: zapatilla });
    //     }
    // };

    const removeFromCart = (zapatilla) => {
        dispatch({ type: cartActions.REMOVE_FROM_CART, payload: zapatilla.id });
    };

    const increaseQuantity = (zapatilla) => {
        dispatch({ type: cartActions.INCREASE_QUANTITY, payload: zapatilla.id });
    };

    const decreaseQuantity = (zapatilla) => {
        dispatch({ type: cartActions.DECREASE_QUANTITY, payload: zapatilla.id });
    };

    // useEffect(() => {
    //     if (cartState.cartItems.length === 0) {
    //         setIsVisible(false);
    //     }
    // }, [cartState.cartItems]);

    return (
        <div className="Carrito">
            <div className={`carro ${cartState.isCartOpen ? 'carrito-open' : ''}`}>
                <div className="carrito-close" onClick={toggleCart}>
                    <box-icon type='solid' name='x-circle'></box-icon>
                </div>
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
            </div>
        </div>
    );
};

export default CartWidget;



