# nlw

# Vite, React,

`npm create vite@latest`

https://www.figma.com/file/OoDJfteQy8c4D8Ftjklw4K/Feedback-Widget-(Community)-(Copy)?node-id=100%3A2114

# Icons

npm install phosphor-react

# Popover e outros components

`npm install @headlessui/react`

# Screenshot

npm install html2canvas

```tsx
const canvas = html2canvas(document.querySelector('html')!);
const base64image = (await canvas).toDataURL('image/png');
```

# Tailwind - using postcss

`npm install -D tailwindcss postcss autoprefixer npx tailwindcss init -p`
npm install -D @tailwindcss/forms
npm install --save-dev tailwind-scrollbar

Files:

https://tailwindcss.com/docs/guides/vite

Medidas em múltiplos de 4

## Tailwind Intellisense

`"editor.quickSuggestions": { "strings": true }`

- Pode separar as classes do tailwind em um arquivo .css

```css
.button {
  @apply bg-violet-500 px-4 h-10 rounded;
}
```

```tsx
<button className='button'>{props.text ?? 'Default'}</button>
```

## Cor personalizada do tailwind

```tsx
<button className='bg-[#8257e6]'>Default</button>
```

## Hover e transition

```tsx
interface ButtonProps {
  text?: string;
}

function Button(props: ButtonProps) {
  return (
    <button className='bg-violet-500 px-4 h-10 rounded hover:bg-violet-700 text-violet-500 transition-colors'>
      {props.text ?? 'Default'}
    </button>
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
```

## Criar um cor personalizada

```js
module.exports = {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          500: '#8257e6',
        },
      },
    },
  },
  plugins: [require('@tailwindcss/forms'), require('tailwind-scrollbar')],
};
```

```tsx
 <button className='bg-brand-500 rounded-full px-3 h-12 text-white'>
```

## Botão desabilitado

```tsx
<button
  type='submit'
  disabled={comment.length === 0}
  className='p-2 bg-brand-500 rounded-md border-transparent flex-1 flex justify-center items-center text-sm hover:bg-brand-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-zinc-900 focus:ring-brand-500 transition-colors disabled:opacity-50 disabled:hover:bg-brand-500'
/>
```

## Estilo baseado no estado pai (group-{modifier})

Quando você precisar estilizar um elemento com base no estado de algum elemento pai, marque o pai com a classe group
e use modificadores group-\* como group-hover para estilizar o elemento de destino:

```tsx
<div className='absolute bottom-3 right-4'>
  <button className='bg-brand-500 rounded-full px-3 h-12 text-white flex items-center group'>
    <ChatTeardropDots className='w-6 h-6' />
    <span className='max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-500 ease-linear'>
      <span className='pl-2'></span> Feedback
    </span>
  </button>
</div>
```

## Media queries

min-width: 768 passa a ter tamanho automático

```tsx
<div className='w-[calc(100vw-2rem)] md:w-auto'></div>
```

# Biblioteca com componentes acessíveis

ariakit
radix
headlessui

# Object entries

const feedBackTypes = {
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
}
};

```js
{Object.entries(feedBackTypes).map(([key, value]) => {
          return (
            <button>
              <img src={value.image.source} alt={value.image.alt} />
              <span>{value.title}</span>
            </button>
          );
        })}

  <!--
        [
          ['BUG', {tile: '', image: {...}}]
          ['IDEA', {tile: '', image: {...}}]
        ]
        -->
```

# Retornar a tipagem das chaves de um objeto

```ts
type FeedbackType = typeof feedBackTypes;
```

# Retornar as chaves de um objeto

```tsx
type FeedbackType = keyof typeof feedBackTypes
<button
              key={key}
              className='bg-zinc-800 rounded-lg py-5 w-24 flex-1 flex-col items-center gap-2 border-2 border-transparent hover:border-brand-500 focus:border-brand-500 focus:outline-none'
              onClick={() => setFeedbackType(key as FeedbackType)}
            >
```

# Tipando props - useState

Pai

```tsx
const [feedBackType, setFeedbackType] = useState<FeedbackType | null>(null);
/* ... */
<FeedbackTypeStep onFeedbackTypeChanged={setFeedbackType} />;
```

```tsx
interface FeedbackTypeStepProps {
  onFeedbackTypeChanged: (type: FeedbackType) => void;
}

export function FeedbackTypeStep({
  onFeedbackTypeChanged,
}: FeedbackTypeStepProps) {
  /* ... */
  {
    Object.entries(feedBackTypes).map(([key, value]) => {
      return (
        <button
          key={key}
          onClick={() => onFeedbackTypeChanged(key as FeedbackType)}
        >
          <span>{value.title}</span>
        </button>
      );
    });
  }
}
```

---

Back-end

npm init -y
npm i typescript @types/node ts-node-dev -D
npx tsc --init
npm i express
npm i -D @types/express
npm i prisma -D
npm i @prisma/client
npx prisma init

Instalar extensão prisma

"[prisma]": {
"editor.defaultFormatter": "Prisma.prisma"
},

Criar src

# tsconfig

```json
"target": "es2020",
"rootDir": "./src",
"outDir": "./dist"
```

# script

"test": "jest --watch",
"dev": "ts-node-dev src/server.ts",
"build": "npx tsc",
"start": "node dist/server.js"

# prisma

generator client {
provider = "prisma-client-js"
}

datasource db {
provider = "sqlite"
url = "file:./dev.db"
}
env
DATABASE_URL="file:./dev.db"

## Auto incremento com id unico

id String @id @default(uuid())

Alternativas: snowflake id

## criar tabelas

npx prisma migrate dev

nomeia

npx prisma studio

## prisma ts - acessa o banco de dados

```ts
import { PrismaClient } from '@prisma/client';

export const prisma = new PrismaClient({
  log: ['query'],
});
```

Para criar a migration
npx prisma migrate dev --name nomedamigration

# insomnia

http://localhost:3333/feedbacks

# nodemailer

npm i nodemailer
npm i @types/nodemailer

# Antes de refatorar

routes

```ts
import express from 'express';
import nodemailer from 'nodemailer';
import { prisma } from './prisma';

export const routes = express();

const transport = nodemailer.createTransport({
  host: 'smtp.mailtrap.io',
  port: 2525,
  auth: {
    user: '0d3cbed4c44a08',
    pass: '49e97620cd60fc',
  },
});

routes.post('/feedbacks', async (req, res) => {
  const { type, comment, screenshot } = req.body;

  const feedback = await prisma.feedback.create({
    data: {
      type,
      comment,
      screenshot,
    },
  });

  await transport.sendMail({
    from: 'Equipe Feedget <oi@feedget.com>',
    to: 'Admin <admin@gmail.com',
    subject: 'Novo Feedback',
    html: [
      `<div style="font-family: sans-serif; font-size: 16px; color: #111">`,
      `<p>Tipo do feedback: ${type}</p>`,
      `<p>Comentário: ${comment}</p>`,
      `</div>`,
    ].join('\n'),
  });

  return res.status(201).send({ data: feedback });
});
```

server

```ts
import express from 'express';
import { routes } from './routes';

const app = express();

app.use(express.json());

app.use(routes);

app.listen(3333, () => {
  console.log('HTTP server running');
});
```

# Testes

npm install jest -D
npx jest --init

y y node yes v8 y

npm install ts-node -D
npm i -D jest @swc/core @swc/jest

module.exports = {
transform: {
"^.+\\.(t|j)sx?$": ["@swc/jest"],
},
};

npm i @types/jest -D

npm i cors
npm i @type/cors -D

# startsWith (string)

if (screenshot && !screenshot.startsWith('data:image/png;base64')) {
throw new Error('Invalid screenshot format');
}

# Integração

npm i axios

# Mobile

npm install -g expo-cli
expo init mobile --npm (usar a flag para instalar com npm)
blank typescript
expo start

extensão rcomponent
rnso
rnbc

expo install @expo-google-fonts/inter expo-font
expo install expo-splash-screen
npm install --save phosphor-react-native
expo install react-native-svg
npm i react-native-iphone-x-helper
npm i @gorhom/bottom-sheet
expo install react-native-reanimated

no babel:
plugins: ['react-native-reanimated/plugin'],

no app:
import 'react-native-gesture-handler';

expo install react-native-gesture-handler

expo start --clear

expo install react-native-view-shot

npm i expo-file-system

ipconfig (ver o ip)
npm i axios

---

Quando criar booleanos em váriavel de estado algo que remeta ao que está acontecendo
ex:
🤚 [loading, setLoading] = useState(false)
🆗 [isSendingFeedback, setIsSendingFeedback] = useState(false)

---

deploy

web

env.local
VITE_API_URL= 'http://localhost:3333'

---

server

generator client {
provider = "prisma-client-js"
}

datasource db {
provider = "postgresql"
url = env("DATABASE_URL")
}

model Feedback {
id String @id @default(uuid())

type String
comment String
screenshot String?

@@map("feedbacks")
}

---

ts config
"include": ["src"]
