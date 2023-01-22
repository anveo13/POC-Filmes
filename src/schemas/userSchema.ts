import Joi from "joi";

export const userSchema = Joi.object({ 
    filmId: Joi.string().required(),
    userId:Joi.string().required(), 
    nota: Joi.string(), 
    status: Joi.boolean().required() 
} )