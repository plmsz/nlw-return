import express from 'express';
import { SubmitFeedbackUseCase } from './use-cases/submit-feedback-use-case';
import { PrismaFeedbackRepository } from './repositories/prisma/prisma-feedbacks-repositories';
import { NodeMailAdapter } from './adapters/nodemailer/nodemailer-mail-adapter';

export const routes = express();

routes.post('/feedbacks', async (req, res) => {
  const { type, comment, screenshot } = req.body;

  const prismaFeedbacksRepositories = new PrismaFeedbackRepository();
  const nodemailerMailAdapter = new NodeMailAdapter();

  const submitFeedbackUseCase = new SubmitFeedbackUseCase(
    prismaFeedbacksRepositories,
    nodemailerMailAdapter
  );

  await submitFeedbackUseCase.execute({
    type,
    comment,
    screenshot,
  });

  return res.status(201).send();
});
