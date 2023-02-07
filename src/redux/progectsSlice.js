import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';


export const progectsApi = createApi({
   reducerPath: 'progects',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://63e255bcad0093bf29cd7b66.mockapi.io/api/v1/',
  }),
  tagTypes: ['Progect'],
  endpoints: builder => ({
   getProgects: builder.query({
   query: () => '/progects',
   providesTags: ['Progect'],
       }),

   addProgect: builder.mutation({
   query: newProgect => ({
   url: '/progects',
   method: 'POST',
   body: newProgect,
   }),
   invalidatesTags: ['Progect'],
   }),

   deleteProgect: builder.mutation({
   query: id => ({
   url: `/progects/${id}`,
   method: 'DELETE',
   }),
   invalidatesTags: ['Progect'],
   }),
   }),
   });

export const { 
useGetProgectsQuery,
useAddProgectMutation,
useDeleteProgectMutation,  
} = progectsApi;


