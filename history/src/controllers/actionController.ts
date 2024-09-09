import * as Boom from '@hapi/boom';
import * as Hapi from '@hapi/hapi';
import * as deepObjectDiff from 'deep-object-diff';
import { ActionCreateInput, ActionGetInput } from './interfaces';
import { actionRepo, remainderRepo } from '../model/repositories';

class ActionController {
  static async create(request: ActionCreateInput, h: Hapi.ResponseToolkit) {
    try {
      const { remainderId, type, oldState } = request.payload;

      const remainder = await remainderRepo.findById(remainderId);
      if (!remainder) {
        return Boom.badImplementation();
      }

      const changes = deepObjectDiff.diff({ ...oldState }, { ...remainder });
      if (!Object.keys(changes).length) {
        return;
      }

      const action = await actionRepo.save(remainder, changes, type);
      if (!action) {
        return Boom.badImplementation();
      }

      return h.response(action).code(201);
    } catch (error) {
      console.error(error);
      return Boom.badImplementation();
    }
  }

  static async get(request: ActionGetInput, h: Hapi.ResponseToolkit) {
    try {
      const result = await actionRepo.find(request.query);
      return h.response(result);
    } catch (error) {
      console.error(error);
      return Boom.badImplementation();
    }
  }
}

export default ActionController;
