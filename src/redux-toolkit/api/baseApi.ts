import {
  createApi,
  fetchBaseQuery,
} from "@reduxjs/toolkit/query/react";
import { RootState } from "../store";
import { logout, setLoginUser } from "../features/auth/authSlice";
import { toast } from "sonner";

// handling base api
const baseQuery = fetchBaseQuery({
  baseUrl: "https://somvoba-express-api.onrender.com/api/v1",
});


export const baseApi = createApi({
  reducerPath: "baseApi",
  baseQuery: baseQuery,
  endpoints: () => ({}),
});



  // credentials: "include",
  // prepareHeaders: (headers, { getState }) => {
  //   const accessToken = (getState() as RootState).auth.accessToken;

  //   if (accessToken) {
  //     headers.set("authorization", `${accessToken}`);
  //   }

  //   return headers;
  // },


  // BaseQueryApi,
  // BaseQueryFn,
  // DefinitionType,
  // FetchArgs,