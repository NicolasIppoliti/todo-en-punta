import React from "react";
import { Select, MenuItem, FormControl, InputLabel } from "@mui/material";

const CategoryFilter = ({ categories, selectedCategory, onSelectCategory }) => {
    const handleChange = (event) => {
        onSelectCategory(event.target.value);
    };

    return (
        <FormControl fullWidth variant="outlined">
        <InputLabel htmlFor="category">Categoría</InputLabel>
        <Select
            value={selectedCategory}
            onChange={handleChange}
            label="Categoría"
            inputProps={{ name: 'category', id: 'category' }}
        >
            <MenuItem value="">
            <em>Todas</em>
            </MenuItem>
            {categories.map((category, index) => (
            <MenuItem key={index} value={category}>
                {category}
            </MenuItem>
            ))}
        </Select>
        </FormControl>
    );
};  

export default CategoryFilter;