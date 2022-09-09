import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { addProductToCart } from '../features/carts/cartSlice';
import { getById } from '../features/products/productSlice';
import { useSelector, useDispatch } from 'react-redux';
import { ContainerStyled, ButtonStyled } from '../styledComponent.js';
import styled from 'styled-components';
import { AiOutlinePlus, AiOutlineMinus } from 'react-icons/ai';
import { MdOutlineAddShoppingCart } from 'react-icons/md';
import { BsCurrencyExchange } from 'react-icons/bs';
import { FlashMessage } from '../components/FlashMessage';
import { useCounter } from '../assets/helpers/counter.hook'


const Container = styled(ContainerStyled)`
    margin-top: 50px;
    margin-bottom: 50px;
    @media screen and (min-width: 768px) {
        display: flex;
        align-items: flex-start;
        justify-content: center;
    }
`;

const SectionProductStyled = styled.section`
    width: 95%;
    margin: 25px auto;

    picture{
        position: sticky; 
        top: 0;
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
        height: 100vh;
        margin: 0; 
    }
`;

const SectionDetailStyled = styled.section`
    width: 95%;
    margin: 25px auto;  

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
            margin: 0px auto;
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
            color: var(--color-3);
            font-weight: bold;
            cursor: pointer;
            text-transform: uppercase;
            font-size: calc(var(--size) - .2em);
        }
    }

    @media screen and (min-width: 768px) {
        width: 50%;
        margin: 0; 
    }
`;

const BoxGroup = styled.div`
    margin: 25px auto;
    p{
        margin: 5px 0;
    }      

    &>.text-price{
        font-size: calc(var(--size) + 1.5em);
        font-weight: bold;
    }

    @media screen and (min-width: 768px) {
        margin: 25px auto;
        width: 95%;
    }
`;

const TagStyled = styled.span`
    display: block;
    color: var(--color-1);
    font-weight: bold;
    text-transform: uppercase;
    margin-right: 5px;
    font-size calc(var(--size) - .2em);
    
    @media screen and (min-width: 768px) {
        font-size calc(var(--size) - .3em);
    }

`;

const LabelStyled = styled.label`
    display: block;
    cursor: pointer;
    
    ${(props) => {
        if(props.color){
        return `
            background-color: ${props.color ? props.color : 'transparent'};
            width: 40px;
            height: 40px;
            border-radius: 50%;
            margin: 0 5px;
            border: 5px solid #ccc;
        `;
        }
        return `
            margin: 5px;
            border-radius: 5px;
            padding: 5px 8px;
            border: 5px solid #ccc;
            background-color: #ccc;

        `;
    }}
    
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

const TitleStyled = styled.h3`
    font-size: calc(var(--size) + .6em);
    margin: 5px 0 15px 0; 
    @media screen and (min-width: 768px) {
            font-size: calc(var(--size) + 0.8em);
    }
`;

const SubtitleStyled = styled.h5`
    font-size: calc(var(--size) - .2em);
    color: var(--color-3);
    margin: 15px 0px 10px 0px;
    text-transform: uppercase;
`;

export default function View(){ 
    const product = useSelector(state => state.products.getFinded);
    const dispatch = useDispatch();
    const { id } = useParams();
    const { increment, decrement, reset, count } = useCounter();
    const [alertElement, setAlertElement] = useState('');
    const [color, setColor] = useState('');
    const [size, setSize] = useState('');

    const addCartToProduct = () => {
        let createdAt = new Date().getTime();
        let newProduct = {...product, color, size, quantity: count, createdAt};
        dispatch(addProductToCart(newProduct));
        createAlert("You have added a new product");
        reset();
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
    
    const showSize = () => {
        try{
            return (product.size.map((item, index) => (
                <span key={index}>
                    <input 
                        onChange={(ev) => setSize(ev.target.value)} 
                        id={`size${index}`} 
                        type="radio" 
                        name="sizes" 
                        value={item}
                        checked={ size === item ? true : ''  }
                    />
                    <LabelStyled htmlFor={`size${index}`} > {item} </LabelStyled>
                </span>
            )));
        }catch(err){

        }
    };

    const showColors = () => {
        try{
            return (product.color.map((item, index) => (
                <span key={index}>
                    <input 
                        onChange={(ev) => setColor(ev.target.value)} 
                        id={`color${index}`} 
                        type="radio" 
                        name="colors" 
                        value={item}
                        checked={ color === item ? true : ''  }
                    />
                    <LabelStyled htmlFor={`color${index}`} color={item}> </LabelStyled>
                </span>
            )));
        }catch(err){

        }
    }; 

    useEffect(() => {
        dispatch(getById({ id }));
        try {
            setColor(product.color[0]);
            setSize(product.size[0]);
        }catch(err){
        }

    }, [id, product, dispatch]);

    return (<>
    {alertElement}
    <Container>
        <SectionProductStyled>
            <picture><img src={product.image} alt={product.title} /></picture>
        </SectionProductStyled>
        <SectionDetailStyled>
            <BoxGroup>
                <BoxFlex>{ showCategories() }</BoxFlex>
                <TitleStyled>{product.title}</TitleStyled>
                <div dangerouslySetInnerHTML={{__html: product.description}} />
            </BoxGroup>
            <BoxGroup>
                <SubtitleStyled>Size: {size}</SubtitleStyled>
                <BoxFlex isset>{ showSize() }</BoxFlex>
            </BoxGroup>
            <BoxGroup>
                <SubtitleStyled>Color: {color}</SubtitleStyled>
                <BoxFlex isset>{ showColors() }</BoxFlex>
            </BoxGroup>
            <BoxGroup>
                <SubtitleStyled>Price:</SubtitleStyled>
                <p className="text-price">${product.price}</p>
            </BoxGroup>
            <BoxGroup >
                <SubtitleStyled>Quantity:</SubtitleStyled>
                <div className="section--product-buttons">
                    <div> 
                        <ButtonStyled onClick={increment}>
                            <AiOutlinePlus/>
                        </ButtonStyled>
                        <span>{count}</span>
                        <ButtonStyled onClick={decrement}>
                            <AiOutlineMinus />
                        </ButtonStyled>
                    </div>
                    <ButtonStyled
                        hover
                        radius="5px"
                        onClick={()=> addCartToProduct()}
                    > 
                        <MdOutlineAddShoppingCart /> <span>Add to cart</span>
                    </ButtonStyled>
                </div>
                
            </BoxGroup>
            <BoxGroup className="section--product-exchange">
                <details>
                    <summary><BsCurrencyExchange/> Returns and exchange</summary>
                    <p>
                        All products from the moment of purchase, the dispatch of your product can take up to 2 months depending on the size of the waiting list, however we expect that on average it will take us less than 1 month to dispatch your product. You will receive an email when your product is shipped.</p>
                </details>
            </BoxGroup>
        </SectionDetailStyled>
    </ Container></>);
}

