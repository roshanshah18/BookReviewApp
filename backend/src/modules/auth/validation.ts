import { z } from "zod";

export const registerControllerSchema = z.object({
  email: z.string().email(),
  username: z.string().min(3).max(20),
  password: z.string().min(6).max(25),
});

export type TregisterControllerInput = z.TypeOf<
  typeof registerControllerSchema
>;
export const LoginControllerSchema = z.object({
  email: z.string().email(),
  password: z.string().min(6).max(25),
});
export type TLoginControllerInput = z.TypeOf<typeof LoginControllerSchema>;

export const updateRoleControllerSchema = z.object({
  userId: z.string(),
  userRole: z.enum(["user", "admin"]),
});

export type TupdateRoleControllerInput = z.TypeOf<
  typeof updateRoleControllerSchema
>;
