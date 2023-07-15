import { mongoConnect } from './schema/mongo.connect';
import { cfpRouter } from './src/cpfs/cfp.router';
import { eventRouter } from './src/events/events.router';
import { hackathonRouter } from './src/hackathons/hackathon.router';
import { userRouter } from './src/users/user.router';
import dotenv from 'dotenv';
import express, { Express } from 'express';
import slowDown from 'express-slow-down';

dotenv.config();

const app: Express = express();
const port = process.env.PORT;

app.enable('trust proxy'); // only if you're behind a reverse proxy (Heroku, Bluemix, AWS if you use an ELB, custom Nginx setup, etc)

const speedLimiter = slowDown({
  windowMs: 15 * 60 * 1000, // 15 minutes
  delayAfter: 100, // allow 100 requests per 15 minutes, then...
  delayMs: 500, // begin adding 500ms of delay per request above 100:
});

//  apply to all requests
app.use(speedLimiter);

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
    console.error('Error starting the server:', error);
    process.exit(1); // Terminate the process on server startup failure
  }
}

startServer();
