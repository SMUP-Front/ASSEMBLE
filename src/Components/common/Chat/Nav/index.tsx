import Block from "./Block";
import Search from "./Search";
import { S } from "./style";

function Nav(){

    return(
        <>
            <S.TotalWrapper>
                <S.HeadWrapper>
                    <S.Title>
                        채팅
                    </S.Title>
                    <Search />
                </S.HeadWrapper>
                <S.BodyWrapper>
                    <S.BlockWrapper>
                        <Block focused={true} />
                        <Block />
                        <Block />
                        <Block />
                        <Block />
                        <Block />
                        <Block />
                        <Block />
                        <Block />
                        <Block />
                    </S.BlockWrapper>
                </S.BodyWrapper>
                <S.Footer />
            </S.TotalWrapper>
        </>
    )
}

export default Nav;