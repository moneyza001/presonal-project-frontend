import Joi from "joi";

const registerSchema = Joi.object({
    email: Joi.string().email({ tlds: false }).required(),
    password: Joi.string()
        .pattern(/^[a-zA-Z0-9]{8,30}$/)
        .trim()
        .required(),
    confirmPassword: Joi.string().valid(Joi.ref("password")).trim().required(),
    phoneNumber: Joi.string()
        .pattern(/^[0-9]{10}$/)
        .required(),
    firstName: Joi.string().trim().required(),
    lastName: Joi.string().trim().required(),
    nickName: Joi.string().trim().required(),
}).options({ allowUnknown: true });

export default registerSchema;
