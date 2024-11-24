// src/lib/auth.ts
import jwt from 'jsonwebtoken';

export function validateToken(token: string) {
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET!); // Decode and validate token
    return decoded;
  } catch (err) {
    return null; // Return null if token is invalid or expired
  }
}
