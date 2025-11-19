import { IAuthUser } from "../interfaces/IAuthUser";

declare global {
  namespace Express {
    interface Request {
      user?: IAuthUser;
    }
  }
}
