export type TUser = {
    user: string | undefined;
    role: 'user' | 'admin';
    permission: string | undefined;
};
  
export type TAuthState = {
    loginUser: TUser | null;
    accessToken: string | null;
};