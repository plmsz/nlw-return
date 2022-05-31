import { useState } from 'react';
import bugImageUrl from '../../assets/bug.svg';
import ideaImageUrl from '../../assets/idea.svg';
import thoughtImageUrl from '../../assets/thought.svg';
import { FeedbackContentStep } from './Steps/FeedbackContentStep';
import { FeedbackSuccessStep } from './Steps/FeedbackSuccessStep';
import { FeedbackTypeStep } from './Steps/FeedbackTypeStep';

export const feedBackTypes = {
  bug: {
    title: 'Problema',
    image: {
      source: bugImageUrl,
      alt: '',
    },
  },
  IDEA: {
    title: 'Ideia',
    image: {
      source: ideaImageUrl,
      alt: '',
    },
  },
  OTHER: {
    title: 'Outro',
    image: {
      source: thoughtImageUrl,
      alt: '',
    },
  },
};

export type FeedbackType = keyof typeof feedBackTypes;

export function WidgetForm() {
  const [feedBackType, setFeedbackType] = useState<FeedbackType | null>(null);
  const [feedBackSent, setFeedBackSent] = useState(false);

  function handleRestartFeedback() {
    setFeedBackSent(false)
    setFeedbackType(null);
  }

  return (
    <div className='bg-zinc-900 p-4 relative rounded-2xl mb-4 flex flex-col items-center shadow-lg w-[calc(100vw-2rem)] md:w-auto'>
      {feedBackSent ? (
        <FeedbackSuccessStep onFeedbackRestartRequested={handleRestartFeedback}/>
      ) : (
        <>
          {!feedBackType ? (
            <FeedbackTypeStep onFeedbackTypeChanged={setFeedbackType} />
          ) : (
            <FeedbackContentStep
              feedBackType={feedBackType}
              onFeedbackRestartRequested={handleRestartFeedback}
              onFeedBackSent={() => setFeedBackSent(true)}
            />
          )}
        </>
      )}
      <footer>
        <span className='text-xs text-neutral-400'>
          Feito na nlw da{' '}
          <a
            className='underline underline-offset-2'
            href='https://rocketseat.com.br/'
          >
            Rocketseat
          </a>{' '}
        </span>
      </footer>
    </div>
  );
}
