import { Button, notification, Table, DatePicker } from "antd";
import axios from "axios";
import { debounce, isEmpty, map } from "lodash";
import moment from "moment";
import React, { Component } from "react";
import { Resizable } from "react-resizable";
import { apiUrl } from "../constants.js/api";
import { FileExcelOutlined, FilterFilled } from "@ant-design/icons";
import {
  ExportExcel,
  monthFormat,
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

export default class SalaryOldPrivate extends Component {
  constructor(props) {
    super(props);
    this.state = {
      salary: [],
      salaryChangeUpdate: [],
      month: null,
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
          // render: (value, record) => <div>{numberFormat(value)}</div>,
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
        //   title: `Đơn giá Video${salaryIndexDropdown[1]?.text}`,
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
          // render: (value, record) => <div>{numberFormat(value)}</div>,
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
          // render: (value, record) => <div>{numberFormat(value)}</div>,
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
        //   title: "Contents 2500 words number",
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
        //   title: "Contents 3500 words number",
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
        //   title: "Contents 4500 words number",
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
        //   title: "Contents 5500 words number",
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
        //   title: "Audio 2500 words Number",
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
        //   title: "Audio 3500 words Number",
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
        //   title: "Audio 4500 words Number",
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
        //   title: "Audio 5500 words Number",
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
        //   title: "Videos 2500 words Number",
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
        //   title: "Videos 3500 words Number",
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
        //   title: "Videos 4500 words Number",
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
        //   title: "Videos 5500 words Number",
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
        },
        {
          title: "Total Salary",
          dataIndex: "tong_luong",
          key: "tong_luong",
          sorter: (a, b) => a.tong_luong.length - b.tong_luong.length,
          ellipsis: {
            showTitle: false,
          },
          width: 150,
          // render: (value, record) => <div>{numberFormat(value)}</div>,
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
    this.mounted = true;
    this._onRefreshData(
      moment().subtract(1, "months").format("MM"),
      moment().format("YYYY")
    );
  }

  componentWillUnmount() {
    this.mounted = false;
  }

  _onRefreshData = (month, year) => {
    // console.log("month", month);
    // console.log("year", year);
    this.setState({ isLoading: true });
    const body = {
      month,
      year,
    };
    axios.post(`${apiUrl}/salary`, body).then((res) => {
      const mapDataSource = map(res.data.data, (item, index) => {
        return {
          ...item,
          stt: index + 1,
        };
      });
      if (isEmpty(res.data.data)) {
        notification.info({
          message: "Thông báo",
          description: "Không có dữ liệu",
        });
      }

      const filterDataSource = mapDataSource.filter(
        (item, index) => item.trang_thai === 1 && item.tong_luong !== "0"
      );

      const mapDataFinal = map(filterDataSource, (item, index) => {
        return {
          ...item,
          stt: index + 1,
        };
      });
      const userId = localStorage.getItem("id");
      let filterDataFinal = mapDataFinal?.filter((item) => {
        return +item.ma_nv === +userId + 1;
      });
      this.setState({
        salary: filterDataFinal,
        salaryChangeUpdate: filterDataFinal,
        // salaryChangeUpdate: mapDataFinal,
        isLoading: false,
      });
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

  onChangeMonth = (value) => {
    this.setState({ month: value });
  };

  onFilterData = () => {
    if (!isEmpty(this.state.month)) {
      // console.log("yearrrrrr", this.state.month.format("YYYY"));
      this._onRefreshData(
        this.state.month.format("MM"),
        this.state.month.format("YYYY")
      );
    } else {
      notification.info({
        message: "Chưa chọn tháng",
      });
    }
  };

  render() {
    const { column, sortedInfo, isLoading, salary, month } = this.state;
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
    console.log("salary: ", salary);
    let sumSalary = salary.reduce(
      (total, item) => total + parseInt(item.tong_luong.replace(/\./g, "")),
      0
    );
    console.log("sumSalary: ", sumSalary);
    return (
      <div>
        <div
          style={{
            display: "flex",
            marginLeft: 10,
          }}
        >
          <DatePicker
            ref={this.dateRef}
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
        {/* <div
          style={{
            display: "flex",
            marginBottom: 10,
            justifyContent: "flex-end",
          }}
        >
          <Button
            type={"primary"}
            style={{ height: 36, marginRight: 10, borderRadius: 3 }}
            onClick={this.onExportExcell}
            icon={<FileExcelOutlined />}
          >
            Excel
          </Button>
        </div> */}

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
          dataSource={salary}
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
