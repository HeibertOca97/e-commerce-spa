import React, { Suspense, lazy } from 'react';
import { FinderBar } from '../components/FinderBar';
import { NoResource } from '../components/NoResource';

function Home(){ 
    const ProductCard = lazy(() => import('../features/components/ProductCard'));

    return (<>
        <FinderBar margin="30px auto 40px auto"/>
        <Suspense fallback={<NoResource message="...LOADING" />}>
            <ProductCard/>
        </Suspense>
    </>);
}

export default Home;
