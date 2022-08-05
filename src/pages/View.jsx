import {NavBar} from '../components/NavBar';
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

function View(){ 
    const { id } = useParams();
    const [paramState, setParamState] = useState(false);
    console.log(id);

    useEffect(() => {
        id && setParamState(true);
    }, [])

    return (<>
        <NavBar/>
        {
            id ? <p>Param has a ID number: id</p> : <p>Param not found</p>
        }
    </>);
}

export default View;
