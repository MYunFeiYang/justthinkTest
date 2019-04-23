import React, { Component} from 'react';
import { BrowserRouter as Router, Route, Link,Switch } from 'react-router-dom'
import './style/App.css';
import Question1 from './component/questions/question1';
import Question2 from './component/questions/question2';
import Question3 from './component/questions/question3';
import Question4 from './component/questions/question4';
import Question5 from './component/questions/question5';
import Question6 from './component/questions/question6';
import Question7 from './component/questions/question7';
import Question8 from './component/questions/question8';
import Question9 from './component/questions/question9';
import Question10 from './component/questions/question10';

import { Menu,Row,Col } from 'antd';

class App extends Component {
  constructor() {
    super();
    this.state = {
      menuItem: [
        'Question1', 'Question2', 'Question3', 'Question4', 'Question5',
        'Question6', 'Question7', 'Question8', 'Question9', 'Question10',
      ]
    }
  }
  render() {
    return (<Router> 
      <Row>
        <Col span={3}>
      <Menu
        style={{ width: '100%', textAlign: 'center'}}
        defaultSelectedKeys={['0']}
        defaultOpenKeys={['sub1']}
        mode='inline'
        theme='dark'
      >
          {this.state.menuItem.map((value,index)=>{
            return <Menu.Item key={index}>
            <Link to={`/${value}/`}>{value}</Link>
          </Menu.Item>
          })}

      </Menu>
      </Col>
      <Col span={21}>
      <Switch>
      <Route path="/" exact component={Question1}></Route>
      <Route path="/Question1" exact component={Question1}></Route>
      <Route path="/Question2" exact component={Question2}></Route>
      <Route path="/Question3" exact component={Question3}></Route>
      <Route path="/Question4" exact component={Question4}></Route>
      <Route path="/Question5" exact component={Question5}></Route>
      <Route path="/Question6" exact component={Question6}></Route>
      <Route path="/Question7" exact component={Question7}></Route>
      <Route path="/Question8" exact component={Question8}></Route>
      <Route path="/Question9" exact component={Question9}></Route>
      <Route path="/Question10" exact component={Question10}></Route>
      </Switch>
      </Col>
      </Row>
      </Router>);
  }
}
export default App;
