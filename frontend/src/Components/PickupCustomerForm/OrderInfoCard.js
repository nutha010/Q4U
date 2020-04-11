import React from 'react';
import './PickupCustomerForm.css';
import GroceryList from './GroceryList';
import {Card, Row, Container, Col} from 'react-bootstrap';
import {Label} from 'reactstrap';

export default function OrderInfoCard(props) {
    return(
        <Card>
            <Card.Body>
                <Container>
                    <Row>
                        <Col sm={6}>
                            <h5><b>Pickup Store</b></h5>
                        </Col>
                        <Col sm={6}>
                            <h5><b>Your Timeslo</b>t</h5>
                        </Col>
                    </Row>
                    <Row>

                        <Col sm={6}>
                            {props.store.address}
                        </Col>
                        <Col sm={6}>
                            {props.timeslot}
                        </Col>
                    </Row>
                </Container>
            </Card.Body>

        </Card>
    );
}