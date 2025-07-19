import "./App.css";
import React, { Component } from "react";
import { Button, notification, Tabs, Typography } from "antd";
import axios from "axios";
import { get, includes, isEmpty, map } from "lodash";
import moment from "moment";
import { Resizable } from "react-resizable";
import "./App.css";
import LoginScreen from "./screens/Login";
import logo from "./download.png";
import { apiUrl } from "./constants.js/api";
import Admin from "./screens/Admin";
import CW from "./screens/CW";
import CM from "./screens/CM";
import AC from "./screens/AC";
import AM from "./screens/AM";
import VE from "./screens/VE";
import VM from "./screens/VM";
import youtube from "./constants.js/youtube";
import viewCount from "./constants.js/viewCount";
import ActivityLog from "./screens/ActivityLog";
import confirm from "antd/lib/modal/confirm";
import {
  AudioOutlined,
  CrownOutlined,
  CustomerServiceOutlined,
  DesktopOutlined,
  EditOutlined,
  FieldTimeOutlined,
  FormOutlined,
  FundOutlined,
  LogoutOutlined,
  VideoCameraAddOutlined,
} from "@ant-design/icons";
import AdminManagement from "./screens/AdminManagement";
import { fixUserColumn, listAdmin } from "./utils/common";
import getPublishDate from "./constants.js/youtube";
import ReportPrivate from "./screens/ReportPrivate";

// const KEY = "AIzaSyD3uGEgJa2Y-PqhcZ_cessU2xVZglG-sWs";

const { TabPane } = Tabs;
const { Title } = Typography;
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

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      error: null,
      dataSource: [],
      editingKey: "",
      dataChangeUpdate: [],
      dataExcel: [],
      isLogin: false,
      username: [],
      password: [],
      admin: [],
      cm: [],
      cw: [],
      am: [],
      ac: [],
      vm: [],
      ve: [],
      roleCode: [],
      roleCodeUser: "",
      column: [],
      userInfo: {},
      chuDeInput: "",
      valueOptions: null,
      options: [],
      listContentCode: [],
      activityChangeUpdate: [],
      activity: [],
      status: [],
    };
    this.adminRef = React.createRef();
    this.cwRef = React.createRef();
    this.cmRef = React.createRef();
    this.amRef = React.createRef();
    this.acRef = React.createRef();
    this.vmRef = React.createRef();
    this.activityRef = React.createRef();
    this.veRef = React.createRef();
    this.adminManagementRef = React.createRef();
    this.reportPrivateRef = React.createRef();
  }

  components = {
    header: {
      cell: ResizableTitle,
    },
  };

  async componentDidMount() {
    // this.getAllVideo();
    // const data = await getPublishDate(
    //   "https://www.youtube.com/watch?v=Z2CXN2tuAXc&t=791s"
    // );
    // console.log("data", get(data, "data.items[0].snippet.publishedAt"));
    this.onRefresh();
  }

  // getAllVideo = async () => {
  //   let result = [];
  //   let test = axios.create({
  //     baseURL: "https://www.googleapis.com/youtube/v3/playlistItems",
  //     params: {
  //       part: "snippet",
  //       key: KEY,
  //       maxResults: 50,
  //       // pageToken: "CDIQAA",
  //       playlistId: "UUKpD-XWIDMQlqyxF4Low6bw",
  //     },
  //   });
  //   let testResponse = await test.get("/");
  //   result = [...result, ...get(testResponse, "data.items")];
  //   // console.log("testResponse", testResponse);
  //   while (get(testResponse, "data.items.length") === 50) {
  //     test = axios.create({
  //       baseURL: "https://www.googleapis.com/youtube/v3/playlistItems",
  //       params: {
  //         part: "snippet",
  //         key: KEY,
  //         maxResults: 50,
  //         pageToken: get(testResponse, "data.nextPageToken"),
  //         playlistId: "UUKpD-XWIDMQlqyxF4Low6bw",
  //       },
  //     });
  //     testResponse = await test.get("/");
  //     result = [...result, ...get(testResponse, "data.items")];
  //   }
  //   result = map(result, (item, index) => {
  //     return get(item, "snippet.resourceId.videoId");
  //   });
  //   console.log("testResponse", testResponse);
  //   console.log("result", result);
  //   // console.log("length", get(testResponse, "data.items.length"));
  //   // if (get(testResponse, "data.items.length") === 50) {
  //   //   this.getAllVideo();
  //   // }
  // };

  _onRefresh = () => {
    if (this.state.valueOptions === "admin") {
      this.adminRef.current?._onRefreshData();
    } else if (this.state.valueOptions === "CW") {
      this.cwRef.current?._onRefreshData();
    } else if (this.state.valueOptions === "CM") {
      this.cmRef.current?._onRefreshData();
    } else if (this.state.valueOptions === "AM") {
      this.amRef.current?._onRefreshData();
    } else if (this.state.valueOptions === "AC") {
      this.acRef.current?._onRefreshData();
    } else if (this.state.valueOptions === "VM") {
      this.vmRef.current?._onRefreshData();
    } else if (this.state.valueOptions === "VE") {
      this.veRef.current?._onRefreshData();
    } else if (this.state.valueOptions === "activity") {
      this.activityRef.current?._onRefreshData();
    } else if (this.state.valueOptions === "management") {
      this.adminManagementRef.current?._onRefreshData();
    } else if (this.state.valueOptions === "private") {
      this.reportPrivateRef.current?._onRefreshData();
    }
  };

  onRefresh = () => {
    const userInfo = localStorage.getItem("userInfo");
    axios
      .get(
        "https://sheets.googleapis.com/v4/spreadsheets/1Z_ucuIK9wVHmMiCTThKBLH_3uN2REFW6k31Ov8hgnk0/values:batchGet?ranges=Sheet2&majorDimension=ROWS&key=AIzaSyByXzekuWCb4pI-ZTD7yEAGVYV0224Mc6Q"
      )
      .then((res) => {
        var username = [],
          password = [],
          admin = [],
          cm = [],
          cw = [],
          am = [],
          ac = [],
          vm = [],
          ve = [],
          status = [];
        for (let i = 1; i < res.data.valueRanges[0].values.length; i++) {
          status = [
            ...status,
            res.data.valueRanges[0].values[i][fixUserColumn.status],
          ];
          username = [
            ...username,
            res.data.valueRanges[0].values[i][fixUserColumn.userName],
          ];
          password = [
            ...password,
            res.data.valueRanges[0].values[i][fixUserColumn.password],
          ];
          admin = [
            ...admin,
            res.data.valueRanges[0].values[i][fixUserColumn.admin],
          ];
          cm = [...cm, res.data.valueRanges[0].values[i][fixUserColumn.cm]];
          cw = [...cw, res.data.valueRanges[0].values[i][fixUserColumn.cw]];
          am = [...am, res.data.valueRanges[0].values[i][fixUserColumn.am]];
          ac = [...ac, res.data.valueRanges[0].values[i][fixUserColumn.ac]];
          vm = [...vm, res.data.valueRanges[0].values[i][fixUserColumn.vm]];
          ve = [...ve, res.data.valueRanges[0].values[i][fixUserColumn.ve]];
        }
        const id = localStorage.getItem("id");
        let listContentCode = [];

        for (
          let i = fixUserColumn.tenTickers;
          i < fixUserColumn.beginDate;
          i++
        ) {
          if (!isEmpty(id)) {
            if (res.data.valueRanges[0].values[parseInt(id) + 1][i] == 1) {
              listContentCode = [
                ...listContentCode,
                {
                  value: res.data.valueRanges[0].values[0][i],
                  text: res.data.valueRanges[0].values[0][i],
                },
              ];
            }
          }
        }
        let options = [];
        if (!!id) {
          if (cw[id] == 1) {
            options.push({
              value: "CW",
              label: "Người viết nội dung",
              icon: <EditOutlined />,
            });
          }
          if (cm[id] == 1) {
            options.push({
              value: "CM",
              label: "Quản lý nội dung",
              icon: <FormOutlined />,
            });
          }
          if (ac[id] == 1) {
            options.push({
              value: "AC",
              label: "Người thu âm",
              icon: <AudioOutlined />,
            });
          }
          if (am[id] == 1) {
            options.push({
              value: "AM",
              label: "Quản lý âm thanh",
              icon: <CustomerServiceOutlined />,
            });
          }
          if (ve[id] == 1) {
            options.push({
              value: "VE",
              label: "Video Editor",
              icon: <VideoCameraAddOutlined />,
            });
          }
          if (vm[id] == 1) {
            options.push({
              value: "VM",
              label: "Quản lý Video",
              icon: <DesktopOutlined />,
            });
          }
          if (
            admin[id] == 1 &&
            !includes(
              listAdmin,
              res.data.valueRanges[0].values[parseInt(id) + 1][fixUserColumn.id]
            )
          ) {
            options = [
              {
                value: "admin",
                label: "Admin",
                icon: <CrownOutlined />,
              },
              ...options,
              {
                value: "activity",
                label: "Lịch sử hoạt động",
                icon: <FieldTimeOutlined />,
              },
              {
                value: "management",
                label: "Quản lý admin",
                icon: <FundOutlined />,
              },
            ];
          }
          if (
            admin[id] == 1 &&
            includes(
              listAdmin,
              res.data.valueRanges[0].values[parseInt(id) + 1][fixUserColumn.id]
            )
          ) {
            options = [
              {
                value: "admin",
                label: "Admin",
                icon: <CrownOutlined />,
              },
              ...options,
              {
                value: "activity",
                label: "Lịch sử hoạt động",
                icon: <FieldTimeOutlined />,
              },
              // {
              //   value: "management",
              //   label: "Admin Management",
              //   icon: <FundOutlined />,
              // },
            ];
          }
        }
        options.push({
          value: "private",
          label: "KPI cá nhân",
          icon: <FundOutlined />,
        });
        this.setState(
          {
            dataExcel: res.data.valueRanges[0].values,
            username,
            password,
            admin,
            cm,
            cw,
            am,
            ac,
            vm,
            ve,
            options,
            valueOptions: options[0],
            listContentCode,
            id: JSON.parse(id),
            status,
          },
          () => {
            this._onRefresh();
          }
        );
      });

    if (!!userInfo) {
      this.setState({ isLogin: true, userInfo });
      axios.get(`${apiUrl}/tenticker`).then((res) => {
        this.setState({
          dataSource: res.data.data,
          dataChangeUpdate: res.data.data,
        });
      });
      axios.get(`${apiUrl}/activity`).then((res) => {
        this.setState({
          activity: res.data.data,
          activityChangeUpdate: res.data.data,
        });
      });
    }
  };

  onUpdateActivity = (data) => {
    axios.get(`${apiUrl}/activity`).then((res) => {
      const body = {
        data: [
          // !isEmpty(res.data.data[res.data.data.length - 1])
          //   ? res.data.data[res.data.data.length - 1].id + 1
          //   : 0,
          null,
          moment().format("YYYY-MM-DD HH:mm:ss"),
          ...data,
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

  onLoginSuccess = (id, values) => {
    notification.success({
      message: "Đăng nhập thành công",
      style: { backgroundColor: "#f5fff8" },
    });
    const activity = "Đăng nhập";
    const user_name = this.state.dataExcel[id + 1][fixUserColumn.cms];
    const data = [activity, user_name];
    this.onUpdateActivity(data);
    this.setState({ isLogin: true, id, userInfo: values.username });
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
      case "admin":
        return (
          <Admin
            data={this.state.dataExcel}
            listContentCode={this.state.listContentCode}
            ref={this.adminRef}
            id={this.state.id}
          />
        );
      case "CW":
        return (
          <CW
            data={this.state.dataExcel}
            listContentCode={this.state.listContentCode}
            id={this.state.id}
            ref={this.cwRef}
          />
        );
      case "CM":
        return (
          <CM
            data={this.state.dataExcel}
            listContentCode={this.state.listContentCode}
            ref={this.cmRef}
            id={this.state.id}
          />
        );
      case "AC":
        return (
          <AC
            data={this.state.dataExcel}
            listContentCode={this.state.listContentCode}
            id={this.state.id}
            ref={this.acRef}
          />
        );
      case "AM":
        return (
          <AM
            data={this.state.dataExcel}
            listContentCode={this.state.listContentCode}
            ref={this.amRef}
            id={this.state.id}
          />
        );
      case "VE":
        return (
          <VE
            data={this.state.dataExcel}
            listContentCode={this.state.listContentCode}
            ref={this.veRef}
            id={this.state.id}
          />
        );
      case "VM":
        return (
          <VM
            data={this.state.dataExcel}
            listContentCode={this.state.listContentCode}
            ref={this.vmRef}
            id={this.state.id}
          />
        );
      case "activity":
        return (
          <ActivityLog
            data={this.state.dataExcel}
            listContentCode={this.state.listContentCode}
            ref={this.activityRef}
            id={this.state.id}
          />
        );
      case "management":
        return (
          <AdminManagement
            data={this.state.dataExcel}
            listContentCode={this.state.listContentCode}
            ref={this.adminManagementRef}
            id={this.state.id}
          />
        );
      case "private":
        return (
          <ReportPrivate
            data={this.state.dataExcel}
            listContentCode={this.state.listContentCode}
            ref={this.adminManagementRef}
            id={this.state.id}
          />
        );
      default:
        return null;
    }
  };

  render() {
    const {
      isLogin,
      username,
      password,
      roleCode,
      userInfo,
      options,
      valueOptions,
      status,
    } = this.state;
    return (
      <div style={{ margin: 0, height: "100%" }}>
        {isLogin ? (
          <div>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                }}
              >
                <img
                  src={logo}
                  alt="Logo"
                  width={50}
                  height={50}
                  style={{ margin: 20, marginRight: 10 }}
                />
                <Title
                  level={4}
                  style={{
                    color: "#238c31",
                    margin: 20,
                    fontWeight: 700,
                    marginLeft: 0,
                  }}
                >
                  EBE MEDIA
                </Title>
              </div>

              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                }}
              >
                <Title level={5} style={{ margin: 20, color: "#238c31" }}>
                  Người dùng: {userInfo}
                </Title>
                <Button
                  className="buttonPrimary"
                  type={"primary"}
                  icon={<LogoutOutlined />}
                  style={{
                    color: "white",
                    backgroundColor: "red",
                    fontWeight: "bold",
                    borderRadius: 5,
                    borderColor: "red",
                    margin: 20,
                  }}
                  onClick={() => {
                    confirm({
                      title: "Thông báo",
                      content: `Bạn có chắc muốn đăng xuất`,
                      okCancel: () => {},
                      onOk: () => {
                        localStorage.clear("userInfo");
                        this.setState({ isLogin: false }, () => {
                          notification.success({
                            message: "Đăng xuất thành công",
                            style: { backgroundColor: "#f5fff8" },
                          });
                          const activity = "Đăng xuất";
                          const user_name =
                            this.state.dataExcel[this.state.id + 1][
                              fixUserColumn.cms
                            ];
                          const data = [activity, user_name];
                          this.onUpdateActivity(data);
                        });
                      },
                    });
                  }}
                >
                  Đăng xuất
                </Button>
              </div>
            </div>
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
              {map(options, (item) => {
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
        ) : (
          <LoginScreen
            onLoginSuccess={this.onLoginSuccess}
            onRefresh={this.onRefresh}
            username={username}
            password={password}
            roleCode={roleCode}
            status={status}
          />
        )}
      </div>
    );
  }
}

export default App;
