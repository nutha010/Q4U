import React from 'react';
import StoreCard from "./StoreCard";
import {Container, Col, Row, Jumbotron, Button, ButtonGroup, Card, InputGroup, FormControl} from "react-bootstrap";
import './StoreSearch.css'

const stores = [
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
    ]

const getLocation = () => {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(processLocation, locationError);
    } else {
        console.error("Geolocation is not supported by this browser.");
    }
};

const processLocation = (pos) => {
    console.log([pos.coords.latitude, pos.coords.longitude]);
};

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

export default function StoreSearch() {
    return (
        <>
            <Jumbotron fluid className="search-header">
                <Container className="search-header-container">
                    <h1>Find a participating store near you.</h1>
                    <p>Start by entering your location below.</p>
                    {/*<span className="search-box">*/}
                    {/*    <input*/}
                    {/*        type="text"*/}
                    {/*        placeholder="Enter your address to find stores near you."*/}
                    {/*    />*/}
                    {/*</span>*/}
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
                            aria-describedby="basic-addon1" />
                        <InputGroup.Append>
                            <Button variant="outline-primary">&rarr;</Button>
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
                        {stores.map(store =>
                            <StoreCard
                                key={store.name + "_" + store.address}
                                name={store.name}
                                address={store.address}
                                hours={store.hours}
                                distance={store.distance}
                            />
                        )}
                    </Col>
                </Row>
            </Container>
        </>
    )
}
