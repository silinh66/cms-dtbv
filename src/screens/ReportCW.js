import { FilterFilled } from "@ant-design/icons";
import { Button, DatePicker, notification, Table } from "antd";
import axios from "axios";
import { debounce, get, isEmpty, map, toInteger } from "lodash";
import React, { Component } from "react";
import { Resizable } from "react-resizable";
import { apiUrl } from "../constants.js/api";
import { formatNumber, monthFormat, salaryIndexDropdown } from "../utils/common";

const ResizableTitle = (props) => {
  const { onResize, width, ...restProps } = props;

  if (!width) {
    return <th {...restProps} />;
  }

  return (
    <Resizable
      width={width}
      height={0}
      handle={
        <span
          className="react-resizable-handle"
          onClick={(e) => {
            e.stopPropagation();
          }}
        />
      }
      onResize={onResize}
      draggableOpts={{ enableUserSelectHack: false }}
    >
      <th {...restProps} />
    </Resizable>
  );
};

export default class ReportCW extends Component {
  constructor(props) {
    super(props);
    this.state = {
      month: null,
      isLoading: false,
      dataSource: [],
      filteredInfo: null,
      sortedInfo: null,
      column: [
        {
          title: "ID",
          dataIndex: "id",
          key: "stt",
          width: 70,
          defaultSortOrder: "ascend",
          sorter: (a, b) => {
            return +a.id - +b.id;
          },
        },
        {
          title: "Họ tên",
          dataIndex: "name",
          key: "name",
          width: 70,
          defaultSortOrder: "ascend",
          sorter: (a, b) => a.name.length - b.name.length,
        },
        {
          title: "Status",
          dataIndex: "status",
          key: "status",
          filters: [
            {
              text: "On",
              value: "On",
            },
            {
              text: "Off",
              value: "Off",
            },
          ],
          filteredValue: null,
          onFilter: (value, record) => {
            return record.status === value;
          },
          width: 70,
          defaultSortOrder: "ascend",
          sorter: (a, b) => a.status.length - b.status.length,
        },
        {
          title: "Type",
          dataIndex: "type",
          key: "type",
          filters: [
            {
              text: "CTV",
              value: "CTV",
            },
            {
              text: "Fulltime",
              value: "Fulltime",
            },
            {
              text: "Partime",
              value: "Partime",
            },
          ],
          filteredValue: null,
          onFilter: (value, record) => {
            return record.type === value;
          },
          width: 70,
          defaultSortOrder: "ascend",
          sorter: (a, b) => a.type.length - b.type.length,
        },
        {
          title: `Content ${salaryIndexDropdown[1]?.text}`,
          dataIndex: "count_content_2k",
          key: "count_content_2k",
          width: 70,
          defaultSortOrder: "ascend",
          sorter: (a, b) => a.count_content_2k - b.count_content_2k,
        },
        {
          title: `Content ${salaryIndexDropdown[0]?.text}`,
          dataIndex: "count_content_1k",
          key: "count_content_1k",
          width: 70,
          defaultSortOrder: "ascend",
          sorter: (a, b) => a.count_content_1k - b.count_content_1k,
        },
        {
          title: "Tổng sản phẩm",
          dataIndex: "sum_count_content",
          key: "sum_count_content",
          width: 70,
          defaultSortOrder: "ascend",
          sorter: (a, b) => a.sum_count_content - b.sum_count_content,
        },
        {
          title: "View",
          dataIndex: "views_count",
          key: "views_count",
          width: 70,
          defaultSortOrder: "ascend",
          sorter: (a, b) => a.views_count - b.views_count,
          render: (item, record) => {
            return <div>{formatNumber(item)}</div>;
          },
        },
        {
          title: "View/Sản phẩm",
          dataIndex: "views_per_content",
          key: "views_per_content",
          width: 70,
          defaultSortOrder: "ascend",
          sorter: (a, b) => a.views_per_content - b.views_per_content,
          render: (item, record) => {
            return <div>{formatNumber(item)}</div>;
          },
        },
      ],
    };
  }

  components = {
    header: {
      cell: ResizableTitle,
    },
  };

  onChangeMonth = (value) => {
    this.setState({ month: value });
  };

  getDataReportCW = (monthYear) => {
    axios.get(`${apiUrl}/reportCW?monthYear=${monthYear}`).then((res) => {
      // console.log("res", res);
      this.setState({
        dataSource: get(res, "data.data"),
      });
    });
  };

  onFilterData = () => {
    if (isEmpty(this.state.month)) {
      notification.info({ message: "Vui lòng chọn tháng" });
    } else {
      const monthYear = this.state.month.format("YYYYMM");
      // console.log("monthYear", monthYear);
      this.getDataReportCW(monthYear);
    }
  };

  clearAll = () => {
    this.setState({
      filteredInfo: null,
      sortedInfo: null,
    });
  };

  handleChange = (pagination, filters, sorter) => {
    // console.log("filters", filters);
    // console.log("sorter", sorter);
    this.setState(
      {
        filteredInfo: filters,
        sortedInfo: sorter,
      },
      () => {
        const newColumn = map(this.state.column, (item, index) => {
          if (index === 1) {
            return {
              ...item,
              filteredValue: this.state.filteredInfo.content_code,
            };
          } else {
            return {
              ...item,
            };
          }
        });
        this.setState({ column: newColumn });
      }
    );
  };

  handleResize =
    (index) =>
    (e, { size }) => {
      this.setState(({ column }) => {
        const nextColumns = [...column];
        nextColumns[index] = {
          ...nextColumns[index],
          width: size.width,
        };
        return { column: nextColumns };
      });
    };

  render() {
    const { month, column, isLoading, dataSource, sortedInfo, filteredInfo } =
      this.state;
    const mapColumns = map(column, (col, index) => {
      switch (index) {
        case 0:
          return {
            ...col,
            sortOrder: !isEmpty(sortedInfo)
              ? sortedInfo.columnKey === "id" && sortedInfo.order
              : null,
            onHeaderCell: (column) => ({
              width: column.width,
              onResize: this.handleResize(index),
            }),
          };
        case 1:
          return {
            ...col,
            sortOrder: !isEmpty(sortedInfo)
              ? sortedInfo.columnKey === "name" && sortedInfo.order
              : null,
            onHeaderCell: (column) => ({
              width: column.width,
              onResize: this.handleResize(index),
            }),
          };
        case 2:
          return {
            ...col,
            filteredValue: !isEmpty(filteredInfo) ? filteredInfo.status : null,
            sortOrder: !isEmpty(sortedInfo)
              ? sortedInfo.columnKey === "status" && sortedInfo.order
              : null,
            onHeaderCell: (column) => ({
              width: column.width,
              onResize: this.handleResize(index),
            }),
          };
        case 3:
          return {
            ...col,
            filteredValue: !isEmpty(filteredInfo) ? filteredInfo.type : null,
            sortOrder: !isEmpty(sortedInfo)
              ? sortedInfo.columnKey === "type" && sortedInfo.order
              : null,
            onHeaderCell: (column) => ({
              width: column.width,
              onResize: this.handleResize(index),
            }),
          };
        case 4:
          return {
            ...col,
            sortOrder: !isEmpty(sortedInfo)
              ? sortedInfo.columnKey === "count_content_2k" && sortedInfo.order
              : null,
            onHeaderCell: (column) => ({
              width: column.width,
              onResize: this.handleResize(index),
            }),
          };
        case 5:
          return {
            ...col,
            sortOrder: !isEmpty(sortedInfo)
              ? sortedInfo.columnKey === "count_content_1k" && sortedInfo.order
              : null,
            onHeaderCell: (column) => ({
              width: column.width,
              onResize: this.handleResize(index),
            }),
          };
        case 6:
          return {
            ...col,
            sortOrder: !isEmpty(sortedInfo)
              ? sortedInfo.columnKey === "sum_count_content" && sortedInfo.order
              : null,
            onHeaderCell: (column) => ({
              width: column.width,
              onResize: this.handleResize(index),
            }),
          };
        case 7:
          return {
            ...col,
            sortOrder: !isEmpty(sortedInfo)
              ? sortedInfo.columnKey === "views_count" && sortedInfo.order
              : null,
            onHeaderCell: (column) => ({
              width: column.width,
              onResize: this.handleResize(index),
            }),
          };
        case 8:
          return {
            ...col,
            sortOrder: !isEmpty(sortedInfo)
              ? sortedInfo.columnKey === "views_per_content" && sortedInfo.order
              : null,
            onHeaderCell: (column) => ({
              width: column.width,
              onResize: this.handleResize(index),
            }),
          };
        default:
          return {
            ...col,
            onHeaderCell: (column) => ({
              width: column.width,
              onResize: this.handleResize(index),
            }),
          };
      }
    });
    return (
      <div>
        <div
          style={{
            display: "flex",
            marginLeft: 10,
          }}
        >
          <Button
            type={"primary"}
            style={{
              height: 36,
              marginLeft: 10,
              marginRight: 500,
              borderRadius: 3,
              backgroundColor:
                !isEmpty(filteredInfo) || !isEmpty(sortedInfo) ? "red" : null,
              borderColor:
                !isEmpty(filteredInfo) || !isEmpty(sortedInfo) ? "red" : null,
            }}
            onClick={this.clearAll}
          >
            Xoá bộ lọc
          </Button>
          <DatePicker
            // ref={this.dateRef}
            picker="month"
            inputReadOnly={true}
            style={{ height: 36, width: "30%", marginBottom: 10 }}
            value={month}
            format={monthFormat}
            placeholder="Chọn tháng"
            onChange={this.onChangeMonth}
          />

          <Button
            type={"primary"}
            style={{ height: 36, marginLeft: 10, borderRadius: 3 }}
            icon={<FilterFilled />}
            className="buttonPrimary"
            onClick={debounce(() => this.onFilterData())}
          >
            LẤY DỮ LIỆU
          </Button>
        </div>
        <Table
          loading={isLoading}
          size="middle"
          bordered
          onChange={this.handleChange}
          components={this.components}
          style={{ marginBottom: 15 }}
          rowClassName={(record, index) => {
            if (index % 2 !== 0) {
              return "rowBackgroundColor";
            }
          }}
          // scroll={{ x: 1500, y: "100%" }}
          scroll={{ x: 1500, y: 400 }}
          dataSource={dataSource}
          columns={mapColumns}
          rowKey="id"
          // pagination={
          //   salary.length > 10
          //     ? {
          //         // showSizeChanger: false,
          //         total: salary.length,
          //       }
          //     : false
          // }
          pagination={false}
          sticky
        />
      </div>
    );
  }
}
