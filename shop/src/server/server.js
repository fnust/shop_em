import express from 'express';
import router from '../routes/index.js';
import dataSource from '../ormconfig.js';
import { setupMiddleware } from './middlewares.js';
import { config } from 'dotenv';

config();

const init = async () => {
  const app = express();

  setupMiddleware(app);
  app.use('/api', router);

  dataSource.initialize();

  const port = Number(process.env.SERVER_SHOP_PORT || 3000);
  const host = String(process.env.SERVER_SHOP_HOST || 'localhost');

  app.listen(port, host, function () {
    console.log(`⚡️ Server listens http://${host}:${port}`);
  });
};

export default init;
