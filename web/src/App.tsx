interface ButtonProps {
  text?: string;
}

function Button(props: ButtonProps) {
  return (
    <button className='bg-violet-500 px-4 h-10 rounded'>{props.text ?? 'Default'}</button>
  );
}

function App() {
  return (
    <div className='flex gap-2'>
      <Button /> <Button text='Enviar' />
    </div>
  );
}

export default App;
