import { z } from "zod";

const loginFormSchema = z.object({
  mobile: z.string().trim().min(1, { message: "Mobile number is required." })
});

export default loginFormSchema;
