import React from "react";
import TRUE from '../../../../Assets/image/Default/alarm-true.svg'
import FALSE from '../../../../Assets/image/Default/alarm-false.svg'
import { S } from "./style";

type props = {
    exist?:boolean
}

function Alarm({exist}:props){

    return(
        <>
            <S.Icon src={exist?TRUE:FALSE} />
        </>
    )
}

export default Alarm;
