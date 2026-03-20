import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router';
import { Trash2, ShoppingBag } from 'lucide-react';
import { toast } from 'sonner';

interface CartItem {
  id: string;
  planId: string;
  countryName: string;
  flag: string;
  data: string;
  duration: number;
  price: number;
  quantity: number;
}

export function Cart() {
  const navigate = useNavigate();
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [isCheckingOut, setIsCheckingOut] = useState(false);

  useEffect(() => {
    loadCart();
  }, []);

  const loadCart = () => {
    const existingCart = localStorage.getItem('cart');
    if (existingCart) {
      setCartItems(JSON.parse(existingCart));
    }
  };

  const removeItem = (itemId: string) => {
    const updatedCart = cartItems.filter(item => item.id !== itemId);
    setCartItems(updatedCart);
    localStorage.setItem('cart', JSON.stringify(updatedCart));
    toast.success('Removed from cart');
  };

  const handleCheckout = () => {
    setIsCheckingOut(true);
    
    // Simulate checkout process
    setTimeout(() => {
      // Save order to orders history
      const existingOrders = localStorage.getItem('orders');
      const orders = existingOrders ? JSON.parse(existingOrders) : [];
      
      const newOrder = {
        id: `order-${Date.now()}`,
        date: new Date().toISOString(),
        items: cartItems,
        total: totalPrice,
        status: 'completed'
      };
      
      orders.unshift(newOrder);
      localStorage.setItem('orders', JSON.stringify(orders));
      
      // Clear cart
      localStorage.removeItem('cart');
      setCartItems([]);
      setIsCheckingOut(false);
      
      toast.success('Order completed successfully!');
      navigate('/orders');
    }, 1500);
  };

  const totalPrice = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

  if (cartItems.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center h-full px-6 text-center">
        <div className="w-24 h-24 bg-gradient-to-br from-blue-100 to-purple-100 rounded-3xl flex items-center justify-center mb-4">
          <ShoppingBag className="w-12 h-12 text-blue-600" />
        </div>
        <h3 className="text-2xl font-bold text-gray-900 mb-2">Cart Empty</h3>
        <p className="text-gray-500 mb-8">
          Add eSIM plans to get started
        </p>
        <button
          onClick={() => navigate('/')}
          className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-3 rounded-2xl font-semibold transition-all shadow-lg active:scale-95"
        >
          Browse Plans
        </button>
      </div>
    );
  }

  return (
    <div className="pb-32 px-6 pt-6">
      {/* Cart Items */}
      <div className="space-y-3 mb-6">
        {cartItems.map((item) => (
          <div
            key={item.id}
            className="bg-white rounded-2xl p-4 shadow-sm"
          >
            <div className="flex items-start gap-4">
              <div className="text-4xl">{item.flag}</div>
              <div className="flex-1 min-w-0">
                <h3 className="font-semibold text-gray-900 mb-1">
                  {item.countryName}
                </h3>
                <div className="text-sm text-gray-500 mb-2">
                  {item.data} • {item.duration} days
                </div>
                <div className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  ${item.price.toFixed(2)}
                </div>
              </div>
              <button
                onClick={() => removeItem(item.id)}
                className="p-2 hover:bg-red-50 rounded-xl transition-colors"
              >
                <Trash2 className="w-5 h-5 text-red-500" />
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Fixed Bottom Checkout */}
      <div className="fixed bottom-0 left-0 right-0 bg-white/80 backdrop-blur-lg border-t border-gray-200 px-6 py-4 max-w-md mx-auto">
        <div className="flex items-center justify-between mb-3">
          <span className="text-gray-600">Total</span>
          <span className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            ${totalPrice.toFixed(2)}
          </span>
        </div>
        <button
          onClick={handleCheckout}
          disabled={isCheckingOut}
          className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold py-4 rounded-2xl transition-all disabled:opacity-50 shadow-lg active:scale-[0.98]"
        >
          {isCheckingOut ? 'Processing...' : 'Checkout'}
        </button>
      </div>
    </div>
  );
}