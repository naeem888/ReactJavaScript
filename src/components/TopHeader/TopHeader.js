import React, { Component, Fragment } from 'react';
import '../../asset/css/style.css';
import { Container, Row,Col, Button } from 'react-bootstrap';
import { FaDrupal } from "react-icons/fa";

export default class TopHeader extends Component {
  render() {
    return (
      <div>
        <Fragment>
           <Container fluid className='topheader p-0'>
            <div className='topoverlay '>
                <Container className='Topcontent'>
                    <Row>
                        <Col className='text-center'>
                        <h1 className='Toptitle'>Grow Your Business with us </h1>
                        <h4 className='Subtitle'>
                            Your investment will help you to double your money just in two years <FaDrupal  />
                        </h4>
                        

                        <Button variant="primary">Join With Us</Button>{' '}
                        </Col>
                    </Row>
                </Container>



            </div>


           </Container>  
        </Fragment>
      </div>
    )
  }
}
