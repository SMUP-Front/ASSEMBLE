import { S } from "./style";
import SEARCH from '../../../../../Assets/image/Chat/search.svg'

function Search(){


    return(
        <>
            <S.TotalWrapper>
                <img src={SEARCH} alt="" />
                <S.Input placeholder="search" />
            </S.TotalWrapper>
        </>
    )
}

export default Search;