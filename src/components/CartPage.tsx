import React from 'react';
import { Minus, Plus, Trash2, ShoppingCart } from 'lucide-react';
import { CartItem } from '../types';

interface CartPageProps {
  cartItems: CartItem[];
  onUpdateQuantity: (id: number, quantity: number) => void;
  onRemoveFromCart: (id: number) => void;
  onClearCart: () => void;
  totalPrice: number;
}

export const CartPage: React.FC<CartPageProps> = ({
  cartItems,
  onUpdateQuantity,
  onRemoveFromCart,
  onClearCart,
  totalPrice
}) => {
  const handleCheckout = () => {
    alert('Checkout functionality would be implemented here!');
  };

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="mb-8">
        <div className="flex items-center gap-3 mb-2">
          <ShoppingCart className="w-8 h-8 text-orange-500" />
          <h2 className="text-3xl font-bold text-gray-900">Your Cart</h2>
        </div>
        <p className="text-gray-600">
          {cartItems.length > 0 
            ? `${cartItems.length} item${cartItems.length > 1 ? 's' : ''} in your cart`
            : 'Your cart is empty'
          }
        </p>
      </div>

      {cartItems.length > 0 ? (
        <div className="space-y-6">
          {/* Cart Items */}
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
            {cartItems.map((item, index) => (
              <div key={item.id} className={`p-6 ${index !== cartItems.length - 1 ? 'border-b border-gray-200' : ''}`}>
                <div className="flex items-center gap-4">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-20 h-20 object-cover rounded-xl"
                  />
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-gray-900 mb-1">{item.name}</h3>
                    <p className="text-gray-600 text-sm mb-2">{item.description}</p>
                    <div className="text-lg font-bold text-orange-600">
                      {item.price.toLocaleString()} UZS
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="flex items-center gap-2 bg-gray-100 rounded-lg p-1">
                      <button
                        onClick={() => onUpdateQuantity(item.id, item.quantity - 1)}
                        className="p-2 hover:bg-gray-200 rounded-lg transition-colors"
                      >
                        <Minus className="w-4 h-4" />
                      </button>
                      <span className="w-8 text-center font-semibold">{item.quantity}</span>
                      <button
                        onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}
                        className="p-2 hover:bg-gray-200 rounded-lg transition-colors"
                      >
                        <Plus className="w-4 h-4" />
                      </button>
                    </div>
                    <button
                      onClick={() => onRemoveFromCart(item.id)}
                      className="p-2 text-red-500 hover:bg-red-50 rounded-lg transition-colors"
                    >
                      <Trash2 className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Order Summary */}
          <div className="bg-white rounded-2xl shadow-lg p-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Order Summary</h3>
            <div className="space-y-3 mb-6">
              {cartItems.map((item) => (
                <div key={item.id} className="flex justify-between text-gray-600">
                  <span>{item.name} × {item.quantity}</span>
                  <span>{(item.price * item.quantity).toLocaleString()} UZS</span>
                </div>
              ))}
              <div className="border-t border-gray-200 pt-3">
                <div className="flex justify-between text-xl font-bold text-gray-900">
                  <span>Total</span>
                  <span>{totalPrice.toLocaleString()} UZS</span>
                </div>
              </div>
            </div>
            
            <div className="flex gap-3">
              <button
                onClick={onClearCart}
                className="flex-1 px-6 py-3 border border-gray-300 text-gray-700 rounded-xl hover:bg-gray-50 transition-colors font-medium"
              >
                Clear Cart
              </button>
              <button
                onClick={handleCheckout}
                className="flex-1 px-6 py-3 bg-orange-500 text-white rounded-xl hover:bg-orange-600 transition-colors font-medium"
              >
                Checkout
              </button>
            </div>
          </div>
        </div>
      ) : (
        <div className="text-center py-16">
          <ShoppingCart className="w-24 h-24 text-gray-300 mx-auto mb-4" />
          <h3 className="text-xl font-semibold text-gray-900 mb-2">Your cart is empty</h3>
          <p className="text-gray-600 mb-6">
            Add some delicious pizzas to your cart to get started
          </p>
        </div>
      )}
    </div>
  );
};