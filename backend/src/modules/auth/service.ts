import { comparePassword, hashPassword, generateToken } from "../../utils/auth";
import { APIError } from "../../utils/error";
import { UserModel } from "./model";
import {
  TLoginControllerInput,
  TregisterControllerInput,
  TupdateRoleControllerInput,
} from "./validation";

export async function CreateUserService(input: TregisterControllerInput) {
  const { username, email, password } = input;

  const user = await UserModel.findOne({ email });
  if (user) {
    throw APIError.conflict("User Already Exists");
  }

  const hashedPassword = await hashPassword(password);

  const newUser = new UserModel({
    email,
    username,
    password: hashedPassword,
    role: "user",
  });

  await newUser.save();
  return newUser;
}

export async function loginService(input: TLoginControllerInput) {
  const { email, password } = input;
  const user = await UserModel.findOne({ email });
  if (!user) {
    throw APIError.unauthorized("Invalid credentials");
  }

  const isMatch = await comparePassword(password, user.password);
  if (!isMatch) {
    throw APIError.unauthorized("Invalid Credentails");
  }

  const token = generateToken({
    id: user._id.toString(),
    username: user.username,
    email: user.email,
    role: user.role,
  });
  return {
    user: {
      id: user._id.toString(),
      username: user.username,
      email: user.email,
      role: user.role,
    },
    token,
  };
}

export async function updateRoleService(input: TupdateRoleControllerInput) {
  const user = await UserModel.findById(input.userId);

  if (!user) {
    throw APIError.notFound("User not Found");
  }

  user.role = input.userRole;
  await user.save();
  return user;
}

export async function getUserById(id: string) {
  const user = await UserModel.findById(id);
  if (!user) {
    throw APIError.notFound("User not found");
  }

  return user;
}
