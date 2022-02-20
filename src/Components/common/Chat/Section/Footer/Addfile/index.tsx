import { S } from "./style";
import FILES from '../../../../../../Assets/image/Chat/files.svg'
import IMAGES from '../../../../../../Assets/image/Chat/images.svg'

function Addfile(){


    return(
        <S.TotalWrapper>
            <img src={FILES} alt="" />
            <img src={IMAGES} alt="" />
        </S.TotalWrapper>
    )
}

export default Addfile;