import React, {useState} from "react";
import DetalleProducto from "./DetalleDeProducto";
import { useNavigate } from "react-router-dom";
import zapatillas from "../componentes/Productos";
import { useCart, cartActions } from "../componentes/CartContext";

function Catalogo () {
    const [zapatillaSeleccionada, setZapatillaSeleccionada] = useState(null);
    const navigate = useNavigate();
    const { cartState, dispatch } = useCart();

    const handleClickVerDetalles = (zapatilla) => {
        setZapatillaSeleccionada(zapatilla);
        navigate(`/Catalogo/${zapatilla.id}`,  { state: { zapatillas } });
    };

    const addToCart = (zapatilla) => {
        const itemInCart = cartState.cartItems.find((item) => item.id === zapatilla.id);

        if (itemInCart) {
            dispatch({ type: cartActions.INCREASE_QUANTITY, payload: zapatilla.id });
        } else {
            dispatch({ type: cartActions.ADD_TO_CART, payload: zapatilla });
        }
        dispatch({ type: cartActions.TOGGLE_CART });
    };

    return(
        <>
            <h1>PaperShop Catalogo</h1>
            <div className="productosContainer">
                <ul className="productos">
                    {zapatillas.map((zapatilla) => (
                        <li className="producto" key={zapatilla.id}>
                            <img className="imagencita" src={zapatilla.imagen} alt="" />
                            <p className="name">{zapatilla.nombre}</p>
                            <p className="precio">Precio: {zapatilla.precio} $</p>
                            <div className="botoness">
                                <button className="buttoncito" onClick={() => handleClickVerDetalles(zapatilla)}
                                title={`Ver detalles de la zapatilla ${zapatilla.nombre}`}>
                                    Ver detalles
                                </button>
                                <button className="btn" onClick={() => addToCart(zapatilla)}>
                                    Añadir al carrito
                                </button>
                            </div>
                        </li>
                    ))}
                </ul>
                {zapatillaSeleccionada && (
                    <DetalleProducto producto={zapatillaSeleccionada} />
                )}
            </div>
        </>
    );
}

export default Catalogo;


