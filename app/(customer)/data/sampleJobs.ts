// FINAL JOB STATUS ENUM
export type JobStatus = 'created' | 'in-progress' | 'completed';


// Customer completion status (Customer side)
export type CustomerCompletionStatus = 'pending' | 'confirmed' | 'reported';

// Provider applications (before selection)
export type ProviderApplication = {
  id: string;
  provider: string;
  rating: number;
  counterOffer?: number;
  status: 'pending' | 'rejected';
  profileImage?: string;
  verified?: boolean;
  address?: string;
  distance?: string;
  jobsCompleted?: number;
  phoneNumber?: string; // 📞 provider phone
};

// Assigned provider (after selection)
export type AssignedProvider = {
  id: string;
  provider: string;
  rating: number;
  agreedPrice?: number;
  profileImage?: string;
  verified?: boolean;
  address?: string;
  distance?: string;
  jobsCompleted?: number;
  phoneNumber?: string; // 📞 provider phone
};

// Job Type
export type JobType = 'instant' | 'scheduled';

// Job interface
export type Job = {
  id: string;
  service: string;
  date: string;
  time: string;
  price: number;
  serviceCharge?: number;
  status: JobStatus;
  providerDone?: boolean;
  customerRating?: number; 
  customerCompletionStatus?: CustomerCompletionStatus; // customer confirmation

  type: JobType;
  customerAddress: string;
  assignedProvider?: AssignedProvider;
  applications?: ProviderApplication[];
  images?: string[];

  providerBeforeAfterImages?: {
    before: JobImageEntry[];
    after: JobImageEntry[];
  };

  providerNote?: string;
};


export type JobImageEntry = {
  url: string;
  uploadedAt: string; // ISO timestamp
};



// Sample Jobs
export const sampleJobs: Job[] = [
  // Job 1: Created, instant, applications available
  {
    id: '1',
    service: 'Snow Shoveling',
    date: '',
    time: '',
    price: 90,
    status: 'created',
    type: 'instant',
    customerAddress: '123 Main St, Ann Arbor, MI 48104',
    applications: [
      {
        id: 'prov-1',
        provider: 'Mike Johnson',
        rating: 4.9,
        counterOffer: 100,
        status: 'pending',
        profileImage: 'https://randomuser.me/api/portraits/men/1.jpg',
        verified: true,
        address: '123 Main St, Ann Arbor, MI',
        distance: '5 km',
        jobsCompleted: 25,
        phoneNumber: '+17345550111',
      },
      {
        id: 'prov-2',
        provider: 'Alex Brown',
        rating: 4.7,
        counterOffer: 95,
        status: 'pending',
        profileImage: 'https://randomuser.me/api/portraits/men/2.jpg',
        verified: false,
        address: '456 Oak St, Ann Arbor, MI',
        distance: '7 km',
        jobsCompleted: 10,
        phoneNumber: '+17345550222',
      },
    ],
    images: [
      'https://as1.ftcdn.net/v2/jpg/01/06/29/66/1000_F_106296662_GdtuGahePsFJCOqTvFTLFOXCU09fYVae.jpg',
      'https://as1.ftcdn.net/v2/jpg/00/61/14/36/1000_F_61143631_8MQwdPKZoMo9MAPTr5GwXcRJGZILSDPQ.jpg',
      'https://as1.ftcdn.net/v2/jpg/12/24/77/88/1000_F_1224778856_9Kc6TAj0klv6K9z0G6NrodmAgRel9WiQ.jpg',
    ],
  },

  // Job 2: Created, scheduled, no applications yet
  {
    id: '2',
    service: 'Salting / De-icing',
    date: '02/07/2026',
    time: '1:00 PM',
    price: 75,
    status: 'created',
    type: 'scheduled',
    customerAddress: '456 Elm St, Detroit, MI 48201',
    applications: [],
    images: [
      'https://as1.ftcdn.net/v2/jpg/00/61/14/36/1000_F_61143631_8MQwdPKZoMo9MAPTr5GwXcRJGZILSDPQ.jpg',
      'https://as1.ftcdn.net/v2/jpg/12/24/77/88/1000_F_1224778856_9Kc6TAj0klv6K9z0G6NrodmAgRel9WiQ.jpg',
    ],
  },

  // Job 3: In-progress, provider assigned, provider on site
  {
    id: '3',
    service: 'Snow Plowing',
    date: '02/05/2026',
    time: '10:00 AM',
    price: 180,
    serviceCharge: 20,
    status: 'in-progress',
    type: 'scheduled',
    customerAddress: '789 Pine St, Lansing, MI 48933',
    assignedProvider: {
      id: 'assigned-prov-1',
      provider: 'John Doe',
      rating: 4.8,
      agreedPrice: 200,
      profileImage: 'https://randomuser.me/api/portraits/men/3.jpg',
      verified: true,
      address: '100 Provider Lane, Lansing, MI',
      distance: '6 km',
      jobsCompleted: 40,
      phoneNumber: '+15175552345',
    },
    images: [
      'https://as1.ftcdn.net/v2/jpg/12/24/77/88/1000_F_1224778856_9Kc6TAj0klv6K9z0G6NrodmAgRel9WiQ.jpg',
      'https://as1.ftcdn.net/v2/jpg/00/61/14/36/1000_F_61143631_8MQwdPKZoMo9MAPTr5GwXcRJGZILSDPQ.jpg',
    ],
    providerBeforeAfterImages: {
      before: [
        {
          url: 'https://as1.ftcdn.net/v2/jpg/01/06/29/66/1000_F_106296662_GdtuGahePsFJCOqTvFTLFOXCU09fYVae.jpg',
          uploadedAt: '2026-02-03T14:10:00Z',
        },
      ],
      after: [],
    },
    providerNote: 'Started clearing the driveway, half done so far.',
  },

  // Job 4: Provider finished, waiting for customer confirmation
  {
    id: '4',
    service: 'Lawn Mowing',
    date: '02/03/2026',
    time: '2:00 PM',
    price: 120,
    serviceCharge: 30,
    status: 'in-progress', // still in-progress until customer confirms
    providerDone: true,
    customerCompletionStatus: 'pending', // ⚡ added
    type: 'scheduled',
    customerAddress: '321 Maple St, Grand Rapids, MI 49503',
    assignedProvider: {
      id: 'assigned-prov-2',
      provider: 'Jane Smith',
      rating: 4.5,
      profileImage: 'https://randomuser.me/api/portraits/men/4.jpg',
      verified: true,
      address: '400 Provider Rd, Grand Rapids, MI',
      distance: '4 km',
      jobsCompleted: 35,
      phoneNumber: '+16165553456',
    },
    images: [
      'https://as1.ftcdn.net/v2/jpg/00/61/14/36/1000_F_61143631_8MQwdPKZoMo9MAPTr5GwXcRJGZILSDPQ.jpg',
    ],
    providerBeforeAfterImages: {
      before: [
        {
          url: 'https://as1.ftcdn.net/v2/jpg/01/06/29/66/1000_F_106296662_GdtuGahePsFJCOqTvFTLFOXCU09fYVae.jpg',
          uploadedAt: '2026-02-03T14:10:00Z',
        },
      ],
      after: [
        {
          url: 'https://as1.ftcdn.net/v2/jpg/12/24/77/88/1000_F_1224778856_9Kc6TAj0klv6K9z0G6NrodmAgRel9WiQ.jpg',
          uploadedAt: '2026-02-03T14:45:00Z',
        },
      ],
    },
    providerNote: 'Provider completed the lawn. Waiting for your confirmation.',
  },

  // Job 5: Fully completed, customer confirmed
  {
    id: '5',
    service: 'Garden Cleanup',
    date: '02/01/2026',
    time: '11:00 AM',
    price: 200,
    serviceCharge: 25,
    status: 'completed',
    providerDone: true,
    customerCompletionStatus: 'confirmed', // ⚡ added
    type: 'scheduled',
    customerAddress: '555 Pine St, Grand Rapids, MI',
    customerRating: 5,
    assignedProvider: {
      id: 'assigned-prov-3',
      provider: 'Samuel Green',
      rating: 4.6,
      profileImage: 'https://randomuser.me/api/portraits/men/5.jpg',
      verified: true,
      address: '789 Provider Lane, Grand Rapids, MI',
      distance: '8 km',
      jobsCompleted: 50,
      phoneNumber: '+17345550333',
    },
    images: [
      'https://as1.ftcdn.net/v2/jpg/12/24/77/88/1000_F_1224778856_9Kc6TAj0klv6K9z0G6NrodmAgRel9WiQ.jpg',
    ],
    providerBeforeAfterImages: {
      before: [
        {
          url: 'https://as1.ftcdn.net/v2/jpg/01/06/29/66/1000_F_106296662_GdtuGahePsFJCOqTvFTLFOXCU09fYVae.jpg',
          uploadedAt: '2026-02-01T10:00:00Z',
        },
      ],
      after: [
        {
          url: 'https://as1.ftcdn.net/v2/jpg/12/24/77/88/1000_F_1224778856_9Kc6TAj0klv6K9z0G6NrodmAgRel9WiQ.jpg',
          uploadedAt: '2026-02-01T12:00:00Z',
        },
      ],
    },
    providerNote: 'Cleanup finished and confirmed by customer.',
  },

];






