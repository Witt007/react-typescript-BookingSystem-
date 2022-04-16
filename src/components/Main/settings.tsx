import React from "react";
const img=require('../../assets/images/settings.png');
const Home:React.FunctionComponent=function (params:any) {
    return  <div style={{height:"100%",display:"flex",justifyContent:"center",alignItems:"center"}}>
        <img  style={{height:"100%"}}  src={img}></img>
    </div>
  
}

export default React.memo(Home)