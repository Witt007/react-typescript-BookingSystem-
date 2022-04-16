import React, {useState} from "react";
import {ExpDetailDataType,IsDelay,Status} from "../../data/mock"

const last = require('../../assets/images/expDetail/last.png')
const last1 = require('../../assets/images/expDetail/laast1.png');
const last2 = require('../../assets/images/expDetail/last2.png');
const last3 = require('../../assets/images/expDetail/last3.png');
const download = require('../../assets/images/expDetail/download.png');

type Props = {
    data?: ExpDetailDataType
}
const marginB = "0.5vmax";
const imgStyle: React.CSSProperties = {height: "1rem", width: "1rem", marginRight: '1rem'}
const WrapStyle: React.CSSProperties = {display: "flex", alignItems: "center"}
const ContentStyle: React.CSSProperties = {border: "2px solid rgb(229 229 229)", margin: "0 " + marginB}
const ExpDetail: React.FunctionComponent<Props> = function (props: Props) {
    let {data} = props;
    if (!data) data = {
        ExpContent: "",
        ExpPerson: {leader: "", member: "", teacher: ""},
        ExpStat: {
            endTime: "",
            isDelay: IsDelay.否, startTime: "",
            status: Status.已取消
        }, relevant: "", download: [], title: ""
    }
    return <>
        <h1>实验标题：{data.title}</h1>
        <div>
            <div style={WrapStyle}>
                <img style={imgStyle} src={last3}/>
                <span style={{marginBottom: marginB, fontWeight: "bolder"}}>实验状态</span>
            </div>
            <div style={ContentStyle}>
                <div style={{display: "flex"}}>
                    <label>当前状态：</label>
                    <div style={{
                        display: "inline-block",
                        borderRadius: "25%",
                        backgroundColor: "rgb(215,255,210)"
                    }}>{data.ExpStat.status}</div>
                </div>
                <div>
                    <label>开始时间：</label>
                    <span>{data.ExpStat.startTime}</span>
                </div>
                <div>
                    <label>结束时间：</label>
                    <span>{data.ExpStat.endTime}</span>
                </div>
                <div>
                    <label>是否延时：</label>
                    <span>{data.ExpStat.isDelay}</span>
                </div>
            </div>
        </div>
        <div>
            <div style={WrapStyle}>
                <img style={imgStyle} src={last2}/>
                <span style={{marginBottom: marginB, fontWeight: "bolder"}}>实验人员</span>
            </div>
            <div style={ContentStyle}>
                <div>
                    <label>组长：</label>
                    <span>{data.ExpPerson.leader}</span>
                </div>
                <div>
                    <label>成员：</label>
                    <span>{data.ExpPerson.member}</span>
                </div>
                <div>
                    <label>指导老师：</label>
                    <span>{data.ExpPerson.teacher}</span>
                </div>
            </div>
        </div>
        <div>
            <div style={WrapStyle}>
                <img style={imgStyle} src={last1}/>
                <span style={{marginBottom: marginB, fontWeight: "bolder"}}>实验内容</span>
            </div>
            <div style={ContentStyle}>
                <p>{data.ExpContent}</p>
            </div>
        </div>
        <div>
            <div style={WrapStyle}>
                <img style={imgStyle} src={last}/>
                <span style={{marginBottom: marginB, fontWeight: "bolder"}}>相关知识</span>
            </div>
            <div style={ContentStyle}>
                <p>{data.relevant}</p>
            </div>
        </div>
        <div>
            <div style={WrapStyle}>
                <img style={imgStyle} src={download}/>
                <span style={{marginBottom: marginB, fontWeight: "bolder"}}>资料下载</span>
            </div>
            <div style={{margin: "0 " + marginB, display: "flex", justifyContent: "space-around"}}>
                {data.download.map(v => <a key={Math.random()} style={{color: "rgb(14, 108, 156)", border: "none"}}>{v}</a>)}
            </div>
        </div>

    </>
}
export default ExpDetail