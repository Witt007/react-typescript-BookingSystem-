
import React from 'react'
import { Layout } from 'antd' 
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import HomePage from './HomePage'
import News from './News'
import Contact from './Contact'
import Site from './Site'
import ExpAdmin from './ExpAdmin'
import Settings from './settings'
import Booking from './booking'
import UserAdmin from './UserAdmin'
import NewsAdmin from './NewsAdmin'
import {data} from "../../data/mock"
export type Prop={
children?:React.ReactNode
className?:string
targetPage:string
}

const pages:{[key:string]:React.ReactNode}={
    ad:<Ad></Ad>,
    "1":<HomePage></HomePage>,
    "2":<News></News>,
    "3":<Booking></Booking>,
    "4":<Site></Site>,
    "5":<ExpAdmin data={data}></ExpAdmin>,
    "6":<UserAdmin></UserAdmin>,
    "7":<NewsAdmin></NewsAdmin>,
    "8":<Settings></Settings>,
    "9":<Contact></Contact>
}
function Ad(params: any) {
    return <div >
      <header >
        "About","Services","Our Products","Our Culture","Team"
  
      </header>
    </div>
  }
 const Index:React.FunctionComponent<Prop>=function (prop:Prop) {
    return <Layout.Content className={prop.className}>
    {pages[prop.targetPage]}
   
  </Layout.Content>
}
export default Index