import React, { useEffect, useState } from 'react';
import loaderImage from './assets/images/loading.gif';
import './App.css';
import TopBar from './components/topbar/TopBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer';
import { Col, Container, Row } from 'react-bootstrap';
import SmallCard from './components/smallCard/SmallCard';
import ProductLaunchCard from './components/productLaunchCard/ProductLaunchCard';

const App = () => {
  const [loader, setLoader] = useState(true);
  useEffect(() => {
      setLoader(false);
  
  }, [loader])


  const TopSellingProducts = [
    {
      product_image: 'https://nest-frontend-v6.netlify.app/assets/imgs/shop/thumbnail-1.jpg',
      product_name: 'Nestle Original Coffee-Mate Coffee Creamer',
      product_price: '33.65',
      product_mrp: '40',
      product_rating: '3.5',
    },
    {
      product_image: 'https://nest-frontend-v6.netlify.app/assets/imgs/shop/thumbnail-2.jpg',
      product_name: 'Nestle Original Coffee-Mate Coffee Creamer',
      product_price: '33.65',
      product_mrp: '40',
      product_rating: '3.5',
    },
    {
      product_image: 'https://nest-frontend-v6.netlify.app/assets/imgs/shop/thumbnail-3.jpg',
      product_name: 'Nestle Original Coffee-Mate Coffee Creamer',
      product_price: '33.65',
      product_mrp: '40',
      product_rating: '3.5',
    }
  ]

  return (
    <>
      {loader ?
        <div className='loader'>
          <img src={loaderImage} alt='Loader' width={'50px'} height={'50px'} />
        </div> :
        <div className='App'>
          <TopBar />
          <Navbar />

          <Container fluid style={{ paddingLeft: '10vw', paddingRight: '10vw' }} className='py-5 my-5'>
            <h1 className='my-5 text-center main-section-heading'>Deals of the day</h1>
            <Row>
              <Col lg={3}>
                <ProductLaunchCard />
              </Col>
            </Row>
          </Container>

          <Container fluid style={{ paddingLeft: '10vw', paddingRight: '10vw' }} className='py-5'>
            <Row>
              <Col lg={3}>
                <h4 className='section-heading'>Top Selling</h4>
              {TopSellingProducts.map((product) => {
                 return  <SmallCard data={product} />
              })}
              </Col>
              <Col lg={3}>
                <h4 className='section-heading'>Top Selling</h4>
              {TopSellingProducts.map((product) => {
                 return  <SmallCard data={product} />
              })}
              </Col>
              <Col lg={3}>
                <h4 className='section-heading'>Top Selling</h4>
              {TopSellingProducts.map((product) => {
                 return  <SmallCard data={product} />
              })}
              </Col>
              <Col lg={3}>
                <h4 className='section-heading'>Top Selling</h4>
              {TopSellingProducts.map((product) => {
                 return  <SmallCard data={product} />
              })}
              </Col>
            </Row>
          </Container>

          <Footer />
        </div>
      }
    </>
  )
}

export default App;