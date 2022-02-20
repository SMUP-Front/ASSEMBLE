import React from "react";
import { LoginButton } from "../../Login/style";
import { S } from "./style";


type props = {

}
function HeadBefore({}:props){

    return(
        <>
            <S.TotalWrapper>
                <S.Logo>
                    SMUP
                </S.Logo>
                <S.CartegoryWrapper>
                <S.EachCartegory>시간표</S.EachCartegory>
                <S.EachCartegory>일정</S.EachCartegory>
                <S.EachCartegory>급식</S.EachCartegory>
                <S.EachCartegory>SOOM</S.EachCartegory>
                </S.CartegoryWrapper>
                <S.LoginButton>
                    <p>로그인</p>
                </S.LoginButton>
            </S.TotalWrapper>
        </>
    )
}

export default HeadBefore