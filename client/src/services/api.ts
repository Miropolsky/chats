export interface ChatResponse {
  reply: string;
}

export interface ChatError {
  error: string;
}

export async function sendMessage(message: string): Promise<string> {
  const res = await fetch('/api/chat', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ message }),
  });

  const data: ChatResponse | ChatError = await res.json();

  if (!res.ok) {
    throw new Error('error' in data ? data.error : `Ошибка ${res.status}`);
  }

  return 'reply' in data ? data.reply : '';
}
