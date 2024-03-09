import { z } from "zod";

const otpSchema = z.object({
  otp: z.string().trim().min(1, { message: "OTP is required." })
});

export default otpSchema;
