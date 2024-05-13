import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'

const Footer = () => {
  return (
    <>
    <Container fluid style={{ paddingLeft: '10vw', paddingRight: '10vw' }} className='py-3'>
        <Row>
            <Col lg={2} md={12} sm={12} className='p-4 bg-light'>
                <img src={'https://nest-frontend-v6.netlify.app/assets/imgs/theme/logo.svg'} />
                <p className='text-sm mt-3'>Awesome grocery store website template</p>
            </Col>
            <Col lg={8} md={12} sm={12}>
                <Row>
                    <Col lg={3} md={6} sm={12} className='p-4 bg-dark'></Col>
                    <Col lg={3} md={6} sm={12} className='p-4 bg-danger'></Col>
                    <Col lg={3} md={6} sm={12} className='p-4 bg-success'></Col>
                    <Col lg={3} md={6} sm={12} className='p-4 bg-primary'></Col>
                </Row>
            </Col>
            <Col lg={2} md={12} sm={12} className='p-4 bg-warning'>
                
            </Col>
        </Row>
    </Container>
    </>
  )
}

export default Footer