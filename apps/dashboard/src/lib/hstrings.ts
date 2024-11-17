import crypto from "crypto";

export const saltAndHashPassword = (password: string) => {
  const salt = crypto.randomBytes(16).toString("hex");
  const hash = crypto.createHmac("sha256", salt);
  hash.update(password);
  const hashedPassword = hash.digest("hex");
  return { salt, hashedPassword };
};

export const dateToString = (date: Date = new Date()): string => {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
};
