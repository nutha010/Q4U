import React from 'react';
import {Card, Row, Container, Col, Button} from 'react-bootstrap';
import {Link} from '@reach/router';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";
import './PickupTimeslot.css';

library.add(faMapMarkerAlt);

export default function StoreInfoCard(props) {
    return(
        <Card className="store-info-card">
            <Card.Title className="store-info-header"><h3>Store Pickup</h3></Card.Title>
            <Card.Body>
                <Container>
                    <Row>
                        <Col sm={1} xs={3} className="store-info-card-item">
                            <FontAwesomeIcon icon="map-marker-alt" size="3x" />
                        </Col>
                        <Col sm={5} xs={9} className="store-info-card-item">
                            <h5><b>{props.store.name}</b></h5>
                            <p>{props.store.address}</p>
                        </Col>
                        <Col sm={{span: 3, offset: 3}} xs={{span: 10, offset: 1}}>
                            <Button className="change-button">
                                <Link to="/pickup-timeslot" className="change-button-link">Change Store</Link>
                            </Button>
                        </Col>
                    </Row>
                </Container>
            </Card.Body>

        </Card>
    );
}