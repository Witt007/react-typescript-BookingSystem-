import React, { useCallback, useState } from 'react';
import { Layout, Row, Col } from "antd"
import 'antd/dist/antd.css'
import './App.scss';


import Header from './components/Header'
import Footer from './components/Footer'
import Main from './components/Main'
import SideBar from './components/SideBar'



function App() {
  const [targetPage, setTargetPage] = useState('1');

  const onNavClicked = useCallback(function (target: string) {
    setTargetPage(target)
  }, []);
  return (

    <Layout className={'App'}>
      <Header className={"header"}></Header>

      <Layout className='center'>

        <SideBar onNavClicked={onNavClicked} className={"sidebar"}></SideBar>

        <Layout className={'main'}>
          <Main targetPage={targetPage} className='iframe' />
          <Footer className='footer' />
        </Layout>



      </Layout>


    </Layout>



  );
}

export default App;
