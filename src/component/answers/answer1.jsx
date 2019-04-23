import React ,{Fragment}from 'react';
import { Input ,Row, Col,Button} from 'antd';


class Answer1 extends React.Component{
    constructor(){
        super();
        this.state={
            name:[
                "课程1",
                "课程2",
                "课程3",
                "课程4",
                "课程5",
            ],
            course:[
                "",
                "",
                "",
                "",
                "",
            ],
        ave:"",
        sum:"",
        bigger60:[

        ]
    }
    }
    handleCourse=(e)=>{
        const index=e.target.getAttribute("data-index");
        const course=this.state.course;
        course[index]=parseInt(e.target.value);
        this.setState({
           course,
        })
    }
    calacuter=()=>{
        const course=this.state.course;
        const Length=course.length;
        let sum=0;
        let ave=0;
        let bigger60=[]
        for(let i=0;i<Length;i++){
            sum+=course[i];
            if(course[i]>60){
                bigger60.push(this.state.name[i]+"成绩为"+course[i]+"---")
            }
        }
        ave=sum/Length;
        this.setState({
            sum,
            ave,
            bigger60
        })
        console.log(sum,ave)
    }
    render(){
        return (<Fragment>
        <Row>
            {this.state.name.map((value,index)=>{
                return <Col span={4} key={index}><label >{value}</label>
                <Input value={this.state.course[index]} data-index={index} onChange={this.handleCourse}/></Col>
            })}
        </Row>
        <Button type='primary' onClick={this.calacuter}>计算</Button>
        <Row> <Col span={4}><label >平均分</label>
        <Input placeholder="平均分" value={this.state.ave} /></Col>
        <Col span={4}><label >总分</label>
        <Input placeholder="总分" value={this.state.sum} /></Col>
             <Col span={16}><label >成绩大于60</label><Input placeholder="成绩大于60" 
             value={this.state.bigger60}/></Col>
        </Row>
        </Fragment>)
    }
}
 export default Answer1;