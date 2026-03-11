type ChatInputProps = {
  value: string;
  onChange: (value: string) => void;
  onSend: () => void;
  onVoiceToggle: () => void;
  loading: boolean;
  recording: boolean;
};

export function ChatInput({
  value,
  onChange,
  onSend,
  onVoiceToggle,
  loading,
  recording,
}: ChatInputProps) {
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      onSend();
    }
  };

  return (
    <div className="flex gap-3 items-center rounded-2xl bg-chat-bar px-4 py-3 focus-within:ring-2 focus-within:ring-white/20">
      <button
        type="button"
        onClick={onVoiceToggle}
        className="w-10 h-10 shrink-0 rounded-full bg-chat-icon flex items-center justify-center text-white hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-white/30"
        title={recording ? 'Остановить запись' : 'Голосовой ввод'}
        aria-label={recording ? 'Остановить запись' : 'Голосовой ввод'}
      >
        {recording ? (
          <span className="w-4 h-4 rounded-full bg-red-500 animate-pulse" />
        ) : (
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 14c1.66 0 3-1.34 3-3V5c0-1.66-1.34-3-3-3S9 3.34 9 5v6c0 1.66 1.34 3 3 3zm5-3c0 2.76-2.24 5-5 5s-5-2.24-5-5H5c0 3.53 2.61 6.43 6 6.92V21h2v-3.08c3.39-.49 6-3.39 6-6.92h-2z" />
          </svg>
        )}
      </button>
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        onKeyDown={handleKeyDown}
        placeholder="Введите сообщение..."
        className="flex-1 bg-transparent outline-none text-chat-bg placeholder-chat-barPlaceholder min-w-0 text-base"
        disabled={loading}
      />
      <button
        type="button"
        onClick={onSend}
        disabled={loading || !value.trim()}
        className="w-10 h-10 shrink-0 rounded-xl bg-chat-bg flex items-center justify-center text-white hover:opacity-90 disabled:opacity-50 disabled:cursor-not-allowed focus:outline-none focus:ring-2 focus:ring-white/30"
        title="Отправить"
        aria-label="Отправить"
      >
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z" />
        </svg>
      </button>
    </div>
  );
}
