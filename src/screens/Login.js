import React, { Component } from "react";
import { Form, Input, Button, Checkbox, notification, Typography } from "antd";
import { LockOutlined, UserOutlined } from "@ant-design/icons";
import { Background, Card } from "ui-glassmorphism";
import logo from "../download.png";
import "ui-glassmorphism/dist/index.css";
const layout = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 8,
  },
};
const tailLayout = {
  wrapperCol: {
    offset: 8,
    span: 16,
  },
};
const { Title } = Typography;
export default class LoginScreen extends Component {
  onFinish = async (values) => {
    for (let i = 0; i < 66; i++) {
      if (
        this.props.status[i] === "Off" &&
        this.props.username[i] === values.username
      ) {
        notification.error({
          message: "Người dùng không khả dụng",
        });
        i = 66;
      } else {
        if (this.props.username[i] === values.username) {
          if (this.props.password[i] === values.password) {
            await localStorage.setItem("userInfo", values.username);
            await localStorage.setItem("id", i);
            await this.props.onLoginSuccess(i, values);
            this.props.onRefresh();
            break;
          }
        }
        // console.log("i", i);
        // console.log("22", 22);
        if (i === 66 - 1) {
          notification.error({
            message: "Tên đăng nhập hoặc mật khẩu không đúng",
          });
        }
      }
    }
  };

  onFinishFailed = (errorInfo) => {
    notification.error({
      message: "Đã xảy ra lỗi",
      description: errorInfo,
    });
  };
  render() {
    return (
      // <div style={{ backgroundColor: "#238c31" }}>
      //   <img
      //     src="https://yt3.ggpht.com/Mh18AjStx2rYGKn4rp_x1knUUn1KvEuw199O4HYOLFvgLcgydF6Jf2n-LezF18g1bUWVpJ4o=w2120-fcrop64=1,00005a57ffffa5a8-k-c0xffffffff-no-nd-rj"
      //     alt="Logo"
      //     width="100%"
      //     height="100%"
      //     // style={{ display: "flex" }}
      //   />
      //   <div
      //     style={{
      //       display: "flex",
      //       justifyContent: "center",
      //       // height: 600,
      //       // backgroundImage: `url(http://2.bp.blogspot.com/-0-bzxb3VfSA/VjYAz3RPDDI/AAAAAAAACfg/xX4WXg1nKTA/s1600/the-avenger-wallpaper-1920x1080%2B%25287%2529.jpg)`,
      //     }}
      //   >
      <Background
        dark={false}
        img={
          "https://2.bp.blogspot.com/-0-bzxb3VfSA/VjYAz3RPDDI/AAAAAAAACfg/xX4WXg1nKTA/s1600/the-avenger-wallpaper-1920x1080%2B%25287%2529.jpg"
        }
        blur={0}
        style={{ height: "100%" }}
      >
        <img
          src="https://yt3.googleusercontent.com/tcj-RRTyVQVSDyEqUJEWkPSTgxFBXhF-sxYaw4PdA79mpxnyeQjei90hFXc_Bng00Rt9pOk_ATE=w1707-fcrop64=1,00005a57ffffa5a8-k-c0xffffffff-no-nd-rj"
          alt="Logo"
          width="100%"
          height="100%"
          // style={{ display: "flex" }}
        />
        {/* <img
          src={logo}
          alt="Logo"
          width={200}
          height={30}
          style={{ margin: 20, marginLeft: "45%" }}
        /> */}

        <Card
          style={{
            // width: "50%",
            // backgroundColor: "orange",
            // marginTop: 50,
            height: "100%",
          }}
        >
          <Form
            style={{ marginTop: 160, marginBottom: 160 }}
            {...layout}
            name="basic"
            initialValues={{
              remember: true,
            }}
            onFinish={this.onFinish}
            onFinishFailed={this.onFinishFailed}
          >
            <Form.Item
              label={<UserOutlined style={{ color: "#ffffff" }} />}
              name="username"
              rules={[
                {
                  required: true,
                  message: "Please input your username!",
                },
              ]}
            >
              <Input style={{ borderWidth: 0 }} placeholder="Username" />
            </Form.Item>

            <Form.Item
              label={<LockOutlined style={{ color: "#ffffff" }} />}
              name="password"
              rules={[
                {
                  required: true,
                  message: "Please input your password!",
                },
              ]}
            >
              <Input.Password placeholder="Password" />
            </Form.Item>

            <Form.Item {...tailLayout} name="remember" valuePropName="checked">
              <Checkbox style={{ color: "#ffffff" }}>Remember me</Checkbox>
            </Form.Item>

            <Form.Item {...tailLayout}>
              <Button type="primary" htmlType="submit">
                Login
              </Button>
            </Form.Item>
          </Form>
        </Card>
      </Background>
      //   </div>
      // </div>
    );
  }
}
