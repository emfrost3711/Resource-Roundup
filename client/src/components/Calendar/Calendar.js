import React, {Component} from "react";
import { Calendar, Badge,  } from 'antd';
import "./Calendar.css";


class EventCalendar extends Component {
state = {

}

componentDidMount() {
    this.dateCellRender();
    this.monthCellRender();
}

 getListData(value) {
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
      ];
      break;
    default:
  }
  console.log(listData)
  return listData || [];
  
};

dateCellRender(value) {
  const listData = this.getListData(value);
  return (
    <ul className="events">
      {listData.map(item => (
        <li key={item.content}>
          <Badge status={item.type} text={item.content} />
        </li>
      ))}
    </ul>
  );
}

getMonthData(value) {
  if (value.month() === 8) {
    return 1394;
  }
}

monthCellRender(value) {
  const num = this.getMonthData(value);
  return num ? (
    <div className="notes-month">
      <section>{num}</section>
      <span>Backlog number</span>
    </div>
  ) : null;
}

render () {
    return (
        <>
        <Calendar dateCellRender={this.dateCellRender} monthCellRender={this.monthCellRender} />
        </>
    )
};
}

export default EventCalendar;