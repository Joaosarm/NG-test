import * as authRepository from "../repositories/authRepository.js"
import bcrypt from "bcrypt";

export async function checkUserExistance(username: string) {
  const exists = await authRepository.findByUsername(username)
  if (exists) {
    throw {
      type: "Invalid requisition",
      message: "Username already registered",
      status: 409
    }
  }
}

export async function getUser(username: string) {
  const user = await authRepository.findByUsername(username)
  if (!user) {
    throw {
      type: "Invalid requisition",
      message: "Wrong infos",
      status: 422
    }
  }
  return user;
}

export async function checkPassword(password : string, DBpassword : string) {
  const verified = bcrypt.compareSync(password, DBpassword);
  if (!verified) {
    throw {
      type: "Invalid requisition",
      message: "Wrong infos",
      status: 422
    }
  }
}