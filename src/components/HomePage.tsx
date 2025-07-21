import React, { useState, useEffect } from 'react';
import { PizzaCard } from './PizzaCard';
import { LoadingSkeleton } from './LoadingSkeleton';
import { pizzas } from '../data/pizzas';
import { Pizza } from '../types';

interface HomePageProps {
  onAddToCart: (pizza: Pizza) => void;
  onToggleFavorite: (pizza: Pizza) => void;
  isFavorite: (id: number) => boolean;
}

export const HomePage: React.FC<HomePageProps> = ({
  onAddToCart,
  onToggleFavorite,
  isFavorite
}) => {
  const [loading, setLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categories = ['All', 'Classic', 'Meat', 'Vegetarian', 'Special', 'Chicken'];

  useEffect(() => {
    // Simulate loading
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  const filteredPizzas = selectedCategory === 'All' 
    ? pizzas 
    : pizzas.filter(pizza => pizza.category === selectedCategory);

  if (loading) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <div className="h-8 bg-gray-300 rounded w-64 mb-4 animate-pulse"></div>
          <div className="h-4 bg-gray-300 rounded w-96 animate-pulse"></div>
        </div>
        <LoadingSkeleton />
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-2">Our Delicious Pizzas</h2>
        <p className="text-gray-600">Choose from our wide selection of freshly made pizzas</p>
      </div>

      {/* Category Filter */}
      <div className="mb-8">
        <div className="flex flex-wrap gap-3">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-2 rounded-full font-medium transition-all duration-200 ${
                selectedCategory === category
                  ? 'bg-orange-500 text-white shadow-lg'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      {/* Pizza Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {filteredPizzas.map((pizza) => (
          <PizzaCard
            key={pizza.id}
            pizza={pizza}
            onAddToCart={onAddToCart}
            onToggleFavorite={onToggleFavorite}
            isFavorite={isFavorite(pizza.id)}
          />
        ))}
      </div>

      {filteredPizzas.length === 0 && (
        <div className="text-center py-12">
          <p className="text-gray-500 text-lg">No pizzas found in this category.</p>
        </div>
      )}
    </div>
  );
};