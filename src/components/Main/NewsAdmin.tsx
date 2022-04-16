import React, { useCallback, useMemo, useState } from "react";
import { Button, Col, DatePicker, Image, Modal, Row, Input, Table } from "antd";
const img = require('../../assets/images/settings.png');

type dataType = {
    name: string
    context: string
}

const data: dataType[] = [
    {
        context: "欢迎欢迎前来预约实验，网络攻防在线预约系统正",
        name: "试验系统开放预约啦"
    },
    {
        context: "王强 胡卫兵 徐薇 李欢",
        name: "DNS溢出实验"
    },
    {
        context: "小明 小红 小张",
        name: "Tomcat管理用户弱口令攻击"
    }
]

let rowdata: null | dataType
const Home: React.FunctionComponent = function (params: any) {
    const [showEditor, setShowEditor] = useState(false)
    const [dataSource, setDataSource] = useState(data)

    const onOk = useCallback(function () {
        setShowEditor(false);
        rowdata=null
    }, [])
    const onCancel = useCallback(function () {
        setShowEditor(false);
        rowdata=null
    }, [])
    const openEditor = useCallback(function (evt: React.MouseEvent<HTMLElement, MouseEvent>): void {
        const data = evt.currentTarget.getAttribute('data-record');
        setShowEditor(true)

        if (data) {
            rowdata= JSON.parse(data)
        }
    }, [])

    const columns = useMemo(() => [

        {
            title: "公告名称",
            dataIndex: "name"

        },
        {
            title: "公报内容",
            dataIndex: "context"

        },

        {
            title: "操作",
            dataIndex: "handle",
            render(value: any, record: dataType): React.ReactNode {
                return <>
                    <Button data-record={JSON.stringify(record)} onClick={openEditor}>查看</Button>
                    <Button data-record={JSON.stringify(record)} onClick={openEditor}>编辑</Button>
                    <Button >删除</Button>
                </>
            },

        },
    ], [])
    return <>
        <Modal visible={showEditor} okText="发布" onOk={onOk} onCancel={onCancel} cancelText="取消">
            <h3>公告标题</h3>
            <Input type={"text"} value={rowdata?.name}></Input>
            <h3>公告内容</h3>
            <Input.TextArea value={rowdata?.context}>
               
            </Input.TextArea>
        </Modal>
        <Row>
            <Col span={8}>
                <Button onClick={openEditor} type="primary">+新增公告</Button>
            </Col>
            <Col span={8}>
                从<DatePicker ></DatePicker>到<DatePicker></DatePicker>
            </Col>
            <Col span={8}>
                <Input.Search enterButton="搜索"></Input.Search>

            </Col>
        </Row>
        <Row>
            <Col span={24}>
                <Table rowKey={() => {return Math.random()}} pagination={{ defaultPageSize: 8 }} columns={columns} dataSource={dataSource}>

                </Table>
            </Col>
        </Row>
    </>

}

export default React.memo(Home)