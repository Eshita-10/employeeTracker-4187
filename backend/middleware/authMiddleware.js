import { verifyToken } from "../utils/jwt.js";
export const authMiddleware = (req, res, next) => {
  const token = req.header("Authorization");

  if (!token) {
    return res.status(401).json({ message: "Access denied. No token provided." });
  }

  const decoded = verifyToken(token.replace("Bearer ", "")); 
  if (!decoded) {
    return res.status(400).json({ message: "Invalid or expired token" });
  }
  req.employee_id = decoded.employee_id; 
  next();
};
