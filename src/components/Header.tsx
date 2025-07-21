import React from 'react';
import { Pizza, ShoppingCart, Heart, Home } from 'lucide-react';

interface HeaderProps {
  currentPage: 'home' | 'favorites' | 'cart';
  onPageChange: (page: 'home' | 'favorites' | 'cart') => void;
  cartItemsCount: number;
  favoritesCount: number;
}

export const Header: React.FC<HeaderProps> = ({
  currentPage,
  onPageChange,
  cartItemsCount,
  favoritesCount
}) => {
  return (
    <header className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-3">
            <div className="bg-orange-500 p-2 rounded-xl">
              <Pizza className="w-8 h-8 text-white" />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-gray-900">Fibo Pizza</h1>
              <p className="text-sm text-gray-600">Delicious pizzas delivered</p>
            </div>
          </div>
          
          <nav className="flex items-center gap-2">
            <button
              onClick={() => onPageChange('home')}
              className={`flex items-center gap-2 px-4 py-2 rounded-xl transition-all duration-200 ${
                currentPage === 'home'
                  ? 'bg-orange-500 text-white shadow-lg'
                  : 'text-gray-600 hover:bg-gray-100'
              }`}
            >
              <Home className="w-5 h-5" />
              <span className="hidden sm:block">Home</span>
            </button>
            
            <button
              onClick={() => onPageChange('favorites')}
              className={`flex items-center gap-2 px-4 py-2 rounded-xl transition-all duration-200 relative ${
                currentPage === 'favorites'
                  ? 'bg-orange-500 text-white shadow-lg'
                  : 'text-gray-600 hover:bg-gray-100'
              }`}
            >
              <Heart className="w-5 h-5" />
              <span className="hidden sm:block">Favorites</span>
              {favoritesCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  {favoritesCount}
                </span>
              )}
            </button>
            
            <button
              onClick={() => onPageChange('cart')}
              className={`flex items-center gap-2 px-4 py-2 rounded-xl transition-all duration-200 relative ${
                currentPage === 'cart'
                  ? 'bg-orange-500 text-white shadow-lg'
                  : 'text-gray-600 hover:bg-gray-100'
              }`}
            >
              <ShoppingCart className="w-5 h-5" />
              <span className="hidden sm:block">Cart</span>
              {cartItemsCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  {cartItemsCount}
                </span>
              )}
            </button>
          </nav>
        </div>
      </div>
    </header>
  );
};