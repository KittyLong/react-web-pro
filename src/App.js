import { Layout, Menu, Breadcrumb } from "antd";
import {
  UserOutlined,
  LaptopOutlined,
  NotificationOutlined,
} from "@ant-design/icons";
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
      height: 0,
      menus: []
    };
  }
  componentWillMount () {
    axios.get('/data/list.json').then(res => {
      this.setState({ menus: res.data.menuList })
    })
  };
  componentDidMount () {
    let height = document.body.offsetHeight;
    this.setState({ height: height })

  };
  render () {
    return (
      <Layout>
        <RHeader menus={this.state.menus.filter(item => item.menu_level === '1')}></RHeader>
        <Layout>
          <RLeft menus={this.state.menus.filter(item => item.menu_level !== '1')}></RLeft>
          <RRight></RRight>
        </Layout>
      </Layout>
    );
  }
}
export default App;
