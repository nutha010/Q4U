import React from 'react';
import {Container, Row, Col} from 'react-bootstrap';
import './PickupTimeslot.css';

class TimeSlots extends React.Component {

    constructor(props){
        super(props)
        this.state = {
            selectedTime: null,
            timeslots: []
        }
        this.handleChange = this.handleChange.bind(this);
        this.getTimeSlots = this.getTimeSlots.bind(this);
    }

    componentDidMount(){
        this.getTimeSlots();
    }

    getTimeSlots() {
        const availableTimes = this.props.availableTimes;
        const availableTimeslots = [];

        var pos = 0;
        var index = true;
        var id = 0

        // Creating array of timeslot objects to display in the timeslot list based on the time ranges passed
        // as the props to the TimeSlots component
        for (var i = availableTimes[pos][0]; i < availableTimes[availableTimes.length - 1][1]; i = i + 15) {
            if (i >= availableTimes[pos][1]) {
                pos += 1;
            }
            if (i >= availableTimes[pos][0] && i < availableTimes[pos][1]) {
                availableTimeslots.push({ id: id, styleId: (index ? '1' : '0'), timeInMinutes: i, selected: false });
                index = !index;
                id ++;
            }
        }

        const now = new Date();
        const currentTime = now.getMinutes() + now.getHours()*60;
        const availableTimeslotsFiltered = availableTimeslots.filter(timeslot => timeslot.timeInMinutes >= currentTime + 60);
        this.setState({
            timeslots: availableTimeslotsFiltered
        });
    }

    convertToHrsMins(time){
        const hours = Math.floor(time / 60);
        const minutes = time % 60;
        const m = minutes < 10 ? '0'+ minutes : minutes;
        return `${hours}:${m}`
    }

    handleChange(timeslot){
        var newTimeslot = null;
        if (this.state.selectedTime === null) {
            this.setState({
                selectedTime: timeslot,
                timeslots: this.state.timeslots.map(item => {
                    if(item.id === timeslot.id) {
                        newTimeslot = item;
                        return { id: item.id, styleId: item.styleId, timeInMinutes: item.timeInMinutes, selected: true }
                    }
                    else return { id: item.id, styleId: item.styleId, timeInMinutes: item.timeInMinutes, selected: false }
                })
            });
        }
        else if (this.state.selectedTime.id === timeslot.id) {
            this.setState({
                selectedTime: null,
                timeslots: this.state.timeslots.map(item => {
                    return { id: item.id, styleId: item.styleId, timeInMinutes: item.timeInMinutes, selected: false }
                })
            });
        }
        else {
            this.setState({
                selectedTime: timeslot,
                timeslots: this.state.timeslots.map(item => {
                    if(item.id === timeslot.id) {
                        newTimeslot = item;
                        return { id: item.id, styleId: item.styleId, timeInMinutes: item.timeInMinutes, selected: true }
                    }
                    else if (item.id === this.state.selectedTime.id) return { id: item.id, styleId: item.styleId, timeInMinutes: item.timeInMinutes, selected: false }
                    else return { id: item.id, styleId: item.styleId, timeInMinutes: item.timeInMinutes, selected: false }
                })
            });
        }
        this.props.getSelectedTimeslot(newTimeslot);
    }

    render(){
        const hoursToDisplay = (this.state.timeslots).map((item) => {
            const isSelected = item.selected ? "-selected" : "";
            return (
                <Row id={"hours-table-item-"+item.styleId+isSelected} className="hours-table-item" onClick={() => this.handleChange(item)}>
                    <Col sm={12} xs={12}>{this.convertToHrsMins(item.timeInMinutes)}</Col>
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