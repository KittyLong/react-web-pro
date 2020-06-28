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
  render () {
    return (
      <Sider height={this.props.height} width={200} className="site-layout-background" ref="left">
        <Menu
          mode="inline"
          defaultSelectedKeys={["1"]}
          defaultOpenKeys={["sub1"]}
          style={{ height: "100%", borderRight: 0 }}
        >
          {
            this.props.menus.filter(item1 => item1.menu_level === '2').map(item => {
              return (
                <SubMenu key={item.menu_code} icon={<UserOutlined />} title={item.menu_name}>
                  {
                    this.props.menus.filter(item2 => item2.menu_level === '3' && item2.parent_code === item.menu_code).map(sonMenu => {
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
RLeft.propTypes = {
  menus: PropTypes.array
}
RLeft.defaultProps = {
  menus: []
}
export default RLeft