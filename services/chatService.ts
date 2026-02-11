import { ChatMessage } from '@/types/chat.types';

let mockDatabase: Record<string, ChatMessage[]> = {
  'job-001': [
    {
      _id: '1',
      text: 'Hello, I am on my way.',
      createdAt: new Date(),
      user: {
        _id: 'provider-1',
        name: 'Provider',
      },
    },
  ],
};

export const chatService = {
  getMessages: async (jobId: string): Promise<ChatMessage[]> => {
    return mockDatabase[jobId] || [];
  },

  sendMessage: async (jobId: string, message: ChatMessage) => {
    if (!mockDatabase[jobId]) {
      mockDatabase[jobId] = [];
    }

    mockDatabase[jobId] = [message, ...mockDatabase[jobId]];
  },
};
