import styled from 'styled-components'

export const S = {
    TotalWrapper:styled.div`
        width:100%;
        height:70px;
        border:0.7px solid #D6D6D6;
        border-top:none;
        box-sizing:border-box;
        display:flex;
        flex-direction:row;
        align-items:center;
        justify-content:space-between;
    `,
    TitleWrapper:styled.div`
        display:flex;
        flex-direction:row;
        align-items:center;

    `,
    ImgWrapper:styled.div`
        width:50px;
        height:50px;
        background-color:lightgray;
        border-radius:100%;
        margin-left:30px;
        >img{
            width:100%;
            height:100%;

        }
    `,
    Title:styled.p`
        margin:0px;
        font-family:Noto Sans KR;
        font-size:18px;
        margin-left:20px;
        font-weight:500;
    `,
    IconWrapper:styled.div`
        display:flex;
        flex-direction:row;
        align-items:center;
        margin-right:30px;
        >#arrow{
            transform:${props=>!props.toggle?'rotate(90deg)':'rotate(-90deg)'};
        }

    `,

}