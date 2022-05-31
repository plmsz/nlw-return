import { ArrowLeft } from 'phosphor-react';
import { FormEvent, useState } from 'react';
import { FeedbackType, feedBackTypes } from '..';
import { CloseButton } from '../../CloseButton';
import ScreenshotButton from '../ScreenshotCamera';

interface FeedbackContentStepProps {
  feedBackType: FeedbackType;
  onFeedbackRestartRequested: () => void;
  onFeedBackSent: ()=> void;
}

export function FeedbackContentStep({
  feedBackType,
  onFeedbackRestartRequested,
  onFeedBackSent,
}: FeedbackContentStepProps) {
  const feedBackTypeInfo = feedBackTypes[feedBackType];
  const [screenshot, setScreenshot] = useState<string | null>(null);
  const [comment, setComment] = useState('');

  function handleSubmit(event: FormEvent) {
    event.preventDefault();
    console.log({
      screenshot,
      comment,
    });
    onFeedBackSent();
  }
  return (
    <>
      <header>
        <button
          type='button'
          className='top-5 left-5 absolute text-zinc-400 hover:text-zinc-100'
          onClick={onFeedbackRestartRequested}
        >
          <ArrowLeft weight='bold' className='w-4 h-4' />
        </button>
        <span className='text-xl leading-6 flex items-center gap-2'>
          <img
            src={feedBackTypeInfo.image.source}
            alt={feedBackTypeInfo.image.alt}
            className='w-6 h-6'
          />
          {feedBackTypeInfo.title}
        </span>
        <CloseButton />
      </header>
      <form className='my-4 w-full' onSubmit={handleSubmit}>
        <textarea
          className='min-w-[304px] min-h-[112px] w-full text-sm placeholder-zinc-400 text-zinc-100 border-zinc-600 bg-transparent 
          rounded-md focus:border-brand-500 focus:ring-brand-500 focus:ring-1 focus:outline-none resize-none scrollbar-thumb-zinc-700 scrollbar-track-transparent scrollbar-thin'
          placeholder='Conte com detalhes o que está acontecendo..'
          onChange={(event) => setComment(event.target.value)}
        ></textarea>
        <footer className='flex gap-2 mt-2'>
          <ScreenshotButton
            onScreenshotTook={setScreenshot}
            screenshot={screenshot}
          />
          <button
            type='submit'
            disabled={comment.length === 0}
            className='p-2 bg-brand-500 rounded-md border-transparent flex-1 flex justify-center items-center text-sm hover:bg-brand-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-zinc-900 focus:ring-brand-500 transition-colors disabled:opacity-50 disabled:hover:bg-brand-500'
          >
            Enviar feedback
          </button>
        </footer>
      </form>
    </>
  );
}
