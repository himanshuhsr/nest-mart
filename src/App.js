import React, { useEffect, useState } from 'react';
import loaderImage from './assets/images/loading.gif';
import './App.css';
import TopBar from './components/topbar/TopBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer';

const App = () => {
  const [loader, setLoader] = useState(true);
  useEffect(() => {
      setLoader(false);
  
  }, [loader])
  return (
    <>
      {loader ?
        <div className='loader'>
          <img src={loaderImage} alt='Loader' width={'50px'} height={'50px'} />
        </div> :
        <div className='App'>
          <TopBar />
          <Navbar />
          <Footer />
        </div>
      }
    </>
  )
}

export default App;