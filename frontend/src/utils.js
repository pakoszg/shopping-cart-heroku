import dotenv from "dotenv";

export const decimalNumber = (number) => {
  if (!isNaN(number)) {
    return number.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",");
  }
};

dotenv.config();

export const USERNAME = process.env.USERNAME;
export const PASSWORD = process.env.PASSWORD;

console.log(PASSWORD);
