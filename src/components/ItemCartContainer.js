import React, { useContext } from "react";
import CartContext from "../context/cartContext";
import ItemCart from "./ItemCart";
//import './styleCart.css'



const ItemCartContainer = () => {
    const cartContextValue = useContext(CartContext);

    function onAddCallback() {
        alert('hice clic acá')
        cartContextValue.addPurchase()
        //insertPurchase(_carrito)
        //setShowItemCount(false)
    }

    return (
        <CartContext.Consumer>{({ products: carrito, totalAmount }) => (
            <section className="h-100 gradient-custom">
                <div className="container py-5">
                    <div className="row d-flex justify-content-center my-4">
                        <div className="col-md-8">
                            <div className="card mb-4">
                                <div className="card-header py-3">
                                    <h5 className="mb-0">Carrito - {carrito.length} items</h5>
                                    <br></br>
                                    <ItemCart items={carrito} />
                                </div>
                            </div>
                            <div className="card mb-4">
                                <div className="card-body">
                                    <p><strong>Tiempo esperado de entrega</strong></p>
                                    <p className="mb-0">12.10.2022 - 14.10.2022</p>
                                </div>
                            </div>
                            <div className="card mb-4 mb-lg-0">
                                <div className="card-body">
                                    <p><strong>Aceptamos</strong></p>
                                    <img className="me-2" width="45px"
                                        src="https://mdbcdn.b-cdn.net/wp-content/plugins/woocommerce-gateway-stripe/assets/images/visa.svg"
                                        alt="Visa" />
                                    <img className="me-2" width="45px"
                                        src="https://mdbcdn.b-cdn.net/wp-content/plugins/woocommerce-gateway-stripe/assets/images/amex.svg"
                                        alt="American Express" />
                                    <img className="me-2" width="45px"
                                        src="https://mdbcdn.b-cdn.net/wp-content/plugins/woocommerce-gateway-stripe/assets/images/mastercard.svg"
                                        alt="Mastercard" />
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="card mb-4">
                                <div className="card-header py-3">
                                    <h5 className="mb-0">Total</h5>
                                </div>
                                <div className="card-body">
                                    <ul className="list-group list-group-flush">
                                        <li
                                            className="list-group-item d-flex justify-content-between align-items-center border-0 px-0 pb-0">
                                            Productos
                                            <span>{totalAmount()}</span>
                                        </li>
                                        <li className="list-group-item d-flex justify-content-between align-items-center px-0">
                                            Envío
                                            <span>Gratis</span>
                                        </li>
                                        <li
                                            className="list-group-item d-flex justify-content-between align-items-center border-0 px-0 mb-3">
                                            <div>
                                                <strong>Monto Total</strong>
                                                <strong>
                                                    <p className="mb-0">(IVA Incluido)</p>
                                                </strong>
                                            </div>
                                            <span><strong>{totalAmount()}</strong></span>
                                        </li>
                                    </ul>
                                    {carrito.length > 0
                                        ?
                                        <button type="button" className="btn btn-primary btn-lg btn-block" onClick={onAddCallback}>
                                            Comprar
                                        </button>
                                        : <>
                                        </>}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )}
        </CartContext.Consumer>
    )
}
export default ItemCartContainer;