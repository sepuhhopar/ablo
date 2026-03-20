import { useState } from 'react';
import { useNavigate } from 'react-router';
import { Search, Globe } from 'lucide-react';
import { countries } from '../data/countries';

export function Home() {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState('');

  const popularCountries = countries.filter(c => c.popular);
  const filteredCountries = countries.filter(c => 
    c.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="pb-6">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-blue-500 via-blue-600 to-purple-600 text-white px-6 pt-8 pb-12">
        <div className="flex items-center gap-2 mb-4">
          <Globe className="w-8 h-8" />
          <span className="text-sm font-medium bg-white/20 px-3 py-1 rounded-full">190+ Countries</span>
        </div>
        <h2 className="text-3xl font-bold mb-3">Travel with <br />Confidence</h2>
        <p className="text-blue-50 text-sm">
          Instant eSIM activation worldwide
        </p>
      </div>

      {/* Search Bar */}
      <div className="px-6 -mt-6 mb-8">
        <div className="relative">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
          <input
            type="text"
            placeholder="Where are you going?"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-12 pr-4 py-4 rounded-2xl bg-white text-gray-900 placeholder-gray-500 shadow-lg border-0 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
      </div>

      {/* Popular or Search Results */}
      <div className="px-6">
        {!searchQuery ? (
          <>
            <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-4">
              Popular
            </h3>
            <div className="grid grid-cols-3 gap-3">
              {popularCountries.slice(0, 9).map((country) => (
                <button
                  key={country.id}
                  onClick={() => navigate(`/country/${country.id}`)}
                  className="bg-white rounded-2xl p-4 shadow-sm hover:shadow-md transition-all active:scale-95"
                >
                  <div className="text-4xl mb-2">{country.flag}</div>
                  <div className="text-xs font-medium text-gray-900 line-clamp-1">{country.name}</div>
                </button>
              ))}
            </div>
          </>
        ) : (
          <div className="space-y-2">
            {filteredCountries.length > 0 ? (
              filteredCountries.map((country) => (
                <button
                  key={country.id}
                  onClick={() => navigate(`/country/${country.id}`)}
                  className="w-full bg-white rounded-2xl p-4 shadow-sm hover:shadow-md transition-all active:scale-[0.98] flex items-center gap-4"
                >
                  <div className="text-4xl">{country.flag}</div>
                  <div className="text-left">
                    <div className="font-semibold text-gray-900">{country.name}</div>
                    <div className="text-sm text-gray-500">{country.region}</div>
                  </div>
                </button>
              ))
            ) : (
              <div className="text-center py-12 text-gray-400">
                No countries found
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}