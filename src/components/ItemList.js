import React from "react";
import Item from "./Item";

const ItemList = ({ items }) => {
    return (
        <div className="row g-2">
            {
            items?.map(({ id, titulo, precio, categorias, foto }) => (
                <div className="col-md-4" key={id}> 
                    <Item
                        id={id}
                        titulo={titulo}
                        precio={precio}
                        categorias={categorias}
                        foto={foto}
                    />
                </div>
            ))}
        </div>)
}
export default ItemList;