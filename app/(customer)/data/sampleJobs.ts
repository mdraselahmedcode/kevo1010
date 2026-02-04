// FINAL JOB STATUS ENUM
export type JobStatus = 'created' | 'in-progress' | 'completed';

// Provider applications (before selection)
export type ProviderApplication = {
  id: string;
  provider: string;
  rating: number;
  counterOffer?: number;
  status: 'pending' | 'rejected';
  profileImage?: string;
  verified?: boolean;
  address?: string; // provider address
  distance?: string; // distance from customer (e.g., "5 km")
  jobsCompleted?: number; // total completed jobs
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
};

export type JobType = 'instant' | 'scheduled';

export type Job = {
  id: string;
  service: string;
  date: string;
  time: string;
  price: number;
  status: JobStatus;
  type: JobType; // <-- new field

  assignedProvider?: AssignedProvider;
  applications?: ProviderApplication[];
  images?: string[];
};

export const sampleJobs: Job[] = [
  // 🟠 CREATED - Instant (no date/time)
  {
    id: '1',
    service: 'Snow Shoveling',
    date: '', // instant job has no specific date
    time: '', // instant job has no specific time
    price: 90,
    status: 'created',
    type: 'instant',
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
      },
    ],
    images: [
      'https://as1.ftcdn.net/v2/jpg/01/06/29/66/1000_F_106296662_GdtuGahePsFJCOqTvFTLFOXCU09fYVae.jpg',
      'https://as1.ftcdn.net/v2/jpg/00/61/14/36/1000_F_61143631_8MQwdPKZoMo9MAPTr5GwXcRJGZILSDPQ.jpg',
      'https://as1.ftcdn.net/v2/jpg/12/24/77/88/1000_F_1224778856_9Kc6TAj0klv6K9z0G6NrodmAgRel9WiQ.jpg',
    ],
  },

  // 🟠 CREATED - Scheduled (has date/time)
  {
    id: '2',
    service: 'Salting / De-icing',
    date: '02/07/2026',
    time: '1:00 PM',
    price: 75,
    status: 'created',
    type: 'scheduled',
    applications: [],
    images: [
      'https://as1.ftcdn.net/v2/jpg/00/61/14/36/1000_F_61143631_8MQwdPKZoMo9MAPTr5GwXcRJGZILSDPQ.jpg',
      'https://as1.ftcdn.net/v2/jpg/12/24/77/88/1000_F_1224778856_9Kc6TAj0klv6K9z0G6NrodmAgRel9WiQ.jpg',
    ],
  },

  // 🔵 IN-PROGRESS - Scheduled
  {
    id: '3',
    service: 'Snow Plowing',
    date: '02/05/2026',
    time: '10:00 AM',
    price: 180,
    status: 'in-progress',
    type: 'scheduled',
    assignedProvider: {
      id: 'assigned-prov-1',
      provider: 'John Doe',
      rating: 4.8,
      agreedPrice: 200,
      profileImage: 'https://randomuser.me/api/portraits/men/3.jpg',
      verified: true,
      address: '789 Pine St, Ann Arbor, MI',
      distance: '6 km',
      jobsCompleted: 40,
    },
    images: [
      'https://as1.ftcdn.net/v2/jpg/12/24/77/88/1000_F_1224778856_9Kc6TAj0klv6K9z0G6NrodmAgRel9WiQ.jpg',
      'https://as1.ftcdn.net/v2/jpg/00/61/14/36/1000_F_61143631_8MQwdPKZoMo9MAPTr5GwXcRJGZILSDPQ.jpg',
    ],
  },

  // ✅ COMPLETED - Scheduled
  {
    id: '4',
    service: 'Lawn Mowing',
    date: '02/03/2026',
    time: '2:00 PM',
    price: 120,
    status: 'completed',
    type: 'scheduled',
    assignedProvider: {
      id: 'assigned-prov-2',
      provider: 'Jane Smith',
      rating: 4.5,
      profileImage: 'https://randomuser.me/api/portraits/men/4.jpg',
      verified: true,
      address: '321 Maple St, Ann Arbor, MI',
      distance: '4 km',
      jobsCompleted: 35,
    },
    images: [
      'https://as1.ftcdn.net/v2/jpg/00/61/14/36/1000_F_61143631_8MQwdPKZoMo9MAPTr5GwXcRJGZILSDPQ.jpg',
    ],
  },
];
