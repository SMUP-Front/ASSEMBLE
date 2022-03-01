import axios from "axios";
import { baseUrl } from "../export/BaseURL";
import { getTokens } from "./getTokens";

export function tokenRefresh():boolean { //성공하면 true(200), 아니면 false(400).

    const tokenResult = getTokens();
    const body = {
        refreshToken:tokenResult?.Refresh
    }
    let refreshedToken;
    axios.post(baseUrl('api/v1/account/auth/refresh'),body)
    .then(res=>{
        console.log(res);
        refreshedToken = res.data;
        //토큰 저장
    })
    .catch(err=>{
        console.log(err)
        refreshedToken = null;
    })

    return refreshedToken?true:false;
}