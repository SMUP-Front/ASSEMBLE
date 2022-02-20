import { useState } from "react"
import Aside from "./AD"
import Nav from "./Nav"
import Section from "./Section"
import { S } from "./style"

function Chat(){
    const [toggle, setToggle] = useState(false);
    const props = {
        toggle:toggle,
        setToggle:setToggle
    }
    return(
        <S.TotalWrapper>
            <Nav />
            <Section props={props} />
            {
                toggle?
                <Aside />
                :<></>
            }
        </S.TotalWrapper>
    )
}

export default Chat