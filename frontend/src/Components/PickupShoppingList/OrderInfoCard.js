import React from 'react';
import './PickupShoppingList.css';
import {Card, Row, Container, Col} from 'react-bootstrap';

export default function OrderInfoCard(props) {
    return(
        <Card>
            <Card.Body>
                <Container>
                    <Row>
                        <Col sm={6} xs={12} className="order-info-card-item">
                            <h5><b>Pickup Store</b></h5>
                            {props.store.address}
                        </Col>
                        <Col sm={6} xs={12} className="order-info-card-item">
                            <h5><b>Your Timeslo</b>t</h5>
                            {props.timeslot}
                        </Col>
                    </Row>
                </Container>
            </Card.Body>

        </Card>
    );
}