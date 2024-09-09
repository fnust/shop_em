import bodyParser from 'body-parser';
import { validationResult } from 'express-validator';

const urlencodedParser = bodyParser.urlencoded({ extended: true });

export const setupMiddleware = (app) => {
  app.use(bodyParser.json());
  app.use(urlencodedParser);
};

export const validate = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  next();
};
