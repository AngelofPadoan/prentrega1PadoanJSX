import React from 'react';
import { useParams, useLocation } from "react-router-dom";

function DetalleProducto() {
    const { id } = useParams();
    const location = useLocation();
    const zapatillas = location.state ? location.state.zapatillas : null;

    const productoSeleccionado = zapatillas ? zapatillas.find((zapatilla) => zapatilla.id === Number(id)) : null;

    if (!zapatillas) {
        return (
            <div>
                <h1>Producto no encontrado</h1>
            </div>
        );
    }

    if (!productoSeleccionado) {
        return (
            <div>
                <h1>Producto no encontrado</h1>
            </div>
        );
    }
    return (
        <>
            <h1>Detalle del Producto</h1>
            <div className='detalladoProduc'>
                <img className='imagenn' src={productoSeleccionado.imagen} alt={productoSeleccionado.nombre} />
                <h2>{productoSeleccionado.nombre}</h2>
                <p className='detallito'><strong>DESCRIPCION:</strong> {productoSeleccionado.detalle}</p>
                <p className='presio'>Precio: {productoSeleccionado.precio} $</p>
            </div>
        </>
    );
}
<h1>Detalles del Producto</h1>
export default DetalleProducto;


