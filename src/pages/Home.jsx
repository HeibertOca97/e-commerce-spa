import {NavBar} from '../components/NavBar';
import { FinderBar } from '../components/FinderBar';
import Product from '../features/products/Product'

function Home(){ 

    return (<>
        <NavBar/>
        <FinderBar />
        <Product />
    </>);
}

export default Home;
