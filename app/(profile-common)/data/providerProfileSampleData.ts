




export type Location = {
  latitude: number;
  longitude: number;
};


export type StripeAccount = {
  accountId: string | null; // null if not connected
  accountType: string; // e.g., "Stripe Account"
};

export type ProviderProfile = {
  id: string;
  name: string;
  email: string;
  phone: string;
  avatar: string;
  userType: 'provider';

  // Provider-specific
  businessName?: string;
  experienceYears: number;
  rating: number;
  totalReviews: number;
  isVerified: boolean;

  address: string;
  location: Location;

  // Stripe
  stripeAccount?: StripeAccount;
};

export const providerProfileSampleData: ProviderProfile = {
  id: '101',
  name: 'John Service Pro',
  email: 'john.service@provider.com',
  phone: '+880 1800 111111',
  avatar: 'https://randomuser.me/api/portraits/men/32.jpg',
  userType: 'provider',

  businessName: 'QuickFix Services',
  experienceYears: 5,
  rating: 4.8,
  totalReviews: 126,
  isVerified: true,

  address: 'Gulshan, Dhaka, Bangladesh',
  location: {
    latitude: 23.7925,
    longitude: 90.4078,
  },

  stripeAccount: {
    accountId: '0016563228', // 🔥 change to actual id if connected
    accountType: 'Stripe Account',
  },
};
