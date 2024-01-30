import React from "react";
import portada from '../../images/porta.jfif';

const Inicio = () => {
    return (
        <div>
            <h1>PaperShop</h1>
            <p className="parrafito">Bienvenido a tu tienda online mas confiable</p>
            <img className="portada" src={portada} alt="modelo usando zapatillas" />
        </div>
    );
}

export default Inicio;