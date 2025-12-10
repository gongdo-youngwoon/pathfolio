import { UserRound } from "lucide-react";

export default function UserCountHighlight() {
  const arr = Array.from({ length: 100 }, (_, i) => i + 1);

  return (
    <div className="flex flex-col items-center">
      <div className="mb-6 text-gray-900 text-4xl font-extrabold text-center leading-12">
        수치가 증명하는
        <br />
        패스폴리오 입시 전략의 효과
      </div>
      <ul className="relative grid grid-cols-20 mb-4">
        {arr.map((el) => {
          return (
            <li key={el}>
              <UserRound
                className="text-gray-300"
                size={48}
                fill="currentColor"
                stroke="none"
              />
            </li>
          );
        })}
        <li className="absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 text-6xl text-primary font-extrabold text-nowrap">
          12,450명
        </li>
      </ul>
      <div className="text-gray-900 font-semibold">
        이미 수만 명의 학생들이 입시 전략을 바꾸고 있습니다
      </div>
    </div>
  );
}
