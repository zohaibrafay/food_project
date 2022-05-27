import React from 'react'
import {Container,Row,Col} from 'react-bootstrap';
import Grass from '../Images/Grass.png'
import HeaderImage from '../Images/Header image.png'
import {fudoHeroHeaderData} from '../assets/helper/fudoJsonDataList'
function HeroHeader() {


  return (
    <div>
       <Container fluid className='position-relative fudo-custom-header-bg'>
       <Container>
            <Row>
              <Col sm="12" md="6" lg="6" xl="6" className='fudo-hero-header-content'>
                    <span className='text-danger'>More than faster</span>
                    <h1> Different Spice For A Different Taste</h1>
                    <br />
                    <p>Lorem ipsum dolor sit amet consectetur adipiscing elit, nulla enim posuere quis consequat.</p>
                    <br />
                    <button className='btn fudo-nav-btn w-auto'>Get Started</button>
                </Col>
              <Col sm="12" md="6" lg="6" xl="6">
                <div className='d-flex fudo-banner'>
                  <img src={Grass} />
                  <img src={HeaderImage} />
                </div>
                
                  </Col>
            </Row>
       </Container>
       <Container>
          <Row>
            {fudoHeroHeaderData.map((jsonData)=>{
             return (
              <Col sm="12" md="3" lg="3" xl="3">
                <img src={jsonData.iconSrc} alt="Images not Found" />
                  <h3>{jsonData.heading}</h3>
                  <p>{jsonData.para}</p>
              </Col>
             )

            })
            }
          </Row>
       </Container>
       </Container>
    </div>
  )
}

export default HeroHeader