// mocks/customerProfileSampleData.ts

export type Location = {
  latitude: number;
  longitude: number;
};

export type StripeAccount = {
  accountId: string | null; // null if not connected
  accountType: string; // e.g., "Stripe Account"
};

export type CustomerProfile = {
  id: string;
  name: string;
  email: string;
  phone: string;
  avatar: string;
  userType: 'customer';
  address: string;
  location: Location;

  // Stripe
    stripeAccount?: StripeAccount;
};

export const customerProfileSampleData: CustomerProfile = {
  id: '1',
  name: 'Rasel Ahmed',
  email: 'mdraselahmed.code@gmail.com',
  phone: '+880 1700 000000',
  avatar: 'https://randomuser.me/api/portraits/men/44.jpg',
  userType: 'customer',
  address: 'Dhaka, Bangladesh',
  location: {
    latitude: 23.8103,
    longitude: 90.4125,
  },
  stripeAccount: {
    accountId: '0830274953', // 🔥 change to actual id if connected
    accountType: 'Stripe Account',
  },
};
