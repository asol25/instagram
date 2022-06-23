import express from 'express';
import helmet from 'helmet';
import morgan from 'morgan';
import cors from 'cors';
import { createServer } from "http";
import { Server } from "socket.io";
import { PORT } from './env';
import db from './db'
import v1ApiRouter from './routers/v1ApiRouters'
import "reflect-metadata"
import { initialize } from './model/data-source';
const app = express();
const httpServer = createServer(app);
const io = new Server(httpServer, {
  cors: {
    origin: '*'
  }
});

app.use(helmet());
app.use(morgan('tiny'))
app.use(cors());
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
db();
initialize();

app.use('/', v1ApiRouter);

httpServer.listen(PORT, () => {
  console.log(`⚡️[server]: Server is running at ${PORT}`);
});

export default io
