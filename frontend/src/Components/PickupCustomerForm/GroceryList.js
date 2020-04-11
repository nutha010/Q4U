import React from 'react';
import './PickupCustomerForm.css';
import {LocalForm, Control} from 'react-redux-form'; 
import { findDOMNode } from "react-dom";

import {Container, Row, Col, Label, Button, InputGroup, Table, FormControl} from 'react-bootstrap';

class GroceryList extends React.Component {

    constructor(props){
        super(props)
        this.state = {
            newItem: "",
            currentItems: props.items
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleAddItem = this.handleAddItem.bind(this);

        this.scrollableShoppingList = null;
    }

    componentDidUpdate(){
        const itemToFocusOn = findDOMNode(this.scrollableShoppingList);
        // to force the table to scroll to the bottom of the table where the newest element has been added (each item row is approx 45 pixels tall)
        itemToFocusOn.scrollTop = (this.state.currentItems.length)*45;
    }

    handleChange(event){
        this.setState({ newItem: (event && event.target && event.target.value) || "" });
    }

    validateNewItem(newItem){

        const error =  {}
        error.foundErr = false;
        error.errMessage = "";

        // Check for repeats (can make more complex in the future)
        const repeats = this.state.currentItems.filter(item => item.description === newItem)
        if (repeats.length > 0){
            error.errMessage = "The item " + newItem + " already exists in your shopping list.";
            error.foundErr = true;
        }

        // Check that the input isn't blank
        if (newItem.length === 0) {
            error.errMessage = "You didn't enter any item.";
            error.foundErr = true;
        }

        // What other validation checks can we do?

        return error;
    }

    handleAddItem(item, oldItems){

        const validation = this.validateNewItem(item)
        if (validation.foundErr){
            alert(validation.errMessage);
            return;
        }

        const newListOfItems = oldItems.concat({
            "id": oldItems.length + 1, 
            "description": item
        });

        this.setState({
            currentItems: newListOfItems,
            newItem: ""
        });

        this.props.getListOfItems(newListOfItems);
    }

    render(){
        const numItems = this.state.currentItems.length;
        const itemsToDisplay = (this.state.currentItems).map((item) => {
            return (
                <Row key={item.id} className="shopping-list-item">
                    <Col sm={1}>{item.id}.</Col>
                    <Col sm={11}>{item.description}</Col>
                </Row>
            );
        });

        return (
                <Container className="item">
                        <Row className="shopping-list-table">
                            <Col sm={10}><b>Your Shopping List </b></Col>
                            <Col sm={2}><b>{numItems}/20</b></Col>
                        </Row>
                        <Row className="shopping-list-table">
                            <Container className="existing-items" ref={ref => this.scrollableShoppingList = ref}>
                                {itemsToDisplay}
                            </Container>
                            <Container>
                                <Row>
                                    <Col sm={12}>
                                        <InputGroup>
                                            <InputGroup.Prepend>
                                                <Button 
                                                    variant="outline-secondary" 
                                                    id="add-item"
                                                    disabled = {numItems >= 20}
                                                    onClick={() => this.handleAddItem(this.state.newItem, this.state.currentItems)}
                                                >+</Button>
                                            </InputGroup.Prepend>
                                            <FormControl 
                                                aria-describedby="add-item" 
                                                placeholder="Add Item"
                                                onChange={this.handleChange}
                                                disabled = {numItems >= 20}
                                                value={this.state.newItem}
                                                onKeyPress={(e) => {e.key === "Enter" ? this.handleAddItem(this.state.newItem, this.state.currentItems) : console.log("")}}
                                            />
                                        </InputGroup>                        
                                    </Col>
                                </Row>
                            </Container>
                        </Row>
                </Container>
        );
    }
}

export default GroceryList;