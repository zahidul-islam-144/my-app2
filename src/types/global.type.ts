export interface LoginResponse {
  success: boolean;
  statusCode: number;
  message: string;
  data: {
    otpExpiresAt: string;
    otpExpiryMinutes: number;
  };
}
