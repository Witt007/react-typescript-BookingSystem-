import React, {useCallback, useState} from 'react'
import {Layout, Menu, Image, Button} from 'antd'
import {DoubleLeftOutlined, DoubleRightOutlined} from "@ant-design/icons"

export type Prop = {
    className?: string
    onNavClicked?: (target: string) => void
}

function onCollapse(params: any) {
}

const itemStyle: React.CSSProperties = {
    textAlign: "center"
}
const data: Array<{ key: string, iconUrl: string, text: string }> = [
    {
        key: "1", text: "首页",
        iconUrl: require('../../assets/images/y_03.png')
    },
    {
        key: "2", text: "新闻公告",
        iconUrl: require('../../assets/images/y_07.png')
    },
    {
        key: "3", text: "预约实验",
        iconUrl: require('../../assets/images/y_10.png')
    },
    {
        key: "4", text: "资源站点",
        iconUrl: require('../../assets/images/y_13.png')
    },
    {
        key: "5", text: "实验管理",
        iconUrl: require('../../assets/images/y_16.png')
    },
    {
        key: "6", text: "用户管理",
        iconUrl: require('../../assets/images/y_18.png')
    },
    {
        key: "7", text: "公告管理",
        iconUrl: require('../../assets/images/y_20.png')
    },
    {
        key: "8", text: "个人设置",
        iconUrl: require('../../assets/images/y_22.png')
    },
    {
        key: "9", text: "联系我们",
        iconUrl: require('../../assets/images/y_24.png')
    },
]
const collapseStyle: React.CSSProperties = {position: "absolute", margin: "auto auto", right: "-16px", padding: 0}

const Index: React.FunctionComponent<Prop> = function (prop: Prop) {
    const [selectedKeys, setSelectedKeys] = useState(data[0].key);
    const [isCollapsed, setIsCollapsed] = useState(false);
    const onNavClicked = useCallback(function onNavClicked(menuEv: { item: any, key: any, keyPath: any, domEvent: any }) {
        const key = menuEv.domEvent.currentTarget.getAttribute('data-target');
        prop.onNavClicked?.(key);
        setSelectedKeys(key);

    }, []);
    const SwitchDisplay=useCallback(function () {
        setIsCollapsed(!isCollapsed)
    },[isCollapsed]);

    return <Layout.Sider collapsedWidth={0} collapsed={isCollapsed} style={{borderRadius: "1vmin"}} onCollapse={onCollapse}  theme={"dark"}
                         breakpoint={"md"} className={prop.className}>
        <Menu theme='dark'
              mode="inline" selectedKeys={[selectedKeys]} onClick={onNavClicked}>
            {
                data.map((item, i) => {

                    return <Menu.Item data-target={item.key} icon={<Image src={item.iconUrl}></Image>} style={itemStyle}
                                      key={item.key}>
                        {item.text}
                    </Menu.Item>
                })
            }

        </Menu>
        <Button onClick={SwitchDisplay} style={collapseStyle}>
            {
                isCollapsed ? <DoubleRightOutlined></DoubleRightOutlined> :
                    <DoubleLeftOutlined></DoubleLeftOutlined>

            }
        </Button>
    </Layout.Sider>

}
export default Index