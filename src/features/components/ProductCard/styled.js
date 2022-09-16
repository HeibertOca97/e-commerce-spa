import styled from 'styled-components'
import { MdOutlineSearch } from 'react-icons/md'

const Card = styled.div`
    margin: 10px;
    border-radius: 5px;
    box-shadow: 0px 2px 10px #bbb;
    width: 100%;
    overflow: hidden;
    transition: all 250ms ease-in;
    position: relative;

    &:hover{
        box-shadow: 0px 2px 10px #ddd;
        
        .product__card-action{
            transform: scale(1);
        }
    }

    & > picture{
        width: 100%;
        display: block;
        overflow: hidden;

        img{
            width: 100%;
            height: 100%;
            display: block;
            object-fit: cover;
        }
    }

    & > .product__card-body{
        display: grid;
        grid-template-columns: 1fr auto;

        .product__card-title{
            padding: 5px;
        }

        .product__card-price{
            text-align: center;
            font-size: 2rem;
            padding: 5px;
        }
    }

    & > .product__card-action{
        position: absolute;
        top: 0;
        left: 0;
        background-color: rgba(255, 255, 255, .6);
        width: 100%;
        height: 100%;

        display: flex;
        flex-wrap: wrap;
        align-items: center;
        justify-content: center;

        transform: scale(0);
        transition: all 250ms ease-in;
    }
    
    @media screen and (min-width:600px) {
        max-width: 280px;
        max-height: 280px;

        & > picture{
           height: 224px; 
        }
    }
`;

const iconStyle = `
    font-size: 3.5em;
    color: #131416;
    box-shadow: 0px 2px 10px #bbb;
    background-color: #fff;
    padding: 5px 8px;
    border-radius: 50%;
    margin: 0 10px;             
`;

const SearchIconStyled = styled(MdOutlineSearch)`${iconStyle}`;

export {
    Card,
    SearchIconStyled
}
