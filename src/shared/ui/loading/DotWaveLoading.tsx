export default function DotWaveLoading() {
  return (
    <div className="flex-center gap-1 items-end p-4 bg-hover-bg rounded-full">
      <span className="animate-wave-dot bg-primary w-2 h-2 rounded-full" />
      <span className="animate-wave-dot bg-primary w-2 h-2 rounded-full animation-delay-150" />
      <span className="animate-wave-dot bg-primary w-2 h-2 rounded-full animation-delay-300" />
    </div>
  );
}
