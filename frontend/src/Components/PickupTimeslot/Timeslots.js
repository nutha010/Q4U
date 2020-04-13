import React from 'react';
import './PickupTimeslot.css';

import {Container, Row, Col, Form} from 'react-bootstrap';

class TimeSlots extends React.Component {

    constructor(props){
        super(props)
        this.state = {
            selectedTime: null
        }
        this.handleChange = this.handleChange.bind(this);
        this.getTimeSlots = this.getTimeSlots.bind(this);
    }

    getTimeSlots() {
        const availableTimes = this.props.availableTimes;
        const availableTimeslots = [];
        var pos = 0;
        var index = true;
        for (var i = availableTimes[pos][0]; i < availableTimes[availableTimes.length - 1][1]; i = i + 15) {
            if (i >= availableTimes[pos][1]) {
                pos += 1;
            }
            if (i >= availableTimes[pos][0] && i < availableTimes[pos][1]) {
                availableTimeslots.push({ id: (index ? '1' : '0'), timeInMinutes: i });
                index = !index;
            }
        }
        return availableTimeslots;
    }

    convertToHrsMins(time){
        const hours = Math.floor(time / 60);
        const minutes = time % 60;
        const m = minutes < 10 ? '0'+ minutes : minutes;
        return `${hours}:${m}`
    }

    handleChange(timeslot){
        if (this.state.selectedTime === timeslot.timeInMinutes) {
            this.setState({
                selectedTime: null
            });
        }
        else {
            this.setState({
                selectedTime: timeslot.timeInMinutes
            });
        }
        this.props.getSelectedTimeslot(timeslot);
    }

    render(){
        const timeslotsOpen = this.getTimeSlots();
        const hoursToDisplay = (timeslotsOpen).map((item) => {
            return (
                <Row id={"hours-table-item-"+item.id} className="hours-table-item">
                    <Col sm={1} xs={2}>                                    
                        <Form.Check 
                            type={'radio'}
                            onClick={() => this.handleChange(item)}
                            name="time"
                            
                        />
                    </Col>
                    <Col sm={11} xs={10}>{this.convertToHrsMins(item.timeInMinutes)}</Col>
                </Row>
            );
        });

        return (
            <Container className="hours-table">
                {hoursToDisplay}
            </Container>            
        );
    }
}

export default TimeSlots;