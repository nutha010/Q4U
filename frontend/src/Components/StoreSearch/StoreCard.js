import React from "react";
import { Card, Button, Badge } from "react-bootstrap";

const getOpenString = (hours) => {
    const currentHour = new Date().getHours();
    if (currentHour < hours[0] || currentHour > hours[1]) {
        return [false, ("Opens at " + hours[0] + ":00")];
    }
    else {
        return [true, ("Open until " + hours[1] + ":00")];
    }
};

export default function StoreCard (props) {

    const openStatus = getOpenString(props.hours);

    return (
        <Card style={{marginBottom: "0.5em"}}>
            <Card.Body>
                <div className="float-left">
                    <Card.Title>{`${props.name} (${props.distance} mi)`}</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">{props.address}</Card.Subtitle>
                    <Card.Text style={{fontSize: "18px"}}><Badge variant={openStatus[0] ? "success" : "danger" }>{openStatus[1]}</Badge></Card.Text>
                </div>
                <Button className="float-right" variant="primary">Choose This Store &rarr;</Button>
            </Card.Body>
        </Card>
    )
}