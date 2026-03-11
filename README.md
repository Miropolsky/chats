# Чат с Gemini

Веб-приложение: поле ввода, отправка в API Google Gemini (Google AI Studio), отображение ответа.

## Стек

- **Frontend:** React, TypeScript, Vite, Tailwind CSS
- **Backend:** Node.js, Express
- **AI:** Google AI Studio (Gemini API), бесплатный tier

## Требования

- Node.js 18+
- Бесплатный API-ключ [Google AI Studio](https://aistudio.google.com/app/apikey)

## Переменные окружения (.env)

Файл **`.env`** должен лежать в папке **`server/`** (рядом с `index.js`).

Если файл `.env` отсутствует, сервер автоматически попытается загрузить переменные из `.env.example`.

Создайте файл `.env` на основе `.env.example`:

```env
PORT=3001
GOOGLE_GEMINI_API_KEY=ваш-ключ-из-aistudio
```

Подойдёт также переменная `GEMINI_API_KEY` (приоритет у `GOOGLE_GEMINI_API_KEY`).

| Переменная             | Описание |
|------------------------|----------|
| `PORT`                 | Порт сервера (по умолчанию 3001). |
| `GOOGLE_GEMINI_API_KEY` | Ключ из [Google AI Studio → Get API key](https://aistudio.google.com/app/apikey). Бесплатный квот для Gemini. |

Файл `.env` не коммитьте в репозиторий (должен быть в `.gitignore`). Файл `.env.example` содержит шаблон и может быть закоммичен.

## Запуск

### Вариант 1: общий запуск из корня

Из папки `chat`:

```bash
npm run install:all   # один раз: установить зависимости везде
npm run dev          # запуск бэкенда и фронта вместе
```

Перед первым запуском создайте в папке `server` файл `.env` с ключом из [aistudio.google.com/app/apikey](https://aistudio.google.com/app/apikey):

```
PORT=3001
GOOGLE_GEMINI_API_KEY=ваш-ключ
```

- Бэкенд: http://localhost:3001  
- Фронт: http://localhost:5173 (запросы к `/api` проксируются на бэкенд)

### Вариант 2: раздельный запуск

**Бэкенд:**

```bash
cd server
npm install
# создайте .env с GOOGLE_GEMINI_API_KEY (ключ: aistudio.google.com/app/apikey)
npm run dev
```

**Фронтенд** (в другом терминале):

```bash
cd client
npm install
npm run dev
```

### Сборка для продакшена

**Клиент:**

```bash
cd client
npm run build
npm run preview
```

**Сервер:** как обычно `npm start` в папке `server`. Раздавать статику из `client/dist` можно через Express (при необходимости добавьте `express.static`).

## Деплой

Приложение задеплоено:

- **Backend:** [https://chats-y47a.onrender.com](https://chats-y47a.onrender.com) (Render)
- **Frontend:** [https://chats-murex-iota.vercel.app](https://chats-murex-iota.vercel.app) (Vercel)

### Локальная разработка

При локальной разработке фронтенд автоматически использует прокси для запросов к локальному бэкенду (`http://localhost:3001`). В продакшене используется бэкенд на Render.

### Переменные окружения для деплоя

**Vercel (Frontend):**
- `VITE_API_URL` = `https://chats-y47a.onrender.com` (опционально, по умолчанию используется продакшен URL)

**Render (Backend):**
- `GOOGLE_GEMINI_API_KEY` = ваш API ключ
- `PORT` = (оставляйте пустым, Render сам назначит)
