import { useNavigate } from 'react-router-dom';

export const useRedirect = () => {
    const URL_PATH = "/e-commerce-spa";
    const navigate = useNavigate();

    const redirectTo = (url) => {
        if(!url){
            navigate(URL_PATH);
            return;
        }
        navigate(`${URL_PATH}/${url}`);
    }

    const nextTo = () => {
        navigate(1);
    }

    const backTo = () => {
        navigate(-1);
    }

    return {
        redirectTo,
        nextTo,
        backTo,
        URL_PATH
    };
}


