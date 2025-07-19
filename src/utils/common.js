import { toNumber, toString } from "lodash";
import numeral from "numeral";
import * as XLSX from "xlsx";

export const dateFormat = "DD-MM-YYYY";

export const monthFormat = "MM-YYYY";

export const salaryIndexDropdown = [
  {
    value: 5,
    text: "1500 từ",
  },
  {
    value: 10,
    text: "2500 từ",
  },
  {
    value: 15,
    text: "3500 từ",
  },
  {
    value: 20,
    text: "4500 từ",
  },
  {
    value: 25,
    text: "5500 từ",
  },
];

export const fixUserColumn = {
  id: 0,
  name: 1,
  status: 2,
  type: 3,
  userName: 4,
  password: 5,
  admin: 6,
  cm: 7,
  cw: 8,
  am: 9,
  ac: 10,
  vm: 11,
  ve: 12,
  other: 13,
  tenTickers: 14,
  tenMovie: 15,
  tenAsia: 16,
  tenTun: 17,
  tenAnime: 18,
  tlsq: 19,
  tenKpop: 20,
  entertainment: 21,
  kaTun: 22,
  tenTen: 23,
  animeCN: 24,
  // beginDate: 23,
  // cms: 24,
  // nickname: 25,
  // dob: 26,
  // email: 27,
  // phone: 28,
  // bank: 29,
  // bankNumber: 30,
  // bankNote: 31,
  // note: 32,
  // luongCung: 33,
  // donGiaScrip1k: 34,
  // donGiaScrip2k: 35,
  // donGiaScrip3k: 36,
  // donGiaScrip4k: 37,
  // donGiaScrip5k: 38,
  // donGiaAudio: 39,
  // donGiaAudio2k: 40,
  // donGiaAudio3k: 41,
  // donGiaAudio4k: 42,
  // donGiaAudio5k: 43,
  // donGiaVideo1k: 44,
  // donGiaVideo2k: 45,
  // donGiaVideo3k: 46,
  // donGiaVideo4k: 47,
  // donGiaVideo5k: 48,
  beginDate: 33,
  cms: 34,
  nickname: 35,
  dob: 36,
  email: 37,
  phone: 38,
  bank: 39,
  bankNumber: 40,
  bankNote: 41,
  note: 42,
  luongCung: 43,
  donGiaScrip1k: 44,
  donGiaScrip2k: 45,
  donGiaScrip3k: 46,
  donGiaScrip4k: 47,
  donGiaScrip5k: 48,
  donGiaAudio: 49,
  donGiaAudio2k: 50,
  donGiaAudio3k: 51,
  donGiaAudio4k: 52,
  donGiaAudio5k: 53,
  donGiaVideo1k: 54,
  donGiaVideo2k: 55,
  donGiaVideo3k: 56,
  donGiaVideo4k: 57,
  donGiaVideo5k: 58,
};

export function numberFormat(value) {
  return numeral(toNumber(value)).format("0,0");
}

export function formatNumber(value) {
  let str = numeral(value).format("0,0");
  const newchar = ".";
  str = str.split(",").join(newchar);
  return str;
}

export function getValueOfNumberFormat(value) {
  if (isNaN(parseFloat(value))) {
    return value;
  } else {
    return numeral(value).value().toString();
  }
}

export const formatMoney = (money) => {
  if (money === undefined || money === null || money === "") {
    return "0";
  }
  let moneyString = "";
  moneyString = money.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
  return moneyString;
};

export const convertMoneyToNumber = (money) => {
  if (money === undefined || money === null || money === "") {
    return 0;
  }
  let moneyString = "";
  moneyString = money.toString().replace(/\./g, "");
  return parseInt(moneyString, 10);
};

export function numberWithCommas(x) {
  if (x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
  }
}

export const listAdmin = ["TT10000", "TT10001", "TT10003", "TT10004"];

export const ExportExcel = (data, fileName, nameSheet) => {
  const dotFile = ".xlsx";
  if (
    typeof data === "undefined" ||
    typeof fileName === "undefined" ||
    typeof nameSheet === "undefined"
  ) {
    alert("Phải nhận đủ 3 tham số: dữ liệu, tên file, tên sheet");
  }

  if (typeof data !== "object") {
    alert("Dữ liệu đầu vào phải là một array hoặc object");
    return;
  }

  const ws = XLSX.utils.json_to_sheet(data);
  let wb = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(wb, ws, toString(nameSheet));

  XLSX.writeFile(wb, fileName + dotFile);
};
