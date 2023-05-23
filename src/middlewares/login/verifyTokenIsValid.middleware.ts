import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";
import "dotenv/config";
import { AppError } from "../../errors/AppError";

const verifyTokenIsValidMiddleware = (
  req: Request,
  res: Response,
  next: NextFunction
): Response | void => {
  let token = req.headers.authorization;

  if (!token) throw new AppError("Missing bearer token", 401);

  token = token.split(" ")[1];

  jwt.verify(token, process.env.SECRET_KEY!, (error, decoded: any) => {
    if (error) throw new AppError(error.message, 401);

    res.locals.clientId = decoded.sub;

    return next();
  });
};

export default verifyTokenIsValidMiddleware;