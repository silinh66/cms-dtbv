import {
  Button,
  Input,
  notification,
  Table,
  Space,
  DatePicker,
  Row,
  Col,
} from "antd";
import axios from "axios";
import Highlighter from "react-highlight-words";
import { filter, get, includes, isEmpty, map } from "lodash";
import moment from "moment";
import React, { Component } from "react";
import { Resizable } from "react-resizable";
import { apiUrl } from "../constants.js/api";
import {
  CheckOutlined,
  CloseOutlined,
  SearchOutlined,
} from "@ant-design/icons";
import confirm from "antd/lib/modal/confirm";
import { fixUserColumn, salaryIndexDropdown } from "../utils/common";

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
      activityChangeUpdate: [],
      newDataTest: [],
      activity: [],
      searchTextMain: "",
      editingKey: "",
      isShowModal: false,
      filteredInfo: null,
      sortedInfo: null,
      isLoding: false,
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
            return {
              props: {
                style: { background: item.stt % 2 === 0 && "#fbfbfb" },
              },
              children: <div>{item.content_code}</div>,
            };
          },
        },
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
            return {
              props: {
                style: { background: item.stt % 2 === 0 && "#fbfbfb" },
              },
              children: <div>{item.full_title}</div>,
            };
          },
        },
        // {
        //   title: "Người viết bài",
        //   dataIndex: "writer_name",
        //   key: "writer_name",
        //   sorter: (a, b) => a.writer_name.length - b.writer_name.length,
        //   ellipsis: {
        //     showTitle: false,
        //   },
        //   filters: listWriterName,
        //   filteredValue: null,
        //   onFilter: (value, record) => {
        //     return record.writer_name.indexOf(value) === 0;
        //   },
        //   width: 150,
        //   render: (ratio_bill, item) => {
        //     return <div>{item.writer_name}</div>;
        //   },
        // },
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
            return (
              <a target="_blank" href={item.content_final}>
                {item.content_final}
              </a>
            );
          },
        },

        {
          title: "Link âm thanh",
          dataIndex: "link_audio",
          key: "link_audio",
          sorter: (a, b) => a.link_audio.length - b.link_audio.length,
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
                value={item.link_audio}
                onChange={(ev) => this.onChangeLinkAudio(ev.target.value, item)}
              />
            ) : (
              <a target="_blank" href={item.link_audio}>
                {item.link_audio}
              </a>
            );
          },
        },
        {
          title: "Trạng thái audio",
          key: "audio_status",
          dataIndex: "audio_status",
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
            return record.audio_status === value;
          },
          sorter: (a, b) => a.audio_status - b.audio_status,
          ellipsis: {
            showTitle: false,
          },
          width: 150,
          render: (value, item) => {
            return (
              <Button
                style={{
                  color: "white",
                  backgroundColor: item.audio_status === 0 ? "red" : "#238c31",
                  fontWeight: "bold",
                  borderRadius: 5,
                  borderColor: item.audio_status === 0 ? "red" : "#238c31",
                }}
                type="primary"
                disabled={true}
                onClick={() => this.onDuyetAC(item)}
              >
                {item.audio_status === 0 ? "Chưa duyệt" : "Đã duyệt"}
              </Button>
            );
          },
        },
        {
          title: "Chú thích audio",
          dataIndex: "audio_note",
          key: "audio_note",
          sorter: (a, b) => a.audio_note.length - b.audio_note.length,
          ellipsis: {
            showTitle: false,
          },
          width: 100,
          render: (ratio_bill, item) => {
            return <div>{item.audio_note}</div>;
          },
        },
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
          title: "Ngày Audio",
          dataIndex: "audio_date",
          key: "audio_date",
          sorter: (a, b) =>
            moment(a.audio_date).unix() - moment(b.audio_date).unix(),
          ellipsis: {
            showTitle: false,
          },
          width: 120,
          render: (value, item) => (
            <div>
              {!isEmpty(value) ? moment(value).format("DD-MM-YYYY") : ""}
            </div>
          ),
        },
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
    this._onRefreshData();
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
      const { data, id } = this.props;
      const dataSource = res.data.data.filter(
        (item) =>
          includes(item.composer_name, data[id + 1][fixUserColumn.cms]) &&
          item.content_status === 1 &&
          item.is_new === 1
      );
      const sortData = dataSource.sort((b, a) => {
        if (a.add_composer_date === null) {
          return moment(0) - moment(b.add_composer_date);
        } else if (b.add_composer_date === null) {
          return moment(a.add_composer_date) - moment(0);
        } else {
          return moment(a.add_composer_date) - moment(b.add_composer_date);
        }
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

  onChangeLinkAudio = (value, record) => {
    const newData = map(this.state.dataChangeUpdate, (item) => {
      if (item.id === record.id) {
        return {
          ...item,
          link_audio: value,
        };
      } else {
        return { ...item };
      }
    });
    this.setState({ dataChangeUpdate: newData });
  };

  onChangeLinkVideo = (value, record) => {
    const newData = map(this.state.dataChangeUpdate, (item) => {
      if (item.id === record.id) {
        return {
          ...item,
          link_video: value,
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
          writer_code: ev[0],
          writer_name: ev[1],
          writer_nick: ev[2],
        };
      } else {
        return { ...item };
      }
    });
    this.setState({ dataChangeUpdate: newData });
  };

  onDuyetAC = (record) => {
    const newData = map(this.state.dataChangeUpdate, (item) => {
      if (item.id === record.id) {
        return {
          ...item,
          audio_status: record.audio_status === 0 ? 1 : 0,
        };
      } else {
        return { ...item };
      }
    });
    this.setState({ dataChangeUpdate: newData });
  };

  onSubmitUpdate = (record) => {
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
        record.public_date === null
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
        record.confirm_content_date === null
          ? null
          : moment(record.confirm_content_date).format("YYYY-MM-DD HH:mm:ss"),
        record.confirm_video_date === null
          ? null
          : moment(record.confirm_video_date).format("YYYY-MM-DD HH:mm:ss"),
        record.confirm_audio_date === null
          ? null
          : moment(record.confirm_audio_date).format("YYYY-MM-DD HH:mm:ss"),
        record.salary_index,
        1,
        record.content_length,
      ],
    };

    axios.put(`${apiUrl}/tenticker`, body).then((res) => {
      notification.success({
        message: "Cập nhật thành công",
        style: { backgroundColor: "#f5fff8" },
      });
      //activity update link_audio
      if (
        record.link_audio !== this.state.dataSource[record.stt - 1].link_audio
      ) {
        const activity = `Thay đổi Link Audio của chủ đề ${
          this.state.dataSource[record.stt - 1].full_title
        } từ ${this.state.dataSource[record.stt - 1].link_audio} thành ${
          record.link_audio
        }`;
        this.onUpdateActivity(activity);
      }
      this._onRefreshData();
    });
    this.setState({ editingKey: "" });
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
        // console.log("updateActivity Success");
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
    console.log("filters", filters);

    const filterData = filter(this.state.newDataTest, (item) => {
      return (
        (filters.content_code
          ? includes(filters.content_code, item.content_code)
          : item) &&
        (filters.audio_status
          ? includes(filters.audio_status, item.audio_status)
          : item) &&
        (filters.full_title
          ? includes(filters.full_title, item.full_title)
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
      filters.audio_status ||
      filters.full_title ||
      filters.public_date
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

  render() {
    const {
      dataChangeUpdate,
      column,
      filteredInfo,
      sortedInfo,
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

        // case 4:
        //   return {
        //     ...col,
        //     filteredValue: !isEmpty(filteredInfo)
        //       ? filteredInfo.writer_name
        //       : null,
        //     sortOrder: !isEmpty(sortedInfo)
        //       ? sortedInfo.columnKey === "writer_name" && sortedInfo.order
        //       : null,
        //     onHeaderCell: (column) => ({
        //       width: column.width,
        //       onResize: this.handleResize(index),
        //     }),
        //   };
        case 4:
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

        case 5:
          return {
            ...col,
            sortOrder: !isEmpty(sortedInfo)
              ? sortedInfo.columnKey === "link_audio" && sortedInfo.order
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
              ? filteredInfo.audio_status
              : null,
            sortOrder: !isEmpty(sortedInfo)
              ? sortedInfo.columnKey === "audio_status" && sortedInfo.order
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
              ? sortedInfo.columnKey === "audio_note" && sortedInfo.order
              : null,
            onHeaderCell: (column) => ({
              width: column.width,
              onResize: this.handleResize(index),
            }),
          };
        // case 8:
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
        case 8:
          return {
            ...col,
            sortOrder: !isEmpty(sortedInfo)
              ? sortedInfo.columnKey === "audio_date" && sortedInfo.order
              : null,
            onHeaderCell: (column) => ({
              width: column.width,
              onResize: this.handleResize(index),
            }),
          };
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
            alignItems: "center",
            marginBottom: 10,
          }}
        >
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
