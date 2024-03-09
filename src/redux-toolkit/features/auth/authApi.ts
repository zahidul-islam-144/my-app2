import { baseApi } from "../../api/baseApi";



const authApi = baseApi.injectEndpoints({
  endpoints: (builder:any) => ({
    signin: builder.mutation({
      query: (userPhnNumber:string) => {
        return {
          url: "/authentications/signin",
          method: "POST",
          body: userPhnNumber,
        };
      },
    }),
  }),
});

export const { useSigninMutation } = authApi;



