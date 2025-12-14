interface DotWaveLoadingProps {
  size: string;
}

export default function DotWaveLoading({ size }: DotWaveLoadingProps) {
  return (
    <div className="flex-center gap-1 items-end p-4 bg-hover-bg rounded-full">
      <span className={`animate-wave-dot bg-primary ${size} rounded-full`} />
      <span
        className={`animate-wave-dot bg-primary ${size} rounded-full animation-delay-150`}
      />
      <span
        className={`animate-wave-dot bg-primary ${size} rounded-full animation-delay-300`}
      />
    </div>
  );
}
