
import { Layout, Row, Grid, Col, List } from 'antd'
import React from 'react'
export type Prop = {
    className?: string
}

let wrapStyle: React.CSSProperties = {
    textAlign: "center", height: "100%", 
}

let data: { [key: string]: string[] } = {
    "组织": [
        "About", "Services", "Our Products", "Our Culture", "Team"
    ],
    "更多链接": [
        "Terms & Conditions", "Our Careers", "Support & FAQ's", "Sign up", "Log in"
    ],
    "社交网站": [
require('../..//assets/images/google.png'),
require('../..//assets/images/fly.png'),
require('../..//assets/images/facebook.png'),
require('../..//assets/images/share1.png'),
require('../..//assets/images/share2.png'),
    ]

}
function getItemsNode(): React.ReactNode[] {
    const nodes = []
    for (const key in data) {

        const items = data[key].map((item) => {
            if(key=="社交网站"){
return <img width={"30vmax"}  key={Math.random()} style={{margin:"10px"}} src={item}></img>
            }else
        return <div key={Math.random()}><a style={{border:"none",
        fontSize:" 0.8vmax"}}>{item}</a></div>
    }
        );
        nodes.push(<Col key={Math.random()} span={8}>
            <div style={wrapStyle}>
                <div style={{fontSize:"0.9vmax",color:"red"}}>{key}</div>
                {
                    items
                }
            </div>

        </Col>)


    }
    return nodes
}
const Index: React.FunctionComponent<Prop> = function (prop: Prop) {
    return <Layout.Footer className={prop.className}>
        <Row >
            {
                getItemsNode()
            }
        </Row>
    </Layout.Footer>
}
export default Index