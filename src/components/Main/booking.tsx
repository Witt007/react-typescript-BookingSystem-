import React, {useCallback, useEffect, useRef, useState} from "react";
import {Button, DatePicker, Input, Modal, Table} from "antd";
import ExpDetail from './ExpDetail'
import {data,RowDataType,ExpDetailDataType,target} from "../../data/mock"
const img = require('../../assets/images/booking.png');
const addForm = require('../../assets/images/addForm.png');


const date = new Date();

const getRand = () => Math.random() * 255;
let setOpenExpDetail: React.Dispatch<boolean>
let detailData: ExpDetailDataType

function OnCellClicked(e: React.MouseEvent) {
    const data = e.currentTarget.getAttribute("data-detail");
    if (data)
        detailData = JSON.parse(data)
    setOpenExpDetail?.(true)
}

function cellContext({dayLen: num, name, detailContent}: target): React.ReactNode {
    const height = `calc(${(num * 2.5)}vmax + ${num*3}px)`
    return (<div data-detail={JSON.stringify(detailContent)} onClick={OnCellClicked} style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        zIndex: 50,
        top: "100%",
        left: 0,
        position: "absolute",
        cursor: "pointer",
        width: "100%",
        height,
        backgroundColor: `rgba(${getRand()},${getRand()},${getRand()},0.3)`
    }}>
        {
            name
        }
    </div>)
}

function getCell(day: number): any {
    if (date.getDay() === day) {
        const borderColor = "rgb(0 153 255)"
        return {
            style: {
                borderLeftColor: borderColor,
                borderRightColor: borderColor,
                borderLeftStyle: "solid",
                borderWidth: "3px"
            }
        }
    }

    return {
        style: {
            borderWidth: "3px"
        }
    }
}

const columns: Exclude<Parameters<typeof Table>[0]['columns'], undefined>[number][] = [
    {
        title: "",
        dataIndex: "clock", key: Math.random(),
        onCell(obj) {

            return {
                style: {
                    border: "none", height: "2vh", paddingRight: "1rem"
                }
            }
        },
        render(v, record) {
            const row = record as RowDataType
            return <span style={{position: "absolute", left: 0, zIndex: 1, top: "60%"}}
                         id={row.clock}>{row.clock}</span>
        }
    },
    {
        title: "星期一 13", key: Math.random(),
        dataIndex: "monday", onHeaderCell() {
            let backgroundColor
            if (date.getDay() === 1)
                backgroundColor = "rgb(0 153 255)"
            return {
                style: {
                    backgroundColor
                }
            }
        },
        render(v, record) {
            const row: RowDataType = record as RowDataType;
            if (row.monday) {
                return cellContext(row.monday)
            } else return ""
        },
        onCell(obj) {
            return getCell(1)
        },
    },
    {
        title: "星期二 14", key: Math.random(),
        dataIndex: "tuesday",
        render(v, record) {
            const row: RowDataType = record as RowDataType;
            if (row.tuesday) {
                return cellContext(row.tuesday)
            } else return ""
        }, onHeaderCell() {
            let backgroundColor
            if (date.getDay() === 2)
                backgroundColor = "rgb(0 153 255)"
            return {
                style: {
                    backgroundColor
                }
            }
        },
        onCell(obj) {
            return getCell(2)
        },
    },
    {
        title: "星期三 15", key: Math.random(),
        dataIndex: "wednesday", onHeaderCell() {
            let backgroundColor
            if (date.getDay() === 3)
                backgroundColor = "rgb(0 153 255)"
            return {
                style: {
                    backgroundColor
                }
            }
        },
        render(v, record) {
            const row: RowDataType = record as RowDataType;
            if (row.wednesday) {
                return cellContext(row.wednesday)
            } else return ""
        },
        onCell(obj) {
            return getCell(3)
        },
    },
    {
        title: "星期四 16",
        dataIndex: "thursday", key: Math.random(),
        render(v, record) {
            const row: RowDataType = record as RowDataType;
            if (row.thursday) {
                return cellContext(row.thursday)
            } else return ""
        }, onHeaderCell() {
            let backgroundColor
            if (date.getDay() === 4)
                backgroundColor = "rgb(0 153 255)"
            return {
                style: {
                    backgroundColor
                }
            }
        },
        onCell(obj) {
            return getCell(4)
        },
    },
    {
        title: "星期五 17", key: Math.random(),
        dataIndex: "friday",
        render(v, record) {
            const row: RowDataType = record as RowDataType;
            if (row.friday) {
                return cellContext(row.friday)
            } else return ""
        }, onHeaderCell() {
            let backgroundColor
            if (date.getDay() === 5)
                backgroundColor = "rgb(0 153 255)"
            return {
                style: {
                    backgroundColor
                }
            }
        },
        onCell(obj) {
            return getCell(5)
        },
    },
    {
        title: "星期六 18", key: Math.random(),
        dataIndex: "saturday", onHeaderCell() {
            let backgroundColor
            if (date.getDay() === 6)
                backgroundColor = "rgb(0 153 255)"
            return {
                style: {
                    backgroundColor
                }
            }
        },
        render(v, record) {
            const row: RowDataType = record as RowDataType;
            if (row.saturday) {
                return cellContext(row.saturday)
            } else return ""
        },
        onCell(obj) {
            return getCell(6)
        },
    },
    {
        title: "星期日 19", key: Math.random(),
        dataIndex: "sunday", onHeaderCell() {
            let backgroundColor
            if (date.getDay() === 7)
                backgroundColor = "rgb(0 153 255)"
            return {
                style: {
                    backgroundColor
                }
            }
        },
        render(v, record) {
            const row: RowDataType = record as RowDataType;
            if (row.sunday) {
                return cellContext(row.sunday)
            } else return ""
        },
        onCell(obj) {
            return getCell(1)
        },
    },
]

const timeLineStyle:React.CSSProperties={width: "100%", height: "3px", backgroundColor: "rgb(0 153 255)", position: "absolute",zIndex:2,top:`calc(20.5vh + ${date.getHours()*2+date.getMinutes()*0.1}vh)`,margin:"0"}
const Home: React.FunctionComponent = function (params: any) {
    const [add, setAdd] = useState(false);
    const [openExp, setOpenExpl] = useState(false);
    setOpenExpDetail = setOpenExpl;
    const [dataSource, setDataSource] = useState<RowDataType[]>(data);
    const onClick = useCallback(function () {
        setAdd(true);
    }, []);
    const onClose = useCallback(function () {
        setAdd(false)
    }, []);
    const onok = useCallback(function () {
debugger
        setAdd(false);
        //@ts-ignore
        const title = form.current?.title.value
        const startD = new Date(form.current?.startD.value)
        const endtD = new Date(form.current?.endD.value);
        const day = startD.getDay();
        let hours =endtD.getHours()-startD.getHours()// Math.floor((endtD.getTime() - startD.getTime()) / (3600 * 1000));
        const startH = startD.getHours() + ":00";

        if ( hours <0) hours = 24 + hours;
        const target = dataSource.find((v) => {
            let math = startH;
            if (math.at(0) != '0' && math.at(1) == ":") math = "0" + math
            return v.clock == math
        })
        if (!target) debugger
        let prop = {
            value: {
                dayLen: hours,
                name: title
            }, enumerable: true
        }

        switch (day) {
            case 1:
                if (target?.['monday'])Object.assign(target?.['monday'],prop);
                else
                Object.defineProperty(target, "monday", prop);
                break;

            case 2: if (target?.['tuesday'])Object.assign(target?.['tuesday'],prop);
            else
                Object.defineProperty(target, "tuesday", prop);
                break;

            case 3: if (target?.['wednesday'])Object.assign(target?.['wednesday'],prop);
                else
                Object.defineProperty(target, "wednesday", prop);
                break;

            case 4: if (target?.['thursday'])Object.assign(target?.['thursday'],prop);
                else
                Object.defineProperty(target, "thursday", prop);
                break;

            case 5: if (target?.['friday'])Object.assign(target?.['friday'],prop);
                else
                Object.defineProperty(target, "friday", prop);
                break

            case 6: if (target?.['saturday'])Object.assign(target?.['saturday'],prop);
                else
                Object.defineProperty(target, "saturday", prop);
                break;

            case 7: if (target?.['sunday'])Object.assign(target?.['sunday'],prop);
                else
                Object.defineProperty(target, "sunday", prop);
                break;

            default:
                break;
        }

        setDataSource(dataSource)
    }, []);
    const form = useRef<HTMLFormElement>(null);

    if (openExp) {
        return <ExpDetail data={detailData}></ExpDetail>
    }


    return <>
        <Modal width={"70vmax"} onCancel={onClose} onOk={onok} visible={add} okText={"提交"} cancelText={"取消"}>
            <form ref={form}>
                <label>*实验标题</label>

                <Input name="title" type={"text"}></Input>
                <label>*实验内容</label>
                <Input.TextArea></Input.TextArea>
                <label>*实验时间</label>
                <div>
                    从<DatePicker showTime name="startD"></DatePicker>到<DatePicker showTime name="endD"></DatePicker>
                </div>
                <label>*参与人员</label>
                <Input type={"text"}></Input>

                <label>指导老师</label>
                <Input type={"text"}></Input>
                <label>*相关知识</label>
                <Input.TextArea></Input.TextArea>
                <Input type={"file"}></Input>
            </form>

        </Modal>
        <div style={{display: "flex", justifyContent: "space-between"}}>
            <div>
                <Button style={{marginRight: "3vmax"}} type="primary" onClick={onClick}>+预约实验</Button>
                {
                    `${date.getFullYear()}年${date.getDay() + 1}月`
                }
            </div>
            <div>
                <Button>上一周</Button>
                <Button>下一周</Button>
                <Button type="primary">本周</Button>
            </div>
        </div>

        <div  style={{height: "100%",position:"relative"}}>
            <Table  onRow={(obj) => {
                return {
                    style: {
                        // pointerEvents: "none"
                    },
                    onClick: (e) => {
                        e.stopPropagation();
                        document.querySelectorAll('.ant-table-tbody > tr.ant-table-row:hover > td, .ant-table-tbody > tr > td.ant-table-cell-row-hover')
                            .forEach(function (e) {
                                //@ts-ignore
                                e.style.backgroundColor = "white"
                            })
                    }
                }
            }} rowKey={() => {
                return Math.random()
            }} pagination={false} columns={columns} dataSource={dataSource} bordered></Table>
            <div style={timeLineStyle}>
                <div style={{borderRadius:"50%",backgroundColor:"rgb(0 153 255)",width:"14px",height:"14px",marginLeft:"-7px",marginTop:"-5px"}}></div>
            </div>
        </div>


    </>

}

export default React.memo(Home)