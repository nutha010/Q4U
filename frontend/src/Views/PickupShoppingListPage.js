import React from 'react';
import {Link} from '@reach/router'
import SEO from "../Components/SEO";
import PickupShoppingList from "../Components/PickupShoppingList/PickupShoppingList";

export default function PickupShoppingListPage () {
    return (
        <>
            <SEO
                title="Pick Up User Shopping List"
                desc="Enter items for your shopping list"
            />
            <PickupShoppingList />
            <Link to="/">To Home</Link>
        </>
    );
}