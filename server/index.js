import { mongoConnect } from './schema/mongo.connect.js';
import { cfpRouter } from './src/cpfs/cfp.router.js';
import { eventRouter } from './src/events/events.router.js';
import { hackathonRouter } from './src/hackathons/hackathon.router.js';
import { userRouter } from './src/users/user.router.js';
import dotenv from 'dotenv';
import express from 'express';

dotenv.config();
const app = express();
const port = process.env.PORT;

await mongoConnect();

// app.get('/', () => {
//   throw new Error('');
// });

app.use(express.json());

app.use('/api/user', userRouter);
app.use('/api/events', eventRouter);
app.use('/api/hackathons', hackathonRouter);
app.use('/api/cfps', cfpRouter);

// eslint-disable-next-line no-console
app.listen(port, () => console.log(`server is running on ${port}`));
