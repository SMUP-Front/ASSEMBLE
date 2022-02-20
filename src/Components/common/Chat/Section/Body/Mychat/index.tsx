import { S } from "./style";

type props = {
    value?:string
}

function Mychat({value}:props){


    return(
        <S.TotalWrapper>
            <p>{value}</p>
        </S.TotalWrapper>
    )
}

export default Mychat;