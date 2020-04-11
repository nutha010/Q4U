import React from 'react';
import './PickupCustomerForm.css';
import GroceryList from './GroceryList';
import OrderInfoCard from './OrderInfoCard';
import {Container, Row, Col, Button} from 'react-bootstrap';
import {Label} from 'reactstrap';

const exampleStore = {
    name: "Super Market",
    address: "123 E Green St. Champaign, IL",
    hours: [9, 18],
    distance: 6
};

const exampleTimeslot = '10:00-10:30';

class PickupForm extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            shoppingList: [],
            refrigerated: false
        };
        this.getListOfItems = this.getListOfItems.bind(this);
        this.updateRefrigerated = this.updateRefrigerated.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    getListOfItems(items){
        this.setState({
            shoppingList: items
        });
    }

    updateRefrigerated(fridgeValue){
        this.setState({
            refrigerated: fridgeValue
        });
    }

    handleSubmit(){
        console.log("SUBMITTING RESPONSE: ");
        console.log("Shopping List: ");
        console.log(this.state.shoppingList);
        console.log("Any refrigeration items? " + this.state.refrigerated);
    }

    render(){
        return (
            <Container className="col-sm-8 offset-sm-2 content">
                <Row className="item">
                    <Col sm={12}>
                        <OrderInfoCard store={exampleStore} timeslot={exampleTimeslot}/>
                    </Col>
                </Row>
                <Row className="item">
                    <Col sm={12}>
                        <Label htmlFor="pickupList" className="form-row-content">
                            <h4>
                                <b>What items do you need picked up?</b><br/>
                                <i>Maximum of 20 items. Specify the quantity for each item.</i>
                            </h4>
                        </Label>
                    </Col>
                    <Col sm={12} >
                        <GroceryList 
                            items={[{"id": 1, "description": "milk"}, {"id": 2, "description": "orjtyjghjgdhjgdhjgfjghjgfhjghanges"}]}
                            getListOfItems = {this.getListOfItems}
                        />
                    </Col>
                </Row>
                <Row className="item">
                    <Col sm={12} >
                        <Label 
                            htmlFor="fridge" 
                            className="form-row-content"
                        >
                            <h4><b>Are any items on your list refrigerated or frozen?</b></h4>
                        </Label>
                    </Col>

                    <Col sm={12}> 
                        <Container className="offset-sm-6">
                            <Row>
                                <input type="radio" className="form-check-input" id="yes" name="fridge" checked={this.state.refrigerated} onChange={() => this.updateRefrigerated(true)}/>
                                <label for="yes" className="form-check-label">Yes</label> 
                            </Row>
                            <Row>
                                <input type="radio" className="form-check-input" id="no" name="fridge" checked={!this.state.refrigerated} onChange={() => this.updateRefrigerated(false)}/>
                                <label for="no" className="form-check-label">No</label> 
                            </Row>
                        </Container>
                    </Col>
                </Row>
                <Row className="item-button">
                    <Button className="next-button" onClick={this.handleSubmit}>Next</Button>
                </Row>
            </Container>
        );
    }
}

export default PickupForm;