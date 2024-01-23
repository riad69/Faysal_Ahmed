import { fetchBaseQuery, createApi } from "@reduxjs/toolkit/query/react";

export const Api = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://erp.seopage1.net/api",
    headers: { "Content-Type": "application/json" },
  }),

  endpoints: (builder) => ({}),
});
