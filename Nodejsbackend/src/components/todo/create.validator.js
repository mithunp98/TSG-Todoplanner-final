const Joi = require('@hapi/joi').extend(require('@hapi/joi-date'));

const options = {
  errors: {
    wrap: {
      label: ''
    }
  }
};

const validateCreate = (httpRequest) => {
  const schema = Joi.object({
    tasktitle: Joi.string().required(),
    userId: Joi.number().required(),
    userRole: Joi.string().required(),
    taskdescription: Joi.string().required(),
    taskstartdatetime: Joi.string().required(),
    taskenddatetime: Joi.string().required(),
    tasktypetitle: Joi.string().required(),
    prioritytype: Joi.string().required(),
    statustitle: Joi.string().required()
  });
  return schema.validate(httpRequest.body, options);
};

const validateUpdate = (httpRequest) => {
  const schema = Joi.object({
    tasktitle: Joi.string(),
    taskdescription: Joi.string(),
    taskstartdatetime: Joi.string(),
    taskenddatetime: Joi.string(),
    tasktypetitle: Joi.string(),
    prioritytype: Joi.string(),
    statustitle: Joi.string(),
    username: Joi.string()
  });
  return schema.validate(httpRequest.body, options);
};

module.exports = {
  validateCreate
};
