export interface User {
  id: string;
  username: string;
  password: string;
  fullName?: string;
  status?: "Activated" | "Deactivated";
  createdAt?: Date;
  updatedAt?: Date;
}
