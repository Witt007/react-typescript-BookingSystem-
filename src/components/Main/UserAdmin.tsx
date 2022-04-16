import React, { useState, useCallback } from "react";
import { Button, Image, Modal, Tabs, Input, Table, Form, Row, Col } from "antd";
import { TableSet, TableData } from './DefaultTable'

function getDataSource(): TableData[] {
    return [
        {
            id: "001",
            class: "软件工程22级 1班", college: "软件学院", sex: "男", email: "12123@qq.com", course: "数据结构与算法", name: "胡卫兵", age: "21", num: "12123456789"
        },
        {
            id: "002",
            class: "软件工程22级 1班", college: "软件学院", sex: "男", email: "12123@qq.com", course: "数据结构与算法", name: "胡卫兵", age: "21", num: "12123456789"
        },
        {
            id: "003",
            class: "软件工程22级 1班", college: "软件学院", sex: "男", email: "12123@qq.com", course: "数据结构与算法", name: "胡卫兵", age: "21", num: "12123456789"
        },
        {
            id: "004",
            class: "软件工程22级 1班", college: "软件学院", sex: "男", email: "12123@qq.com", course: "数据结构与算法", name: "胡卫兵", age: "21", num: "12123456789"
        },
        {
            id: "005",
            class: "软件工程22级 1班", college: "软件学院", sex: "男", email: "12123@qq.com", course: "数据结构与算法", name: "胡卫兵", age: "21", num: "12123456789"
        },
        {
            id: "006",
            class: "软件工程22级 1班", college: "软件学院", sex: "男", email: "12123@qq.com", course: "数据结构与算法", name: "胡卫兵", age: "21", num: "12123456789"
        },
        {
            id: "007",
            class: "软件工程22级 1班", college: "软件学院", sex: "男", email: "12123@qq.com", course: "数据结构与算法", name: "胡卫兵", age: "21", num: "12123456789"
        },
        {
            id: "008",
            class: "软件工程22级 1班", college: "软件学院", sex: "男", email: "12123@qq.com", course: "数据结构与算法", name: "胡卫兵", age: "21", num: "12123456789"
        },
        {
            id: "009",
            class: "软件工程22级 1班", college: "软件学院", sex: "男", email: "12123@qq.com", course: "数据结构与算法", name: "胡卫兵", age: "21", num: "12123456789"
        },
        {
            id: "010",
            class: "软件工程22级 1班", college: "软件学院", sex: "男", email: "12123@qq.com", course: "数据结构与算法", name: "胡卫兵", age: "21", num: "12123456789"
        },
        {
            id: "011",
            class: "软件工程22级 1班", college: "软件学院", sex: "男", email: "12123@qq.com", course: "数据结构与算法", name: "胡卫兵", age: "21", num: "12123456789"
        },
        {
            id: "012",
            class: "软件工程22级 1班", college: "软件学院", sex: "男", email: "12123@qq.com", course: "数据结构与算法", name: "胡卫兵", age: "21", num: "12123456789"
        },
        {
            id: "013",
            class: "软件工程22级 1班", college: "软件学院", sex: "男", email: "12123@qq.com", course: "数据结构与算法", name: "胡卫兵", age: "21", num: "12123456789"
        },
        {
            id: "014",
            class: "软件工程22级 1班", college: "软件学院", sex: "男", email: "12123@qq.com", course: "数据结构与算法", name: "胡卫兵", age: "21", num: "12123456789"
        },
        {
            id: "015",
            class: "软件工程22级 1班", college: "软件学院", sex: "男", email: "12123@qq.com", course: "数据结构与算法", name: "胡卫兵", age: "21", num: "12123456789"
        },
        {
            id: "016",
            class: "软件工程22级 1班", college: "软件学院", sex: "男", email: "12123@qq.com", course: "数据结构与算法", name: "胡卫兵", age: "21", num: "12123456789"
        },
        {
            id: "017",
            class: "软件工程22级 1班", college: "软件学院", sex: "男", email: "12123@qq.com", course: "数据结构与算法", name: "胡卫兵", age: "21", num: "12123456789"
        },
        {
            id: "018",
            class: "软件工程22级 1班", college: "软件学院", sex: "男", email: "12123@qq.com", course: "数据结构与算法", name: "胡卫兵", age: "21", num: "12123456789"
        },
        {
            id: "019",
            class: "软件工程22级 1班", college: "软件学院", sex: "男", email: "12123@qq.com", course: "数据结构与算法", name: "胡卫兵", age: "21", num: "12123456789"
        },
        {
            id: "020",
            class: "软件工程22级 1班", college: "软件学院", sex: "男", email: "12123@qq.com", course: "数据结构与算法", name: "胡卫兵", age: "21", num: "12123456789"
        },
        {
            id: "021",
            class: "软件工程22级 1班", college: "软件学院", sex: "男", email: "12123@qq.com", course: "数据结构与算法", name: "胡卫兵", age: "21", num: "12123456789"
        },
        {
            id: "022",
            class: "软件工程22级 1班", college: "软件学院", sex: "男", email: "12123@qq.com", course: "数据结构与算法", name: "胡卫兵", age: "21", num: "12123456789"
        },
        {
            id: "023",
            class: "软件工程22级 1班", college: "软件学院", sex: "男", email: "12123@qq.com", course: "数据结构与算法", name: "胡卫兵", age: "21", num: "12123456789"
        },
        {
            id: "024",
            class: "软件工程22级 1班", college: "软件学院", sex: "男", email: "12123@qq.com", course: "数据结构与算法", name: "胡卫兵", age: "21", num: "12123456789"
        },
        {
            id: "025",
            class: "软件工程22级 1班", college: "软件学院", sex: "男", email: "12123@qq.com", course: "数据结构与算法", name: "胡卫兵", age: "21", num: "12123456789"
        },
        {
            id: "026",
            class: "软件工程22级 1班", college: "软件学院", sex: "男", email: "12123@qq.com", course: "数据结构与算法", name: "胡卫兵", age: "21", num: "12123456789"
        },


    ]
}

let record: TableData | null
const Home: React.FunctionComponent = function (params: any) {
    const [add, setAdd] = useState(false);
    const [data, setData] = useState(getDataSource());
    const onClick = useCallback(function (rowData?: TableData) {
        setAdd(true);
        if (rowData) {
            record = rowData
        }
    }, []);

    const onClose = useCallback(function () {

        setAdd(false);
        record = null;
    }, []);
    const onOk = useCallback(function () {
        setAdd(false);
        record = null;


        if (record) {
            const index = data.findIndex((row) => row.id === record?.id)
            data.splice(index, 1, record);
            setData(data)
        }
    }, []);

    return <>
        <Modal title={" "} width={"40vmax"} destroyOnClose onCancel={onClose} onOk={onOk} visible={add} okText={"提交"} cancelText={"取消"}>
            <Form >
                <div style={{ margin: "2% 0" }}>
                    <label htmlFor="name">*用户姓名：</label>
                    <Input name="name" type={"text"} placeholder="" value={record?.name}></Input>
                </div>
                <div style={{ margin: "2% 0" }}>
                    <label>*用户身份：</label>
                    <div style={{display:"flex",justifyContent:"space-around"}}>
                        <label htmlFor="stu">
                            <Input style={{width:"auto"}} name="iden" id="stu" type={"radio"} defaultChecked value={'1'}></Input>
                            学生</label>
                        <label htmlFor="teacher">
                            <Input style={{width:"auto"}} name="iden" id="teacher" type={"radio"} value={"2"}></Input>
                            教师</label>
                        <label htmlFor="pub">
                            <Input style={{width:"auto"}} name="iden" id="pub" type={"radio"} value={'3'}></Input>
                            社会人员</label>
                    </div>

                </div>
                <div style={{ margin: "2% 0" }}>
                    <label>*性别：</label>
                    <div style={{display:"flex",justifyContent:"space-around"}}>
                        <label htmlFor="man">
                            <Input style={{width:"auto"}} name="sex" id="man" type={"radio"} defaultChecked value={'1'}></Input>
                            男</label>
                        <label htmlFor="woman">
                            <Input style={{width:"auto"}} name="sex" id="woman" type={"radio"} value={"2"}></Input>
                            女</label>
                    </div>

                </div>

                <div style={{ margin: "2% 0" }}>
                    <label>*手机号码（可用于登录）</label>
                    <Input name="" type={"number"}  value={record?.num}></Input>
                </div>
                <div style={{ margin: "2% 0" }}>
                    <label>*邮箱（可用于登录）</label>
                    <Input name="" type={"email"}  value={record?.email}></Input>
                </div>
                <div style={{ margin: "2% 0" }}>
                    <label>学校</label>{/* 问题真多，数据结构纯属胡扯 */}
                    <Input name="" type={"text"}  value={record?.college}></Input>
                </div>
                <div style={{ margin: "2% 0" }}>
                    <label>学院</label>
                    <Input name="" type={"text"}  value={record?.college}></Input>
                </div>
                <div style={{ margin: "2% 0" }}>
                    <label>专业班级</label>
                    <Input name="" type={"text"}  value={record?.class}></Input>
                </div>

            </Form>
        </Modal>

        <div style={{ display: "flex", justifyContent: "space-around", alignItems: "center" }}>
            <div style={{ display: "flex" }}>
                <Button style={{ height: "100%", margin: "0 1vmax" }} type={"primary"} onClick={() => onClick()}>+单个添加</Button>
                <Button style={{ height: "100%", margin: "0 1vmax" }}  >+批量导入</Button>
                <Button style={{ height: "100%", margin: "0 1vmax", backgroundColor: "red" }} type={"ghost"} >删除</Button>

            </div>
            <Input.Search style={{ marginLeft: "7vmax" }} enterButton="搜索"></Input.Search>
        </div>
        <Tabs activeKey="1">
            <Tabs.TabPane key={"1"} tab="教师">
                <TableSet dataSource={data} openEditor={onClick}></TableSet>
            </Tabs.TabPane>
            <Tabs.TabPane key={"2"} tab="学生">

            </Tabs.TabPane>
            <Tabs.TabPane key={"3"} tab="社会人员">

            </Tabs.TabPane>
        </Tabs>
    </>

}

export default React.memo(Home)