import React from 'react';
import {Container, Row, Col, Button, Form} from 'react-bootstrap';
import {Link} from '@reach/router';
import './PickupUserInfo.css';


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
        console.log("Over 60: " + this.state.over60Category);
        console.log("immunocompromised: " + this.state.immuneCompCategory);
        console.log("underlying health condition that concerns you: " + this.state.underlyingCategory);
        console.log("other: " + this.state.other.selected);
        console.log("reason: " + this.state.other.reason);
    }

    render(){
        return(
            <Container>
                <Row className="item">
                    <Col md={{span: 9, offset: 2}}>
                        <label 
                            className="form-row-content"
                        >
                            <h4><b>Are you one or more of the following?</b> (Optional)</h4>
                        </label>
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
                <Row className="item-button">
                    <Button className="submit-button" onClick={this.handleSubmit}>
                        <Link to="/pickup-user-info" className="submit-button-link">Complete pickup request</Link>
                    </Button>
                </Row>
            </Container>
        );
    }
}
export default PickupUserInfo;