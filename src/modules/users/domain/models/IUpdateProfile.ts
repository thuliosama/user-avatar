export interface IUpdateProfile {
  user_id: string;
  name: string;
  email: string;
  contact: string;
  password?: string;
  old_password?: string;
}
