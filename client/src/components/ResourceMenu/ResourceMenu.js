import React, {Component} from "react"
import { Menu, Icon, AutoComplete } from 'antd';

const { SubMenu } = Menu;
const dataSource = ['html','css' ,'javascript'];

class ResourceSider extends Component {
  // submenu keys of first level
  rootSubmenuKeys = ['HTML', 'CSS', 'JAVASCRIPT'];


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
         <AutoComplete
      style={{ width: 200 }}
      dataSource={dataSource}
      placeholder="Find a subject"
      filterOption={(inputValue, option) =>
        option.props.children.toUpperCase().indexOf(inputValue.toUpperCase()) !== -1
      }
    />
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
          onTitleClick= {() => {this.props.handleCategoryClick("html")}}
        >
        </SubMenu>
        <SubMenu
          key="sub2"
          title={
            <span>
              <Icon type="appstore" />
              <span>CSS</span>
            </span>
          }
          onTitleClick= {() => {this.props.handleCategoryClick("css")}}
        >
          <Menu.Item key="basicCss" onClick= {() => {this.props.handleCategoryClick("basicCss")}} >Basic</Menu.Item>
          <Menu.Item key="advancedCSS" onClick= {() => {this.props.handleCategoryClick("advancedCss")}}>Advanced</Menu.Item>
          <Menu.Item key="bootstrap" onClick= {() => {this.props.handleCategoryClick("bootstrap")}}>Bootstrap</Menu.Item>
         
        </SubMenu>
        <SubMenu
          key="javascript"
          title={
            <span>
              <Icon type="setting" />
              <span>Javascript</span>
            </span>
          }
          onTitleClick= {() => {this.props.handleCategoryClick("javascript")}}
        >

            <Menu.Item key="basicJs" onClick= {() => {this.props.handleCategoryClick("basicJs")}}>Basics</Menu.Item>
            <Menu.Item key="jsReview" onClick= {() => {this.props.handleCategoryClick("jsReview")}}>JS Review</Menu.Item>
            <Menu.Item key="es6" onClick= {() => {this.props.handleCategoryClick("es6")}}>ES6</Menu.Item>
            <Menu.Item key="jQuery" onClick= {() => {this.props.handleCategoryClick("jQuery")}}>jQuery</Menu.Item>
            <Menu.Item key="ajaxAPI" onClick= {() => {this.props.handleCategoryClick("ajaxAPI")}}>AJAX / APIs</Menu.Item>
            <Menu.Item key="timers" onClick= {() => {this.props.handleCategoryClick("timers")}}>Timers</Menu.Item>
            <Menu.Item key="constructorsPrototypes" onClick= {() => {this.props.handleCategoryClick("constructorsPrototypes")}}>Constructors / Prototypes</Menu.Item>
            <Menu.Item key="stringMethods" onClick= {() => {this.props.handleCategoryClick("stringMethod")}}>String Methods</Menu.Item>
            <Menu.Item key="arrayMethods" onClick= {() => {this.props.handleCategoryClick("arrayMethod")}}>Array Methods</Menu.Item>
            <Menu.Item key="quirks" onClick= {() => {this.props.handleCategoryClick("quirks")}}>Quirks</Menu.Item>

        </SubMenu>
      </Menu></>
    );
  }
}

export default ResourceSider;
