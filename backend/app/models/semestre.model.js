const Joi = require('joi');
const BaseModel = require('../utils/base-model.js');

class SemestreModel extends BaseModel {
  constructor() {
    super('Semestre', {
        firstname: Joi.string().required(),
        lastname: Joi.string().required(),
        group: Joi.string().required(),
        country: Joi.string().required().country(),
        city: Joi.string().required().city(),
        university: Joi.string().required(),
        start: Joi.string().required().date(),
        end: Joi.string().required().date(),
        citySatisfaction: Joi.int().required(),
        schoolSatisfaction: Joi.int().required(),
        studentLifeSatisfaction: Joi.int().required(),
        overallSatisfaction: Joi.int().required(),
        comment: Joi.string(),
    });
  }
}

module.exports = new SemestreModel();

