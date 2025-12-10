import { SOCIAL_LOGIN_LIST } from "../model/socialLoginList";

export default function SocialLogin() {
  return (
    <div className="flex items-center justify-between">
      <div className="text-gray-700 text-xs">SNS 간편 로그인</div>
      <ul className="flex gap-4">
        {SOCIAL_LOGIN_LIST.map((s) => {
          return (
            <li
              key={s.id}
              className="flex-center size-9 rounded-full"
              style={{ backgroundColor: s.bgColor }}
            ></li>
          );
        })}
      </ul>
    </div>
  );
}
