import React, { useEffect, useState } from "react";
import ItemList from "./ItemList";
import SearchForm from "./SearchForm";
import { getProducts } from "../firebase/firebase";

const ItemListContainer = ({ greeting }) => {
    const [loading, setLoading] = useState(true)
    const [list, setList] = useState([])
    const [err, setErr] = useState('')
    
    const searchWords = (str) => {
    }

    useEffect(() => {
        getProducts()
            .then((snp) => {
                setList(
                    snp.docs.map((document) => ({
                        ...document.data(),
                        id: document.id,
                    }
                    ))
                )
            })
            .catch(() => setErr('Ocurrió un error'))
            .finally(() => setLoading(false))
    }, [])

    return (
        <div className="container py-12" style={{ textAlign: `center` }}>
            <SearchForm onSearch={searchWords} />
            {loading
                ? (
                    <div className="spinner-grow" style={{ width: `4rem`, height: `4rem` }} role="status">
                    </div>)
                : err !== ''
                    ? <div>Error: {err}</div>
                    : (
                        <div className="container py-5">
                            <ItemList items={list} />
                        </div>
                    )
            }
        </div>
    )
}
export default ItemListContainer;