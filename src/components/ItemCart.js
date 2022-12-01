import React from "react";
import Item from "./ItemC";

const ItemCart = ({ items }) => {
    return (
        <>
            <div className="row">
                {items?.map((item) => <Item item={item} key={item.id} />)}
            </div>
            <hr className="my-4" />
        </>)
}
export default ItemCart;