import Joi from 'joi';

export default {
  post: {
    payload: Joi.object({
      remainderId: Joi.string().uuid().required(),
      type: Joi.string().required(),
      oldState: Joi.any().required(),
    }),
  },
  get: {
    query: Joi.object({
      shopId: Joi.string().uuid().optional(),
      plu: Joi.number().optional(),
      action: Joi.string().optional(),
      dateFrom: Joi.date().optional(),
      dateTo: Joi.date().optional(),
      page: Joi.number().required(),
      limit: Joi.number().required(),
      skip: Joi.number().required(),
    }),
  },
};
