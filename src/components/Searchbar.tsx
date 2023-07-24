import React, { useState } from "react";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import { setBlogsOwner } from "../slices/blogsSlice";
import '../assets/Searchbar.css'
import { useNavigate } from "react-router-dom";

export const SearchBar: React.FC = () => {
    const dispatch = useAppDispatch();
    const [searchText, setSearchText] = useState('');
    const navigate = useNavigate();

    function handleSearch() {
        navigate(`/${searchText}/blogs`)
    }

    return (
        <div className="search-bar-container">
            <input 
                type="text"
                value={searchText}
                onChange={(e) => setSearchText(e.target.value)}
                required
                className="search-input"
            />
            <button onClick={handleSearch} className="search-button">Search</button>
        </div>
    )
}