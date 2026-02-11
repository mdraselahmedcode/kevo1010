


import { Conversation } from './types';

/**
 * Mock conversations for now
 * Later this will come from backend
 */
export const mockConversations: Conversation[] = [
  {
    jobId: 'job-001',
    title: 'Snow Plowing',
    participantName: 'John Doe',
    participantAvatar: 'https://i.pravatar.cc/150?img=12',
    lastMessage: 'I am on my way. It will take almost 1 hour to reach ur place.',
    updatedAt: '2 mins ago',
    unreadCount: 1,
  },
  {
    jobId: 'job-002',
    title: 'Lawn Mowing',
    participantName: 'Alex Smith',
    participantAvatar: 'https://i.pravatar.cc/150?img=22',
    lastMessage: 'Job completed.',
    updatedAt: 'Yesterday',
    unreadCount: 0,
  },
  {
    jobId: 'job-003',
    title: 'Roof Cleaning',
    participantName: 'Sarah Jenkins',
    participantAvatar: 'https://i.pravatar.cc/150?img=45',
    lastMessage: 'Could you send over the photos once you are done?',
    updatedAt: '10 mins ago',
    unreadCount: 3,
  },
  {
    jobId: 'job-004',
    title: 'Driveway Sealing',
    participantName: 'Michael Chen',
    participantAvatar: 'https://i.pravatar.cc/150?img=33',
    lastMessage: 'The quote looks good to me, let’s proceed.',
    updatedAt: '1 hour ago',
    unreadCount: 0,
  },
  {
    jobId: 'job-005',
    title: 'Fence Repair',
    participantName: 'Emma Wilson',
    participantAvatar: 'https://i.pravatar.cc/150?img=47',
    lastMessage: 'Are you available to start this Thursday?',
    updatedAt: '3 hours ago',
    unreadCount: 0,
  },
  

  
  
];