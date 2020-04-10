import React from 'react';
import './PickupCustomerForm.css';
import {LocalForm, Control} from 'react-redux-form'; 
import {Row, Label, Button} from 'reactstrap';


class GroceryList extends React.Component {

    constructor(props){
        super(props)
        this.state = {
            newItem: "",
            currentItems: props.items
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleAddItem = this.handleAddItem.bind(this);
    }

    handleChange(event){
        this.setState({ newItem: (event && event.target && event.target.value) || "" });
    }

    handleAddItem(event){
        this.setState({
            currentItems: (this.state.currentItems).concat({
                "id": this.state.currentItems.length + 1, 
                "description": this.state.newItem
            }),
        });
        this.setState({
            newItem: ""
        });
        console.log("New state: " );
        console.log(this.state);
    }
    render(){
        console.log(this.state.currentItems);
        const itemsToDisplay = (this.state.currentItems).map((item) => {
            return (
                <tr key={item.id}>
                    <td>{item.id}.</td>
                    <td>{item.description}</td>
                </tr>
            );
        });

        return (
            <div className="row form-row-content">
                <table className="container shopping-list table">
                    <thead>
                    <th colspan={2}>Your Shopping List {this.state.currentItems.length}/20</th>
                    </thead>
                    <tbody>
                        {itemsToDisplay}
                        <tr>
                            <td>
                                <Button type="submit" onClick={this.handleAddItem}>+</Button>
                            </td>
                            <td>
                                <input 
                                    type="text" 
                                    placeholder="Add Item"
                                    value={this.state.newItem}
                                    onChange={this.handleChange}
                                />
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        );
    }
}

class PickupForm extends React.Component {
    render(){
        return (
            <div>
                <div className="row">
                    <h2>HEADER PLACEHOLDER</h2>
                </div>
                <div className="container">
                    <div className="row row-content col-sm-8 offset-sm-2 ">
                        <h2>Store Pick up and Timeslot info Component</h2>
                    </div>
                    <div className="row row-content col-sm-8 offset-sm-2">
                        <LocalForm>
                            <Row className="form-group">
                                <div className="container">
                                    <Label htmlFor="pickupList" className="row form-row-content">
                                        <h4>
                                            <b>What items do you need picked up?</b><br/>
                                            <i>Maximum of 20 items. Specify the quantity for each item.</i>
                                        </h4>
                                    </Label>
                                    <GroceryList 
                                        items={[{"id": 1, "description": "milk"}, {"id": 2, "description": "orjtyjghjgdhjgdhjgfjghjgfhjghanges"}]}
                                    />
                                </div>
                            </Row>
                            <Row className="form-group">
                                <div className="container">
                                    <Label 
                                        htmlFor="fridge" 
                                        className="row"
                                    >
                                        <h4><b>Are any items on your list refrigerated or frozen?</b></h4>
                                    </Label>

                                    <div className="row"> 
                                        <div className="container">
                                            <div className="row">
                                                <input type="radio" className="form-check-input offset-sm-8" id="yes" name="fridge" value=""/>
                                                <label for="yes" className="form-check-label">Yes</label> 
                                            </div>
                                            <div className="row">
                                                <input type="radio" className="form-check-input offset-sm-8" id="no" name="fridge" value=""/>
                                                <label for="no" className="form-check-label">No</label> 
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Row>
                        </LocalForm>
                    </div>
                </div>
            </div>
        );
    }
}

export default PickupForm;