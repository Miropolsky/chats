import { GoogleGenAI } from '@google/genai';

let genAI = null;

export function initGemini(apiKey) {
  if (!apiKey) {
    return false;
  }
  genAI = new GoogleGenAI({ apiKey });
  return true;
}

export function isInitialized() {
  return genAI !== null;
}

export async function generateResponse(message) {
  if (!genAI) {
    throw new Error('Gemini API не настроен');
  }

  const response = await genAI.models.generateContent({
    model: 'gemini-2.5-flash',
    contents: message,
  });

  return (response?.text && response.text.trim()) || 'Ответ не получен.';
}
