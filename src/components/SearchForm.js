import React, { useState } from "react";

const SearchForm = ({ onSearch }) => {
    const [val, setVal] = useState('')

    const sendForm = e => {
        e.preventDefault(); //Hace que no se reinicie la pagina
        onSearch(val)
    }

    const onChangeInput = ({ target }) => {
        setVal(target.value)
    }

    return (
        <form onSubmit={sendForm}>
            <div className="input-group mb-3">
                <input type="text" className="form-control" placeholder="Buscar" name="search" onChange={onChangeInput} />
                <button className="btn btn-outline-secondary" type="submit">Buscar</button>
            </div>
        </form>
    )
}
export default SearchForm;