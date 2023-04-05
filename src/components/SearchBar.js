import React, { useState } from "react";
import { TextField } from "@mui/material";

const SearchBar = ({ onSearch }) => {
    const [searchTerm, setSearchTerm] = useState("");

    const handleChange = (event) => {
        setSearchTerm(event.target.value);
        onSearch(event.target.value);
    };

    return (
        <TextField
        label="Buscar comercio"
        value={searchTerm}
        onChange={handleChange}
        fullWidth
        />
    );
};

export default SearchBar;