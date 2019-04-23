import React from 'react';
import { Card, Row, Col, Button } from 'antd';

class Question2 extends React.Component {
  constructor() {
    super();
    this.state = {
      data: [
        `{"班级":"甲班","姓名":"小明","分数":60}`,
        `{"班级":"乙班","姓名":"小王","分数":59}`,
        `{"班级":"甲班","姓名":"小陈","分数":70}`,
        `{"班级":"甲班","姓名":"小可","分数":90}`,
        `{"班级":"乙班","姓名":"小黄","分数":40}`,
        `{"班级":"丙班","姓名":"小林","分数":99}`,
        `{"班级":"甲班","姓名":"小雨","分数":20}`,
        `{"班级":"乙班","姓名":"小丁","分数":59}`,
        `{"班级":"甲班","姓名":"小许","分数":55}`,
        `{"班级":"乙班","姓名":"小叶","分数":60}`
      ],
      result: [],
    }
  }
  studentFliter = () => {
    let data = this.state.data;
    let result = data.filter((value) => {
      return JSON.parse(value)['班级'] === "甲班"
    });
    for (let i = 0; i < result.length; i++) {
      let dataItem=JSON.parse(result[i]);
      if (dataItem['分数'] >= 60) {
        dataItem['及格'] = "Pass"
        delete dataItem['分数']
      } else {
        dataItem['及格'] = "Fail"
        delete dataItem['分数']
      }
      result[i]=JSON.stringify(dataItem);
    }
   this.setState({
     result
   })
   
  }
  render() {
    return <Card
      title="Question2"
      style={{ width: '100%' }}
    >
      <p>在下列JSON 找出所有 甲班的学生, 并加上 "及格"的属性, Value 为分数大于等于60为Pass ,
        否则为 Fail , 并删除分数资料, 最后将符合的资料输出至console</p>
      <Row>
        <Col span={10}>
          <pre>[</pre>
          {this.state.data.map((value, index) => {
            return (<pre key={index}>
              {value}
            </pre>)
          })}
          <pre>]</pre>
        </Col>
        <Col span={4}>
        <Button type='primary' onClick={this.studentFliter}>查找</Button>
        </Col>
        <Col span={10}>
        <pre>[</pre>
          {this.state.result.map((value, index) => {
            return (<pre key={index}>
              {value}
            </pre>)
          })}
          <pre>]</pre></Col>
      </Row>
    </Card>;
  }
}
export default Question2