import React from 'react';
import { Card } from 'antd';
import Answer1 from '../answers/answer1'
   
class Question1 extends React.Component{
    render(){
        return <Card
        title="Question1"
        style={{ width: '100%' }}
      >
        <p>设计一个程序, 使用者输入的5门课程的成绩后在页面上显示总成绩和平均分, 并列出大于60的成绩</p>
        <Answer1></Answer1>
      </Card>;
    }
}
export default Question1