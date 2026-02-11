export type Conversation = {
  jobId: string;
  title: string;
  lastMessage: string;
  updatedAt: string;
  unreadCount?: number;

  participantName: string;
  participantAvatar?: string;
};

