import { baseApi } from './baseApi';
import { createApi, fakeBaseQuery } from '@reduxjs/toolkit/query/react';

type LoginRequest = {
  email: string;
  password: string;
};

type LoginResponse = {
  user: {
    id: string;
    email: string;
  };
  role: 'customer' | 'provider';
  token: string;
};

export const authApi = createApi({
  baseQuery: fakeBaseQuery(),
  endpoints: (builder) => ({
    login: builder.mutation({
      queryFn: async (body) => {
        // simulate network delay
        await new Promise((res) => setTimeout(res, 500));
        return {
          data: {
            user: { id: '123', email: body.email },
            role: body.email.includes('provider') ? 'provider' : 'customer',
          },
        };
      },
    }),

    signup: builder.mutation<LoginResponse, any>({
      queryFn: async (body) => {
        await new Promise((res) => setTimeout(res, 500));
        return {
          data: {
            user: { id: '456', email: body.email },
            role: body.role || 'customer', // important! get role from payload
            token: 'mock-token-456',
          },
        };
      },
    }),
  }),
});

export const { useLoginMutation, useSignupMutation } = authApi;
// useSignupMutation
