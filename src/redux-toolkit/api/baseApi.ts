import {
  BaseQueryApi,
  BaseQueryFn,
  DefinitionType,
  FetchArgs,
  createApi,
  fetchBaseQuery,
} from "@reduxjs/toolkit/query/react";
import { RootState } from "../store";
import { logout, setLoginUser } from "../features/auth/authSlice";
import { toast } from "sonner";

// handling base api
const baseQuery = fetchBaseQuery({
  baseUrl: "http://localhost:8080/api/",
  credentials: "include",
  prepareHeaders: (headers, { getState }) => {
    const accessToken = (getState() as RootState).auth.accessToken;

    if (accessToken) {
      headers.set("authorization", `${accessToken}`);
    }

    return headers;
  },
});


// handling accessToken by refreshToken
const baseQueryWithRefreshToken: BaseQueryFn<
  FetchArgs,
  BaseQueryApi,
  DefinitionType
> = async (args, api, extraOptions): Promise<any> => {
  let result = await baseQuery(args, api, extraOptions);

  if (result?.error?.status === 404) {
    toast.error("result?.error.data.message");
  }
  if (result?.error?.status === 401) {
    // Send Refresh
    console.log("Sending raccessTokenefresh token");

    const res = await fetch("http://localhost:8800/api/auth/refresh-token", {
      method: "POST",
      credentials: "include",
    });

    const data = await res.json();

    if (data?.data?.accessToken) {
      const loginUser = (api.getState() as RootState).auth.loginUser;

      api.dispatch(
        setLoginUser({
          loginUser,
          accessToken: data?.data?.accessToken,
        })
      );

      result = await baseQuery(args, api, extraOptions);
    } else {
      api.dispatch(logout());
    }
  }

  return result;
};



export const baseApi = createApi({
  reducerPath: "baseApi",
  baseQuery: baseQueryWithRefreshToken,
  endpoints: () => ({}),
});
