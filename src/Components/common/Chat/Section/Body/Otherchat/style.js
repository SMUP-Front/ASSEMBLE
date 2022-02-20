import styled from 'styled-components'

export const S = {
    TotalWrapper:styled.div`
        display:flex;
        flex-direction:row;
        margin-bottom:40px;
    `,
    ImgWrapper:styled.div`
        width:40px;
        height:40px;
        background-color:lightgray;
        border-radius:100%;
        margin-left:30px;
        margin-top:17px;
    `,
    Name:styled.p`
        color:#A5A5A5;
        margin:0px;
        font-size:5px;
        margin-bottom:10px;
    `,
    TextsWrapper:styled.div`
        width:calc(100% - 87px);
        display:flex;
        flex-direction:column;
        margin-left:10px;

    `,
    TextWrapper:styled.div`
        display:flex;
        align-self:flex-start;
        background-color:#EDEDED;
        height:fit-content;
        max-width:40%;
        width:fit-content;
        border-radius:15px;
        >p{
            margin:3px 14px 3px 14px;
            color:black;
            word-break:break-all;
            font-size:16px;
        }
    `,
}