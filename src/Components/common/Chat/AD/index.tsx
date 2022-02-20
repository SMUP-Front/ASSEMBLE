import Member from "./Member";
import { S } from "./style";
import Toggle from "./Toggle";


function Aside(){


    return(
        <S.TotalWrapper>
            <Toggle title="채팅방 멤버" children={
                <>
                    <Member type={0} name="테스트" admin={true} />
                    
                </>
            } />
            <Toggle title="별명 변경" children={
                <>
                    <Member type={1} name="테스트"/>
                </>
            } />
            <Toggle title="공유된 자료" />
        </S.TotalWrapper>
    )
}

export default Aside;