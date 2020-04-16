import React from 'react';
import {Link} from '@reach/router'
import SEO from "../Components/SEO";
import PickupUserInfo from "../Components/PickupUserInfo/PickupUserInfo";

export default function PickupUserInfoPage () {
    return (
        <>
            <SEO
                title="Pick Up User Info"
                desc="Optionally enter some information about your health."
            />
            <PickupUserInfo />
            <Link to="/">To Home</Link>
        </>
    );
}