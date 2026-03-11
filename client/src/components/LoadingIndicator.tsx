type LoadingIndicatorProps = {
  visible: boolean;
};

export function LoadingIndicator({ visible }: LoadingIndicatorProps) {
  if (!visible) return null;

  return (
    <div className="flex items-center gap-2 text-white/80 mb-4">
      <span className="inline-block w-2 h-2 rounded-full bg-current animate-pulse" />
      <span className="text-sm">Ожидание ответа...</span>
    </div>
  );
}
