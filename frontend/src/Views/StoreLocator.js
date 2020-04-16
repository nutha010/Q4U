import React from 'react';
import {Link} from '@reach/router'
import SEO from "../Components/SEO";
import StoreSearch from "../Components/StoreSearch/StoreSearch";

export default function StoreLocator () {
    return (
        <>
            <SEO
                title="Store Locator"
                desc="Find a Q4U participant store near you."
            />
            <StoreSearch />
            <Link to="/">To Home</Link>
        </>
    );
}