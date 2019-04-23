import React, { Fragment } from 'react';
import { Card, Row, Col, Button } from 'antd';
import question5 from '../../img/question5.jpg'

class Question5 extends React.Component {
  constructor(){
    super();
    this.state={
      data:[]
    }
  }
  runAsync1 = () => {
    var f = new Promise(function (resolve, reject) {
      setTimeout(function () {
        resolve('数据1');
      }, 2000);
    });
    return f;
  };
  runAsync2 = () => {
    var f = new Promise(function (resolve, reject) {
      setTimeout(function () {
        resolve('数据2');
      }, 3000);
    });
    return f;
  };
  runAsync3 = () => {
    var f = new Promise(function (resolve, reject) {
      setTimeout(function () {
        resolve('数据3');
      }, 1000);
    });
    return f;
  };
  addData=(value)=>{
    let data=this.state.data;
    data.push(value);
    this.setState({
      data
    })
  }
  run =()=>{
    let f1=this.runAsync1;
    let f2=this.runAsync2;
    let f3=this.runAsync3;
    f1()
    .then((value)=>{
      this.addData(value)
    }).then(f2()
      .then((value)=>{
        this.addData(value)
      }).then(f3()
      .then((value)=>{
        this.addData(value)
      }))) 
  }
  render() {
    return <Fragment>
      <Card
        title="Question5"
        style={{ width: '100%' }}
      >
        <p>VUE有三个Method，请在mounted时将三个method 结果放到this.data变数中</p>
      </Card>
      <Row>
        <Col span={8}>
          <img src={question5} alt={question5}></img>
        </Col>
        <Col span={16}>
          <Button type='primary' onClick={this.run}>react实现</Button>
        </Col>
        {this.state.data.map((value,index)=>{
          return <p key={index}>{value}</p>
        })}
      </Row>
    </Fragment>
  }
}
export default Question5