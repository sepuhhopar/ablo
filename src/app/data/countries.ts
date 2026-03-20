export interface Country {
  id: string;
  name: string;
  flag: string;
  region: string;
  popular: boolean;
}

export interface Plan {
  id: string;
  countryId: string;
  countryName: string;
  flag: string;
  data: string;
  duration: number;
  price: number;
  coverage: string;
  validity: string;
  type: 'data-only' | 'data-calls' | 'unlimited';
  features: string[];
}

export const countries: Country[] = [
  { id: 'usa', name: 'United States', flag: '🇺🇸', region: 'North America', popular: true },
  { id: 'uk', name: 'United Kingdom', flag: '🇬🇧', region: 'Europe', popular: true },
  { id: 'france', name: 'France', flag: '🇫🇷', region: 'Europe', popular: true },
  { id: 'spain', name: 'Spain', flag: '🇪🇸', region: 'Europe', popular: true },
  { id: 'italy', name: 'Italy', flag: '🇮🇹', region: 'Europe', popular: true },
  { id: 'germany', name: 'Germany', flag: '🇩🇪', region: 'Europe', popular: true },
  { id: 'japan', name: 'Japan', flag: '🇯🇵', region: 'Asia', popular: true },
  { id: 'australia', name: 'Australia', flag: '🇦🇺', region: 'Oceania', popular: true },
  { id: 'thailand', name: 'Thailand', flag: '🇹🇭', region: 'Asia', popular: true },
  { id: 'uae', name: 'United Arab Emirates', flag: '🇦🇪', region: 'Middle East', popular: true },
  { id: 'canada', name: 'Canada', flag: '🇨🇦', region: 'North America', popular: false },
  { id: 'mexico', name: 'Mexico', flag: '🇲🇽', region: 'North America', popular: false },
  { id: 'brazil', name: 'Brazil', flag: '🇧🇷', region: 'South America', popular: false },
  { id: 'singapore', name: 'Singapore', flag: '🇸🇬', region: 'Asia', popular: true },
  { id: 'korea', name: 'South Korea', flag: '🇰🇷', region: 'Asia', popular: false },
  { id: 'china', name: 'China', flag: '🇨🇳', region: 'Asia', popular: false },
  { id: 'turkey', name: 'Turkey', flag: '🇹🇷', region: 'Europe', popular: false },
  { id: 'portugal', name: 'Portugal', flag: '🇵🇹', region: 'Europe', popular: false },
  { id: 'greece', name: 'Greece', flag: '🇬🇷', region: 'Europe', popular: false },
  { id: 'indonesia', name: 'Indonesia', flag: '🇮🇩', region: 'Asia', popular: false },
];

export const plans: Plan[] = [
  // USA Plans
  {
    id: 'usa-1gb',
    countryId: 'usa',
    countryName: 'United States',
    flag: '🇺🇸',
    data: '1 GB',
    duration: 7,
    price: 4.50,
    coverage: 'AT&T, T-Mobile',
    validity: '7 days',
    type: 'data-only',
    features: ['5G network', 'Instant activation', 'Keep your WhatsApp number']
  },
  {
    id: 'usa-3gb',
    countryId: 'usa',
    countryName: 'United States',
    flag: '🇺🇸',
    data: '3 GB',
    duration: 15,
    price: 11.00,
    coverage: 'AT&T, T-Mobile',
    validity: '15 days',
    type: 'data-only',
    features: ['5G network', 'Instant activation', 'Keep your WhatsApp number']
  },
  {
    id: 'usa-5gb',
    countryId: 'usa',
    countryName: 'United States',
    flag: '🇺🇸',
    data: '5 GB',
    duration: 30,
    price: 16.00,
    coverage: 'AT&T, T-Mobile',
    validity: '30 days',
    type: 'data-only',
    features: ['5G network', 'Instant activation', 'Keep your WhatsApp number', 'Top-up available']
  },
  {
    id: 'usa-10gb',
    countryId: 'usa',
    countryName: 'United States',
    flag: '🇺🇸',
    data: '10 GB',
    duration: 30,
    price: 26.00,
    coverage: 'AT&T, T-Mobile',
    validity: '30 days',
    type: 'data-only',
    features: ['5G network', 'Instant activation', 'Keep your WhatsApp number', 'Top-up available']
  },
  // UK Plans
  {
    id: 'uk-1gb',
    countryId: 'uk',
    countryName: 'United Kingdom',
    flag: '🇬🇧',
    data: '1 GB',
    duration: 7,
    price: 4.00,
    coverage: 'Vodafone, O2',
    validity: '7 days',
    type: 'data-only',
    features: ['4G/5G network', 'Instant activation', 'Keep your WhatsApp number']
  },
  {
    id: 'uk-3gb',
    countryId: 'uk',
    countryName: 'United Kingdom',
    flag: '🇬🇧',
    data: '3 GB',
    duration: 15,
    price: 10.00,
    coverage: 'Vodafone, O2',
    validity: '15 days',
    type: 'data-only',
    features: ['4G/5G network', 'Instant activation', 'Keep your WhatsApp number']
  },
  {
    id: 'uk-5gb',
    countryId: 'uk',
    countryName: 'United Kingdom',
    flag: '🇬🇧',
    data: '5 GB',
    duration: 30,
    price: 15.00,
    coverage: 'Vodafone, O2',
    validity: '30 days',
    type: 'data-only',
    features: ['4G/5G network', 'Instant activation', 'Keep your WhatsApp number', 'Top-up available']
  },
  // Japan Plans
  {
    id: 'japan-1gb',
    countryId: 'japan',
    countryName: 'Japan',
    flag: '🇯🇵',
    data: '1 GB',
    duration: 7,
    price: 5.00,
    coverage: 'NTT Docomo',
    validity: '7 days',
    type: 'data-only',
    features: ['4G network', 'Instant activation', 'Keep your WhatsApp number']
  },
  {
    id: 'japan-3gb',
    countryId: 'japan',
    countryName: 'Japan',
    flag: '🇯🇵',
    data: '3 GB',
    duration: 15,
    price: 12.00,
    coverage: 'NTT Docomo',
    validity: '15 days',
    type: 'data-only',
    features: ['4G network', 'Instant activation', 'Keep your WhatsApp number']
  },
  {
    id: 'japan-5gb',
    countryId: 'japan',
    countryName: 'Japan',
    flag: '🇯🇵',
    data: '5 GB',
    duration: 30,
    price: 18.00,
    coverage: 'NTT Docomo',
    validity: '30 days',
    type: 'data-only',
    features: ['4G network', 'Instant activation', 'Keep your WhatsApp number', 'Top-up available']
  },
  // France Plans
  {
    id: 'france-1gb',
    countryId: 'france',
    countryName: 'France',
    flag: '🇫🇷',
    data: '1 GB',
    duration: 7,
    price: 4.00,
    coverage: 'Orange, SFR',
    validity: '7 days',
    type: 'data-only',
    features: ['4G/5G network', 'Instant activation', 'Keep your WhatsApp number']
  },
  {
    id: 'france-3gb',
    countryId: 'france',
    countryName: 'France',
    flag: '🇫🇷',
    data: '3 GB',
    duration: 15,
    price: 10.00,
    coverage: 'Orange, SFR',
    validity: '15 days',
    type: 'data-only',
    features: ['4G/5G network', 'Instant activation', 'Keep your WhatsApp number']
  },
  // Thailand Plans
  {
    id: 'thailand-1gb',
    countryId: 'thailand',
    countryName: 'Thailand',
    flag: '🇹🇭',
    data: '1 GB',
    duration: 7,
    price: 3.50,
    coverage: 'AIS, True',
    validity: '7 days',
    type: 'data-only',
    features: ['4G network', 'Instant activation', 'Keep your WhatsApp number']
  },
  {
    id: 'thailand-3gb',
    countryId: 'thailand',
    countryName: 'Thailand',
    flag: '🇹🇭',
    data: '3 GB',
    duration: 15,
    price: 8.00,
    coverage: 'AIS, True',
    validity: '15 days',
    type: 'data-only',
    features: ['4G network', 'Instant activation', 'Keep your WhatsApp number']
  },
  {
    id: 'thailand-5gb',
    countryId: 'thailand',
    countryName: 'Thailand',
    flag: '🇹🇭',
    data: '5 GB',
    duration: 30,
    price: 12.00,
    coverage: 'AIS, True',
    validity: '30 days',
    type: 'data-only',
    features: ['4G network', 'Instant activation', 'Keep your WhatsApp number', 'Top-up available']
  },
  // UAE Plans
  {
    id: 'uae-1gb',
    countryId: 'uae',
    countryName: 'United Arab Emirates',
    flag: '🇦🇪',
    data: '1 GB',
    duration: 7,
    price: 6.00,
    coverage: 'Etisalat, du',
    validity: '7 days',
    type: 'data-only',
    features: ['4G/5G network', 'Instant activation', 'Keep your WhatsApp number']
  },
  {
    id: 'uae-3gb',
    countryId: 'uae',
    countryName: 'United Arab Emirates',
    flag: '🇦🇪',
    data: '3 GB',
    duration: 15,
    price: 14.00,
    coverage: 'Etisalat, du',
    validity: '15 days',
    type: 'data-only',
    features: ['4G/5G network', 'Instant activation', 'Keep your WhatsApp number']
  },
];

export const getCountryById = (id: string): Country | undefined => {
  return countries.find(c => c.id === id);
};

export const getPlansByCountry = (countryId: string): Plan[] => {
  return plans.filter(p => p.countryId === countryId);
};

export const getPlanById = (id: string): Plan | undefined => {
  return plans.find(p => p.id === id);
};
