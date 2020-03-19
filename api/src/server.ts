import { Response, Request } from 'express';
import app from 'express';
import cors from 'cors';
import helmet from 'helmet';
import 'dotenv/config';

import mongoose from 'mongoose';
import morgan from 'morgan';

const server = app();

const PORT: any = process.env.PORT || process.env.DEV_PORT;

server.use(app.json());
server.use(app.urlencoded({ extended: false }));

server.use(helmet.xssFilter());
server.use(helmet.noSniff());
server.use(helmet.frameguard());
server.use(helmet.hidePoweredBy());
server.use(helmet.ieNoOpen());

server.get('/', (req: Request, res: Response): Object => {
  return res.json({ mgs: 'Hello world' });
});

server.listen(PORT, (): void => console.log(`server started at port ${PORT}`));
