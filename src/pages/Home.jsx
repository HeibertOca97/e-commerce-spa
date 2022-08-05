import {NavBar} from '../components/NavBar';
import { FinderBar } from '../components/FinderBar';
import {ProductCard} from '../features/components/ProductCard/ProductCard'

function Home(){ 

    return (<>
        <NavBar/>
        <FinderBar />
        <ProductCard />
    </>);
}

export default Home;
