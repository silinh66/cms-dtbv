import {
  AreaChartOutlined,
  PieChartOutlined,
  StockOutlined,
} from "@ant-design/icons";
import { Button, notification, Table, Tabs } from "antd";
import axios from "axios";
import { get, map } from "lodash";
import React, { Component } from "react";
import { apiUrl } from "../constants.js/api";
import ReportNangSuat from "./ReportNangSuat";
import ReportYoutube from "./ReportYoutube";
import ReportYoutubeTime from "./ReportYoutubeTime";

const KEY = "AIzaSyD3uGEgJa2Y-PqhcZ_cessU2xVZglG-sWs";

const { TabPane } = Tabs;

const listTab = [
  {
    value: "report_nang_suat",
    label: "Report năng suất nhân viên",
    icon: <StockOutlined />,
  },
  // {
  //   value: "report_youtube",
  //   label: "Báo cáo tổng quan",
  //   icon: <PieChartOutlined />,
  // },
  // {
  //   value: "report_youtube_time",
  //   label: "Báo cáo so sánh theo thời gian",
  //   icon: <AreaChartOutlined />,
  // },
];

export default class Report extends Component {
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
    };
  }

  componentDidMount() {
    this.getAllVideo();

    var url_string = window.location.href; //window.location.href
    const url = this.gup("code", url_string);
    console.log("url", url);
    this.setState({ url });

    // if (!!url) {
    //   axios.get(`${apiUrl}/getToken?code=${url}`).then((res) => {
    //     if (!!res.data.data) {
    //       const token = res.data.data;
    //       console.log("token", token);
    //       localStorage.setItem("token", JSON.stringify(token));
    //       this.setState({
    //         token,
    //       });
    //     }
    //   });
    // }

    // axios.get(`${apiUrl}/authen`).then((res) => {
    //   // console.log("res", res);
    //   this.setState({ linkAuthen: res.data.data });
    // });
  }

  _renderTab = (type) => {
    switch (type) {
      case "report_nang_suat":
        return <ReportNangSuat />;
      case "report_youtube":
        return <ReportYoutube />;
      case "report_youtube_time":
        return <ReportYoutubeTime />;
      default:
        return null;
    }
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
        playlistId: "UUKpD-XWIDMQlqyxF4Low6bw",
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
          playlistId: "UUKpD-XWIDMQlqyxF4Low6bw",
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
    console.log("token in getData", token);
    if (!!token) {
      const body = {
        token: token,
        videoIds: [],
      };
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
    this.setState({ isLoading: true });
    const tokenLocalStorage = await localStorage.getItem("token");
    const token = JSON.parse(tokenLocalStorage);
    console.log("token in getData", token);
    if (!!token) {
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
    if (!url) url = location.href;
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
    } = this.state;
    console.log("token", token);
    console.log("yapiData", yapiData);
    console.log("videosData", videosData);
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
        {/* <Button
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
        <Button
          style={{
            color: "white",
            backgroundColor: "#238c31",
            fontWeight: "bold",
            borderRadius: 5,
            borderColor: "#238c31",
            marginLeft: 10,
            marginBottom: 20,
          }}
          onClick={() => {
            this.getDataChannel();
          }}
        >
          Get Data Channel
        </Button>
        <Button
          style={{
            color: "white",
            backgroundColor: "#238c31",
            fontWeight: "bold",
            borderRadius: 5,
            borderColor: "#238c31",
            marginLeft: 10,
            marginBottom: 20,
          }}
          onClick={() => {
            this.getDataVideos();
          }}
        >
          Get Data Videos
        </Button>
        {yapiData.length > 0 && (
          <div>
            <p>estimatedRevenue: {estimatedRevenue}</p>
            <p>views: {views}</p>
            <p>comments: {comments}</p>
            <p>likes: {likes}</p>
            <p>dislikes: {dislikes}</p>
            <p>estimatedMinutesWatched: {estimatedMinutesWatched}</p>
            <p>averageViewDuration: {averageViewDuration}</p>
            <p>annotationClickThroughRate: {annotationClickThroughRate}</p>
            <p>subscribersGained: {subscribersGained}</p>
            <p>subscribersLost: {subscribersLost}</p>
            <p>redViews: {redViews}</p>
            <p>shares: {shares}</p>
            <p>averageViewPercentage: {averageViewPercentage}</p>
          </div>
        )}

        <Table
          loading={isLoading}
          size="middle"
          bordered
          // onChange={this.handleChange}
          // components={this.components}
          // style={{ marginBottom: 15 }}
          rowClassName={(record, index) => {
            if (index % 2 !== 0) {
              return "rowBackgroundColor";
            }
          }}
          // scroll={{ x: 1500, y: 400 }}
          // scroll={{ y: 240 }}
          dataSource={videosData}
          columns={columns}
          rowKey="stt"
          pagination={
            videosData.length > 10
              ? {
                  // showSizeChanger: false,
                  total: videosData.length,
                }
              : false
          }
          // sticky
        /> */}

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
