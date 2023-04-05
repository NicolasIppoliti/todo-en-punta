import React, {useState} from "react";
import { Select, MenuItem } from "@mui/material";

const CategoryFilter = ({ categories, onFilter }) => {
    const [selectedCategory, setSelectedCategory] = useState("");

    const handleChange = (event) => {
        setSelectedCategory(event.target.value);
        onFilter(event.target.value);
    };

    return (
        <Select
        value={selectedCategory}
        onChange={handleChange}
        fullWidth
        >
        <MenuItem value="">Todas las categorías</MenuItem>
        {categories.map((category) => (
            <MenuItem key={category} value={category}>
            {category}
            </MenuItem>
        ))}
        </Select>
    );
};

export default CategoryFilter;