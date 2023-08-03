import { mongoConnect } from './schema/mongo.connect.js';
import { cfpRouter } from './src/cpfs/cfp.router.js';
import { eventRouter } from './src/events/events.router.js';
import { hackathonRouter } from './src/hackathons/hackathon.router.js';
import { userRouter } from './src/users/user.router.js';
import dotenv from 'dotenv';
import express from 'express';
import RateLimit from 'express-rate-limit';

dotenv.config();

const app = express();
const port = process.env.PORT;
app.use(express.json());

await mongoConnect();

const limiter = RateLimit({
  windowMs: 1 * 60 * 1000, // 1 minute
  max: 15,
});

// apply rate limiter to all requests
app.use(limiter);

app.use('/api/user', userRouter);
app.use('/api/events', eventRouter);
app.use('/api/hackathons', hackathonRouter);
app.use('/api/cfps', cfpRouter);

// eslint-disable-next-line no-console
app.listen(port, () => console.log(`server is running on ${port}`));
