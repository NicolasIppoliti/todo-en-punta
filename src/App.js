import React, { useState, useEffect } from 'react';
import { Container, Grid } from '@mui/material';
import SearchBar from './components/SearchBar';
import CategoryFilter from './components/CategoryFilter';
import ShopList from './components/ShopList';
import { getBusinesses, getCategories } from './firestore';

const App = () => {
  const [shops, setShops] = useState([]);
  const [filteredShops, setFilteredShops] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getBusinesses();
      setShops(data);
    };

    const fetchCategories = async () => {
      const data = await getCategories();
      setCategories(data);
    };

    fetchCategories();
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
        selectedCategory={selectedCategory}
        onSelectCategory={setSelectedCategory}
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
