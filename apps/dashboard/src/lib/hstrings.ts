import crypto from "crypto";

export const saltAndHashPassword = (password: string) => {
  const salt = crypto.randomBytes(16).toString("hex");
  const hash = crypto.createHmac("sha256", salt);
  hash.update(password);
  const hashedPassword = hash.digest("hex");
  return { salt, hashedPassword };
};