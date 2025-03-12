export interface IUserSignup {
  username: string;
  email: string;
  phoneNumber: string;
  fullName: string;
  password: string;
}


export interface LoginResponse {
  success: boolean;
  token?: string;
  message?: string;
  role?: string;
  user: AuthUser;
}

export interface AuthUser {
  id: number;
  email: string;
  username: string;
  fullName: string;
}
