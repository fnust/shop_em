import { ServerRoute } from '@hapi/hapi';
import ActionController from '../controllers/actionController';
import schema from './shema';

export const routes: ServerRoute[] = [
  {
    path: '/api/history',
    method: 'GET',
    options: {
      validate: schema.get,
      handler: ActionController.get,
    },
  },
  {
    path: '/api/history',
    method: 'POST',
    options: {
      validate: schema.post,
      handler: ActionController.create,
    },
  },
];
