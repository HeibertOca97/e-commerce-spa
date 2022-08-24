import { ContainerStyled } from '../styledComponent.js'
import styled from 'styled-components';

const image = "https://res.cloudinary.com/heibertoca97/image/upload/v1659720522/sites/404-op1_n8jyde.jpg";
const Image = styled.img`
    width: 90%;
    max-width: 700px;
    display: block;
    margin: 15px auto;
`;

function NotFound(){ 

    return (<>
        <ContainerStyled>
            <Image src={image} width="700px" alt="Couldn't load image" />
        </ContainerStyled>
    </>);
}

export default NotFound;
