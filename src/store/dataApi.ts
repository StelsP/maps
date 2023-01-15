// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { IResult } from "../types";
export const myAPIKey = "0895cbb5ad8c463ca78d2062e74f3423";

// Define a service using a base URL and expected endpoints
export const dataApi = createApi({
  reducerPath: "dataApi",
  baseQuery: fetchBaseQuery({
    baseUrl: `https://api.geoapify.com/v1/geocode/`,
  }),
  endpoints: (builder) => ({
    getData: builder.query<IResult, string>({
      query: (text: string) =>
        `autocomplete?text=${
          text.length > 0 ? text : 0
        }&apiKey=${myAPIKey}&lang=ru`,
    }),
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetDataQuery } = dataApi;
