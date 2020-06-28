import { Layout, Menu, Breadcrumb } from 'antd';
import { UserOutlined, LaptopOutlined, NotificationOutlined } from '@ant-design/icons';
import React from 'react'
const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;


class RHeader extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      desc: '菜单头组件'
    }
  }
  render () {
    return (
      <Header className="header">
        <div className="logo" />
        <Menu theme="dark" mode="horizontal" defaultSelectedKeys={["2"]}>
          {
            this.props.menus.map(item => {
              return (
                <Menu.Item key={item.menu_code}>{item.menu_name}</Menu.Item>
              )
            })
          }
        </Menu>
      </Header>
    )
  }
}
export default RHeader