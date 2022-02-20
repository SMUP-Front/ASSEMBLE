import React from "react";
import { LoginButton } from "../../Login/style";
import Alarm from "../Alarm";
import { S } from "./style";


type props = {
    alarm:boolean,
    src:any
}
function HeadAfter({alarm,src}:props){

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
                <S.ProfileWrapper>
                    <Alarm exist={alarm} />
                    <S.ProfileImgWrapper>
                        {
                            src?
                            <img src={src} alt="" />
                        :<></>
                        }
                    </S.ProfileImgWrapper>
                </S.ProfileWrapper>

            </S.TotalWrapper>
        </>
    )
}

export default HeadAfter;