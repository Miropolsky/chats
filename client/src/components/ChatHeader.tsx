export function ChatHeader() {
  return (
    <div className="flex-col items-start gap-5 mb-8">
        <div className="w-11 h-11 rounded-xl bg-chat-icon flex items-center justify-center shrink-0 mb-3">
          <svg
            className="w-6 h-6 text-white"
            fill="currentColor"
            viewBox="0 0 24 24"
            aria-hidden
          >
            <path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 14H5.17L4 17.17V4h16v12z" />
          </svg>
        </div>
        <div className="pt-0.5">
          <p className="text-white text-lg font-semibold mb-2">Hi there!</p>
          <h1 className="text-white text-2xl md:text-3xl font-bold leading-tight mb-3">
            What would you like to know?
          </h1>
          <p className="text-white text-sm font-normal leading-relaxed max-w-md">
            Use one of the most common prompts below
            <br />
            or ask your own question
          </p>
        </div>
    </div>
  );
}
