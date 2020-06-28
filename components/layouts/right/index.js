import React from 'react'
import ReactDom from 'react-dom'
import { Layout, Menu, Breadcrumb } from 'antd';
import { UserOutlined, LaptopOutlined, NotificationOutlined } from '@ant-design/icons';

const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;

class RRight extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      desc: '右侧内容区'
    }
  }
  render () {
    return (
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
    )
  }
}
export default RRight