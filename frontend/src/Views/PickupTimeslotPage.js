import React from 'react';
import {Link} from '@reach/router'
import SEO from "../Components/SEO";
import PickupTimeslot from "../Components/PickupTimeslot/PickupTimeslot";

export default function PickupTimeslotPage () {
    return (
        <>
            <SEO
                title="Pick Up User Timeslot Selection"
                desc="Select a time for pickup"
            />
            <PickupTimeslot />
            <Link to="/">To Home</Link>
        </>
    );
}