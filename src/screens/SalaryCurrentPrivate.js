import { Button, Input, notification, Table } from "antd";
import axios from "axios";
import { debounce, get, includes, isEmpty, map, trim } from "lodash";
import moment from "moment";
import React, { Component } from "react";
import { Resizable } from "react-resizable";
import { apiUrl } from "../constants.js/api";
import {
  CheckCircleOutlined,
  CheckOutlined,
  CloseOutlined,
  FileExcelOutlined,
} from "@ant-design/icons";
import confirm from "antd/lib/modal/confirm";
import {
  ExportExcel,
  fixUserColumn,
  formatNumber,
  numberFormat,
  salaryIndexDropdown,
} from "../utils/common";

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

export default class SalaryCurrentPrivate extends Component {
  constructor(props) {
    super(props);
    this.state = {
      salary: [],
      salaryChangeUpdate: [],
      editingKey: "",
      monthNow: null,
      monthNowString: "",
      column: [
        {
          title: "STT",
          dataIndex: "stt",
          key: "stt",
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
          title: "Employee Id",
          dataIndex: "ma_nv",
          key: "ma_nv",
          fixed: "left",
          sorter: (a, b) => a.ma_nv.length - b.ma_nv.length,
          ellipsis: {
            showTitle: false,
          },
          width: 160,
        },
        {
          title: "Full Name",
          dataIndex: "ho_ten",
          key: "ho_ten",
          filteredValue: null,
          fixed: "left",
          sorter: (a, b) => a.ho_ten.length - b.ho_ten.length,
          ellipsis: {
            showTitle: false,
          },
          width: 160,
        },
        // {
        //   title: "Status",
        //   dataIndex: "trang_thai",
        //   fixed: "trang_thai",
        //   key: "full_ttrang_thaiitle",
        //   sorter: (a, b) => a.trang_thai.length - b.trang_thai.length,
        //   ellipsis: {
        //     showTitle: false,
        //   },
        //   width: 100,
        //   render: (item, record) => <div>{item === 0 ? "Off" : "On"}</div>,
        // },
        {
          title: "Email",
          dataIndex: "email",
          key: "email",
          ellipsis: {
            showTitle: false,
          },
          width: 150,
          sorter: (a, b) => a.email.length - b.email.length,
        },
        {
          title: "Bank Account Number ",
          dataIndex: "stk",
          key: "stk",
          sorter: (a, b) => a.stk.length - b.stk.length,
          ellipsis: {
            showTitle: false,
          },
          width: 150,
        },
        {
          title: "Bank Note",
          key: "note_ngan_hang",
          dataIndex: "note_ngan_hang",
          sorter: (a, b) => a.note_ngan_hang.length - b.note_ngan_hang.length,
          ellipsis: {
            showTitle: false,
          },
          width: 165,
        },
        {
          title: "Fixed Salary",
          dataIndex: "luong_cung",
          key: "luong_cung",
          sorter: (a, b) => a.luong_cung.length - b.luong_cung.length,
          ellipsis: {
            showTitle: false,
          },
          width: 130,
        },
        // {
        //   title: `Đơn giá Script ${salaryIndexDropdown[0]?.text}`,
        //   dataIndex: "don_gia_content_1k",
        //   key: "don_gia_content_1k",
        //   sorter: (a, b) =>
        //     a.don_gia_content_1k.length - b.don_gia_content_1k.length,
        //   ellipsis: {
        //     showTitle: false,
        //   },
        //   width: 100,
        // },
        // {
        //   title: `Đơn giá Script ${salaryIndexDropdown[1]?.text}`,
        //   dataIndex: "don_gia_content_2k",
        //   key: "don_gia_content_2k",
        //   sorter: (a, b) =>
        //     a.don_gia_content_2k.length - b.don_gia_content_2k.length,
        //   ellipsis: {
        //     showTitle: false,
        //   },
        //   width: 100,
        // },
        // {
        //   title: `Đơn giá Script ${salaryIndexDropdown[2]?.text}`,
        //   dataIndex: "don_gia_content_3k",
        //   key: "don_gia_content_3k",
        //   sorter: (a, b) =>
        //     a.don_gia_content_3k.length - b.don_gia_content_3k.length,
        //   ellipsis: {
        //     showTitle: false,
        //   },
        //   width: 100,
        // },
        // {
        //   title: `Đơn giá Script ${salaryIndexDropdown[3]?.text}`,
        //   dataIndex: "don_gia_content_4k",
        //   key: "don_gia_content_4k",
        //   sorter: (a, b) =>
        //     a.don_gia_content_4k.length - b.don_gia_content_4k.length,
        //   ellipsis: {
        //     showTitle: false,
        //   },
        //   width: 100,
        // },
        // {
        //   title: `Đơn giá Script ${salaryIndexDropdown[4]?.text}`,
        //   dataIndex: "don_gia_content_5k",
        //   key: "don_gia_content_5k",
        //   sorter: (a, b) =>
        //     a.don_gia_content_5k.length - b.don_gia_content_5k.length,
        //   ellipsis: {
        //     showTitle: false,
        //   },
        //   width: 100,
        // },
        // {
        //   title: `Đơn giá Audio ${salaryIndexDropdown[0]?.text}`,
        //   dataIndex: "don_gia_audio",
        //   key: "don_gia_audio",
        //   sorter: (a, b) => a.don_gia_audio.length - b.don_gia_audio.length,
        //   ellipsis: {
        //     showTitle: false,
        //   },
        //   width: 120,
        // },
        // {
        //   title: `Đơn giá Audio ${salaryIndexDropdown[1]?.text}`,
        //   dataIndex: "don_gia_audio_2k",
        //   key: "don_gia_audio_2k",
        //   sorter: (a, b) =>
        //     a.don_gia_audio_2k.length - b.don_gia_audio_2k.length,
        //   ellipsis: {
        //     showTitle: false,
        //   },
        //   width: 120,
        // },
        // {
        //   title: `Đơn giá Audio ${salaryIndexDropdown[2]?.text}`,
        //   dataIndex: "don_gia_audio_3k",
        //   key: "don_gia_audio_3k",
        //   sorter: (a, b) =>
        //     a.don_gia_audio_3k.length - b.don_gia_audio_3k.length,
        //   ellipsis: {
        //     showTitle: false,
        //   },
        //   width: 120,
        // },
        // {
        //   title: `Đơn giá Audio ${salaryIndexDropdown[3]?.text}`,
        //   dataIndex: "don_gia_audio_4k",
        //   key: "don_gia_audio_4k",
        //   sorter: (a, b) =>
        //     a.don_gia_audio_4k.length - b.don_gia_audio_4k.length,
        //   ellipsis: {
        //     showTitle: false,
        //   },
        //   width: 120,
        // },
        // {
        //   title: `Đơn giá Audio ${salaryIndexDropdown[4]?.text}`,
        //   dataIndex: "don_gia_audio_5k",
        //   key: "don_gia_audio_5k",
        //   sorter: (a, b) =>
        //     a.don_gia_audio_5k.length - b.don_gia_audio_5k.length,
        //   ellipsis: {
        //     showTitle: false,
        //   },
        //   width: 120,
        // },
        // {
        //   title: `Đơn giá Video ${salaryIndexDropdown[0]?.text}`,
        //   dataIndex: "don_gia_video_1k",
        //   key: "don_gia_video_1k",
        //   sorter: (a, b) =>
        //     a.don_gia_video_1k.length - b.don_gia_video_1k.length,
        //   ellipsis: {
        //     showTitle: false,
        //   },
        //   width: 175,
        // },
        // {
        //   title: `Đơn giá Video ${salaryIndexDropdown[1]?.text}`,
        //   dataIndex: "don_gia_video_2k",
        //   key: "don_gia_video_2k",
        //   sorter: (a, b) =>
        //     a.don_gia_video_2k.length - b.don_gia_video_2k.length,
        //   ellipsis: {
        //     showTitle: false,
        //   },
        //   width: 175,
        // },
        // {
        //   title: `Đơn giá Video ${salaryIndexDropdown[2]?.text}`,
        //   dataIndex: "don_gia_video_3k",
        //   key: "don_gia_video_3k",
        //   sorter: (a, b) =>
        //     a.don_gia_video_3k.length - b.don_gia_video_3k.length,
        //   ellipsis: {
        //     showTitle: false,
        //   },
        //   width: 175,
        // },
        // {
        //   title: `Đơn giá Video ${salaryIndexDropdown[3]?.text}`,
        //   dataIndex: "don_gia_video_4k",
        //   key: "don_gia_video_4k",
        //   sorter: (a, b) =>
        //     a.don_gia_video_4k.length - b.don_gia_video_4k.length,
        //   ellipsis: {
        //     showTitle: false,
        //   },
        //   width: 175,
        // },
        // {
        //   title: `Đơn giá Video ${salaryIndexDropdown[4]?.text}`,
        //   dataIndex: "don_gia_video_5k",
        //   key: "don_gia_video_5k",
        //   sorter: (a, b) =>
        //     a.don_gia_video_5k.length - b.don_gia_video_5k.length,
        //   ellipsis: {
        //     showTitle: false,
        //   },
        //   width: 175,
        // },
        {
          title: "Bonus",
          dataIndex: "thuong",
          key: "thuong",
          sorter: (a, b) => a.thuong.length - b.thuong.length,
          ellipsis: {
            showTitle: false,
          },
          width: 120,
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
                  value={item.thuong}
                  onChange={(ev) => this.onChangeBonus(ev.target.value, item)}
                />
              ) : (
                <div>{item.thuong}</div>
              ),
            };
          },
        },
        {
          title: "Phạt",
          dataIndex: "phat",
          key: "phat",
          sorter: (a, b) => a.phat.length - b.phat.length,
          ellipsis: {
            showTitle: false,
          },
          width: 130,
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
                  value={item.phat}
                  onChange={(ev) => this.onChangePhat(ev.target.value, item)}
                />
              ) : (
                <div>{item.phat}</div>
              ),
            };
          },
        },
        {
          title: "Tổng số từ Content",
          key: "san_luong_content_1k",
          dataIndex: "san_luong_content_1k",
          sorter: (a, b) =>
            a.san_luong_content_1k.length - b.san_luong_content_1k.length,
          ellipsis: {
            showTitle: false,
          },
          width: 150,
        },
        // {
        //   title: "Contents 2000 words number",
        //   key: "san_luong_content_2k",
        //   dataIndex: "san_luong_content_2k",
        //   sorter: (a, b) =>
        //     a.san_luong_content_2k.length - b.san_luong_content_2k.length,
        //   ellipsis: {
        //     showTitle: false,
        //   },
        //   width: 150,
        // },
        // {
        //   title: "Contents 3000 words number",
        //   key: "san_luong_content_3k",
        //   dataIndex: "san_luong_content_3k",
        //   sorter: (a, b) =>
        //     a.san_luong_content_3k.length - b.san_luong_content_3k.length,
        //   ellipsis: {
        //     showTitle: false,
        //   },
        //   width: 150,
        // },
        // {
        //   title: "Contents 4000 words number",
        //   key: "san_luong_content_4k",
        //   dataIndex: "san_luong_content_4k",
        //   sorter: (a, b) =>
        //     a.san_luong_content_4k.length - b.san_luong_content_4k.length,
        //   ellipsis: {
        //     showTitle: false,
        //   },
        //   width: 150,
        // },
        // {
        //   title: "Contents 5000 words number",
        //   key: "san_luong_content_5k",
        //   dataIndex: "san_luong_content_5k",
        //   sorter: (a, b) =>
        //     a.san_luong_content_5k.length - b.san_luong_content_5k.length,
        //   ellipsis: {
        //     showTitle: false,
        //   },
        //   width: 150,
        // },
        {
          title: "Tổng số từ Audio",
          dataIndex: "san_luong_audio",
          key: "san_luong_audio",
          sorter: (a, b) => a.san_luong_audio.length - b.san_luong_audio.length,
          ellipsis: {
            showTitle: false,
          },
          width: 100,
        },
        // {
        //   title: "Audio 2000 words Number",
        //   dataIndex: "san_luong_audio_2k",
        //   key: "san_luong_audio_2k",
        //   sorter: (a, b) =>
        //     a.san_luong_audio_2k.length - b.san_luong_audio_2k.length,
        //   ellipsis: {
        //     showTitle: false,
        //   },
        //   width: 100,
        // },
        // {
        //   title: "Audio 3000 words Number",
        //   dataIndex: "san_luong_audio_3k",
        //   key: "san_luong_audio_3k",
        //   sorter: (a, b) =>
        //     a.san_luong_audio_3k.length - b.san_luong_audio_3k.length,
        //   ellipsis: {
        //     showTitle: false,
        //   },
        //   width: 100,
        // },
        // {
        //   title: "Audio 4000 words Number",
        //   dataIndex: "san_luong_audio_4k",
        //   key: "san_luong_audio_4k",
        //   sorter: (a, b) =>
        //     a.san_luong_audio_4k.length - b.san_luong_audio_4k.length,
        //   ellipsis: {
        //     showTitle: false,
        //   },
        //   width: 100,
        // },
        // {
        //   title: "Audio 5000 words Number",
        //   dataIndex: "san_luong_audio_5k",
        //   key: "san_luong_audio_5k",
        //   sorter: (a, b) =>
        //     a.san_luong_audio_5k.length - b.san_luong_audio_5k.length,
        //   ellipsis: {
        //     showTitle: false,
        //   },
        //   width: 100,
        // },
        {
          title: "Tổng số từ Video",
          dataIndex: "san_luong_video_1k",
          key: "san_luong_video_1k",
          width: 120,
          sorter: (a, b) =>
            a.san_luong_video_1k.length - b.san_luong_video_1k.length,
          ellipsis: {
            showTitle: false,
          },
        },
        // {
        //   title: "Videos 2000 words Number",
        //   dataIndex: "san_luong_video_2k",
        //   key: "san_luong_video_2k",
        //   width: 120,
        //   sorter: (a, b) =>
        //     a.san_luong_video_2k.length - b.san_luong_video_2k.length,
        //   ellipsis: {
        //     showTitle: false,
        //   },
        // },
        // {
        //   title: "Videos 3000 words Number",
        //   dataIndex: "san_luong_video_3k",
        //   key: "san_luong_video_3k",
        //   width: 120,
        //   sorter: (a, b) =>
        //     a.san_luong_video_3k.length - b.san_luong_video_3k.length,
        //   ellipsis: {
        //     showTitle: false,
        //   },
        // },
        // {
        //   title: "Videos 4000 words Number",
        //   dataIndex: "san_luong_video_4k",
        //   key: "san_luong_video_4k",
        //   width: 120,
        //   sorter: (a, b) =>
        //     a.san_luong_video_4k.length - b.san_luong_video_4k.length,
        //   ellipsis: {
        //     showTitle: false,
        //   },
        // },
        // {
        //   title: "Videos 5000 words Number",
        //   dataIndex: "san_luong_video_5k",
        //   key: "san_luong_video_5k",
        //   width: 120,
        //   sorter: (a, b) =>
        //     a.san_luong_video_5k.length - b.san_luong_video_5k.length,
        //   ellipsis: {
        //     showTitle: false,
        //   },
        // },
        {
          title: "Note",
          dataIndex: "note_khac",
          key: "note_khac",
          sorter: (a, b) => a.note_khac.length - b.note_khac.length,
          ellipsis: {
            showTitle: false,
          },
          width: 120,
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
                  value={item.note_khac}
                  onChange={(ev) => this.onChangeNote(ev.target.value, item)}
                />
              ) : (
                <div>{item.note_khac}</div>
              ),
            };
          },
        },
        {
          title: "Total Salary",
          dataIndex: "tong_luong",
          fixed: "right",
          key: "tong_luong",
          sorter: (a, b) => a.tong_luong.length - b.tong_luong.length,
          ellipsis: {
            showTitle: false,
          },
          width: 150,
          render: (item, record) => {
            return <div>{formatNumber(item)}</div>;
          },
        },
        // {
        //   title: "Thao tác",
        //   key: "thaoTac",
        //   align: "center",
        //   fixed: "right",
        //   width: 155,
        //   render: (_, item) => {
        //     const editable = this._isEditing(item);
        //     return {
        //       props: {
        //         style: { background: item.stt % 2 === 0 && "#fbfbfb" },
        //       },
        //       children: (
        //         <>
        //           {editable ? (
        //             <>
        //               <Button
        //                 style={{
        //                   color: "white",
        //                   backgroundColor: "#238c31",
        //                   fontWeight: "bold",
        //                   borderRadius: 5,
        //                   borderColor: "#238c31",
        //                 }}
        //                 type={"primary"}
        //                 icon={<CheckOutlined />}
        //                 onClick={() => this.onSubmitUpdate(item)}
        //               >
        //                 {/* Cập nhật */}
        //               </Button>
        //               <span>&nbsp;&nbsp;&nbsp;</span>
        //               <Button
        //                 style={{
        //                   color: "white",
        //                   backgroundColor: "#238c31",
        //                   fontWeight: "bold",
        //                   borderRadius: 5,
        //                   borderColor: "#238c31",
        //                 }}
        //                 type={"primary"}
        //                 icon={<CloseOutlined />}
        //                 onClick={() => this.onCancelEdit(item)}
        //               >
        //                 {/* Hủy */}
        //               </Button>
        //             </>
        //           ) : (
        //             <Button
        //               style={{
        //                 color: "white",
        //                 backgroundColor: "#238c31",
        //                 fontWeight: "bold",
        //                 borderRadius: 5,
        //                 borderColor: "#238c31",
        //               }}
        //               type={"primary"}
        //               onClick={() => this._onChangeEditingKey(item)}
        //             >
        //               Sửa
        //             </Button>
        //           )}
        //         </>
        //       ),
        //     };
        //   },
        // },
      ],
    };
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

  componentWillUnmount() {
    this.mounted = false;
  }

  _onRefreshData = async () => {
    this.setState({ isLoading: true });
    let monthNow,
      monthNowString,
      yearNow = +moment().format("YYYY"),
      yearNowString = moment().format("YYYY");
    var oldSalary = [];
    if (+moment().format("DD") < 3) {
      monthNow = +moment().subtract(1, "month").format("MM");
      monthNowString = moment().subtract(1, "month").format("MM");
    } else {
      monthNow = +moment().format("MM");
      monthNowString = moment().format("MM");
    }
    // console.log("monthNowString", monthNowString);
    const body = {
      month: monthNow,
      year: moment().format("YYYY"),
    };
    await axios.post(`${apiUrl}/salary_temp`, body).then((resOldData) => {
      oldSalary = resOldData.data.data;
    });

    axios.get(`${apiUrl}/tenticker`).then((res) => {
      // console.log("body", body);

      // if (+moment().format("DD") < 10) {
      //   monthNow = +moment().format("MM") - 1;
      //   monthNowString = moment().subtract(1, "month").format("MM");
      // } else {
      //   monthNow = +moment().format("MM");
      //   monthNowString = moment().format("MM");
      // }
      // console.log("monthNow", monthNow);

      const mapDataSource = map(this.props.data, (item, index) => {
        let countContent2k = 0,
          countContent1k = 0,
          countContent3k = 0,
          countContent4k = 0,
          countContent5k = 0,
          // countAudio = 0,
          countAudio2k = 0,
          countAudio3k = 0,
          countAudio4k = 0,
          countAudio5k = 0,
          countVideo2k = 0,
          countVideo1k = 0,
          countVideo3k = 0,
          countVideo4k = 0,
          countVideo5k = 0,
          countContent = 0,
          countAudio = 0,
          countVideo = 0;

        for (let i = 0; i < res.data.data.length; i++) {
          // console.log("aaaaaaaaaaa", res.data.data[i]);
          // console.log("monthNow: ", monthNow);
          // console.log("yearNow: ", yearNow);
          if (
            includes(res.data.data[i].writer_name, item[fixUserColumn.cms]) &&
            (+moment(res.data.data[i].confirm_content_date).format("MM") ===
              monthNow ||
              (+moment(res.data.data[i].confirm_content_date).format("MM") ===
                monthNow + 1 &&
                +moment(res.data.data[i].confirm_content_date).format("D") <
                  6)) &&
            +moment(res.data.data[i].confirm_content_date).format("YYYY") ===
              yearNow &&
            res.data.data[i].content_status === 1
            // &&
            //   +moment(res.data.data[i].add_composer_date).format("DD") > 9) ||
            //   (+moment(res.data.data[i].add_composer_date).format("MM") ===
            //     monthNow + 1 &&
            //     +moment(res.data.data[i].add_composer_date).format("DD") < 10
          ) {
            let contentLength = res.data.data[i]?.content_length;
            if (contentLength) {
              countContent += contentLength;
            }
            // if (res.data.data[i].salary_index === 10) {
            //   countContent2k++;
            // } else if (res.data.data[i].salary_index === 5) {
            //   countContent1k++;
            // } else if (res.data.data[i].salary_index === 15) {
            //   countContent3k++;
            // } else if (res.data.data[i].salary_index === 20) {
            //   countContent4k++;
            // } else if (res.data.data[i].salary_index === 25) {
            //   countContent5k++;
            // }
          }
          if (
            includes(res.data.data[i].composer_name, item[fixUserColumn.cms]) &&
            (+moment(res.data.data[i].add_composer_date).format("MM") ===
              monthNow ||
              (+moment(res.data.data[i].add_composer_date).format("MM") ===
                monthNow + 1 &&
                +moment(res.data.data[i].add_composer_date).format("D") < 6)) &&
            +moment(res.data.data[i].add_composer_date).format("YYYY") ===
              yearNow &&
            res.data.data[i].video_status === 1
            // &&
            //   +moment(res.data.data[i].add_composer_date).format("DD") > 9) ||
            //   (+moment(res.data.data[i].add_composer_date).format("MM") ===
            //     monthNow + 1 &&
            //     +moment(res.data.data[i].add_composer_date).format("DD") < 10
          ) {
            // console.log("data[i]", res.data.data[i]);
            let contentLength = res.data.data[i]?.content_length;
            if (contentLength) {
              countAudio += contentLength;
            }
            // if (res.data.data[i].salary_index === 10) {
            //   countAudio2k++;
            // } else if (res.data.data[i].salary_index === 5) {
            //   countAudio++;
            // } else if (res.data.data[i].salary_index === 15) {
            //   countAudio3k++;
            // } else if (res.data.data[i].salary_index === 20) {
            //   countAudio4k++;
            // } else if (res.data.data[i].salary_index === 25) {
            //   countAudio5k++;
            // }
          }
          // if (
          //   item[fixUserColumn.cms] === "3 Phạm Huy Hoàng" &&
          //   item[fixUserColumn.cms] === res.data.data[i].editor_name &&
          //   includes(res.data.data[i].editor_name, item[fixUserColumn.cms])
          // ) {
          //   // if (res.data.data[i].editor_name === "3 Phạm Huy Hoàng") {
          //   console.log(
          //     "res.data.data[i].editor_name: ",
          //     res.data.data[i].editor_name
          //   );
          //   console.log("item[fixUserColumn.cms]: ", item[fixUserColumn.cms]);
          //   let contentLength = res.data.data[i]?.content_length;
          //   console.log(" res.data.data[i]: ", res.data.data[i]);
          //   console.log("contentLength: ", contentLength);
          //   console.log(
          //     "month",
          //     +moment(res.data.data[i].add_composer_date).format("MM")
          //   );
          //   console.log(
          //     "year",
          //     +moment(res.data.data[i].add_composer_date).format("YYYY")
          //   );
          // }
          if (
            includes(res.data.data[i].editor_name, item[fixUserColumn.cms]) &&
            (+moment(res.data.data[i].confirm_video_date).format("MM") ===
              monthNow ||
              (+moment(res.data.data[i].confirm_video_date).format("MM") ===
                monthNow + 1 &&
                +moment(res.data.data[i].confirm_video_date).format("D") <
                  6)) &&
            +moment(res.data.data[i].confirm_video_date).format("YYYY") ===
              yearNow &&
            res.data.data[i].video_status === 1
            // &&
            //   +moment(res.data.data[i].add_composer_date).format("DD") > 9) ||
            //   (+moment(res.data.data[i].add_composer_date).format("MM") ===
            //     monthNow + 1 &&
            //     +moment(res.data.data[i].add_composer_date).format("DD") < 10
          ) {
            let contentLength = res.data.data[i]?.content_length;
            if (contentLength) {
              countVideo += contentLength;
            }
            // if (res.data.data[i].salary_index === 10) {
            //   countVideo2k++;
            // } else if (res.data.data[i].salary_index === 5) {
            //   countVideo1k++;
            // } else if (res.data.data[i].salary_index === 15) {
            //   countVideo3k++;
            // } else if (res.data.data[i].salary_index === 20) {
            //   countVideo4k++;
            // } else if (res.data.data[i].salary_index === 25) {
            //   countVideo5k++;
            // }
          }
        }

        const tongLuong =
          (!!item[fixUserColumn.luongCung]
            ? +item[fixUserColumn.luongCung].replaceAll(".", "")
            : 0) +
          (countContent / 1000) *
            (!!item[fixUserColumn.donGiaScrip1k]
              ? +item[fixUserColumn.donGiaScrip1k].replaceAll(".", "")
              : 0) +
          countAudio *
            (countAudio / 1000) *
            (!!item[fixUserColumn.donGiaAudio]
              ? +item[fixUserColumn.donGiaAudio].replaceAll(".", "")
              : 0) +
          (countVideo / 1000) *
            (!!item[fixUserColumn.donGiaVideo1k]
              ? +item[fixUserColumn.donGiaVideo1k].replaceAll(".", "")
              : 0);
        // countContent2k *
        //   (!!item[fixUserColumn.donGiaScrip2k]
        //     ? +item[fixUserColumn.donGiaScrip2k].replaceAll(".", "")
        //     : 0) +
        // countContent1k *
        //   (!!item[fixUserColumn.donGiaScrip1k]
        //     ? +item[fixUserColumn.donGiaScrip1k].replaceAll(".", "")
        //     : 0) +
        // countContent3k *
        //   (!!item[fixUserColumn.donGiaScrip3k]
        //     ? +item[fixUserColumn.donGiaScrip3k].replaceAll(".", "")
        //     : 0) +
        // countContent4k *
        //   (!!item[fixUserColumn.donGiaScrip4k]
        //     ? +item[fixUserColumn.donGiaScrip4k].replaceAll(".", "")
        //     : 0) +
        // countContent5k *
        //   (!!item[fixUserColumn.donGiaScrip5k]
        //     ? +item[fixUserColumn.donGiaScrip5k].replaceAll(".", "")
        //     : 0) +
        // countAudio *
        //   (!!item[fixUserColumn.donGiaAudio]
        //     ? +item[fixUserColumn.donGiaAudio].replaceAll(".", "")
        //     : 0) +
        // countAudio2k *
        //   (!!item[fixUserColumn.donGiaAudio2k]
        //     ? +item[fixUserColumn.donGiaAudio2k].replaceAll(".", "")
        //     : 0) +
        // countAudio3k *
        //   (!!item[fixUserColumn.donGiaAudio3k]
        //     ? +item[fixUserColumn.donGiaAudio3k].replaceAll(".", "")
        //     : 0) +
        // countAudio4k *
        //   (!!item[fixUserColumn.donGiaAudio4k]
        //     ? +item[fixUserColumn.donGiaAudio4k].replaceAll(".", "")
        //     : 0) +
        // countAudio5k *
        //   (!!item[fixUserColumn.donGiaAudio5k]
        //     ? +item[fixUserColumn.donGiaAudio5k].replaceAll(".", "")
        //     : 0) +
        // countVideo2k *
        //   (!!item[fixUserColumn.donGiaVideo2k]
        //     ? +item[fixUserColumn.donGiaVideo2k].replaceAll(".", "")
        //     : 0) +
        // countVideo3k *
        //   (!!item[fixUserColumn.donGiaVideo3k]
        //     ? +item[fixUserColumn.donGiaVideo3k].replaceAll(".", "")
        //     : 0) +
        // countVideo4k *
        //   (!!item[fixUserColumn.donGiaVideo4k]
        //     ? +item[fixUserColumn.donGiaVideo4k].replaceAll(".", "")
        //     : 0) +
        // countVideo5k *
        //   (!!item[fixUserColumn.donGiaVideo5k]
        //     ? +item[fixUserColumn.donGiaVideo5k].replaceAll(".", "")
        //     : 0) +
        // countVideo1k *
        //   (!!item[fixUserColumn.donGiaVideo1k]
        //     ? +item[fixUserColumn.donGiaVideo1k].replaceAll(".", "")
        //     : 0);
        //     +        (!!get(oldSalary[index - 1], "thuong")
        //   ? +get(oldSalary[index - 1], "thuong")
        //   : 0) -
        // (!!get(oldSalary[index - 1], "phat")
        //   ? +get(oldSalary[index - 1], "phat")
        //   : 0);

        return {
          stt: index + 1,
          ma_nv: item[0],
          ho_ten: item[fixUserColumn.name],
          trang_thai: trim(item[fixUserColumn.status]) === "On" ? 1 : 0,
          email: item[fixUserColumn.email],
          stk: item[fixUserColumn.bankNumber],
          note_ngan_hang: item[fixUserColumn.bankNote],
          luong_cung: item[fixUserColumn.luongCung],
          don_gia_content_2k: item[fixUserColumn.donGiaScrip2k],
          don_gia_content_1k: item[fixUserColumn.donGiaScrip1k],
          don_gia_audio: item[fixUserColumn.donGiaAudio],
          don_gia_video_2k: item[fixUserColumn.donGiaVideo2k],
          don_gia_video_1k: item[fixUserColumn.donGiaVideo1k],
          thuong: "",
          phat: "",
          san_luong_content_1k: countContent,
          san_luong_audio: countAudio,
          san_luong_video_1k: countVideo,
          // san_luong_content_2k: countContent2k,
          // san_luong_content_1k: countContent1k,
          // san_luong_audio: countAudio,
          // san_luong_video_2k: countVideo2k,
          // san_luong_video_1k: countVideo1k,
          note_khac: "",
          tong_luong: tongLuong,
          thang: monthNowString,
          nam: yearNowString,
          don_gia_content_3k: item[fixUserColumn.donGiaScrip3k],
          don_gia_content_4k: item[fixUserColumn.donGiaScrip4k],
          don_gia_content_5k: item[fixUserColumn.donGiaScrip5k],
          don_gia_video_3k: item[fixUserColumn.donGiaVideo3k],
          don_gia_video_4k: item[fixUserColumn.donGiaVideo4k],
          don_gia_video_5k: item[fixUserColumn.donGiaVideo5k],
          don_gia_audio_2k: item[fixUserColumn.donGiaAudio2k],
          don_gia_audio_3k: item[fixUserColumn.donGiaAudio3k],
          don_gia_audio_4k: item[fixUserColumn.donGiaAudio4k],
          don_gia_audio_5k: item[fixUserColumn.donGiaAudio5k],
          san_luong_content_3k: countContent3k,
          san_luong_content_4k: countContent4k,
          san_luong_content_5k: countContent5k,
          san_luong_audio_2k: countAudio2k,
          san_luong_audio_3k: countAudio3k,
          san_luong_audio_4k: countAudio4k,
          san_luong_audio_5k: countAudio5k,
          san_luong_video_3k: countVideo3k,
          san_luong_video_4k: countVideo4k,
          san_luong_video_5k: countVideo5k,
        };
      });

      const filterDataSource = mapDataSource.filter(
        (item, index) => item.trang_thai === 1 && index !== 0
      );

      const mapDataFinal = map(filterDataSource, (item, index) => {
        // console.log("thuong", get(oldSalary[index], "thuong"));
        return {
          ...item,
          stt: index + 1,
          thuong: get(oldSalary[index], "thuong"),
          phat: get(oldSalary[index], "phat"),
          note_khac: get(oldSalary[index], "note_khac"),
          tong_luong:
            item.tong_luong +
            (!!get(oldSalary[index], "thuong")
              ? +get(oldSalary[index], "thuong")
              : 0) -
            (!!get(oldSalary[index], "phat")
              ? +get(oldSalary[index], "phat")
              : 0),
        };
      });
      const userId = localStorage.getItem("id");
      let filterDataFinal = mapDataFinal?.filter((item) => {
        return +item.ma_nv === +userId + 1;
      });
      console.log("mapDataFinal: ", mapDataFinal);
      this.setState({
        salary: filterDataFinal,
        salaryChangeUpdate: filterDataFinal,
        // salaryChangeUpdate: mapDataFinal,
        isLoading: false,
        monthNow,
        monthNowString,
      });
    });
  };

  _onChangeEditingKey = (record) => {
    const newData = map(this.state.salaryChangeUpdate, (item, index) => {
      if (item.stt === this.state.stt) {
        return {
          ...this.state.salary[index],
        };
      } else {
        return { ...item };
      }
    });
    this.setState({
      editingKey: record.stt,
      salaryChangeUpdate: newData,
    });
  };

  _isEditing = (record) => {
    return record.stt === this.state.editingKey;
  };

  onCancelEdit = (record) => {
    const newData = map(this.state.salaryChangeUpdate, (item, index) => {
      if (item.id === record.id) {
        return {
          ...this.state.salary[index],
        };
      } else {
        return { ...item };
      }
    });
    this.setState({ editingKey: "", salaryChangeUpdate: newData });
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
    });
  };

  onSubmitUpdate = () => {
    this.setState({ editingKey: "" });
    const { salaryChangeUpdate } = this.state;
    const body_delete = {
      data: {
        thang: this.state.monthNow,
        nam: moment().format("YYYY"),
      },
    };

    axios
      .delete(`${apiUrl}/salary_temp/check`, body_delete)
      .then(async (res) => {
        // notification.success({
        //   message: "Xoá thành công",
        //   style: { backgroundColor: "#f5fff8" },
        // });
        for (let i = 0; i < salaryChangeUpdate.length; i++) {
          const body_add = {
            salary: [
              null,
              salaryChangeUpdate[i].ma_nv,
              salaryChangeUpdate[i].ho_ten,
              salaryChangeUpdate[i].trang_thai,
              salaryChangeUpdate[i].email,
              salaryChangeUpdate[i].stk,
              salaryChangeUpdate[i].note_ngan_hang,
              salaryChangeUpdate[i].luong_cung,
              salaryChangeUpdate[i].don_gia_content_2k,
              salaryChangeUpdate[i].don_gia_content_1k,
              salaryChangeUpdate[i].don_gia_audio,
              salaryChangeUpdate[i].don_gia_video_2k,
              salaryChangeUpdate[i].don_gia_video_1k,
              salaryChangeUpdate[i].thuong,
              salaryChangeUpdate[i].phat,
              salaryChangeUpdate[i].san_luong_content_2k,
              salaryChangeUpdate[i].san_luong_content_1k,
              salaryChangeUpdate[i].san_luong_audio,
              salaryChangeUpdate[i].san_luong_video_2k,
              salaryChangeUpdate[i].san_luong_video_1k,
              salaryChangeUpdate[i].note_khac,
              formatNumber(salaryChangeUpdate[i].tong_luong),
              salaryChangeUpdate[i].thang,
              salaryChangeUpdate[i].nam,
              salaryChangeUpdate[i].don_gia_content_3k,
              salaryChangeUpdate[i].don_gia_content_4k,
              salaryChangeUpdate[i].don_gia_content_5k,
              salaryChangeUpdate[i].don_gia_video_3k,
              salaryChangeUpdate[i].don_gia_video_4k,
              salaryChangeUpdate[i].don_gia_video_5k,
              salaryChangeUpdate[i].don_gia_audio_2k,
              salaryChangeUpdate[i].don_gia_audio_3k,
              salaryChangeUpdate[i].don_gia_audio_4k,
              salaryChangeUpdate[i].don_gia_audio_5k,
              salaryChangeUpdate[i].san_luong_content_3k,
              salaryChangeUpdate[i].san_luong_content_4k,
              salaryChangeUpdate[i].san_luong_content_5k,
              salaryChangeUpdate[i].san_luong_audio_2k,
              salaryChangeUpdate[i].san_luong_audio_3k,
              salaryChangeUpdate[i].san_luong_audio_4k,
              salaryChangeUpdate[i].san_luong_audio_5k,
              salaryChangeUpdate[i].san_luong_video_3k,
              salaryChangeUpdate[i].san_luong_video_4k,
              salaryChangeUpdate[i].san_luong_video_5k,
            ],
          };

          await axios
            .post(`${apiUrl}/salary_temp/add`, body_add)
            .then((res) => {
              if (i === salaryChangeUpdate.length - 1) {
                notification.success({
                  message: "Cập nhật phiếu lương thành công",
                  style: { backgroundColor: "#f5fff8" },
                });
              }
            });
        }
      });
  };

  onChangeBonus = (value, record) => {
    const newData = map(this.state.salaryChangeUpdate, (item) => {
      if (item.stt === record.stt) {
        // console.log("record", +value);
        return {
          ...item,
          thuong: value,
          tong_luong:
            (record.luong_cung ? +record.luong_cung.replaceAll(".", "") : 0) +
            record.san_luong_content_2k *
              (record.don_gia_content_2k
                ? +record.don_gia_content_2k.replaceAll(".", "")
                : 0) +
            record.san_luong_content_1k *
              (record.don_gia_content_1k
                ? +record.don_gia_content_1k.replaceAll(".", "")
                : 0) +
            record.san_luong_content_3k *
              (record.don_gia_content_3k
                ? +record.don_gia_content_3k.replaceAll(".", "")
                : 0) +
            record.san_luong_content_4k *
              (record.don_gia_content_4k
                ? +record.don_gia_content_4k.replaceAll(".", "")
                : 0) +
            record.san_luong_content_5k *
              (record.don_gia_content_5k
                ? +record.don_gia_content_5k.replaceAll(".", "")
                : 0) +
            record.san_luong_audio *
              (record.don_gia_audio
                ? +record.don_gia_audio.replaceAll(".", "")
                : 0) +
            record.san_luong_audio_2k *
              (record.don_gia_audio_2k
                ? +record.don_gia_audio_2k.replaceAll(".", "")
                : 0) +
            record.san_luong_audio_3k *
              (record.don_gia_audio_3k
                ? +record.don_gia_audio_3k.replaceAll(".", "")
                : 0) +
            record.san_luong_audio_4k *
              (record.don_gia_audio_4k
                ? +record.don_gia_audio_4k.replaceAll(".", "")
                : 0) +
            record.san_luong_audio_5k *
              (record.don_gia_audio_5k
                ? +record.don_gia_audio_5k.replaceAll(".", "")
                : 0) +
            record.san_luong_video_2k *
              (record.don_gia_video_2k
                ? +record.don_gia_video_2k.replaceAll(".", "")
                : 0) +
            record.san_luong_video_3k *
              (record.don_gia_video_3k
                ? +record.don_gia_video_3k.replaceAll(".", "")
                : 0) +
            record.san_luong_video_4k *
              (record.don_gia_video_4k
                ? +record.don_gia_video_4k.replaceAll(".", "")
                : 0) +
            record.san_luong_video_5k *
              (record.don_gia_video_5k
                ? +record.don_gia_video_5k.replaceAll(".", "")
                : 0) +
            record.san_luong_video_1k *
              (record.don_gia_video_1k
                ? +record.don_gia_video_1k.replaceAll(".", "")
                : 0) +
            +value -
            +record.phat,
        };
      } else {
        return { ...item };
      }
    });
    this.setState({ salaryChangeUpdate: newData });
  };

  onChangePhat = (value, record) => {
    const newData = map(this.state.salaryChangeUpdate, (item) => {
      if (item.stt === record.stt) {
        return {
          ...item,
          phat: value,
          tong_luong:
            (record.luong_cung ? +record.luong_cung.replaceAll(".", "") : 0) +
            record.san_luong_content_2k *
              (record.don_gia_content_2k
                ? +record.don_gia_content_2k.replaceAll(".", "")
                : 0) +
            record.san_luong_content_1k *
              (record.don_gia_content_1k
                ? +record.don_gia_content_1k.replaceAll(".", "")
                : 0) +
            record.san_luong_content_3k *
              (record.don_gia_content_3k
                ? +record.don_gia_content_3k.replaceAll(".", "")
                : 0) +
            record.san_luong_content_4k *
              (record.don_gia_content_4k
                ? +record.don_gia_content_4k.replaceAll(".", "")
                : 0) +
            record.san_luong_content_5k *
              (record.don_gia_content_5k
                ? +record.don_gia_content_5k.replaceAll(".", "")
                : 0) +
            record.san_luong_audio *
              (record.don_gia_audio
                ? +record.don_gia_audio.replaceAll(".", "")
                : 0) +
            record.san_luong_audio_2k *
              (record.don_gia_audio_2k
                ? +record.don_gia_audio_2k.replaceAll(".", "")
                : 0) +
            record.san_luong_audio_3k *
              (record.don_gia_audio_3k
                ? +record.don_gia_audio_3k.replaceAll(".", "")
                : 0) +
            record.san_luong_audio_4k *
              (record.don_gia_audio_4k
                ? +record.don_gia_audio_4k.replaceAll(".", "")
                : 0) +
            record.san_luong_audio_5k *
              (record.don_gia_audio_5k
                ? +record.don_gia_audio_5k.replaceAll(".", "")
                : 0) +
            record.san_luong_video_2k *
              (record.don_gia_video_2k
                ? +record.don_gia_video_2k.replaceAll(".", "")
                : 0) +
            record.san_luong_video_3k *
              (record.don_gia_video_3k
                ? +record.don_gia_video_3k.replaceAll(".", "")
                : 0) +
            record.san_luong_video_4k *
              (record.don_gia_video_4k
                ? +record.don_gia_video_4k.replaceAll(".", "")
                : 0) +
            record.san_luong_video_5k *
              (record.don_gia_video_5k
                ? +record.don_gia_video_5k.replaceAll(".", "")
                : 0) +
            record.san_luong_video_1k *
              (record.don_gia_video_1k
                ? +record.don_gia_video_1k.replaceAll(".", "")
                : 0) +
            +record.thuong -
            +value,
        };
      } else {
        return { ...item };
      }
    });
    this.setState({ salaryChangeUpdate: newData });
  };

  onChangeNote = (value, record) => {
    const newData = map(this.state.salaryChangeUpdate, (item) => {
      if (item.stt === record.stt) {
        return {
          ...item,
          note_khac: value,
        };
      } else {
        return { ...item };
      }
    });
    this.setState({ salaryChangeUpdate: newData });
  };

  onConfirm = () => {
    confirm({
      title: "Thông báo",
      content: `Bạn có chắc muốn xác nhận phiếu lương`,
      okCancel: () => {},
      onOk: () => {
        const { salaryChangeUpdate } = this.state;
        const body_delete = {
          data: {
            thang: this.state.monthNow,
            nam: moment().format("YYYY"),
          },
        };

        axios
          .delete(`${apiUrl}/salary/check`, body_delete)
          .then(async (res) => {
            // notification.success({
            //   message: "Xoá thành công",
            //   style: { backgroundColor: "#f5fff8" },
            // });
            for (let i = 0; i < salaryChangeUpdate.length; i++) {
              const body_add = {
                salary: [
                  null,
                  salaryChangeUpdate[i].ma_nv,
                  salaryChangeUpdate[i].ho_ten,
                  salaryChangeUpdate[i].trang_thai,
                  salaryChangeUpdate[i].email,
                  salaryChangeUpdate[i].stk,
                  salaryChangeUpdate[i].note_ngan_hang,
                  salaryChangeUpdate[i].luong_cung,
                  salaryChangeUpdate[i].don_gia_content_2k,
                  salaryChangeUpdate[i].don_gia_content_1k,
                  salaryChangeUpdate[i].don_gia_audio,
                  salaryChangeUpdate[i].don_gia_video_2k,
                  salaryChangeUpdate[i].don_gia_video_1k,
                  salaryChangeUpdate[i].thuong,
                  salaryChangeUpdate[i].phat,
                  salaryChangeUpdate[i].san_luong_content_2k,
                  salaryChangeUpdate[i].san_luong_content_1k,
                  salaryChangeUpdate[i].san_luong_audio,
                  salaryChangeUpdate[i].san_luong_video_2k,
                  salaryChangeUpdate[i].san_luong_video_1k,
                  salaryChangeUpdate[i].note_khac,
                  formatNumber(salaryChangeUpdate[i].tong_luong),
                  salaryChangeUpdate[i].thang,
                  salaryChangeUpdate[i].nam,
                  salaryChangeUpdate[i].don_gia_content_3k,
                  salaryChangeUpdate[i].don_gia_content_4k,
                  salaryChangeUpdate[i].don_gia_content_5k,
                  salaryChangeUpdate[i].don_gia_video_3k,
                  salaryChangeUpdate[i].don_gia_video_4k,
                  salaryChangeUpdate[i].don_gia_video_5k,
                  salaryChangeUpdate[i].don_gia_audio_2k,
                  salaryChangeUpdate[i].don_gia_audio_3k,
                  salaryChangeUpdate[i].don_gia_audio_4k,
                  salaryChangeUpdate[i].don_gia_audio_5k,
                  salaryChangeUpdate[i].san_luong_content_3k,
                  salaryChangeUpdate[i].san_luong_content_4k,
                  salaryChangeUpdate[i].san_luong_content_5k,
                  salaryChangeUpdate[i].san_luong_audio_2k,
                  salaryChangeUpdate[i].san_luong_audio_3k,
                  salaryChangeUpdate[i].san_luong_audio_4k,
                  salaryChangeUpdate[i].san_luong_audio_5k,
                  salaryChangeUpdate[i].san_luong_video_3k,
                  salaryChangeUpdate[i].san_luong_video_4k,
                  salaryChangeUpdate[i].san_luong_video_5k,
                ],
              };

              await axios.post(`${apiUrl}/salary/add`, body_add).then((res) => {
                if (i === salaryChangeUpdate.length - 1) {
                  notification.success({
                    message: "Xác nhận phiếu lương thành công",
                    style: { backgroundColor: "#f5fff8" },
                  });
                }
              });
            }
          });
      },
    });
  };

  onExportExcell = () => {
    const data = map(this.state.salaryChangeUpdate, (item, index) => {
      return {
        "STT (Ord. No.) (1)": index + 1,
        "Số tài khoản (Account No.) (2)": item.stk,
        "Tên đơn vị thụ hưởng (Beneficiary Organization) (3)": item.ho_ten,
        "Ngân hàng thụ hưởng/Chi nhánh (Beneficiary Bank) (4)":
          item.note_ngan_hang,
        "Số tiền (Amount) (5)": item.tong_luong,
        "Chi tiết thanh toán (Payment Detail) (6)": `thanh toán lương T${moment()
          .subtract(1, "months")
          .format("MM")}`,
        // STT: item.STT,
        // "Employee Id": item.ma_nv,
        // "Full Name": item.ho_ten,
        // Email: item.email,
        // "Bank Account Number": item.stk,
        // "Bank Note": item.note_ngan_hang,
        // "Fixed Salary": item.luong_cung,
        // "Đơn giá Content 1500 từ": item.don_gia_content_1k,
        // "Đơn giá Content 2500 từ": item.don_gia_content_2k,
        // "Đơn giá Content 3500 từ": item.don_gia_content_3k,
        // "Đơn giá Content 4500 từ": item.don_gia_content_4k,
        // "Đơn giá Content 5500 từ": item.don_gia_content_5k,
        // "Đơn giá Audio 1500 từ": item.don_gia_audio,
        // "Đơn giá Audio 2500 từ": item.don_gia_audio_2k,
        // "Đơn giá Audio 3500 từ": item.don_gia_audio_3k,
        // "Đơn giá Audio 4500 từ": item.don_gia_audio_4k,
        // "Đơn giá Audio 5500 từ": item.don_gia_audio_5k,
        // "Đơn giá Video 1500 từ": item.don_gia_video_1k,
        // "Đơn giá Video 2500 từ": item.don_gia_video_2k,
        // "Đơn giá Video 3500 từ": item.don_gia_video_3k,
        // "Đơn giá Video 4500 từ": item.don_gia_video_4k,
        // "Đơn giá Video 5500 từ": item.don_gia_video_5k,
        // Bonus: item.thuong,
        // Phạt: item.phat,
        // "Contents Number 1500 words": item.san_luong_content_1k,
        // "Contents Number 2500 words": item.san_luong_content_2k,
        // "Contents Number 3500 words": item.san_luong_content_3k,
        // "Contents Number 4500 words": item.san_luong_content_4k,
        // "Contents Number 5500 words": item.san_luong_content_5k,
        // "Audio Number 1500 words": item.san_luong_audio,
        // "Audio Number 2500 words": item.san_luong_audio_2k,
        // "Audio Number 3500 words": item.san_luong_audio_3k,
        // "Audio Number 4500 words": item.san_luong_audio_4k,
        // "Audio Number 5500 words": item.san_luong_audio_5k,
        // "Videos Number 1500 words": item.san_luong_video_1k,
        // "Videos Number 2500 words": item.san_luong_video_2k,
        // "Videos Number 3500 words": item.san_luong_video_3k,
        // "Videos Number 4500 words": item.san_luong_video_4k,
        // "Videos Number 5500 words": item.san_luong_video_5k,
        // Note: item.note_khac,
        // "Total Salary": item.tong_luong,
      };
    });
    const fileName = `BAOCAOLUONG_EBEMEDIA${moment().format("YYYYMMDD")}`;
    ExportExcel(data, fileName, fileName);
  };

  render() {
    const { column, sortedInfo, isLoading, salary, salaryChangeUpdate } =
      this.state;
    // console.log("data", this.props.data);
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
            sortOrder: !isEmpty(sortedInfo)
              ? sortedInfo.columnKey === "ma_nv" && sortedInfo.order
              : null,
            onHeaderCell: (column) => ({
              width: column.width,
              onResize: this.handleResize(index),
            }),
          };
        case 2:
          return {
            ...col,
            sortOrder: !isEmpty(sortedInfo)
              ? sortedInfo.columnKey === "ho_ten" && sortedInfo.order
              : null,
            onHeaderCell: (column) => ({
              width: column.width,
              onResize: this.handleResize(index),
            }),
          };
        case 3:
          return {
            ...col,
            sortOrder: !isEmpty(sortedInfo)
              ? sortedInfo.columnKey === "trang_thai" && sortedInfo.order
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
              ? sortedInfo.columnKey === "email" && sortedInfo.order
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
              ? sortedInfo.columnKey === "stk" && sortedInfo.order
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
              ? sortedInfo.columnKey === "note_ngan_hang" && sortedInfo.order
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
              ? sortedInfo.columnKey === "luong_cung" && sortedInfo.order
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
              ? sortedInfo.columnKey === "don_gia_content_1k" &&
                sortedInfo.order
              : null,
            onHeaderCell: (column) => ({
              width: column.width,
              onResize: this.handleResize(index),
            }),
          };
        case 9:
          return {
            ...col,
            sortOrder: !isEmpty(sortedInfo)
              ? sortedInfo.columnKey === "don_gia_content_2k" &&
                sortedInfo.order
              : null,
            onHeaderCell: (column) => ({
              width: column.width,
              onResize: this.handleResize(index),
            }),
          };
        case 10:
          return {
            ...col,
            sortOrder: !isEmpty(sortedInfo)
              ? sortedInfo.columnKey === "don_gia_content_3k" &&
                sortedInfo.order
              : null,
            onHeaderCell: (column) => ({
              width: column.width,
              onResize: this.handleResize(index),
            }),
          };
        case 11:
          return {
            ...col,
            sortOrder: !isEmpty(sortedInfo)
              ? sortedInfo.columnKey === "don_gia_content_4k" &&
                sortedInfo.order
              : null,
            onHeaderCell: (column) => ({
              width: column.width,
              onResize: this.handleResize(index),
            }),
          };
        case 12:
          return {
            ...col,
            sortOrder: !isEmpty(sortedInfo)
              ? sortedInfo.columnKey === "don_gia_content_5k" &&
                sortedInfo.order
              : null,
            onHeaderCell: (column) => ({
              width: column.width,
              onResize: this.handleResize(index),
            }),
          };
        case 13:
          return {
            ...col,
            sortOrder: !isEmpty(sortedInfo)
              ? sortedInfo.columnKey === "don_gia_audio" && sortedInfo.order
              : null,
            onHeaderCell: (column) => ({
              width: column.width,
              onResize: this.handleResize(index),
            }),
          };
        case 14:
          return {
            ...col,
            sortOrder: !isEmpty(sortedInfo)
              ? sortedInfo.columnKey === "don_gia_audio_2k" && sortedInfo.order
              : null,
            onHeaderCell: (column) => ({
              width: column.width,
              onResize: this.handleResize(index),
            }),
          };
        case 15:
          return {
            ...col,
            sortOrder: !isEmpty(sortedInfo)
              ? sortedInfo.columnKey === "don_gia_audio_3k" && sortedInfo.order
              : null,
            onHeaderCell: (column) => ({
              width: column.width,
              onResize: this.handleResize(index),
            }),
          };
        case 16:
          return {
            ...col,
            sortOrder: !isEmpty(sortedInfo)
              ? sortedInfo.columnKey === "don_gia_audio_4k" && sortedInfo.order
              : null,
            onHeaderCell: (column) => ({
              width: column.width,
              onResize: this.handleResize(index),
            }),
          };
        case 17:
          return {
            ...col,
            sortOrder: !isEmpty(sortedInfo)
              ? sortedInfo.columnKey === "don_gia_audio_5k" && sortedInfo.order
              : null,
            onHeaderCell: (column) => ({
              width: column.width,
              onResize: this.handleResize(index),
            }),
          };
        case 18:
          return {
            ...col,
            sortOrder: !isEmpty(sortedInfo)
              ? sortedInfo.columnKey === "don_gia_video_1k" && sortedInfo.order
              : null,
            onHeaderCell: (column) => ({
              width: column.width,
              onResize: this.handleResize(index),
            }),
          };
        case 19:
          return {
            ...col,
            sortOrder: !isEmpty(sortedInfo)
              ? sortedInfo.columnKey === "don_gia_video_2k" && sortedInfo.order
              : null,
            onHeaderCell: (column) => ({
              width: column.width,
              onResize: this.handleResize(index),
            }),
          };
        case 20:
          return {
            ...col,
            sortOrder: !isEmpty(sortedInfo)
              ? sortedInfo.columnKey === "don_gia_video_3k" && sortedInfo.order
              : null,
            onHeaderCell: (column) => ({
              width: column.width,
              onResize: this.handleResize(index),
            }),
          };
        case 21:
          return {
            ...col,
            sortOrder: !isEmpty(sortedInfo)
              ? sortedInfo.columnKey === "don_gia_video_4k" && sortedInfo.order
              : null,
            onHeaderCell: (column) => ({
              width: column.width,
              onResize: this.handleResize(index),
            }),
          };
        case 22:
          return {
            ...col,
            sortOrder: !isEmpty(sortedInfo)
              ? sortedInfo.columnKey === "don_gia_video_5k" && sortedInfo.order
              : null,
            onHeaderCell: (column) => ({
              width: column.width,
              onResize: this.handleResize(index),
            }),
          };
        case 23:
          return {
            ...col,
            sortOrder: !isEmpty(sortedInfo)
              ? sortedInfo.columnKey === "thuong" && sortedInfo.order
              : null,
            onHeaderCell: (column) => ({
              width: column.width,
              onResize: this.handleResize(index),
            }),
          };
        case 24:
          return {
            ...col,
            sortOrder: !isEmpty(sortedInfo)
              ? sortedInfo.columnKey === "phat" && sortedInfo.order
              : null,
            onHeaderCell: (column) => ({
              width: column.width,
              onResize: this.handleResize(index),
            }),
          };
        case 25:
          return {
            ...col,
            sortOrder: !isEmpty(sortedInfo)
              ? sortedInfo.columnKey === "san_luong_content_1k" &&
                sortedInfo.order
              : null,
            onHeaderCell: (column) => ({
              width: column.width,
              onResize: this.handleResize(index),
            }),
          };
        case 26:
          return {
            ...col,
            sortOrder: !isEmpty(sortedInfo)
              ? sortedInfo.columnKey === "san_luong_content_2k" &&
                sortedInfo.order
              : null,
            onHeaderCell: (column) => ({
              width: column.width,
              onResize: this.handleResize(index),
            }),
          };
        case 27:
          return {
            ...col,
            sortOrder: !isEmpty(sortedInfo)
              ? sortedInfo.columnKey === "san_luong_content_3k" &&
                sortedInfo.order
              : null,
            onHeaderCell: (column) => ({
              width: column.width,
              onResize: this.handleResize(index),
            }),
          };
        case 28:
          return {
            ...col,
            sortOrder: !isEmpty(sortedInfo)
              ? sortedInfo.columnKey === "san_luong_content_4k" &&
                sortedInfo.order
              : null,
            onHeaderCell: (column) => ({
              width: column.width,
              onResize: this.handleResize(index),
            }),
          };
        case 29:
          return {
            ...col,
            sortOrder: !isEmpty(sortedInfo)
              ? sortedInfo.columnKey === "san_luong_content_5k" &&
                sortedInfo.order
              : null,
            onHeaderCell: (column) => ({
              width: column.width,
              onResize: this.handleResize(index),
            }),
          };
        case 30:
          return {
            ...col,
            sortOrder: !isEmpty(sortedInfo)
              ? sortedInfo.columnKey === "san_luong_audio" && sortedInfo.order
              : null,
            onHeaderCell: (column) => ({
              width: column.width,
              onResize: this.handleResize(index),
            }),
          };
        case 31:
          return {
            ...col,
            sortOrder: !isEmpty(sortedInfo)
              ? sortedInfo.columnKey === "san_luong_audio_2k" &&
                sortedInfo.order
              : null,
            onHeaderCell: (column) => ({
              width: column.width,
              onResize: this.handleResize(index),
            }),
          };
        case 32:
          return {
            ...col,
            sortOrder: !isEmpty(sortedInfo)
              ? sortedInfo.columnKey === "san_luong_audio_3k" &&
                sortedInfo.order
              : null,
            onHeaderCell: (column) => ({
              width: column.width,
              onResize: this.handleResize(index),
            }),
          };
        case 33:
          return {
            ...col,
            sortOrder: !isEmpty(sortedInfo)
              ? sortedInfo.columnKey === "san_luong_audio_4k" &&
                sortedInfo.order
              : null,
            onHeaderCell: (column) => ({
              width: column.width,
              onResize: this.handleResize(index),
            }),
          };
        case 34:
          return {
            ...col,
            sortOrder: !isEmpty(sortedInfo)
              ? sortedInfo.columnKey === "san_luong_audio_5k" &&
                sortedInfo.order
              : null,
            onHeaderCell: (column) => ({
              width: column.width,
              onResize: this.handleResize(index),
            }),
          };
        case 35:
          return {
            ...col,
            sortOrder: !isEmpty(sortedInfo)
              ? sortedInfo.columnKey === "san_luong_video_1k" &&
                sortedInfo.order
              : null,
            onHeaderCell: (column) => ({
              width: column.width,
              onResize: this.handleResize(index),
            }),
          };
        case 36:
          return {
            ...col,
            sortOrder: !isEmpty(sortedInfo)
              ? sortedInfo.columnKey === "san_luong_video_2k" &&
                sortedInfo.order
              : null,
            onHeaderCell: (column) => ({
              width: column.width,
              onResize: this.handleResize(index),
            }),
          };
        case 37:
          return {
            ...col,
            sortOrder: !isEmpty(sortedInfo)
              ? sortedInfo.columnKey === "san_luong_video_3k" &&
                sortedInfo.order
              : null,
            onHeaderCell: (column) => ({
              width: column.width,
              onResize: this.handleResize(index),
            }),
          };
        case 38:
          return {
            ...col,
            sortOrder: !isEmpty(sortedInfo)
              ? sortedInfo.columnKey === "san_luong_video_4k" &&
                sortedInfo.order
              : null,
            onHeaderCell: (column) => ({
              width: column.width,
              onResize: this.handleResize(index),
            }),
          };
        case 39:
          return {
            ...col,
            sortOrder: !isEmpty(sortedInfo)
              ? sortedInfo.columnKey === "san_luong_video_5k" &&
                sortedInfo.order
              : null,
            onHeaderCell: (column) => ({
              width: column.width,
              onResize: this.handleResize(index),
            }),
          };
        case 40:
          return {
            ...col,
            sortOrder: !isEmpty(sortedInfo)
              ? sortedInfo.columnKey === "note_khac" && sortedInfo.order
              : null,
            onHeaderCell: (column) => ({
              width: column.width,
              onResize: this.handleResize(index),
            }),
          };
        case 41:
          return {
            ...col,
            sortOrder: !isEmpty(sortedInfo)
              ? sortedInfo.columnKey === "tong_luong" && sortedInfo.order
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

    let sumSalary = salaryChangeUpdate.reduce(
      (sum, item) => sum + item.tong_luong,
      0
    );

    return (
      <div>
        <div
          style={{
            display: "flex",
            marginBottom: 10,
            justifyContent: "flex-end",
          }}
        >
          {/* <Button
            type={"primary"}
            style={{ height: 36, marginRight: 10, borderRadius: 3 }}
            onClick={this.onExportExcell}
            icon={<FileExcelOutlined />}
          >
            Excel
          </Button> */}
          {/* <Button
            type={"primary"}
            style={{ height: 36, marginRight: 10, borderRadius: 3 }}
            icon={<CheckCircleOutlined />}
            className="buttonPrimary"
            onClick={debounce(() => this.onConfirm())}
          >
            XÁC NHẬN PHIẾU LƯƠNG
          </Button> */}
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
          dataSource={salaryChangeUpdate}
          columns={mapColumns}
          rowKey="stt"
          // pagination={
          //   salaryChangeUpdate.length > 10
          //     ? {
          //         // showSizeChanger: false,
          //         total: salaryChangeUpdate.length,
          //       }
          //     : false
          // }
          pagination={false}
          sticky
          // summary={pageData => {
          //   console.log("pageData: ", pageData);
          //   let totalBorrow = 0;
          //   let totalRepayment = 0;

          //   pageData.forEach(({ borrow, repayment }) => {
          //     totalBorrow += borrow;
          //     totalRepayment += repayment;
          //   });

          //   return (
          //     <>
          //       <Table.Summary.Row >
          //         <Table.Summary.Cell>TỔNG CỘNG</Table.Summary.Cell>
          //         <Table.Summary.Cell>
          //           <div type="danger">{pageData?.length}</div>
          //         </Table.Summary.Cell>
          //         <Table.Summary.Cell>
          //           <div>{totalRepayment}</div>
          //         </Table.Summary.Cell>
          //       </Table.Summary.Row>

          //     </>
          //   );
          // }}
        />
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            margin: "20px",
          }}
        >
          <div style={{ fontSize: "24px", fontWeight: "bold" }}>TỔNG CỘNG</div>
          <div
            style={{
              fontSize: "24px",
              fontWeight: "bold",
              marginRight: "180px",
            }}
          >
            {numberFormat(sumSalary)}
          </div>
        </div>
      </div>
    );
  }
}
