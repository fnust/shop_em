import dataSource from '../../../ormconfig';
import { Repository } from 'typeorm';
import { ActionEntity } from '../../entities/Action';
import { RemainderEntity } from '../../entities/Remainder';
import { applyConditions } from './conditions';
import { ActionGetOutput, QueryI } from '../../../controllers/interfaces';

class ActionRepo {
  readonly repository: Repository<ActionEntity>;

  constructor() {
    this.repository = dataSource.getRepository(ActionEntity);
  }

  async save(
    remainder: RemainderEntity,
    changes: object,
    type: string
  ): Promise<ActionEntity | null> {
    try {
      const action = new ActionEntity();
      action.remainder = remainder;
      action.changes = changes;
      action.type = type;

      return await this.repository.save(action);
    } catch (error) {
      console.error(error);
      return null;
    }
  }

  async find(param: QueryI): Promise<ActionGetOutput> {
    const { skip, limit, page } = param;
    const total = await this.repository.count({
      where: applyConditions(param),
    });

    const actions = await this.repository.find({
      where: applyConditions(param),
      order: { createdAt: 'DESC' },
      skip: skip,
      take: limit,
    });

    return { data: actions, meta: { page, limit, total } };
  }
}
export default ActionRepo;
