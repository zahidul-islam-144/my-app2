"use client";

import * as React from "react";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "@/components/ui/input-otp";

const OtpInput = () => {
  const [value, setValue] = React.useState<string>("");

  const handleChange = (newValue: string) => {
    setValue(newValue);
  };

  return (
    <div className="space-y-5">
      <InputOTP
        maxLength={6}
        value={value}
        onChange={handleChange}
        render={({ slots }) => (
          <InputOTPGroup>
            {slots.map((slot, index) => (
              <InputOTPSlot key={index} {...slot} />
            ))}
          </InputOTPGroup>
        )}
      />
      {/* <div className="text-center text-sm">
        {value === "" ? (
          <>Enter your one-time password.</>
        ) : (
          <>You entered: {value}</>
        )}
      </div> */}
    </div>
  );
}

export default OtpInput;
