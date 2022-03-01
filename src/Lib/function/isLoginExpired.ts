import { getTokens } from "./getTokens";
import { tokenRefresh } from "./tokenRefresh";

export function isLoginExpired(): boolean {
  if (getTokens()) {
    //token이 있을 때.
    if (tokenRefresh()) {
      //refresh 성공?
      return false;
      //토큰이 만료되지 않음, & 토큰 갱신됨.
    } else {
      return true;
      //토큰이 만료됨.
      //로그인 필요 메세지 출력.
    }
    //refresh 요청 보낸 후 만료 여부 판단.
    //true 반환했다면? 만료되지 않음 : 만료됨
  } else {
    //token이 없을 때.
    return true;
    //로그인 필요 메세지 출력.
  }
  return true;
}
