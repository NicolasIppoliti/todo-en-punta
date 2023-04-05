import React, { useState, useEffect } from 'react';
import { Container, Grid } from '@mui/material';
import SearchBar from './components/SearchBar';
import CategoryFilter from './components/CategoryFilter';
import ShopList from './components/ShopList';
import { getShops } from './firestore';

const App = () => {
  const [shops, setShops] = useState([]);
  const [filteredShops, setFilteredShops] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const categories = ['Categoría 1', 'Categoría 2', 'Categoría 3']; // Reemplazar con las categorías que desees.

  useEffect(() => {
    const fetchData = async () => {
      const data = await getShops();
      setShops(data);
    };

    fetchData();
  }, []);

  useEffect(() => {
    const filtered = shops.filter((shop) =>
      shop.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    if (selectedCategory) {
      setFilteredShops(
        filtered.filter((shop) => shop.category === selectedCategory)
      );
    } else {
      setFilteredShops(filtered);
    }
  }, [shops, searchTerm, selectedCategory]);

  return (
    <Container>
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <SearchBar onSearch={(term) => setSearchTerm(term)} />
        </Grid>
        <Grid item xs={12} md={6}>
          <CategoryFilter
            categories={categories}
            onFilter={(category) => setSelectedCategory(category)}
          />
        </Grid>
        <Grid item xs={12}>
          <ShopList shops={filteredShops} />
        </Grid>
      </Grid>
    </Container>
  );
};

export default App;
