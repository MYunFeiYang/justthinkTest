import React, { Fragment } from 'react';
import { Card, Row, Col } from 'antd';
import question9 from '../../img/question9.png';
import answer9 from '../../img/answer9.png';
class Question9 extends React.Component {
  printOut = (json) => {
    if (json instanceof Array) {
      for (let i = 0; i < json.length; i++) {
        this.printOut(json[i]);
      }
    }
    else {
      for (let val in json) {
        if (typeof val === 'string') {
          if (val === "wopif_no") {
            console.log(json[val]);
          }
        } else {
          this.printOut(val);
        }
      }
    }
  }
  render() {
    return <Fragment><Card
      title="Question9"
      style={{ width: '100%' }}
    >
      <p>将下列JSON中的wopif_no的值打列出来</p>
    </Card>
      <Row>
        <Col span={12}>
          <img src={question9} alt={question9} style={{ width: '100%' }}></img>
        </Col>
        <Col span={12}>
          <img src={answer9} alt={answer9} style={{ width: '100%' }} />
        </Col>
      </Row>
    </Fragment >
  }
}
export default Question9