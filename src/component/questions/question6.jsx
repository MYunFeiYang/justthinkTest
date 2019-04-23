import React, { Fragment } from 'react';
import { Card, Row, Col } from 'antd';
import employee from '../../img/employee.png'
import member from '../../img/member.png'
import usergroup from '../../img/usergroup.png'
import result from '../../img/result.png'

class Question6 extends React.Component {
  render() {
    return <Fragment><Card
      title="Question6"
      style={{ width: '100%' }}
    >
      <p>3个Table (employee, usergroup, member)分别如下,请写出三个table join如结果的SQL 语句</p>
    </Card>
      <Row>
        <Col span={8}>
          <Row>
            <Col span={24}>
              <label>employee</label>
              <img src={employee} alt='employee' style={{ width: '100%' }}></img>
            </Col>
            <Col span={12}>
              <label>usergroup</label>
              <img src={usergroup} alt='usergroup' style={{ width: '100%' }}></img>
            </Col>
            <Col span={12}>
              <label>member</label>
              <img src={member} alt='member' style={{ width: '100%' }}></img>
            </Col>
            <Col span={24}>
              <label>result</label>
              <img src={result} alt='result' style={{ width: '100%' }}></img>
            </Col>
          </Row>

        </Col>
        <Col span={14}>
          <code style={{ display: 'block', padding: '50px' }}>
            select * <br />
            from (employee full join usergroup<br />
            on employee.ug_id=usergroup.ug_id)<br />
            full join member<br />
            on employee.emp_id=member.emp_id<br />
          </code>

        </Col>
      </Row>
    </Fragment>
  }
}
export default Question6