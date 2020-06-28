import { Layout, Menu, Breadcrumb } from "antd";
import {
  UserOutlined,
  LaptopOutlined,
  NotificationOutlined,
} from "@ant-design/icons";
import { Router, Route, Link } from 'react-router'
import React from "react";
import axios from 'axios'
import RHeader from '@components/layouts/header'
import RLeft from '@components/layouts/left'
import RRight from '@components/layouts/right'

const path = require('path')
const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      style: {},
      menus: []
    };
  }
  componentWillMount () {
    axios.get('/data/list.json').then(res => {
      this.setState({ menus: res.data.menuList })
    })
  };
  componentDidMount () {
    let height = document.body.offsetHeight - 64;
    this.setState({ style: { height: height } })
  };
  render () {
    return (
      <Router>
        <Layout>
          <RHeader height={this.state.height} menus={this.state.menus.filter(item => item.menu_level === '1')}></RHeader>
          <Layout style={this.state.style}>
            <RLeft menus={this.state.menus.filter(item => item.menu_level !== '1')}></RLeft>
            <RRight></RRight>
          </Layout>
        </Layout>
      </Router>
    );
  }
}
export default App;
