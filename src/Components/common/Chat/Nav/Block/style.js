import styled from 'styled-components'

export const S = {
    TotalWrapper:styled.div`
        border:1px solid ${props=>props.focused?'#AE6FFF':'#E2A4FF'};
        border-radius:10px;
        width:95%;
        height:70px;
        background-color:${props=>props.focused?'#AE6FFF':'white'};
        margin-bottom:3.5px;
        margin-top:3.5px;
        display:flex;
        flex-direction:row;
        align-items:center;
        
    `,

    ImgWrapper:styled.div`
        width:40px;
        height:40px;
        border-radius:100%;
        margin-left:10px;
        background-color:lightgray;
        >img{
            width:100%;
            height:100%;

        }
        margin:10px 10px 10px 10px;
    `,
    TextWrapper:styled.div`
        display:flex;
        flex-direction:column;
        >p{
            margin:0px;
            font-family:Noto Sans KR;
        }
        
    `,
    Title:styled.p`
        color:black;
    `,
    Detail:styled.p`
        color:${props=>props.focused?'white':'#898686'};
        font-size:12px;
    
    `,
}