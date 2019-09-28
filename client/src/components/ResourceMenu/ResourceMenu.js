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
          key="html"
          title={<span>HTML</span>}
          onTitleClick= {() => {this.props.handleCategoryClick("html")}}
        >
        </SubMenu>
        <SubMenu
          key="css"
          title={
            
              <span>CSS</span>
            
          }
          onTitleClick= {() => {this.props.handleCategoryClick("css")}}
        >
        </SubMenu>
        <SubMenu
          key="javascript"
          title={<span>Javascript</span>}
          onTitleClick= {() => {this.props.handleCategoryClick("javascript")}}
        />
        <SubMenu
          key="node"
          title={<span>Node.js</span>}
          onTitleClick= {() => {this.props.handleCategoryClick("node")}}
        />
         <SubMenu
          key="github"
          title={<span>Github</span>}
          onTitleClick= {() => {this.props.handleCategoryClick("github")}}
        />
         <SubMenu
          key="express"
          title={<span>Express</span>}
          onTitleClick= {() => {this.props.handleCategoryClick("express")}}
        />
         <SubMenu
          key="heroku"
          title={<span>Heroku</span>}
          onTitleClick= {() => {this.props.handleCategoryClick("heroku")}}
        />
         <SubMenu
          key="mongoDb"
          title={<span>MongoDB</span>}
          onTitleClick= {() => {this.props.handleCategoryClick("mongodb")}}
        />
        <SubMenu
          key="reviewSession"
          title={<span>Review Session</span>}
          onTitleClick= {() => {this.props.handleCategoryClick("reviewSession")}}
        />
         <SubMenu
          key="mysql"
          title={<span>mySQL</span>}
          onTitleClick= {() => {this.props.handleCategoryClick("mysql")}}
        />

       
      </Menu></>
    );
  }
}

export default ResourceSider;
