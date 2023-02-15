const Joi = require('@hapi/joi').extend(require('@hapi/joi-date'));

const options = {
  errors: {
    wrap: {
      label: ''
    }
  }
};
// .pattern(/^[6-9]\d{9}$/)
const validateLogin = (httpRequest) => {
  const schema = Joi.object({
    username: Joi.string()

      .messages({
        'string.pattern.base': 'Provide valid email!'
      }),
    password: Joi.string().min(7).alphanum()
  });
  return schema.validate(httpRequest.body, options);
};

const validateRegister = (httpRequest) => {
  const schema = Joi.object({
    firstName: Joi.string().required(),
    lastName: Joi.string().required(),
    username: Joi.string().messages({'string.pattern.base': 'Provide valid email!'}).pattern(/^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/),
      // .max('01-02-2023').messages({'date.format': `Date format is YYYY-MM-DD`})
    password: Joi.string().min(7).alphanum().required(),
    dateOfBirth: Joi.string().required(),
    country: Joi.string().required()
  });
  return schema.validate(httpRequest.body, options);
};


module.exports = {
  validateLogin,
  validateRegister
};
