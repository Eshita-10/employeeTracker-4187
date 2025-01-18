import jwt from "jsonwebtoken";

const JWT_SECRET = "your-secret-key"; 

export const generateToken = (employee_id) => {
  return jwt.sign({ employee_id }, JWT_SECRET, { expiresIn: "1h" });
};
export const verifyToken = (token) => {
  try {
    return jwt.verify(token, JWT_SECRET);
  } catch (error) {
    return null; 
  }
};
