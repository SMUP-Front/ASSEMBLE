import { S } from "./style";
import ARROW from '../../../../../Assets/image/Chat/arrow.svg'

type props = {
    img?:any
    props:{
        toggle:any,
        setToggle:any
    }
}

function Header({img,props}:props){


    return(
        <>
            <S.TotalWrapper>
                <S.TitleWrapper>
                    <S.ImgWrapper>
                        {img?
                        <img src={img} alt="" />    
                    :<>
                    </>}
                    </S.ImgWrapper>
                    <S.Title>
                        제목
                    </S.Title>
                </S.TitleWrapper>
                <S.IconWrapper toggle={props.toggle}>
                    <img id="arrow" src={ARROW} alt="" onClick={()=>{
                        props.setToggle(!props.toggle);
                    }} />
                </S.IconWrapper>
            </S.TotalWrapper>
        </>
    )
}

export default Header