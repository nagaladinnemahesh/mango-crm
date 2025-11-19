import { Request, Response, NextFunction } from "express";
import jwt, { JwtPayload } from "jsonwebtoken";
import { IJwtPayload } from "../interfaces/JwtPayload";
import { IAuthUser } from "../interfaces/IAuthUser";

export const authMiddleware = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const authHeader = req.headers.authorization;

  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    return res.status(401).json({ error: "Unauthorized" });
  }

  const token = authHeader.split(" ")[1] as string;

  try {
    const decoded = jwt.verify(
      token,
      process.env.JWT_SECRET!
    ) as JwtPayload;

    const userPayload = decoded as IJwtPayload;

    req.user = {
      _id: userPayload._id,
      staffId: userPayload.staffId,
      role: userPayload.role,
      storeId: userPayload.storeId,
    } as IAuthUser;

    next();
  } catch (err) {
    return res.status(401).json({ error: "Invalid or expired token" });
  }
};
