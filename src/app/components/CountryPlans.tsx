import { useParams, useNavigate } from 'react-router';
import { Zap } from 'lucide-react';
import { getCountryById, getPlansByCountry } from '../data/countries';

export function CountryPlans() {
  const { countryId } = useParams<{ countryId: string }>();
  const navigate = useNavigate();
  
  const country = countryId ? getCountryById(countryId) : undefined;
  const plans = countryId ? getPlansByCountry(countryId) : [];

  if (!country) {
    return (
      <div className="flex items-center justify-center h-full">
        <p className="text-gray-500">Country not found</p>
      </div>
    );
  }

  return (
    <div className="pb-6">
      {/* Country Header */}
      <div className="bg-gradient-to-br from-blue-500 via-blue-600 to-purple-600 text-white px-6 py-10">
        <div className="text-6xl mb-4">{country.flag}</div>
        <h2 className="text-3xl font-bold mb-2">{country.name}</h2>
        <p className="text-blue-50">Pick your perfect plan</p>
      </div>

      {/* Plans List */}
      <div className="px-6 -mt-4">
        {plans.length > 0 ? (
          <div className="space-y-3">
            {plans.map((plan) => (
              <button
                key={plan.id}
                onClick={() => navigate(`/plan/${plan.id}`)}
                className="w-full bg-white rounded-2xl p-5 shadow-md hover:shadow-xl transition-all active:scale-[0.98]"
              >
                <div className="flex items-center justify-between mb-3">
                  <div>
                    <div className="text-3xl font-bold text-gray-900 mb-1">
                      {plan.data}
                    </div>
                    <div className="text-sm text-gray-500">
                      {plan.duration} days validity
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                      ${plan.price}
                    </div>
                  </div>
                </div>
                
                <div className="flex items-center gap-1.5 text-xs text-blue-600 bg-blue-50 px-3 py-1.5 rounded-full w-fit">
                  <Zap className="w-3.5 h-3.5" />
                  <span>Instant activation</span>
                </div>
              </button>
            ))}
          </div>
        ) : (
          <div className="text-center py-16 text-gray-400">
            <p>No plans available yet</p>
          </div>
        )}
      </div>
    </div>
  );
}