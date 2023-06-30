import { validationSchema } from '../validator-schema/validationSchema.js';
import { UserService } from './user.service.js';
import express from 'express';
import { checkSchema, validationResult } from 'express-validator';

export const userRouter = express.Router();

//get user by id

userRouter.get(
  '/:id',
  checkSchema(validationSchema.idSchema),
  async (req, res) => {
    try {
      const errors = validationResult(req);

      if (!errors.isEmpty()) {
        return res.status(422).json({
          errors: errors.array(),
        });
      }
      const { id } = req.params;
      if (!id) {
        res
          .status(422)
          .send({ success: false, message: 'Invalid id parameter' });
      }
      const user = await UserService.getUser(id);
      res.status(200).send({ success: true, user: user });
    } catch (error) {
      res
        .status(500)
        .json({ success: false, message: 'Internal server error' });
    }
  }
);

//create user

userRouter.post(
  '/register',
  checkSchema(validationSchema.createUserSchema),
  async (req, res) => {
    try {
      const errors = validationResult(req);

      if (!errors.isEmpty()) {
        return res.status(422).json({
          errors: errors.array(),
        });
      }
      const { data } = req.body;
      if (!data) {
        res.status(422).send({ success: false, message: 'Invalid data' });
      }
      const user = await UserService.createUser(data);
      if (user === 'user exists') {
        res.status(200).json({ message: 'User already exists' });
      }
      res.status(200).send({ success: true, user: 'registration successful' });
    } catch (error) {
      res
        .status(500)
        .json({ success: false, message: 'Internal server error' });
    }
  }
);

//login user

userRouter.post(
  '/login',
  checkSchema(validationSchema.loginUserSchema),
  async (req, res) => {
    try {
      const errors = validationResult(req);

      if (!errors.isEmpty()) {
        return res.status(422).json({
          errors: errors.array(),
        });
      }
      const user = await UserService.loginUser();
      if (user === 404) {
        res.status(404).json({ message: 'User not found' });
      }
      if (user === 401) {
        res.status(401).json({ message: 'Invalid Credentials' });
      }
      res.status(200).send({ success: true, user: 'login successful' });
    } catch (error) {
      res
        .status(500)
        .json({ success: false, message: 'Internal server error' });
    }
  }
);

//update user

userRouter.post(
  '/update/:id',
  checkSchema(validationSchema.createUserSchema),
  async (req, res) => {
    try {
      const errors = validationResult(req);

      if (!errors.isEmpty()) {
        return res.status(422).json({
          errors: errors.array(),
        });
      }
      const { id } = req.params;

      if (!id) {
        res
          .status(422)
          .send({ success: false, message: 'Invalid id parameter' });
      }
      const user = await UserService.updateUser(id);
      res.status(200).send({ success: true, user: user });
    } catch (error) {
      res
        .status(500)
        .json({ success: false, message: 'Internal server error' });
    }
  }
);
