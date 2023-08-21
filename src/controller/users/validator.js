import joi from 'joi'

module.exports = {
    createUserValidation: (data, options) => {
        const schema = joi.object().keys({
            name: joi.string().required(),
            username: joi.string().min(6).required(),
            password: joi.string().required()
        });

        return schema.validate(data, options)
    },
    updateUserValidation: (data, options) => {
        const schema = joi.object().keys({
            username: joi.string().min(6).required(),
        });

        return schema.validate(data, options)
    }
}