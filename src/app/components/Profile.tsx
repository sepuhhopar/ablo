import { useNavigate } from 'react-router';
import { User, Package, HelpCircle, ChevronRight } from 'lucide-react';

export function Profile() {
  const navigate = useNavigate();

  const menuItems = [
    {
      icon: Package,
      label: 'My Orders',
      onClick: () => navigate('/orders'),
    },
    {
      icon: HelpCircle,
      label: 'Help & Support',
      onClick: () => {},
    },
  ];

  return (
    <div className="pb-6">
      {/* Profile Header */}
      <div className="bg-gradient-to-br from-blue-500 via-blue-600 to-purple-600 text-white px-6 py-12">
        <div className="flex flex-col items-center text-center">
          <div className="w-24 h-24 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center mb-4">
            <User className="w-12 h-12" />
          </div>
          <h2 className="text-2xl font-bold mb-1">Guest User</h2>
          <p className="text-blue-50">guest@example.com</p>
        </div>
      </div>

      {/* Menu Items */}
      <div className="px-6 -mt-6">
        <div className="space-y-3">
          {menuItems.map((item, idx) => (
            <button
              key={idx}
              onClick={item.onClick}
              className="w-full bg-white rounded-2xl p-5 shadow-sm hover:shadow-md transition-all active:scale-[0.98] flex items-center gap-4"
            >
              <div className="w-12 h-12 bg-gradient-to-br from-blue-100 to-purple-100 rounded-2xl flex items-center justify-center flex-shrink-0">
                <item.icon className="w-6 h-6 text-blue-600" />
              </div>
              <div className="flex-1 text-left">
                <div className="font-semibold text-gray-900">
                  {item.label}
                </div>
              </div>
              <ChevronRight className="w-5 h-5 text-gray-400 flex-shrink-0" />
            </button>
          ))}
        </div>
      </div>

      {/* App Info */}
      <div className="px-6 mt-12 text-center">
        <p className="text-sm text-gray-400">TraveleSIM v1.0.0</p>
      </div>
    </div>
  );
}