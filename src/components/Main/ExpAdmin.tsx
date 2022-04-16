import React, {useCallback, useEffect, useMemo, useState} from "react";
import {Button, Col, DatePicker, Image, Input, Modal, Row, Table} from "antd";
import {RowDataType} from '../../data/mock'
import {ExpDetailDataType} from '../../data/mock'

const img = require('../../assets/images/expAdmin.png');

type Prop = {
    data: RowDataType[]
}
const Home: React.FunctionComponent<Prop> = function (props: Prop) {
    let data: any[] = []
    props.data.forEach(function (source) {
        for (const [k, v] of Object.entries(source)) {
            if (k != "clock") {
                //@ts-ignore
                const detail: ExpDetailDataType = v.detailContent as ExpDetailDataType|undefined;
                if (!detail)continue;
                const obj: any = {
                    title: detail.title,
                    status: detail.ExpStat?.status,
                    expT: detail.ExpStat?.startTime + "~" + detail.ExpStat?.endTime,
                    member: detail.ExpPerson?.member,
                    booking: new Date().toLocaleDateString(),
                    teacher: detail.ExpPerson?.teacher
                };
                data.push(obj)
            }
        }
    })
    const [dataSource, setDataSource] = useState<any>(data)



    const columns = useMemo(() => [

        {
            title: "实验名称",
            dataIndex: "title"

        },
        {
            title: "当前状态",
            dataIndex: "status"

        }, {
            title: "实验人员",
            dataIndex: "member"

        }, {
            title: "实验时间",
            dataIndex: "expT"

        }, {
            title: "预约时间",
            dataIndex: "booking"

        }, {
            title: "指导老师",
            dataIndex: "teacher"

        },

        {
            title: "操作",
            dataIndex: "handle",
            render(value: any, record: ExpDetailDataType): React.ReactNode {
                return <>
                    <Button>查看</Button>
                    <Button>删除</Button>
                </>
            },

        },
    ], [])

    return <>
        <Row style={{paddingBottom:"1rem"}}>
            <Col span={12}>
                从 <DatePicker style={{margin:"0 1rem"}}></DatePicker>  到  <DatePicker style={{margin:"0 1rem"}}></DatePicker>
            </Col>
            <Col span={12}>
                <Input.Search enterButton="搜索"></Input.Search>

            </Col>
        </Row>
        <Row>
            <Col span={24}>
                <Table rowKey={() => {
                    return Math.random()
                }} pagination={{defaultPageSize: 8}} columns={columns} dataSource={dataSource}>

                </Table>
            </Col>
        </Row>
    </>

}

export default React.memo(Home)