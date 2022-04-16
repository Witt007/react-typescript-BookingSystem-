import R from 'react'
import { Button, Checkbox, Table } from 'antd'
const RC = R.PureComponent;
type TableProps = Parameters<typeof Table>[0];
export interface TableSetProps extends TableProps {
    openEditor: (data?: TableData) => void
    dataSource: TableData[]
}
type TableSetStates = {
    dataSource: Array<TableData>
}
export type TableData = {
    id: string
    name: string
    num?: string
    email?: string
    sex?: string
    age?: string
    college: string
    class: string
    course: string
}
/** 
@autor Witt
 */
export class TableSet extends RC<TableSetProps, TableSetStates> {
    state: TableSetStates
    columns: Exclude<TableProps["columns"], undefined>[number][]
    constructor(props: TableSetProps) {
        super(props);
        const ctx = this;
        this.columns = [
            {
                title: <Checkbox></Checkbox>,
                dataIndex: "check",

                render(value, record,i): R.ReactNode {
                
                    return <Checkbox></Checkbox>
                }
                ,key:Math.random()
            },
            {
                title: "id",
                dataIndex: "id",key:Math.random()

            },
            {
                title: "姓名",
                dataIndex: "name",key:Math.random()

            },
            {
                title: "手机号",
                dataIndex: "num",key:Math.random()

            },
            {
                title: "邮箱",
                dataIndex: "email",key:Math.random()

            },
            {
                title: "性别",
                dataIndex: "sex",key:Math.random()

            },
            {
                title: "年龄",
                dataIndex: "age",key:Math.random()

            },
            {
                title: "学院",
                dataIndex: "college",key:Math.random()

            },
            {
                title: "专业班级",
                dataIndex: "class",key:Math.random()

            },
            {
                title: "教学科目",
                dataIndex: "course",key:Math.random(),

            },
            {
                title: "操作",
                dataIndex: "handle",key:Math.random(),
//@ts-ignore
                render(value, record:TableData): R.RNode {
                    return <>
                        <Button data-record={JSON.stringify(record)} onClick={ctx.openEditor.bind(ctx)}>编辑</Button>
                        <Button data-id={record.id} onClick={ctx.onDelete.bind(ctx)}>删除</Button>
                    </>
                },
                
            },
        ]
        this.state = {
            dataSource: props.dataSource
        }
    }

    finishEditing(): void {

    }

    openEditor(evt: R.MouseEvent<HTMLElement, MouseEvent>): void {
        const data=evt.currentTarget.getAttribute('data-record');
        if(data){
            this.props.openEditor(JSON.parse(data))
        }
    }

    onDelete = (evt: R.MouseEvent) => {

    }

    updateDataSource() {
        this.setState({ dataSource: [] })
    }

    render() {
        return <Table rowKey={() => {return Math.random()}} pagination={{ defaultPageSize: 8 }} columns={this.columns} dataSource={this.state.dataSource}>

        </Table>
    }
}