import { UserService } from './user.service.js';
import express from 'express';

export const userRouter = express.Router();

//get user by id

userRouter.get('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const user = await UserService.getUser(id);
    res.status(200).send({ success: true, user: user });
  } catch (error) {
    res.status(500).send(error);
  }
});

//create user

userRouter.post('/register', async (req, res) => {
  try {
    const { data } = req.body;

    const user = await UserService.createUser(data);
    if (user === 'user exists') {
      res.status(200).json({ message: 'User already exists' });
    }
    res.status(200).send({ success: true, user: 'registration successful' });
  } catch (error) {
    res.status(500).send(error);
  }
});

//login user

userRouter.post('/login', async (req, res) => {
  try {
    const user = await UserService.loginUser();
    if (user === 404) {
      res.status(404).json({ message: 'User not found' });
    }
    if (user === 401) {
      res.status(401).json({ message: 'Invalid Credentials' });
    }
    res.status(200).send({ success: true, user: 'login successful' });
  } catch (error) {
    res.status(500).send(error);
  }
});

//update user

userRouter.post('/update/:id', async (req, res) => {
  try {
    const { id } = req.params;

    const user = await UserService.updateUser(id);
    res.status(200).send({ success: true, user: user });
  } catch (error) {
    res.status(500).send(error);
  }
});
