import { z } from "zod";

export const usernameSchema = z
    .string()
    .min(4, "Username must contain at least 4 characters")
    .max(32, "Username must contain at most 32 characters")
    .trim();

export const passwordSchema = z
    .string()
    .min(6, "Password must contain at least 6 characters")
    .max(32, "Password must contain at most 32 characters")
    .trim()
    .regex(/.*\d.*/, "Password must contain at least 1 number!");

export const loginSchema = z.object({
    username: z.string().min(1, "Username is required!").trim(),
    password: z.string().min(1, "Password is required!").trim(),
});

export const signUpSchema = z
    .object({
        username: usernameSchema,
        password: passwordSchema,
        confirmPassword: z.string().trim(),
    })
    .refine(
        ({ password, confirmPassword }) => {
            return !!password && !!confirmPassword && password === confirmPassword;
        },
        { message: "Passwords must match!", path: ["confirmPassword"] },
    );

export const changePasswordSchema = z
    .object({
        currentPassword: z.string().min(1, "Current Password is required!").trim(),
        newPassword: passwordSchema,
        confirmNewPassword: z.string().trim(),
    })
    .refine(
        ({ newPassword: password, confirmNewPassword: confirmPassword }) => {
            return !!password && !!confirmPassword && password === confirmPassword;
        },
        { message: "Passwords must match!", path: ["confirmNewPassword"] },
    );
