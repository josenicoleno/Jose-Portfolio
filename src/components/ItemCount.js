import React, { useState } from "react";

const ItemCount = ({ stock, initial, onAdd }) => {
    const [count, setCount] = useState(initial)

    const incrementar = () => {
        setCount(count + 1)
    }
    const decrementar = () => {
        setCount(valAnt => valAnt > 1 ? count - 1 : count)
    }
    const agregarCarrito = () => {
        count <= stock ? onAdd(count) : alert("No hay suficientes productos")
    }

    return (
        <div>
            <h3>{count}</h3>
            <button className="btn btn-primary px-3 me-2"
                onClick={decrementar} >
                <i className="fas fa-minus"></i>
            </button>
            <button className="btn btn-primary px-3 me-2"
                onClick={incrementar} >
                <i className="fas fa-plus"></i>
            </button>
            <button className="btn btn-primary"
                onClick={agregarCarrito} >
                Agregar al carrito
            </button>
        </div>
    )
}
export default ItemCount;