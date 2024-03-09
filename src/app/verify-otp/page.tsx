"use client";

import ReusableButton from "@/components/ui/Button";
import OtpInput from "@/components/ui/OtpInput";
import ReusableForm from "@/components/ui/ReusableForm";
import { useVerifyOtpMutation } from "@/redux-toolkit/features/auth/authApi";
import otpSchema from "@/schemas/otpSchema";
import { toCapitalizeFirstLetterInSentence } from "@/utils/helperFunctions";
import { zodResolver } from "@hookform/resolvers/zod";
import React from "react";
import { FieldValues } from "react-hook-form";

const VerifyOtp = () => {
  const [verifyOtp, { data, error, isLoading }] = useVerifyOtpMutation();

  const onSubmit = async (data: FieldValues) => {
    console.log("* ---> data:1", data);
    try {
      const userInfo = {
        otp: data.otp,
      };
      const res: any = await verifyOtp(userInfo).unwrap();
      console.log("* ---> res:2", res.statusCode);
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <section className="verify_otp_main">
      <div className="otp_auth_block">
        <div className="otpFormBlock">
            <h1>{toCapitalizeFirstLetterInSentence("Enter your otp")}</h1>
            <OtpInput />

            <ReusableButton type="submit" content="Verify otp" className='otpBtn'/>
        </div>
      </div>
    </section>
  );
};

export default VerifyOtp;
