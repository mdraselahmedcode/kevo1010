

export type Review = {
  id: string;
  providerId: string; // 🔥 VERY IMPORTANT
  customerName: string;
  customerAvatar: string;
  rating: number;
  comment: string;
  date: string;
  verified?: boolean;
};

export const mockReviews: Review[] = [
  {
    id: '1',
    providerId: 'prov-1',
    customerName: 'Kristin Watson',
    customerAvatar: 'https://randomuser.me/api/portraits/women/44.jpg',
    rating: 3,
    comment:
      'Please take a moment to rate and review the service provider based on your experience.',
    date: 'Nov 12, 2022',
    verified: true,
  },
  {
    id: '2',
    providerId: 'prov-1',
    customerName: 'Cameron Williamson',
    customerAvatar: 'https://randomuser.me/api/portraits/men/32.jpg',
    rating: 5,
    comment:
      'Excellent service! Arrived on time, professional, and completed the job perfectly.',
    date: 'Dec 5, 2022',
    verified: true,
  },
  {
    id: '3',
    providerId: 'prov-1',
    customerName: 'Jenny Wilson',
    customerAvatar: 'https://randomuser.me/api/portraits/women/65.jpg',
    rating: 4,
    comment:
      'Very reliable and thorough. Minor delay in starting, but overall a great experience.',
    date: 'Jan 18, 2023',
    verified: false,
  },
  {
    id: '4',
    providerId: 'prov-1',
    customerName: 'Brooklyn Simmons',
    customerAvatar: 'https://randomuser.me/api/portraits/men/76.jpg',
    rating: 5,
    comment:
      'Amazing work! They handled everything professionally.',
    date: 'Feb 8, 2023',
    verified: true,
  },
  {
    id: '5',
    providerId: 'prov-1',
    customerName: 'Leslie Alexander',
    customerAvatar: 'https://randomuser.me/api/portraits/women/21.jpg',
    rating: 2,
    comment:
      'Service was okay but not as quick as expected.',
    date: 'Mar 15, 2023',
    verified: false,
  },
  {
    id: '6',
    providerId: 'prov-1',
    customerName: 'Darlene Robertson',
    customerAvatar: 'https://randomuser.me/api/portraits/women/35.jpg',
    rating: 4,
    comment:
      'Professional and courteous. Completed the job efficiently.',
    date: 'Apr 10, 2023',
    verified: true,
  },

  // 🔥 Added More Reviews

  {
    id: '7',
    providerId: 'prov-1',
    customerName: 'Ralph Edwards',
    customerAvatar: 'https://randomuser.me/api/portraits/men/22.jpg',
    rating: 5,
    comment:
      'Outstanding service! Very punctual and detail-oriented.',
    date: 'May 2, 2023',
    verified: true,
  },
  {
    id: '8',
    providerId: 'prov-1',
    customerName: 'Savannah Nguyen',
    customerAvatar: 'https://randomuser.me/api/portraits/women/50.jpg',
    rating: 4,
    comment:
      'Good communication and solid work quality.',
    date: 'Jun 18, 2023',
    verified: true,
  },
  {
    id: '9',
    providerId: 'prov-1',
    customerName: 'Guy Hawkins',
    customerAvatar: 'https://randomuser.me/api/portraits/men/40.jpg',
    rating: 3,
    comment:
      'Service was average. Could improve response time.',
    date: 'Jul 9, 2023',
    verified: false,
  },
  {
    id: '10',
    providerId: 'prov-1',
    customerName: 'Courtney Henry',
    customerAvatar: 'https://randomuser.me/api/portraits/women/68.jpg',
    rating: 5,
    comment:
      'Highly recommend! Everything was handled professionally from start to finish.',
    date: 'Aug 21, 2023',
    verified: true,
  },
  {
    id: '11',
    providerId: 'prov-1',
    customerName: 'Jacob Jones',
    customerAvatar: 'https://randomuser.me/api/portraits/men/14.jpg',
    rating: 4,
    comment:
      'Great seasonal maintenance service. Will book again.',
    date: 'Sep 30, 2023',
    verified: true,
  },
  {
    id: '12',
    providerId: 'prov-1',
    customerName: 'Esther Howard',
    customerAvatar: 'https://randomuser.me/api/portraits/women/12.jpg',
    rating: 5,
    comment:
      'Exceptional attention to detail. Very satisfied.',
    date: 'Oct 15, 2023',
    verified: true,
  },
];
