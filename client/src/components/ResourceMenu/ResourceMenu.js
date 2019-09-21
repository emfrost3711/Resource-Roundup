import React, { Component } from "react"
import { Menu, Icon } from 'antd';

const { SubMenu } = Menu;

class ResourceSider extends Component {
  // submenu keys of first level
  rootSubmenuKeys = ['HTML', 'CSS', 'JAVASCRIPT', ''];


  state = {
    openKeys: [],
  };



  onOpenChange = openKeys => {
    const latestOpenKey = openKeys.find(key => this.state.openKeys.indexOf(key) === -1);
    if (this.rootSubmenuKeys.indexOf(latestOpenKey) === -1) {
      this.setState({ openKeys });
    } else {
      this.setState({
        openKeys: latestOpenKey ? [latestOpenKey] : [],
      });
    }
  };



  render() {
    return (
      <><h2>Catagories</h2>
        <Menu
          mode="inline"
          openKeys={this.state.openKeys}
          onOpenChange={this.onOpenChange}
          style={{ height: '100%', borderRight: 0 }}
        >
          <SubMenu
            key="sub1"
            title={
              <span>
                <Icon type="mail" />
                <span>HTML</span>
              </span>
            }
            onTitleClick={this.loadHtml}
          >
            <Menu.Item key="1">Option 1</Menu.Item>
            <Menu.Item key="2">Option 2</Menu.Item>
            <Menu.Item key="3">Option 3</Menu.Item>
            <Menu.Item key="4">Option 4</Menu.Item>
          </SubMenu>

          <SubMenu
            key="sub2"
            title={
              <span>
                <Icon type="appstore" />
                <span>CSS</span>
              </span>
            }
          >
            <Menu.Item key="5">Option 5</Menu.Item>
            <Menu.Item key="6">Option 6</Menu.Item>
            <SubMenu key="sub3" title={
              <span>
                <Icon type="appstore" />
                <span>Bootstrap</span>
              </span>
            }>
              <Menu.Item key="7">Option 7</Menu.Item>
              <Menu.Item key="8">Option 8</Menu.Item>
            </SubMenu>
          </SubMenu>

          <SubMenu
            key="sub4"
            title={
              <span>
                <Icon type="setting" />
                <span>Javascript</span>
              </span>
            }
          >
            <Menu.Item key="9">Basics</Menu.Item>
            <Menu.Item key="15">JS Review</Menu.Item>
            <Menu.Item key="15">ES6</Menu.Item>
            <Menu.Item key="11">jQuery</Menu.Item>
            <Menu.Item key="12">AJAX / APIs</Menu.Item>
            <Menu.Item key="12">Timers</Menu.Item>
            <Menu.Item key="14">Constructors / Prototypes</Menu.Item>
            <Menu.Item key="10">String Methods</Menu.Item>
            <Menu.Item key="11">Array Methods</Menu.Item>
            <Menu.Item key="13">Quirks</Menu.Item>
            
           
          
          
           
            
         
          </SubMenu>
        </Menu></>
    );
  }
}

export default ResourceSider;
