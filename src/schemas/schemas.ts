import joi from "joi"

export const signUpSchema = joi.object({
    username: joi.string().required().regex(/.{3,}/),
    password: joi.string().required().regex(/^(?=.*\d)(?=.*[A-Z])(.{8,})$/),
    // confirmPassword:joi.string().required().valid(joi.ref('password'))
});

export const signInSchema = joi.object({
    username: joi.string().required(),
    password: joi.string().required()
});