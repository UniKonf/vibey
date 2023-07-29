import { mongoConnect } from './schema/mongo.connect';
import { cfpRouter } from './src/cpfs/cfp.router';
import { eventRouter } from './src/events/events.router';
import { hackathonRouter } from './src/hackathons/hackathon.router';
import { userRouter } from './src/users/user.router';
import * as express from 'express';
// eslint-disable-next-line @typescript-eslint/no-var-requires
// const express = require('express');
import { Express, NextFunction, Request, Response } from 'express';
import { RateLimiterMemory } from 'rate-limiter-flexible';
// eslint-disable-next-line @typescript-eslint/no-var-requires
const dotenv = require('dotenv');

dotenv.config({ path: '.env' });

const app: Express = express();
const port = process.env.PORT;

const opts = {
  points: 5, // Number of points
  duration: 1, // Per second
};

const rateLimiter = new RateLimiterMemory(opts);

app.use((req: Request, res: Response, next: NextFunction) => {
  rateLimiter
    .consume(req.ip)
    .then(() => {
      next();
    })
    .catch(() => {
      res.status(429).send({ success: false, message: 'Too Many Requests' });
    });
});

app.use(express.json());

app.use('/api/user', userRouter);
app.use('/api/events', eventRouter);
app.use('/api/hackathons', hackathonRouter);
app.use('/api/cfps', cfpRouter);

async function startServer() {
  try {
    await mongoConnect();
    // eslint-disable-next-line no-console
    app.listen(port, () => console.log(`Server is running on port ${port}`));
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error('Error in server:', error);
    process.exit(1); // Terminate the process on server startup failure
  }
}

startServer();
