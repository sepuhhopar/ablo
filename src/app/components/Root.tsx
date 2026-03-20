import { Outlet, useLocation, useNavigate } from 'react-router';
import { Home, ShoppingCart, User } from 'lucide-react';
import { Toaster } from './ui/sonner';

export function Root() {
  const location = useLocation();
  const navigate = useNavigate();
  const isHome = location.pathname === '/';
  const isCart = location.pathname === '/cart';
  const isProfile = location.pathname === '/profile' || location.pathname === '/orders';

  return (
    <div className="h-screen flex flex-col bg-gray-50 max-w-md mx-auto">
      {/* Content */}
      <main className="flex-1 overflow-y-auto">
        <Outlet />
      </main>

      {/* Bottom Navigation */}
      <nav className="bg-white border-t border-gray-100 px-2 py-2 flex items-center justify-around shadow-lg">
        <button
          onClick={() => navigate('/')}
          className={`flex flex-col items-center gap-1 py-2 px-6 rounded-2xl transition-all ${
            isHome ? 'bg-gradient-to-br from-blue-500 to-purple-600 text-white' : 'text-gray-400'
          }`}
        >
          <Home className="w-6 h-6" />
          <span className="text-xs font-medium">Home</span>
        </button>
        <button
          onClick={() => navigate('/cart')}
          className={`flex flex-col items-center gap-1 py-2 px-6 rounded-2xl transition-all ${
            isCart ? 'bg-gradient-to-br from-blue-500 to-purple-600 text-white' : 'text-gray-400'
          }`}
        >
          <ShoppingCart className="w-6 h-6" />
          <span className="text-xs font-medium">Cart</span>
        </button>
        <button
          onClick={() => navigate('/profile')}
          className={`flex flex-col items-center gap-1 py-2 px-6 rounded-2xl transition-all ${
            isProfile ? 'bg-gradient-to-br from-blue-500 to-purple-600 text-white' : 'text-gray-400'
          }`}
        >
          <User className="w-6 h-6" />
          <span className="text-xs font-medium">Profile</span>
        </button>
      </nav>
      
      <Toaster />
    </div>
  );
}