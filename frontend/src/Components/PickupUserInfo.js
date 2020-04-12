import React from 'react';
import {Container, Row, Col, Button, Form} from 'react-bootstrap';
import {Label} from 'reactstrap';
import {Link} from '@reach/router';
import './PickupCustomerForm/PickupCustomerForm.css';


class PickupUserInfo extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            over60Category: false,
            immuneCompCategory: false,
            underlyingCategory: false,
            other: {
                selected: false,
                reason: ""
            }
        }

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(){
        console.log(this.state.over60Category);
        console.log(this.state.immuneCompCategory);
        console.log(this.state.underlyingCategory);
        console.log(this.state.other.selected);
        console.log(this.state.other.reason);
    }

    render(){
        return(
            <Container>
                <Row className="item">
                    <Col md={{span: 9, offset: 2}}>
                        <Label 
                            htmlFor="fridge" 
                            className="form-row-content"
                        >
                            <h4><b>Are you one or more of the following?</b> (Optional)</h4>
                        </Label>
                    </Col>
                    <Col xs={12}> 
                        <Container>
                            <Row className="health-status-row">
                                <Col md={{span: 9, offset: 3}}>
                                    <Form.Check 
                                        label={'60 years or older'}
                                        onClick={() => this.setState({ over60Category: !this.state.over60Category})}
                                        defaultChecked={this.state.over60Category}
                                    />
                                </Col>
                            </Row>
                            <Row className="health-status-row">
                                <Col md={{span: 9, offset: 3}}>
                                    <Form.Check 
                                        label={'Immunocompromised'}
                                        onClick={() => this.setState({ immuneCompCategory: !this.state.immuneCompCategory})}
                                        defaultChecked={this.state.immuneCompCategory}
                                    />
                                </Col>
                            </Row>
                            <Row className="health-status-row">
                                <Col md={{span: 9, offset: 3}}>
                                    <Form.Check 
                                        label={'Have an underlying health condition which concerns you'}
                                        onClick={() => this.setState({ underlyingCategory: !this.state.underlyingCategory})}
                                        defaultChecked={this.state.underlyingCategory}
                                    />
                                </Col>
                            </Row>
                            <Row className="health-status-row">
                                <Col md={{span: 1, offset: 3}}>
                                    <Form.Check 
                                        label={'Other: '}
                                        onClick={() => this.setState({ other: { ...this.state.other, selected: !this.state.other.selected }})}
                                        defaultChecked={this.state.underlyingCategory}
                                    />
                                </Col>
                                <Col md={5}>
                                    <Form.Control
                                        onChange={(e) => this.setState({ other: { ...this.state.other, reason: ((e && e.target && e.target.value) || "")  }})}
                                    />
                                </Col>
                            </Row>
                        </Container>
                    </Col>
                </Row>
                <Row className="submit-button">
                    <Button className="next-button" onClick={this.handleSubmit}>
                        <Link to="/pickup-user-info" className="next-button-link">Complete pickup request</Link>
                    </Button>
                </Row>
            </Container>
        );
    }
}
export default PickupUserInfo;