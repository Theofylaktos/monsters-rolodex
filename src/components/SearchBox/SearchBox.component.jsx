import React from "react";
import './SearchBox.styles.css'

export const SearchBox = ({ placeholder, handleSearchBoxChange }) => {
        return(
                <input className='search' type='search' placeholder={placeholder} onChange={handleSearchBoxChange}/>
            )
};