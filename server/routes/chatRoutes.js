import express from 'express';
import { generateResponse, isInitialized } from '../services/geminiService.js';

const router = express.Router();

router.post('/chat', async (req, res) => {
  const { message } = req.body;

  if (!message || typeof message !== 'string') {
    return res.status(400).json({
      error: 'Поле message обязательно и должно быть строкой.',
    });
  }

  const trimmed = message.trim();
  if (!trimmed) {
    return res.status(400).json({
      error: 'Сообщение не может быть пустым.',
    });
  }

  if (!isInitialized()) {
    return res.status(503).json({
      error: 'Сервер не настроен: отсутствует API ключ.',
    });
  }

  try {
    const reply = await generateResponse(trimmed);
    res.json({ reply });
  } catch (err) {
    console.error('Gemini API error:', err);

    const status = err.status ?? err.statusCode ?? 500;
    let message = err.message || 'Не удалось получить ответ от Gemini.';
    
    if (status === 429) {
      message = 'Превышен лимит запросов. Попробуйте позже.';
    }

    res.status(typeof status === 'number' ? status : 500).json({
      error: message,
    });
  }
});

router.get('/health', (req, res) => {
  res.json({
    ok: true,
    hasApiKey: isInitialized(),
  });
});

export default router;
