import jwt from "jsonwebtoken";
import { TOKEN_SECRET } from "../config.js";
// Creamos acceso al token con su expiracion
export function createAccessToken(payload) {
  return new Promise((resolve, reject) => {
    jwt.sign(
      payload,
      TOKEN_SECRET,
      {
        expiresIn: "1d",
      },
      (err, token) => {
        if (err) reject(err);
        resolve(token);
      }
    );
  });
}
