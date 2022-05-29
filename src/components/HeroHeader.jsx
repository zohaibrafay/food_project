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
                    <button className='btn fudo-nav-btn w-auto'>GET STARTED</button>
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
          <Row className="w-100 justify-content-between fudo-header-bottom">
            {fudoHeroHeaderData.map((jsonData)=>{
             return (
              <Col sm="12" md="3" lg="3" xl="3" className="text-center" >
                <img class="m-3 p-2 w-25" src={jsonData.iconSrc} alt="Images not Found" />
                  <h6 className="fw-bold custom-font">{jsonData.heading}</h6>
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