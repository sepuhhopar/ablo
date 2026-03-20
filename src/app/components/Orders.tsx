import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router';
import { Package, CheckCircle, QrCode } from 'lucide-react';

interface OrderItem {
  planId: string;
  countryName: string;
  flag: string;
  data: string;
  duration: number;
  price: number;
}

interface Order {
  id: string;
  date: string;
  items: OrderItem[];
  total: number;
  status: string;
}

export function Orders() {
  const navigate = useNavigate();
  const [orders, setOrders] = useState<Order[]>([]);

  useEffect(() => {
    loadOrders();
  }, []);

  const loadOrders = () => {
    const existingOrders = localStorage.getItem('orders');
    if (existingOrders) {
      setOrders(JSON.parse(existingOrders));
    }
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      month: 'short', 
      day: 'numeric', 
      year: 'numeric' 
    });
  };

  if (orders.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center h-full px-6 text-center">
        <div className="w-24 h-24 bg-gradient-to-br from-blue-100 to-purple-100 rounded-3xl flex items-center justify-center mb-4">
          <Package className="w-12 h-12 text-blue-600" />
        </div>
        <h3 className="text-2xl font-bold text-gray-900 mb-2">No Orders Yet</h3>
        <p className="text-gray-500 mb-8">
          Your purchases will appear here
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
    <div className="pb-6 px-6 pt-6">
      {/* Orders List */}
      <div className="space-y-4">
        {orders.map((order) => (
          <div
            key={order.id}
            className="bg-white rounded-2xl shadow-sm overflow-hidden"
          >
            {/* Order Items */}
            <div className="p-5">
              <div className="flex items-center justify-between mb-4">
                <div className="text-sm text-gray-500">
                  {formatDate(order.date)}
                </div>
                <div className="flex items-center gap-1.5 text-green-600">
                  <CheckCircle className="w-4 h-4" />
                  <span className="text-sm font-medium">Complete</span>
                </div>
              </div>

              <div className="space-y-3 mb-4">
                {order.items.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <div className="text-3xl">{item.flag}</div>
                    <div className="flex-1">
                      <div className="font-semibold text-gray-900 mb-0.5">
                        {item.countryName}
                      </div>
                      <div className="text-sm text-gray-500">
                        {item.data} • {item.duration} days
                      </div>
                    </div>
                    <div className="font-semibold text-gray-900">
                      ${item.price.toFixed(2)}
                    </div>
                  </div>
                ))}
              </div>

              <div className="border-t border-gray-100 pt-3 flex items-center justify-between mb-4">
                <span className="font-semibold text-gray-900">Total</span>
                <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  ${order.total.toFixed(2)}
                </span>
              </div>

              <button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold py-3 rounded-xl flex items-center justify-center gap-2 transition-all shadow-md active:scale-[0.98]">
                <QrCode className="w-5 h-5" />
                View QR Code
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}