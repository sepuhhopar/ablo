import { useState } from 'react';
import { useParams, useNavigate } from 'react-router';
import { Check, ShoppingCart } from 'lucide-react';
import { getPlanById } from '../data/countries';
import { toast } from 'sonner';

export function PlanDetails() {
  const { planId } = useParams<{ planId: string }>();
  const navigate = useNavigate();
  const plan = planId ? getPlanById(planId) : undefined;
  const [isAdding, setIsAdding] = useState(false);

  if (!plan) {
    return (
      <div className="flex items-center justify-center h-full">
        <p className="text-gray-500">Plan not found</p>
      </div>
    );
  }

  const handleAddToCart = () => {
    setIsAdding(true);
    
    // Get existing cart from localStorage
    const existingCart = localStorage.getItem('cart');
    const cart = existingCart ? JSON.parse(existingCart) : [];
    
    // Add plan to cart
    cart.push({
      id: plan.id,
      planId: plan.id,
      countryName: plan.countryName,
      flag: plan.flag,
      data: plan.data,
      duration: plan.duration,
      price: plan.price,
      quantity: 1
    });
    
    localStorage.setItem('cart', JSON.stringify(cart));
    
    setTimeout(() => {
      setIsAdding(false);
      toast.success('Added to cart!');
    }, 300);
  };

  return (
    <div className="pb-24">
      {/* Plan Header */}
      <div className="bg-gradient-to-br from-blue-500 via-blue-600 to-purple-600 text-white px-6 py-10">
        <div className="text-6xl mb-4">{plan.flag}</div>
        <h2 className="text-2xl font-bold mb-2">{plan.countryName}</h2>
        <div className="flex items-center gap-3">
          <span className="text-4xl font-bold">{plan.data}</span>
          <div className="text-blue-50 text-sm">{plan.duration} days</div>
        </div>
      </div>

      {/* Price Card */}
      <div className="px-6 -mt-6 mb-8">
        <div className="bg-white rounded-3xl shadow-xl p-6">
          <div className="text-center">
            <div className="text-sm text-gray-500 mb-2">Total Price</div>
            <div className="text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-1">
              ${plan.price}
            </div>
            <div className="text-sm text-gray-400">One-time payment</div>
          </div>
        </div>
      </div>

      {/* Features */}
      <div className="px-6 mb-8">
        <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-4">Included</h3>
        <div className="bg-white rounded-2xl p-5 shadow-sm space-y-3">
          {plan.features.map((feature, idx) => (
            <div key={idx} className="flex items-center gap-3">
              <div className="w-5 h-5 rounded-full bg-green-500 flex items-center justify-center flex-shrink-0">
                <Check className="w-3 h-3 text-white" strokeWidth={3} />
              </div>
              <div className="text-sm text-gray-700">{feature}</div>
            </div>
          ))}
          <div className="flex items-center gap-3">
            <div className="w-5 h-5 rounded-full bg-green-500 flex items-center justify-center flex-shrink-0">
              <Check className="w-3 h-3 text-white" strokeWidth={3} />
            </div>
            <div className="text-sm text-gray-700">{plan.coverage}</div>
          </div>
        </div>
      </div>

      {/* How it Works */}
      <div className="px-6">
        <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-4">How it Works</h3>
        <div className="space-y-3">
          <div className="bg-white rounded-2xl p-4 shadow-sm flex gap-4">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 text-white flex items-center justify-center flex-shrink-0 font-bold">
              1
            </div>
            <div className="flex-1 pt-1">
              <div className="font-semibold text-gray-900 mb-1">Purchase</div>
              <div className="text-sm text-gray-500">
                Complete checkout & get QR code
              </div>
            </div>
          </div>
          <div className="bg-white rounded-2xl p-4 shadow-sm flex gap-4">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 text-white flex items-center justify-center flex-shrink-0 font-bold">
              2
            </div>
            <div className="flex-1 pt-1">
              <div className="font-semibold text-gray-900 mb-1">Install</div>
              <div className="text-sm text-gray-500">
                Scan QR code on your device
              </div>
            </div>
          </div>
          <div className="bg-white rounded-2xl p-4 shadow-sm flex gap-4">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 text-white flex items-center justify-center flex-shrink-0 font-bold">
              3
            </div>
            <div className="flex-1 pt-1">
              <div className="font-semibold text-gray-900 mb-1">Connect</div>
              <div className="text-sm text-gray-500">
                Activate and enjoy mobile data
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Fixed Bottom Button */}
      <div className="fixed bottom-0 left-0 right-0 bg-white/80 backdrop-blur-lg border-t border-gray-200 px-6 py-4 max-w-md mx-auto">
        <button
          onClick={handleAddToCart}
          disabled={isAdding}
          className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold py-4 rounded-2xl flex items-center justify-center gap-2 transition-all disabled:opacity-50 shadow-lg active:scale-[0.98]"
        >
          <ShoppingCart className="w-5 h-5" />
          {isAdding ? 'Adding...' : 'Add to Cart'}
        </button>
      </div>
    </div>
  );
}