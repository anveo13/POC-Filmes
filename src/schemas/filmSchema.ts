import Joi from "joi";

export const filmSchema = Joi.object({
    name: Joi.string().required(),
    genre: Joi.string().required(),
    platform: Joi.string().required()
})