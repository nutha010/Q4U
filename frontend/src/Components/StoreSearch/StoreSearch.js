import React, {useState, useEffect} from 'react';
import StoreCard from "./StoreCard";
import {Link} from '@reach/router'
import {Container, Col, Row, Jumbotron, Button, ButtonGroup, Card, InputGroup, FormControl} from "react-bootstrap";
import './StoreSearch.css'

const DUMMY_DATA = [
    {
        name: "Super Market",
        address: "123 E Green St. Champaign, IL",
        hours: [9, 18],
        distance: 6
    },
    {
        name: "Local Grocer",
        address: "456 Testing Ave. Boston, MA",
        hours: [8, 16],
        distance: 11
    }
];
export default function StoreSearch() {

    /*
        Initialize 'stores' as a state value for storing a list of stores
     */
    const [stores, setStores] = useState([]);

    /*
        Set current list of stores to DUMMY_DATA value for frontend testing.

        TODO: Remove after integration with API
     */
    useEffect(() => {
        setStores(DUMMY_DATA);
    }, []);

    /*
        Get location via the HTML5 geolocation API
     */
    const getLocation = () => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(processLocation, locationError, { maximumAge: 15000, timeout: 15000, enableHighAccuracy: false});
        } else {
            console.error("Geolocation is not supported by this browser.");
        }
    };

    /*
        Passes an array of coordinates from the returned position object to the getStores() function
     */
    const processLocation = (pos) => {
        getStores([pos.coords.latitude, pos.coords.longitude]);
    };

    /*
        Catch errors for HTML geolocation

        TODO: Integrate Bootstrap errors for client-facing feedback (instead of console logging)
     */
    const locationError = (error) => {
        switch(error.code) {
            case error.PERMISSION_DENIED:
                console.error("User denied the request for Geolocation.");
                break;
            case error.POSITION_UNAVAILABLE:
                console.error("Location information is unavailable.");
                break;
            case error.TIMEOUT:
                console.error("The request to get user location timed out.");
                break;
            case error.UNKNOWN_ERROR:
                console.error("An unknown error occurred.");
                break;
            default:
                console.error("An unspecified error occured.");
        }
    };

    /*
        Receives an address as a string and uses an API to pass an array of latlong coordinates to getStores

        TODO: Integrate with a mapping API
     */
    const getLocationByAddress = (address) => {
        // Call for address to location (Google maps API?)
        getStores([0,0]);
    };

    /*
        Sets the list of stores received from backend/API given the received array of latlong coordinates

        TODO: Integrate with API, currently just logs to console
     */
    const getStores = (point) => {
        // Get stores near this address
        // setStores(RETURNED_STORES_FROM_API)
        console.log(point);
    };


    return (
        <>
            <Jumbotron fluid className="search-header">
                <Container className="search-header-container">
                    <h1>Find a participating store near you.</h1>
                    <p>Start by entering your location below.</p>
                    <InputGroup className="mb-3 search-box" size={"lg"}>
                        <InputGroup.Prepend>
                            <Button
                                variant="outline-primary"
                                onClick={() => getLocation()}
                            >
                                Use My Location
                            </Button>
                        </InputGroup.Prepend>
                        <FormControl
                            placeholder="Enter your address to find a participating store"
                            aria-label="Locate a store with address."
                        />
                        <InputGroup.Append>
                            <Button
                                variant="outline-primary"
                                onClick={() => getLocationByAddress()}
                            >
                                &rarr;
                            </Button>
                        </InputGroup.Append>
                    </InputGroup>
                </Container>
            </Jumbotron>
            <Container>
                <Row>
                    <Col lg={4} md={12}>
                        <Card>
                            <Card.Body>
                                <Card.Title>Filter</Card.Title>
                                <Card.Subtitle className="mt-2 mb-2 text-muted">Maximum Distance</Card.Subtitle>
                                <ButtonGroup aria-label="Maximum Distance">
                                    <Button variant="secondary">{"<"} 10 mi</Button>
                                    <Button variant="secondary">10 - 25 mi</Button>
                                    <Button variant="secondary">{">"} 25 mi</Button>
                                </ButtonGroup>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col lg={8} md={12}>
                        { stores.length > 0 ?
                            (stores.map(store =>
                            <StoreCard
                                key={store.name + "_" + store.address}
                                name={store.name}
                                address={store.address}
                                hours={store.hours}
                                distance={store.distance}
                            />))
                            :
                            (<p>
                                Sorry, There are no participating stores near you. <Link to={"/ask-a-store"}>Ask a store</Link> to participate in Q4U!
                            </p>)
                        }
                    </Col>
                </Row>
            </Container>
        </>
    )
}
