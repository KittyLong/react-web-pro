import { Layout, Menu, Breadcrumb } from "antd";
import {
  UserOutlined,
  LaptopOutlined,
  NotificationOutlined,
} from "@ant-design/icons";
import React from "react";
import axios from 'axios'
const path = require('path')
const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        height: 0,
        menus:[]
    };
  }
  componentDidMount () {
    // this.httpRequest.get('./list.json').then(res => {
    //   console.log(res)
    // })
    let height = document.body.offsetHeight;
    this.setState({height:height})
    axios.get('/data/list.json').then(res=>{
      this.setState({menus:res.data.menuList})
    })
  }
  render () {
    return (
      <Layout className="layout-container" ref="container">
        <Header className="header">
          <div className="logo" />
          <Menu theme="dark" mode="horizontal" defaultSelectedKeys={["2"]}>
            {
              this.state.menus.filter(item=>item.menu_level==='1').map(item=>{
                return (
                <Menu.Item>{item.menu_name}</Menu.Item>
                )
              })
            }
          </Menu>
        </Header>
        <Layout className="layout-content" ref="content">
          <Sider height={this.state.height} width={200} className="site-layout-background" ref="left">
            <Menu
              mode="inline"
              defaultSelectedKeys={["1"]}
              defaultOpenKeys={["sub1"]}
              style={{ height: "100%", borderRight: 0 }}
            >
              {
                this.state.menus.filter(item=>item.menu_level==='2').map(item=>{
                  return (
                  <SubMenu key={item.menu_code} icon={<UserOutlined />} title={item.menu_name}>
                {
                  this.state.menus.filter(menu=>menu.menu_level==='3'&&menu.menu_parent===item.menu_code).map(sonMenu=>{
                  return <Menu.Item key={sonMenu.menu_code}>{sonMenu.menu_name}</Menu.Item>
                  })
                }
                  </SubMenu>
                  )
                })
              }
            </Menu>
          </Sider>

          <Layout style={{ padding: "0 24px 24px" }} ref="right">
            <Breadcrumb style={{ margin: "16px 0" }}>
              <Breadcrumb.Item>Home</Breadcrumb.Item>
              <Breadcrumb.Item>List</Breadcrumb.Item>
              <Breadcrumb.Item>App</Breadcrumb.Item>
            </Breadcrumb>
            <Content
              className="site-layout-background"
              style={{
                padding: 24,
                margin: 0,
                minHeight: 280,
              }}
            >
              Content
            </Content>
          </Layout>
        </Layout>
      </Layout>
    );
  }
}
export default App;
