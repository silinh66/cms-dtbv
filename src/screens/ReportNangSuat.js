import React, { Component } from "react";
import { Tabs } from "antd";
import { get, map } from "lodash";
import {
  AudioOutlined,
  DesktopOutlined,
  EditOutlined,
} from "@ant-design/icons";
import ReportCW from "./ReportCW";
import ReportAC from "./ReportAC";
import ReportVE from "./ReportVE";

const { TabPane } = Tabs;

const listTab = [
  {
    value: "report_cw",
    label: "Báo cáo nội dung",
    icon: <EditOutlined />,
  },
  {
    value: "report_ac",
    label: "Báo cáo âm thanh",
    icon: <AudioOutlined />,
  },
  {
    value: "report_ve",
    label: "Báo cáo video",
    icon: <DesktopOutlined />,
  },
];

export default class ReportNangSuat extends Component {
  constructor(props) {
    super(props);
    this.state = {
      valueOptions: get(listTab[0], "value"),
    };
  }

  _renderTab = (type) => {
    switch (type) {
      case "report_cw":
        return <ReportCW />;
      case "report_ac":
        return <ReportAC />;
      case "report_ve":
        return <ReportVE />;
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
