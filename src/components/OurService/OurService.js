import React, { Component, Fragment } from 'react'
import { Container, Card, Row,Col,Button } from 'react-bootstrap'
import serv from '../../asset/images/dinein.jpg'
import halal from '../../asset/images/halal.jpg'
import indian from '../../asset/images/desert.jpg'
import { FaAngry, FaPinterest} from "react-icons/fa";
let iconStyles = { color: "red", fontSize: "30px" };


export default class OurService extends Component {
  render() {
    return (
        <Fragment>
            <Container className='mt-3'>
                <Row>
                    <Col lg={4} md={6} sm={12}>
                    <Card>
                        <img className='servimg' src={serv}/>
                        <Card.Body>
                            <Card.Title>Card Title</Card.Title>
                            <Card.Text>
                            Some quick example text to build on the card title and make up the
                            bulk of the card's content.
                            </Card.Text>
                            <Button variant="primary">Go somewhere</Button>
                        </Card.Body>
                        </Card>
                    </Col>

                    <Col lg={4} md={6} sm={12}>
                    <Card>
                    <img className='servimg' src={halal}/>
                        <Card.Body>
                            <Card.Title>Card Title</Card.Title>
                            <Card.Text>
                            Some quick example text to build on the card title and make up the
                            bulk of the card's content.
                            </Card.Text>
                            <Button variant="primary">Go somewhere</Button>
                        </Card.Body>
                        </Card>
                    </Col>

                    <Col lg={4} md={6} sm={12}>
                    <Card>
                    <img className='servimg' src={indian}/>
                        <Card.Body>
                            <Card.Title>Card Title</Card.Title>
                            <Card.Text>
                            Some quick example text to build on the card title and make up the
                            bulk of the card's content.
                            </Card.Text>
                            <Button variant="primary">Go somewhere</Button>
                            <FaAngry style={iconStyles}/>
                            {/* <FaPinterest style={iconStyles} /> */}
                        </Card.Body>
                        </Card>
                    </Col>
                    
                </Row>
            </Container>

        </Fragment>

    )
  }
}
