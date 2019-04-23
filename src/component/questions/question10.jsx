import React, { Fragment } from 'react';
import { Card, Row, Col, Input, Button } from 'antd';

class Question10 extends React.Component {
  constructor() {
    super();
    this.state = {
      first: '',
      number: 10,
      last: 1,
    }
  }
  handleLast = (e) => {
    const last = e.target.value;
    this.setState({
      last
    })
  }
  handleNumber = (e) => {
    const number = e.target.value;
    this.setState({
      number
    })
  }
  calacuter = (number) => {
    let first;
    const last = this.state.last;
    if (number === 1) {
      first = last;
    } else {
      first = 2 * this.calacuter(number - 1);
    }
    return first
  }
  handleFirst = (number) => {
    let first = this.calacuter(number);
    this.setState({
      first
    })
  }
  render() {
    return <Fragment><Card
      title="Question10"
      style={{ width: '100%' }}
    >
      <p>每天拿一半的水，之后每天都拿前天剩下的一半，一共拿了10天，最后剩下一瓶水。试问第一天拿了多少水(请用递回)</p>
    </Card>
      <Row>
        <Col span={4}><label >最后一天水的数量</label>
          <Input placeholder="最后一天水的数量" value={this.state.last} onChange={this.handleLast} />
        </Col>
        <Col span={4}><label >拿的天数</label>
          <Input placeholder="拿的天数" value={this.state.number} onChange={this.handleNumber} />
        </Col>
        <Col span={4}><label >第一天的数量</label>
          <Input placeholder="第一天的数量" value={this.state.first} />
        </Col>
        <Col span={24}>
          <Button type='primary' onClick={()=>this.handleFirst(this.state.number)}>计算</Button>
        </Col>
      </Row>
    </Fragment>
  }
}
export default Question10