import React from 'react';
import {Link} from '@reach/router'
import SEO from "../Components/SEO";

export default function Landing () {
    return (
        <>
            <SEO/>
            <h1>Landing page</h1>
            <Link to="/2">To Page 2</Link>
        </>
    );
}