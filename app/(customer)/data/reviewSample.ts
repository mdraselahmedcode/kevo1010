
export type Review = {
  id: string;
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
    customerName: 'Kristin Watson',
    customerAvatar: 'https://randomuser.me/api/portraits/women/44.jpg',
    rating: 3,
    comment:
      'Please take a moment to rate and review the service provider based on your experience. Your feedback ensures quality and accountability across the platform.',
    date: 'Nov 12, 2022',
    verified: true,
  },
  {
    id: '2',
    customerName: 'Cameron Williamson',
    customerAvatar: 'https://randomuser.me/api/portraits/men/32.jpg',
    rating: 5,
    comment:
      'Excellent service! Arrived on time, professional, and completed the job perfectly. I will definitely hire again.',
    date: 'Dec 5, 2022',
    verified: true,
  },
  {
    id: '3',
    customerName: 'Jenny Wilson',
    customerAvatar: 'https://randomuser.me/api/portraits/women/65.jpg',
    rating: 4,
    comment:
      'Very reliable and thorough. Minor delay in starting, but overall a great experience and highly recommended.',
    date: 'Jan 18, 2023',
    verified: false,
  },
  {
    id: '4',
    customerName: 'Brooklyn Simmons',
    customerAvatar: 'https://randomuser.me/api/portraits/men/76.jpg',
    rating: 5,
    comment:
      'Amazing work! They handled all the snow removal and lawn services professionally. Definitely impressed.',
    date: 'Feb 8, 2023',
    verified: true,
  },
  {
    id: '5',
    customerName: 'Leslie Alexander',
    customerAvatar: 'https://randomuser.me/api/portraits/women/21.jpg',
    rating: 2,
    comment:
      'Service was okay but not as quick as expected. The work quality was decent, but communication could be improved.',
    date: 'Mar 15, 2023',
    verified: false,
  },
  {
    id: '6',
    customerName: 'Darlene Robertson',
    customerAvatar: 'https://randomuser.me/api/portraits/women/35.jpg',
    rating: 4,
    comment:
      'Professional and courteous. Completed the job efficiently. Would hire again for seasonal contracts.',
    date: 'Apr 10, 2023',
    verified: true,
  },
];
