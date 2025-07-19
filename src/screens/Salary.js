import { RedEnvelopeOutlined, TransactionOutlined } from "@ant-design/icons";
import { Tabs } from "antd";
import { get, map } from "lodash";
import moment from "moment";
import React, { Component } from "react";
import SalaryCurrent from "./SalaryCurrent";
import SalaryOld from "./SalaryOld";

const { TabPane } = Tabs;

const listTab = [
  {
    value: "salary_current",
    label: "Bảng lương hiện tại",
    icon: <RedEnvelopeOutlined />,
  },
  {
    value: "salary_old",
    label: "Bảng lương cũ",
    icon: <TransactionOutlined />,
  },
];

export default class Salary extends Component {
  constructor(props) {
    super(props);
    this.state = {
      valueOptions: get(listTab[0], "value"),
    };
    this.currentRef = React.createRef();
    this.oldRef = React.createRef();
  }

  _onRefreshData = () => {
    console.log("Leu leu");
  };

  _onRefresh = () => {
    // if (this.state.valueOptions === "salary_current") {
    //   this.currentRef.current._onRefreshData();
    // } else
    if (this.state.valueOptions === "salary_old") {
      this.oldRef.current?._onRefreshData(
        moment().subtract(1, "months").format("MM")
      );
    }
  };

  onChangeSelectOption = (value) => {
    this.setState(
      {
        valueOptions: value,
      },
      () => {
        this._onRefresh();
      }
    );
  };

  _renderTab = (type) => {
    switch (type) {
      case "salary_current":
        return <SalaryCurrent data={this.props.data} ref={this.currentRef} />;
      case "salary_old":
        return <SalaryOld ref={this.oldRef} />;
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
