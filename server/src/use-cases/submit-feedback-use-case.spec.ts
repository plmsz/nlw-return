import { SubmitFeedbackUseCase } from './submit-feedback-use-case';

const createFeedbackSpy = jest.fn();
const sendEmailSpy = jest.fn();

const submitFeedback = new SubmitFeedbackUseCase(
  { create: createFeedbackSpy },
  { sendMail: sendEmailSpy }
);

describe('submit feedback', () => {
  it('should be able to submit a feedback', async () => {
    await expect(
      submitFeedback.execute({
        type: 'bug',
        comment: 'example comment',
        screenshot: 'data:image/png;base64,jsjoiwsuszhowje9',
      })
    ).resolves.not.toThrow();

    expect(createFeedbackSpy).toHaveBeenCalled();
    expect(sendEmailSpy).toHaveBeenCalled();
  });
  it('should not be able to submit a feedback without a type', async () => {
    await expect(
      submitFeedback.execute({
        type: '',
        comment: 'example comment',
        screenshot: 'data:image/png;base64,jsjoiwsuszhowje9',
      })
    ).rejects.toThrow();
  });
  it('should not be able to submit a feedback without a comment', async () => {
    await expect(
      submitFeedback.execute({
        type: 'bug',
        comment: '',
        screenshot: 'data:image/png;base64,jsjoiwsuszhowje9',
      })
    ).rejects.toThrow();
  });
  it('should not be able to submit a feedback with an invalid screenshot', async () => {
    await expect(
      submitFeedback.execute({
        type: 'bug',
        comment: 'example comment',
        screenshot: 'jsjoiwsuszhowje9',
      })
    ).rejects.toThrow();
  });
});
