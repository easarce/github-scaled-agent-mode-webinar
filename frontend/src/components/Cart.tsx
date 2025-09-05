import React from 'react';
import { useCart } from '../context/useCart';
import type { CartItem } from '../context/CartContext';
import { Link } from 'react-router-dom';

const Cart: React.FC = () => {
  const { items, removeItem, updateQuantity, subtotal, shipping, total, clearCart } = useCart();

  if (items.length === 0) {
    return (
      <div className="p-8 text-center">
        <h2 className="text-2xl font-bold mb-4">Your Cart is Empty</h2>
        <Link to="/products" className="text-blue-500 underline">Go Shopping</Link>
      </div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto p-4 bg-white dark:bg-gray-900 rounded shadow">
      <h2 className="text-2xl font-bold mb-6">Your Cart</h2>
      <ul>
        {items.map((item: CartItem) => (
          <li key={item.id} className="flex items-center mb-4 border-b pb-4">
            <img src={item.image} alt={item.name} className="w-16 h-16 object-cover rounded mr-4" />
            <div className="flex-1">
              <div className="font-semibold">{item.name}</div>
              <div className="text-gray-500 dark:text-gray-400">${item.price.toFixed(2)}</div>
              <div className="flex items-center mt-2">
                <button onClick={() => updateQuantity(item.id, Math.max(1, item.quantity - 1))} className="px-2 py-1 bg-gray-200 dark:bg-gray-700 rounded-l">-</button>
                <span className="px-3">{item.quantity}</span>
                <button onClick={() => updateQuantity(item.id, item.quantity + 1)} className="px-2 py-1 bg-gray-200 dark:bg-gray-700 rounded-r">+</button>
              </div>
            </div>
            <button onClick={() => removeItem(item.id)} className="ml-4 text-red-500 hover:text-red-700">Remove</button>
          </li>
        ))}
      </ul>
      <div className="mt-6 border-t pt-4">
        <div className="flex justify-between mb-2">
          <span>Subtotal:</span>
          <span>${subtotal.toFixed(2)}</span>
        </div>
        <div className="flex justify-between mb-2">
          <span>Shipping:</span>
          <span>{shipping === 0 ? 'Free' : `$${shipping.toFixed(2)}`}</span>
        </div>
        <div className="flex justify-between font-bold text-lg">
          <span>Total:</span>
          <span>${total.toFixed(2)}</span>
        </div>
        <button onClick={clearCart} className="mt-6 w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700">Clear Cart</button>
      </div>
    </div>
  );
};

export default Cart;
