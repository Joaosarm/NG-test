import joi from "joi";
export var signUpSchema = joi.object({
    username: joi.string().required().regex(/.{3,}/),
    password: joi.string().required().regex(/^(?=.*\d)(?=.*[A-Z])(.{8,})$/)
});
export var signInSchema = joi.object({
    username: joi.string().required(),
    password: joi.string().required()
});
