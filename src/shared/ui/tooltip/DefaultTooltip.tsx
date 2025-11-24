type Direction = "top" | "right" | "bottom" | "left";

interface DirectionalTooltipProps {
  direction: Direction;
  label: string;
}

const positionClasses: Record<Direction, string> = {
  top: "",
  right: "absolute top-1/2 -translate-y-1/2 -right-4 translate-x-full",
  bottom: "absolute -bottom-9",
  left: "",
};

export default function DefaultTooltip({
  direction,
  label,
}: DirectionalTooltipProps) {
  return (
    <div
      className={`${positionClasses[direction]} hidden group-[:hover]:block`}
    >
      <div className="px-2 py-1.5 bg-info text-white text-xs text-nowrap rounded-md">
        {label}
      </div>
    </div>
  );
}
