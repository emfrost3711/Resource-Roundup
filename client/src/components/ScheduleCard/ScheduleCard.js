import React, {Component} from "react";
import { Card, Calendar, Badge, Drawer } from 'antd';
import "./ScheduleCard.css";


function getListData(value) {
  let listData;
  switch (value.date()) {
    case 8:
      listData = [
        { type: 'warning', content: 'This is warning event.' },
        { type: 'success', content: 'This is usual event.' },
      ];
      break;
    case 10:
      listData = [
        { type: 'warning', content: 'This is warning event.' },
        { type: 'success', content: 'This is usual event.' },
        { type: 'error', content: 'This is error event.' },
      ];
      break;
    case 15:
      listData = [
        { type: 'warning', content: 'This is warning event' },
        { type: 'success', content: 'This is very long usual event。。....' },
        { type: 'error', content: 'This is error event 1.' },
        { type: 'error', content: 'This is error event 2.' },
        { type: 'error', content: 'This is error event 3.' },
        { type: 'error', content: 'This is error event 4.' },
      ];
      break;
    default:
  }
  return listData || [];
}

function dateCellRender(value) {
  const listData = getListData(value);
  return (
    <div className="events">
      {listData.map(item => (
        
          <Badge status={item.type} />
        
      ))}
    </div>
  );
}

function getMonthData(value) {
  if (value.month() === 8) {
    return 1394;
  }
}

function monthCellRender(value) {
  const num = getMonthData(value);
  return num ? (
    <div className="notes-month">
      <section>{num}</section>
      <span>Backlog number</span>
    </div>
  ) : null;
}

const tabList = [
  {
    key: 'Todos',
    tab: 'Todos',
  },
  {
    key: 'Calendar',
    tab: 'Calendar',
  },
];

// const contentList = {
//   Todos: <p>content1</p>,
//   Calendar: <Calendar onclick={this.showDrawer} dateCellRender={dateCellRender} monthCellRender={monthCellRender} />
// };



class TabsCard extends Component {
  state = {
    key: 'Todos',
    visible: false
  }

  showDrawer = () => {
    this.setState({
      visible: true,
    });
  }

  onClose = () => {
    this.setState({
      visible: false,
    });
  }

  onTabChange = (key, type) => {
    console.log(key, type);
    this.setState({ [type]: key });
  };

  render() {
    return (
      <div>
        <Card
          style={{ width: '50%', height: "auto" }}
          title="Organization Station"
          tabList={tabList}
          activeTabKey={this.state.key}
          onTabChange={key => {
            this.onTabChange(key, 'key');
          }}
        >
          {this.state.key == "Todos" ? (<p>content1</p>)
          : (<Calendar onclick={this.showDrawer} dateCellRender={dateCellRender} monthCellRender={monthCellRender}>
            </Calendar>)}
        </Card>
        
      </div>
    );
  }
}

export default TabsCard;