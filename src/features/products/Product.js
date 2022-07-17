import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { getProducts } from './productSlice';
import { FailedResource } from '../../components/FailedResource'
import { NoResource } from '../../components/NoResource'

function Product(){
    const dispatch = useDispatch();
    const [success, setSuccess] = useState(false);
    const [products, setProducts] = useState([]);
    const [error, setError] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');

    useEffect(() => {
        async function getAll(){
            try{
                const {success, data} = await dispatch(getProducts()).unwrap()
                setSuccess(success);
                setProducts(data);
            }catch(err){
                setError(true);
                setErrorMessage("There's a problem displaying this resource");
                console.clear()
            }
            
        }
        getAll();
    },[]);

    const layoutProduct = () => {
        if(error){
            return <FailedResource message={errorMessage} />
        }
        if (!success){
            return <NoResource message="Resource not found"></NoResource>
        }

        return (
            <ul>
                {products.map((product, index) => (
                    <li key={index}>{product.title}</li>
                ))}
            </ul>
        );
    }
    return (<>
        <h1>Products</h1>
        {layoutProduct()}
    </>);
}

export default Product;
