const Joi = require('joi');
const BaseModel = require('../utils/base-model.js');

class SemestreModel extends BaseModel {
  constructor() {
    super('Semestre', {
        firstname: Joi.string().required(),
        lastname: Joi.string().required(),
        group: Joi.string().required(),
        country: Joi.string().required(),
        city: Joi.string().required(),
        university: Joi.string().required(),
        start: Joi.string().required(),
        end: Joi.string().required(),
        citySatisfaction: Joi.number().integer().required().min(0).max(5),
        schoolSatisfaction: Joi.number().integer().required().min(0).max(5),
        studentLifeSatisfaction: Joi.number().integer().required().min(0).max(5),
        overallSatisfaction: Joi.number().integer().required().min(0).max(5),
        comment: Joi.string(),
    });
  }
}

module.exports = new SemestreModel();

