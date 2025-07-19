import {
  AccountBookOutlined,
  BarChartOutlined,
  SyncOutlined,
} from "@ant-design/icons";
import { Tabs } from "antd";
import { get, map } from "lodash";
import React, { Component } from "react";
import Report from "./Report";
import Salary from "./Salary";
import Sync from "./Sync";

const { TabPane } = Tabs;

const listTab = [
  {
    value: "salary",
    label: "Báo cáo lương",
    icon: <AccountBookOutlined />,
  },
  {
    value: "report",
    label: "Báo cáo chi tiết",
    icon: <BarChartOutlined />,
  },
  // {
  //   value: "sync",
  //   label: "Sync Data",
  //   icon: <SyncOutlined />,
  // },
];

export default class AdminManagement extends Component {
  constructor(props) {
    super(props);
    this.state = {
      valueOptions: get(listTab[0], "value"),
    };
  }

  _onRefreshData = () => {
    console.log("Leu leu");
  };

  onChangeSelectOption = (value) => {
    this.setState({
      valueOptions: value,
    });
  };

  _renderTab = (type) => {
    switch (type) {
      case "salary":
        return <Salary data={this.props.data} />;
      case "report":
        return <Report />;
      // case "sync":
      //   return <Sync dataExcel={this.props.data} />;
      default:
        return null;
    }
  };

  render() {
    const { valueOptions } = this.state;
    return (
      <div>
        <Tabs
          onChange={this.onChangeSelectOption}
          activeKey={get(valueOptions)}
          style={{
            justifyContent: "center",
            display: "flex",
            alignSelf: "center",
            color: "#238c31",
          }}
          size="large"
          type="card"
        >
          {map(listTab, (item) => {
            return (
              <TabPane
                tab={
                  <span>
                    {item.icon}
                    {item.label}
                  </span>
                }
                key={item.value}
              >
                {this._renderTab(item.value)}
              </TabPane>
            );
          })}
        </Tabs>
      </div>
    );
  }
}
