import generateToken from '../helper/generate-token';
import { validationSchema } from '../validator-schema/validationSchema';
import { UserService } from './user.service';
// import express, { Request, Response } from 'express';
import * as express from 'express';
import { Request, Response } from 'express';
import { checkSchema, validationResult } from 'express-validator';

export const userRouter = express.Router();

interface RequestParams {
  id: string;
  slug: string;
}

//get user by id
userRouter.get(
  '/:id',
  checkSchema(validationSchema.idSchema),
  async (req: Request<RequestParams>, res: Response) => {
    try {
      const errors = validationResult(req);

      if (!errors.isEmpty()) {
        return res.status(422).json({
          errors: errors.array(),
        });
      }
      const { id } = req.params;

      const user = await UserService.getUser(id);
      res.status(200).send({ success: true, user: user });
    } catch (error) {
      res
        .status(500)
        .json({ success: false, message: 'Internal server error' });
    }
  }
);

//create user using provider

userRouter.post(
  '/provider',
  checkSchema(validationSchema.createUserProviderSchema),
  async (req: Request, res: Response) => {
    try {
      const errors = validationResult(req.body);

      if (!errors.isEmpty()) {
        return res.status(422).json({
          errors: errors.array(),
        });
      }

      const { data } = req.body;

      const user = await UserService.register(data);
      if (user.status === 409) {
        res.status(200).json({ success: true });
      }
      if (user.status === 200) {
        res.status(200).send({
          success: true,
          message: 'You have successfully registered!',
        });
      }
    } catch (error) {
      res
        .status(500)
        .json({ success: false, message: 'Internal server error' });
    }
  }
);

//create user using registration
userRouter.post(
  '/register',
  checkSchema(validationSchema.createUserSchema),
  async (req: Request, res: Response) => {
    try {
      const errors = validationResult(req);

      if (!errors.isEmpty()) {
        return res.status(422).json({
          errors: errors.array(),
        });
      }
      const data = req.body;

      const user = await UserService.register(data);
      if (user.status === 409) {
        res
          .status(409)
          .json({ success: false, message: 'User already exists' });
      }
      if (user.status === 200) {
        const token = generateToken(user?.id?.toString() ?? '');
        res.status(200).send({
          success: true,
          message: 'You have successfully registered!',
          token,
        });
      }
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
  async (req: Request, res: Response) => {
    try {
      const errors = validationResult(req);

      if (!errors.isEmpty()) {
        return res.status(422).json({
          errors: errors.array(),
        });
      }

      const data = req.body;
      const user = await UserService.login(data);
      if (user.status === 404) {
        res.status(404).json({ success: false, message: 'User not found' });
      }
      if (user.status === 401) {
        res
          .status(401)
          .json({ success: false, message: 'Invalid Credentials' });
      }
      if (user.status === 200) {
        const token = generateToken(user?.id?.toString() ?? '');
        res.status(200).send({
          success: true,
          message: 'You have successfully logged in!',
          token,
        });
      }
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
  async (req: Request, res: Response) => {
    try {
      const errors = validationResult(req);

      if (!errors.isEmpty()) {
        return res.status(422).json({
          errors: errors.array(),
        });
      }
      const { id } = req.params;
      // const { data } = req.body;
      const { name, email, password, image, bio, role, socials } = req.body;

      const userInfo = { name, email, password, image, bio, role, socials };

      const user = await UserService.updateUser(id, userInfo);
      res.status(200).send({ success: true, user: user });
    } catch (error) {
      res
        .status(500)
        .json({ success: false, message: 'Internal server error' });
    }
  }
);
