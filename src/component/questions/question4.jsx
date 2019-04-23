import React, { Fragment } from 'react';
import { Card } from 'antd';
import Answer4 from '../answers/answer4'

class Question4 extends React.Component {
  render() {
    return <Fragment><Card
      title="Question4"
      style={{ width: '100%' }}
    >
      <p>完成下拉式选单,且在选择了某一选项后要将值显示在The value = 之后, 如下</p>
    </Card>
    <Answer4></Answer4>
    </Fragment>
  }
}
export default Question4