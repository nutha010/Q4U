import React from 'react';
import {Link} from '@reach/router'
import SEO from "../Components/SEO";

export default function Error () {
    return (
        <>
            <SEO
                title="Error 404"
            />

            <h1>Error 404</h1>
            <h2>Route not found</h2>
            <Link to="/">Home</Link>
            <br />
            <Link to="/2">To Page 2</Link>
        </>
    );
}