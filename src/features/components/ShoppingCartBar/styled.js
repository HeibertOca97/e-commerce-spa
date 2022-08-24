import { FaTrashAlt } from 'react-icons/fa';
import {IoMdClose} from 'react-icons/io';
import styled from "styled-components";

const ContainerBar = styled.div` 
    ${(props) => props.zindex && `z-index: ${props.zindex};`};
    position: fixed;
    top: 0;
    right: 0;
    height: 100%;
    width: 100%;
    max-width: 450px;
    background-color: #fff;
    transition: all 200ms;
    transform: ${(props) => props.status ? 'translateX(0%)' : 'translateX(100%)'};
  `;

const CardHeader = styled.div`
    padding: 0 10px;
    color: #fff;
    background-color: #1B366A;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;
    font-weight: bold;
    font-size: 1.5rem;
    height: ${(props) => props.height > 0 ? props.height+'px' : 'auto'};

`;

const CardBody = styled.div`
    overflow: auto;
    height: 100%;
    padding: 10px;
`;

const CardItem = styled.div`
    box-shadow: 0px 5px 10px #ddd;
    display: grid;
    grid-template-columns: 150px 1fr;
    margin: 5px 0;

    picture{
        display: block;
        width: 100%;
        height: 150px;
        
        img{
            display: block;
            width: 100%;
            height: 100%;
            object-fit: cover;
        }
    }
    
    &>div{
        display: grid;
        grid-template-columns: 1fr auto;
        h4{
            font-size: 1.3rem;
            padding: 10px 5px;
        }
        p{
            color: #aaa;
            margin: 5px;
        }
    }
    &:nth-last-child(1){
        margin-bottom: 107px;
    }
`;

const CardAction = styled.div`
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    background-color: #1B366A;

    display: grid;
    grid-template-columns: 150px 1fr;
    line-height: 2.2em;
    padding: 0 10px 0 0;

    //button{
        //text-transform: uppercase;
        //font-weight: bold;
        //cursor: pointer;
        //border: none;
        //color: #fff;
        //background-color: #011F5D;
        //transition: all 250ms linear;
        //&:hover{
            //background-color: #fff;
            //color: #000;
        //}
    //}
    p{
        text-transform: uppercase;
        color: #fff;
        font-weight: bold;
        text-align: right;
    }
`;

const ButtonGoCart = styled.button`
    text-transform: uppercase;
    font-weight: bold;
    cursor: pointer;
    border: none;
    color: #fff;
    background-color: #011F5D;
    transition: all 250ms linear;
    &:hover{
        background-color: #fff;
        color: #000;
    }
`; 

const iconStyle = `
    color: #fff;
`;

const iconStyle2 = `
    color: #000;
    font-size: 2.5rem;
    padding: 10px;
    margin: 5px;
    border-radius: 50%;
box-shadow: 0px 2px 10px #ccc;
`;

const CloseIconStyled = styled(IoMdClose)`${iconStyle}`;
const DeleteIconStyled = styled(FaTrashAlt)`${iconStyle2}`;

export {
    ContainerBar,
    CardHeader,
    CardBody,
    CardItem,
    CardAction,
    CloseIconStyled,
    DeleteIconStyled,
    ButtonGoCart
}
