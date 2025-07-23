import React, { Component } from "react";
import {
  Layout,
  Card,
  Table,
  Button,
  Upload,
  message,
  Modal,
  Input,
  Spin,
  Tabs,
  Breadcrumb,
  Menu,
  Dropdown,
  Typography,
  Space,
  Progress,
} from "antd";
import {
  UploadOutlined,
  FileOutlined,
  FolderOutlined,
  PlusOutlined,
  CloudUploadOutlined,
  FileWordOutlined,
  FileImageOutlined,
  FileMarkdownOutlined,
  FilePdfOutlined,
  FileUnknownOutlined,
  FileZipOutlined,
  AudioOutlined,
  VideoCameraOutlined,
  DownOutlined,
  ReloadOutlined,
  DeleteOutlined,
  FolderAddOutlined,
} from "@ant-design/icons";
import axios from "axios";
import { apiUrl } from "../constants.js/api";
import { fixUserColumn } from "../utils/common";
import moment from "moment";
import { get, map, filter } from "lodash";

const { Title } = Typography;
const { TabPane } = Tabs;
const { Content, Sider } = Layout;
const { Search } = Input;
const { confirm } = Modal;

class UploadFiles extends Component {
  constructor(props) {
    super(props);
    this.state = {
      folders: [],
      files: [],
      selectedFolder: null,
      loading: false,
      creating: false,
      uploading: false,
      showCreateDocModal: false,
      showCreateFolderModal: false,
      newDocName: "",
      newFolderName: "",
      visibleUploadModal: false,
      uploadedList: [],
      userChannels: [],
      breadcrumbItems: ["My Drive"],
      searchValue: "",
      breadcrumbPath: [], // Thêm breadcrumbPath để theo dõi đường dẫn folder
      // Thêm các trạng thái để theo dõi tiến trình upload
      uploadProgress: {},
      uploadSpeed: {},
      uploadRemaining: {},
      uploadStartTime: {},
    };
  }

  componentDidMount() {
    this.fetchUserChannels();
  }

  fetchUserChannels = () => {
    this.setState({ loading: true });

    // Lấy thông tin channels từ data (từ props)
    const { data, id } = this.props;
    if (!data || !id) {
      this.setState({ loading: false });
      return;
    }

    // Xác định các kênh mà người dùng có quyền truy cập
    // Bắt đầu từ cột O (index 14 - tenTickers) trở đi
    const userChannels = [];

    // Map tên kênh với tên folder tương ứng trên Google Drive
    const channelFolderMap = {
      "Vẹt tiếng Anh": "Vẹt tiếng Anh",
      "Vẹt tiếng Việt": "Vẹt tiếng Việt",
      "Mèo tiếng Anh": "Mèo tiếng Anh",
      "Mèo tiếng Việt": "Mèo tiếng Việt",
      "Sư tử tiếng Anh": "Sư tử tiếng Anh",
      "Sư tử tiếng Việt": "Sư tử tiếng Việt",
      "Trứng tiếng Anh": "Trứng tiếng Anh",
      "Trứng tiếng Việt": "Trứng tiếng Việt",
      "Lửng tiếng Anh": "Lửng tiếng Anh",
    };

    // Kiểm tra từng cột kênh xem người dùng có quyền không
    for (let i = fixUserColumn.tenTickers; i < data[0].length; i++) {
      const columnName = data[0][i]; // Tên kênh
      const hasAccess = data[parseInt(id) + 1][i] === "1";

      if (hasAccess && columnName) {
        const folderName = channelFolderMap[columnName] || columnName;
        userChannels.push({
          name: columnName,
          folderName: folderName,
          id: null, // Sẽ được cập nhật sau khi lấy danh sách folder từ API
        });
      }
    }

    this.setState({ userChannels, loading: false }, () => {
      this.fetchFolders();
    });
  };

  fetchFolders = () => {
    this.setState({ loading: true });

    // Gọi API để lấy danh sách folder
    axios
      .get(`${apiUrl}/drive-folders`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("userInfo")}`,
        },
      })
      .then((response) => {
        const folders = response.data.folders || [];

        // Cập nhật folder ID cho các kênh người dùng có quyền
        const updatedUserChannels = this.state.userChannels.map((channel) => {
          const matchingFolder = folders.find(
            (folder) => folder.name === channel.folderName
          );
          return {
            ...channel,
            id: matchingFolder ? matchingFolder.id : null,
          };
        });

        this.setState({
          folders,
          userChannels: updatedUserChannels,
          loading: false,
        });
      })
      .catch((error) => {
        console.error("Error fetching folders:", error);
        message.error("Không thể lấy danh sách folder");
        this.setState({ loading: false });
      });
  };

  fetchFiles = (folderId) => {
    this.setState({ loading: true, selectedFolder: folderId });

    // Gọi API để lấy danh sách file trong folder
    axios
      .get(`${apiUrl}/drive-files`, {
        params: { folderId },
        headers: {
          Authorization: `Bearer ${localStorage.getItem("userInfo")}`,
        },
      })
      .then((response) => {
        const files = response.data.files || [];
        const folderName = response.data.folderName || "Folder";

        // Nếu đang ở folder con, thêm breadcrumb
        let newBreadcrumbItems;
        if (this.state.breadcrumbPath && this.state.breadcrumbPath.length > 0) {
          // Kiểm tra xem folder hiện tại có phải là con của folder trước đó không
          const lastFolder =
            this.state.breadcrumbPath[this.state.breadcrumbPath.length - 1];
          if (lastFolder && lastFolder.id === folderId) {
            // Folder hiện tại đã có trong breadcrumb path, không thay đổi breadcrumb
            newBreadcrumbItems = this.state.breadcrumbItems;
          } else {
            // Tìm xem folder hiện tại có trong breadcrumb path hay không
            const existingIndex = this.state.breadcrumbPath.findIndex(
              (item) => item.id === folderId
            );

            if (existingIndex >= 0) {
              // Nếu folder hiện tại đã tồn tại trong path, cắt path tới vị trí đó
              const newPath = this.state.breadcrumbPath.slice(
                0,
                existingIndex + 1
              );
              const newBreadcrumb = [
                "My Drive",
                ...newPath.map((item) => item.name),
              ];
              newBreadcrumbItems = newBreadcrumb;
              this.setState({ breadcrumbPath: newPath });
            } else {
              // Thêm folder hiện tại vào breadcrumb path
              const newFolder = { id: folderId, name: folderName };
              const newPath = [...this.state.breadcrumbPath, newFolder];
              const newBreadcrumb = [
                "My Drive",
                ...newPath.map((item) => item.name),
              ];
              newBreadcrumbItems = newBreadcrumb;
              this.setState({ breadcrumbPath: newPath });
            }
          }
        } else {
          // Khởi tạo breadcrumb path mới
          const newFolder = { id: folderId, name: folderName };
          const newPath = [newFolder];
          newBreadcrumbItems = ["My Drive", folderName];
          this.setState({ breadcrumbPath: newPath });
        }

        this.setState({
          files,
          loading: false,
          breadcrumbItems: newBreadcrumbItems,
        });

        // Log ra để debug
        console.log("Fetched files:", files);
        console.log("Breadcrumb path:", this.state.breadcrumbPath);
      })
      .catch((error) => {
        console.error("Error fetching files:", error);
        message.error("Không thể lấy danh sách file");
        this.setState({ loading: false });
      });
  };

  handleFolderClick = (folder) => {
    this.fetchFiles(folder.id);
  };

  handleItemClick = (item) => {
    // Nếu là folder thì mở folder đó
    if (item.mimeType === "application/vnd.google-apps.folder") {
      this.fetchFiles(item.id);
    }
    // Nếu là file thì mở trong tab mới
    else if (item.webViewLink) {
      window.open(item.webViewLink, "_blank");
    }
  };

  handleCreateDoc = () => {
    const { newDocName, selectedFolder } = this.state;

    if (!newDocName.trim()) {
      message.error("Vui lòng nhập tên file");
      return;
    }

    this.setState({ creating: true });

    // Gọi API để tạo file mới
    axios
      .post(
        `${apiUrl}/drive-create-doc`,
        {
          name: newDocName,
          folderId: selectedFolder,
        },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("userInfo")}`,
          },
        }
      )
      .then((response) => {
        message.success("Đã tạo file mới thành công");
        this.fetchFiles(selectedFolder);
        this.setState({
          showCreateDocModal: false,
          newDocName: "",
          creating: false,
        });

        // Mở file mới trong tab mới
        if (response.data.webViewLink) {
          window.open(response.data.webViewLink, "_blank");
        }
      })
      .catch((error) => {
        console.error("Error creating document:", error);
        message.error("Không thể tạo file");
        this.setState({ creating: false });
      });
  };

  handleCreateFolder = () => {
    const { newFolderName, selectedFolder } = this.state;

    if (!newFolderName.trim()) {
      message.error("Vui lòng nhập tên thư mục");
      return;
    }

    this.setState({ creating: true });

    // Gọi API để tạo folder mới
    axios
      .post(
        `${apiUrl}/drive-create-folder`,
        {
          name: newFolderName,
          parentFolderId: selectedFolder,
        },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("userInfo")}`,
          },
        }
      )
      .then((response) => {
        message.success("Đã tạo thư mục mới thành công");
        this.fetchFiles(selectedFolder);
        this.setState({
          showCreateFolderModal: false,
          newFolderName: "",
          creating: false,
        });
      })
      .catch((error) => {
        console.error("Error creating folder:", error);
        message.error("Không thể tạo thư mục");
        this.setState({ creating: false });
      });
  };

  showUploadModal = () => {
    this.setState({
      visibleUploadModal: true,
      uploadedList: [],
    });
  };

  handleUpload = ({ file, onSuccess, onError }) => {
    const { selectedFolder } = this.state;
    const formData = new FormData();
    formData.append("file", file);
    formData.append("folderId", selectedFolder);

    // Kiểm tra xem file đã tồn tại trong danh sách đang upload chưa
    const fileExists = this.state.uploadedList.some(
      (f) =>
        f.name === file.name &&
        f.size === file.size &&
        (f.status === "uploading" || f.status === "done")
    );

    if (fileExists) {
      message.warning(`File ${file.name} đã được chọn để upload`);
      onError(new Error("File đã tồn tại trong danh sách"));
      return;
    }

    // Thêm file vào danh sách đang upload trước khi bắt đầu upload
    const updatedFile = { ...file, status: "uploading" };

    this.setState((prevState) => ({
      uploading: true,
      uploadedList: [...prevState.uploadedList, updatedFile],
      uploadProgress: {
        ...prevState.uploadProgress,
        [file.uid]: 0,
      },
      uploadSpeed: {
        ...prevState.uploadSpeed,
        [file.uid]: "0 KB/s",
      },
      uploadRemaining: {
        ...prevState.uploadRemaining,
        [file.uid]: "∞",
      },
      uploadStartTime: {
        ...prevState.uploadStartTime,
        [file.uid]: Date.now(),
      },
    }));

    // Gọi API để upload file với tracking progress
    axios
      .post(`${apiUrl}/drive-upload`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${localStorage.getItem("userInfo")}`,
        },
        onUploadProgress: ({ total, loaded }) => {
          // Tính % đã upload
          const percent = Math.round((loaded / total) * 100);

          // Cập nhật percent vào file object
          const updatedFile = {
            ...file,
            percent,
            status: percent === 100 ? "processing" : "uploading",
          };

          // Cập nhật file trong danh sách uploadedList
          this.setState((prevState) => ({
            uploadedList: prevState.uploadedList.map((f) =>
              f.uid === file.uid ? updatedFile : f
            ),
          }));

          // Lấy thời gian đã trôi qua
          const elapsedTime =
            (Date.now() - this.state.uploadStartTime[file.uid]) / 1000; // Đổi sang giây

          // Tính tốc độ upload (bytes/giây)
          const speed = elapsedTime > 0 ? loaded / elapsedTime : 0;

          // Tính thời gian còn lại (giây)
          const remainingBytes = total - loaded;
          const remainingTime = speed > 0 ? remainingBytes / speed : Infinity;

          // Định dạng thời gian còn lại
          let remainingText;
          if (remainingTime === Infinity || isNaN(remainingTime)) {
            remainingText = "∞";
          } else if (remainingTime < 60) {
            remainingText = `${Math.round(remainingTime)}s`;
          } else if (remainingTime < 3600) {
            remainingText = `${Math.round(remainingTime / 60)}m ${Math.round(
              remainingTime % 60
            )}s`;
          } else {
            remainingText = `${Math.floor(remainingTime / 3600)}h ${Math.round(
              (remainingTime % 3600) / 60
            )}m`;
          }

          // Định dạng tốc độ upload
          const speedFormatted =
            speed < 1024
              ? `${speed.toFixed(1)} B/s`
              : speed < 1024 * 1024
              ? `${(speed / 1024).toFixed(1)} KB/s`
              : `${(speed / (1024 * 1024)).toFixed(1)} MB/s`;

          // Định dạng bytes đã upload
          const loadedFormatted =
            loaded < 1024
              ? `${loaded} B`
              : loaded < 1024 * 1024
              ? `${(loaded / 1024).toFixed(1)} KB`
              : `${(loaded / (1024 * 1024)).toFixed(1)} MB`;

          // Định dạng tổng bytes
          const totalFormatted =
            total < 1024
              ? `${total} B`
              : total < 1024 * 1024
              ? `${(total / 1024).toFixed(1)} KB`
              : `${(total / (1024 * 1024)).toFixed(1)} MB`;

          // Cập nhật state
          this.setState((prevState) => ({
            uploadProgress: {
              ...prevState.uploadProgress,
              [file.uid]: percent,
            },
            uploadSpeed: {
              ...prevState.uploadSpeed,
              [file.uid]: speedFormatted,
            },
            uploadRemaining: {
              ...prevState.uploadRemaining,
              [file.uid]: remainingText,
            },
          }));

          // Lưu thông tin bytes đã upload vào file
          updatedFile.loadedBytes = loadedFormatted;
          updatedFile.totalBytes = totalFormatted;

          // Log thông tin để debug
          console.log(
            `File: ${file.name}, Progress: ${percent}%, Speed: ${speedFormatted}, Remaining: ${remainingText}, Loaded: ${loadedFormatted}/${totalFormatted}`
          );
        },
      })
      .then((response) => {
        message.success(`${file.name} đã được tải lên thành công`);
        onSuccess(response.data);

        // Cập nhật trạng thái cho file hoàn thành
        this.setState((prevState) => ({
          uploadProgress: {
            ...prevState.uploadProgress,
            [file.uid]: 100,
          },
          uploadedList: prevState.uploadedList.map((f) =>
            f.uid === file.uid
              ? { ...f, status: "done", response: response.data }
              : f
          ),
          uploading: prevState.uploadedList.some(
            (f) =>
              f.uid !== file.uid &&
              (!f.status ||
                f.status === "uploading" ||
                f.status === "processing")
          ),
        }));
      })
      .catch((error) => {
        console.error("Upload error:", error);
        message.error(`${file.name} không thể tải lên`);
        onError();

        // Cập nhật trạng thái cho file lỗi
        this.setState((prevState) => ({
          uploadedList: prevState.uploadedList.map((f) =>
            f.uid === file.uid ? { ...f, status: "error", error } : f
          ),
          uploading: prevState.uploadedList.some(
            (f) =>
              f.uid !== file.uid &&
              (!f.status ||
                f.status === "uploading" ||
                f.status === "processing")
          ),
        }));
      });
  };

  handleUploadDone = () => {
    // Kiểm tra xem có file nào đang upload hoặc đang xử lý không
    const hasUploadingFiles = this.state.uploadedList.some(
      (file) =>
        !file.status ||
        file.status === "uploading" ||
        file.status === "processing"
    );

    if (hasUploadingFiles) {
      message.warning("Vui lòng đợi tất cả file upload hoàn tất");
      return;
    }

    this.setState({ visibleUploadModal: false });
    this.fetchFiles(this.state.selectedFolder);
  };

  getFileIcon = (fileType) => {
    if (!fileType) return <FileUnknownOutlined />;

    fileType = fileType.toLowerCase();

    if (fileType.includes("folder"))
      return <FolderOutlined style={{ color: "#4285F4" }} />;
    if (fileType.includes("document")) return <FileWordOutlined />;
    if (fileType.includes("sheet"))
      return <FileOutlined style={{ color: "#34A853" }} />;
    if (fileType.includes("presentation"))
      return <FileOutlined style={{ color: "#FBBC05" }} />;
    if (fileType.includes("pdf"))
      return <FilePdfOutlined style={{ color: "#E94435" }} />;
    if (fileType.includes("image"))
      return <FileImageOutlined style={{ color: "#4285F4" }} />;
    if (fileType.includes("audio"))
      return <AudioOutlined style={{ color: "#9C27B0" }} />;
    if (fileType.includes("video"))
      return <VideoCameraOutlined style={{ color: "#FF5722" }} />;
    if (fileType.includes("zip") || fileType.includes("archive"))
      return <FileZipOutlined style={{ color: "#795548" }} />;
    if (fileType.includes("text")) return <FileMarkdownOutlined />;

    return <FileOutlined />;
  };

  renderNoFolderContent = () => (
    <div style={{ textAlign: "center", padding: 50 }}>
      <Title level={4}>Chọn một folder để xem nội dung</Title>
      <p>Các folder phản ánh các kênh mà bạn có quyền truy cập</p>
    </div>
  );

  renderFileList = () => {
    const { files, loading } = this.state;

    const columns = [
      {
        title: "Tên file",
        dataIndex: "name",
        key: "name",
        render: (text, record) => (
          <Space>
            {this.getFileIcon(record.mimeType)}
            <a
              onClick={() => this.handleItemClick(record)}
              style={{ cursor: "pointer" }}
            >
              {text}
            </a>
          </Space>
        ),
      },
      {
        title: "Loại file",
        dataIndex: "mimeType",
        key: "mimeType",
        render: (text) => {
          if (text.includes("folder")) return "Thư mục";
          return text.split("/").pop();
        },
      },
      {
        title: "Kích thước",
        dataIndex: "size",
        key: "size",
        render: (text, record) => {
          if (record.mimeType.includes("folder")) return "N/A";
          if (!text) return "N/A";
          const kb = parseInt(text) / 1024;
          if (kb < 1024) return `${kb.toFixed(2)} KB`;
          return `${(kb / 1024).toFixed(2)} MB`;
        },
      },
      {
        title: "Ngày tạo",
        dataIndex: "createdTime",
        key: "createdTime",
        render: (text) => moment(text).format("DD/MM/YYYY HH:mm"),
      },
      {
        title: "Người tạo",
        dataIndex: "createdBy",
        key: "createdBy",
      },
      {
        title: "Hành động",
        key: "action",
        render: (_, record) => (
          <Space>
            <Button
              type="link"
              icon={<DeleteOutlined />}
              onClick={() => this.handleDeleteItem(record)}
            >
              Xóa
            </Button>
          </Space>
        ),
      },
    ];

    return (
      <div style={{ marginTop: 16 }}>
        <div
          style={{
            marginBottom: 16,
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <Space>
            <Button
              type="primary"
              icon={<CloudUploadOutlined />}
              onClick={this.showUploadModal}
              disabled={!this.state.selectedFolder}
            >
              Upload
            </Button>
            <Button
              icon={<FileWordOutlined />}
              onClick={() => this.setState({ showCreateDocModal: true })}
              disabled={!this.state.selectedFolder}
            >
              Tạo file mới
            </Button>
            <Button
              icon={<FolderAddOutlined />}
              onClick={() => this.setState({ showCreateFolderModal: true })}
              disabled={!this.state.selectedFolder}
            >
              Tạo thư mục mới
            </Button>
          </Space>
          <Space>
            <Search
              placeholder="Tìm kiếm file"
              onSearch={(value) => this.setState({ searchValue: value })}
              style={{ width: 300 }}
            />
            <Button
              icon={<ReloadOutlined />}
              onClick={() => this.fetchFiles(this.state.selectedFolder)}
            />
          </Space>
        </div>

        <Table
          columns={columns}
          dataSource={files.map((file) => ({ ...file, key: file.id }))}
          loading={loading}
          pagination={{ pageSize: 10 }}
        />
      </div>
    );
  };

  handleDeleteItem = (item) => {
    const isFolder = item.mimeType.includes("folder");

    confirm({
      title: `Bạn có chắc chắn muốn xóa ${isFolder ? "thư mục" : "file"} này?`,
      content: `${isFolder ? "Thư mục" : "File"} "${
        item.name
      }" sẽ bị xóa vĩnh viễn${
        isFolder ? " cùng với tất cả nội dung bên trong" : ""
      }.`,
      okText: "Xóa",
      okType: "danger",
      cancelText: "Hủy",
      onOk: () => {
        this.setState({ loading: true });

        // Gọi API để xóa file hoặc folder
        const endpoint = isFolder
          ? "/drive-delete-folder"
          : "/drive-delete-file";

        axios
          .delete(`${apiUrl}${endpoint}`, {
            data: {
              fileId: item.id,
              folderId: item.id, // Nếu là folder thì dùng folderId
            },
            headers: {
              Authorization: `Bearer ${localStorage.getItem("userInfo")}`,
            },
          })
          .then(() => {
            message.success(
              `Đã xóa ${isFolder ? "thư mục" : "file"} thành công`
            );
            this.fetchFiles(this.state.selectedFolder);
          })
          .catch((error) => {
            console.error(
              `Error deleting ${isFolder ? "folder" : "file"}:`,
              error
            );
            message.error(`Không thể xóa ${isFolder ? "thư mục" : "file"}`);
            this.setState({ loading: false });
          });
      },
    });
  };

  handleBreadcrumbClick = (index) => {
    if (index === 0) {
      // Click vào "My Drive", reset về danh sách kênh
      this.setState({
        selectedFolder: null,
        files: [],
        breadcrumbItems: ["My Drive"],
        breadcrumbPath: [],
      });
    } else if (
      this.state.breadcrumbPath &&
      this.state.breadcrumbPath.length >= index
    ) {
      // Click vào breadcrumb item, navigate đến folder tương ứng
      const targetFolder = this.state.breadcrumbPath[index - 1];
      if (targetFolder && targetFolder.id) {
        this.fetchFiles(targetFolder.id);
      }
    }
  };

  // Thêm phương thức render thông tin upload
  renderUploadInfo = (file) => {
    const { uploadProgress, uploadSpeed, uploadRemaining } = this.state;
    const percent = uploadProgress[file.uid] || 0;
    const speed = uploadSpeed[file.uid] || "0 KB/s";
    const remaining = uploadRemaining[file.uid] || "∞";

    let status = "active";
    if (file.status === "done") {
      status = "success";
    } else if (file.status === "error") {
      status = "exception";
    }

    return (
      <div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            marginBottom: 5,
          }}
        >
          <span>{file.name}</span>
          <span>{percent}%</span>
        </div>
        <Progress percent={percent} size="small" status={status} />
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            fontSize: "12px",
            color: "#888",
            marginTop: 5,
          }}
        >
          <span>Tốc độ: {speed}</span>
          <span>Còn lại: {remaining}</span>
        </div>
        <div style={{ fontSize: "12px", color: "#888" }}>
          <span>
            {file.loadedBytes || "0 KB"} / {file.totalBytes || "N/A"}
          </span>
        </div>
      </div>
    );
  };

  render() {
    const {
      loading,
      userChannels,
      selectedFolder,
      breadcrumbItems,
      showCreateDocModal,
      showCreateFolderModal,
      newDocName,
      newFolderName,
      creating,
      visibleUploadModal,
      uploading,
      uploadedList,
    } = this.state;
    console.log("userChannels", userChannels);

    const uploadProps = {
      customRequest: this.handleUpload,
      multiple: true,
      showUploadList: false, // Không sử dụng upload list mặc định của Ant Design
      progress: {
        strokeColor: {
          "0%": "#108ee9",
          "100%": "#87d068",
        },
        size: 3,
        format: (percent) => `${parseFloat(percent.toFixed(2))}%`,
      },
    };

    return (
      <Spin spinning={loading}>
        <Layout style={{ minHeight: "100vh", background: "#fff" }}>
          {/* Sider và Content giữ nguyên */}
          <Sider
            width={250}
            style={{ background: "#fff", padding: "16px" }}
            theme="light"
          >
            <Title level={4}>Kênh của bạn</Title>

            <Menu mode="inline" style={{ borderRight: 0 }}>
              {userChannels.map((channel) => (
                <Menu.Item
                  key={channel.name}
                  icon={<FolderOutlined />}
                  onClick={() => channel.id && this.handleFolderClick(channel)}
                >
                  {channel.name}
                </Menu.Item>
              ))}
            </Menu>
          </Sider>

          <Content style={{ padding: "0 24px", minHeight: 280 }}>
            <Breadcrumb style={{ margin: "16px 0" }}>
              {breadcrumbItems.map((item, index) => (
                <Breadcrumb.Item
                  key={index}
                  onClick={() => this.handleBreadcrumbClick(index)}
                  style={{ cursor: index === 0 ? "default" : "pointer" }}
                >
                  {item}
                </Breadcrumb.Item>
              ))}
            </Breadcrumb>

            {selectedFolder
              ? this.renderFileList()
              : this.renderNoFolderContent()}
          </Content>
        </Layout>

        {/* Modal tạo file mới - giữ nguyên */}
        <Modal
          title="Tạo file Google Docs mới"
          visible={showCreateDocModal}
          onOk={this.handleCreateDoc}
          onCancel={() => this.setState({ showCreateDocModal: false })}
          okText="Tạo"
          cancelText="Hủy"
          confirmLoading={creating}
        >
          <Input
            placeholder="Nhập tên file"
            prefix={<FileWordOutlined />}
            value={newDocName}
            onChange={(e) => this.setState({ newDocName: e.target.value })}
          />
        </Modal>

        {/* Modal tạo thư mục mới - giữ nguyên */}
        <Modal
          title="Tạo thư mục mới"
          visible={showCreateFolderModal}
          onOk={this.handleCreateFolder}
          onCancel={() => this.setState({ showCreateFolderModal: false })}
          okText="Tạo"
          cancelText="Hủy"
          confirmLoading={creating}
        >
          <Input
            placeholder="Nhập tên thư mục"
            prefix={<FolderOutlined />}
            value={newFolderName}
            onChange={(e) => this.setState({ newFolderName: e.target.value })}
          />
        </Modal>

        {/* Modal upload file - cập nhật UI để hiển thị tiến trình */}
        <Modal
          title="Upload file"
          visible={visibleUploadModal}
          onCancel={() => {
            // Kiểm tra xem có file nào đang upload không
            const hasUploadingFiles = this.state.uploadedList.some(
              (file) =>
                !file.status ||
                file.status === "uploading" ||
                file.status === "processing"
            );

            if (hasUploadingFiles) {
              confirm({
                title: "Có file đang được tải lên",
                content: "Bạn có chắc muốn hủy tất cả các file đang tải lên?",
                onOk: () => {
                  this.setState({
                    visibleUploadModal: false,
                    uploadedList: this.state.uploadedList.filter(
                      (file) => file.status === "done"
                    ),
                  });
                },
              });
            } else {
              this.setState({ visibleUploadModal: false });
            }
          }}
          width={600}
          footer={[
            <Button
              key="back"
              onClick={() => {
                // Kiểm tra xem có file nào đang upload không
                const hasUploadingFiles = this.state.uploadedList.some(
                  (file) =>
                    !file.status ||
                    file.status === "uploading" ||
                    file.status === "processing"
                );

                if (hasUploadingFiles) {
                  confirm({
                    title: "Có file đang được tải lên",
                    content:
                      "Bạn có chắc muốn hủy tất cả các file đang tải lên?",
                    onOk: () => {
                      this.setState({
                        visibleUploadModal: false,
                        uploadedList: this.state.uploadedList.filter(
                          (file) => file.status === "done"
                        ),
                      });
                    },
                  });
                } else {
                  this.setState({ visibleUploadModal: false });
                }
              }}
            >
              Đóng
            </Button>,
            <Button
              key="submit"
              type="primary"
              disabled={this.state.uploadedList.some(
                (file) =>
                  !file.status ||
                  file.status === "uploading" ||
                  file.status === "processing"
              )}
              onClick={this.handleUploadDone}
            >
              Hoàn thành
            </Button>,
          ]}
        >
          <Upload.Dragger {...uploadProps}>
            <p className="ant-upload-drag-icon">
              <UploadOutlined />
            </p>
            <p className="ant-upload-text">
              Kéo thả file vào đây hoặc click để chọn file
            </p>
            <p className="ant-upload-hint">
              Hỗ trợ tất cả các định dạng file. Kích thước tối đa 100MB.
            </p>
          </Upload.Dragger>

          {/* Hiển thị danh sách các file đang upload với tiến trình */}
          {uploadedList.length > 0 && (
            <div style={{ marginTop: 16 }}>
              <div
                style={{
                  borderBottom: "1px solid #f0f0f0",
                  paddingBottom: 8,
                  marginBottom: 8,
                  fontWeight: "bold",
                }}
              >
                Danh sách file ({uploadedList.length})
              </div>
              {uploadedList.map((file) => (
                <div key={file.uid} style={{ marginBottom: 16 }}>
                  {this.renderUploadInfo(file)}
                </div>
              ))}
            </div>
          )}
        </Modal>
      </Spin>
    );
  }

  _onRefreshData = () => {
    this.fetchUserChannels();
  };
}

export default UploadFiles;
