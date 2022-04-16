import React, { useCallback, useState } from "react"
import { Layout, Image, Popover } from "antd"

const userIcon = require('../../assets/images/user.png')
const adminImg = require('../../assets/images/admin.png')
export type props = {
    className?: string
}
const style: React.CSSProperties = { textAlign: "center", fontWeight: "bolder", color: "white",fontSize:"2vmax"}
const AdminStyle: React.CSSProperties = {
    width: "6%", height: "100%", marginLeft: "90%", position: "absolute", top: "0", cursor: "pointer",
    display: "flex", justifyContent: "space-around", alignItems: "baseline",


}
const content=<>
<img src={adminImg} style={{width:"10rem",height:"12rem"}}></img>
</>;
const Index: React.FunctionComponent<props> = function (prop: props) {
    const [showAdmin,setShowAdmin]=useState(false)
    const onclick=useCallback(function (v) {
        setShowAdmin(v)
    },[])
    return <Layout.Header className={prop.className}>
        
        <h1 style={style}>
            网络攻防在线开放实验平台网络预约与自动授权系统
        </h1>
        <Popover onVisibleChange={onclick} visible={showAdmin} trigger="click" content={content}>
        <div  style={AdminStyle}>
            <Image style={{ width: "1.5vw" }} src={userIcon}></Image>
            <span>
                张三 <span>教师</span>
            </span>
        </div>
        </Popover>
       
    </Layout.Header>
}
export default Index