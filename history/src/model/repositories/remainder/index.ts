import dataSource from '../../../ormconfig';
import { Repository } from 'typeorm';
import { RemainderEntity } from '../../entities/Remainder';

class RemainderRepo {
  readonly repository: Repository<RemainderEntity>;

  constructor() {
    this.repository = dataSource.getRepository(RemainderEntity);
  }

  public async findById(id: string): Promise<RemainderEntity | null> {
    return this.repository.findOne({
      where: { id },
    });
  }
}
export default RemainderRepo;
