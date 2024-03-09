import { baseApi } from "../../api/baseApi";



const authApi = baseApi.injectEndpoints({
  endpoints: (builder:any) => ({
    signin: builder.mutation({
      query: (userPhnNumber:string) => {
        console.log('* userPhone:', userPhnNumber)
        return {
          url: "/authentications/signin",
          method: "POST",
          body: userPhnNumber,
        };
      },
    }),

    verifyOtp: builder.mutation({ 
      query: (data:any) => ({
        url: '/authentications/verify-otp-reserve',
        method: 'POST',
        data,
      }),
    }),
  }),
});

export const { useSigninMutation, useVerifyOtpMutation } = authApi;



