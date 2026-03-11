import { useCallback, useEffect, useState } from 'react';
import {
  ChatHeader,
  ChatInput,
  ErrorMessage,
  LoadingIndicator,
  MessageList,
} from './components';
import { useVoiceInput } from './hooks/useVoiceInput';
import { sendMessage as apiSendMessage } from './services/api';
import type { Message } from './types/chat';

function App() {
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<Message[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleVoiceTranscript = useCallback((transcript: string) => {
    setInput((prev) => (prev ? `${prev} ${transcript}` : transcript));
  }, []);

  const { recording, startRecording, stopRecording, error: voiceError } = useVoiceInput(handleVoiceTranscript);

  useEffect(() => {
    if (voiceError) {
      setError(voiceError);
    }
  }, [voiceError]);

  const handleSend = useCallback(async () => {
    const text = input.trim();
    if (!text || loading) return;

    setError(null);
    setInput('');
    setMessages((prev) => [...prev, { role: 'user', text }]);
    setLoading(true);

    try {
      const reply = await apiSendMessage(text);
      setMessages((prev) => [...prev, { role: 'assistant', text: reply }]);
    } catch (e) {
      setError(e instanceof Error ? e.message : 'Неизвестная ошибка');
    } finally {
      setLoading(false);
    }
  }, [input, loading]);

  const toggleVoice = useCallback(() => {
    if (recording) {
      stopRecording();
    } else {
      startRecording();
    }
  }, [recording, startRecording, stopRecording]);

  return (
    <div className="min-h-screen text-white flex flex-col relative">
      <main className="flex-1 flex flex-col max-w-2xl w-full mx-auto px-5 pt-8 pb-4 sm:px-6 sm:pt-10 relative z-10">
        <ChatHeader />
        <div className="flex-1 min-h-0 flex flex-col">
          <MessageList messages={messages} />
          <LoadingIndicator visible={loading} />
          <ErrorMessage message={error} />
        </div>
      </main>
      <div className="w-full max-w-2xl mx-auto px-5 pb-6 pt-2 sm:px-6">
        <ChatInput
          value={input}
          onChange={setInput}
          onSend={handleSend}
          onVoiceToggle={toggleVoice}
          loading={loading}
          recording={recording}
        />
      </div>
    </div>
  );
}

export default App;
