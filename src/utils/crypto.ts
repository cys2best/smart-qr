import crypto from "crypto";

export const signature = (query: string): string => {
  return crypto
    .createHmac("sha256", process.env.API_KEY)
    .update(query)
    .digest("hex");
};

export const timestamp = (): number => {
  return + new Date();
};