import { DataSource } from 'typeorm';
import Entities from './model/entities/index.js';
import { config } from 'dotenv';

config();

export default new DataSource({
  type: 'postgres',
  host: String(process.env.POSTGRES_HOST || 'localhost'),
  port: Number(process.env.POSTGRES_PORT || 5557),
  username: String(process.env.POSTGRES_USER),
  password: String(process.env.POSTGRES_PASSWORD),
  database: String(process.env.POSTGRES_DB),
  synchronize: false,
  cache: false,
  entities: [...Entities],
});
