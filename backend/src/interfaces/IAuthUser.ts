export interface IAuthUser {
  _id: string;
  staffId: string;
  role: "admin" | "manager" | "staff";
  storeId?: string;
}
