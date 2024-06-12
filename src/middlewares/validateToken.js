import Jwt from "jsonwebtoken";
import { TOKEN_SECRET } from "../config.js";
// Validacion de tokenks
export const authRequire = (req, res, next) => {
  const { token } = req.cookies;
  if (!token)
    return res.status(401).json({ message: "No token, autorization denied" });

  Jwt.verify(token, TOKEN_SECRET, (err, user) => {
    if (err) return res.status(403).json({ message: "invalid token" });

    req.user = user;
    next();
  });
};
