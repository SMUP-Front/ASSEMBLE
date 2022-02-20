import styled from 'styled-components'

export const S ={
    TotalWrapper:styled.div`
        width:100%;
        height:60px;
        box-sizing:border-box;
        display:flex;
        flex-direction:row;
        align-items:center;
        justify-content:center;

    `,
    MoreButton:styled.img`
        transform:${props=>props.toggle?'rotate(45deg)':''}
    `,
    MessageInputWrapper:styled.div`
        width:500px;
        height:30px;
        background-color:#EDEDED;
        margin:0 15px 0 15px;
        border-radius:50px;
        display:flex;
        align-items:center;
        justify-content:center;
    `,
    MessageInput:styled.input`
        height:100%;
        width:94%;
        border:none;
        outline:none;
        background-color:rgb(0,0,0,0);
        :focus::placeholder{
            opacity:0;
        }
    `,
    SendButton:styled.img`

    `,
    AbsoluteFocus:styled.div`
        border:1px solid red;
        align-self:flex-start;
        justify-self:flex-start;
    `,
}