import axios from "axios";
import { isEmpty, map } from "lodash";
import React, { Component } from "react";
import { apiUrl } from "../constants.js/api";
import moment from "moment";
import Highlighter from "react-highlight-words";
import { DeleteFilled, SearchOutlined } from "@ant-design/icons";
import {
  Button,
  Col,
  DatePicker,
  Input,
  notification,
  Row,
  Space,
  Table,
} from "antd";
import { Resizable } from "react-resizable";
import confirm from "antd/lib/modal/confirm";
import { fixUserColumn } from "../utils/common";

const { RangePicker } = DatePicker;
const { Search } = Input;

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

export default class ActivityLog extends Component {
  constructor(props) {
    super(props);
    const { data } = props;
    const listUser = [];
    for (let i = 1; i < data.length; i++) {
      listUser.push({
        value: data[i][fixUserColumn.id],
        text: data[i][fixUserColumn.cms],
        nick: data[i][fixUserColumn.nickname],
      });
    }
    this.state = {
      activitySource: [],
      activityChangeUpdate: [],
      isLoding: false,
      filteredInfo: null,
      searchTextMain: "",
      sortedInfo: null,
      date: null,
      selectKeyTableNotAccept: [],
      selectRowsTableNotAccept: [],
      column: [
        {
          title: "STT",
          dataIndex: "stt",
          key: "stt",
          width: 50,
          // fixed: "left",
          defaultSortOrder: "ascend",
          sorter: (a, b) => a.stt - b.stt,
        },
        {
          title: "Ngày giờ",
          dataIndex: "activity_date",
          key: "activity_date",
          sorter: (a, b) =>
            moment(a.activity_date).unix() - moment(b.activity_date).unix(),
          ...this.getColumnFilterTimeProps("activity_date"),
          // ellipsis: {
          //   showTitle: false,
          // },
          width: 200,
          render: (value, item) => {
            return (
              <div>
                {!isEmpty(value)
                  ? moment(value).format("DD/MM/YYYY HH:mm:ss")
                  : ""}
              </div>
            );
          },
        },
        {
          title: "Hành động",
          dataIndex: "activity",
          // fixed: "left",
          key: "activity",
          sorter: (a, b) => a.activity.length - b.activity.length,
          // ellipsis: {
          //   showTitle: false,
          // },
          width: 700,
          ...this.getColumnSearchProps("activity"),
          render: (ratio_bill, item) => {
            return <div>{item.activity}</div>;
          },
        },
        {
          title: "Người thực hiện",
          dataIndex: "user_name",
          key: "user_name",
          sorter: (a, b) => a.user_name.length - b.user_name.length,
          // ellipsis: {
          //   showTitle: false,
          // },
          filters: listUser,
          filteredValue: null,
          onFilter: (value, record) => {
            return record.user_name.indexOf(value) === 0;
          },
          width: 160,
          render: (ratio_bill, item) => {
            return <div>{item.user_name}</div>;
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

  componentDidMount() {
    this._onRefreshData();
  }

  _onRefreshData = () => {
    this.setState({ isLoding: true });
    axios.get(`${apiUrl}/activity`).then((res) => {
      const mapDataSource = map(res.data.data, (item, index) => {
        return {
          ...item,
          stt: index + 1,
        };
      });
      this.setState({
        activitySource: mapDataSource,
        activityChangeUpdate: mapDataSource,
        selectKeyTableNotAccept: [],
        selectRowsTableNotAccept: [],
        isLoding: false,
      });
    });
  };

  onChangeRowTableNotAccept = (keys, rows) => {
    // console.log("rows", rows);
    this.setState({
      selectKeyTableNotAccept: keys,
      selectRowsTableNotAccept: rows,
    });
  };

  getColumnSearchProps = (dataIndex) => ({
    filterDropdown: ({
      setSelectedKeys,
      selectedKeys,
      confirm,
      clearFilters,
    }) => (
      <div style={{ padding: 8 }}>
        <Input
          ref={(node) => {
            this.searchInput = node;
          }}
          placeholder={`Tìm kiếm`}
          value={selectedKeys[0]}
          onChange={(e) =>
            setSelectedKeys(e.target.value ? [e.target.value] : [])
          }
          onPressEnter={() =>
            this.handleSearch(selectedKeys, confirm, dataIndex)
          }
          style={{ marginBottom: 8, display: "block" }}
        />
        <Space>
          <Button
            type="primary"
            onClick={() => this.handleSearch(selectedKeys, confirm, dataIndex)}
            icon={<SearchOutlined />}
            size="small"
            style={{ width: 90 }}
          >
            Search
          </Button>
          <Button
            onClick={() => this.handleReset(clearFilters)}
            size="small"
            style={{ width: 90 }}
          >
            Reset
          </Button>
          <Button
            type="link"
            size="small"
            onClick={() => {
              confirm({ closeDropdown: false });
              this.setState({
                searchText: selectedKeys[0],
                searchedColumn: dataIndex,
              });
            }}
          >
            Filter
          </Button>
        </Space>
      </div>
    ),
    filterIcon: (filtered) => (
      <SearchOutlined style={{ color: filtered ? "#ffffff" : undefined }} />
    ),
    filteredValue: null,
    onFilter: (value, record) => {
      return record[dataIndex]
        ? record[dataIndex]
            .toString()
            .toLowerCase()
            .includes(value.toLowerCase())
        : "";
    },
    onFilterDropdownVisibleChange: (visible) => {
      if (visible) {
        setTimeout(() => this.searchInput.select(), 100);
      }
    },
    render: (text) =>
      this.state.searchedColumn === dataIndex ? (
        <Highlighter
          highlightStyle={{ backgroundColor: "#ffc069", padding: 0 }}
          searchWords={[this.state.searchText]}
          autoEscape
          textToHighlight={text ? text.toString() : ""}
        />
      ) : (
        text
      ),
  });

  onDeleteActivity = () => {
    confirm({
      title: "Thông báo",
      content: "Bạn có chắc chắn muốn xoá activity đã chọn?",
      okCancel: () => {},
      onOk: () => {
        const { selectRowsTableNotAccept } = this.state;
        let body = [];
        for (let i = 0; i < selectRowsTableNotAccept.length; i++) {
          // console.log("selectRowsTableNotAccept", selectRowsTableNotAccept);
          body.push(selectRowsTableNotAccept[i].id);
        }
        const param = {
          data: {
            activity_id: body,
          },
        };
        axios.delete(`${apiUrl}/activity/check`, param).then((res) => {
          notification.success({
            message: "Xoá thành công",
            style: { backgroundColor: "#f5fff8" },
          });
          this.setState({
            selectRowsTableNotAccept: [],
            selectKeyTableNotAccept: [],
          });
          this._onRefreshData();
        });
      },
    });
  };

  onDelete = () => {
    if (isEmpty(this.state.date)) {
      notification.warning({
        message: "Thông báo",
        description: "Vui lòng chọn khoảng ngày muốn xoá",
      });
    } else {
      confirm({
        title: "Thông báo",
        content: `Bạn có chắc muốn xoá`,
        okCancel: () => {},
        onOk: () => {
          const body = {
            data: {
              activity_time: [
                moment(this.state.date[0]).subtract(1, "days"),
                moment(this.state.date[1]).add(1, "days"),
              ],
            },
          };
          axios.delete(`${apiUrl}/activity`, body).then((res) => {
            notification.success({
              message: "Xoá thành công",
              style: { backgroundColor: "#f5fff8" },
            });
            this.setState({ date: null });
            this._onRefreshData();
          });
        },
      });
    }
  };

  handleSearch = (selectedKeys, confirm, dataIndex) => {
    confirm();
    this.setState({
      searchText: selectedKeys[0],
      searchedColumn: dataIndex,
    });
  };

  getColumnFilterTimeProps = (dataIndex) => ({
    filterDropdown: ({
      setSelectedKeys,
      selectedKeys,
      confirm,
      clearFilters,
    }) => (
      <div style={{ padding: 8 }}>
        <div>
          <RangePicker
            style={{ marginBottom: 8 }}
            value={selectedKeys[0]}
            onChange={(date) => {
              setSelectedKeys(date ? [date] : []);
            }}
          />
        </div>

        <Space>
          <Button
            type="primary"
            onClick={() => {
              confirm();
            }}
            icon={<SearchOutlined />}
            size="small"
            style={{ width: 90, marginLeft: 10 }}
          >
            Search
          </Button>
          <Button
            onClick={() => clearFilters()}
            size="small"
            style={{ width: 90 }}
          >
            Reset
          </Button>
        </Space>
      </div>
    ),
    filterIcon: (filtered) => (
      <SearchOutlined style={{ color: filtered ? "#ffffff" : undefined }} />
    ),
    filteredValue: null,
    onFilter: (value, record) => {
      // console.log(
      //   "isTrue?",
      //   moment(record[dataIndex]) < moment(value[1]) &&
      //     moment(record[dataIndex]) > moment(value[0])
      // );
      return record[dataIndex]
        ? (moment(record[dataIndex]) < moment(value[1]) &&
            moment(record[dataIndex]) > moment(value[0])) ||
            moment(record.public_date).format("DDMMYYY") ===
              moment(value[0]).format("DDMMYYY")
        : "";
    },
    onFilterDropdownVisibleChange: (visible) => {
      if (visible) {
        // setTimeout(() => this.searchInput.select(), 100);
      }
    },
    render: (text) =>
      this.state.searchedColumn === dataIndex ? (
        <Highlighter
          highlightStyle={{ backgroundColor: "#ffc069", padding: 0 }}
          searchWords={[this.state.searchText]}
          autoEscape
          textToHighlight={text ? text.toString() : ""}
        />
      ) : (
        text
      ),
  });

  clearFilters = () => {
    this.setState({ filteredInfo: null });
  };

  clearSorters = () => {
    this.setState({ sortedInfo: null });
  };

  // clearAll = () => {
  //   this.setState({
  //     filteredInfo: null,
  //     sortedInfo: null,
  //   });
  // };

  clearAll = () => {
    this.setState({
      filteredInfo: null,
      sortedInfo: null,
      searchTextMain: "",
      activityChangeUpdate: this.state.activitySource,
    });
  };

  handleChange = (pagination, filters, sorter) => {
    // console.log("filters", filters);

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

  // _handleSearch = (searchText) => {
  //   const activitySearch = this.state.activitySource.filter(({ activity }) => {
  //     activity = activity.toLowerCase();
  //     searchText = searchText.toLowerCase();
  //     return activity.includes(searchText);
  //   });

  //   this.setState({
  //     activityChangeUpdate: activitySearch,
  //   });
  // };

  _handleSearch = (e) => {
    const activitySearch = this.state.activitySource.filter(({ activity }) => {
      activity = activity.toLowerCase();
      e.target.value = e.target.value.toLowerCase();
      return activity.includes(e.target.value);
    });
    this.setState({
      activityChangeUpdate: activitySearch,
      searchTextMain: e.target.value,
    });
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
    const {
      activitySource,
      activityChangeUpdate,
      column,
      sortedInfo,
      filteredInfo,
      isLoding,
      searchTextMain,
    } = this.state;
    const mapColumns = map(column, (col, index) => {
      switch (index) {
        case 0:
          return {
            ...col,
            sortOrder: !isEmpty(sortedInfo)
              ? sortedInfo.columnKey === "stt" && sortedInfo.order
              : null,
            onHeaderCell: (column) => ({
              width: column.width,
              onResize: this.handleResize(index),
            }),
          };
        case 1:
          return {
            ...col,
            filteredValue: !isEmpty(filteredInfo)
              ? filteredInfo.public_date
              : null,
            sortOrder: !isEmpty(sortedInfo)
              ? sortedInfo.columnKey === "activity_date" && sortedInfo.order
              : null,
            onHeaderCell: (column) => ({
              width: column.width,
              onResize: this.handleResize(index),
            }),
          };
        case 2:
          return {
            ...col,
            filteredValue: !isEmpty(filteredInfo)
              ? filteredInfo.full_title
              : null,
            sortOrder: !isEmpty(sortedInfo)
              ? sortedInfo.columnKey === "activity" && sortedInfo.order
              : null,
            onHeaderCell: (column) => ({
              width: column.width,
              onResize: this.handleResize(index),
            }),
          };
        case 3:
          return {
            ...col,
            filteredValue: !isEmpty(filteredInfo)
              ? filteredInfo.writer_name
              : null,
            sortOrder: !isEmpty(sortedInfo)
              ? sortedInfo.columnKey === "user_name" && sortedInfo.order
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
            alignItems: "center",
            marginBottom: 10,
          }}
        >
          {/* <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          > */}
          <Row gutter={12}>
            <Col span={10}>
              <div
                style={{
                  display: "flex",
                  marginLeft: 10,
                }}
              >
                {/* <Button type={"primary"} onClick={this.clearFilters}>
                Xoá bộ lọcs
              </Button>
              <Button
                type={"primary"}
                onClick={this.clearSorters}
                style={{ marginRight: 5, marginLeft: 5 }}
              >
                Clear sorters
              </Button> */}
                <Button
                  type={"primary"}
                  style={{
                    backgroundColor:
                      !isEmpty(filteredInfo) ||
                      !isEmpty(filteredInfo) ||
                      !isEmpty(searchTextMain)
                        ? "red"
                        : null,
                    borderColor:
                      !isEmpty(filteredInfo) ||
                      !isEmpty(filteredInfo) ||
                      !isEmpty(searchTextMain)
                        ? "red"
                        : null,
                  }}
                  onClick={this.clearAll}
                >
                  Xoá bộ lọc
                </Button>
              </div>
            </Col>
            <Col span={6}>
              <Input
                placeholder="Tìm kiếm"
                value={searchTextMain}
                onChange={this._handleSearch}
                style={{ width: 700, display: "flex" }}
              />
            </Col>
          </Row>
          {/* <div style={{ display: "flex", marginRight: 10 }}>
              <RangePicker
                style={{ marginBottom: 8 }}
                value={this.state.date}
                onChange={(date) => {
                  this.setState({ date });
                }}
              />
              <Button
                style={{
                  color: "white",
                  backgroundColor: "#238c31",
                  fontWeight: "bold",
                  borderRadius: 5,
                  borderColor: "#238c31",
                  marginLeft: 10,
                }}
                icon={<DeleteFilled />}
                type={"primary"}
                onClick={() => this.onDelete()}
              >
                Xoá
              </Button>
            </div> */}
        </div>
        {/* </div> */}
        {!isEmpty(this.state.selectRowsTableNotAccept) ? (
          <div
            style={{
              display: "flex",
              justifyContent: "flex-start",
              marginTop: 10,
              marginBottom: 10,
            }}
          >
            <Button
              style={{
                color: "white",
                backgroundColor: "#238c31",
                fontWeight: "bold",
                borderRadius: 5,
                borderColor: "#238c31",
                marginLeft: 10,
              }}
              icon={<DeleteFilled />}
              type={"primary"}
              onClick={() => {
                this.onDeleteActivity();
              }}
            >
              Xoá
            </Button>
          </div>
        ) : null}
        <Table
          // rowSelection={{
          //   selectedRowKeys: this.state.selectKeyTableNotAccept,
          //   onChange: this.onChangeRowTableNotAccept,
          // }}
          loading={isLoding}
          size="small"
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
          dataSource={activityChangeUpdate}
          columns={mapColumns}
          rowKey="id"
          pagination={
            activityChangeUpdate.length > 100
              ? {
                  // showSizeChanger: false,
                  total: activityChangeUpdate.length,
                }
              : false
          }
          sticky
        />
      </div>
    );
  }
}
