import { Map } from "lucide-react";

interface MainLogoProps {
  iconSize: number;
  fontSize: string;
}

export default function MainLogo({ iconSize, fontSize }: MainLogoProps) {
  return (
    <div className="flex items-center gap-2 text-primary">
      <Map size={iconSize} />
      <div className={`${fontSize} font-black`}>PATHFOLIO</div>
    </div>
  );
}
