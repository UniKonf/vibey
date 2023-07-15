import { mongoConnect } from './schema/mongo.connect.js';
import { cfpRouter } from './src/cpfs/cfp.router.js';
import { eventRouter } from './src/events/events.router.js';
import { hackathonRouter } from './src/hackathons/hackathon.router.js';
import { userRouter } from './src/users/user.router.js';
import dotenv from 'dotenv';
import express, { Express } from 'express';
import RateLimit from 'express-rate-limit';

dotenv.config();

const app: Express = express();
const port = process.env.PORT;

const limiter = RateLimit({
  windowMs: 1 * 60 * 1000, // 1 minute
  max: 5,
});

// apply rate limiter to all requests
app.use(limiter);
app.get('/', () => {
  throw new Error('');
});

app.use(express.json());

app.use('/api/user', userRouter);
app.use('/api/events', eventRouter);
app.use('/api/hackathons', hackathonRouter);
app.use('/api/cfps', cfpRouter);

// eslint-disable-next-line no-console
async function startServer() {
  try {
    await mongoConnect();
    // eslint-disable-next-line no-console
    app.listen(port, () => console.log(`Server is running on port ${port}`));
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error('Error starting the server:', error);
    process.exit(1); // Terminate the process on server startup failure
  }
}

startServer();
