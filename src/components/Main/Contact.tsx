import React from "react";
const img=require('../../assets/images/connect.png');

const iframeStyle:React.CSSProperties={
    width:"100%",
    height:"30%"
}
const Node:React.FunctionComponent=function (params:any) {
    return  <>
    <iframe src='/map.html' style={iframeStyle}></iframe>
        <div style={{height:"100%",display:"flex",justifyContent:"center",alignItems:"center"}}>
            <img  style={{height:"70%"}}  src={img}></img>
        </div>
    </>
  
}

export default React.memo(Node)