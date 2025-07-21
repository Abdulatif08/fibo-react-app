import React from 'react';
import { PizzaCard } from './PizzaCard';
import { Heart } from 'lucide-react';
import { Pizza } from '../types';

interface FavoritesPageProps {
  favorites: Pizza[];
  onAddToCart: (pizza: Pizza) => void;
  onToggleFavorite: (pizza: Pizza) => void;
  isFavorite: (id: number) => boolean;
}

export const FavoritesPage: React.FC<FavoritesPageProps> = ({
  favorites,
  onAddToCart,
  onToggleFavorite,
  isFavorite
}) => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="mb-8">
        <div className="flex items-center gap-3 mb-2">
          <Heart className="w-8 h-8 text-red-500 fill-current" />
          <h2 className="text-3xl font-bold text-gray-900">Your Favorites</h2>
        </div>
        <p className="text-gray-600">
          {favorites.length > 0 
            ? `You have ${favorites.length} favorite pizza${favorites.length > 1 ? 's' : ''}`
            : 'No favorite pizzas yet. Start adding some!'
          }
        </p>
      </div>

      {favorites.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {favorites.map((pizza) => (
            <PizzaCard
              key={pizza.id}
              pizza={pizza}
              onAddToCart={onAddToCart}
              onToggleFavorite={onToggleFavorite}
              isFavorite={isFavorite(pizza.id)}
            />
          ))}
        </div>
      ) : (
        <div className="text-center py-16">
          <Heart className="w-24 h-24 text-gray-300 mx-auto mb-4" />
          <h3 className="text-xl font-semibold text-gray-900 mb-2">No favorites yet</h3>
          <p className="text-gray-600 mb-6">
            Browse our delicious pizzas and add your favorites by clicking the heart icon
          </p>
        </div>
      )}
    </div>
  );
};