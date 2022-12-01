import React, {useContext} from "react";
import CartContext from "../context/cartContext";

const Item = ({ item }) => {
    const cartContextValue = useContext(CartContext);

    const onClickRemove = () => {
        cartContextValue.deleteProduct(item.id)
    }

    return <>
        <div className="col-lg-3 col-md-12 mb-4 mb-lg-0" >
            <div className="bg-image hover-overlay hover-zoom ripple rounded" data-mdb-ripple-color="light">
                <img src={item.foto} className="w-100" alt={item.titulo} />
                <a href="#!">
                    <div className="mask" style={{ backgroundColor: "rgba(251, 251, 251, 0.2)" }}></div>
                </a>
            </div>
        </div>

        <div className="col-lg-5 col-md-6 mb-4 mb-lg-0">
            <p><strong>{item.titulo}</strong></p>
            <button type="button" className="btn btn-danger btn-sm me-1 mb-2" data-mdb-toggle="tooltip"
                title="Remove item" onClick={onClickRemove}>
                <i className="fa fa-trash fa-2" aria-hidden="true"></i>
            </button>
        </div>
        <div className="col-lg-4 col-md-6 mb-4 mb-lg-0">
            <div className="d-flex mb-4" style={{ maxWidth: "300px" }}>
                <button className="btn btn-primary px-3 me-2">
                    <i className="fas fa-minus"></i>
                </button>

                <div className="form-outline">
                    <label className="form-label" htmlFor="form1">Cantidad</label>
                    <input id="form1" min="0" name="quantity" defaultValue={item.cantidad} type="number" className="form-control" />
                </div>

                <button className="btn btn-primary px-3 ms-2">
                    <i className="fas fa-plus"></i>
                </button>
            </div>

            <p className="text-start text-md-center">
                <strong>{item.precio}</strong>
            </p>
        </div>
    </>
}
export default Item;

