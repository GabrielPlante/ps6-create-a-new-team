const Joi = require('joi');
const BaseModel = require('../utils/base-model.js');

class SemestreModel extends BaseModel {
  constructor() {
    super('Semestre', {
        nom: Joi.string().required(),
        prenom: Joi.string().required(),
        pays: Joi.string().required(),
        depart: Joi.string().required(),
        fin: Joi.string().required(),
        type_mobilite: Joi.boolean().required(),
        ville: Joi.string().required(),
        satisfaction_pays: Joi.number().integer().required().min(0).max(5),
        satisfaction_enseignement: Joi.number().integer().required().min(0).max(5),
        satisfaction_vie: Joi.number().integer().required().min(0).max(5),
        reussite: Joi.boolean().required(),
        ressenti: Joi.string().required(),
        promotion: Joi.string().required(),
        universite: Joi.string().required()
    });
  }
}

module.exports = new SemestreModel();

