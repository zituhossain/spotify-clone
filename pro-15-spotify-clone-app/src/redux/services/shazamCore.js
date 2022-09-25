import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const shazamCoreApi = createApi({
  reducerPath: 'shazamCoreApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://shazam-core.p.rapidapi.com/v1',
    prepareHeaders: () => {
      headers.set(
        'X-RapidAPI-Key',
        '536a5c7601msh46c716ffd2f77dep114249jsnb25d983a7135',
      );
    },
  }),
});
