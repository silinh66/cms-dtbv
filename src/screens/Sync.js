import { SyncOutlined } from "@ant-design/icons";
import { Button, notification, Spin } from "antd";
import axios from "axios";
import { isEmpty } from "lodash";
import moment from "moment";
import React, { Component } from "react";
import { apiUrl } from "../constants.js/api";
import { fixUserColumn } from "../utils/common";

export default class Sync extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
    };
  }

  componentDidMount() {
    // this.onSyncData();
  }

  onSyncData = () => {
    // this.setState({
    //   loading: true,
    // });
    const { dataExcel } = this.props;
    axios.get(`${apiUrl}/tenticker`).then((res) => {
      axios.delete(`${apiUrl}/tenticker/all`).then((resDelete) => {
        notification.success({
          message: "Xoá data thành công",
          style: { backgroundColor: "#f5fff8" },
        });

        const data = res.data.data;
        for (let i = 0; i < data.length; i++) {
          if (data[i].is_new === 1) {
            let writer_nick = "",
              composer_nick = "";
            for (let j = 0; j < dataExcel.length; j++) {
              if (data[i].writer_name === dataExcel[j][fixUserColumn.cms]) {
                writer_nick = dataExcel[j][fixUserColumn.nickname];
              }
              if (data[i].composer_name === dataExcel[j][fixUserColumn.cms]) {
                composer_nick = dataExcel[j][fixUserColumn.nickname];
              }
            }
            const body = {
              data: [
                null, //id
                data[i].content_code, //content_code
                data[i].writer_code, //writer_code
                data[i].full_title, //full_title
                data[i].content_raw, //content_raw
                data[i].writer_name, //writer_name
                data[i].content_status, //content_status
                data[i].content_final, //content_final
                data[i].content_note, //content_note
                !isEmpty(data[i].content_date)
                  ? moment(data[i].content_date).format("YYYY-MM-DD HH:mm:ss")
                  : null, //content_date
                data[i].composer_code, //composer_code
                data[i].composer_name, //composer_name
                !isEmpty(data[i].audio_date)
                  ? moment(data[i].audio_date).format("YYYY-MM-DD HH:mm:ss")
                  : null, //audio_date
                data[i].link_audio, //link_audio
                data[i].audio_status, //audio_status
                data[i].audio_note, //audio_note
                writer_nick, //writer_nick
                composer_nick, //composer_nick
                data[i].editor_name, //editor_name
                !isEmpty(data[i].video_date)
                  ? moment(data[i].video_date).format("YYYY-MM-DD HH:mm:ss")
                  : null, //video_date
                data[i].footage, //footage
                data[i].editor_code, //editor_code
                data[i].link_video, //link_video
                data[i].video_status, //video_status
                data[i].video_note, //video_note
                data[i].link_youtube, //link_youtube
                !isEmpty(data[i].public_date)
                  ? moment(data[i].public_date).format("YYYY-MM-DD HH:mm:ss")
                  : null, //public_date
                data[i].is_first_public, //is_first_public
                data[i].is_first_content_final, //is_first_content_final
                data[i].is_first_audio, //is_first_audio
                data[i].is_first_video, //is_first_video
                !isEmpty(data[i].add_composer_date)
                  ? moment(data[i].add_composer_date).format(
                      "YYYY-MM-DD HH:mm:ss"
                    )
                  : null, //add_composer_date
                !isEmpty(data[i].add_ve_date)
                  ? moment(data[i].add_ve_date).format("YYYY-MM-DD HH:mm:ss")
                  : null, //add_ve_date
                !isEmpty(data[i].confirm_content_date)
                  ? moment(data[i].confirm_content_date).format(
                      "YYYY-MM-DD HH:mm:ss"
                    )
                  : null, //confirm_content_date
                !isEmpty(data[i].confirm_video_date)
                  ? moment(data[i].confirm_video_date).format(
                      "YYYY-MM-DD HH:mm:ss"
                    )
                  : null, //confirm_video_date
                !isEmpty(data[i].confirm_audio_date)
                  ? moment(data[i].confirm_audio_date).format(
                      "YYYY-MM-DD HH:mm:ss"
                    )
                  : null, //confirm_audio_date
                data[i].salary_index, //salary_index
                data[i].is_new,
                data[i].content_length,
                data[i].confirm_video_date
              ],
            };
            axios.post(`${apiUrl}/tenticker/add`, body).then((res) => {
              if (i === data.length - 1) {
                notification.success({
                  message: "Đồng bộ dữ liệu thành công",
                  style: { backgroundColor: "#f5fff8" },
                });
              }
            });
          }
        }
      });
    });
  };
  render() {
    const { loading } = this.state;
    return (
      <div>
        <Spin spinning={loading} delay={500}>
          <Button
            className="buttonPrimary"
            type={"primary"}
            icon={<SyncOutlined />}
            style={{
              color: "white",
              backgroundColor: "#238c31",
              fontWeight: "bold",
              borderRadius: 5,
              borderColor: "#238c31",
              margin: 20,
            }}
            onClick={() => {
              this.onSyncData();
            }}
          >
            Sync Data
          </Button>
        </Spin>
      </div>
    );
  }
}
