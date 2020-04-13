import React from 'react';
import {Container, Row, Col, Button} from 'react-bootstrap';
import StoreInfoCard from './StoreInfoCard';
import Timeslots from './Timeslots';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {Link} from '@reach/router';
import './PickupTimeslot.css';

const exampleStore = {
    name: "Super Market",
    address: "123 E Green St. Champaign, IL",
    hours: [9, 18],
    distance: 6
};

class PickupTimeslot extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            selectedTimeslot: null
        };
        this.getSelectedTimeslot = this.getSelectedTimeslot.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }


    getSelectedTimeslot(timeslot){
        this.setState({
            selectedTimeslot: timeslot.timeInMinutes,
        });
    }

    getAvailableHours(storeId) {
        // Todo: Make API call to the backend to retrieve available timeslots meaning:
        // 1. timeslot is during the store's opening hours
        // 2. timeslot is NOT during any special hours (i.e. senior hours)
        // 3. ONLY FOR REGULAR (NOT PICKUP) CUSTOMER: timeslot does not have full capacity (based on our signups)
        return [[720, 840], [975, 1080]];
    }

    handleSubmit(){
        console.log("Timeslot: ");
        console.log(this.state.selectedTimeslot);
    }

    render(){
        return(
            <Container className="container-content">
                <Row>
                    <Col xs={12}>
                        <StoreInfoCard store={exampleStore} />
                    </Col>
                </Row>
                <Row className="row-content">
                    <Col sm={1} xs={3}>
                        <FontAwesomeIcon icon="clock" size="3x" />
                    </Col>
                    <Col sm={11} xs={9} className="row-content-text">
                        <h4>Choose you pickup time</h4>
                        <h5><i>*Pickup slot must be at least one hour ahead of the current time.</i></h5>
                    </Col>
                </Row>
                <Row className="row-content">
                    <Col xs={12}>
                        <h4><b>Friday March 17th</b></h4> 
                        {/* TODO: use the timezone of the store selected on the previous page and the date returned by new Date function, standardize both and calculate the final date */}
                    </Col>
                </Row>
                <Row className="row-content">
                    <Col sm={7} xs={12}>
                       <Timeslots 
                            availableTimes={this.getAvailableHours(exampleStore.name+"_"+exampleStore.address)}
                            getSelectedTimeslot={this.getSelectedTimeslot}
                        />
                    </Col>
                </Row>
                <Row className="next-button-row">
                    <Button className="next-button" onClick={this.handleSubmit}>
                        <Link to="/pickup-shopping-list" className="next-button-link">Next</Link>
                    </Button>
                </Row>
            </Container>
        );
    }
}
export default PickupTimeslot;
