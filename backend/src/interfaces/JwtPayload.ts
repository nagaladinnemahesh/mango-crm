export interface IJwtPayload {
  _id: string;
  staffId: string;
  role: "admin" | "manager" | "staff";
  storeId?: string;
  iat?: number;
  exp?: number;
}
