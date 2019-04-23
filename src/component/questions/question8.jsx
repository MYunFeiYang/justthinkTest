import React ,{Fragment}from 'react';
import { Card ,Row,Col} from 'antd';

class Question8 extends React.Component {
  render() {
    return <Fragment><Card
      title="Question8"
      style={{ width: '100%' }}
    >
      <p>使用 SELECT INTO和INSERT INTO SELECT复制表与表之间的数据,  Table1 栏位为field1,filed2
</p>
    </Card>
     <Row>
     <Col span={12}>
     情况一 Table2已存在
      <pre>
      Insert into Table2(field1,field2) select value1,value2 from Table1
      </pre>
     </Col>
     <Col span={12}>
     情况二 Table2不存在
       <pre>
       SELECT field1, field2 into Table2 from Table1
       </pre>
     </Col>
   </Row>
   </Fragment>
  }
}
export default Question8