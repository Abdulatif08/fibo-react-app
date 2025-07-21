import { useState, useEffect } from 'react';
import { Pizza } from '../types';

export const useFavorites = () => {
  const [favorites, setFavorites] = useState<Pizza[]>([]);

  useEffect(() => {
    const savedFavorites = localStorage.getItem('fibo-pizza-favorites');
    if (savedFavorites) {
      setFavorites(JSON.parse(savedFavorites));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('fibo-pizza-favorites', JSON.stringify(favorites));
  }, [favorites]);

  const addToFavorites = (pizza: Pizza) => {
    setFavorites(prev => {
      if (prev.find(item => item.id === pizza.id)) {
        return prev;
      }
      return [...prev, pizza];
    });
  };

  const removeFromFavorites = (id: number) => {
    setFavorites(prev => prev.filter(item => item.id !== id));
  };

  const isFavorite = (id: number) => {
    return favorites.some(item => item.id === id);
  };

  const toggleFavorite = (pizza: Pizza) => {
    if (isFavorite(pizza.id)) {
      removeFromFavorites(pizza.id);
    } else {
      addToFavorites(pizza);
    }
  };

  return {
    favorites,
    addToFavorites,
    removeFromFavorites,
    isFavorite,
    toggleFavorite
  };
};