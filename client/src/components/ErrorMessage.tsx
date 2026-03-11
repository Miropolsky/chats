type ErrorMessageProps = {
  message: string | null;
};

export function ErrorMessage({ message }: ErrorMessageProps) {
  if (!message) return null;

  return (
    <div className="mb-4 px-3 py-2 rounded-xl bg-red-900/40 text-red-100 text-sm border border-red-800/50">
      {message}
    </div>
  );
}
