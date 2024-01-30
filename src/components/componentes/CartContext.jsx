import React, { createContext, useContext, useReducer } from 'react';

const CartContext = createContext();

const cartActions = {
    TOGGLE_CART: 'TOGGLE_CART',
    ADD_TO_CART: 'ADD_TO_CART',
    REMOVE_FROM_CART: 'REMOVE_FROM_CART',
    INCREASE_QUANTITY: 'INCREASE_QUANTITY',
    DECREASE_QUANTITY: 'DECREASE_QUANTITY',
};

const initialState = {
    cartItems: [],
    isCartOpen: false,
};

const cartReducer = (state, action) => {
    switch (action.type) {
        case cartActions.TOGGLE_CART:
            return {
            ...state,
            isCartOpen: !state.isCartOpen,
            };

        case 'ADD_TO_CART':
            const { id, nombre, precio, imagen } = action.payload;
            const existingItemIndex = state.cartItems.findIndex(item => item.id === id);

            if (existingItemIndex !== -1) {
                const updatedCartItems = [...state.cartItems];
                updatedCartItems[existingItemIndex].cantidad += 1;
                return {
                    ...state,
                    cartItems: updatedCartItems,
                };
            } else {
                const newItem = {
                    id,
                    nombre,
                    precio,
                    imagen,
                    cantidad: 1,
                };
                return {
                    ...state,
                    cartItems: [...state.cartItems, newItem],
                };
            }

        case 'REMOVE_FROM_CART':
            const updatedCartItems = state.cartItems.filter(item => item.id !== action.payload);
            return {
                ...state,
                cartItems: updatedCartItems,
            };

        case 'INCREASE_QUANTITY':
            const increasedCartItems = state.cartItems.map(item => {
                if (item.id === action.payload) {
                    item.cantidad +=1;
                }
                return item;
            });
            return {
            ...state,
            cartItems: increasedCartItems,
            };

        case 'DECREASE_QUANTITY':
            const decreasedCartItems = state.cartItems.map(item => {
                if (item.id === action.payload) {
                    item.cantidad = Math.max(1, item.cantidad - 1);
                }
                return item;
            });
            return {
                ...state,
                cartItems: decreasedCartItems,
            };
        default:
        return state;
    }
};

export const CartProvider = ({ children }) => {
    const [cartState, dispatch] = useReducer(cartReducer, initialState);

    return (
        <CartContext.Provider value={{ cartState, dispatch }}>
            {children}
        </CartContext.Provider>
    );
};

export const useCart = () => {
    return useContext(CartContext);
};

export { cartActions };


