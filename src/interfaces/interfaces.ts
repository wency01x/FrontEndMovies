export interface IUserSignup {
  username: string;
  email: string;
  phoneNumber: string;
  fullName: string;
  password: string;
}


export interface ILoginResponse {
  success: boolean;
  token?: string;
  message?: string;
  role?: string;
  user: IAuthUser;
}

export interface IAuthUser {
  id: number;
  email: string;
  username: string;
  fullName: string;
}

export interface ISignupData {
  username: string;
  email: string;
  phoneNumber: string;
  fullName: string;
  password: string;
}