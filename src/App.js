import { Layout, Menu, Breadcrumb } from "antd";
import {
  UserOutlined,
  LaptopOutlined,
  NotificationOutlined,
} from "@ant-design/icons";
import React from "react";
import axios from 'axios'
import RHeader from '@components/layouts/header'
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
  componentDidMount () {
    let height = document.body.offsetHeight;
    this.setState({ height: height })
    axios.get('/data/list.json').then(res => {
      this.setState({ menus: res.data.menuList })
    })
  }
  render () {
    return (
     
    );
  }
}
export default App;
