import React, { useState } from 'react';
import { Header } from './components/Header';
import { HomePage } from './components/HomePage';
import { FavoritesPage } from './components/FavoritesPage';
import { CartPage } from './components/CartPage';
import { useCart } from './hooks/useCart';
import { useFavorites } from './hooks/useFavorites';

type Page = 'home' | 'favorites' | 'cart';

function App() {
  const [currentPage, setCurrentPage] = useState<Page>('home');
  
  const {
    cartItems,
    addToCart,
    removeFromCart,
    updateQuantity,
    clearCart,
    getTotalPrice,
    getTotalItems
  } = useCart();

  const {
    favorites,
    toggleFavorite,
    isFavorite
  } = useFavorites();

  const renderCurrentPage = () => {
    switch (currentPage) {
      case 'home':
        return (
          <HomePage
            onAddToCart={addToCart}
            onToggleFavorite={toggleFavorite}
            isFavorite={isFavorite}
          />
        );
      case 'favorites':
        return (
          <FavoritesPage
            favorites={favorites}
            onAddToCart={addToCart}
            onToggleFavorite={toggleFavorite}
            isFavorite={isFavorite}
          />
        );
      case 'cart':
        return (
          <CartPage
            cartItems={cartItems}
            onUpdateQuantity={updateQuantity}
            onRemoveFromCart={removeFromCart}
            onClearCart={clearCart}
            totalPrice={getTotalPrice()}
          />
        );
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header
        currentPage={currentPage}
        onPageChange={setCurrentPage}
        cartItemsCount={getTotalItems()}
        favoritesCount={favorites.length}
      />
      <main>
        {renderCurrentPage()}
      </main>
    </div>
  );
}

export default App;