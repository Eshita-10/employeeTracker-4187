import argon2 from "argon2";
export const hashPassword = async (password) => {
  try {
    const hashedPassword = await argon2.hash(password);
    return hashedPassword;
  } catch (error) {
    throw new Error("Error hashing password");
  }
};
export const verifyPassword = async (hashedPassword, password) => {
  try {
    const isMatch = await argon2.verify(hashedPassword, password);
    return isMatch;
  } catch (error) {
    throw new Error("Error verifying password");
  }
};
