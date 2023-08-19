import express from 'express';
import NewsletterService from "./newsletter.service.js";
export const newsletterRouter= express.Router();

newsletterRouter.post('/',NewsletterService);
