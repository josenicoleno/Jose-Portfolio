import React, {useEffect, useState} from 'react'
import { useParams } from 'react-router-dom';
import ItemDetail from './ItemDetail';
import { getProduct } from '../firebase/firebase';

const ItemDetailContainer = ()=>{
    const [results, setResults] = useState([])
    const [loading, setLoading] = useState(true)
    const [err, setErr] = useState('')
    const {id} = useParams()
    
    useEffect(() => {
        getProduct(id)
            .then((snp) => setResults(snp))
            .catch(() => setErr('Ocurrió un error'))
            .finally(() => setLoading(false))
    }, [id])

    if (loading){
        return  <div className="spinner-grow" style={{ width: `4rem`, height: `4rem` }} role="status">
        </div>
    }

    if (err.length > 0){
        console.error(err)
    }else{
    return (
        <div>
            <ItemDetail item={results}/>
        </div>
    )} 
}

export default ItemDetailContainer;