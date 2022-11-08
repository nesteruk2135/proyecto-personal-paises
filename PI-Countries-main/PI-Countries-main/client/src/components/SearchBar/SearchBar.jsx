import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { getNameCountries } from "../../Redux/Actions"
import "./SearchBar.css"
export default function SearchBar({ setCurrentPage }) {
    const dispatch = useDispatch();
    const [name, setName] = useState("");
    function handleSearch(e) {
        e.preventDefault();
        setName("");
        setName(e.target.value);
    }
    function handleEnter(e) {
        if (e.key === "enter") {
            handleSubmit(e)
        }
    }
    function handleSubmit(e) {
        e.preventDefault();
        if (name.length > 2) {
            dispatch(getNameCountries(name))
            setCurrentPage(1)
            setName("")
        } else {
            alert("enter at least three letters")
        }
    }
    return (
        <div className='search-container'>
            <input
                className='search-input'
                type='text'
                placeholder={"Search a Country..."}
                value={name}
                onKeyPress={handleEnter}
                onChange={(e) => handleSearch(e)}
            />
            <button
                className='search-btn'
                type='submit'
                onClick={(e) => handleSubmit(e)}>
                    &gt;
            </button>
        </div>
    )

}