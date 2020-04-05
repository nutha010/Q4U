import React from 'react';
import {Link} from '@reach/router'
import SEO from "../Components/SEO";

export default function Page2 () {
    return (
        <>
            <SEO
                title="Page 2"
                desc="This is the second page of the Q4U website!"
            />
            <h1>Page 2</h1>
            <Link to="/">To Home</Link>
        </>
    );
}