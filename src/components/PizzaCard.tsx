import React, { useState } from 'react';
import { Heart, Plus, Check } from 'lucide-react';
import { Pizza } from '../types';

interface PizzaCardProps {
  pizza: Pizza;
  onAddToCart: (pizza: Pizza) => void;
  onToggleFavorite: (pizza: Pizza) => void;
  isFavorite: boolean;
}

export const PizzaCard: React.FC<PizzaCardProps> = ({
  pizza,
  onAddToCart,
  onToggleFavorite,
  isFavorite
}) => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [isAdding, setIsAdding] = useState(false);

  const handleAddToCart = async (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    
    setIsAdding(true);
    onAddToCart(pizza);
    
    // Show success state for 1 second
    setTimeout(() => {
      setIsAdding(false);
    }, 1000);
  };

  const handleToggleFavorite = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    onToggleFavorite(pizza);
  };

  return (
    <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group">
      <div className="relative">
        {!imageLoaded && (
          <div className="w-full h-48 bg-gray-200 animate-pulse"></div>
        )}
        <img
          src={pizza.image}
          alt={pizza.name}
          className={`w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105 ${
            imageLoaded ? 'block' : 'hidden'
          }`}
          onLoad={() => setImageLoaded(true)}
        />
        <button
          onClick={handleToggleFavorite}
          className={`absolute top-4 right-4 p-2 rounded-full transition-all duration-200 ${
            isFavorite
              ? 'bg-red-500 text-white shadow-lg'
              : 'bg-white/80 text-gray-600 hover:bg-white hover:text-red-500'
          }`}
        >
          <Heart className={`w-5 h-5 ${isFavorite ? 'fill-current' : ''}`} />
        </button>
        {pizza.isPopular && (
          <div className="absolute top-4 left-4 bg-orange-500 text-white px-3 py-1 rounded-full text-sm font-medium">
            Popular
          </div>
        )}
      </div>
      
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-orange-600 transition-colors">
          {pizza.name}
        </h3>
        <p className="text-gray-600 text-sm mb-3 line-clamp-2">
          {pizza.description}
        </p>
        <div className="mb-4">
          <div className="flex flex-wrap gap-1">
            {pizza.ingredients.slice(0, 3).map((ingredient, index) => (
              <span
                key={index}
                className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded-full"
              >
                {ingredient}
              </span>
            ))}
            {pizza.ingredients.length > 3 && (
              <span className="text-xs text-gray-500">
                +{pizza.ingredients.length - 3} more
              </span>
            )}
          </div>
        </div>
        
        <div className="flex items-center justify-between">
          <div className="text-2xl font-bold text-gray-900">
            {pizza.price.toLocaleString()} UZS
          </div>
          <button
            onClick={handleAddToCart}
            disabled={isAdding}
            className={`px-6 py-2 rounded-full font-medium transition-all duration-200 flex items-center gap-2 ${
              isAdding
                ? 'bg-green-500 text-white'
                : 'bg-orange-500 hover:bg-orange-600 text-white hover:shadow-lg'
            }`}
          >
            {isAdding ? (
              <>
                <Check className="w-4 h-4" />
                Added
              </>
            ) : (
              <>
                <Plus className="w-4 h-4" />
                Add to cart
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
};