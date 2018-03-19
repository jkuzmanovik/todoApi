/*
GENERIC FUNCTION FOR VALIDATING MONGOOSE ID
FROM ANY SPECIFIED PARAM NAME
*/
const Joi  = require('joi')

module.exports = {
    validateParam: (schema,name) => {
        return (req,res,next) => {
            const result = Joi.validate({param: req['params'][name]},schema)
            if(result.error)
                return res.status(400).json(result.error)
            if(!req.value)
                req.value = {}
            if(!req.value['params'])
                req.value['params'] = {}
            req.value['params'][name] = result.value.param
            next()
        }},
        validateBody: (schema) => {
            return (req,res,next) => {
                result = Joi.validate(req.body,schema)
                if(result.error)
                    return res.status(400).json(result.error)
                if(!req.value)
                    req.value = {}
                
                if(!req.value['body'])
                    req.value['body'] = {}
                req.value['body'] = result.value
                next()
        }
    },
    schemas: {
        userSchema: Joi.object().keys({
            userName: Joi.string().required(),
            firstName: Joi.string(),
            lastName: Joi.string(),
            email: Joi.string().email().required(),
            hash:Joi.string().required()

        }),

        userOptionalSchema:  Joi.object().keys({
            userName: Joi.string(),
            firstName: Joi.string(),
            lastName: Joi.string(),
            email: Joi.string().email(),
            hash:Joi.string()
        }),

        todoSchema: Joi.object().keys({
            title: Joi.string().required(),
            context:Joi.string()
        }),
       
        idSchema: Joi.object().keys({
            param: Joi.string().regex(/^[0-9a-fA-f]{24}$/).required()
        })
    }
}
