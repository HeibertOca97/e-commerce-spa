import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getByCategory } from '../../../features/products/productSlice'
import { NoResource } from '../../../components/NoResource'
import { ContainerStyled } from '../../../styledComponent';
import { Card, SearchIconStyled } from './styled';
import { useRedirect } from '../../../assets/helpers/redirect.hook';

export default function ProductCard(){
    const { products, status, filters } = useSelector(state => state.products);
    const [success, setSuccess] = useState(false);
    const { redirectTo } = useRedirect();
    const dispatch = useDispatch();

    useEffect(() => { 
        setSuccess(status);
    }, [status]);
    
    useEffect(() => { 
        dispatch(getByCategory({
            category: "all",
        })); 
    }, [dispatch]);

    const layoutProduct = () => {
        if (!success){
            return <NoResource message="RESOURCE NOT FOUND" />
        }

        return filters.length < 1 ? products.map((product, index) => (
            <Card key={index}>
                <picture>
                    <img src={product.image} title={product.title} alt={`Couldn't not load image - ${product.title}`} />
                </picture>
                <div className="product__card-body">
                    <h3 className="product__card-title">{product.title}</h3>
                    <p className="product__card-price">${product.price} </p>
                </div>
                <div className="product__card-action">
                    <SearchIconStyled 
                    cursor="pointer"
                    onClick={()=>redirectTo(`view/detail=${product.id}`)}
                    />
                </div>
            </Card>
        )) : filters.map((product, index) => (
            <Card key={index}>
                <picture>
                    <img src={product.image} title={product.title} alt="Couldn't not load image" />
                </picture>
                <div className="product__card-body">
                    <h3 className="product__card-title">{product.title}</h3>
                    <p className="product__card-price">${product.price} </p>
                </div>
                <div className="product__card-action">
                    <SearchIconStyled 
                    cursor="pointer"
                    onClick={()=> redirectTo(`view/detail=${product.id}`)}
                    />
                </div>
            </Card>
        ));
    }

    return (
        <ContainerStyled flex="card">
        {layoutProduct()}

        </ContainerStyled>
    );
}

