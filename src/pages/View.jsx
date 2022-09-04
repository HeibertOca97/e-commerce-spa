import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { addProductToCart } from '../features/carts/cartSlice';
import { getById } from '../features/products/productSlice';
import { useSelector, useDispatch } from 'react-redux';
import { ContainerStyled } from '../styledComponent.js';
import styled from 'styled-components';
import { AiOutlinePlus, AiOutlineMinus } from 'react-icons/ai';
import { MdOutlineAddShoppingCart } from 'react-icons/md';
import { BsCurrencyExchange } from 'react-icons/bs';
import {FlashMessage} from '../components/FlashMessage';


const Container = styled(ContainerStyled)`
    @media screen and (min-width: 768px) {
        display: flex;
        align-items: center;
        justify-content: center;
    }
`;

const SectionProductStyled = styled.section`
    width: 95%;
    margin: 25px auto;

    picture{
        display: block;
        max-width: 550px;
        margin: auto;
        img{
            width: 100%;
            height: 100%;
            display:block;
        }
    }

    @media screen and (min-width: 768px) {
        width: 50%;
        margin: 0; 
    }
`;

const SectionDetailStyled = styled.section`
    width: 95%;
    margin: 25px auto;
    
    h3{
        font-size: calc(var(--size) + 0.6em);
    }
    
    p{
        margin: 10px 0;
    }

    &>div{
        margin: 25px auto;
        
        &>.text-price{
            font-size: calc(var(--size) + 1.5em);
            font-weight: bold;
            //color: var(--color-1);
        }
    }  

    .section--product-buttons{ 
        &>div>span{
            display:block;
            text-align: center;
            padding: 10px 15px;
            font-size: calc(var(--size) + .2em);
            font-weight: bold;
        }

        &>div{
            display: grid;
            grid-template-columns: 1fr 1fr 1fr;
            margin: 10px 0;
        }
        
        @media screen and (min-width: 768px) {
            margin: 15px auto;
            display: flex;
            align-items: center;
            justify-content: space-between;
            gap: 4%;

            &>div{
                width: 50%;
                margin: 0;
            }
        }
    }

    .section--product-exchange{ 
        details>summary{
            padding: 10px 0;
            color: var(--color-1);
            font-weight: bold;
            cursor: pointer;
        }
    }

    @media screen and (min-width: 768px) {
        width: 50%;
        margin: 0;
        h3{
            font-size: calc(var(--size) + 0.8em);
        }
        &>div{
            margin: 25px auto;
            width: 95%;
        } 
    }
`;

const ButtonStyled = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    width: 100%;

    padding: 10px 0px;
    text-align: center;
    text-transform: uppercase;
    
    font-weight: bold;
    font-size: calc(var(--size) + .1em);
    
    background-color: var(--color-1);
    color: #fff;
    border: 2px solid transparent;
    transition: all 250ms linear;

    ${(props) => {
        if(props.hover){
            return `
            &:hover {
                background-color: #fff;
                border: 2px solid var(--color-1);
                color: var(--color-1)
            }
            `;
        }
    }}
`;

const TagStyled = styled.span`
    display: block;
    color: var(--color-1);
    font-weight: bold;
    text-transform: uppercase;
    margin-right: 5px;
    font-size calc(var(--size) - .4em);
    
    @media screen and (min-width: 768px) {
        font-size calc(var(--size) - .3em);
    }

`;

const LabelStyled = styled.label`
    display: block;
    background-color: ${(props) => props.color ? props.color : 'transparent'};
    width: 40px;
    height: 40px;
    border-radius: 50%;
    margin: 0 5px;
    border: 5px solid #ccc;
    cursor: pointer;
    &:hover{
        border: 5px solid #5e77a5;
    } 
`;

const BoxFlex = styled.p`
    display: flex;
    align-items: center;
    justify-content: left;

    ${(props) => {
        if(props.isset){
        return `
            input[type=radio]{
                display: none;
                &:checked + label{
                    border: 5px solid #5e77a5;
                }
            }`; 
        }
    }}
`;

export default function View(){ 
    const product = useSelector(state => state.products.getFinded);
    const dispatch = useDispatch();
    const { id } = useParams();
    const [qty, setQty] = useState(1);
    const [alertElement, setAlertElement] = useState('');

    const addCartToProduct = () => {
        let createdAt = new Date().getTime();
        let newProduct = {...product, quantity: qty, createdAt};
        dispatch(addProductToCart(newProduct));
        createAlert("You have added a new product");
    }

    const createAlert = (message) => {
        setAlertElement(<FlashMessage message={message} />);
        setTimeout(() => setAlertElement(''), 3000);
    }

    const showCategories = () => {
        try{
            return product.categories.map((item, index) => (<TagStyled key={index}>{item}</TagStyled>));
        }catch(err){

        }
    };

    const showColors = () => {
        try{
            return (product.color.map((item, index) => (<span key={index}><input id={`color${index}`} type="radio" name="colors" /><LabelStyled htmlFor={`color${index}`} color={item}> 
            </LabelStyled></span>)));
        }catch(err){

        }
    };

    useEffect(() => {
        dispatch(getById({ id }));
    }, [id, product, dispatch]);

    return (<>
    {alertElement}
    <Container>
        <SectionProductStyled>
            <picture><img src={product.image} alt={product.title} /></picture>
        </SectionProductStyled>
        <SectionDetailStyled>
            <div>
                <BoxFlex>{ showCategories() }</BoxFlex>
                <h3>{product.title}</h3>
                <p dangerouslySetInnerHTML={{__html: product.description}} />
                <p className="text-price">${product.price}</p>
                <BoxFlex isset>{ showColors() }</BoxFlex>
            </div>
            <div className="section--product-buttons">
                <div> 
                    <ButtonStyled
                        onClick={() => setQty((prevState) => prevState + 1)}
                    >
                        <AiOutlinePlus/>
                    </ButtonStyled>
                    <span>{qty}</span>
                    <ButtonStyled
                        onClick={() => qty > 1 && setQty((prevState) => prevState - 1)}
                    >
                        <AiOutlineMinus />
                    </ButtonStyled>
                </div>
                <ButtonStyled
                    hover
                    onClick={()=> addCartToProduct()}
                > <MdOutlineAddShoppingCart /> <span>Add to cart</span></ButtonStyled>
            </div>
            <div className="section--product-exchange">
                <details>
                    <summary><BsCurrencyExchange/> Returns and exchange</summary>
                    <p>
                        All products from the moment of purchase, the dispatch of your product can take up to 2 months depending on the size of the waiting list, however we expect that on average it will take us less than 1 month to dispatch your product. You will receive an email when your product is shipped.</p>
                </details>
            </div>
        </SectionDetailStyled>
    </ Container></>);
}

