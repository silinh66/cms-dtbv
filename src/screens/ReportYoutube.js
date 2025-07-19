import React, { Component } from "react";
import { PieChartOutlined, StockOutlined } from "@ant-design/icons";
import {
  Button,
  Card,
  Col,
  DatePicker,
  notification,
  Row,
  Table,
  Tabs,
} from "antd";
import axios from "axios";
import { filter, get, includes, map } from "lodash";
import { apiUrl } from "../constants.js/api";
import ReportNangSuat from "./ReportNangSuat";
import { monthFormat } from "../utils/common";

const KEY = "AIzaSyD3uGEgJa2Y-PqhcZ_cessU2xVZglG-sWs";

const playlistId = "UUKe4Zl3MksF-dj9tHKZJaDw"; //Ten Thật thà
// const playlistId = "UUKpD-XWIDMQlqyxF4Low6bw", //Ten Kpop
const { TabPane } = Tabs;

const listTab = [
  {
    value: "report_nang_suat",
    label: "Report năng suất nhân viên",
    icon: <StockOutlined />,
  },
  {
    value: "report_youtube",
    label: "Report chỉ số Youtube",
    icon: <PieChartOutlined />,
  },
];

export default class ReportYoutube extends Component {
  constructor(props) {
    super(props);
    this.state = {
      url: "",
      linkAuthen: "",
      estimatedRevenue: 0,
      views: 0,
      comments: 0,
      likes: 0,
      dislikes: 0,
      estimatedMinutesWatched: 0,
      averageViewDuration: 0,
      annotationClickThroughRate: 0,
      subscribersGained: 0,
      subscribersLost: 0,
      redViews: 0,
      shares: 0,
      averageViewPercentage: 0,
      yapiData: [],
      videoIds: [],
      videosData: [],
      token: "",
      isLoading: false,
      valueOptions: get(listTab[0], "value"),
      month: null,
    };
  }

  async componentDidMount() {
    const listTokenLocalStorage = await localStorage.getItem("listToken");
    let listToken = !!listTokenLocalStorage
      ? JSON.parse(listTokenLocalStorage)
      : [];
    console.log("listToken in getData", listToken);

    this.getAllVideo();
    var url_string = window.location.href; //window.location.href
    const url = this.gup("code", url_string);
    console.log("url", url);
    this.setState({ url });
    if (!!url) {
      axios.get(`${apiUrl}/getToken?code=${url}`).then((res) => {
        if (!!res.data.data) {
          const token = res.data.data;
          console.log("token", token);
          //Get channelId from token
          const body = {
            token: token,
            videoIds: [],
          };
          axios.post(`${apiUrl}/getChannelId`, body).then((res) => {
            console.log("channelId", res.data.data);

            const channelInfo = {
              token,
              channelId: res.data.data,
            };
            listToken = filter(listToken, (item, index) => {
              return item.channelId !== res.data.data;
            });
            console.log("channelInfo", channelInfo);
            listToken.push(channelInfo);
            console.log("listToken", listToken);
            localStorage.setItem("token", JSON.stringify(token));
            localStorage.setItem("listToken", JSON.stringify(listToken));
            this.setState({
              token,
            });
          });
        }
      });
    }
    axios.get(`${apiUrl}/authen`).then((res) => {
      // console.log("res", res);
      this.setState({ linkAuthen: res.data.data });
    });
  }

  _renderTab = (type) => {
    switch (type) {
      case "report_nang_suat":
        return <ReportNangSuat />;
      case "report_youtube":
        return <ReportYoutube />;
      default:
        return null;
    }
  };

  onChangeMonth = (value) => {
    this.setState({ month: value });
  };

  getAllVideo = async () => {
    let result = [];
    let test = axios.create({
      baseURL: "https://www.googleapis.com/youtube/v3/playlistItems",
      params: {
        part: "snippet",
        key: KEY,
        maxResults: 50,
        // pageToken: "CDIQAA",
        // playlistId: "UUKpD-XWIDMQlqyxF4Low6bw", //Ten Kpop
        // playlistId: 'UUKe4Zl3MksF-dj9tHKZJaDw' //Ten Thật thà
        playlistId,
      },
    });
    let testResponse = await test.get("/");
    result = [...result, ...get(testResponse, "data.items")];
    // console.log("testResponse", testResponse);
    while (get(testResponse, "data.items.length") === 50) {
      test = axios.create({
        baseURL: "https://www.googleapis.com/youtube/v3/playlistItems",
        params: {
          part: "snippet",
          key: KEY,
          maxResults: 50,
          pageToken: get(testResponse, "data.nextPageToken"),
          // playlistId: "UUKpD-XWIDMQlqyxF4Low6bw",
          playlistId,
        },
      });
      testResponse = await test.get("/");
      result = [...result, ...get(testResponse, "data.items")];
    }
    result = map(result, (item, index) => {
      return get(item, "snippet.resourceId.videoId");
    });
    console.log("testResponse", testResponse);
    console.log("result", result);
    this.setState({ videoIds: result });
    // console.log("length", get(testResponse, "data.items.length"));
    // if (get(testResponse, "data.items.length") === 50) {
    //   this.getAllVideo();
    // }
  };

  getDataChannel = async () => {
    const tokenLocalStorage = await localStorage.getItem("token");
    const token = JSON.parse(tokenLocalStorage);
    // console.log("token in getData", token);
    if (!!token) {
      const body = {
        token: token,
        videoIds: [],
      };
      // axios.post(`${apiUrl}/getChannelId`, body).then((res) => {
      //   console.log("channelId", res.data.data);
      // });
      axios.post(`${apiUrl}/yapi`, body).then((res) => {
        if (!!res.data.data) {
          const yapiData = res.data.data[0];
          // console.log("estimatedRevenue", yapiData[0]);
          // console.log("views", yapiData[1]);
          // console.log("comments", yapiData[2]);
          // console.log("likes", yapiData[3]);
          // console.log("dislikes", yapiData[4]);
          // console.log("estimatedMinutesWatched", yapiData[5]);
          // console.log("averageViewDuration", yapiData[6]);
          this.setState({
            estimatedRevenue: yapiData[0],
            views: yapiData[1],
            comments: yapiData[2],
            likes: yapiData[3],
            dislikes: yapiData[4],
            estimatedMinutesWatched: yapiData[5],
            averageViewDuration: yapiData[6],
            annotationClickThroughRate: yapiData[7],
            subscribersGained: yapiData[8],
            subscribersLost: yapiData[9],
            redViews: yapiData[10],
            shares: yapiData[11],
            averageViewPercentage: yapiData[12],
            yapiData: yapiData,
          });
        }
      });
    } else {
      notification.info({
        message: "Vui lòng xác thực trước khi lấy data",
        style: { backgroundColor: "#f5fff8" },
      });
    }
  };

  getDataVideos = async () => {
    const tokenLocalStorage = await localStorage.getItem("token");
    const token = JSON.parse(tokenLocalStorage);
    // console.log("token in getData", token);
    if (!!token) {
      this.setState({ isLoading: true });
      const body = {
        token: token,
        videoIds: this.state.videoIds,
      };
      axios.post(`${apiUrl}/yapi`, body).then((res) => {
        if (!!res.data.data) {
          let yapiData = res.data.data;
          console.log("yapiData", yapiData);
          yapiData = map(yapiData, (item, index) => {
            let value = item[0];
            return {
              stt: index + 1,
              videoId: this.state.videoIds[index],
              estimatedRevenue: value[0],
              views: value[1],
              comments: value[2],
              likes: value[3],
              dislikes: value[4],
              estimatedMinutesWatched: value[5],
              averageViewDuration: value[6],
              annotationClickThroughRate: value[7],
              subscribersGained: value[8],
              subscribersLost: value[9],
              redViews: value[10],
              shares: value[11],
              averageViewPercentage: value[12],
            };
          });
          this.setState({
            videosData: yapiData,
            isLoading: false,
          });
        }
      });
    } else {
      notification.info({
        message: "Vui lòng xác thực trước khi lấy data",
        style: { backgroundColor: "#f5fff8" },
      });
    }
  };

  gup = (name, url) => {
    if (!url) url = window.location.href;
    name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
    var regexS = "[\\?&]" + name + "=([^&#]*)";
    var regex = new RegExp(regexS);
    var results = regex.exec(url);
    return results == null ? null : results[1];
  };
  render() {
    const {
      url,
      linkAuthen,
      estimatedRevenue,
      views,
      comments,
      likes,
      dislikes,
      estimatedMinutesWatched,
      averageViewDuration,
      yapiData,
      token,
      annotationClickThroughRate,
      subscribersGained,
      subscribersLost,
      redViews,
      shares,
      averageViewPercentage,
      videosData,
      isLoading,
      valueOptions,
      month,
    } = this.state;
    const columns = [
      {
        title: "STT",
        key: "stt",
        dataIndex: "stt",
      },
      {
        title: "Video Id",
        key: "videoId",
        dataIndex: "videoId",
      },
      {
        title: "estimatedRevenue",
        key: "estimatedRevenue",
        dataIndex: "estimatedRevenue",
      },
      {
        title: "views",
        key: "views",
        dataIndex: "views",
      },
      {
        title: "comments",
        key: "comments",
        dataIndex: "comments",
      },
      {
        title: "likes",
        key: "likes",
        dataIndex: "likes",
      },
      {
        title: "dislikes",
        key: "dislikes",
        dataIndex: "dislikes",
      },
      {
        title: "estimatedMinutesWatched",
        key: "estimatedMinutesWatched",
        dataIndex: "estimatedMinutesWatched",
      },
      {
        title: "averageViewDuration",
        key: "averageViewDuration",
        dataIndex: "averageViewDuration",
      },
      {
        title: "annotationClickThroughRate",
        key: "annotationClickThroughRate",
        dataIndex: "annotationClickThroughRate",
      },
      {
        title: "subscribersGained",
        key: "subscribersGained",
        dataIndex: "subscribersGained",
      },
      {
        title: "subscribersLost",
        key: "subscribersLost",
        dataIndex: "subscribersLost",
      },
      {
        title: "redViews",
        key: "redViews",
        dataIndex: "redViews",
      },
      {
        title: "shares",
        key: "shares",
        dataIndex: "shares",
      },
      {
        title: "averageViewPercentage",
        key: "averageViewPercentage",
        dataIndex: "averageViewPercentage",
      },
    ];
    return (
      <div>
        <div
          style={{
            justifyContent: "space-around",
            display: "flex",
          }}
        >
          <Button
            href={linkAuthen}
            style={{
              color: "white",
              backgroundColor: "#238c31",
              fontWeight: "bold",
              borderRadius: 5,
              borderColor: "#238c31",
              marginBottom: 20,
              marginLeft: 20,
            }}
          >
            Authentication
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
        </div>
        <div className="site-card-wrapper">
          <Row gutter={16}>
            <Col span={6}>
              <Card
                style={{
                  backgroundColor: "#2a44a3",
                  color: "white",
                }}
                title="TỔNG DOANH SỐ"
                headStyle={{
                  color: "white",
                  fontSize: 28,
                  paddingLeft: 95,
                }}
                bordered={false}
                bodyStyle={{ padding: 0, paddingBottom: 28 }}
              >
                <div style={{ padding: 20, marginLeft: 70 }}>
                  <Row gutter={8}>
                    <Col
                      style={{
                        fontSize: 16,
                        fontWeight: "bold",
                        marginTop: 10,
                      }}
                      span={12}
                    >
                      THỰC ĐẠT
                    </Col>
                    <Col style={{ fontSize: 24, fontWeight: "bold" }} span={12}>
                      120 TR
                    </Col>
                  </Row>{" "}
                  <Row gutter={8}>
                    <Col
                      style={{
                        fontSize: 16,
                        fontWeight: "bold",
                        marginTop: 10,
                      }}
                      span={12}
                    >
                      KẾ HOẠCH
                    </Col>
                    <Col style={{ fontSize: 24, fontWeight: "bold" }} span={12}>
                      150 TR
                    </Col>
                  </Row>
                  <Row gutter={8}>
                    <Col
                      style={{
                        fontSize: 16,
                        fontWeight: "bold",
                        marginTop: 10,
                      }}
                      span={12}
                    >
                      % KẾ HOẠCH
                    </Col>
                    <Col style={{ fontSize: 24, fontWeight: "bold" }} span={12}>
                      80 %
                    </Col>
                  </Row>
                </div>

                <div
                  style={{
                    height: 1,
                    backgroundColor: "#ffffff",
                    marginTop: 10,
                    marginBottom: 10,
                  }}
                />
                <div style={{ padding: 20, marginLeft: 70 }}>
                  <Row gutter={8}>
                    <Col
                      style={{ fontSize: 14, fontWeight: "bold", marginTop: 5 }}
                      span={12}
                    >
                      DT cũ
                    </Col>
                    <Col style={{ fontSize: 18, fontWeight: "bold" }} span={12}>
                      100 tr
                    </Col>
                  </Row>
                  <Row gutter={8}>
                    <Col
                      style={{ fontSize: 14, fontWeight: "bold", marginTop: 5 }}
                      span={12}
                    >
                      DT mới
                    </Col>
                    <Col style={{ fontSize: 18, fontWeight: "bold" }} span={12}>
                      20 tr
                    </Col>
                  </Row>
                </div>
              </Card>
            </Col>
            <Col span={6}>
              <Card
                style={{ backgroundColor: "#fe8d00", color: "white" }}
                title="TỔNG LƯỢT XEM"
                headStyle={{ color: "white", fontSize: 28, paddingLeft: 100 }}
                bordered={false}
                bodyStyle={{ padding: 0, paddingBottom: 28 }}
              >
                <div style={{ padding: 20, marginLeft: 70 }}>
                  <Row gutter={8}>
                    <Col style={{ fontSize: 16, fontWeight: "bold" }} span={12}>
                      THỰC ĐẠT
                    </Col>
                    <Col style={{ fontSize: 24, fontWeight: "bold" }} span={12}>
                      12 TR
                    </Col>
                  </Row>{" "}
                  <Row gutter={8}>
                    <Col style={{ fontSize: 16, fontWeight: "bold" }} span={12}>
                      KẾ HOẠCH
                    </Col>
                    <Col style={{ fontSize: 24, fontWeight: "bold" }} span={12}>
                      15 TR
                    </Col>
                  </Row>
                  <Row gutter={8}>
                    <Col style={{ fontSize: 16, fontWeight: "bold" }} span={12}>
                      % KẾ HOẠCH
                    </Col>
                    <Col style={{ fontSize: 24, fontWeight: "bold" }} span={12}>
                      80 %
                    </Col>
                  </Row>
                </div>
                <div
                  style={{
                    height: 1,
                    backgroundColor: "#ffffff",
                    marginTop: 10,
                    marginBottom: 10,
                  }}
                />
                <div style={{ padding: 20, marginLeft: 70 }}>
                  <Row gutter={8}>
                    <Col style={{ fontSize: 14, fontWeight: "bold" }} span={12}>
                      View cũ
                    </Col>
                    <Col style={{ fontSize: 18, fontWeight: "bold" }} span={12}>
                      10 tr
                    </Col>
                  </Row>
                  <Row gutter={8}>
                    <Col style={{ fontSize: 14, fontWeight: "bold" }} span={12}>
                      View mới
                    </Col>
                    <Col style={{ fontSize: 18, fontWeight: "bold" }} span={12}>
                      2 tr
                    </Col>
                  </Row>
                </div>
              </Card>
            </Col>
            <Col span={6}>
              <Card
                style={{ backgroundColor: "#2cb7f2", color: "white" }}
                title="SẢN LƯỢNG"
                headStyle={{ color: "white", fontSize: 28, paddingLeft: 130 }}
                bordered={false}
                bodyStyle={{ padding: 0 }}
              >
                <div style={{ padding: 20, marginLeft: 80 }}>
                  <Row gutter={8}>
                    <Col style={{ fontSize: 16, fontWeight: "bold" }} span={12}>
                      VIDEO PUBLISH
                    </Col>
                    <Col style={{ fontSize: 24, fontWeight: "bold" }} span={12}>
                      72
                    </Col>
                  </Row>{" "}
                  <Row gutter={8}>
                    <Col style={{ fontSize: 16, fontWeight: "bold" }} span={12}>
                      KẾ HOẠCH
                    </Col>
                    <Col style={{ fontSize: 24, fontWeight: "bold" }} span={12}>
                      90
                    </Col>
                  </Row>
                  <Row gutter={8}>
                    <Col style={{ fontSize: 16, fontWeight: "bold" }} span={12}>
                      % KẾ HOẠCH
                    </Col>
                    <Col style={{ fontSize: 24, fontWeight: "bold" }} span={12}>
                      80 %
                    </Col>
                  </Row>
                </div>
                <div
                  style={{
                    height: 1,
                    backgroundColor: "#ffffff",
                    marginTop: 10,
                    marginBottom: 10,
                  }}
                />
                <div style={{ padding: 20, marginLeft: 80 }}>
                  <Row gutter={8}>
                    <Col style={{ fontSize: 14, fontWeight: "bold" }} span={12}>
                      Script
                    </Col>
                    <Col style={{ fontSize: 18, fontWeight: "bold" }} span={12}>
                      100
                    </Col>
                  </Row>
                  <Row gutter={8}>
                    <Col style={{ fontSize: 14, fontWeight: "bold" }} span={12}>
                      Audio
                    </Col>
                    <Col style={{ fontSize: 18, fontWeight: "bold" }} span={12}>
                      90
                    </Col>
                  </Row>
                  <Row gutter={8}>
                    <Col style={{ fontSize: 14, fontWeight: "bold" }} span={12}>
                      Video sản xuất
                    </Col>
                    <Col style={{ fontSize: 18, fontWeight: "bold" }} span={12}>
                      75
                    </Col>
                  </Row>
                </div>
              </Card>
            </Col>
            <Col span={6}>
              <Card
                style={{ backgroundColor: "#029d01", color: "white" }}
                title="SUBSCRIBERS"
                headStyle={{ color: "white", fontSize: 28, paddingLeft: 125 }}
                bordered={false}
                bodyStyle={{ padding: 0, paddingBottom: 124 }}
              >
                <div style={{ padding: 20, marginLeft: 70 }}>
                  <Row gutter={8}>
                    <Col style={{ fontSize: 16, fontWeight: "bold" }} span={12}>
                      SUB
                    </Col>
                    <Col style={{ fontSize: 24, fontWeight: "bold" }} span={12}>
                      21000
                    </Col>
                  </Row>{" "}
                  <Row gutter={8}>
                    <Col style={{ fontSize: 16, fontWeight: "bold" }} span={12}>
                      KẾ HOẠCH
                    </Col>
                    <Col style={{ fontSize: 24, fontWeight: "bold" }} span={12}>
                      21000
                    </Col>
                  </Row>
                  <Row gutter={8}>
                    <Col style={{ fontSize: 16, fontWeight: "bold" }} span={12}>
                      % KẾ HOẠCH
                    </Col>
                    <Col style={{ fontSize: 24, fontWeight: "bold" }} span={12}>
                      100 %
                    </Col>
                  </Row>
                </div>

                <div
                  style={{
                    height: 1,
                    backgroundColor: "#ffffff",
                    marginTop: 10,
                    marginBottom: 10,
                  }}
                />
              </Card>
            </Col>
          </Row>
          <Row
            gutter={16}
            style={{ marginTop: 40, justifyContent: "space-around" }}
          >
            <Col span={6}>
              <Card
                style={{ backgroundColor: "#433d7b", color: "white" }}
                title="P/L VIDEO"
                headStyle={{ color: "white", fontSize: 28, paddingLeft: 145 }}
                bordered={false}
                bodyStyle={{ padding: 0, paddingBottom: 28 }}
              >
                <div style={{ padding: 20, paddingBottom: 58, marginLeft: 80 }}>
                  <Row gutter={8}>
                    <Col style={{ fontSize: 16, fontWeight: "bold" }} span={12}>
                      DT/VIDEO
                    </Col>
                    <Col style={{ fontSize: 24, fontWeight: "bold" }} span={12}>
                      2 TR
                    </Col>
                  </Row>{" "}
                  <Row gutter={8}>
                    <Col style={{ fontSize: 16, fontWeight: "bold" }} span={12}>
                      CP/VIDEO
                    </Col>
                    <Col style={{ fontSize: 24, fontWeight: "bold" }} span={12}>
                      1.5 TR
                    </Col>
                  </Row>
                </div>

                <div
                  style={{
                    height: 1,
                    backgroundColor: "#ffffff",
                    marginTop: 10,
                    marginBottom: 10,
                  }}
                />
                <div style={{ padding: 20, marginLeft: 80 }}>
                  <Row gutter={8}>
                    <Col style={{ fontSize: 14, fontWeight: "bold" }} span={12}>
                      Lợi nhuận/Video
                    </Col>
                    <Col style={{ fontSize: 18, fontWeight: "bold" }} span={12}>
                      0.5 tr
                    </Col>
                  </Row>
                  <Row gutter={8}>
                    <Col style={{ fontSize: 14, fontWeight: "bold" }} span={12}>
                      %Lợi nhuận biên/Video
                    </Col>
                    <Col style={{ fontSize: 18, fontWeight: "bold" }} span={12}>
                      25%
                    </Col>
                  </Row>
                </div>
              </Card>
            </Col>
            <Col span={6}>
              <Card
                style={{ backgroundColor: "#ff0164", color: "white" }}
                title="P/L VẬN HÀNH"
                headStyle={{ color: "white", fontSize: 28, paddingLeft: 115 }}
                bordered={false}
                bodyStyle={{ padding: 0, paddingBottom: 28 }}
              >
                <div style={{ padding: 20, marginLeft: 70 }}>
                  <Row gutter={8}>
                    <Col style={{ fontSize: 16, fontWeight: "bold" }} span={12}>
                      DOANH THU
                    </Col>
                    <Col style={{ fontSize: 24, fontWeight: "bold" }} span={12}>
                      150 TR
                    </Col>
                  </Row>{" "}
                  <Row gutter={8}>
                    <Col style={{ fontSize: 16, fontWeight: "bold" }} span={12}>
                      CHI PHÍ SX
                    </Col>
                    <Col style={{ fontSize: 24, fontWeight: "bold" }} span={12}>
                      30 TR
                    </Col>
                  </Row>
                  <Row gutter={8}>
                    <Col style={{ fontSize: 16, fontWeight: "bold" }} span={12}>
                      CHI PHÍ QL
                    </Col>
                    <Col style={{ fontSize: 24, fontWeight: "bold" }} span={12}>
                      100 TR
                    </Col>
                  </Row>
                </div>

                <div
                  style={{
                    height: 1,
                    backgroundColor: "#ffffff",
                    marginTop: 10,
                    marginBottom: 10,
                  }}
                />
                <div style={{ padding: 20, marginLeft: 70 }}>
                  <Row gutter={8}>
                    <Col style={{ fontSize: 14, fontWeight: "bold" }} span={12}>
                      Lợi nhuận
                    </Col>
                    <Col style={{ fontSize: 18, fontWeight: "bold" }} span={12}>
                      20 tr
                    </Col>
                  </Row>
                  <Row gutter={8}>
                    <Col style={{ fontSize: 14, fontWeight: "bold" }} span={12}>
                      %Lợi nhuận biên
                    </Col>
                    <Col style={{ fontSize: 18, fontWeight: "bold" }} span={12}>
                      30%
                    </Col>
                  </Row>
                </div>
              </Card>
            </Col>
          </Row>
        </div>
      </div>
    );
  }
}
