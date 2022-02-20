import styled from 'styled-components'

export const S = {

    TotalWrapper:styled.div`
        box-sizing:border-box;
        width:100%;
        min-width:1000px;
        height:80px;
        display:flex;
        flex-direction:row;
        align-items:center;
        justify-content:space-between;
        box-shadow:0px 3px 10px lightgray;
        position:absolute;
        top:0px;
        left:0px;
        z-index:999;
        background-color:white;
    `,
    Logo:styled.p`
        font-family:Noto Sans KR;
        font-size:30px;
        font-weight:bold;
        margin-left:100px;

    `,  
    CartegoryWrapper:styled.div`
        display:flex;
        flex-direction:row;
        align-items:center;
        max-width:700px;
        min-width:500px;
        justify-content:space-between;
        font-size:18px;
        font-family:Noto Sans KR;
    `,
    EachCartegory:styled.p`
    
    `,
    LoginButton:styled.div`
        width:88px;
        height:36px;
        background-color:#AE6FFF;
        margin-right:100px;
        border-radius:50px;
        display:flex;
        align-items:center;
        justify-content:center;
        color:white;
        font-size:18px;
        font-family:Noto Sans KR;
    `,
}