import html2canvas from 'html2canvas';
import { Camera } from 'phosphor-react';
import { useState } from 'react';

function ScreenshotCamera() {
    const [isTakingScreenshot, setIsTakingScreenshot] = useState(false);

    async function handleTakeScreenshot(){
        const canvas = html2canvas(document.querySelector('html')!)
        const base64image = (await canvas).toDataURL('image/png')
    }
  return (
    <button
      type='button'
      className='p-2 bg-zinc-800 rounded-md border-transparent hover:bg-zinc-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-zinc-900 focus:ring-brand-500 transition-colors'
        onClick={handleTakeScreenshot}
    >
      <Camera className='w-6 h-6' />
    </button>
  );
}

export default ScreenshotCamera;
