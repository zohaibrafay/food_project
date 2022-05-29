import React from 'react'
import {Container,Row,Col} from 'react-bootstrap';
import Grass from '../Images/Grass 2.png'
import Food from '../Images/Food.png'
import {AboutSectionContent} from '../assets/helper/fudoJsonDataList'

function AboutSection() {
  return (
    <Container fluid className='position-relative'>
       <Container>
            <Row>
            <Col sm="12" md="5" lg="5" xl="5">
                <div >
                  <img className='w-75' src={Grass} />
                  <img className='w-100' src={Food} />
                </div>
                  </Col>
              <Col sm="12" md="7" lg="7" xl="7" className='fudo-hero-header-content'>
                    <span className='text-danger'>Why Choose us</span>
                    <h2 className='fs-1'> Why We Are The Best</h2>
                    <br />
                    <p>Lorem ipsum dolor sit amet consectetur adipiscing elit, nulla enim posuere quis consequat. volutpat vel sagittis aptent ornare morbi, nunc laoreet sodales dictum tempor facilisis netus.</p>
                    <br />
                    <Row>
                    {AboutSectionContent.map((jsonData)=>{
                       return (
                               <Col sm="12" md="6" lg="6" xl="6" className="d-flex text-center align-items-center" >
                                 <img class="m-3 p-2 w-25" src={jsonData.serviceImage} alt="Images not Found" />
                                 <h6>{jsonData.serviceTitle}</h6>
                               </Col>
                               )

                     })
                    }
                    </Row>
                </Col>
              
            </Row>
       </Container>
       </Container>
  )
}

export default AboutSection