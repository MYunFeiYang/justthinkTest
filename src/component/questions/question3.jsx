import React, { Fragment } from 'react';
import { Card } from 'antd';
import Answer3 from '../answers/answer3';

class Question3 extends React.Component {
  render() {
    return <Fragment><Card
      title="Question3"
      style={{ width: '100%' }}
    >
      <p>请在div 加入style效果, 请使用SCSS语句
div class为main  有1px  的实线框, 背景色为black, 宽度为100 px ,高度为25px , 鼠标Hover时背景为白色
div class 为 children 字体颜色为red，字体大小为15px, 高度100%，水平置中,鼠标Hover时字体为black
HTML 如下:
</p>

    </Card>
    <Answer3></Answer3>
    </Fragment>
  }
}
export default Question3