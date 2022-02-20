import { useState } from "react";
import Body from "./Body";
import Footer from "./Footer";
import Header from "./Header";
import { S } from "./style";

type props ={
    props:{
        toggle:any,
        setToggle:any
    }
}

function Section({props}:props){
    const [FileToggle, setFileToggle] = useState(false);
    

    return(
        <S.TotalWrapper>
            <Header props={props} />
            <Body filetoggle={FileToggle} />
            <Footer filetoggle={FileToggle} setFileToggle={setFileToggle} />
        </S.TotalWrapper>
    )
}

export default Section;