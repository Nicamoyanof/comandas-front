export interface User {
  userId: number;
  fullName: string;
  username: string;
  passwordHash: string;
  roleId: number;
  active: boolean;
  createdAt: string;
}
