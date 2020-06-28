import React from 'react'
import ReactDom from 'react-dom'
import { Layout, Menu } from 'antd';
import { UserOutlined, LaptopOutlined, NotificationOutlined } from '@ant-design/icons';
import PropTypes from 'prop-types';

const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;
class RLeft extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      desc: '左侧菜单'
    }
  }

  componentWillUnmount () {
    console.log(this.props)
  }
  render () {
    return (
      <Sider height={this.state.height} width={200} className="site-layout-background" ref="left">
        <Menu
          mode="inline"
          defaultSelectedKeys={["1"]}
          defaultOpenKeys={["sub1"]}
          style={{ height: "100%", borderRight: 0 }}
        >
          {
            this.props.menus.map(item => {
              return (
                <SubMenu key={item.menu_code} icon={<UserOutlined />} title={item.menu_name}>
                  {
                    this.state.menus.map(sonMenu => {
                      return <Menu.Item key={sonMenu.menu_code}>{sonMenu.menu_name}</Menu.Item>
                    })
                  }
                </SubMenu>
              )
            })
          }
        </Menu>
      </Sider>
    )
  }
}
RLeft.PropTypes = {
  menus: PropTypes.array
}
RLeft.defaultProps = {
  menus: []
}
export default RLeft