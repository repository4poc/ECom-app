import bcrypt from "bcryptjs";

const users = [
  {
    name: "Admin User",
    email: "admin@email.com",
    password: bcrypt.hashSync("12345", 10),
    isAdmin: true,
  },
  {
    name: "Varinder Gupta",
    email: "varinder@email.com",
    password: bcrypt.hashSync("12345", 10),
  },
  {
    name: "Pardeep Gupta",
    email: "pardeep@email.com",
    password: bcrypt.hashSync("12345", 10),
  },
];

export default users;
