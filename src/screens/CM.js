import {
  Button,
  Input,
  notification,
  Select,
  Table,
  Space,
  Form,
  Modal,
  DatePicker,
} from "antd";
import axios from "axios";
import Highlighter from "react-highlight-words";
import { debounce, filter, find, get, includes, isEmpty, map } from "lodash";
import moment from "moment";
import React, { Component } from "react";
import { Resizable } from "react-resizable";
import { apiUrl } from "../constants.js/api";
import {
  CheckOutlined,
  CheckSquareFilled,
  CloseCircleOutlined,
  CloseOutlined,
  DeleteFilled,
  PlusOutlined,
  SearchOutlined,
} from "@ant-design/icons";
import confirm from "antd/lib/modal/confirm";
import {
  dateFormat,
  fixUserColumn,
  salaryIndexDropdown,
} from "../utils/common";

const { Option } = Select;
const { Search } = Input;
const { RangePicker } = DatePicker;

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

export default class Admin extends Component {
  constructor(props) {
    super(props);
    const { data } = props;
    const { listContentCode } = props;
    const listWriterName = [];
    const listComposerName = [];
    const listEditorName = [];
    for (let i = 0; i < data.length; i++) {
      if (data[i][fixUserColumn.cw] == 1) {
        listWriterName.push({
          value: data[i][fixUserColumn.cms],
          text: data[i][fixUserColumn.cms],
          nick: data[i][fixUserColumn.nickname],
        });
      }
      if (data[i][fixUserColumn.ac] == 1) {
        listComposerName.push({
          value: data[i][fixUserColumn.cms],
          text: data[i][fixUserColumn.cms],
          nick: data[i][fixUserColumn.nickname],
        });
      }
      if (data[i][fixUserColumn.ve] == 1) {
        listEditorName.push({
          value: data[i][fixUserColumn.cms],
          text: data[i][fixUserColumn.cms],
        });
      }
    }
    this.state = {
      chuDeInput: "",
      dataSource: [],
      dataChangeUpdate: [],
      newDataTest: [],
      editingKey: "",
      isShowModal: false,
      filteredInfo: null,
      searchTextMain: "",
      sortedInfo: null,
      activityChangeUpdate: [],
      activity: [],
      isLoding: false,
      listContentCode,
      originData: [],
      salary_index: null,
      content_code: null,
      column: [
        {
          title: "STT",
          dataIndex: "id",
          key: "id",
          width: 70,
          fixed: "left",
          defaultSortOrder: "ascend",
          sorter: (a, b) => a.stt - b.stt,
          render(text, record) {
            return {
              props: {
                style: { background: record.stt % 2 === 0 && "#fbfbfb" },
              },
              children: <div>{text}</div>,
            };
          },
        },
        {
          title: "Tên kênh",
          dataIndex: "content_code",
          key: "content_code",
          fixed: "left",
          filteredValue: null,
          filters: listContentCode,
          onFilter: (value, record) => {
            return record.content_code.indexOf(value) === 0;
          },
          sorter: (a, b) => a.content_code.length - b.content_code.length,
          ellipsis: {
            showTitle: false,
          },
          width: 160,
          render: (ratio_bill, item) => {
            const editable = this._isEditing(item);
            return {
              props: {
                style: { background: item.stt % 2 === 0 && "#fbfbfb" },
              },
              children: editable ? (
                <Select
                  disabled={!editable}
                  style={{ width: "100%" }}
                  value={item.content_code}
                  onChange={(ev) => this.onChangeSelectContentCode(ev, item)}
                >
                  {map(listContentCode, (item, index) => {
                    return (
                      <Option
                        className="erpOption"
                        value={item.text}
                        key={index}
                      >
                        {item.text}
                      </Option>
                    );
                  })}
                </Select>
              ) : (
                <div>{item.content_code}</div>
              ),
            };
          },
        },
        // {
        //   title: "Độ dài nội dung",
        //   dataIndex: "salary_index",
        //   key: "salary_index",
        //   filteredValue: null,
        //   fixed: "left",
        //   filters: salaryIndexDropdown,
        //   onFilter: (value, record) => {
        //     return record.salary_index === value;
        //   },
        //   sorter: (a, b) => a.salary_index - b.salary_index,
        //   ellipsis: {
        //     showTitle: false,
        //   },
        //   width: 160,
        //   render: (ratio_bill, item) => {
        //     const editable = this._isEditing(item);
        //     return {
        //       props: {
        //         style: { background: item.stt % 2 === 0 && "#fbfbfb" },
        //       },
        //       children: editable ? (
        //         <Select
        //           disabled={!editable}
        //           style={{ width: "100%" }}
        //           value={item.salary_index}
        //           onChange={(ev) => this.onChangeSelectSalaryIndex(ev, item)}
        //         >
        //           {map(salaryIndexDropdown, (item, index) => {
        //             return (
        //               <Option
        //                 className="erpOption"
        //                 value={item.value}
        //                 key={index}
        //               >
        //                 {item.text}
        //               </Option>
        //             );
        //           })}
        //         </Select>
        //       ) : (
        //         <div>
        //           {
        //             find(
        //               salaryIndexDropdown,
        //               (o) => o.value === item.salary_index
        //             ).text
        //           }
        //         </div>
        //       ),
        //     };
        //   },
        // },
        {
          title: "Tiêu đề",
          dataIndex: "full_title",
          fixed: "left",
          key: "full_title",
          sorter: (a, b) => a.full_title.length - b.full_title.length,
          ellipsis: {
            showTitle: false,
          },
          width: 300,
          ...this.getColumnSearchProps("full_title"),
          render: (ratio_bill, item) => {
            const editable = this._isEditing(item);
            return {
              props: {
                style: { background: item.stt % 2 === 0 && "#fbfbfb" },
              },
              children: editable ? (
                <Input
                  style={{ width: "100%" }}
                  disabled={!editable}
                  value={item.full_title}
                  onChange={(ev) => this.onChangeChuDe(ev.target.value, item)}
                />
              ) : (
                <div>{item.full_title}</div>
              ),
            };
          },
        },
        {
          title: "Nội dung thô",
          dataIndex: "content_raw",
          key: "content_raw",
          ellipsis: {
            showTitle: false,
          },
          width: 150,
          sorter: (a, b) => a.content_raw.length - b.content_raw.length,
          render: (ratio_bill, item) => {
            const editable = this._isEditing(item);
            return editable ? (
              <Input
                style={{ width: "100%" }}
                disabled={!editable}
                value={item.content_raw}
                onChange={(ev) =>
                  this.onChangeLinkContent(ev.target.value, item)
                }
              />
            ) : (
              <a target="_blank" href={item.content_raw}>
                {item.content_raw}
              </a>
            );
          },
        },
        {
          title: "Người viết bài",
          dataIndex: "writer_name",
          key: "writer_name",
          sorter: (a, b) => a.writer_name.length - b.writer_name.length,
          ellipsis: {
            showTitle: false,
          },
          filters: listWriterName,
          filteredValue: null,
          onFilter: (value, record) => {
            return record.writer_name.indexOf(value) === 0;
          },
          width: 150,
          render: (ratio_bill, item) => {
            const editable = this._isEditing(item);
            return editable ? (
              <Select
                disabled={!editable}
                style={{ width: "100%" }}
                value={[item.writer_name, item.writer_code, item.writer_nick]}
                onChange={(ev) => this.onChangeSelect(ev, item)}
              >
                {map(listWriterName, (item, index) => {
                  return (
                    <Option
                      className="erpOption"
                      value={[item.text, item.value, item.nick]}
                      key={index}
                    >
                      {item.text}
                    </Option>
                  );
                })}
              </Select>
            ) : (
              <div>{item.writer_name}</div>
            );
          },
        },
        {
          title: "Trạng thái nội dung",
          key: "content_status",
          dataIndex: "content_status",
          filters: [
            {
              text: "Đã duyệt",
              value: 1,
            },
            {
              text: "Chưa duyệt",
              value: 0,
            },
          ],
          filteredValue: null,
          onFilter: (value, record) => {
            return record.content_status === value;
          },
          sorter: (a, b) => a.content_status - b.content_status,
          ellipsis: {
            showTitle: false,
          },
          width: 165,
          render: (value, item) => {
            const editable = this._isEditing(item);
            return (
              <Button
                style={{
                  color: "white",
                  backgroundColor:
                    item.content_status === 0 ? "red" : "#238c31",
                  fontWeight: "bold",
                  borderRadius: 5,
                  borderColor: item.content_status === 0 ? "red" : "#238c31",
                }}
                type="primary"
                disabled={!editable}
                onClick={() => this.onDuyetCW(item)}
              >
                {item.content_status === 0 ? "Chưa duyệt" : "Đã duyệt"}
              </Button>
            );
          },
        },
        {
          title: "Video gốc",
          dataIndex: "content_final",
          key: "content_final",
          sorter: (a, b) => a.content_final.length - b.content_final.length,
          ellipsis: {
            showTitle: false,
          },
          width: 130,
          render: (ratio_bill, item) => {
            const editable = this._isEditing(item);
            return editable ? (
              <Input
                style={{ width: "100%" }}
                disabled={!editable}
                value={item.content_final}
                onChange={(ev) =>
                  this.onChangeLinkContentFinal(ev.target.value, item)
                }
              />
            ) : (
              <a target="_blank" href={item.content_final}>
                {item.content_final}
              </a>
            );
          },
        },
        {
          title: "Mô tả youtube",
          dataIndex: "content_note",
          key: "content_note",
          sorter: (a, b) => a.content_note.length - b.content_note.length,
          ellipsis: {
            showTitle: false,
          },
          width: 100,
          render: (ratio_bill, item) => {
            const editable = this._isEditing(item);
            return editable ? (
              <Input
                style={{ width: "100%" }}
                disabled={!editable}
                value={item.content_note}
                onChange={(ev) =>
                  this.onChangeLinkContentNote(ev.target.value, item)
                }
              />
            ) : (
              <div>{item.content_note}</div>
            );
          },
        },
        // {
        //   title: "Content Final Date",
        //   dataIndex: "content_date",
        //   key: "content_date",
        //   sorter: (a, b) =>
        //     moment(a.content_date).unix() - moment(b.content_date).unix(),
        //   ellipsis: {
        //     showTitle: false,
        //   },
        //   width: 120,
        //   render: (value, item) => (
        //     <div>
        //       {!isEmpty(value) ? moment(value).format("DD-MM-YYYY") : ""}
        //     </div>
        //   ),
        // },
        // {
        //   title: "Link Youtube",
        //   dataIndex: "link_youtube",
        //   key: "link_youtube",
        //   sorter: (a, b) => a.link_youtube.length - b.link_youtube.length,
        //   ellipsis: {
        //     showTitle: false,
        //   },
        //   width: 130,
        //   render: (ratio_bill, item) => {
        //     return (
        //       <a target="_blank" href={item.link_youtube}>
        //         {item.link_youtube}
        //       </a>
        //     );
        //   },
        // },
        {
          title: "Ngày đăng video",
          dataIndex: "public_date",
          key: "public_date",
          sorter: (a, b) =>
            moment(a.public_date).unix() - moment(b.public_date).unix(),
          ...this.getColumnFilterTimeProps("public_date"),
          ellipsis: {
            showTitle: false,
          },
          width: 150,
          render: (value, item) => {
            return (
              <div>
                {!isEmpty(value) ? moment(value).format("DD-MM-YYYY") : ""}
              </div>
            );
          },
        },
        {
          title: "Thao tác",
          key: "thaoTac",
          align: "center",
          fixed: "right",
          width: 155,
          render: (item) => {
            const editable = this._isEditing(item);
            return {
              props: {
                style: { background: item.stt % 2 === 0 && "#fbfbfb" },
              },
              children: (
                <>
                  {editable ? (
                    <>
                      <Button
                        style={{
                          color: "white",
                          backgroundColor: "#238c31",
                          fontWeight: "bold",
                          borderRadius: 5,
                          borderColor: "#238c31",
                        }}
                        type={"primary"}
                        icon={<CheckOutlined />}
                        onClick={() => this.onSubmitUpdate(item)}
                      >
                        {/* Cập nhật */}
                      </Button>
                      <span>&nbsp;&nbsp;&nbsp;</span>
                      <Button
                        style={{
                          color: "white",
                          backgroundColor: "#238c31",
                          fontWeight: "bold",
                          borderRadius: 5,
                          borderColor: "#238c31",
                        }}
                        type={"primary"}
                        icon={<CloseOutlined />}
                        onClick={() => this.onCancelEdit(item)}
                      >
                        {/* Hủy */}
                      </Button>
                      <span>&nbsp;&nbsp;&nbsp;</span>
                      {/* <Button
                        disabled={item.content_status === 1}
                        style={{
                          color: "white",
                          backgroundColor: "#238c31",
                          fontWeight: "bold",
                          borderRadius: 5,
                          borderColor: "#238c31",
                        }}
                        icon={<DeleteFilled />}
                        type={"primary"}
                        onClick={() => this.onDelete(item)}
                      >
                        Xoá
                      </Button> */}
                    </>
                  ) : (
                    <Button
                      style={{
                        color: "white",
                        backgroundColor: "#238c31",
                        fontWeight: "bold",
                        borderRadius: 5,
                        borderColor: "#238c31",
                      }}
                      type={"primary"}
                      onClick={() => this._onChangeEditingKey(item)}
                    >
                      Sửa
                    </Button>
                  )}
                </>
              ),
            };
          },
        },
      ],
      searchText: "",
      searchedColumn: "",
    };

    this.refAddNewContent = React.createRef();
  }

  components = {
    header: {
      cell: ResizableTitle,
    },
  };

  componentDidMount() {
    this.mounted = true;
    this._onRefreshData();
  }

  UNSAFE_componentWillReceiveProps(nextProps) {
    if (this.props !== nextProps) {
      if (
        !!nextProps.listContentCode &&
        nextProps.listContentCode !== this.props.listContentCode
      ) {
        // 1. Make a shallow copy of the items
        let column = [...this.state.column];
        // 2. Make a shallow copy of the item you want to mutate
        let item = { ...column[1] };
        // 3. Replace the property you're intested in
        item.filters = nextProps.listContentCode;
        item.render = (ratio_bill, item) => {
          const editable = this._isEditing(item);
          return {
            props: {
              style: { background: item.stt % 2 === 0 && "#fbfbfb" },
            },
            children: editable ? (
              <Select
                disabled={!editable}
                style={{ width: "100%" }}
                value={item.content_code}
                onChange={(ev) => this.onChangeSelectContentCode(ev, item)}
              >
                {map(nextProps.listContentCode, (item, index) => {
                  return (
                    <Option className="erpOption" value={item.text} key={index}>
                      {item.text}
                    </Option>
                  );
                })}
              </Select>
            ) : (
              <div>{item.content_code}</div>
            ),
          };
        };
        // 4. Put it back into our array. N.B. we *are* mutating the array here, but that's why we made a copy first
        column[1] = item;
        if (this.mounted) {
          this.setState(
            {
              column,
              listContentCode: nextProps.listContentCode,
            },
            () => {
              this._onRefreshData();
            }
          );
        }
      }
    }
  }

  componentWillUnmount() {
    this.mounted = false;
  }

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
      <SearchOutlined style={{ color: filtered ? "#1890ff" : undefined }} />
    ),
    filteredValue: null,
    onFilter: (value, record) => {
      // console.log("value", value);
      // console.log("record", record);
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
          highlightStyle={{ backgroundColor: "#ffffff", padding: 0 }}
          searchWords={[this.state.searchText]}
          autoEscape
          textToHighlight={text ? text.toString() : ""}
        />
      ) : (
        text
      ),
  });

  getColumnFilterTimeProps = (dataIndex) => ({
    filterDropdown: ({
      setSelectedKeys,
      selectedKeys,
      confirm,
      clearFilters,
    }) => (
      <div style={{ padding: 8 }}>
        {/* <Input
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
        /> */}
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
              // console.log("setSelectedKeys", setSelectedKeys);
              // console.log("dateStart", selectedKeys[0]);
              // console.log("dateEnd", selectedKeys[1]);
              // console.log("confirm", confirm);
              // console.log("clearFilters", clearFilters);
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
              moment(value[0]).format("DDMMYYY") ||
            moment(record.public_date).format("DDMMYYY") ===
              moment(value[1]).format("DDMMYYY")
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

  handleSearch = (selectedKeys, confirm, dataIndex) => {
    confirm();
    this.setState({
      searchText: selectedKeys[0],
      searchedColumn: dataIndex,
    });
  };

  onChangeSelectSalaryIndex = (ev, record) => {
    const newData = map(this.state.dataChangeUpdate, (item) => {
      if (item.id === record.id) {
        return {
          ...item,
          salary_index: ev,
        };
      } else {
        return { ...item };
      }
    });
    this.setState({ dataChangeUpdate: newData });
  };

  handleReset = (clearFilters) => {
    clearFilters();
    this.setState({ searchText: "" });
  };

  _onRefreshData = () => {
    this.setState({ isLoding: true });
    axios.get(`${apiUrl}/activity`).then((res) => {
      this.setState({
        activity: res.data.data,
        activityChangeUpdate: res.data.data,
      });
    });
    axios.get(`${apiUrl}/tenticker`).then((res) => {
      const valueListContenCode = map(
        this.props.listContentCode,
        (item, index) => {
          return item.value;
        }
      );
      const filterDataSource = res.data.data.filter(
        (item) =>
          valueListContenCode.includes(item.content_code) && item.is_new === 1
      );

      const sortData = filterDataSource.sort((b, a) => {
        return a.id - b.id;
      });

      const mapDataSource = map(sortData, (item, index) => {
        return {
          ...item,
          stt: index + 1,
        };
      });
      this.setState({
        dataSource: mapDataSource,
        dataChangeUpdate: mapDataSource,
        newDataTest: mapDataSource,
        isLoding: false,
        chuDeInput: "",
        editingKey: "",
        originData: res.data.data,
        ontent_code: null,
      });
    });
  };

  onScrollAddNewContent = () => {
    this.refAddNewContent.current.scrollIntoView({ behavior: "smooth" });
  };

  addTitle() {
    const body = {
      data: [
        !isEmpty(this.state.originData[this.state.originData.length - 1])
          ? this.state.originData[this.state.originData.length - 1].id + 1
          : 0,
        this.state.content_code,
        "",
        this.state.chuDeInput,
        "",
        "",
        0,
        "",
        "",
        null,
        "",
        "",
        null,
        "",
        0,
        "",
        "",
        "",
        "",
        null,
        "",
        "",
        "",
        0,
        "",
        "",
        null,
        1,
        1,
        1,
        1,
        null,
        null,
        null,
        null,
        // this.state.salary_index,
        5,
        1,
        null,
        null,
      ],
    };
    axios.post(`${apiUrl}/tenticker/add`, body).then((res) => {
      notification.success({
        message: "Thêm chủ đề thành công",
        style: { backgroundColor: "#f5fff8" },
      });
      const activity = `Thêm chủ đề: ${this.state.chuDeInput} với Content Code: ${this.state.content_code} và Salary Index: ${this.state.salary_index}`;
      this.onUpdateActivity(activity);
      this.onScrollAddNewContent();
      this._onRefreshData();
    });
  }

  onUpdateActivity = (activity) => {
    axios.get(`${apiUrl}/activity`).then((res) => {
      const body = {
        data: [
          // !isEmpty(res.data.data[res.data.data.length - 1])
          //   ? res.data.data[res.data.data.length - 1].id + 1
          //   : 0,
          null,
          moment().format("YYYY-MM-DD HH:mm:ss"),
          activity,
          this.props.data[this.props.id + 1][fixUserColumn.cms],
        ],
      };
      axios.post(`${apiUrl}/activity/add`, body).then((res) => {
        axios.get(`${apiUrl}/activity`).then((res) => {
          this.setState({
            activity: res.data.data,
            activityChangeUpdate: res.data.data,
          });
        });
      });
      this.setState({
        activity: res.data.data,
        activityChangeUpdate: res.data.data,
      });
    });
  };

  _isEditing = (record) => {
    return record.id === this.state.editingKey;
  };

  onChangeLinkContent = (value, record) => {
    const newData = map(this.state.dataChangeUpdate, (item) => {
      if (item.id === record.id) {
        return {
          ...item,
          content_raw: value,
        };
      } else {
        return { ...item };
      }
    });
    this.setState({ dataChangeUpdate: newData });
  };

  onChangeLinkContentFinal = (value, record) => {
    const newData = map(this.state.dataChangeUpdate, (item) => {
      if (item.id === record.id) {
        return {
          ...item,
          content_final: value,
        };
      } else {
        return { ...item };
      }
    });
    this.setState({ dataChangeUpdate: newData });
  };

  onChangeLinkContentNote = (value, record) => {
    const newData = map(this.state.dataChangeUpdate, (item) => {
      if (item.id === record.id) {
        return {
          ...item,
          content_note: value,
        };
      } else {
        return { ...item };
      }
    });
    this.setState({ dataChangeUpdate: newData });
  };

  onChangeChuDe = (value, record) => {
    const newData = map(this.state.dataChangeUpdate, (item) => {
      if (item.id === record.id) {
        return {
          ...item,
          full_title: value,
        };
      } else {
        return { ...item };
      }
    });
    this.setState({ dataChangeUpdate: newData });
  };

  onChangeSelect = (ev, record) => {
    const newData = map(this.state.dataChangeUpdate, (item) => {
      if (item.id === record.id) {
        return {
          ...item,
          writer_name: ev[0],
          writer_code: ev[1],
          writer_nick: ev[2],
        };
      } else {
        return { ...item };
      }
    });
    this.setState({ dataChangeUpdate: newData });
  };

  onChangeSelectContentCode = (ev, record) => {
    const newData = map(this.state.dataChangeUpdate, (item) => {
      if (item.id === record.id) {
        return {
          ...item,
          content_code: ev,
        };
      } else {
        return { ...item };
      }
    });
    this.setState({ dataChangeUpdate: newData });
  };

  onDuyetCW = (record) => {
    const newData = map(this.state.dataChangeUpdate, (item) => {
      if (item.id === record.id) {
        return {
          ...item,
          content_status: record.content_status === 0 ? 1 : 0,
        };
      } else {
        return { ...item };
      }
    });
    this.setState({ dataChangeUpdate: newData });
  };

  onSubmitUpdate = async (record) => {
    this.setState({ isLoading: true });
    let countWords = null;
    if (!!record.content_raw) {
      const countWordsResponse = await axios.post(`${apiUrl}/countWord`, {
        sheetUrl: record.content_raw,
      });
      countWords = countWordsResponse?.data?.data;
    }
    console.log("countWords: ", countWords);

    const body = {
      data_id: record.id,
      data: [
        record.id,
        record.content_code,
        record.writer_code,
        record.full_title,
        record.content_raw,
        record.writer_name,
        record.content_status,
        record.content_final,
        record.content_note,
        record.is_first_content_final === 1 && !isEmpty(record.content_final)
          ? moment().format("YYYY-MM-DD HH:mm:ss")
          : record.content_date === null
          ? null
          : moment(record.content_date).format("YYYY-MM-DD HH:mm:ss"),
        record.composer_code,
        record.composer_name,
        record.is_first_audio === 1 && !isEmpty(record.link_audio)
          ? moment().format("YYYY-MM-DD HH:mm:ss")
          : record.audio_date === null
          ? null
          : moment(record.audio_date).format("YYYY-MM-DD HH:mm:ss"),
        record.link_audio,
        record.audio_status,
        record.audio_note,
        record.writer_nick,
        record.composer_nick,
        record.editor_name,
        record.is_first_video === 1 && !isEmpty(record.link_video)
          ? moment().format("YYYY-MM-DD HH:mm:ss")
          : record.video_date === null
          ? null
          : moment(record.video_date).format("YYYY-MM-DD HH:mm:ss"),
        record.footage,
        record.editor_code,
        record.link_video,
        record.video_status,
        record.video_note,
        record.link_youtube,
        record.is_first_public === 1 && !isEmpty(record.link_youtube)
          ? moment().format("YYYY-MM-DD HH:mm:ss")
          : record.public_date === null
          ? null
          : moment(record.public_date).format("YYYY-MM-DD HH:mm:ss"),
        !isEmpty(record.link_youtube) && record.is_first_public === 1 ? 0 : 1,
        (!isEmpty(record.content_final) &&
          record.is_first_content_final === 1) ||
        record.is_first_content_final === 0
          ? 0
          : 1,
        (!isEmpty(record.link_audio) && record.is_first_audio === 1) ||
        record.is_first_audio === 0
          ? 0
          : 1,
        (!isEmpty(record.link_video) && record.is_first_video === 1) ||
        record.is_first_video === 0
          ? 0
          : 1,
        record.add_composer_date === null
          ? null
          : moment(record.add_composer_date).format("YYYY-MM-DD HH:mm:ss"),
        record.add_ve_date === null
          ? null
          : moment(record.add_ve_date).format("YYYY-MM-DD HH:mm:ss"),
        record.content_status !==
        this.state.dataSource[record.stt - 1].content_status
          ? moment().format("YYYY-MM-DD HH:mm:ss")
          : record.confirm_content_date === null
          ? null
          : moment(record.confirm_content_date).format("YYYY-MM-DD HH:mm:ss"),
        this.state.dataSource[record.stt - 1].video_status
          ? moment().format("YYYY-MM-DD HH:mm:ss")
          : record.confirm_video_date === null
          ? null
          : moment(record.confirm_video_date).format("YYYY-MM-DD HH:mm:ss"),
        record.confirm_audio_date === null
          ? null
          : moment(record.confirm_audio_date).format("YYYY-MM-DD HH:mm:ss"),
        record.salary_index,
        1,
        countWords,
      ],
    };

    axios.put(`${apiUrl}/tenticker`, body).then((res) => {
      notification.success({
        message: "Cập nhật thành công",
        style: { backgroundColor: "#f5fff8" },
      });
      //activity update content_code
      if (
        record.content_code !==
        this.state.dataSource[record.stt - 1].content_code
      ) {
        const activity = `Thay đổi Content Code của chủ đề ${
          this.state.dataSource[record.stt - 1].full_title
        } từ ${this.state.dataSource[record.stt - 1].content_code} thành ${
          record.content_code
        }`;
        this.onUpdateActivity(activity);
      }
      //activity update full_title
      if (
        record.full_title !== this.state.dataSource[record.stt - 1].full_title
      ) {
        const activity = `Thay đổi Full Title của chủ đề ${
          this.state.dataSource[record.stt - 1].full_title
        } từ ${this.state.dataSource[record.stt - 1].full_title} thành ${
          record.full_title
        }`;
        this.onUpdateActivity(activity);
      }
      //activity update content_raw
      if (
        record.content_raw !== this.state.dataSource[record.stt - 1].content_raw
      ) {
        const activity = `Thay đổi Content Raw của chủ đề ${
          this.state.dataSource[record.stt - 1].full_title
        } từ ${this.state.dataSource[record.stt - 1].content_raw} thành ${
          record.content_raw
        }`;
        this.onUpdateActivity(activity);
      }
      //activity update writer_name
      if (
        record.writer_name !== this.state.dataSource[record.stt - 1].writer_name
      ) {
        const activity = `Thay đổi Writer Name của chủ đề ${
          this.state.dataSource[record.stt - 1].full_title
        } từ ${this.state.dataSource[record.stt - 1].writer_name} thành ${
          record.writer_name
        }`;
        this.onUpdateActivity(activity);
      }
      //activity update content_status
      if (
        record.content_status !==
        this.state.dataSource[record.stt - 1].content_status
      ) {
        const activity = `Thay đổi Content Status của chủ đề ${
          this.state.dataSource[record.stt - 1].full_title
        } từ ${
          this.state.dataSource[record.stt - 1].content_status === 0
            ? "Chưa duyệt"
            : "Đã duyệt"
        } thành ${record.content_status === 0 ? "Chưa duyệt" : "Đã duyệt"}`;
        this.onUpdateActivity(activity);
      }
      //activity update content_final
      if (
        record.content_final !==
        this.state.dataSource[record.stt - 1].content_final
      ) {
        const activity = `Thay đổi Content Final của chủ đề ${
          this.state.dataSource[record.stt - 1].full_title
        } từ ${this.state.dataSource[record.stt - 1].content_final} thành ${
          record.content_final
        }`;
        this.onUpdateActivity(activity);
      }
      //activity update content_note
      if (
        record.content_note !==
        this.state.dataSource[record.stt - 1].content_note
      ) {
        const activity = `Thay đổi Content Note của chủ đề ${
          this.state.dataSource[record.stt - 1].full_title
        } từ ${this.state.dataSource[record.stt - 1].content_note} thành ${
          record.content_note
        }`;
        this.onUpdateActivity(activity);
      }
      //activity update salary_index
      if (
        record.salary_index !==
        this.state.dataSource[record.stt - 1].salary_index
      ) {
        const activity = `Thay đổi Salary Index của chủ đề ${
          this.state.dataSource[record.stt - 1].full_title
        } từ ${this.state.dataSource[record.stt - 1].salary_index} thành ${
          record.salary_index
        }`;
        this.onUpdateActivity(activity);
      }
      this._onRefreshData();
    });
    this.setState({ editingKey: "", isLoading: false });
  };

  onCancelEdit = (record) => {
    const newData = map(this.state.dataChangeUpdate, (item, index) => {
      if (item.id === record.id) {
        return {
          ...this.state.dataSource[index],
        };
      } else {
        return { ...item };
      }
    });
    this.setState({ editingKey: "", dataChangeUpdate: newData });
  };

  onDelete = (record) => {
    confirm({
      title: "Thông báo",
      content: `Bạn có chắc muốn xoá`,
      okCancel: () => {},
      onOk: () => {
        const body = {
          data: {
            data_id: [record.id],
          },
        };
        axios.delete(`${apiUrl}/tenticker`, body).then((res) => {
          notification.success({
            message: "Xoá thành công",
            style: { backgroundColor: "#f5fff8" },
          });
          const activity = `Xoá dòng có chủ đề là ${
            this.state.dataSource[record.stt - 1].full_title
          }`;
          this.onUpdateActivity(activity);
          this._onRefreshData();
        });
      },
    });
  };

  _onChangeEditingKey = (record) => {
    const newData = map(this.state.dataChangeUpdate, (item, index) => {
      if (item.id === this.state.id) {
        return {
          ...this.state.dataSource[index],
        };
      } else {
        return { ...item };
      }
    });
    this.setState({
      editingKey: record.id,
      dataChangeUpdate: newData,
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

  _onCloseModal = () => {
    this.setState({ isShowModal: false, chuDeInput: "" });
  };

  onConfirmDuyet = () => {
    if (isEmpty(this.state.chuDeInput)) {
      notification.warning({
        message: "Thông báo",
        description: "Chưa nhập content title!",
      });
    } else if (isEmpty(this.state.content_code)) {
      notification.warning({
        message: "Thông báo",
        description: "Chưa chọn kênh!",
      });
    }
    // else if (this.state.salary_index === null) {
    //   notification.warning({
    //     message: "Thông báo",
    //     description: "Chưa Chọn độ dài nội dung!",
    //   });
    // }
    else {
      this.addTitle();
      this.setState({ isShowModal: false });
    }
  };

  _handleSearch = (e) => {
    const dataSearch = this.state.dataSource.filter(({ full_title }) => {
      full_title = full_title.toLowerCase();
      e.target.value = e.target.value.toLowerCase();
      return full_title.includes(e.target.value);
    });
    this.setState({
      dataChangeUpdate: dataSearch,
      searchTextMain: e.target.value,
    });
  };

  handleChange = (pagination, filters, sorter) => {
    // console.log("filters", filters);

    const filterData = filter(this.state.newDataTest, (item) => {
      return (
        (filters.content_code
          ? includes(filters.content_code, item.content_code)
          : item) &&
        (filters.content_status
          ? includes(filters.content_status, item.content_status)
          : item) &&
        (filters.full_title
          ? includes(filters.full_title, item.full_title)
          : item) &&
        (filters.salary_index
          ? includes(filters.salary_index, item.salary_index)
          : item) &&
        (filters.writer_name
          ? includes(filters.writer_name, item.writer_name)
          : item) &&
        (filters.public_date
          ? (moment(item.public_date) <
              moment(get(filters, "public_date[0][1]")) &&
              moment(item.public_date) >
                moment(get(filters, "public_date[0][0]"))) ||
            moment(item.public_date).format("DDMMYYY") ===
              moment(get(filters, "public_date[0][0]")).format("DDMMYYY") ||
            moment(item.public_date).format("DDMMYYY") ===
              moment(get(filters, "public_date[0][1]")).format("DDMMYYY")
          : item)
      );
    });
    if (
      filters.content_code ||
      filters.content_status ||
      filters.full_title ||
      filters.public_date ||
      filters.salary_index ||
      filters.writer_name
    ) {
      this.setState({ dataChangeUpdate: filterData });
    }

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

  clearFilters = () => {
    this.setState({ filteredInfo: null });
  };

  clearSorters = () => {
    this.setState({ sortedInfo: null });
  };

  clearAll = () => {
    this.setState({
      filteredInfo: null,
      sortedInfo: null,
      searchTextMain: "",
      dataChangeUpdate: this.state.dataSource,
    });
  };

  onChangeSelectAddContentCode = (ev) => {
    this.setState({ content_code: ev });
  };

  onChangeSelectAddSalaryIndex = (ev) => {
    this.setState({ salary_index: ev });
  };

  render() {
    const {
      dataChangeUpdate,
      chuDeInput,
      column,
      isShowModal,
      filteredInfo,
      sortedInfo,
      isLoding,
      content_code,
      listContentCode,
      salary_index,
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
              ? filteredInfo.content_code
              : null,
            sortOrder: !isEmpty(sortedInfo)
              ? sortedInfo.columnKey === "content_code" && sortedInfo.order
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
              ? filteredInfo.salary_index
              : null,
            sortOrder: !isEmpty(sortedInfo)
              ? sortedInfo.columnKey === "salary_index" && sortedInfo.order
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
              ? filteredInfo.full_title
              : null,
            sortOrder: !isEmpty(sortedInfo)
              ? sortedInfo.columnKey === "full_title" && sortedInfo.order
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
              ? sortedInfo.columnKey === "content_raw" && sortedInfo.order
              : null,
            onHeaderCell: (column) => ({
              width: column.width,
              onResize: this.handleResize(index),
            }),
          };
        case 5:
          return {
            ...col,
            filteredValue: !isEmpty(filteredInfo)
              ? filteredInfo.writer_name
              : null,
            sortOrder: !isEmpty(sortedInfo)
              ? sortedInfo.columnKey === "writer_name" && sortedInfo.order
              : null,
            onHeaderCell: (column) => ({
              width: column.width,
              onResize: this.handleResize(index),
            }),
          };
        case 6:
          return {
            ...col,
            filteredValue: !isEmpty(filteredInfo)
              ? filteredInfo.content_status
              : null,
            sortOrder: !isEmpty(sortedInfo)
              ? sortedInfo.columnKey === "content_status" && sortedInfo.order
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
              ? sortedInfo.columnKey === "content_final" && sortedInfo.order
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
              ? sortedInfo.columnKey === "content_note" && sortedInfo.order
              : null,
            onHeaderCell: (column) => ({
              width: column.width,
              onResize: this.handleResize(index),
            }),
          };
        // case 9:
        //   return {
        //     ...col,
        //     sortOrder: !isEmpty(sortedInfo)
        //       ? sortedInfo.columnKey === "content_date" && sortedInfo.order
        //       : null,
        //     onHeaderCell: (column) => ({
        //       width: column.width,
        //       onResize: this.handleResize(index),
        //     }),
        //   };
        // case 9:
        //   return {
        //     ...col,
        //     sortOrder: !isEmpty(sortedInfo)
        //       ? sortedInfo.columnKey === "link_youtube" && sortedInfo.order
        //       : null,
        //     onHeaderCell: (column) => ({
        //       width: column.width,
        //       onResize: this.handleResize(index),
        //     }),
        //   };
        case 9:
          return {
            ...col,
            filteredValue: !isEmpty(filteredInfo)
              ? filteredInfo.public_date
              : null,
            sortOrder: !isEmpty(sortedInfo)
              ? sortedInfo.columnKey === "public_date" && sortedInfo.order
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
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
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

          <Input
            placeholder="Tìm kiếm"
            value={searchTextMain}
            onChange={this._handleSearch}
            style={{ width: 700, display: "flex" }}
          />
          <Button
            className="buttonPrimary"
            type={"primary"}
            icon={<PlusOutlined />}
            style={{
              color: "white",
              backgroundColor: "#238c31",
              fontWeight: "bold",
              borderRadius: 5,
              borderColor: "#238c31",
              margin: 20,
            }}
            onClick={() => {
              this.setState({ isShowModal: true });
            }}
          >
            Thêm chủ đề
          </Button>
          <Modal
            visible={isShowModal}
            width={"50%"}
            onCancel={debounce(this._onCloseModal, 100)}
            footer={null}
          >
            <Form
              style={{ marginTop: 20 }}
              wrapperCol={{ span: 15 }}
              labelCol={{ span: 6 }}
              onFinish={this.onConfirmDuyet}
              ref={this.refForm}
            >
              <Form.Item
                style={{ alignItems: "center", justifyContent: "center" }}
              >
                <Select
                  style={{ width: "100%" }}
                  value={content_code}
                  placeholder="Chọn kênh"
                  onChange={(ev) => this.onChangeSelectAddContentCode(ev)}
                >
                  {map(listContentCode, (item, index) => {
                    return (
                      <Option
                        className="erpOption"
                        value={item.text}
                        key={index}
                      >
                        {item.text}
                      </Option>
                    );
                  })}
                </Select>
                <Input
                  style={{ width: "100%", marginTop: 20 }}
                  placeholder="Nhập chủ đề"
                  onChange={(e) => {
                    this.setState({ chuDeInput: e.target.value });
                  }}
                  value={chuDeInput}
                />
                {/* <Select
                  style={{ width: "100%", marginTop: 20 }}
                  value={salary_index}
                  placeholder="Chọn độ dài nội dung"
                  onChange={(ev) => this.onChangeSelectAddSalaryIndex(ev)}
                >
                  {map(salaryIndexDropdown, (item, index) => {
                    return (
                      <Option
                        className="erpOption"
                        value={item.value}
                        key={index}
                      >
                        {item.text}
                      </Option>
                    );
                  })}
                </Select> */}
              </Form.Item>
              <Form.Item
                wrapperCol={{ offset: 9 }}
                style={{ alignItems: "center", justifyContent: "center" }}
              >
                <Button
                  type={"primary"}
                  className="buttonPrimary"
                  icon={<CheckSquareFilled />}
                  htmlType={"submit"}
                >
                  XÁC NHẬN
                </Button>
                <Button
                  className="buttonPrimary"
                  icon={<CloseCircleOutlined />}
                  style={{ marginLeft: 10 }}
                  onClick={debounce(this._onCloseModal, 100)}
                >
                  HỦY
                </Button>
              </Form.Item>
            </Form>
          </Modal>
        </div>

        <Table
          loading={isLoding}
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
          dataSource={dataChangeUpdate}
          columns={mapColumns}
          rowKey="id"
          pagination={
            dataChangeUpdate.length > 10
              ? {
                  // showSizeChanger: false,
                  total: dataChangeUpdate.length,
                }
              : false
          }
          sticky
        />
        <div style={{ height: 50 }} ref={this.refAddNewContent}></div>
      </div>
    );
  }
}
