import React from 'react'
import {Container,Row,Col} from 'react-bootstrap';
import BurgerSlider from '../Images/Burger slider.png'
import Enjoy30 from '../Images/Enjoy 30.png'
import Extra from '../Images/Extra.png'
import japanese from '../Images/japanese.png'
function OfferSection() {
  return (
    <Container className='pt-3'>
       <Row>
           <Col sm="12" md="12" lg="12" xl="12">
              <img className='w-100 rounded-3' src={BurgerSlider} />
           </Col>
       </Row>
       <Row className='pt-3'>
           <Col sm="12" md="4" lg="4" xl="4">
           <img className='w-100 rounded-3' src={Enjoy30} />
           </Col>
           <Col sm="12" md="4" lg="4" xl="4">
           <img className='w-100 rounded-3' src={Extra} />
           </Col>
           <Col sm="12" md="4" lg="4" xl="4">
           <img className='w-100 rounded-3' src={japanese} />
           </Col>
       </Row>
    </Container>
  )
}

export default OfferSection