const Joi = require('joi');
const BaseModel = require('../utils/base-model.js');

class StageModel extends BaseModel {
  constructor() {
    super('Stage', {
        firstname: Joi.string().required(),
        lastname: Joi.string().required(),
        group: Joi.string().required(),
        country: Joi.string().required().country(),
        city: Joi.string().required().city(),
        company: Joi.string().required(),
        start: Joi.string().required().date(),
        end: Joi.string().required().date(),
        citySatisfaction: Joi.int().required(),
        companySatisfaction: Joi.int().required(),
        companyCohesionSatisfaction: Joi.int().required(),
        overallSatisfaction: Joi.int().required(),
        comment: Joi.string(),
    });
  }
}

module.exports = new StageModel();

