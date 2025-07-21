(this["webpackJsonpten-ticker"] = this["webpackJsonpten-ticker"] || []).push([
  [0],
  {
    182: function (e, t, n) {},
    206: function (e, t) {},
    254: function (e, t, n) {},
    353: function (e, t) {},
    354: function (e, t) {},
    426: function (e, t, n) {},
    427: function (e, t, n) {
      "use strict";
      n.r(t);
      var a = n(0),
        i = n.n(a),
        o = n(36),
        r = n.n(o),
        c = (n(254), n(26)),
        l = n.n(c),
        s = n(42),
        d = n(20),
        u = n(27),
        h = n(28),
        _ = n(30),
        f = n(29),
        b = n(2),
        j = n(38),
        g = (n(182), n(179)),
        p = n(432),
        O = n(244),
        m = n(54),
        y = n(11),
        v = n.n(y),
        k = n(3),
        w = n(6),
        C = n.n(w),
        x = n(37),
        S = n(431),
        R = n(433),
        Y = n(118),
        D = n(437),
        z = n(438),
        E = n(176),
        T = (n(279), n(1)),
        I = { labelCol: { span: 8 }, wrapperCol: { span: 8 } },
        M = { wrapperCol: { offset: 8, span: 16 } },
        H = (function (e) {
          Object(_.a)(n, e);
          var t = Object(f.a)(n);
          function n() {
            var e;
            Object(u.a)(this, n);
            for (var a = arguments.length, i = new Array(a), o = 0; o < a; o++)
              i[o] = arguments[o];
            return (
              ((e = t.call.apply(t, [this].concat(i))).onFinish = (function () {
                var t = Object(s.a)(
                  l.a.mark(function t(n) {
                    var a;
                    return l.a.wrap(function (t) {
                      for (;;)
                        switch ((t.prev = t.next)) {
                          case 0:
                            a = 0;
                          case 1:
                            if (!(a < e.props.username.length)) {
                              t.next = 21;
                              break;
                            }
                            if (
                              "Off" !== e.props.status[a] ||
                              e.props.username[a] !== n.username
                            ) {
                              t.next = 7;
                              break;
                            }
                            O.a.error({
                              message:
                                "Ng\u01b0\u1eddi d\xf9ng kh\xf4ng kh\u1ea3 d\u1ee5ng",
                            }),
                              (a = e.props.username.length),
                              (t.next = 18);
                            break;
                          case 7:
                            if (e.props.username[a] !== n.username) {
                              t.next = 17;
                              break;
                            }
                            if (e.props.password[a] !== n.password) {
                              t.next = 17;
                              break;
                            }
                            return (
                              (t.next = 11),
                              localStorage.setItem("userInfo", n.username)
                            );
                          case 11:
                            return (t.next = 13), localStorage.setItem("id", a);
                          case 13:
                            return (t.next = 15), e.props.onLoginSuccess(a, n);
                          case 15:
                            return e.props.onRefresh(), t.abrupt("break", 21);
                          case 17:
                            a === e.props.username.length - 1 &&
                              O.a.error({
                                message:
                                  "T\xean \u0111\u0103ng nh\u1eadp ho\u1eb7c m\u1eadt kh\u1ea9u kh\xf4ng \u0111\xfang",
                              });
                          case 18:
                            a++, (t.next = 1);
                            break;
                          case 21:
                          case "end":
                            return t.stop();
                        }
                    }, t);
                  })
                );
                return function (e) {
                  return t.apply(this, arguments);
                };
              })()),
              (e.onFinishFailed = function (e) {
                O.a.error({
                  message: "\u0110\xe3 x\u1ea3y ra l\u1ed7i",
                  description: e,
                });
              }),
              e
            );
          }
          return (
            Object(h.a)(n, [
              {
                key: "render",
                value: function () {
                  return Object(T.jsxs)(E.a, {
                    dark: !1,
                    img: "https://2.bp.blogspot.com/-0-bzxb3VfSA/VjYAz3RPDDI/AAAAAAAACfg/xX4WXg1nKTA/s1600/the-avenger-wallpaper-1920x1080%2B%25287%2529.jpg",
                    blur: 0,
                    style: { height: "100%" },
                    children: [
                      Object(T.jsx)("img", {
                        src: "https://yt3.googleusercontent.com/0cJivFciG1Qi_U52kFapwQF-DwqMo_d68qLhrK8rtuaiDQPFtH-xsC9JT9bnzFaKV0J3mlUylQ=w2120-fcrop64=1,00005a57ffffa5a8-k-c0xffffffff-no-nd-rj",
                        alt: "Logo",
                        width: "100%",
                        height: "100%",
                      }),
                      Object(T.jsx)(E.b, {
                        style: { height: "100%" },
                        children: Object(T.jsxs)(
                          S.a,
                          Object(b.a)(
                            Object(b.a)(
                              { style: { marginTop: 160, marginBottom: 160 } },
                              I
                            ),
                            {},
                            {
                              name: "basic",
                              initialValues: { remember: !0 },
                              onFinish: this.onFinish,
                              onFinishFailed: this.onFinishFailed,
                              children: [
                                Object(T.jsx)(S.a.Item, {
                                  label: Object(T.jsx)(D.a, {
                                    style: { color: "#ffffff" },
                                  }),
                                  name: "username",
                                  rules: [
                                    {
                                      required: !0,
                                      message: "Please input your username!",
                                    },
                                  ],
                                  children: Object(T.jsx)(R.a, {
                                    style: { borderWidth: 0 },
                                    placeholder: "Username",
                                  }),
                                }),
                                Object(T.jsx)(S.a.Item, {
                                  label: Object(T.jsx)(z.a, {
                                    style: { color: "#ffffff" },
                                  }),
                                  name: "password",
                                  rules: [
                                    {
                                      required: !0,
                                      message: "Please input your password!",
                                    },
                                  ],
                                  children: Object(T.jsx)(R.a.Password, {
                                    placeholder: "Password",
                                  }),
                                }),
                                Object(T.jsx)(
                                  S.a.Item,
                                  Object(b.a)(
                                    Object(b.a)({}, M),
                                    {},
                                    {
                                      name: "remember",
                                      valuePropName: "checked",
                                      children: Object(T.jsx)(Y.a, {
                                        style: { color: "#ffffff" },
                                        children: "Remember me",
                                      }),
                                    }
                                  )
                                ),
                                Object(T.jsx)(
                                  S.a.Item,
                                  Object(b.a)(
                                    Object(b.a)({}, M),
                                    {},
                                    {
                                      children: Object(T.jsx)(m.a, {
                                        type: "primary",
                                        htmlType: "submit",
                                        children: "Login",
                                      }),
                                    }
                                  )
                                ),
                              ],
                            }
                          )
                        ),
                      }),
                    ],
                  });
                },
              },
            ]),
            n
          );
        })(a.Component),
        U = n.p + "static/media/download.0217dd18.png",
        K = "http://127.0.0.1:3000/api";
      console.log("apiUrl: ", K);
      var A = n(117),
        V = n(430),
        N = n(436),
        L = n(434),
        F = n(429),
        W = n(43),
        P = n.n(W),
        B = n(156),
        G = n(158),
        J = n(75),
        X = n(245),
        Z = n(439),
        q = n(440),
        Q = n(155),
        $ = n(49),
        ee = n.n($),
        te = n(160),
        ne = n.n(te),
        ae = n(120),
        ie = "MM-YYYY",
        oe = [
          { value: 5, text: "1000 t\u1eeb" },
          { value: 10, text: "2000 t\u1eeb" },
          { value: 15, text: "3000 t\u1eeb" },
          { value: 20, text: "4000 t\u1eeb" },
          { value: 25, text: "5000 t\u1eeb" },
        ],
        re = 0,
        ce = 1,
        le = 2,
        se = 4,
        de = 5,
        ue = 6,
        he = 7,
        _e = 8,
        fe = 9,
        be = 10,
        je = 11,
        ge = 12,
        pe = 14,
        Oe = 33,
        me = 34,
        ye = 35,
        ve = 37,
        ke = 40,
        we = 41,
        Ce = 43,
        xe = 44,
        Se = 45,
        Re = 46,
        Ye = 47,
        De = 48,
        ze = 49,
        Ee = 50,
        Te = 51,
        Ie = 52,
        Me = 53,
        He = 54,
        Ue = 55,
        Ke = 56,
        Ae = 57,
        Ve = 58;
      function Ne(e) {
        var t = ne()(e).format("0,0");
        return (t = t.split(",").join("."));
      }
      var Le = ["TT10000", "TT10001", "TT10003", "TT10004"],
        Fe = function (e, t, n) {
          if (
            (("undefined" !== typeof e &&
              "undefined" !== typeof t &&
              "undefined" !== typeof n) ||
              alert(
                "Ph\u1ea3i nh\u1eadn \u0111\u1ee7 3 tham s\u1ed1: d\u1eef li\u1ec7u, t\xean file, t\xean sheet"
              ),
            "object" === typeof e)
          ) {
            var a = ae.utils.json_to_sheet(e),
              i = ae.utils.book_new();
            ae.utils.book_append_sheet(i, a, Object(k.toString)(n)),
              ae.writeFile(i, t + ".xlsx");
          } else
            alert(
              "D\u1eef li\u1ec7u \u0111\u1ea7u v\xe0o ph\u1ea3i l\xe0 m\u1ed9t array ho\u1eb7c object"
            );
        };
      function We(e) {
        return void 0 !==
          (e = e
            .replace(/(>|<)/gi, "")
            .split(/(vi\/|v=|\/v\/|youtu\.be\/|\/embed\/)/))[2]
          ? e[2].split(/[^0-9a-z_\-]/i)[0]
          : e;
      }
      var Pe = (function () {
          var e = Object(s.a)(
            l.a.mark(function e(t) {
              var n, a, i;
              return l.a.wrap(function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return (
                        (n = We(t)),
                        (a = v.a.create({
                          baseURL:
                            "https://www.googleapis.com/youtube/v3/videos",
                          params: {
                            part: "snippet",
                            key: "AIzaSyD3uGEgJa2Y-PqhcZ_cessU2xVZglG-sWs",
                            id: n,
                          },
                        })),
                        (e.next = 4),
                        a.get("/")
                      );
                    case 4:
                      return (i = e.sent), e.abrupt("return", i);
                    case 6:
                    case "end":
                      return e.stop();
                  }
              }, e);
            })
          );
          return function (t) {
            return e.apply(this, arguments);
          };
        })(),
        Be = A.a.Option,
        Ge = V.a.RangePicker,
        Je = function (e) {
          var t = e.onResize,
            n = e.width,
            a = Object(j.a)(e, ["onResize", "width"]);
          return n
            ? Object(T.jsx)(x.Resizable, {
                width: n,
                height: 0,
                handle: Object(T.jsx)("span", {
                  className: "react-resizable-handle",
                  onClick: function (e) {
                    e.stopPropagation();
                  },
                }),
                onResize: t,
                draggableOpts: { enableUserSelectHack: !1 },
                children: Object(T.jsx)("th", Object(b.a)({}, a)),
              })
            : Object(T.jsx)("th", Object(b.a)({}, a));
        },
        Xe = (function (e) {
          Object(_.a)(n, e);
          var t = Object(f.a)(n);
          function n(e) {
            var a;
            Object(u.a)(this, n),
              ((a = t.call(this, e)).components = { header: { cell: Je } }),
              (a.getColumnSearchProps = function (e) {
                return {
                  filterDropdown: function (t) {
                    var n = t.setSelectedKeys,
                      i = t.selectedKeys,
                      o = t.confirm,
                      r = t.clearFilters;
                    return Object(T.jsxs)("div", {
                      style: { padding: 8 },
                      children: [
                        Object(T.jsx)(R.a, {
                          ref: function (e) {
                            a.searchInput = e;
                          },
                          placeholder: "Tìm kiếm",
                          value: i[0],
                          onChange: function (e) {
                            return n(e.target.value ? [e.target.value] : []);
                          },
                          onPressEnter: function () {
                            return a.handleSearch(i, o, e);
                          },
                          style: { marginBottom: 8, display: "block" },
                        }),
                        Object(T.jsxs)(N.b, {
                          children: [
                            Object(T.jsx)(m.a, {
                              type: "primary",
                              onClick: function () {
                                return a.handleSearch(i, o, e);
                              },
                              icon: Object(T.jsx)(B.a, {}),
                              size: "small",
                              style: { width: 90 },
                              children: "Search",
                            }),
                            Object(T.jsx)(m.a, {
                              onClick: function () {
                                return a.handleReset(r);
                              },
                              size: "small",
                              style: { width: 90 },
                              children: "Reset",
                            }),
                            Object(T.jsx)(m.a, {
                              type: "link",
                              size: "small",
                              onClick: function () {
                                o({ closeDropdown: !1 }),
                                  a.setState({
                                    searchText: i[0],
                                    searchedColumn: e,
                                  });
                              },
                              children: "Filter",
                            }),
                          ],
                        }),
                      ],
                    });
                  },
                  filterIcon: function (e) {
                    return Object(T.jsx)(B.a, {
                      style: { color: e ? "#ffffff" : void 0 },
                    });
                  },
                  filteredValue: null,
                  onFilter: function (t, n) {
                    if (1 === n.id) {
                      var i = Object(k.filter)(
                        a.state.newDataTest,
                        function (n) {
                          return n[e]
                            ? n[e]
                                .toString()
                                .toLowerCase()
                                .includes(t.toLowerCase())
                            : "";
                        }
                      );
                      a.setState({ dataChangeUpdate: i });
                    }
                    return n[e]
                      ? n[e].toString().toLowerCase().includes(t.toLowerCase())
                      : "";
                  },
                  onFilterDropdownVisibleChange: function (e) {
                    e &&
                      setTimeout(function () {
                        return a.searchInput.select();
                      }, 100);
                  },
                  render: function (t) {
                    return a.state.searchedColumn === e
                      ? Object(T.jsx)(P.a, {
                          highlightStyle: {
                            backgroundColor: "#ffc069",
                            padding: 0,
                          },
                          searchWords: [a.state.searchText],
                          autoEscape: !0,
                          textToHighlight: t ? t.toString() : "",
                        })
                      : t;
                  },
                };
              }),
              (a.getColumnFilterTimeProps = function (e) {
                return {
                  filterDropdown: function (e) {
                    var t = e.setSelectedKeys,
                      n = e.selectedKeys,
                      a = e.confirm,
                      i = e.clearFilters;
                    return Object(T.jsxs)("div", {
                      style: { padding: 8 },
                      children: [
                        Object(T.jsx)("div", {
                          children: Object(T.jsx)(Ge, {
                            style: { marginBottom: 8 },
                            value: n[0],
                            onChange: function (e) {
                              t(e ? [e] : []);
                            },
                          }),
                        }),
                        Object(T.jsxs)(N.b, {
                          children: [
                            Object(T.jsx)(m.a, {
                              type: "primary",
                              onClick: function () {
                                a();
                              },
                              icon: Object(T.jsx)(B.a, {}),
                              size: "small",
                              style: { width: 90, marginLeft: 10 },
                              children: "Search",
                            }),
                            Object(T.jsx)(m.a, {
                              onClick: function () {
                                return i();
                              },
                              size: "small",
                              style: { width: 90 },
                              children: "Reset",
                            }),
                          ],
                        }),
                      ],
                    });
                  },
                  filterIcon: function (e) {
                    return Object(T.jsx)(B.a, {
                      style: { color: e ? "#ffffff" : void 0 },
                    });
                  },
                  filteredValue: null,
                  onFilter: function (t, n) {
                    return n[e]
                      ? (C()(n[e]) < C()(t[1]) && C()(n[e]) > C()(t[0])) ||
                          C()(n.public_date).format("DDMMYYY") ===
                            C()(t[0]).format("DDMMYYY") ||
                          C()(n.public_date).format("DDMMYYY") ===
                            C()(t[1]).format("DDMMYYY")
                      : "";
                  },
                  onFilterDropdownVisibleChange: function (e) {},
                  render: function (t) {
                    return a.state.searchedColumn === e
                      ? Object(T.jsx)(P.a, {
                          highlightStyle: {
                            backgroundColor: "#ffc069",
                            padding: 0,
                          },
                          searchWords: [a.state.searchText],
                          autoEscape: !0,
                          textToHighlight: t ? t.toString() : "",
                        })
                      : t;
                  },
                };
              }),
              (a.handleSearch = function (e, t, n) {
                t(), a.setState({ searchText: e[0], searchedColumn: n });
              }),
              (a.handleReset = function (e) {
                e(), a.setState({ searchText: "" });
              }),
              (a._onRefreshData = function () {
                a.setState({ isLoading: !0 }),
                  v.a.get("".concat(K, "/activity")).then(function (e) {
                    a.setState({
                      activity: e.data.data,
                      activityChangeUpdate: e.data.data,
                    });
                  }),
                  v.a.get("".concat(K, "/tenticker")).then(function (e) {
                    var t = Object(k.map)(
                        a.props.listContentCode,
                        function (e, t) {
                          return e.value;
                        }
                      ),
                      n = e.data.data
                        .filter(function (e) {
                          return t.includes(e.content_code) && 1 === e.is_new;
                        })
                        .sort(function (e, t) {
                          return t.id - e.id;
                        }),
                      i = Object(k.map)(n, function (e, t) {
                        return Object(b.a)(
                          Object(b.a)({}, e),
                          {},
                          { stt: t + 1 }
                        );
                      });
                    a.setState({
                      dataSource: i,
                      dataChangeUpdate: i,
                      newDataTest: i,
                      isLoading: !1,
                      chuDeInput: "",
                      editingKey: "",
                      originData: e.data.data,
                      content_code: null,
                      salaryIndex: 10,
                    });
                  });
              }),
              (a.onScrollAddNewContent = function () {
                a.refAddNewContent.current.scrollIntoView({
                  behavior: "smooth",
                });
              }),
              (a._isEditing = function (e) {
                return e.id === a.state.editingKey;
              }),
              (a.onChangeLinkContent = function (e, t) {
                var n = Object(k.map)(a.state.dataChangeUpdate, function (n) {
                  return n.id === t.id
                    ? Object(b.a)(Object(b.a)({}, n), {}, { content_raw: e })
                    : Object(b.a)({}, n);
                });
                a.setState({ dataChangeUpdate: n });
              }),
              (a.onChangeLinkContentFinal = function (e, t) {
                var n = Object(k.map)(a.state.dataChangeUpdate, function (n) {
                  return n.id === t.id
                    ? Object(b.a)(Object(b.a)({}, n), {}, { content_final: e })
                    : Object(b.a)({}, n);
                });
                a.setState({ dataChangeUpdate: n });
              }),
              (a.onChangeDatePublic = function (e, t) {
                var n = Object(k.map)(a.state.dataChangeUpdate, function (n) {
                  return n.id === t.id
                    ? Object(b.a)(Object(b.a)({}, n), {}, { public_date: e })
                    : Object(b.a)({}, n);
                });
                a.setState({ dataChangeUpdate: n });
              }),
              (a.onChangeLinkAudio = function (e, t) {
                var n = Object(k.map)(a.state.dataChangeUpdate, function (n) {
                  return n.id === t.id
                    ? Object(b.a)(Object(b.a)({}, n), {}, { link_audio: e })
                    : Object(b.a)({}, n);
                });
                a.setState({ dataChangeUpdate: n });
              }),
              (a.onChangeLinkYoutube = function (e, t) {
                var n = Object(k.map)(a.state.dataChangeUpdate, function (n) {
                  return n.id === t.id
                    ? Object(b.a)(Object(b.a)({}, n), {}, { link_youtube: e })
                    : Object(b.a)({}, n);
                });
                a.setState({ dataChangeUpdate: n });
              }),
              (a.onChangeLinkVideo = function (e, t) {
                var n = Object(k.map)(a.state.dataChangeUpdate, function (n) {
                  return n.id === t.id
                    ? Object(b.a)(Object(b.a)({}, n), {}, { link_video: e })
                    : Object(b.a)({}, n);
                });
                a.setState({ dataChangeUpdate: n });
              }),
              (a.onChangeFootage = function (e, t) {
                var n = Object(k.map)(a.state.dataChangeUpdate, function (n) {
                  return n.id === t.id
                    ? Object(b.a)(Object(b.a)({}, n), {}, { footage: e })
                    : Object(b.a)({}, n);
                });
                a.setState({ dataChangeUpdate: n });
              }),
              (a.onChangeLinkContentNote = function (e, t) {
                var n = Object(k.map)(a.state.dataChangeUpdate, function (n) {
                  return n.id === t.id
                    ? Object(b.a)(Object(b.a)({}, n), {}, { content_note: e })
                    : Object(b.a)({}, n);
                });
                a.setState({ dataChangeUpdate: n });
              }),
              (a.onChangeLinkAudioNote = function (e, t) {
                var n = Object(k.map)(a.state.dataChangeUpdate, function (n) {
                  return n.id === t.id
                    ? Object(b.a)(Object(b.a)({}, n), {}, { audio_note: e })
                    : Object(b.a)({}, n);
                });
                a.setState({ dataChangeUpdate: n });
              }),
              (a.onChangeLinkVideoNote = function (e, t) {
                var n = Object(k.map)(a.state.dataChangeUpdate, function (n) {
                  return n.id === t.id
                    ? Object(b.a)(Object(b.a)({}, n), {}, { video_note: e })
                    : Object(b.a)({}, n);
                });
                a.setState({ dataChangeUpdate: n });
              }),
              (a.onChangeChuDe = function (e, t) {
                var n = Object(k.map)(a.state.dataChangeUpdate, function (n) {
                  return n.id === t.id
                    ? Object(b.a)(Object(b.a)({}, n), {}, { full_title: e })
                    : Object(b.a)({}, n);
                });
                a.setState({ dataChangeUpdate: n });
              }),
              (a.onChangeSelect = function (e, t) {
                var n = Object(k.map)(a.state.dataChangeUpdate, function (n) {
                  return n.id === t.id
                    ? Object(b.a)(
                        Object(b.a)({}, n),
                        {},
                        {
                          writer_name: e[0],
                          writer_code: e[1],
                          writer_nick: e[2],
                        }
                      )
                    : Object(b.a)({}, n);
                });
                a.setState({ dataChangeUpdate: n });
              }),
              (a.onChangeSelectContentCode = function (e, t) {
                var n = Object(k.map)(a.state.dataChangeUpdate, function (n) {
                  return n.id === t.id
                    ? Object(b.a)(Object(b.a)({}, n), {}, { content_code: e })
                    : Object(b.a)({}, n);
                });
                a.setState({ dataChangeUpdate: n });
              }),
              (a.onChangeSelectSalaryIndex = function (e, t) {
                var n = Object(k.map)(a.state.dataChangeUpdate, function (n) {
                  return n.id === t.id
                    ? Object(b.a)(Object(b.a)({}, n), {}, { salary_index: e })
                    : Object(b.a)({}, n);
                });
                a.setState({ dataChangeUpdate: n });
              }),
              (a.onChangeSelectAddSalaryIndex = function (e) {
                a.setState({ salary_index: e });
              }),
              (a.onChangeSelectAddContentCode = function (e) {
                a.setState({ content_code: e });
              }),
              (a.onChangeSelectComposerName = function (e, t) {
                var n = Object(k.map)(a.state.dataChangeUpdate, function (n) {
                  return n.id === t.id
                    ? Object(b.a)(
                        Object(b.a)({}, n),
                        {},
                        {
                          composer_name: e[0],
                          composer_code: e[1],
                          composer_nick: e[2],
                        }
                      )
                    : Object(b.a)({}, n);
                });
                a.setState({ dataChangeUpdate: n });
              }),
              (a.onChangeSelectEditorName = function (e, t) {
                var n = Object(k.map)(a.state.dataChangeUpdate, function (n) {
                  return n.id === t.id
                    ? Object(b.a)(
                        Object(b.a)({}, n),
                        {},
                        { editor_name: e[0], editor_code: e[1] }
                      )
                    : Object(b.a)({}, n);
                });
                a.setState({ dataChangeUpdate: n });
              }),
              (a.onDuyetCW = function (e) {
                var t = Object(k.map)(a.state.dataChangeUpdate, function (t) {
                  return t.id === e.id
                    ? Object(b.a)(
                        Object(b.a)({}, t),
                        {},
                        { content_status: 0 === e.content_status ? 1 : 0 }
                      )
                    : Object(b.a)({}, t);
                });
                a.setState({ dataChangeUpdate: t });
              }),
              (a.onDuyetAC = function (e) {
                var t = Object(k.map)(a.state.dataChangeUpdate, function (t) {
                  return t.id === e.id
                    ? Object(b.a)(
                        Object(b.a)({}, t),
                        {},
                        { audio_status: 0 === e.audio_status ? 1 : 0 }
                      )
                    : Object(b.a)({}, t);
                });
                a.setState({ dataChangeUpdate: t });
              }),
              (a.onDuyetVE = function (e) {
                var t = Object(k.map)(a.state.dataChangeUpdate, function (t) {
                  return t.id === e.id
                    ? Object(b.a)(
                        Object(b.a)({}, t),
                        {},
                        { video_status: 0 === e.video_status ? 1 : 0 }
                      )
                    : Object(b.a)({}, t);
                });
                a.setState({ dataChangeUpdate: t });
              }),
              (a.onSubmitUpdate = (function () {
                var e = Object(s.a)(
                  l.a.mark(function e(t) {
                    var n, i, o;
                    return l.a.wrap(function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            if (Object(k.isEmpty)(t.link_youtube)) {
                              e.next = 6;
                              break;
                            }
                            return (
                              (e.next = 3), Pe(Object(k.get)(t, "link_youtube"))
                            );
                          case 3:
                            (e.t0 = e.sent), (e.next = 7);
                            break;
                          case 6:
                            e.t0 = null;
                          case 7:
                            (n = e.t0),
                              (i = Object(k.get)(
                                n,
                                "data.items[0].snippet.publishedAt"
                              )),
                              (o = {
                                data_id: t.id,
                                data: [
                                  t.id,
                                  t.content_code,
                                  t.writer_code,
                                  t.full_title,
                                  t.content_raw,
                                  t.writer_name,
                                  t.content_status,
                                  t.content_final,
                                  t.content_note,
                                  1 !== t.is_first_content_final ||
                                  Object(k.isEmpty)(t.content_final)
                                    ? null === t.content_date
                                      ? null
                                      : C()(t.content_date).format(
                                          "YYYY-MM-DD HH:mm:ss"
                                        )
                                    : C()().format("YYYY-MM-DD HH:mm:ss"),
                                  t.composer_code,
                                  t.composer_name,
                                  1 !== t.is_first_audio ||
                                  Object(k.isEmpty)(t.link_audio)
                                    ? null === t.audio_date
                                      ? null
                                      : C()(t.audio_date).format(
                                          "YYYY-MM-DD HH:mm:ss"
                                        )
                                    : C()().format("YYYY-MM-DD HH:mm:ss"),
                                  t.link_audio,
                                  t.audio_status,
                                  t.audio_note,
                                  t.writer_nick,
                                  t.composer_nick,
                                  t.editor_name,
                                  1 !== t.is_first_video ||
                                  Object(k.isEmpty)(t.link_video)
                                    ? null === t.video_date
                                      ? null
                                      : C()(t.video_date).format(
                                          "YYYY-MM-DD HH:mm:ss"
                                        )
                                    : C()().format("YYYY-MM-DD HH:mm:ss"),
                                  t.footage,
                                  t.editor_code,
                                  t.link_video,
                                  t.video_status,
                                  t.video_note,
                                  t.link_youtube,
                                  Object(k.isEmpty)(t.link_youtube)
                                    ? null
                                    : C()(i).format("YYYY-MM-DD HH:mm:ss"),
                                  Object(k.isEmpty)(t.link_youtube) ||
                                  1 !== t.is_first_public
                                    ? 1
                                    : 0,
                                  (!Object(k.isEmpty)(t.content_final) &&
                                    1 === t.is_first_content_final) ||
                                  0 === t.is_first_content_final
                                    ? 0
                                    : 1,
                                  (!Object(k.isEmpty)(t.link_audio) &&
                                    1 === t.is_first_audio) ||
                                  0 === t.is_first_audio
                                    ? 0
                                    : 1,
                                  (!Object(k.isEmpty)(t.link_video) &&
                                    1 === t.is_first_video) ||
                                  0 === t.is_first_video
                                    ? 0
                                    : 1,
                                  t.composer_name !==
                                  a.state.dataSource[t.stt - 1].composer_name
                                    ? C()().format("YYYY-MM-DD HH:mm:ss")
                                    : null === t.add_composer_date
                                    ? null
                                    : C()(t.add_composer_date).format(
                                        "YYYY-MM-DD HH:mm:ss"
                                      ),
                                  t.editor_name !==
                                  a.state.dataSource[t.stt - 1].editor_name
                                    ? C()().format("YYYY-MM-DD HH:mm:ss")
                                    : null === t.add_ve_date
                                    ? null
                                    : C()(t.add_ve_date).format(
                                        "YYYY-MM-DD HH:mm:ss"
                                      ),
                                  t.content_status !==
                                  a.state.dataSource[t.stt - 1].content_status
                                    ? C()().format("YYYY-MM-DD HH:mm:ss")
                                    : null === t.confirm_content_date
                                    ? null
                                    : C()(t.confirm_content_date).format(
                                        "YYYY-MM-DD HH:mm:ss"
                                      ),
                                  t.audio_status !==
                                  a.state.dataSource[t.stt - 1].audio_status
                                    ? C()().format("YYYY-MM-DD HH:mm:ss")
                                    : null === t.confirm_audio_date
                                    ? null
                                    : C()(t.confirm_audio_date).format(
                                        "YYYY-MM-DD HH:mm:ss"
                                      ),
                                  t.salary_index,
                                  1,
                                ],
                              }),
                              v.a
                                .put("".concat(K, "/tenticker"), o)
                                .then(function (e) {
                                  if (
                                    (O.a.success({
                                      message:
                                        "C\u1eadp nh\u1eadt th\xe0nh c\xf4ng",
                                      style: { backgroundColor: "#f5fff8" },
                                    }),
                                    t.content_code !==
                                      a.state.dataSource[t.stt - 1]
                                        .content_code)
                                  ) {
                                    var n =
                                      "Thay \u0111\u1ed5i Content Code c\u1ee7a ch\u1ee7 \u0111\u1ec1 "
                                        .concat(
                                          a.state.dataSource[t.stt - 1]
                                            .full_title,
                                          " t\u1eeb "
                                        )
                                        .concat(
                                          a.state.dataSource[t.stt - 1]
                                            .content_code,
                                          " th\xe0nh "
                                        )
                                        .concat(t.content_code);
                                    a.onUpdateActivity(n);
                                  }
                                  if (
                                    t.full_title !==
                                    a.state.dataSource[t.stt - 1].full_title
                                  ) {
                                    var i =
                                      "Thay \u0111\u1ed5i Full Title c\u1ee7a ch\u1ee7 \u0111\u1ec1 "
                                        .concat(
                                          a.state.dataSource[t.stt - 1]
                                            .full_title,
                                          " t\u1eeb "
                                        )
                                        .concat(
                                          a.state.dataSource[t.stt - 1]
                                            .full_title,
                                          " th\xe0nh "
                                        )
                                        .concat(t.full_title);
                                    a.onUpdateActivity(i);
                                  }
                                  if (
                                    t.content_raw !==
                                    a.state.dataSource[t.stt - 1].content_raw
                                  ) {
                                    var o =
                                      "Thay \u0111\u1ed5i Content Raw c\u1ee7a ch\u1ee7 \u0111\u1ec1 "
                                        .concat(
                                          a.state.dataSource[t.stt - 1]
                                            .full_title,
                                          " t\u1eeb "
                                        )
                                        .concat(
                                          a.state.dataSource[t.stt - 1]
                                            .content_raw,
                                          " th\xe0nh "
                                        )
                                        .concat(t.content_raw);
                                    a.onUpdateActivity(o);
                                  }
                                  if (
                                    t.writer_name !==
                                    a.state.dataSource[t.stt - 1].writer_name
                                  ) {
                                    var r =
                                      "Thay \u0111\u1ed5i Writer Name c\u1ee7a ch\u1ee7 \u0111\u1ec1 "
                                        .concat(
                                          a.state.dataSource[t.stt - 1]
                                            .full_title,
                                          " t\u1eeb "
                                        )
                                        .concat(
                                          a.state.dataSource[t.stt - 1]
                                            .writer_name,
                                          " th\xe0nh "
                                        )
                                        .concat(t.writer_name);
                                    a.onUpdateActivity(r);
                                  }
                                  if (
                                    t.content_status !==
                                    a.state.dataSource[t.stt - 1].content_status
                                  ) {
                                    var c =
                                      "Thay \u0111\u1ed5i Content Status c\u1ee7a ch\u1ee7 \u0111\u1ec1 "
                                        .concat(
                                          a.state.dataSource[t.stt - 1]
                                            .full_title,
                                          " t\u1eeb "
                                        )
                                        .concat(
                                          0 ===
                                            a.state.dataSource[t.stt - 1]
                                              .content_status
                                            ? "Ch\u01b0a duy\u1ec7t"
                                            : "\u0110\xe3 duy\u1ec7t",
                                          " th\xe0nh "
                                        )
                                        .concat(
                                          0 === t.content_status
                                            ? "Ch\u01b0a duy\u1ec7t"
                                            : "\u0110\xe3 duy\u1ec7t"
                                        );
                                    a.onUpdateActivity(c);
                                  }
                                  if (
                                    t.content_final !==
                                    a.state.dataSource[t.stt - 1].content_final
                                  ) {
                                    var l =
                                      "Thay \u0111\u1ed5i Content Final c\u1ee7a ch\u1ee7 \u0111\u1ec1 "
                                        .concat(
                                          a.state.dataSource[t.stt - 1]
                                            .full_title,
                                          " t\u1eeb "
                                        )
                                        .concat(
                                          a.state.dataSource[t.stt - 1]
                                            .content_final,
                                          " th\xe0nh "
                                        )
                                        .concat(t.content_final);
                                    a.onUpdateActivity(l);
                                  }
                                  if (
                                    t.content_note !==
                                    a.state.dataSource[t.stt - 1].content_note
                                  ) {
                                    var s =
                                      "Thay \u0111\u1ed5i Mô tả youtube c\u1ee7a ch\u1ee7 \u0111\u1ec1 "
                                        .concat(
                                          a.state.dataSource[t.stt - 1]
                                            .full_title,
                                          " t\u1eeb "
                                        )
                                        .concat(
                                          a.state.dataSource[t.stt - 1]
                                            .content_note,
                                          " th\xe0nh "
                                        )
                                        .concat(t.content_note);
                                    a.onUpdateActivity(s);
                                  }
                                  if (
                                    t.composer_name !==
                                    a.state.dataSource[t.stt - 1].composer_name
                                  ) {
                                    var d =
                                      "Thay \u0111\u1ed5i Composer Name c\u1ee7a ch\u1ee7 \u0111\u1ec1 "
                                        .concat(
                                          a.state.dataSource[t.stt - 1]
                                            .full_title,
                                          " t\u1eeb "
                                        )
                                        .concat(
                                          a.state.dataSource[t.stt - 1]
                                            .composer_name,
                                          " th\xe0nh "
                                        )
                                        .concat(t.composer_name);
                                    a.onUpdateActivity(d);
                                  }
                                  if (
                                    t.link_audio !==
                                    a.state.dataSource[t.stt - 1].link_audio
                                  ) {
                                    var u =
                                      "Thay \u0111\u1ed5i Link Audio c\u1ee7a ch\u1ee7 \u0111\u1ec1 "
                                        .concat(
                                          a.state.dataSource[t.stt - 1]
                                            .full_title,
                                          " t\u1eeb "
                                        )
                                        .concat(
                                          a.state.dataSource[t.stt - 1]
                                            .link_audio,
                                          " th\xe0nh "
                                        )
                                        .concat(t.link_audio);
                                    a.onUpdateActivity(u);
                                  }
                                  if (
                                    t.audio_status !==
                                    a.state.dataSource[t.stt - 1].audio_status
                                  ) {
                                    var h =
                                      "Thay \u0111\u1ed5i Audio Status c\u1ee7a ch\u1ee7 \u0111\u1ec1 "
                                        .concat(
                                          a.state.dataSource[t.stt - 1]
                                            .full_title,
                                          " t\u1eeb "
                                        )
                                        .concat(
                                          0 ===
                                            a.state.dataSource[t.stt - 1]
                                              .audio_status
                                            ? "Ch\u01b0a duy\u1ec7t"
                                            : "\u0110\xe3 duy\u1ec7t",
                                          " th\xe0nh "
                                        )
                                        .concat(
                                          0 === t.audio_status
                                            ? "Ch\u01b0a duy\u1ec7t"
                                            : "\u0110\xe3 duy\u1ec7t"
                                        );
                                    a.onUpdateActivity(h);
                                  }
                                  if (
                                    t.audio_note !==
                                    a.state.dataSource[t.stt - 1].audio_note
                                  ) {
                                    var _ =
                                      "Thay \u0111\u1ed5i Từ khoá c\u1ee7a ch\u1ee7 \u0111\u1ec1 "
                                        .concat(
                                          a.state.dataSource[t.stt - 1]
                                            .full_title,
                                          " t\u1eeb "
                                        )
                                        .concat(
                                          a.state.dataSource[t.stt - 1]
                                            .audio_note,
                                          " th\xe0nh "
                                        )
                                        .concat(t.audio_note);
                                    a.onUpdateActivity(_);
                                  }
                                  if (
                                    t.editor_name !==
                                    a.state.dataSource[t.stt - 1].editor_name
                                  ) {
                                    var f =
                                      "Thay \u0111\u1ed5i Editor Name c\u1ee7a ch\u1ee7 \u0111\u1ec1 "
                                        .concat(
                                          a.state.dataSource[t.stt - 1]
                                            .full_title,
                                          " t\u1eeb "
                                        )
                                        .concat(
                                          a.state.dataSource[t.stt - 1]
                                            .editor_name,
                                          " th\xe0nh "
                                        )
                                        .concat(t.editor_name);
                                    a.onUpdateActivity(f);
                                  }
                                  if (
                                    t.footage !==
                                    a.state.dataSource[t.stt - 1].footage
                                  ) {
                                    var b =
                                      "Thay \u0111\u1ed5i Footage c\u1ee7a ch\u1ee7 \u0111\u1ec1 "
                                        .concat(
                                          a.state.dataSource[t.stt - 1]
                                            .full_title,
                                          " t\u1eeb "
                                        )
                                        .concat(
                                          a.state.dataSource[t.stt - 1].footage,
                                          " th\xe0nh "
                                        )
                                        .concat(t.footage);
                                    a.onUpdateActivity(b);
                                  }
                                  if (
                                    t.link_video !==
                                    a.state.dataSource[t.stt - 1].link_video
                                  ) {
                                    var j =
                                      "Thay \u0111\u1ed5i Link Video c\u1ee7a ch\u1ee7 \u0111\u1ec1 "
                                        .concat(
                                          a.state.dataSource[t.stt - 1]
                                            .full_title,
                                          " t\u1eeb "
                                        )
                                        .concat(
                                          a.state.dataSource[t.stt - 1]
                                            .link_video,
                                          " th\xe0nh "
                                        )
                                        .concat(t.link_video);
                                    a.onUpdateActivity(j);
                                  }
                                  if (
                                    t.video_status !==
                                    a.state.dataSource[t.stt - 1].video_status
                                  ) {
                                    var g =
                                      "Thay \u0111\u1ed5i Video Status c\u1ee7a ch\u1ee7 \u0111\u1ec1 "
                                        .concat(
                                          a.state.dataSource[t.stt - 1]
                                            .full_title,
                                          " t\u1eeb "
                                        )
                                        .concat(
                                          0 ===
                                            a.state.dataSource[t.stt - 1]
                                              .video_status
                                            ? "Ch\u01b0a duy\u1ec7t"
                                            : "\u0110\xe3 duy\u1ec7t",
                                          " th\xe0nh "
                                        )
                                        .concat(
                                          0 === t.video_status
                                            ? "Ch\u01b0a duy\u1ec7t"
                                            : "\u0110\xe3 duy\u1ec7t"
                                        );
                                    a.onUpdateActivity(g);
                                  }
                                  if (
                                    t.video_note !==
                                    a.state.dataSource[t.stt - 1].video_note
                                  ) {
                                    var p =
                                      "Thay \u0111\u1ed5i Ảnh thumbnail c\u1ee7a ch\u1ee7 \u0111\u1ec1 "
                                        .concat(
                                          a.state.dataSource[t.stt - 1]
                                            .full_title,
                                          " t\u1eeb "
                                        )
                                        .concat(
                                          a.state.dataSource[t.stt - 1]
                                            .video_note,
                                          " th\xe0nh "
                                        )
                                        .concat(t.video_note);
                                    a.onUpdateActivity(p);
                                  }
                                  if (
                                    t.link_youtube !==
                                    a.state.dataSource[t.stt - 1].link_youtube
                                  ) {
                                    var m =
                                      "Thay \u0111\u1ed5i Link Youtube c\u1ee7a ch\u1ee7 \u0111\u1ec1 "
                                        .concat(
                                          a.state.dataSource[t.stt - 1]
                                            .full_title,
                                          " t\u1eeb "
                                        )
                                        .concat(
                                          a.state.dataSource[t.stt - 1]
                                            .link_youtube,
                                          " th\xe0nh "
                                        )
                                        .concat(t.link_youtube);
                                    a.onUpdateActivity(m);
                                  }
                                  if (
                                    t.public_date !==
                                    a.state.dataSource[t.stt - 1].public_date
                                  ) {
                                    var y =
                                      "Thay \u0111\u1ed5i Public Date c\u1ee7a ch\u1ee7 \u0111\u1ec1 "
                                        .concat(
                                          a.state.dataSource[t.stt - 1]
                                            .full_title,
                                          " t\u1eeb "
                                        )
                                        .concat(
                                          a.state.dataSource[t.stt - 1]
                                            .public_date,
                                          " th\xe0nh "
                                        )
                                        .concat(t.public_date);
                                    a.onUpdateActivity(y);
                                  }
                                  if (
                                    t.salary_index !==
                                    a.state.dataSource[t.stt - 1].salary_index
                                  ) {
                                    var v =
                                      "Thay \u0111\u1ed5i Salary Index c\u1ee7a ch\u1ee7 \u0111\u1ec1 "
                                        .concat(
                                          a.state.dataSource[t.stt - 1]
                                            .full_title,
                                          " t\u1eeb "
                                        )
                                        .concat(
                                          a.state.dataSource[t.stt - 1]
                                            .salary_index,
                                          " th\xe0nh "
                                        )
                                        .concat(t.salary_index);
                                    a.onUpdateActivity(v);
                                  }
                                  a._onRefreshData();
                                }),
                              a.setState({ editingKey: "" });
                          case 12:
                          case "end":
                            return e.stop();
                        }
                    }, e);
                  })
                );
                return function (t) {
                  return e.apply(this, arguments);
                };
              })()),
              (a.onCancelEdit = function (e) {
                var t = Object(k.map)(
                  a.state.dataChangeUpdate,
                  function (t, n) {
                    return t.id === e.id
                      ? Object(b.a)({}, a.state.dataSource[n])
                      : Object(b.a)({}, t);
                  }
                );
                a.setState({ editingKey: "", dataChangeUpdate: t });
              }),
              (a.onDelete = function (e) {
                ee()({
                  title: "Th\xf4ng b\xe1o",
                  content: "B\u1ea1n c\xf3 ch\u1eafc mu\u1ed1n xo\xe1",
                  okCancel: function () {},
                  onOk: function () {
                    var t = { data: { data_id: [e.id] } };
                    v.a
                      .delete("".concat(K, "/tenticker"), t)
                      .then(function (t) {
                        O.a.success({
                          message: "Xo\xe1 th\xe0nh c\xf4ng",
                          style: { backgroundColor: "#f5fff8" },
                        });
                        var n =
                          "Xo\xe1 d\xf2ng c\xf3 ch\u1ee7 \u0111\u1ec1 l\xe0 ".concat(
                            a.state.dataSource[e.stt - 1].full_title
                          );
                        a.onUpdateActivity(n), a._onRefreshData();
                      });
                  },
                });
              }),
              (a._onChangeEditingKey = function (e) {
                var t = Object(k.map)(
                  a.state.dataChangeUpdate,
                  function (e, t) {
                    return e.id === a.state.id
                      ? Object(b.a)({}, a.state.dataSource[t])
                      : Object(b.a)({}, e);
                  }
                );
                a.setState({ editingKey: e.id, dataChangeUpdate: t });
              }),
              (a.handleResize = function (e) {
                return function (t, n) {
                  var i = n.size;
                  a.setState(function (t) {
                    var n = t.column,
                      a = Object(d.a)(n);
                    return (
                      (a[e] = Object(b.a)(
                        Object(b.a)({}, a[e]),
                        {},
                        { width: i.width }
                      )),
                      { column: a }
                    );
                  });
                };
              }),
              (a._onCloseModal = function () {
                a.setState({
                  isShowModal: !1,
                  chuDeInput: "",
                  content_code: null,
                });
              }),
              (a.onConfirmDuyet = function () {
                Object(k.isEmpty)(a.state.chuDeInput)
                  ? O.a.warning({
                      message: "Th\xf4ng b\xe1o",
                      description: "Ch\u01b0a nh\u1eadp content title!",
                    })
                  : Object(k.isEmpty)(a.state.content_code)
                  ? O.a.warning({
                      message: "Th\xf4ng b\xe1o",
                      description: "Ch\u01b0a ch\u1ecdn content code!",
                    })
                  : null === a.state.salary_index
                  ? O.a.warning({
                      message: "Th\xf4ng b\xe1o",
                      description: "Ch\u01b0a ch\u1ecdn length script!",
                    })
                  : (a.addTitle(), a.setState({ isShowModal: !1 }));
              }),
              (a._handleSearch = function (e) {
                var t = a.state.dataSource.filter(function (t) {
                  var n = t.full_title;
                  return (
                    (n = n.toLowerCase()),
                    (e.target.value = e.target.value.toLowerCase()),
                    n.includes(e.target.value)
                  );
                });
                a.setState({
                  dataChangeUpdate: t,
                  searchTextMain: e.target.value,
                });
              }),
              (a.handleChange = function (e, t, n) {
                var i = Object(k.filter)(a.state.newDataTest, function (e) {
                  return (
                    (t.content_code
                      ? Object(k.includes)(t.content_code, e.content_code)
                      : e) &&
                    (t.audio_status
                      ? Object(k.includes)(t.audio_status, e.audio_status)
                      : e) &&
                    (t.composer_name
                      ? Object(k.includes)(t.composer_name, e.composer_name)
                      : e) &&
                    (t.content_status
                      ? Object(k.includes)(t.content_status, e.content_status)
                      : e) &&
                    (t.editor_name
                      ? Object(k.includes)(t.editor_name, e.editor_name)
                      : e) &&
                    (t.full_title
                      ? Object(k.includes)(t.full_title, e.full_title)
                      : e) &&
                    (t.salary_index
                      ? Object(k.includes)(t.salary_index, e.salary_index)
                      : e) &&
                    (t.video_status
                      ? Object(k.includes)(t.video_status, e.video_status)
                      : e) &&
                    (t.writer_name
                      ? Object(k.includes)(t.writer_name, e.writer_name)
                      : e) &&
                    (t.public_date
                      ? (C()(e.public_date) <
                          C()(Object(k.get)(t, "public_date[0][1]")) &&
                          C()(e.public_date) >
                            C()(Object(k.get)(t, "public_date[0][0]"))) ||
                        C()(e.public_date).format("DDMMYYY") ===
                          C()(Object(k.get)(t, "public_date[0][0]")).format(
                            "DDMMYYY"
                          ) ||
                        C()(e.public_date).format("DDMMYYY") ===
                          C()(Object(k.get)(t, "public_date[0][1]")).format(
                            "DDMMYYY"
                          )
                      : e)
                  );
                });
                (t.content_code ||
                  t.audio_status ||
                  t.composer_name ||
                  t.content_status ||
                  t.editor_name ||
                  t.full_title ||
                  t.public_date ||
                  t.salary_index ||
                  t.video_status ||
                  t.writer_name) &&
                  a.setState({ dataChangeUpdate: i }),
                  a.setState({ filteredInfo: t, sortedInfo: n }, function () {
                    var e = Object(k.map)(a.state.column, function (e, t) {
                      return 1 === t
                        ? Object(b.a)(
                            Object(b.a)({}, e),
                            {},
                            { filteredValue: a.state.filteredInfo.content_code }
                          )
                        : Object(b.a)({}, e);
                    });
                    a.setState({ column: e });
                  });
              }),
              (a.clearFilters = function () {
                a.setState({ filteredInfo: null });
              }),
              (a.clearSorters = function () {
                a.setState({ sortedInfo: null });
              }),
              (a.clearAll = function () {
                a.setState({
                  filteredInfo: null,
                  sortedInfo: null,
                  searchTextMain: "",
                  dataChangeUpdate: a.state.dataSource,
                });
              }),
              (a.onUpdateActivity = function (e) {
                v.a.get("".concat(K, "/activity")).then(function (t) {
                  var n = {
                    data: [
                      null,
                      C()().format("YYYY-MM-DD HH:mm:ss"),
                      e,
                      a.props.data[a.props.id + 1][me],
                    ],
                  };
                  v.a.post("".concat(K, "/activity/add"), n).then(function (e) {
                    v.a.get("".concat(K, "/activity")).then(function (e) {
                      a.setState({
                        activity: e.data.data,
                        activityChangeUpdate: e.data.data,
                      });
                    });
                  }),
                    a.setState({
                      activity: t.data.data,
                      activityChangeUpdate: t.data.data,
                    });
                });
              }),
              (a.onExcel = function () {
                ee()({
                  title: "Th\xf4ng b\xe1o",
                  content:
                    "B\u1ea1n c\xf3 ch\u1eafc mu\u1ed1n xu\u1ea5t file Excel",
                  okCancel: function () {},
                  onOk: function () {
                    a.onExportExcell();
                  },
                });
              }),
              (a.onExportExcell = function () {
                var e = Object(k.map)(
                    a.state.dataChangeUpdate,
                    function (e, t) {
                      return {
                        STT: e.id,
                        "Content Code": e.content_code,
                        "Length Script": e.salary_index,
                        "Full Title": e.full_title,
                        "Content Raw": e.content_raw,
                        "Writer Name": e.writer_name,
                        "Content Status": e.content_status,
                        "Content Final": e.content_final,
                        "Mô tả youtube": e.content_note,
                        "Content Final Date": e.content_date,
                        "Composer Name": e.composer_name,
                        "Audio Date": e.audio_date,
                        "Link Audio": e.link_audio,
                        "Audio Status": e.audio_status,
                        "Từ khoá": e.audio_note,
                        "Writer Nick": e.writer_nick,
                        "Composer Nick": e.composer_nick,
                        "Editor Name": e.editor_name,
                        Footage: e.footage,
                        "Video Date": e.video_date,
                        "Link Video": e.link_video,
                        "Video Status": e.video_status,
                        "Ảnh thumbnail": e.video_note,
                        "Link Youtube": e.link_youtube,
                        "Public Date": e.public_date,
                      };
                    }
                  ),
                  t = "DATA_TENTICKER".concat(C()().format("YYYYMMDD"));
                Fe(e, t, t);
              });
            for (
              var o = e.data,
                r = e.listContentCode,
                c = [],
                h = [],
                _ = [],
                f = 0;
              f < o.length;
              f++
            )
              1 == o[f][_e] &&
                c.push({ value: o[f][me], text: o[f][me], nick: o[f][ye] }),
                1 == o[f][be] &&
                  h.push({ value: o[f][me], text: o[f][me], nick: o[f][ye] }),
                1 == o[f][ge] && _.push({ value: o[f][me], text: o[f][me] });
            return (
              (a.state = {
                chuDeInput: "",
                dataSource: [],
                dataChangeUpdate: [],
                newDataTest: [],
                editingKey: "",
                listWriterName: c,
                listComposerName: h,
                listEditorName: _,
                isShowModal: !1,
                searchTextMain: "",
                filteredInfo: null,
                sortedInfo: null,
                isLoading: !1,
                activityChangeUpdate: [],
                activity: [],
                listContentCode: r,
                content_code: null,
                originData: [],
                salary_index: null,
                column: [
                  {
                    title: "STT",
                    dataIndex: "id",
                    key: "id",
                    width: 70,
                    fixed: "left",
                    defaultSortOrder: "ascend",
                    sorter: function (e, t) {
                      return e.stt - t.stt;
                    },
                    render: function (e, t) {
                      return {
                        props: {
                          style: { background: t.stt % 2 === 0 && "#fbfbfb" },
                        },
                        children: Object(T.jsx)("div", { children: e }),
                      };
                    },
                  },
                  {
                    title: "Content Code",
                    dataIndex: "content_code",
                    key: "content_code",
                    fixed: "left",
                    filteredValue: null,
                    filters: r,
                    onFilter: function (e, t) {
                      return 0 === t.content_code.indexOf(e);
                    },
                    sorter: function (e, t) {
                      return e.content_code.length - t.content_code.length;
                    },
                    ellipsis: { showTitle: !1 },
                    width: 160,
                    render: function (e, t) {
                      var n = a._isEditing(t);
                      return {
                        props: {
                          style: { background: t.stt % 2 === 0 && "#fbfbfb" },
                        },
                        children: n
                          ? Object(T.jsx)(A.a, {
                              disabled: !n,
                              style: { width: "100%" },
                              value: t.content_code,
                              onChange: function (e) {
                                return a.onChangeSelectContentCode(e, t);
                              },
                              children: Object(k.map)(r, function (e, t) {
                                return Object(T.jsx)(
                                  Be,
                                  {
                                    className: "erpOption",
                                    value: e.text,
                                    children: e.text,
                                  },
                                  t
                                );
                              }),
                            })
                          : Object(T.jsx)("div", { children: t.content_code }),
                      };
                    },
                  },
                  {
                    title: "Length Script",
                    dataIndex: "salary_index",
                    key: "salary_index",
                    filteredValue: null,
                    fixed: "left",
                    filters: oe,
                    onFilter: function (e, t) {
                      return t.salary_index === e;
                    },
                    sorter: function (e, t) {
                      return e.salary_index - t.salary_index;
                    },
                    ellipsis: { showTitle: !1 },
                    width: 160,
                    render: function (e, t) {
                      var n = a._isEditing(t);
                      return {
                        props: {
                          style: { background: t.stt % 2 === 0 && "#fbfbfb" },
                        },
                        children: n
                          ? Object(T.jsx)(A.a, {
                              disabled: !n,
                              style: { width: "100%" },
                              value: t.salary_index,
                              onChange: function (e) {
                                return a.onChangeSelectSalaryIndex(e, t);
                              },
                              children: Object(k.map)(oe, function (e, t) {
                                return Object(T.jsx)(
                                  Be,
                                  {
                                    className: "erpOption",
                                    value: e.value,
                                    children: e.text,
                                  },
                                  t
                                );
                              }),
                            })
                          : Object(T.jsx)("div", {
                              children: Object(k.find)(oe, function (e) {
                                return e.value === t.salary_index;
                              }).text,
                            }),
                      };
                    },
                  },
                  {
                    title: "Full Title",
                    dataIndex: "full_title",
                    fixed: "left",
                    key: "full_title",
                    sorter: function (e, t) {
                      return e.full_title.length - t.full_title.length;
                    },
                    ellipsis: { showTitle: !1 },
                    width: 300,
                    render: function (e, t) {
                      var n = a._isEditing(t);
                      return {
                        props: {
                          style: { background: t.stt % 2 === 0 && "#fbfbfb" },
                        },
                        children: n
                          ? Object(T.jsx)(R.a, {
                              style: { width: "100%" },
                              disabled: !n,
                              value: t.full_title,
                              onChange: function (e) {
                                return a.onChangeChuDe(e.target.value, t);
                              },
                            })
                          : Object(T.jsx)("div", { children: t.full_title }),
                      };
                    },
                  },
                  {
                    title: "Content Raw",
                    dataIndex: "content_raw",
                    key: "content_raw",
                    ellipsis: { showTitle: !1 },
                    width: 150,
                    sorter: function (e, t) {
                      return e.content_raw.length - t.content_raw.length;
                    },
                    render: function (e, t) {
                      var n = a._isEditing(t);
                      return n
                        ? Object(T.jsx)(R.a, {
                            style: { width: "100%" },
                            disabled: !n,
                            value: t.content_raw,
                            onChange: function (e) {
                              return a.onChangeLinkContent(e.target.value, t);
                            },
                          })
                        : Object(T.jsx)("a", {
                            target: "_blank",
                            href: t.content_raw,
                            children: t.content_raw,
                          });
                    },
                  },
                  {
                    title: "Writer Name",
                    dataIndex: "writer_name",
                    key: "writer_name",
                    filteredValue: null,
                    filters: c,
                    onFilter: function (e, t) {
                      return Object(k.includes)(t.writer_name, e);
                    },
                    sorter: function (e, t) {
                      return e.writer_name.length - t.writer_name.length;
                    },
                    ellipsis: { showTitle: !1 },
                    width: 150,
                    render: function (e, t) {
                      var n = a._isEditing(t);
                      return n
                        ? Object(T.jsx)(A.a, {
                            disabled: !n,
                            style: { width: "100%" },
                            value: [
                              t.writer_name,
                              t.writer_code,
                              t.writer_nick,
                            ],
                            onChange: function (e) {
                              return a.onChangeSelect(e, t);
                            },
                            children: Object(k.map)(c, function (e, t) {
                              return Object(T.jsx)(
                                Be,
                                {
                                  className: "erpOption",
                                  value: [e.text, e.value, e.nick],
                                  children: e.text,
                                },
                                t
                              );
                            }),
                          })
                        : Object(T.jsx)("div", { children: t.writer_name });
                    },
                  },
                  {
                    title: "Content Status",
                    key: "content_status",
                    dataIndex: "content_status",
                    filters: [
                      { text: "\u0110\xe3 duy\u1ec7t", value: 1 },
                      { text: "Ch\u01b0a duy\u1ec7t", value: 0 },
                    ],
                    filteredValue: null,
                    onFilter: function (e, t) {
                      return t.content_status === e;
                    },
                    sorter: function (e, t) {
                      return e.content_status - t.content_status;
                    },
                    ellipsis: { showTitle: !1 },
                    width: 165,
                    render: function (e, t) {
                      var n = a._isEditing(t);
                      return Object(T.jsx)(m.a, {
                        style: {
                          color: "white",
                          backgroundColor:
                            0 === t.content_status ? "red" : "#238c31",
                          fontWeight: "bold",
                          borderRadius: 5,
                          borderColor:
                            0 === t.content_status ? "red" : "#238c31",
                        },
                        type: "primary",
                        disabled: !n,
                        onClick: function () {
                          return a.onDuyetCW(t);
                        },
                        children:
                          0 === t.content_status
                            ? "Ch\u01b0a duy\u1ec7t"
                            : "\u0110\xe3 duy\u1ec7t",
                      });
                    },
                  },
                  {
                    title: "Content Final",
                    dataIndex: "content_final",
                    key: "content_final",
                    sorter: function (e, t) {
                      return e.content_final.length - t.content_final.length;
                    },
                    ellipsis: { showTitle: !1 },
                    width: 130,
                    render: function (e, t) {
                      var n = a._isEditing(t);
                      return n
                        ? Object(T.jsx)(R.a, {
                            style: { width: "100%" },
                            disabled: !n,
                            value: t.content_final,
                            onChange: function (e) {
                              return a.onChangeLinkContentFinal(
                                e.target.value,
                                t
                              );
                            },
                          })
                        : Object(T.jsx)("a", {
                            target: "_blank",
                            href: t.content_final,
                            children: t.content_final,
                          });
                    },
                  },
                  {
                    title: "Mô tả youtube",
                    dataIndex: "content_note",
                    key: "content_note",
                    sorter: function (e, t) {
                      return e.content_note.length - t.content_note.length;
                    },
                    ellipsis: { showTitle: !1 },
                    width: 100,
                    render: function (e, t) {
                      var n = a._isEditing(t);
                      return n
                        ? Object(T.jsx)(R.a, {
                            style: { width: "100%" },
                            disabled: !n,
                            value: t.content_note,
                            onChange: function (e) {
                              return a.onChangeLinkContentNote(
                                e.target.value,
                                t
                              );
                            },
                          })
                        : Object(T.jsx)("div", { children: t.content_note });
                    },
                  },
                  {
                    title: "Composer Name",
                    dataIndex: "composer_name",
                    key: "composer_name",
                    sorter: function (e, t) {
                      return e.composer_name.length - t.composer_name.length;
                    },
                    ellipsis: { showTitle: !1 },
                    filters: h,
                    filteredValue: null,
                    onFilter: function (e, t) {
                      return Object(k.includes)(t.composer_name, e);
                    },
                    width: 175,
                    render: function (e, t) {
                      var n = a._isEditing(t);
                      return n
                        ? Object(T.jsx)(A.a, {
                            disabled: !n,
                            style: { width: "100%" },
                            value: [
                              t.composer_name,
                              t.composer_code,
                              t.composer_nick,
                            ],
                            onChange: function (e) {
                              return a.onChangeSelectComposerName(e, t);
                            },
                            children: Object(k.map)(h, function (e, t) {
                              return Object(T.jsx)(
                                Be,
                                {
                                  className: "erpOption",
                                  value: [e.text, e.value, e.nick],
                                  children: e.text,
                                },
                                t
                              );
                            }),
                          })
                        : Object(T.jsx)("div", { children: t.composer_name });
                    },
                  },
                  {
                    title: "Audio Date",
                    dataIndex: "audio_date",
                    key: "audio_date",
                    sorter: function (e, t) {
                      return (
                        C()(e.audio_date).unix() - C()(t.audio_date).unix()
                      );
                    },
                    ellipsis: { showTitle: !1 },
                    width: 120,
                    render: function (e, t) {
                      return Object(T.jsx)("div", {
                        children: Object(k.isEmpty)(e)
                          ? ""
                          : C()(e).format("DD-MM-YYYY"),
                      });
                    },
                  },
                  {
                    title: "Link Audio",
                    dataIndex: "link_audio",
                    key: "link_audio",
                    sorter: function (e, t) {
                      return e.link_audio.length - t.link_audio.length;
                    },
                    ellipsis: { showTitle: !1 },
                    width: 130,
                    render: function (e, t) {
                      var n = a._isEditing(t);
                      return n
                        ? Object(T.jsx)(R.a, {
                            style: { width: "100%" },
                            disabled: !n,
                            value: t.link_audio,
                            onChange: function (e) {
                              return a.onChangeLinkAudio(e.target.value, t);
                            },
                          })
                        : Object(T.jsx)("a", {
                            target: "_blank",
                            href: t.link_audio,
                            children: t.link_audio,
                          });
                    },
                  },
                  {
                    title: "Audio Status",
                    key: "audio_status",
                    dataIndex: "audio_status",
                    filters: [
                      { text: "\u0110\xe3 duy\u1ec7t", value: 1 },
                      { text: "Ch\u01b0a duy\u1ec7t", value: 0 },
                    ],
                    filteredValue: null,
                    onFilter: function (e, t) {
                      return t.audio_status === e;
                    },
                    sorter: function (e, t) {
                      return e.audio_status - t.audio_status;
                    },
                    ellipsis: { showTitle: !1 },
                    width: 150,
                    render: function (e, t) {
                      var n = a._isEditing(t);
                      return Object(T.jsx)(m.a, {
                        style: {
                          color: "white",
                          backgroundColor:
                            0 === t.audio_status ? "red" : "#238c31",
                          fontWeight: "bold",
                          borderRadius: 5,
                          borderColor: 0 === t.audio_status ? "red" : "#238c31",
                        },
                        type: "primary",
                        disabled: !n,
                        onClick: function () {
                          return a.onDuyetAC(t);
                        },
                        children:
                          0 === t.audio_status
                            ? "Ch\u01b0a duy\u1ec7t"
                            : "\u0110\xe3 duy\u1ec7t",
                      });
                    },
                  },
                  {
                    title: "Từ khoá",
                    dataIndex: "audio_note",
                    key: "audio_note",
                    sorter: function (e, t) {
                      return e.audio_note.length - t.audio_note.length;
                    },
                    ellipsis: { showTitle: !1 },
                    width: 100,
                    render: function (e, t) {
                      var n = a._isEditing(t);
                      return n
                        ? Object(T.jsx)(R.a, {
                            style: { width: "100%" },
                            disabled: !n,
                            value: t.audio_note,
                            onChange: function (e) {
                              return a.onChangeLinkAudioNote(e.target.value, t);
                            },
                          })
                        : Object(T.jsx)("div", { children: t.audio_note });
                    },
                  },
                  {
                    title: "Editor Name",
                    dataIndex: "editor_name",
                    key: "editor_name",
                    sorter: function (e, t) {
                      return e.editor_name.length - t.editor_name.length;
                    },
                    ellipsis: { showTitle: !1 },
                    filters: _,
                    filteredValue: null,
                    onFilter: function (e, t) {
                      return Object(k.includes)(t.editor_name, e);
                    },
                    width: 150,
                    render: function (e, t) {
                      var n = a._isEditing(t);
                      return n
                        ? Object(T.jsx)(A.a, {
                            disabled: !n,
                            style: { width: "100%" },
                            value: [t.editor_name, t.editor_code],
                            onChange: function (e) {
                              return a.onChangeSelectEditorName(e, t);
                            },
                            children: Object(k.map)(_, function (e, t) {
                              return Object(T.jsx)(
                                Be,
                                {
                                  className: "erpOption",
                                  value: [e.text, e.value],
                                  children: e.text,
                                },
                                t
                              );
                            }),
                          })
                        : Object(T.jsx)("div", { children: t.editor_name });
                    },
                  },
                  {
                    title: "Footage",
                    dataIndex: "footage",
                    key: "footage",
                    sorter: function (e, t) {
                      return e.footage.length - t.footage.length;
                    },
                    ellipsis: { showTitle: !1 },
                    width: 130,
                    render: function (e, t) {
                      var n = a._isEditing(t);
                      return n
                        ? Object(T.jsx)(R.a, {
                            style: { width: "100%" },
                            disabled: !n,
                            value: t.footage,
                            onChange: function (e) {
                              return a.onChangeFootage(e.target.value, t);
                            },
                          })
                        : Object(T.jsx)("a", {
                            target: "_blank",
                            href: t.footage,
                            children: t.footage,
                          });
                    },
                  },
                  {
                    title: "Video Date",
                    dataIndex: "video_date",
                    key: "video_date",
                    sorter: function (e, t) {
                      return (
                        C()(e.video_date).unix() - C()(t.video_date).unix()
                      );
                    },
                    ellipsis: { showTitle: !1 },
                    width: 120,
                    render: function (e, t) {
                      return Object(T.jsx)("div", {
                        children: Object(k.isEmpty)(e)
                          ? ""
                          : C()(e).format("DD-MM-YYYY"),
                      });
                    },
                  },
                  {
                    title: "Link Video",
                    dataIndex: "link_video",
                    key: "link_video",
                    sorter: function (e, t) {
                      return e.link_video.length - t.link_video.length;
                    },
                    ellipsis: { showTitle: !1 },
                    width: 130,
                    render: function (e, t) {
                      var n = a._isEditing(t);
                      return n
                        ? Object(T.jsx)(R.a, {
                            style: { width: "100%" },
                            disabled: !n,
                            value: t.link_video,
                            onChange: function (e) {
                              return a.onChangeLinkVideo(e.target.value, t);
                            },
                          })
                        : Object(T.jsx)("a", {
                            target: "_blank",
                            href: t.link_video,
                            children: t.link_video,
                          });
                    },
                  },
                  {
                    title: "Video Status",
                    key: "video_status",
                    dataIndex: "video_status",
                    filters: [
                      { text: "\u0110\xe3 duy\u1ec7t", value: 1 },
                      { text: "Ch\u01b0a duy\u1ec7t", value: 0 },
                    ],
                    filteredValue: null,
                    onFilter: function (e, t) {
                      return t.video_status === e;
                    },
                    sorter: function (e, t) {
                      return e.video_status - t.video_status;
                    },
                    ellipsis: { showTitle: !1 },
                    width: 145,
                    render: function (e, t) {
                      var n = a._isEditing(t);
                      return Object(T.jsx)(m.a, {
                        style: {
                          color: "white",
                          backgroundColor:
                            0 === t.video_status ? "red" : "#238c31",
                          fontWeight: "bold",
                          borderRadius: 5,
                          borderColor: 0 === t.video_status ? "red" : "#238c31",
                        },
                        type: "primary",
                        disabled: !n,
                        onClick: function () {
                          return a.onDuyetVE(t);
                        },
                        children:
                          0 === t.video_status
                            ? "Ch\u01b0a duy\u1ec7t"
                            : "\u0110\xe3 duy\u1ec7t",
                      });
                    },
                  },
                  {
                    title: "Ảnh thumbnail",
                    dataIndex: "video_note",
                    key: "video_note",
                    sorter: function (e, t) {
                      return e.video_note.length - t.video_note.length;
                    },
                    ellipsis: { showTitle: !1 },
                    width: 100,
                    render: function (e, t) {
                      var n = a._isEditing(t);
                      return n
                        ? Object(T.jsx)(R.a, {
                            style: { width: "100%" },
                            disabled: !n,
                            value: t.video_note,
                            onChange: function (e) {
                              return a.onChangeLinkVideoNote(e.target.value, t);
                            },
                          })
                        : Object(T.jsx)("div", { children: t.video_note });
                    },
                  },
                  {
                    title: "Link Youtube",
                    dataIndex: "link_youtube",
                    key: "link_youtube",
                    sorter: function (e, t) {
                      return e.link_youtube.length - t.link_youtube.length;
                    },
                    ellipsis: { showTitle: !1 },
                    width: 130,
                    render: function (e, t) {
                      var n = a._isEditing(t);
                      return n
                        ? Object(T.jsx)(R.a, {
                            style: { width: "100%" },
                            disabled: !n,
                            value: t.link_youtube,
                            onChange: function (e) {
                              return a.onChangeLinkYoutube(e.target.value, t);
                            },
                          })
                        : Object(T.jsx)("a", {
                            target: "_blank",
                            href: t.link_youtube,
                            children: t.link_youtube,
                          });
                    },
                  },
                  Object(b.a)(
                    Object(b.a)(
                      {
                        title: "Public Date",
                        dataIndex: "public_date",
                        key: "public_date",
                        sorter: function (e, t) {
                          return (
                            C()(e.public_date).unix() -
                            C()(t.public_date).unix()
                          );
                        },
                      },
                      a.getColumnFilterTimeProps("public_date")
                    ),
                    {},
                    {
                      ellipsis: { showTitle: !1 },
                      width: 150,
                      render: function (e, t) {
                        return a._isEditing(t)
                          ? Object(T.jsx)(V.a, {
                              style: { height: 35, width: "100%" },
                              format: "DD-MM-YYYY",
                              value: Object(k.isEmpty)(t.public_date)
                                ? null
                                : C()(t.public_date),
                              placeholder: "Ch\u1ecdn ng\xe0y public",
                              onChange: function (e) {
                                a.onChangeDatePublic(e, t);
                              },
                              disabledDate: function (e) {
                                return e > C()();
                              },
                            })
                          : Object(T.jsx)("div", {
                              children: Object(k.isEmpty)(e)
                                ? ""
                                : C()(e).format("DD-MM-YYYY"),
                            });
                      },
                    }
                  ),
                  {
                    title: "Thao t\xe1c",
                    key: "thaoTac",
                    align: "center",
                    fixed: "right",
                    width: 155,
                    render: function (e, t) {
                      var n = a._isEditing(t);
                      return {
                        props: {
                          style: { background: t.stt % 2 === 0 && "#fbfbfb" },
                        },
                        children: Object(T.jsx)(T.Fragment, {
                          children: n
                            ? Object(T.jsxs)(T.Fragment, {
                                children: [
                                  Object(T.jsx)(m.a, {
                                    style: {
                                      color: "white",
                                      backgroundColor: "#238c31",
                                      fontWeight: "bold",
                                      borderRadius: 5,
                                      borderColor: "#238c31",
                                    },
                                    type: "primary",
                                    icon: Object(T.jsx)(G.a, {}),
                                    onClick: function () {
                                      return a.onSubmitUpdate(t);
                                    },
                                  }),
                                  Object(T.jsx)("span", {
                                    children: "\xa0\xa0\xa0",
                                  }),
                                  Object(T.jsx)(m.a, {
                                    style: {
                                      color: "white",
                                      backgroundColor: "#238c31",
                                      fontWeight: "bold",
                                      borderRadius: 5,
                                      borderColor: "#238c31",
                                    },
                                    type: "primary",
                                    icon: Object(T.jsx)(J.a, {}),
                                    onClick: function () {
                                      return a.onCancelEdit(t);
                                    },
                                  }),
                                  Object(T.jsx)("span", {
                                    children: "\xa0\xa0\xa0",
                                  }),
                                ],
                              })
                            : Object(T.jsx)(m.a, {
                                style: {
                                  color: "white",
                                  backgroundColor: "#238c31",
                                  fontWeight: "bold",
                                  borderRadius: 5,
                                  borderColor: "#238c31",
                                },
                                type: "primary",
                                onClick: function () {
                                  return a._onChangeEditingKey(t);
                                },
                                children: "S\u1eeda",
                              }),
                        }),
                      };
                    },
                  },
                ],
                searchText: "",
                searchedColumn: "",
              }),
              (a.refAddNewContent = i.a.createRef()),
              a
            );
          }
          return (
            Object(h.a)(n, [
              {
                key: "componentDidMount",
                value: function () {
                  (this.mounted = !0), this._onRefreshData();
                },
              },
              {
                key: "UNSAFE_componentWillReceiveProps",
                value: function (e) {
                  var t = this;
                  if (
                    this.props !== e &&
                    e.listContentCode &&
                    e.listContentCode !== this.props.listContentCode
                  ) {
                    var n = Object(d.a)(this.state.column),
                      a = Object(b.a)({}, n[1]);
                    (a.filters = e.listContentCode),
                      (a.render = function (n, a) {
                        var i = t._isEditing(a);
                        return {
                          props: {
                            style: { background: a.stt % 2 === 0 && "#fbfbfb" },
                          },
                          children: i
                            ? Object(T.jsx)(A.a, {
                                disabled: !i,
                                style: { width: "100%" },
                                value: a.content_code,
                                onChange: function (e) {
                                  return t.onChangeSelectContentCode(e, a);
                                },
                                children: Object(k.map)(
                                  e.listContentCode,
                                  function (e, t) {
                                    return Object(T.jsx)(
                                      Be,
                                      {
                                        className: "erpOption",
                                        value: e.text,
                                        children: e.text,
                                      },
                                      t
                                    );
                                  }
                                ),
                              })
                            : Object(T.jsx)("div", {
                                children: a.content_code,
                              }),
                        };
                      }),
                      (n[1] = a),
                      this.mounted &&
                        this.setState(
                          { column: n, listContentCode: e.listContentCode },
                          function () {
                            t._onRefreshData();
                          }
                        );
                  }
                },
              },
              {
                key: "componentWillUnmount",
                value: function () {
                  this.mounted = !1;
                },
              },
              {
                key: "addTitle",
                value: function () {
                  var e = this,
                    t = {
                      data: [
                        Object(k.isEmpty)(
                          this.state.originData[
                            this.state.originData.length - 1
                          ]
                        )
                          ? 0
                          : this.state.originData[
                              this.state.originData.length - 1
                            ].id + 1,
                        this.state.content_code,
                        "",
                        this.state.chuDeInput,
                        "",
                        "",
                        0,
                        "",
                        "",
                        null,
                        "",
                        "",
                        null,
                        "",
                        0,
                        "",
                        "",
                        "",
                        "",
                        null,
                        "",
                        "",
                        "",
                        0,
                        "",
                        "",
                        null,
                        1,
                        1,
                        1,
                        1,
                        null,
                        null,
                        null,
                        null,
                        this.state.salary_index,
                        1,
                      ],
                    };
                  v.a
                    .post("".concat(K, "/tenticker/add"), t)
                    .then(function (t) {
                      O.a.success({
                        message:
                          "Th\xeam ch\u1ee7 \u0111\u1ec1 th\xe0nh c\xf4ng",
                        style: { backgroundColor: "#f5fff8" },
                      });
                      var n = "Th\xeam ch\u1ee7 \u0111\u1ec1: "
                        .concat(e.state.chuDeInput, " v\u1edbi Content Code: ")
                        .concat(e.state.content_code, " v\xe0 Salary Index: ")
                        .concat(e.state.salary_index);
                      e.onUpdateActivity(n),
                        e.onScrollAddNewContent(),
                        e._onRefreshData();
                    });
                },
              },
              {
                key: "render",
                value: function () {
                  var e = this,
                    t = this.state,
                    n = t.dataChangeUpdate,
                    a = t.chuDeInput,
                    i = t.column,
                    o = t.isShowModal,
                    r = t.filteredInfo,
                    c = t.sortedInfo,
                    l = t.isLoading,
                    s = t.content_code,
                    d = t.listContentCode,
                    u = t.salary_index,
                    h = t.searchTextMain,
                    _ = Object(k.map)(i, function (t, n) {
                      switch (n) {
                        case 0:
                          return Object(b.a)(
                            Object(b.a)({}, t),
                            {},
                            {
                              sortOrder: Object(k.isEmpty)(c)
                                ? null
                                : "stt" === c.columnKey && c.order,
                              onHeaderCell: function (t) {
                                return {
                                  width: t.width,
                                  onResize: e.handleResize(n),
                                };
                              },
                            }
                          );
                        case 1:
                          return Object(b.a)(
                            Object(b.a)({}, t),
                            {},
                            {
                              filteredValue: Object(k.isEmpty)(r)
                                ? null
                                : r.content_code,
                              sortOrder: Object(k.isEmpty)(c)
                                ? null
                                : "content_code" === c.columnKey && c.order,
                              onHeaderCell: function (t) {
                                return {
                                  width: t.width,
                                  onResize: e.handleResize(n),
                                };
                              },
                            }
                          );
                        case 2:
                          return Object(b.a)(
                            Object(b.a)({}, t),
                            {},
                            {
                              filteredValue: Object(k.isEmpty)(r)
                                ? null
                                : r.salary_index,
                              sortOrder: Object(k.isEmpty)(c)
                                ? null
                                : "salary_index" === c.columnKey && c.order,
                              onHeaderCell: function (t) {
                                return {
                                  width: t.width,
                                  onResize: e.handleResize(n),
                                };
                              },
                            }
                          );
                        case 3:
                          return Object(b.a)(
                            Object(b.a)(
                              Object(b.a)({}, t),
                              {},
                              {
                                filteredValue: Object(k.isEmpty)(r)
                                  ? null
                                  : r.full_title,
                                sortOrder: Object(k.isEmpty)(c)
                                  ? null
                                  : "full_title" === c.columnKey && c.order,
                              },
                              e.getColumnSearchProps("full_title")
                            ),
                            {},
                            {
                              onHeaderCell: function (t) {
                                return {
                                  width: t.width,
                                  onResize: e.handleResize(n),
                                };
                              },
                            }
                          );
                        case 4:
                          return Object(b.a)(
                            Object(b.a)({}, t),
                            {},
                            {
                              sortOrder: Object(k.isEmpty)(c)
                                ? null
                                : "content_raw" === c.columnKey && c.order,
                              onHeaderCell: function (t) {
                                return {
                                  width: t.width,
                                  onResize: e.handleResize(n),
                                };
                              },
                            }
                          );
                        case 5:
                          return Object(b.a)(
                            Object(b.a)({}, t),
                            {},
                            {
                              filteredValue: Object(k.isEmpty)(r)
                                ? null
                                : r.writer_name,
                              sortOrder: Object(k.isEmpty)(c)
                                ? null
                                : "writer_name" === c.columnKey && c.order,
                              onHeaderCell: function (t) {
                                return {
                                  width: t.width,
                                  onResize: e.handleResize(n),
                                };
                              },
                            }
                          );
                        case 6:
                          return Object(b.a)(
                            Object(b.a)({}, t),
                            {},
                            {
                              filteredValue: Object(k.isEmpty)(r)
                                ? null
                                : r.content_status,
                              sortOrder: Object(k.isEmpty)(c)
                                ? null
                                : "content_status" === c.columnKey && c.order,
                              onHeaderCell: function (t) {
                                return {
                                  width: t.width,
                                  onResize: e.handleResize(n),
                                };
                              },
                            }
                          );
                        case 7:
                          return Object(b.a)(
                            Object(b.a)({}, t),
                            {},
                            {
                              sortOrder: Object(k.isEmpty)(c)
                                ? null
                                : "content_final" === c.columnKey && c.order,
                              onHeaderCell: function (t) {
                                return {
                                  width: t.width,
                                  onResize: e.handleResize(n),
                                };
                              },
                            }
                          );
                        case 8:
                          return Object(b.a)(
                            Object(b.a)({}, t),
                            {},
                            {
                              sortOrder: Object(k.isEmpty)(c)
                                ? null
                                : "content_note" === c.columnKey && c.order,
                              onHeaderCell: function (t) {
                                return {
                                  width: t.width,
                                  onResize: e.handleResize(n),
                                };
                              },
                            }
                          );
                        case 9:
                          return Object(b.a)(
                            Object(b.a)({}, t),
                            {},
                            {
                              filteredValue: Object(k.isEmpty)(r)
                                ? null
                                : r.composer_name,
                              sortOrder: Object(k.isEmpty)(c)
                                ? null
                                : "composer_name" === c.columnKey && c.order,
                              onHeaderCell: function (t) {
                                return {
                                  width: t.width,
                                  onResize: e.handleResize(n),
                                };
                              },
                            }
                          );
                        case 10:
                          return Object(b.a)(
                            Object(b.a)({}, t),
                            {},
                            {
                              sortOrder: Object(k.isEmpty)(c)
                                ? null
                                : "audio_date" === c.columnKey && c.order,
                              onHeaderCell: function (t) {
                                return {
                                  width: t.width,
                                  onResize: e.handleResize(n),
                                };
                              },
                            }
                          );
                        case 11:
                          return Object(b.a)(
                            Object(b.a)({}, t),
                            {},
                            {
                              sortOrder: Object(k.isEmpty)(c)
                                ? null
                                : "link_audio" === c.columnKey && c.order,
                              onHeaderCell: function (t) {
                                return {
                                  width: t.width,
                                  onResize: e.handleResize(n),
                                };
                              },
                            }
                          );
                        case 12:
                          return Object(b.a)(
                            Object(b.a)({}, t),
                            {},
                            {
                              filteredValue: Object(k.isEmpty)(r)
                                ? null
                                : r.audio_status,
                              sortOrder: Object(k.isEmpty)(c)
                                ? null
                                : "audio_status" === c.columnKey && c.order,
                              onHeaderCell: function (t) {
                                return {
                                  width: t.width,
                                  onResize: e.handleResize(n),
                                };
                              },
                            }
                          );
                        case 13:
                          return Object(b.a)(
                            Object(b.a)({}, t),
                            {},
                            {
                              sortOrder: Object(k.isEmpty)(c)
                                ? null
                                : "audio_note" === c.columnKey && c.order,
                              onHeaderCell: function (t) {
                                return {
                                  width: t.width,
                                  onResize: e.handleResize(n),
                                };
                              },
                            }
                          );
                        case 14:
                          return Object(b.a)(
                            Object(b.a)({}, t),
                            {},
                            {
                              filteredValue: Object(k.isEmpty)(r)
                                ? null
                                : r.editor_name,
                              sortOrder: Object(k.isEmpty)(c)
                                ? null
                                : "editor_name" === c.columnKey && c.order,
                              onHeaderCell: function (t) {
                                return {
                                  width: t.width,
                                  onResize: e.handleResize(n),
                                };
                              },
                            }
                          );
                        case 15:
                          return Object(b.a)(
                            Object(b.a)({}, t),
                            {},
                            {
                              sortOrder: Object(k.isEmpty)(c)
                                ? null
                                : "video_date" === c.columnKey && c.order,
                              onHeaderCell: function (t) {
                                return {
                                  width: t.width,
                                  onResize: e.handleResize(n),
                                };
                              },
                            }
                          );
                        case 16:
                          return Object(b.a)(
                            Object(b.a)({}, t),
                            {},
                            {
                              sortOrder: Object(k.isEmpty)(c)
                                ? null
                                : "footage" === c.columnKey && c.order,
                              onHeaderCell: function (t) {
                                return {
                                  width: t.width,
                                  onResize: e.handleResize(n),
                                };
                              },
                            }
                          );
                        case 17:
                          return Object(b.a)(
                            Object(b.a)({}, t),
                            {},
                            {
                              sortOrder: Object(k.isEmpty)(c)
                                ? null
                                : "link_video" === c.columnKey && c.order,
                              onHeaderCell: function (t) {
                                return {
                                  width: t.width,
                                  onResize: e.handleResize(n),
                                };
                              },
                            }
                          );
                        case 18:
                          return Object(b.a)(
                            Object(b.a)({}, t),
                            {},
                            {
                              filteredValue: Object(k.isEmpty)(r)
                                ? null
                                : r.video_status,
                              sortOrder: Object(k.isEmpty)(c)
                                ? null
                                : "video_status" === c.columnKey && c.order,
                              onHeaderCell: function (t) {
                                return {
                                  width: t.width,
                                  onResize: e.handleResize(n),
                                };
                              },
                            }
                          );
                        case 19:
                          return Object(b.a)(
                            Object(b.a)({}, t),
                            {},
                            {
                              sortOrder: Object(k.isEmpty)(c)
                                ? null
                                : "video_note" === c.columnKey && c.order,
                              onHeaderCell: function (t) {
                                return {
                                  width: t.width,
                                  onResize: e.handleResize(n),
                                };
                              },
                            }
                          );
                        case 20:
                          return Object(b.a)(
                            Object(b.a)({}, t),
                            {},
                            {
                              sortOrder: Object(k.isEmpty)(c)
                                ? null
                                : "link_youtube" === c.columnKey && c.order,
                              onHeaderCell: function (t) {
                                return {
                                  width: t.width,
                                  onResize: e.handleResize(n),
                                };
                              },
                            }
                          );
                        case 21:
                          return Object(b.a)(
                            Object(b.a)({}, t),
                            {},
                            {
                              filteredValue: Object(k.isEmpty)(r)
                                ? null
                                : r.public_date,
                              sortOrder: Object(k.isEmpty)(c)
                                ? null
                                : "public_date" === c.columnKey && c.order,
                              onHeaderCell: function (t) {
                                return {
                                  width: t.width,
                                  onResize: e.handleResize(n),
                                };
                              },
                            }
                          );
                        default:
                          return Object(b.a)(
                            Object(b.a)({}, t),
                            {},
                            {
                              onHeaderCell: function (t) {
                                return {
                                  width: t.width,
                                  onResize: e.handleResize(n),
                                };
                              },
                            }
                          );
                      }
                    });
                  return Object(T.jsxs)("div", {
                    children: [
                      Object(T.jsxs)("div", {
                        style: {
                          display: "flex",
                          justifyContent: "space-between",
                          alignItems: "center",
                        },
                        children: [
                          Object(T.jsx)("div", {
                            style: { display: "flex", marginLeft: 10 },
                            children: Object(T.jsx)(m.a, {
                              type: "primary",
                              style: {
                                backgroundColor:
                                  Object(k.isEmpty)(r) &&
                                  Object(k.isEmpty)(r) &&
                                  Object(k.isEmpty)(h)
                                    ? null
                                    : "red",
                                borderColor:
                                  Object(k.isEmpty)(r) &&
                                  Object(k.isEmpty)(r) &&
                                  Object(k.isEmpty)(h)
                                    ? null
                                    : "red",
                              },
                              onClick: this.clearAll,
                              children: "Xoá bộ lọc",
                            }),
                          }),
                          Object(T.jsx)(R.a, {
                            placeholder: "Tìm kiếm",
                            value: h,
                            onChange: this._handleSearch,
                            style: { width: 700, display: "flex" },
                          }),
                          Object(T.jsxs)("div", {
                            children: [
                              Object(T.jsx)(m.a, {
                                className: "buttonPrimary",
                                type: "primary",
                                icon: Object(T.jsx)(X.a, {}),
                                style: {
                                  color: "white",
                                  backgroundColor: "#238c31",
                                  fontWeight: "bold",
                                  borderRadius: 5,
                                  borderColor: "#238c31",
                                },
                                onClick: function () {
                                  e.setState({ isShowModal: !0 });
                                },
                                children: "Th\xeam ch\u1ee7 \u0111\u1ec1",
                              }),
                              Object(T.jsx)(m.a, {
                                className: "buttonPrimary",
                                type: "primary",
                                icon: Object(T.jsx)(Z.a, {}),
                                style: {
                                  color: "white",
                                  backgroundColor: "#238c31",
                                  fontWeight: "bold",
                                  borderRadius: 5,
                                  borderColor: "#238c31",
                                  margin: 20,
                                },
                                onClick: function () {
                                  e.onExcel();
                                },
                                children: "Excel",
                              }),
                            ],
                          }),
                          Object(T.jsx)(L.a, {
                            visible: o,
                            width: "50%",
                            onCancel: Object(k.debounce)(
                              this._onCloseModal,
                              100
                            ),
                            footer: null,
                            children: Object(T.jsxs)(S.a, {
                              style: { marginTop: 20 },
                              wrapperCol: { span: 15 },
                              labelCol: { span: 6 },
                              onFinish: this.onConfirmDuyet,
                              ref: this.refForm,
                              children: [
                                Object(T.jsxs)(S.a.Item, {
                                  style: {
                                    alignItems: "center",
                                    justifyContent: "center",
                                  },
                                  children: [
                                    Object(T.jsx)(A.a, {
                                      style: { width: "100%" },
                                      value: s,
                                      placeholder: "Ch\u1ecdn Content Code",
                                      onChange: function (t) {
                                        return e.onChangeSelectAddContentCode(
                                          t
                                        );
                                      },
                                      children: Object(k.map)(
                                        d,
                                        function (e, t) {
                                          return Object(T.jsx)(
                                            Be,
                                            {
                                              className: "erpOption",
                                              value: e.text,
                                              children: e.text,
                                            },
                                            t
                                          );
                                        }
                                      ),
                                    }),
                                    Object(T.jsx)(R.a, {
                                      style: { width: "100%", marginTop: 20 },
                                      placeholder:
                                        "Nh\u1eadp ch\u1ee7 \u0111\u1ec1",
                                      onChange: function (t) {
                                        e.setState({
                                          chuDeInput: t.target.value,
                                        });
                                      },
                                      value: a,
                                    }),
                                    Object(T.jsx)(A.a, {
                                      style: { width: "100%", marginTop: 20 },
                                      value: u,
                                      placeholder: "Ch\u1ecdn Length Script",
                                      onChange: function (t) {
                                        return e.onChangeSelectAddSalaryIndex(
                                          t
                                        );
                                      },
                                      children: Object(k.map)(
                                        oe,
                                        function (e, t) {
                                          return Object(T.jsx)(
                                            Be,
                                            {
                                              className: "erpOption",
                                              value: e.value,
                                              children: e.text,
                                            },
                                            t
                                          );
                                        }
                                      ),
                                    }),
                                  ],
                                }),
                                Object(T.jsxs)(S.a.Item, {
                                  wrapperCol: { offset: 9 },
                                  style: {
                                    alignItems: "center",
                                    justifyContent: "center",
                                  },
                                  children: [
                                    Object(T.jsx)(m.a, {
                                      type: "primary",
                                      className: "buttonPrimary",
                                      icon: Object(T.jsx)(q.a, {}),
                                      htmlType: "submit",
                                      children: "X\xc1C NH\u1eacN",
                                    }),
                                    Object(T.jsx)(m.a, {
                                      className: "buttonPrimary",
                                      icon: Object(T.jsx)(Q.a, {}),
                                      style: { marginLeft: 10 },
                                      onClick: Object(k.debounce)(
                                        this._onCloseModal,
                                        100
                                      ),
                                      children: "H\u1ee6Y",
                                    }),
                                  ],
                                }),
                              ],
                            }),
                          }),
                        ],
                      }),
                      Object(T.jsx)(F.a, {
                        loading: l,
                        size: "middle",
                        bordered: !0,
                        onChange: this.handleChange,
                        components: this.components,
                        style: { marginBottom: 15 },
                        rowClassName: function (e, t) {
                          if (t % 2 !== 0) return "rowBackgroundColor";
                        },
                        scroll: { x: 1500, y: 400 },
                        dataSource: n,
                        columns: _,
                        rowKey: "id",
                        pagination: n.length > 10 && { total: n.length },
                        sticky: !0,
                      }),
                      Object(T.jsx)("div", {
                        style: { height: 50 },
                        ref: this.refAddNewContent,
                      }),
                    ],
                  });
                },
              },
            ]),
            n
          );
        })(a.Component),
        Ze = A.a.Option,
        qe = (R.a.Search, V.a.RangePicker),
        Qe = function (e) {
          var t = e.onResize,
            n = e.width,
            a = Object(j.a)(e, ["onResize", "width"]);
          return n
            ? Object(T.jsx)(x.Resizable, {
                width: n,
                height: 0,
                handle: Object(T.jsx)("span", {
                  className: "react-resizable-handle",
                  onClick: function (e) {
                    e.stopPropagation();
                  },
                }),
                onResize: t,
                draggableOpts: { enableUserSelectHack: !1 },
                children: Object(T.jsx)("th", Object(b.a)({}, a)),
              })
            : Object(T.jsx)("th", Object(b.a)({}, a));
        },
        $e = (function (e) {
          Object(_.a)(n, e);
          var t = Object(f.a)(n);
          function n(e) {
            var a;
            Object(u.a)(this, n),
              ((a = t.call(this, e)).components = { header: { cell: Qe } }),
              (a.getColumnSearchProps = function (e) {
                return {
                  filterDropdown: function (t) {
                    var n = t.setSelectedKeys,
                      i = t.selectedKeys,
                      o = t.confirm,
                      r = t.clearFilters;
                    return Object(T.jsxs)("div", {
                      style: { padding: 8 },
                      children: [
                        Object(T.jsx)(R.a, {
                          ref: function (e) {
                            a.searchInput = e;
                          },
                          placeholder: "Tìm kiếm",
                          value: i[0],
                          onChange: function (e) {
                            return n(e.target.value ? [e.target.value] : []);
                          },
                          onPressEnter: function () {
                            return a.handleSearch(i, o, e);
                          },
                          style: { marginBottom: 8, display: "block" },
                        }),
                        Object(T.jsxs)(N.b, {
                          children: [
                            Object(T.jsx)(m.a, {
                              type: "primary",
                              onClick: function () {
                                return a.handleSearch(i, o, e);
                              },
                              icon: Object(T.jsx)(B.a, {}),
                              size: "small",
                              style: { width: 90 },
                              children: "Search",
                            }),
                            Object(T.jsx)(m.a, {
                              onClick: function () {
                                return a.handleReset(r);
                              },
                              size: "small",
                              style: { width: 90 },
                              children: "Reset",
                            }),
                            Object(T.jsx)(m.a, {
                              type: "link",
                              size: "small",
                              onClick: function () {
                                o({ closeDropdown: !1 }),
                                  a.setState({
                                    searchText: i[0],
                                    searchedColumn: e,
                                  });
                              },
                              children: "Filter",
                            }),
                          ],
                        }),
                      ],
                    });
                  },
                  filterIcon: function (e) {
                    return Object(T.jsx)(B.a, {
                      style: { color: e ? "#ffffff" : void 0 },
                    });
                  },
                  filteredValue: null,
                  onFilter: function (t, n) {
                    return n[e]
                      ? n[e].toString().toLowerCase().includes(t.toLowerCase())
                      : "";
                  },
                  onFilterDropdownVisibleChange: function (e) {
                    e &&
                      setTimeout(function () {
                        return a.searchInput.select();
                      }, 100);
                  },
                  render: function (t) {
                    return a.state.searchedColumn === e
                      ? Object(T.jsx)(P.a, {
                          highlightStyle: {
                            backgroundColor: "#ffc069",
                            padding: 0,
                          },
                          searchWords: [a.state.searchText],
                          autoEscape: !0,
                          textToHighlight: t ? t.toString() : "",
                        })
                      : t;
                  },
                };
              }),
              (a.getColumnFilterTimeProps = function (e) {
                return {
                  filterDropdown: function (e) {
                    var t = e.setSelectedKeys,
                      n = e.selectedKeys,
                      a = e.confirm,
                      i = e.clearFilters;
                    return Object(T.jsxs)("div", {
                      style: { padding: 8 },
                      children: [
                        Object(T.jsx)("div", {
                          children: Object(T.jsx)(qe, {
                            style: { marginBottom: 8 },
                            value: n[0],
                            onChange: function (e) {
                              t(e ? [e] : []);
                            },
                          }),
                        }),
                        Object(T.jsxs)(N.b, {
                          children: [
                            Object(T.jsx)(m.a, {
                              type: "primary",
                              onClick: function () {
                                a();
                              },
                              icon: Object(T.jsx)(B.a, {}),
                              size: "small",
                              style: { width: 90, marginLeft: 10 },
                              children: "Search",
                            }),
                            Object(T.jsx)(m.a, {
                              onClick: function () {
                                return i();
                              },
                              size: "small",
                              style: { width: 90 },
                              children: "Reset",
                            }),
                          ],
                        }),
                      ],
                    });
                  },
                  filterIcon: function (e) {
                    return Object(T.jsx)(B.a, {
                      style: { color: e ? "#ffffff" : void 0 },
                    });
                  },
                  filteredValue: null,
                  onFilter: function (e, t) {
                    return (
                      !!t.public_date &&
                      ((C()(t.public_date) < C()(e[1]) &&
                        C()(t.public_date) > C()(e[0])) ||
                        C()(t.public_date).format("DDMMYYY") ===
                          C()(e[0]).format("DDMMYYY") ||
                        C()(t.public_date).format("DDMMYYY") ===
                          C()(e[1]).format("DDMMYYY"))
                    );
                  },
                  onFilterDropdownVisibleChange: function (e) {},
                  render: function (t) {
                    return a.state.searchedColumn === e
                      ? Object(T.jsx)(P.a, {
                          highlightStyle: {
                            backgroundColor: "#ffc069",
                            padding: 0,
                          },
                          searchWords: [a.state.searchText],
                          autoEscape: !0,
                          textToHighlight: t ? t.toString() : "",
                        })
                      : t;
                  },
                };
              }),
              (a.handleSearch = function (e, t, n) {
                t(), a.setState({ searchText: e[0], searchedColumn: n });
              }),
              (a.handleReset = function (e) {
                e(), a.setState({ searchText: "" });
              }),
              (a._onRefreshData = function () {
                a.setState({ isLoading: !0 }),
                  v.a.get("".concat(K, "/activity")).then(function (e) {
                    a.setState({
                      activity: e.data.data,
                      activityChangeUpdate: e.data.data,
                    });
                  }),
                  v.a.get("".concat(K, "/tenticker")).then(function (e) {
                    var t = a.props,
                      n = t.data,
                      i = t.id,
                      o = e.data.data
                        .filter(function (e) {
                          return (
                            e.writer_name === n[i + 1][me] && 1 === e.is_new
                          );
                        })
                        .sort(function (e, t) {
                          return t.id - e.id;
                        }),
                      r = Object(k.map)(o, function (e, t) {
                        return Object(b.a)(
                          Object(b.a)({}, e),
                          {},
                          { stt: t + 1 }
                        );
                      });
                    a.setState({
                      dataSource: r,
                      dataChangeUpdate: r,
                      newDataTest: r,
                      isLoading: !1,
                      editingKey: "",
                      newId: Object(k.isEmpty)(
                        e.data.data[e.data.data.length - 1]
                      )
                        ? 0
                        : e.data.data[e.data.data.length - 1].id + 1,
                      chuDeInput: "",
                      originData: e.data.data,
                      content_code: null,
                    });
                  });
              }),
              (a.onScrollAddNewContent = function () {
                a.refAddNewContent.current.scrollIntoView({
                  behavior: "smooth",
                });
              }),
              (a.onUpdateActivity = function (e) {
                v.a.get("".concat(K, "/activity")).then(function (t) {
                  var n = {
                    data: [
                      null,
                      C()().format("YYYY-MM-DD HH:mm:ss"),
                      e,
                      a.props.data[a.props.id + 1][me],
                    ],
                  };
                  v.a.post("".concat(K, "/activity/add"), n).then(function (e) {
                    v.a.get("".concat(K, "/activity")).then(function (e) {
                      a.setState({
                        activity: e.data.data,
                        activityChangeUpdate: e.data.data,
                      });
                    });
                  }),
                    a.setState({
                      activity: t.data.data,
                      activityChangeUpdate: t.data.data,
                    });
                });
              }),
              (a._isEditing = function (e) {
                return e.id === a.state.editingKey;
              }),
              (a.onChangeLinkContent = function (e, t) {
                var n = Object(k.map)(a.state.dataChangeUpdate, function (n) {
                  return n.id === t.id
                    ? Object(b.a)(Object(b.a)({}, n), {}, { content_raw: e })
                    : Object(b.a)({}, n);
                });
                a.setState({ dataChangeUpdate: n });
              }),
              (a.onChangeChuDe = function (e, t) {
                var n = Object(k.map)(a.state.dataChangeUpdate, function (n) {
                  return n.id === t.id
                    ? Object(b.a)(Object(b.a)({}, n), {}, { full_title: e })
                    : Object(b.a)({}, n);
                });
                a.setState({ dataChangeUpdate: n });
              }),
              (a.onChangeSelectContentCode = function (e, t) {
                var n = Object(k.map)(a.state.dataChangeUpdate, function (n) {
                  return n.id === t.id
                    ? Object(b.a)(Object(b.a)({}, n), {}, { content_code: e })
                    : Object(b.a)({}, n);
                });
                a.setState({ dataChangeUpdate: n });
              }),
              (a.onDuyetCW = function (e) {
                var t = Object(k.map)(a.state.dataChangeUpdate, function (t) {
                  return t.id === e.id
                    ? Object(b.a)(
                        Object(b.a)({}, t),
                        {},
                        { content_status: 0 === e.content_status ? 1 : 0 }
                      )
                    : Object(b.a)({}, t);
                });
                a.setState({ dataChangeUpdate: t });
              }),
              (a.onChangeSelectAddSalaryIndex = function (e) {
                a.setState({ salary_index: e });
              }),
              (a.onSubmitUpdate = function (e) {
                var t = {
                  data_id: e.id,
                  data: [
                    e.id,
                    e.content_code,
                    e.writer_code,
                    e.full_title,
                    e.content_raw,
                    e.writer_name,
                    e.content_status,
                    e.content_final,
                    e.content_note,
                    1 !== e.is_first_content_final ||
                    Object(k.isEmpty)(e.content_final)
                      ? null === e.content_date
                        ? null
                        : C()(e.content_date).format("YYYY-MM-DD HH:mm:ss")
                      : C()().format("YYYY-MM-DD HH:mm:ss"),
                    e.composer_code,
                    e.composer_name,
                    1 !== e.is_first_audio || Object(k.isEmpty)(e.link_audio)
                      ? null === e.audio_date
                        ? null
                        : C()(e.audio_date).format("YYYY-MM-DD HH:mm:ss")
                      : C()().format("YYYY-MM-DD HH:mm:ss"),
                    e.link_audio,
                    e.audio_status,
                    e.audio_note,
                    e.writer_nick,
                    e.composer_nick,
                    e.editor_name,
                    1 !== e.is_first_video || Object(k.isEmpty)(e.link_video)
                      ? null === e.video_date
                        ? null
                        : C()(e.video_date).format("YYYY-MM-DD HH:mm:ss")
                      : C()().format("YYYY-MM-DD HH:mm:ss"),
                    e.footage,
                    e.editor_code,
                    e.link_video,
                    e.video_status,
                    e.video_note,
                    e.link_youtube,
                    null === e.public_date
                      ? null
                      : C()(e.public_date).format("YYYY-MM-DD HH:mm:ss"),
                    Object(k.isEmpty)(e.link_youtube) || 1 !== e.is_first_public
                      ? 1
                      : 0,
                    (!Object(k.isEmpty)(e.content_final) &&
                      1 === e.is_first_content_final) ||
                    0 === e.is_first_content_final
                      ? 0
                      : 1,
                    (!Object(k.isEmpty)(e.link_audio) &&
                      1 === e.is_first_audio) ||
                    0 === e.is_first_audio
                      ? 0
                      : 1,
                    (!Object(k.isEmpty)(e.link_video) &&
                      1 === e.is_first_video) ||
                    0 === e.is_first_video
                      ? 0
                      : 1,
                    null === e.add_composer_date
                      ? null
                      : C()(e.add_composer_date).format("YYYY-MM-DD HH:mm:ss"),
                    null === e.add_ve_date
                      ? null
                      : C()(e.add_ve_date).format("YYYY-MM-DD HH:mm:ss"),
                    null === e.confirm_content_date
                      ? null
                      : C()(e.confirm_content_date).format(
                          "YYYY-MM-DD HH:mm:ss"
                        ),
                    null === e.confirm_audio_date
                      ? null
                      : C()(e.confirm_audio_date).format("YYYY-MM-DD HH:mm:ss"),
                    e.salary_index,
                    1,
                  ],
                };
                v.a.put("".concat(K, "/tenticker"), t).then(function (t) {
                  if (
                    (O.a.success({
                      message: "C\u1eadp nh\u1eadt th\xe0nh c\xf4ng",
                      style: { backgroundColor: "#f5fff8" },
                    }),
                    e.content_code !==
                      a.state.dataSource[e.stt - 1].content_code)
                  ) {
                    var n =
                      "Thay \u0111\u1ed5i Content Code c\u1ee7a ch\u1ee7 \u0111\u1ec1 "
                        .concat(
                          a.state.dataSource[e.stt - 1].full_title,
                          " t\u1eeb "
                        )
                        .concat(
                          a.state.dataSource[e.stt - 1].content_code,
                          " th\xe0nh "
                        )
                        .concat(e.content_code);
                    a.onUpdateActivity(n);
                  }
                  if (
                    e.full_title !== a.state.dataSource[e.stt - 1].full_title
                  ) {
                    var i =
                      "Thay \u0111\u1ed5i Full Title c\u1ee7a ch\u1ee7 \u0111\u1ec1 "
                        .concat(
                          a.state.dataSource[e.stt - 1].full_title,
                          " t\u1eeb "
                        )
                        .concat(
                          a.state.dataSource[e.stt - 1].full_title,
                          " th\xe0nh "
                        )
                        .concat(e.full_title);
                    a.onUpdateActivity(i);
                  }
                  if (
                    e.content_raw !== a.state.dataSource[e.stt - 1].content_raw
                  ) {
                    var o =
                      "Thay \u0111\u1ed5i Content Raw c\u1ee7a ch\u1ee7 \u0111\u1ec1 "
                        .concat(
                          a.state.dataSource[e.stt - 1].full_title,
                          " t\u1eeb "
                        )
                        .concat(
                          a.state.dataSource[e.stt - 1].content_raw,
                          " th\xe0nh "
                        )
                        .concat(e.content_raw);
                    a.onUpdateActivity(o);
                  }
                  if (
                    e.salary_index !==
                    a.state.dataSource[e.stt - 1].salary_index
                  ) {
                    var r =
                      "Thay \u0111\u1ed5i Salary Index c\u1ee7a ch\u1ee7 \u0111\u1ec1 "
                        .concat(
                          a.state.dataSource[e.stt - 1].full_title,
                          " t\u1eeb "
                        )
                        .concat(
                          a.state.dataSource[e.stt - 1].salary_index,
                          " th\xe0nh "
                        )
                        .concat(e.salary_index);
                    a.onUpdateActivity(r);
                  }
                  a._onRefreshData();
                }),
                  a.setState({ editingKey: "" });
              }),
              (a.onCancelEdit = function (e) {
                var t = Object(k.map)(
                  a.state.dataChangeUpdate,
                  function (t, n) {
                    return t.id === e.id
                      ? Object(b.a)({}, a.state.dataSource[n])
                      : Object(b.a)({}, t);
                  }
                );
                a.setState({ editingKey: "", dataChangeUpdate: t });
              }),
              (a.onDelete = function (e) {
                ee()({
                  title: "Th\xf4ng b\xe1o",
                  content: "B\u1ea1n c\xf3 ch\u1eafc mu\u1ed1n xo\xe1",
                  okCancel: function () {},
                  onOk: function () {
                    var t = { data: { data_id: [e.id] } };
                    v.a
                      .delete("".concat(K, "/tenticker"), t)
                      .then(function (t) {
                        O.a.success({
                          message: "Xo\xe1 th\xe0nh c\xf4ng",
                          style: { backgroundColor: "#f5fff8" },
                        });
                        var n =
                          "Xo\xe1 d\xf2ng c\xf3 ch\u1ee7 \u0111\u1ec1 l\xe0 ".concat(
                            a.state.dataSource[e.stt - 1].full_title
                          );
                        a.onUpdateActivity(n), a._onRefreshData();
                      });
                  },
                });
              }),
              (a._onChangeEditingKey = function (e) {
                var t = Object(k.map)(
                  a.state.dataChangeUpdate,
                  function (e, t) {
                    return e.id === a.state.id
                      ? Object(b.a)({}, a.state.dataSource[t])
                      : Object(b.a)({}, e);
                  }
                );
                a.setState({ editingKey: e.id, dataChangeUpdate: t });
              }),
              (a.handleResize = function (e) {
                return function (t, n) {
                  var i = n.size;
                  a.setState(function (t) {
                    var n = t.column,
                      a = Object(d.a)(n);
                    return (
                      (a[e] = Object(b.a)(
                        Object(b.a)({}, a[e]),
                        {},
                        { width: i.width }
                      )),
                      { column: a }
                    );
                  });
                };
              }),
              (a._onCloseModal = function () {
                a.setState({ isShowModal: !1, chuDeInput: "" });
              }),
              (a.onChangeSelectSalaryIndex = function (e, t) {
                var n = Object(k.map)(a.state.dataChangeUpdate, function (n) {
                  return n.id === t.id
                    ? Object(b.a)(Object(b.a)({}, n), {}, { salary_index: e })
                    : Object(b.a)({}, n);
                });
                a.setState({ dataChangeUpdate: n });
              }),
              (a.onConfirmDuyet = function () {
                Object(k.isEmpty)(a.state.chuDeInput)
                  ? O.a.warning({
                      message: "Th\xf4ng b\xe1o",
                      description: "Ch\u01b0a nh\u1eadp content title!",
                    })
                  : Object(k.isEmpty)(a.state.content_code)
                  ? O.a.warning({
                      message: "Th\xf4ng b\xe1o",
                      description: "Ch\u01b0a ch\u1ecdn content code!",
                    })
                  : null === a.state.salary_index
                  ? O.a.warning({
                      message: "Th\xf4ng b\xe1o",
                      description: "Ch\u01b0a ch\u1ecdn length script!",
                    })
                  : (a.addTitle(), a.setState({ isShowModal: !1 }));
              }),
              (a._handleSearch = function (e) {
                var t = a.state.dataSource.filter(function (t) {
                  var n = t.full_title;
                  return (
                    (n = n.toLowerCase()),
                    (e.target.value = e.target.value.toLowerCase()),
                    n.includes(e.target.value)
                  );
                });
                a.setState({
                  dataChangeUpdate: t,
                  searchTextMain: e.target.value,
                });
              }),
              (a.handleChange = function (e, t, n) {
                console.log("filters", t);
                var i = Object(k.filter)(a.state.newDataTest, function (e) {
                  return (
                    (t.content_code
                      ? Object(k.includes)(t.content_code, e.content_code)
                      : e) &&
                    (t.content_status
                      ? Object(k.includes)(t.content_status, e.content_status)
                      : e) &&
                    (t.salary_index
                      ? Object(k.includes)(t.salary_index, e.salary_index)
                      : e) &&
                    (t.public_date
                      ? (C()(e.public_date) <
                          C()(Object(k.get)(t, "public_date[0][1]")) &&
                          C()(e.public_date) >
                            C()(Object(k.get)(t, "public_date[0][0]"))) ||
                        C()(e.public_date).format("DDMMYYY") ===
                          C()(Object(k.get)(t, "public_date[0][0]")).format(
                            "DDMMYYY"
                          ) ||
                        C()(e.public_date).format("DDMMYYY") ===
                          C()(Object(k.get)(t, "public_date[0][1]")).format(
                            "DDMMYYY"
                          )
                      : e)
                  );
                });
                (t.content_code ||
                  t.content_status ||
                  t.full_title ||
                  t.public_date ||
                  t.salary_index) &&
                  a.setState({ dataChangeUpdate: i }),
                  a.setState({ filteredInfo: t, sortedInfo: n }, function () {
                    var e = Object(k.map)(a.state.column, function (e, t) {
                      return 1 === t
                        ? Object(b.a)(
                            Object(b.a)({}, e),
                            {},
                            { filteredValue: a.state.filteredInfo.content_code }
                          )
                        : Object(b.a)({}, e);
                    });
                    a.setState({ column: e });
                  });
              }),
              (a.clearFilters = function () {
                a.setState({ filteredInfo: null });
              }),
              (a.clearSorters = function () {
                a.setState({ sortedInfo: null });
              }),
              (a.clearAll = function () {
                a.setState({
                  filteredInfo: null,
                  sortedInfo: null,
                  searchTextMain: "",
                  dataChangeUpdate: a.state.dataSource,
                });
              }),
              (a.onChangeSelectAddContentCode = function (e) {
                a.setState({ content_code: e });
              });
            for (
              var o = e.data,
                r = e.listContentCode,
                c = e.id,
                l = [],
                s = [],
                h = [],
                _ = "",
                f = 0;
              f < o.length;
              f++
            )
              1 == o[f][_e] &&
                l.push({ value: o[f][me], text: o[f][me], nick: o[f][ye] }),
                1 == o[f][be] &&
                  s.push({ value: o[f][me], text: o[f][me], nick: o[f][ye] }),
                1 == o[f][ge] && h.push({ value: o[f][me], text: o[f][me] }),
                f == c &&
                  ((_ = o[f + 1][ye]), console.log("writerNick", o[f + 1][ye]));
            return (
              (a.state = {
                chuDeInput: "",
                newId: 0,
                dataSource: [],
                dataChangeUpdate: [],
                newDataTest: [],
                activityChangeUpdate: [],
                activity: [],
                editingKey: "",
                searchTextMain: "",
                writerNick: _,
                isShowModal: !1,
                filteredInfo: null,
                sortedInfo: null,
                isLoading: !1,
                listContentCode: r,
                originData: [],
                salary_index: null,
                column: [
                  {
                    title: "STT",
                    dataIndex: "id",
                    key: "id",
                    width: 70,
                    fixed: "left",
                    defaultSortOrder: "ascend",
                    sorter: function (e, t) {
                      return e.stt - t.stt;
                    },
                    render: function (e, t) {
                      return {
                        props: {
                          style: { background: t.stt % 2 === 0 && "#fbfbfb" },
                        },
                        children: Object(T.jsx)("div", { children: e }),
                      };
                    },
                  },
                  {
                    title: "Content Code",
                    dataIndex: "content_code",
                    key: "content_code",
                    fixed: "left",
                    filteredValue: null,
                    filters: r,
                    onFilter: function (e, t) {
                      return 0 === t.content_code.indexOf(e);
                    },
                    sorter: function (e, t) {
                      return e.content_code.length - t.content_code.length;
                    },
                    ellipsis: { showTitle: !1 },
                    width: 160,
                    render: function (e, t) {
                      var n = a._isEditing(t);
                      return {
                        props: {
                          style: { background: t.stt % 2 === 0 && "#fbfbfb" },
                        },
                        children: n
                          ? Object(T.jsx)(A.a, {
                              disabled: !n,
                              style: { width: "100%" },
                              value: t.content_code,
                              onChange: function (e) {
                                return a.onChangeSelectContentCode(e, t);
                              },
                              children: Object(k.map)(r, function (e, t) {
                                return Object(T.jsx)(
                                  Ze,
                                  {
                                    className: "erpOption",
                                    value: e.text,
                                    children: e.text,
                                  },
                                  t
                                );
                              }),
                            })
                          : Object(T.jsx)("div", { children: t.content_code }),
                      };
                    },
                  },
                  {
                    title: "Length Script",
                    dataIndex: "salary_index",
                    key: "salary_index",
                    filteredValue: null,
                    fixed: "left",
                    filters: oe,
                    onFilter: function (e, t) {
                      return t.salary_index === e;
                    },
                    sorter: function (e, t) {
                      return e.salary_index - t.salary_index;
                    },
                    ellipsis: { showTitle: !1 },
                    width: 160,
                    render: function (e, t) {
                      var n = a._isEditing(t);
                      return {
                        props: {
                          style: { background: t.stt % 2 === 0 && "#fbfbfb" },
                        },
                        children: n
                          ? Object(T.jsx)(A.a, {
                              disabled: !n,
                              style: { width: "100%" },
                              value: t.salary_index,
                              onChange: function (e) {
                                return a.onChangeSelectSalaryIndex(e, t);
                              },
                              children: Object(k.map)(oe, function (e, t) {
                                return Object(T.jsx)(
                                  Ze,
                                  {
                                    className: "erpOption",
                                    value: e.value,
                                    children: e.text,
                                  },
                                  t
                                );
                              }),
                            })
                          : Object(T.jsx)("div", {
                              children: Object(k.find)(oe, function (e) {
                                return e.value === t.salary_index;
                              }).text,
                            }),
                      };
                    },
                  },
                  Object(b.a)(
                    Object(b.a)(
                      {
                        title: "Full Title",
                        dataIndex: "full_title",
                        fixed: "left",
                        key: "full_title",
                        sorter: function (e, t) {
                          return e.full_title.length - t.full_title.length;
                        },
                        ellipsis: { showTitle: !1 },
                        width: 300,
                      },
                      a.getColumnSearchProps("full_title")
                    ),
                    {},
                    {
                      render: function (e, t) {
                        var n = a._isEditing(t);
                        return {
                          props: {
                            style: { background: t.stt % 2 === 0 && "#fbfbfb" },
                          },
                          children: n
                            ? Object(T.jsx)(R.a, {
                                style: { width: "100%" },
                                disabled: !n,
                                value: t.full_title,
                                onChange: function (e) {
                                  return a.onChangeChuDe(e.target.value, t);
                                },
                              })
                            : Object(T.jsx)("div", { children: t.full_title }),
                        };
                      },
                    }
                  ),
                  {
                    title: "Content Raw",
                    dataIndex: "content_raw",
                    key: "content_raw",
                    ellipsis: { showTitle: !1 },
                    width: 150,
                    sorter: function (e, t) {
                      return e.content_raw.length - t.content_raw.length;
                    },
                    render: function (e, t) {
                      var n = a._isEditing(t);
                      return n
                        ? Object(T.jsx)(R.a, {
                            style: { width: "100%" },
                            disabled: !n,
                            value: t.content_raw,
                            onChange: function (e) {
                              return a.onChangeLinkContent(e.target.value, t);
                            },
                          })
                        : Object(T.jsx)("a", {
                            target: "_blank",
                            href: t.content_raw,
                            children: t.content_raw,
                          });
                    },
                  },
                  {
                    title: "Content Status",
                    key: "content_status",
                    dataIndex: "content_status",
                    filters: [
                      { text: "\u0110\xe3 duy\u1ec7t", value: 1 },
                      { text: "Ch\u01b0a duy\u1ec7t", value: 0 },
                    ],
                    filteredValue: null,
                    onFilter: function (e, t) {
                      return t.content_status === e;
                    },
                    sorter: function (e, t) {
                      return e.content_status - t.content_status;
                    },
                    ellipsis: { showTitle: !1 },
                    width: 165,
                    render: function (e, t) {
                      return Object(T.jsx)(m.a, {
                        style: {
                          color: "white",
                          backgroundColor:
                            0 === t.content_status ? "red" : "#238c31",
                          fontWeight: "bold",
                          borderRadius: 5,
                          borderColor:
                            0 === t.content_status ? "red" : "#238c31",
                        },
                        type: "primary",
                        disabled: !0,
                        onClick: function () {
                          return a.onDuyetCW(t);
                        },
                        children:
                          0 === t.content_status
                            ? "Ch\u01b0a duy\u1ec7t"
                            : "\u0110\xe3 duy\u1ec7t",
                      });
                    },
                  },
                  {
                    title: "Mô tả youtube",
                    dataIndex: "content_note",
                    key: "content_note",
                    sorter: function (e, t) {
                      return e.content_note.length - t.content_note.length;
                    },
                    ellipsis: { showTitle: !1 },
                    width: 100,
                    render: function (e, t) {
                      return Object(T.jsx)("div", { children: t.content_note });
                    },
                  },
                  {
                    title: "Link Youtube",
                    dataIndex: "link_youtube",
                    key: "link_youtube",
                    sorter: function (e, t) {
                      return e.link_youtube.length - t.link_youtube.length;
                    },
                    ellipsis: { showTitle: !1 },
                    width: 130,
                    render: function (e, t) {
                      return Object(T.jsx)("a", {
                        target: "_blank",
                        href: t.link_youtube,
                        children: t.link_youtube,
                      });
                    },
                  },
                  {
                    title: "Content Final Date",
                    dataIndex: "content_date",
                    key: "content_date",
                    sorter: function (e, t) {
                      return (
                        C()(e.content_date).unix() - C()(t.content_date).unix()
                      );
                    },
                    ellipsis: { showTitle: !1 },
                    width: 120,
                    render: function (e, t) {
                      return Object(T.jsx)("div", {
                        children: Object(k.isEmpty)(e)
                          ? ""
                          : C()(e).format("DD-MM-YYYY"),
                      });
                    },
                  },
                  Object(b.a)(
                    Object(b.a)(
                      {
                        title: "Public Date",
                        dataIndex: "public_date",
                        key: "public_date",
                        sorter: function (e, t) {
                          return (
                            C()(e.public_date).unix() -
                            C()(t.public_date).unix()
                          );
                        },
                      },
                      a.getColumnFilterTimeProps("public_date")
                    ),
                    {},
                    {
                      ellipsis: { showTitle: !1 },
                      width: 150,
                      render: function (e, t) {
                        return Object(T.jsx)("div", {
                          children: Object(k.isEmpty)(e)
                            ? ""
                            : C()(e).format("DD-MM-YYYY"),
                        });
                      },
                    }
                  ),
                  {
                    title: "Thao t\xe1c",
                    key: "thaoTac",
                    align: "center",
                    fixed: "right",
                    width: 155,
                    render: function (e) {
                      var t = a._isEditing(e);
                      return {
                        props: {
                          style: { background: e.stt % 2 === 0 && "#fbfbfb" },
                        },
                        children: Object(T.jsx)(T.Fragment, {
                          children: t
                            ? Object(T.jsxs)(T.Fragment, {
                                children: [
                                  Object(T.jsx)(m.a, {
                                    style: {
                                      color: "white",
                                      backgroundColor: "#238c31",
                                      fontWeight: "bold",
                                      borderRadius: 5,
                                      borderColor: "#238c31",
                                    },
                                    type: "primary",
                                    icon: Object(T.jsx)(G.a, {}),
                                    onClick: function () {
                                      return a.onSubmitUpdate(e);
                                    },
                                  }),
                                  Object(T.jsx)("span", {
                                    children: "\xa0\xa0\xa0",
                                  }),
                                  Object(T.jsx)(m.a, {
                                    style: {
                                      color: "white",
                                      backgroundColor: "#238c31",
                                      fontWeight: "bold",
                                      borderRadius: 5,
                                      borderColor: "#238c31",
                                    },
                                    type: "primary",
                                    icon: Object(T.jsx)(J.a, {}),
                                    onClick: function () {
                                      return a.onCancelEdit(e);
                                    },
                                  }),
                                  Object(T.jsx)("span", {
                                    children: "\xa0\xa0\xa0",
                                  }),
                                ],
                              })
                            : Object(T.jsx)(m.a, {
                                style: {
                                  color: "white",
                                  backgroundColor: "#238c31",
                                  fontWeight: "bold",
                                  borderRadius: 5,
                                  borderColor: "#238c31",
                                },
                                type: "primary",
                                onClick: function () {
                                  return a._onChangeEditingKey(e);
                                },
                                children: "S\u1eeda",
                              }),
                        }),
                      };
                    },
                  },
                ],
                searchText: "",
                searchedColumn: "",
              }),
              (a.refAddNewContent = i.a.createRef()),
              a
            );
          }
          return (
            Object(h.a)(n, [
              {
                key: "componentDidMount",
                value: function () {
                  this._onRefreshData();
                },
              },
              {
                key: "addTitle",
                value: function () {
                  var e = this,
                    t = this.props,
                    n = t.data,
                    a = t.id,
                    i = {
                      data: [
                        this.state.newId,
                        this.state.content_code,
                        n[a + 1][0],
                        this.state.chuDeInput,
                        "",
                        n[a + 1][me],
                        0,
                        "",
                        "",
                        null,
                        "",
                        "",
                        null,
                        "",
                        0,
                        "",
                        this.state.writerNick,
                        "",
                        "",
                        null,
                        "",
                        "",
                        "",
                        0,
                        "",
                        "",
                        null,
                        1,
                        1,
                        1,
                        1,
                        null,
                        null,
                        null,
                        null,
                        this.state.salary_index,
                        1,
                      ],
                    };
                  v.a
                    .post("".concat(K, "/tenticker/add"), i)
                    .then(function (t) {
                      O.a.success({
                        message:
                          "Th\xeam ch\u1ee7 \u0111\u1ec1 th\xe0nh c\xf4ng",
                        style: { backgroundColor: "#f5fff8" },
                      });
                      var n = "Th\xeam ch\u1ee7 \u0111\u1ec1: "
                        .concat(e.state.chuDeInput, " v\u1edbi Content Code: ")
                        .concat(e.state.content_code, " v\xe0 Salary Index: ")
                        .concat(e.state.salary_index);
                      e.onUpdateActivity(n),
                        e.onScrollAddNewContent(),
                        e._onRefreshData();
                    });
                },
              },
              {
                key: "render",
                value: function () {
                  var e = this,
                    t = this.state,
                    n = t.dataChangeUpdate,
                    a = t.chuDeInput,
                    i = t.column,
                    o = t.isShowModal,
                    r = t.filteredInfo,
                    c = t.sortedInfo,
                    l = t.isLoading,
                    s = t.content_code,
                    d = t.listContentCode,
                    u = t.salary_index,
                    h = t.searchTextMain,
                    _ = Object(k.map)(i, function (t, n) {
                      switch (n) {
                        case 0:
                          return Object(b.a)(
                            Object(b.a)({}, t),
                            {},
                            {
                              sortOrder: Object(k.isEmpty)(c)
                                ? null
                                : "stt" === c.columnKey && c.order,
                              onHeaderCell: function (t) {
                                return {
                                  width: t.width,
                                  onResize: e.handleResize(n),
                                };
                              },
                            }
                          );
                        case 1:
                          return Object(b.a)(
                            Object(b.a)({}, t),
                            {},
                            {
                              filteredValue: Object(k.isEmpty)(r)
                                ? null
                                : r.content_code,
                              sortOrder: Object(k.isEmpty)(c)
                                ? null
                                : "content_code" === c.columnKey && c.order,
                              onHeaderCell: function (t) {
                                return {
                                  width: t.width,
                                  onResize: e.handleResize(n),
                                };
                              },
                            }
                          );
                        case 2:
                          return Object(b.a)(
                            Object(b.a)({}, t),
                            {},
                            {
                              filteredValue: Object(k.isEmpty)(r)
                                ? null
                                : r.salary_index,
                              sortOrder: Object(k.isEmpty)(c)
                                ? null
                                : "salary_index" === c.columnKey && c.order,
                              onHeaderCell: function (t) {
                                return {
                                  width: t.width,
                                  onResize: e.handleResize(n),
                                };
                              },
                            }
                          );
                        case 3:
                          return Object(b.a)(
                            Object(b.a)({}, t),
                            {},
                            {
                              filteredValue: Object(k.isEmpty)(r)
                                ? null
                                : r.full_title,
                              sortOrder: Object(k.isEmpty)(c)
                                ? null
                                : "full_title" === c.columnKey && c.order,
                              onHeaderCell: function (t) {
                                return {
                                  width: t.width,
                                  onResize: e.handleResize(n),
                                };
                              },
                            }
                          );
                        case 4:
                          return Object(b.a)(
                            Object(b.a)({}, t),
                            {},
                            {
                              sortOrder: Object(k.isEmpty)(c)
                                ? null
                                : "content_raw" === c.columnKey && c.order,
                              onHeaderCell: function (t) {
                                return {
                                  width: t.width,
                                  onResize: e.handleResize(n),
                                };
                              },
                            }
                          );
                        case 5:
                          return Object(b.a)(
                            Object(b.a)({}, t),
                            {},
                            {
                              filteredValue: Object(k.isEmpty)(r)
                                ? null
                                : r.content_status,
                              sortOrder: Object(k.isEmpty)(c)
                                ? null
                                : "content_status" === c.columnKey && c.order,
                              onHeaderCell: function (t) {
                                return {
                                  width: t.width,
                                  onResize: e.handleResize(n),
                                };
                              },
                            }
                          );
                        case 6:
                          return Object(b.a)(
                            Object(b.a)({}, t),
                            {},
                            {
                              sortOrder: Object(k.isEmpty)(c)
                                ? null
                                : "content_note" === c.columnKey && c.order,
                              onHeaderCell: function (t) {
                                return {
                                  width: t.width,
                                  onResize: e.handleResize(n),
                                };
                              },
                            }
                          );
                        case 7:
                          return Object(b.a)(
                            Object(b.a)({}, t),
                            {},
                            {
                              sortOrder: Object(k.isEmpty)(c)
                                ? null
                                : "link_youtube" === c.columnKey && c.order,
                              onHeaderCell: function (t) {
                                return {
                                  width: t.width,
                                  onResize: e.handleResize(n),
                                };
                              },
                            }
                          );
                        case 7:
                          return Object(b.a)(
                            Object(b.a)({}, t),
                            {},
                            {
                              sortOrder: Object(k.isEmpty)(c)
                                ? null
                                : "content_date" === c.columnKey && c.order,
                              onHeaderCell: function (t) {
                                return {
                                  width: t.width,
                                  onResize: e.handleResize(n),
                                };
                              },
                            }
                          );
                        case 8:
                          return Object(b.a)(
                            Object(b.a)({}, t),
                            {},
                            {
                              filteredValue: Object(k.isEmpty)(r)
                                ? null
                                : r.public_date,
                              sortOrder: Object(k.isEmpty)(c)
                                ? null
                                : "public_date" === c.columnKey && c.order,
                              onHeaderCell: function (t) {
                                return {
                                  width: t.width,
                                  onResize: e.handleResize(n),
                                };
                              },
                            }
                          );
                        default:
                          return Object(b.a)(
                            Object(b.a)({}, t),
                            {},
                            {
                              onHeaderCell: function (t) {
                                return {
                                  width: t.width,
                                  onResize: e.handleResize(n),
                                };
                              },
                            }
                          );
                      }
                    });
                  return Object(T.jsxs)("div", {
                    children: [
                      Object(T.jsxs)("div", {
                        style: {
                          display: "flex",
                          justifyContent: "space-between",
                          alignItems: "center",
                        },
                        children: [
                          Object(T.jsx)("div", {
                            style: { display: "flex", marginLeft: 10 },
                            children: Object(T.jsx)(m.a, {
                              type: "primary",
                              style: {
                                backgroundColor:
                                  Object(k.isEmpty)(r) &&
                                  Object(k.isEmpty)(r) &&
                                  Object(k.isEmpty)(h)
                                    ? null
                                    : "red",
                                borderColor:
                                  Object(k.isEmpty)(r) &&
                                  Object(k.isEmpty)(r) &&
                                  Object(k.isEmpty)(h)
                                    ? null
                                    : "red",
                              },
                              onClick: this.clearAll,
                              children: "Xoá bộ lọc",
                            }),
                          }),
                          Object(T.jsx)(R.a, {
                            placeholder: "Tìm kiếm",
                            value: h,
                            onChange: this._handleSearch,
                            style: { width: 700, display: "flex" },
                          }),
                          Object(T.jsx)(m.a, {
                            className: "buttonPrimary",
                            type: "primary",
                            icon: Object(T.jsx)(X.a, {}),
                            style: {
                              color: "white",
                              backgroundColor: "#238c31",
                              fontWeight: "bold",
                              borderRadius: 5,
                              borderColor: "#238c31",
                              margin: 20,
                            },
                            onClick: function () {
                              e.setState({ isShowModal: !0 });
                            },
                            children: "Th\xeam ch\u1ee7 \u0111\u1ec1",
                          }),
                          Object(T.jsx)(L.a, {
                            visible: o,
                            width: "50%",
                            onCancel: Object(k.debounce)(
                              this._onCloseModal,
                              100
                            ),
                            footer: null,
                            children: Object(T.jsxs)(S.a, {
                              style: { marginTop: 20 },
                              wrapperCol: { span: 15 },
                              labelCol: { span: 6 },
                              onFinish: this.onConfirmDuyet,
                              ref: this.refForm,
                              children: [
                                Object(T.jsxs)(S.a.Item, {
                                  style: {
                                    alignItems: "center",
                                    justifyContent: "center",
                                  },
                                  children: [
                                    Object(T.jsx)(A.a, {
                                      style: { width: "100%" },
                                      value: s,
                                      placeholder: "Ch\u1ecdn Content Code",
                                      onChange: function (t) {
                                        return e.onChangeSelectAddContentCode(
                                          t
                                        );
                                      },
                                      children: Object(k.map)(
                                        d,
                                        function (e, t) {
                                          return Object(T.jsx)(
                                            Ze,
                                            {
                                              className: "erpOption",
                                              value: e.text,
                                              children: e.text,
                                            },
                                            t
                                          );
                                        }
                                      ),
                                    }),
                                    Object(T.jsx)(R.a, {
                                      style: { width: "100%", marginTop: 20 },
                                      placeholder:
                                        "Nh\u1eadp ch\u1ee7 \u0111\u1ec1",
                                      onChange: function (t) {
                                        e.setState({
                                          chuDeInput: t.target.value,
                                        });
                                      },
                                      value: a,
                                    }),
                                    Object(T.jsx)(A.a, {
                                      style: { width: "100%", marginTop: 20 },
                                      value: u,
                                      placeholder: "Ch\u1ecdn Length Script",
                                      onChange: function (t) {
                                        return e.onChangeSelectAddSalaryIndex(
                                          t
                                        );
                                      },
                                      children: Object(k.map)(
                                        oe,
                                        function (e, t) {
                                          return Object(T.jsx)(
                                            Ze,
                                            {
                                              className: "erpOption",
                                              value: e.value,
                                              children: e.text,
                                            },
                                            t
                                          );
                                        }
                                      ),
                                    }),
                                  ],
                                }),
                                Object(T.jsxs)(S.a.Item, {
                                  wrapperCol: { offset: 9 },
                                  style: {
                                    alignItems: "center",
                                    justifyContent: "center",
                                  },
                                  children: [
                                    Object(T.jsx)(m.a, {
                                      type: "primary",
                                      className: "buttonPrimary",
                                      icon: Object(T.jsx)(q.a, {}),
                                      htmlType: "submit",
                                      children: "X\xc1C NH\u1eacN",
                                    }),
                                    Object(T.jsx)(m.a, {
                                      className: "buttonPrimary",
                                      icon: Object(T.jsx)(Q.a, {}),
                                      style: { marginLeft: 10 },
                                      onClick: Object(k.debounce)(
                                        this._onCloseModal,
                                        100
                                      ),
                                      children: "H\u1ee6Y",
                                    }),
                                  ],
                                }),
                              ],
                            }),
                          }),
                        ],
                      }),
                      Object(T.jsx)(F.a, {
                        loading: l,
                        size: "middle",
                        bordered: !0,
                        onChange: this.handleChange,
                        components: this.components,
                        style: { marginBottom: 15 },
                        rowClassName: function (e, t) {
                          if (t % 2 !== 0) return "rowBackgroundColor";
                        },
                        scroll: { x: 1500, y: 400 },
                        dataSource: n,
                        columns: _,
                        rowKey: "id",
                        pagination: n.length > 10 && { total: n.length },
                        sticky: !0,
                      }),
                      Object(T.jsx)("div", {
                        style: { height: 50 },
                        ref: this.refAddNewContent,
                      }),
                    ],
                  });
                },
              },
            ]),
            n
          );
        })(a.Component),
        et = A.a.Option,
        tt = (R.a.Search, V.a.RangePicker),
        nt = function (e) {
          var t = e.onResize,
            n = e.width,
            a = Object(j.a)(e, ["onResize", "width"]);
          return n
            ? Object(T.jsx)(x.Resizable, {
                width: n,
                height: 0,
                handle: Object(T.jsx)("span", {
                  className: "react-resizable-handle",
                  onClick: function (e) {
                    e.stopPropagation();
                  },
                }),
                onResize: t,
                draggableOpts: { enableUserSelectHack: !1 },
                children: Object(T.jsx)("th", Object(b.a)({}, a)),
              })
            : Object(T.jsx)("th", Object(b.a)({}, a));
        },
        at = (function (e) {
          Object(_.a)(n, e);
          var t = Object(f.a)(n);
          function n(e) {
            var a;
            Object(u.a)(this, n),
              ((a = t.call(this, e)).components = { header: { cell: nt } }),
              (a.getColumnSearchProps = function (e) {
                return {
                  filterDropdown: function (t) {
                    var n = t.setSelectedKeys,
                      i = t.selectedKeys,
                      o = t.confirm,
                      r = t.clearFilters;
                    return Object(T.jsxs)("div", {
                      style: { padding: 8 },
                      children: [
                        Object(T.jsx)(R.a, {
                          ref: function (e) {
                            a.searchInput = e;
                          },
                          placeholder: "Tìm kiếm",
                          value: i[0],
                          onChange: function (e) {
                            return n(e.target.value ? [e.target.value] : []);
                          },
                          onPressEnter: function () {
                            return a.handleSearch(i, o, e);
                          },
                          style: { marginBottom: 8, display: "block" },
                        }),
                        Object(T.jsxs)(N.b, {
                          children: [
                            Object(T.jsx)(m.a, {
                              type: "primary",
                              onClick: function () {
                                return a.handleSearch(i, o, e);
                              },
                              icon: Object(T.jsx)(B.a, {}),
                              size: "small",
                              style: { width: 90 },
                              children: "Search",
                            }),
                            Object(T.jsx)(m.a, {
                              onClick: function () {
                                return a.handleReset(r);
                              },
                              size: "small",
                              style: { width: 90 },
                              children: "Reset",
                            }),
                            Object(T.jsx)(m.a, {
                              type: "link",
                              size: "small",
                              onClick: function () {
                                o({ closeDropdown: !1 }),
                                  a.setState({
                                    searchText: i[0],
                                    searchedColumn: e,
                                  });
                              },
                              children: "Filter",
                            }),
                          ],
                        }),
                      ],
                    });
                  },
                  filterIcon: function (e) {
                    return Object(T.jsx)(B.a, {
                      style: { color: e ? "#1890ff" : void 0 },
                    });
                  },
                  filteredValue: null,
                  onFilter: function (t, n) {
                    return n[e]
                      ? n[e].toString().toLowerCase().includes(t.toLowerCase())
                      : "";
                  },
                  onFilterDropdownVisibleChange: function (e) {
                    e &&
                      setTimeout(function () {
                        return a.searchInput.select();
                      }, 100);
                  },
                  render: function (t) {
                    return a.state.searchedColumn === e
                      ? Object(T.jsx)(P.a, {
                          highlightStyle: {
                            backgroundColor: "#ffffff",
                            padding: 0,
                          },
                          searchWords: [a.state.searchText],
                          autoEscape: !0,
                          textToHighlight: t ? t.toString() : "",
                        })
                      : t;
                  },
                };
              }),
              (a.getColumnFilterTimeProps = function (e) {
                return {
                  filterDropdown: function (e) {
                    var t = e.setSelectedKeys,
                      n = e.selectedKeys,
                      a = e.confirm,
                      i = e.clearFilters;
                    return Object(T.jsxs)("div", {
                      style: { padding: 8 },
                      children: [
                        Object(T.jsx)("div", {
                          children: Object(T.jsx)(tt, {
                            style: { marginBottom: 8 },
                            value: n[0],
                            onChange: function (e) {
                              t(e ? [e] : []);
                            },
                          }),
                        }),
                        Object(T.jsxs)(N.b, {
                          children: [
                            Object(T.jsx)(m.a, {
                              type: "primary",
                              onClick: function () {
                                a();
                              },
                              icon: Object(T.jsx)(B.a, {}),
                              size: "small",
                              style: { width: 90, marginLeft: 10 },
                              children: "Search",
                            }),
                            Object(T.jsx)(m.a, {
                              onClick: function () {
                                return i();
                              },
                              size: "small",
                              style: { width: 90 },
                              children: "Reset",
                            }),
                          ],
                        }),
                      ],
                    });
                  },
                  filterIcon: function (e) {
                    return Object(T.jsx)(B.a, {
                      style: { color: e ? "#ffffff" : void 0 },
                    });
                  },
                  filteredValue: null,
                  onFilter: function (t, n) {
                    return n[e]
                      ? (C()(n[e]) < C()(t[1]) && C()(n[e]) > C()(t[0])) ||
                          C()(n.public_date).format("DDMMYYY") ===
                            C()(t[0]).format("DDMMYYY") ||
                          C()(n.public_date).format("DDMMYYY") ===
                            C()(t[1]).format("DDMMYYY")
                      : "";
                  },
                  onFilterDropdownVisibleChange: function (e) {},
                  render: function (t) {
                    return a.state.searchedColumn === e
                      ? Object(T.jsx)(P.a, {
                          highlightStyle: {
                            backgroundColor: "#ffc069",
                            padding: 0,
                          },
                          searchWords: [a.state.searchText],
                          autoEscape: !0,
                          textToHighlight: t ? t.toString() : "",
                        })
                      : t;
                  },
                };
              }),
              (a.handleSearch = function (e, t, n) {
                t(), a.setState({ searchText: e[0], searchedColumn: n });
              }),
              (a.onChangeSelectSalaryIndex = function (e, t) {
                var n = Object(k.map)(a.state.dataChangeUpdate, function (n) {
                  return n.id === t.id
                    ? Object(b.a)(Object(b.a)({}, n), {}, { salary_index: e })
                    : Object(b.a)({}, n);
                });
                a.setState({ dataChangeUpdate: n });
              }),
              (a.handleReset = function (e) {
                e(), a.setState({ searchText: "" });
              }),
              (a._onRefreshData = function () {
                a.setState({ isLoding: !0 }),
                  v.a.get("".concat(K, "/activity")).then(function (e) {
                    a.setState({
                      activity: e.data.data,
                      activityChangeUpdate: e.data.data,
                    });
                  }),
                  v.a.get("".concat(K, "/tenticker")).then(function (e) {
                    var t = Object(k.map)(
                        a.props.listContentCode,
                        function (e, t) {
                          return e.value;
                        }
                      ),
                      n = e.data.data
                        .filter(function (e) {
                          return t.includes(e.content_code) && 1 === e.is_new;
                        })
                        .sort(function (e, t) {
                          return t.id - e.id;
                        }),
                      i = Object(k.map)(n, function (e, t) {
                        return Object(b.a)(
                          Object(b.a)({}, e),
                          {},
                          { stt: t + 1 }
                        );
                      });
                    a.setState({
                      dataSource: i,
                      dataChangeUpdate: i,
                      newDataTest: i,
                      isLoding: !1,
                      chuDeInput: "",
                      editingKey: "",
                      originData: e.data.data,
                      ontent_code: null,
                    });
                  });
              }),
              (a.onScrollAddNewContent = function () {
                a.refAddNewContent.current.scrollIntoView({
                  behavior: "smooth",
                });
              }),
              (a.onUpdateActivity = function (e) {
                v.a.get("".concat(K, "/activity")).then(function (t) {
                  var n = {
                    data: [
                      null,
                      C()().format("YYYY-MM-DD HH:mm:ss"),
                      e,
                      a.props.data[a.props.id + 1][me],
                    ],
                  };
                  v.a.post("".concat(K, "/activity/add"), n).then(function (e) {
                    v.a.get("".concat(K, "/activity")).then(function (e) {
                      a.setState({
                        activity: e.data.data,
                        activityChangeUpdate: e.data.data,
                      });
                    });
                  }),
                    a.setState({
                      activity: t.data.data,
                      activityChangeUpdate: t.data.data,
                    });
                });
              }),
              (a._isEditing = function (e) {
                return e.id === a.state.editingKey;
              }),
              (a.onChangeLinkContent = function (e, t) {
                var n = Object(k.map)(a.state.dataChangeUpdate, function (n) {
                  return n.id === t.id
                    ? Object(b.a)(Object(b.a)({}, n), {}, { content_raw: e })
                    : Object(b.a)({}, n);
                });
                a.setState({ dataChangeUpdate: n });
              }),
              (a.onChangeLinkContentFinal = function (e, t) {
                var n = Object(k.map)(a.state.dataChangeUpdate, function (n) {
                  return n.id === t.id
                    ? Object(b.a)(Object(b.a)({}, n), {}, { content_final: e })
                    : Object(b.a)({}, n);
                });
                a.setState({ dataChangeUpdate: n });
              }),
              (a.onChangeLinkContentNote = function (e, t) {
                var n = Object(k.map)(a.state.dataChangeUpdate, function (n) {
                  return n.id === t.id
                    ? Object(b.a)(Object(b.a)({}, n), {}, { content_note: e })
                    : Object(b.a)({}, n);
                });
                a.setState({ dataChangeUpdate: n });
              }),
              (a.onChangeChuDe = function (e, t) {
                var n = Object(k.map)(a.state.dataChangeUpdate, function (n) {
                  return n.id === t.id
                    ? Object(b.a)(Object(b.a)({}, n), {}, { full_title: e })
                    : Object(b.a)({}, n);
                });
                a.setState({ dataChangeUpdate: n });
              }),
              (a.onChangeSelect = function (e, t) {
                var n = Object(k.map)(a.state.dataChangeUpdate, function (n) {
                  return n.id === t.id
                    ? Object(b.a)(
                        Object(b.a)({}, n),
                        {},
                        {
                          writer_name: e[0],
                          writer_code: e[1],
                          writer_nick: e[2],
                        }
                      )
                    : Object(b.a)({}, n);
                });
                a.setState({ dataChangeUpdate: n });
              }),
              (a.onChangeSelectContentCode = function (e, t) {
                var n = Object(k.map)(a.state.dataChangeUpdate, function (n) {
                  return n.id === t.id
                    ? Object(b.a)(Object(b.a)({}, n), {}, { content_code: e })
                    : Object(b.a)({}, n);
                });
                a.setState({ dataChangeUpdate: n });
              }),
              (a.onDuyetCW = function (e) {
                var t = Object(k.map)(a.state.dataChangeUpdate, function (t) {
                  return t.id === e.id
                    ? Object(b.a)(
                        Object(b.a)({}, t),
                        {},
                        { content_status: 0 === e.content_status ? 1 : 0 }
                      )
                    : Object(b.a)({}, t);
                });
                a.setState({ dataChangeUpdate: t });
              }),
              (a.onSubmitUpdate = function (e) {
                var t = {
                  data_id: e.id,
                  data: [
                    e.id,
                    e.content_code,
                    e.writer_code,
                    e.full_title,
                    e.content_raw,
                    e.writer_name,
                    e.content_status,
                    e.content_final,
                    e.content_note,
                    1 !== e.is_first_content_final ||
                    Object(k.isEmpty)(e.content_final)
                      ? null === e.content_date
                        ? null
                        : C()(e.content_date).format("YYYY-MM-DD HH:mm:ss")
                      : C()().format("YYYY-MM-DD HH:mm:ss"),
                    e.composer_code,
                    e.composer_name,
                    1 !== e.is_first_audio || Object(k.isEmpty)(e.link_audio)
                      ? null === e.audio_date
                        ? null
                        : C()(e.audio_date).format("YYYY-MM-DD HH:mm:ss")
                      : C()().format("YYYY-MM-DD HH:mm:ss"),
                    e.link_audio,
                    e.audio_status,
                    e.audio_note,
                    e.writer_nick,
                    e.composer_nick,
                    e.editor_name,
                    1 !== e.is_first_video || Object(k.isEmpty)(e.link_video)
                      ? null === e.video_date
                        ? null
                        : C()(e.video_date).format("YYYY-MM-DD HH:mm:ss")
                      : C()().format("YYYY-MM-DD HH:mm:ss"),
                    e.footage,
                    e.editor_code,
                    e.link_video,
                    e.video_status,
                    e.video_note,
                    e.link_youtube,
                    1 !== e.is_first_public || Object(k.isEmpty)(e.link_youtube)
                      ? null === e.public_date
                        ? null
                        : C()(e.public_date).format("YYYY-MM-DD HH:mm:ss")
                      : C()().format("YYYY-MM-DD HH:mm:ss"),
                    Object(k.isEmpty)(e.link_youtube) || 1 !== e.is_first_public
                      ? 1
                      : 0,
                    (!Object(k.isEmpty)(e.content_final) &&
                      1 === e.is_first_content_final) ||
                    0 === e.is_first_content_final
                      ? 0
                      : 1,
                    (!Object(k.isEmpty)(e.link_audio) &&
                      1 === e.is_first_audio) ||
                    0 === e.is_first_audio
                      ? 0
                      : 1,
                    (!Object(k.isEmpty)(e.link_video) &&
                      1 === e.is_first_video) ||
                    0 === e.is_first_video
                      ? 0
                      : 1,
                    null === e.add_composer_date
                      ? null
                      : C()(e.add_composer_date).format("YYYY-MM-DD HH:mm:ss"),
                    null === e.add_ve_date
                      ? null
                      : C()(e.add_ve_date).format("YYYY-MM-DD HH:mm:ss"),
                    e.content_status !==
                    a.state.dataSource[e.stt - 1].content_status
                      ? C()().format("YYYY-MM-DD HH:mm:ss")
                      : null === e.confirm_content_date
                      ? null
                      : C()(e.confirm_content_date).format(
                          "YYYY-MM-DD HH:mm:ss"
                        ),
                    null === e.confirm_audio_date
                      ? null
                      : C()(e.confirm_audio_date).format("YYYY-MM-DD HH:mm:ss"),
                    e.salary_index,
                    1,
                  ],
                };
                v.a.put("".concat(K, "/tenticker"), t).then(function (t) {
                  if (
                    (O.a.success({
                      message: "C\u1eadp nh\u1eadt th\xe0nh c\xf4ng",
                      style: { backgroundColor: "#f5fff8" },
                    }),
                    e.content_code !==
                      a.state.dataSource[e.stt - 1].content_code)
                  ) {
                    var n =
                      "Thay \u0111\u1ed5i Content Code c\u1ee7a ch\u1ee7 \u0111\u1ec1 "
                        .concat(
                          a.state.dataSource[e.stt - 1].full_title,
                          " t\u1eeb "
                        )
                        .concat(
                          a.state.dataSource[e.stt - 1].content_code,
                          " th\xe0nh "
                        )
                        .concat(e.content_code);
                    a.onUpdateActivity(n);
                  }
                  if (
                    e.full_title !== a.state.dataSource[e.stt - 1].full_title
                  ) {
                    var i =
                      "Thay \u0111\u1ed5i Full Title c\u1ee7a ch\u1ee7 \u0111\u1ec1 "
                        .concat(
                          a.state.dataSource[e.stt - 1].full_title,
                          " t\u1eeb "
                        )
                        .concat(
                          a.state.dataSource[e.stt - 1].full_title,
                          " th\xe0nh "
                        )
                        .concat(e.full_title);
                    a.onUpdateActivity(i);
                  }
                  if (
                    e.content_raw !== a.state.dataSource[e.stt - 1].content_raw
                  ) {
                    var o =
                      "Thay \u0111\u1ed5i Content Raw c\u1ee7a ch\u1ee7 \u0111\u1ec1 "
                        .concat(
                          a.state.dataSource[e.stt - 1].full_title,
                          " t\u1eeb "
                        )
                        .concat(
                          a.state.dataSource[e.stt - 1].content_raw,
                          " th\xe0nh "
                        )
                        .concat(e.content_raw);
                    a.onUpdateActivity(o);
                  }
                  if (
                    e.writer_name !== a.state.dataSource[e.stt - 1].writer_name
                  ) {
                    var r =
                      "Thay \u0111\u1ed5i Writer Name c\u1ee7a ch\u1ee7 \u0111\u1ec1 "
                        .concat(
                          a.state.dataSource[e.stt - 1].full_title,
                          " t\u1eeb "
                        )
                        .concat(
                          a.state.dataSource[e.stt - 1].writer_name,
                          " th\xe0nh "
                        )
                        .concat(e.writer_name);
                    a.onUpdateActivity(r);
                  }
                  if (
                    e.content_status !==
                    a.state.dataSource[e.stt - 1].content_status
                  ) {
                    var c =
                      "Thay \u0111\u1ed5i Content Status c\u1ee7a ch\u1ee7 \u0111\u1ec1 "
                        .concat(
                          a.state.dataSource[e.stt - 1].full_title,
                          " t\u1eeb "
                        )
                        .concat(
                          0 === a.state.dataSource[e.stt - 1].content_status
                            ? "Ch\u01b0a duy\u1ec7t"
                            : "\u0110\xe3 duy\u1ec7t",
                          " th\xe0nh "
                        )
                        .concat(
                          0 === e.content_status
                            ? "Ch\u01b0a duy\u1ec7t"
                            : "\u0110\xe3 duy\u1ec7t"
                        );
                    a.onUpdateActivity(c);
                  }
                  if (
                    e.content_final !==
                    a.state.dataSource[e.stt - 1].content_final
                  ) {
                    var l =
                      "Thay \u0111\u1ed5i Content Final c\u1ee7a ch\u1ee7 \u0111\u1ec1 "
                        .concat(
                          a.state.dataSource[e.stt - 1].full_title,
                          " t\u1eeb "
                        )
                        .concat(
                          a.state.dataSource[e.stt - 1].content_final,
                          " th\xe0nh "
                        )
                        .concat(e.content_final);
                    a.onUpdateActivity(l);
                  }
                  if (
                    e.content_note !==
                    a.state.dataSource[e.stt - 1].content_note
                  ) {
                    var s =
                      "Thay \u0111\u1ed5i Mô tả youtube c\u1ee7a ch\u1ee7 \u0111\u1ec1 "
                        .concat(
                          a.state.dataSource[e.stt - 1].full_title,
                          " t\u1eeb "
                        )
                        .concat(
                          a.state.dataSource[e.stt - 1].content_note,
                          " th\xe0nh "
                        )
                        .concat(e.content_note);
                    a.onUpdateActivity(s);
                  }
                  if (
                    e.salary_index !==
                    a.state.dataSource[e.stt - 1].salary_index
                  ) {
                    var d =
                      "Thay \u0111\u1ed5i Salary Index c\u1ee7a ch\u1ee7 \u0111\u1ec1 "
                        .concat(
                          a.state.dataSource[e.stt - 1].full_title,
                          " t\u1eeb "
                        )
                        .concat(
                          a.state.dataSource[e.stt - 1].salary_index,
                          " th\xe0nh "
                        )
                        .concat(e.salary_index);
                    a.onUpdateActivity(d);
                  }
                  a._onRefreshData();
                }),
                  a.setState({ editingKey: "" });
              }),
              (a.onCancelEdit = function (e) {
                var t = Object(k.map)(
                  a.state.dataChangeUpdate,
                  function (t, n) {
                    return t.id === e.id
                      ? Object(b.a)({}, a.state.dataSource[n])
                      : Object(b.a)({}, t);
                  }
                );
                a.setState({ editingKey: "", dataChangeUpdate: t });
              }),
              (a.onDelete = function (e) {
                ee()({
                  title: "Th\xf4ng b\xe1o",
                  content: "B\u1ea1n c\xf3 ch\u1eafc mu\u1ed1n xo\xe1",
                  okCancel: function () {},
                  onOk: function () {
                    var t = { data: { data_id: [e.id] } };
                    v.a
                      .delete("".concat(K, "/tenticker"), t)
                      .then(function (t) {
                        O.a.success({
                          message: "Xo\xe1 th\xe0nh c\xf4ng",
                          style: { backgroundColor: "#f5fff8" },
                        });
                        var n =
                          "Xo\xe1 d\xf2ng c\xf3 ch\u1ee7 \u0111\u1ec1 l\xe0 ".concat(
                            a.state.dataSource[e.stt - 1].full_title
                          );
                        a.onUpdateActivity(n), a._onRefreshData();
                      });
                  },
                });
              }),
              (a._onChangeEditingKey = function (e) {
                var t = Object(k.map)(
                  a.state.dataChangeUpdate,
                  function (e, t) {
                    return e.id === a.state.id
                      ? Object(b.a)({}, a.state.dataSource[t])
                      : Object(b.a)({}, e);
                  }
                );
                a.setState({ editingKey: e.id, dataChangeUpdate: t });
              }),
              (a.handleResize = function (e) {
                return function (t, n) {
                  var i = n.size;
                  a.setState(function (t) {
                    var n = t.column,
                      a = Object(d.a)(n);
                    return (
                      (a[e] = Object(b.a)(
                        Object(b.a)({}, a[e]),
                        {},
                        { width: i.width }
                      )),
                      { column: a }
                    );
                  });
                };
              }),
              (a._onCloseModal = function () {
                a.setState({ isShowModal: !1, chuDeInput: "" });
              }),
              (a.onConfirmDuyet = function () {
                Object(k.isEmpty)(a.state.chuDeInput)
                  ? O.a.warning({
                      message: "Th\xf4ng b\xe1o",
                      description: "Ch\u01b0a nh\u1eadp content title!",
                    })
                  : Object(k.isEmpty)(a.state.content_code)
                  ? O.a.warning({
                      message: "Th\xf4ng b\xe1o",
                      description: "Ch\u01b0a ch\u1ecdn content code!",
                    })
                  : null === a.state.salary_index
                  ? O.a.warning({
                      message: "Th\xf4ng b\xe1o",
                      description: "Ch\u01b0a ch\u1ecdn length script!",
                    })
                  : (a.addTitle(), a.setState({ isShowModal: !1 }));
              }),
              (a._handleSearch = function (e) {
                var t = a.state.dataSource.filter(function (t) {
                  var n = t.full_title;
                  return (
                    (n = n.toLowerCase()),
                    (e.target.value = e.target.value.toLowerCase()),
                    n.includes(e.target.value)
                  );
                });
                a.setState({
                  dataChangeUpdate: t,
                  searchTextMain: e.target.value,
                });
              }),
              (a.handleChange = function (e, t, n) {
                var i = Object(k.filter)(a.state.newDataTest, function (e) {
                  return (
                    (t.content_code
                      ? Object(k.includes)(t.content_code, e.content_code)
                      : e) &&
                    (t.content_status
                      ? Object(k.includes)(t.content_status, e.content_status)
                      : e) &&
                    (t.full_title
                      ? Object(k.includes)(t.full_title, e.full_title)
                      : e) &&
                    (t.salary_index
                      ? Object(k.includes)(t.salary_index, e.salary_index)
                      : e) &&
                    (t.writer_name
                      ? Object(k.includes)(t.writer_name, e.writer_name)
                      : e) &&
                    (t.public_date
                      ? (C()(e.public_date) <
                          C()(Object(k.get)(t, "public_date[0][1]")) &&
                          C()(e.public_date) >
                            C()(Object(k.get)(t, "public_date[0][0]"))) ||
                        C()(e.public_date).format("DDMMYYY") ===
                          C()(Object(k.get)(t, "public_date[0][0]")).format(
                            "DDMMYYY"
                          ) ||
                        C()(e.public_date).format("DDMMYYY") ===
                          C()(Object(k.get)(t, "public_date[0][1]")).format(
                            "DDMMYYY"
                          )
                      : e)
                  );
                });
                (t.content_code ||
                  t.content_status ||
                  t.full_title ||
                  t.public_date ||
                  t.salary_index ||
                  t.writer_name) &&
                  a.setState({ dataChangeUpdate: i }),
                  a.setState({ filteredInfo: t, sortedInfo: n }, function () {
                    var e = Object(k.map)(a.state.column, function (e, t) {
                      return 1 === t
                        ? Object(b.a)(
                            Object(b.a)({}, e),
                            {},
                            { filteredValue: a.state.filteredInfo.content_code }
                          )
                        : Object(b.a)({}, e);
                    });
                    a.setState({ column: e });
                  });
              }),
              (a.clearFilters = function () {
                a.setState({ filteredInfo: null });
              }),
              (a.clearSorters = function () {
                a.setState({ sortedInfo: null });
              }),
              (a.clearAll = function () {
                a.setState({
                  filteredInfo: null,
                  sortedInfo: null,
                  searchTextMain: "",
                  dataChangeUpdate: a.state.dataSource,
                });
              }),
              (a.onChangeSelectAddContentCode = function (e) {
                a.setState({ content_code: e });
              }),
              (a.onChangeSelectAddSalaryIndex = function (e) {
                a.setState({ salary_index: e });
              });
            for (
              var o = e.data,
                r = e.listContentCode,
                c = [],
                l = [],
                s = [],
                h = 0;
              h < o.length;
              h++
            )
              1 == o[h][_e] &&
                c.push({ value: o[h][me], text: o[h][me], nick: o[h][ye] }),
                1 == o[h][be] &&
                  l.push({ value: o[h][me], text: o[h][me], nick: o[h][ye] }),
                1 == o[h][ge] && s.push({ value: o[h][me], text: o[h][me] });
            return (
              (a.state = {
                chuDeInput: "",
                dataSource: [],
                dataChangeUpdate: [],
                newDataTest: [],
                editingKey: "",
                isShowModal: !1,
                filteredInfo: null,
                searchTextMain: "",
                sortedInfo: null,
                activityChangeUpdate: [],
                activity: [],
                isLoding: !1,
                listContentCode: r,
                originData: [],
                salary_index: null,
                content_code: null,
                column: [
                  {
                    title: "STT",
                    dataIndex: "id",
                    key: "id",
                    width: 70,
                    fixed: "left",
                    defaultSortOrder: "ascend",
                    sorter: function (e, t) {
                      return e.stt - t.stt;
                    },
                    render: function (e, t) {
                      return {
                        props: {
                          style: { background: t.stt % 2 === 0 && "#fbfbfb" },
                        },
                        children: Object(T.jsx)("div", { children: e }),
                      };
                    },
                  },
                  {
                    title: "Content Code",
                    dataIndex: "content_code",
                    key: "content_code",
                    fixed: "left",
                    filteredValue: null,
                    filters: r,
                    onFilter: function (e, t) {
                      return 0 === t.content_code.indexOf(e);
                    },
                    sorter: function (e, t) {
                      return e.content_code.length - t.content_code.length;
                    },
                    ellipsis: { showTitle: !1 },
                    width: 160,
                    render: function (e, t) {
                      var n = a._isEditing(t);
                      return {
                        props: {
                          style: { background: t.stt % 2 === 0 && "#fbfbfb" },
                        },
                        children: n
                          ? Object(T.jsx)(A.a, {
                              disabled: !n,
                              style: { width: "100%" },
                              value: t.content_code,
                              onChange: function (e) {
                                return a.onChangeSelectContentCode(e, t);
                              },
                              children: Object(k.map)(r, function (e, t) {
                                return Object(T.jsx)(
                                  et,
                                  {
                                    className: "erpOption",
                                    value: e.text,
                                    children: e.text,
                                  },
                                  t
                                );
                              }),
                            })
                          : Object(T.jsx)("div", { children: t.content_code }),
                      };
                    },
                  },
                  {
                    title: "Length Script",
                    dataIndex: "salary_index",
                    key: "salary_index",
                    filteredValue: null,
                    fixed: "left",
                    filters: oe,
                    onFilter: function (e, t) {
                      return t.salary_index === e;
                    },
                    sorter: function (e, t) {
                      return e.salary_index - t.salary_index;
                    },
                    ellipsis: { showTitle: !1 },
                    width: 160,
                    render: function (e, t) {
                      var n = a._isEditing(t);
                      return {
                        props: {
                          style: { background: t.stt % 2 === 0 && "#fbfbfb" },
                        },
                        children: n
                          ? Object(T.jsx)(A.a, {
                              disabled: !n,
                              style: { width: "100%" },
                              value: t.salary_index,
                              onChange: function (e) {
                                return a.onChangeSelectSalaryIndex(e, t);
                              },
                              children: Object(k.map)(oe, function (e, t) {
                                return Object(T.jsx)(
                                  et,
                                  {
                                    className: "erpOption",
                                    value: e.value,
                                    children: e.text,
                                  },
                                  t
                                );
                              }),
                            })
                          : Object(T.jsx)("div", {
                              children: Object(k.find)(oe, function (e) {
                                return e.value === t.salary_index;
                              }).text,
                            }),
                      };
                    },
                  },
                  Object(b.a)(
                    Object(b.a)(
                      {
                        title: "Full Title",
                        dataIndex: "full_title",
                        fixed: "left",
                        key: "full_title",
                        sorter: function (e, t) {
                          return e.full_title.length - t.full_title.length;
                        },
                        ellipsis: { showTitle: !1 },
                        width: 300,
                      },
                      a.getColumnSearchProps("full_title")
                    ),
                    {},
                    {
                      render: function (e, t) {
                        var n = a._isEditing(t);
                        return {
                          props: {
                            style: { background: t.stt % 2 === 0 && "#fbfbfb" },
                          },
                          children: n
                            ? Object(T.jsx)(R.a, {
                                style: { width: "100%" },
                                disabled: !n,
                                value: t.full_title,
                                onChange: function (e) {
                                  return a.onChangeChuDe(e.target.value, t);
                                },
                              })
                            : Object(T.jsx)("div", { children: t.full_title }),
                        };
                      },
                    }
                  ),
                  {
                    title: "Content Raw",
                    dataIndex: "content_raw",
                    key: "content_raw",
                    ellipsis: { showTitle: !1 },
                    width: 150,
                    sorter: function (e, t) {
                      return e.content_raw.length - t.content_raw.length;
                    },
                    render: function (e, t) {
                      var n = a._isEditing(t);
                      return n
                        ? Object(T.jsx)(R.a, {
                            style: { width: "100%" },
                            disabled: !n,
                            value: t.content_raw,
                            onChange: function (e) {
                              return a.onChangeLinkContent(e.target.value, t);
                            },
                          })
                        : Object(T.jsx)("a", {
                            target: "_blank",
                            href: t.content_raw,
                            children: t.content_raw,
                          });
                    },
                  },
                  {
                    title: "Writer Name",
                    dataIndex: "writer_name",
                    key: "writer_name",
                    sorter: function (e, t) {
                      return e.writer_name.length - t.writer_name.length;
                    },
                    ellipsis: { showTitle: !1 },
                    filters: c,
                    filteredValue: null,
                    onFilter: function (e, t) {
                      return 0 === t.writer_name.indexOf(e);
                    },
                    width: 150,
                    render: function (e, t) {
                      var n = a._isEditing(t);
                      return n
                        ? Object(T.jsx)(A.a, {
                            disabled: !n,
                            style: { width: "100%" },
                            value: [
                              t.writer_name,
                              t.writer_code,
                              t.writer_nick,
                            ],
                            onChange: function (e) {
                              return a.onChangeSelect(e, t);
                            },
                            children: Object(k.map)(c, function (e, t) {
                              return Object(T.jsx)(
                                et,
                                {
                                  className: "erpOption",
                                  value: [e.text, e.value, e.nick],
                                  children: e.text,
                                },
                                t
                              );
                            }),
                          })
                        : Object(T.jsx)("div", { children: t.writer_name });
                    },
                  },
                  {
                    title: "Content Status",
                    key: "content_status",
                    dataIndex: "content_status",
                    filters: [
                      { text: "\u0110\xe3 duy\u1ec7t", value: 1 },
                      { text: "Ch\u01b0a duy\u1ec7t", value: 0 },
                    ],
                    filteredValue: null,
                    onFilter: function (e, t) {
                      return t.content_status === e;
                    },
                    sorter: function (e, t) {
                      return e.content_status - t.content_status;
                    },
                    ellipsis: { showTitle: !1 },
                    width: 165,
                    render: function (e, t) {
                      var n = a._isEditing(t);
                      return Object(T.jsx)(m.a, {
                        style: {
                          color: "white",
                          backgroundColor:
                            0 === t.content_status ? "red" : "#238c31",
                          fontWeight: "bold",
                          borderRadius: 5,
                          borderColor:
                            0 === t.content_status ? "red" : "#238c31",
                        },
                        type: "primary",
                        disabled: !n,
                        onClick: function () {
                          return a.onDuyetCW(t);
                        },
                        children:
                          0 === t.content_status
                            ? "Ch\u01b0a duy\u1ec7t"
                            : "\u0110\xe3 duy\u1ec7t",
                      });
                    },
                  },
                  {
                    title: "Content Final",
                    dataIndex: "content_final",
                    key: "content_final",
                    sorter: function (e, t) {
                      return e.content_final.length - t.content_final.length;
                    },
                    ellipsis: { showTitle: !1 },
                    width: 130,
                    render: function (e, t) {
                      var n = a._isEditing(t);
                      return n
                        ? Object(T.jsx)(R.a, {
                            style: { width: "100%" },
                            disabled: !n,
                            value: t.content_final,
                            onChange: function (e) {
                              return a.onChangeLinkContentFinal(
                                e.target.value,
                                t
                              );
                            },
                          })
                        : Object(T.jsx)("a", {
                            target: "_blank",
                            href: t.content_final,
                            children: t.content_final,
                          });
                    },
                  },
                  {
                    title: "Mô tả youtube",
                    dataIndex: "content_note",
                    key: "content_note",
                    sorter: function (e, t) {
                      return e.content_note.length - t.content_note.length;
                    },
                    ellipsis: { showTitle: !1 },
                    width: 100,
                    render: function (e, t) {
                      var n = a._isEditing(t);
                      return n
                        ? Object(T.jsx)(R.a, {
                            style: { width: "100%" },
                            disabled: !n,
                            value: t.content_note,
                            onChange: function (e) {
                              return a.onChangeLinkContentNote(
                                e.target.value,
                                t
                              );
                            },
                          })
                        : Object(T.jsx)("div", { children: t.content_note });
                    },
                  },
                  {
                    title: "Link Youtube",
                    dataIndex: "link_youtube",
                    key: "link_youtube",
                    sorter: function (e, t) {
                      return e.link_youtube.length - t.link_youtube.length;
                    },
                    ellipsis: { showTitle: !1 },
                    width: 130,
                    render: function (e, t) {
                      return Object(T.jsx)("a", {
                        target: "_blank",
                        href: t.link_youtube,
                        children: t.link_youtube,
                      });
                    },
                  },
                  Object(b.a)(
                    Object(b.a)(
                      {
                        title: "Public Date",
                        dataIndex: "public_date",
                        key: "public_date",
                        sorter: function (e, t) {
                          return (
                            C()(e.public_date).unix() -
                            C()(t.public_date).unix()
                          );
                        },
                      },
                      a.getColumnFilterTimeProps("public_date")
                    ),
                    {},
                    {
                      ellipsis: { showTitle: !1 },
                      width: 150,
                      render: function (e, t) {
                        return Object(T.jsx)("div", {
                          children: Object(k.isEmpty)(e)
                            ? ""
                            : C()(e).format("DD-MM-YYYY"),
                        });
                      },
                    }
                  ),
                  {
                    title: "Thao t\xe1c",
                    key: "thaoTac",
                    align: "center",
                    fixed: "right",
                    width: 155,
                    render: function (e) {
                      var t = a._isEditing(e);
                      return {
                        props: {
                          style: { background: e.stt % 2 === 0 && "#fbfbfb" },
                        },
                        children: Object(T.jsx)(T.Fragment, {
                          children: t
                            ? Object(T.jsxs)(T.Fragment, {
                                children: [
                                  Object(T.jsx)(m.a, {
                                    style: {
                                      color: "white",
                                      backgroundColor: "#238c31",
                                      fontWeight: "bold",
                                      borderRadius: 5,
                                      borderColor: "#238c31",
                                    },
                                    type: "primary",
                                    icon: Object(T.jsx)(G.a, {}),
                                    onClick: function () {
                                      return a.onSubmitUpdate(e);
                                    },
                                  }),
                                  Object(T.jsx)("span", {
                                    children: "\xa0\xa0\xa0",
                                  }),
                                  Object(T.jsx)(m.a, {
                                    style: {
                                      color: "white",
                                      backgroundColor: "#238c31",
                                      fontWeight: "bold",
                                      borderRadius: 5,
                                      borderColor: "#238c31",
                                    },
                                    type: "primary",
                                    icon: Object(T.jsx)(J.a, {}),
                                    onClick: function () {
                                      return a.onCancelEdit(e);
                                    },
                                  }),
                                  Object(T.jsx)("span", {
                                    children: "\xa0\xa0\xa0",
                                  }),
                                ],
                              })
                            : Object(T.jsx)(m.a, {
                                style: {
                                  color: "white",
                                  backgroundColor: "#238c31",
                                  fontWeight: "bold",
                                  borderRadius: 5,
                                  borderColor: "#238c31",
                                },
                                type: "primary",
                                onClick: function () {
                                  return a._onChangeEditingKey(e);
                                },
                                children: "S\u1eeda",
                              }),
                        }),
                      };
                    },
                  },
                ],
                searchText: "",
                searchedColumn: "",
              }),
              (a.refAddNewContent = i.a.createRef()),
              a
            );
          }
          return (
            Object(h.a)(n, [
              {
                key: "componentDidMount",
                value: function () {
                  (this.mounted = !0), this._onRefreshData();
                },
              },
              {
                key: "UNSAFE_componentWillReceiveProps",
                value: function (e) {
                  var t = this;
                  if (
                    this.props !== e &&
                    e.listContentCode &&
                    e.listContentCode !== this.props.listContentCode
                  ) {
                    var n = Object(d.a)(this.state.column),
                      a = Object(b.a)({}, n[1]);
                    (a.filters = e.listContentCode),
                      (a.render = function (n, a) {
                        var i = t._isEditing(a);
                        return {
                          props: {
                            style: { background: a.stt % 2 === 0 && "#fbfbfb" },
                          },
                          children: i
                            ? Object(T.jsx)(A.a, {
                                disabled: !i,
                                style: { width: "100%" },
                                value: a.content_code,
                                onChange: function (e) {
                                  return t.onChangeSelectContentCode(e, a);
                                },
                                children: Object(k.map)(
                                  e.listContentCode,
                                  function (e, t) {
                                    return Object(T.jsx)(
                                      et,
                                      {
                                        className: "erpOption",
                                        value: e.text,
                                        children: e.text,
                                      },
                                      t
                                    );
                                  }
                                ),
                              })
                            : Object(T.jsx)("div", {
                                children: a.content_code,
                              }),
                        };
                      }),
                      (n[1] = a),
                      this.mounted &&
                        this.setState(
                          { column: n, listContentCode: e.listContentCode },
                          function () {
                            t._onRefreshData();
                          }
                        );
                  }
                },
              },
              {
                key: "componentWillUnmount",
                value: function () {
                  this.mounted = !1;
                },
              },
              {
                key: "addTitle",
                value: function () {
                  var e = this,
                    t = {
                      data: [
                        Object(k.isEmpty)(
                          this.state.originData[
                            this.state.originData.length - 1
                          ]
                        )
                          ? 0
                          : this.state.originData[
                              this.state.originData.length - 1
                            ].id + 1,
                        this.state.content_code,
                        "",
                        this.state.chuDeInput,
                        "",
                        "",
                        0,
                        "",
                        "",
                        null,
                        "",
                        "",
                        null,
                        "",
                        0,
                        "",
                        "",
                        "",
                        "",
                        null,
                        "",
                        "",
                        "",
                        0,
                        "",
                        "",
                        null,
                        1,
                        1,
                        1,
                        1,
                        null,
                        null,
                        null,
                        null,
                        this.state.salary_index,
                        1,
                      ],
                    };
                  v.a
                    .post("".concat(K, "/tenticker/add"), t)
                    .then(function (t) {
                      O.a.success({
                        message:
                          "Th\xeam ch\u1ee7 \u0111\u1ec1 th\xe0nh c\xf4ng",
                        style: { backgroundColor: "#f5fff8" },
                      });
                      var n = "Th\xeam ch\u1ee7 \u0111\u1ec1: "
                        .concat(e.state.chuDeInput, " v\u1edbi Content Code: ")
                        .concat(e.state.content_code, " v\xe0 Salary Index: ")
                        .concat(e.state.salary_index);
                      e.onUpdateActivity(n),
                        e.onScrollAddNewContent(),
                        e._onRefreshData();
                    });
                },
              },
              {
                key: "render",
                value: function () {
                  var e = this,
                    t = this.state,
                    n = t.dataChangeUpdate,
                    a = t.chuDeInput,
                    i = t.column,
                    o = t.isShowModal,
                    r = t.filteredInfo,
                    c = t.sortedInfo,
                    l = t.isLoding,
                    s = t.content_code,
                    d = t.listContentCode,
                    u = t.salary_index,
                    h = t.searchTextMain,
                    _ = Object(k.map)(i, function (t, n) {
                      switch (n) {
                        case 0:
                          return Object(b.a)(
                            Object(b.a)({}, t),
                            {},
                            {
                              sortOrder: Object(k.isEmpty)(c)
                                ? null
                                : "stt" === c.columnKey && c.order,
                              onHeaderCell: function (t) {
                                return {
                                  width: t.width,
                                  onResize: e.handleResize(n),
                                };
                              },
                            }
                          );
                        case 1:
                          return Object(b.a)(
                            Object(b.a)({}, t),
                            {},
                            {
                              filteredValue: Object(k.isEmpty)(r)
                                ? null
                                : r.content_code,
                              sortOrder: Object(k.isEmpty)(c)
                                ? null
                                : "content_code" === c.columnKey && c.order,
                              onHeaderCell: function (t) {
                                return {
                                  width: t.width,
                                  onResize: e.handleResize(n),
                                };
                              },
                            }
                          );
                        case 2:
                          return Object(b.a)(
                            Object(b.a)({}, t),
                            {},
                            {
                              filteredValue: Object(k.isEmpty)(r)
                                ? null
                                : r.salary_index,
                              sortOrder: Object(k.isEmpty)(c)
                                ? null
                                : "salary_index" === c.columnKey && c.order,
                              onHeaderCell: function (t) {
                                return {
                                  width: t.width,
                                  onResize: e.handleResize(n),
                                };
                              },
                            }
                          );
                        case 3:
                          return Object(b.a)(
                            Object(b.a)({}, t),
                            {},
                            {
                              filteredValue: Object(k.isEmpty)(r)
                                ? null
                                : r.full_title,
                              sortOrder: Object(k.isEmpty)(c)
                                ? null
                                : "full_title" === c.columnKey && c.order,
                              onHeaderCell: function (t) {
                                return {
                                  width: t.width,
                                  onResize: e.handleResize(n),
                                };
                              },
                            }
                          );
                        case 4:
                          return Object(b.a)(
                            Object(b.a)({}, t),
                            {},
                            {
                              sortOrder: Object(k.isEmpty)(c)
                                ? null
                                : "content_raw" === c.columnKey && c.order,
                              onHeaderCell: function (t) {
                                return {
                                  width: t.width,
                                  onResize: e.handleResize(n),
                                };
                              },
                            }
                          );
                        case 5:
                          return Object(b.a)(
                            Object(b.a)({}, t),
                            {},
                            {
                              filteredValue: Object(k.isEmpty)(r)
                                ? null
                                : r.writer_name,
                              sortOrder: Object(k.isEmpty)(c)
                                ? null
                                : "writer_name" === c.columnKey && c.order,
                              onHeaderCell: function (t) {
                                return {
                                  width: t.width,
                                  onResize: e.handleResize(n),
                                };
                              },
                            }
                          );
                        case 6:
                          return Object(b.a)(
                            Object(b.a)({}, t),
                            {},
                            {
                              filteredValue: Object(k.isEmpty)(r)
                                ? null
                                : r.content_status,
                              sortOrder: Object(k.isEmpty)(c)
                                ? null
                                : "content_status" === c.columnKey && c.order,
                              onHeaderCell: function (t) {
                                return {
                                  width: t.width,
                                  onResize: e.handleResize(n),
                                };
                              },
                            }
                          );
                        case 7:
                          return Object(b.a)(
                            Object(b.a)({}, t),
                            {},
                            {
                              sortOrder: Object(k.isEmpty)(c)
                                ? null
                                : "content_final" === c.columnKey && c.order,
                              onHeaderCell: function (t) {
                                return {
                                  width: t.width,
                                  onResize: e.handleResize(n),
                                };
                              },
                            }
                          );
                        case 8:
                          return Object(b.a)(
                            Object(b.a)({}, t),
                            {},
                            {
                              sortOrder: Object(k.isEmpty)(c)
                                ? null
                                : "content_note" === c.columnKey && c.order,
                              onHeaderCell: function (t) {
                                return {
                                  width: t.width,
                                  onResize: e.handleResize(n),
                                };
                              },
                            }
                          );
                        case 9:
                          return Object(b.a)(
                            Object(b.a)({}, t),
                            {},
                            {
                              sortOrder: Object(k.isEmpty)(c)
                                ? null
                                : "link_youtube" === c.columnKey && c.order,
                              onHeaderCell: function (t) {
                                return {
                                  width: t.width,
                                  onResize: e.handleResize(n),
                                };
                              },
                            }
                          );
                        case 10:
                          return Object(b.a)(
                            Object(b.a)({}, t),
                            {},
                            {
                              filteredValue: Object(k.isEmpty)(r)
                                ? null
                                : r.public_date,
                              sortOrder: Object(k.isEmpty)(c)
                                ? null
                                : "public_date" === c.columnKey && c.order,
                              onHeaderCell: function (t) {
                                return {
                                  width: t.width,
                                  onResize: e.handleResize(n),
                                };
                              },
                            }
                          );
                        default:
                          return Object(b.a)(
                            Object(b.a)({}, t),
                            {},
                            {
                              onHeaderCell: function (t) {
                                return {
                                  width: t.width,
                                  onResize: e.handleResize(n),
                                };
                              },
                            }
                          );
                      }
                    });
                  return Object(T.jsxs)("div", {
                    children: [
                      Object(T.jsxs)("div", {
                        style: {
                          display: "flex",
                          justifyContent: "space-between",
                          alignItems: "center",
                        },
                        children: [
                          Object(T.jsx)("div", {
                            style: { display: "flex", marginLeft: 10 },
                            children: Object(T.jsx)(m.a, {
                              type: "primary",
                              style: {
                                backgroundColor:
                                  Object(k.isEmpty)(r) &&
                                  Object(k.isEmpty)(r) &&
                                  Object(k.isEmpty)(h)
                                    ? null
                                    : "red",
                                borderColor:
                                  Object(k.isEmpty)(r) &&
                                  Object(k.isEmpty)(r) &&
                                  Object(k.isEmpty)(h)
                                    ? null
                                    : "red",
                              },
                              onClick: this.clearAll,
                              children: "Xoá bộ lọc",
                            }),
                          }),
                          Object(T.jsx)(R.a, {
                            placeholder: "Tìm kiếm",
                            value: h,
                            onChange: this._handleSearch,
                            style: { width: 700, display: "flex" },
                          }),
                          Object(T.jsx)(m.a, {
                            className: "buttonPrimary",
                            type: "primary",
                            icon: Object(T.jsx)(X.a, {}),
                            style: {
                              color: "white",
                              backgroundColor: "#238c31",
                              fontWeight: "bold",
                              borderRadius: 5,
                              borderColor: "#238c31",
                              margin: 20,
                            },
                            onClick: function () {
                              e.setState({ isShowModal: !0 });
                            },
                            children: "Th\xeam ch\u1ee7 \u0111\u1ec1",
                          }),
                          Object(T.jsx)(L.a, {
                            visible: o,
                            width: "50%",
                            onCancel: Object(k.debounce)(
                              this._onCloseModal,
                              100
                            ),
                            footer: null,
                            children: Object(T.jsxs)(S.a, {
                              style: { marginTop: 20 },
                              wrapperCol: { span: 15 },
                              labelCol: { span: 6 },
                              onFinish: this.onConfirmDuyet,
                              ref: this.refForm,
                              children: [
                                Object(T.jsxs)(S.a.Item, {
                                  style: {
                                    alignItems: "center",
                                    justifyContent: "center",
                                  },
                                  children: [
                                    Object(T.jsx)(A.a, {
                                      style: { width: "100%" },
                                      value: s,
                                      placeholder: "Ch\u1ecdn Content Code",
                                      onChange: function (t) {
                                        return e.onChangeSelectAddContentCode(
                                          t
                                        );
                                      },
                                      children: Object(k.map)(
                                        d,
                                        function (e, t) {
                                          return Object(T.jsx)(
                                            et,
                                            {
                                              className: "erpOption",
                                              value: e.text,
                                              children: e.text,
                                            },
                                            t
                                          );
                                        }
                                      ),
                                    }),
                                    Object(T.jsx)(R.a, {
                                      style: { width: "100%", marginTop: 20 },
                                      placeholder:
                                        "Nh\u1eadp ch\u1ee7 \u0111\u1ec1",
                                      onChange: function (t) {
                                        e.setState({
                                          chuDeInput: t.target.value,
                                        });
                                      },
                                      value: a,
                                    }),
                                    Object(T.jsx)(A.a, {
                                      style: { width: "100%", marginTop: 20 },
                                      value: u,
                                      placeholder: "Ch\u1ecdn Length Script",
                                      onChange: function (t) {
                                        return e.onChangeSelectAddSalaryIndex(
                                          t
                                        );
                                      },
                                      children: Object(k.map)(
                                        oe,
                                        function (e, t) {
                                          return Object(T.jsx)(
                                            et,
                                            {
                                              className: "erpOption",
                                              value: e.value,
                                              children: e.text,
                                            },
                                            t
                                          );
                                        }
                                      ),
                                    }),
                                  ],
                                }),
                                Object(T.jsxs)(S.a.Item, {
                                  wrapperCol: { offset: 9 },
                                  style: {
                                    alignItems: "center",
                                    justifyContent: "center",
                                  },
                                  children: [
                                    Object(T.jsx)(m.a, {
                                      type: "primary",
                                      className: "buttonPrimary",
                                      icon: Object(T.jsx)(q.a, {}),
                                      htmlType: "submit",
                                      children: "X\xc1C NH\u1eacN",
                                    }),
                                    Object(T.jsx)(m.a, {
                                      className: "buttonPrimary",
                                      icon: Object(T.jsx)(Q.a, {}),
                                      style: { marginLeft: 10 },
                                      onClick: Object(k.debounce)(
                                        this._onCloseModal,
                                        100
                                      ),
                                      children: "H\u1ee6Y",
                                    }),
                                  ],
                                }),
                              ],
                            }),
                          }),
                        ],
                      }),
                      Object(T.jsx)(F.a, {
                        loading: l,
                        size: "middle",
                        bordered: !0,
                        onChange: this.handleChange,
                        components: this.components,
                        style: { marginBottom: 15 },
                        rowClassName: function (e, t) {
                          if (t % 2 !== 0) return "rowBackgroundColor";
                        },
                        scroll: { x: 1500, y: 400 },
                        dataSource: n,
                        columns: _,
                        rowKey: "id",
                        pagination: n.length > 10 && { total: n.length },
                        sticky: !0,
                      }),
                      Object(T.jsx)("div", {
                        style: { height: 50 },
                        ref: this.refAddNewContent,
                      }),
                    ],
                  });
                },
              },
            ]),
            n
          );
        })(a.Component),
        it = n(109),
        ot = n(69),
        rt = (R.a.Search, V.a.RangePicker),
        ct = function (e) {
          var t = e.onResize,
            n = e.width,
            a = Object(j.a)(e, ["onResize", "width"]);
          return n
            ? Object(T.jsx)(x.Resizable, {
                width: n,
                height: 0,
                handle: Object(T.jsx)("span", {
                  className: "react-resizable-handle",
                  onClick: function (e) {
                    e.stopPropagation();
                  },
                }),
                onResize: t,
                draggableOpts: { enableUserSelectHack: !1 },
                children: Object(T.jsx)("th", Object(b.a)({}, a)),
              })
            : Object(T.jsx)("th", Object(b.a)({}, a));
        },
        lt = (function (e) {
          Object(_.a)(n, e);
          var t = Object(f.a)(n);
          function n(e) {
            var a;
            Object(u.a)(this, n),
              ((a = t.call(this, e)).components = { header: { cell: ct } }),
              (a.getColumnSearchProps = function (e) {
                return {
                  filterDropdown: function (t) {
                    var n = t.setSelectedKeys,
                      i = t.selectedKeys,
                      o = t.confirm,
                      r = t.clearFilters;
                    return Object(T.jsxs)("div", {
                      style: { padding: 8 },
                      children: [
                        Object(T.jsx)(R.a, {
                          ref: function (e) {
                            a.searchInput = e;
                          },
                          placeholder: "Tìm kiếm",
                          value: i[0],
                          onChange: function (e) {
                            return n(e.target.value ? [e.target.value] : []);
                          },
                          onPressEnter: function () {
                            return a.handleSearch(i, o, e);
                          },
                          style: { marginBottom: 8, display: "block" },
                        }),
                        Object(T.jsxs)(N.b, {
                          children: [
                            Object(T.jsx)(m.a, {
                              type: "primary",
                              onClick: function () {
                                return a.handleSearch(i, o, e);
                              },
                              icon: Object(T.jsx)(B.a, {}),
                              size: "small",
                              style: { width: 90 },
                              children: "Search",
                            }),
                            Object(T.jsx)(m.a, {
                              onClick: function () {
                                return a.handleReset(r);
                              },
                              size: "small",
                              style: { width: 90 },
                              children: "Reset",
                            }),
                            Object(T.jsx)(m.a, {
                              type: "link",
                              size: "small",
                              onClick: function () {
                                o({ closeDropdown: !1 }),
                                  a.setState({
                                    searchText: i[0],
                                    searchedColumn: e,
                                  });
                              },
                              children: "Filter",
                            }),
                          ],
                        }),
                      ],
                    });
                  },
                  filterIcon: function (e) {
                    return Object(T.jsx)(B.a, {
                      style: { color: e ? "#1890ff" : void 0 },
                    });
                  },
                  filteredValue: null,
                  onFilter: function (t, n) {
                    return n[e]
                      ? n[e].toString().toLowerCase().includes(t.toLowerCase())
                      : "";
                  },
                  onFilterDropdownVisibleChange: function (e) {
                    e &&
                      setTimeout(function () {
                        return a.searchInput.select();
                      }, 100);
                  },
                  render: function (t) {
                    return a.state.searchedColumn === e
                      ? Object(T.jsx)(P.a, {
                          highlightStyle: {
                            backgroundColor: "#ffffff",
                            padding: 0,
                          },
                          searchWords: [a.state.searchText],
                          autoEscape: !0,
                          textToHighlight: t ? t.toString() : "",
                        })
                      : t;
                  },
                };
              }),
              (a.getColumnFilterTimeProps = function (e) {
                return {
                  filterDropdown: function (e) {
                    var t = e.setSelectedKeys,
                      n = e.selectedKeys,
                      a = e.confirm,
                      i = e.clearFilters;
                    return Object(T.jsxs)("div", {
                      style: { padding: 8 },
                      children: [
                        Object(T.jsx)("div", {
                          children: Object(T.jsx)(rt, {
                            style: { marginBottom: 8 },
                            value: n[0],
                            onChange: function (e) {
                              t(e ? [e] : []);
                            },
                          }),
                        }),
                        Object(T.jsxs)(N.b, {
                          children: [
                            Object(T.jsx)(m.a, {
                              type: "primary",
                              onClick: function () {
                                a();
                              },
                              icon: Object(T.jsx)(B.a, {}),
                              size: "small",
                              style: { width: 90, marginLeft: 10 },
                              children: "Search",
                            }),
                            Object(T.jsx)(m.a, {
                              onClick: function () {
                                return i();
                              },
                              size: "small",
                              style: { width: 90 },
                              children: "Reset",
                            }),
                          ],
                        }),
                      ],
                    });
                  },
                  filterIcon: function (e) {
                    return Object(T.jsx)(B.a, {
                      style: { color: e ? "#ffffff" : void 0 },
                    });
                  },
                  filteredValue: null,
                  onFilter: function (t, n) {
                    return n[e]
                      ? (C()(n[e]) < C()(t[1]) && C()(n[e]) > C()(t[0])) ||
                          C()(n.public_date).format("DDMMYYY") ===
                            C()(t[0]).format("DDMMYYY") ||
                          C()(n.public_date).format("DDMMYYY") ===
                            C()(t[1]).format("DDMMYYY")
                      : "";
                  },
                  onFilterDropdownVisibleChange: function (e) {},
                  render: function (t) {
                    return a.state.searchedColumn === e
                      ? Object(T.jsx)(P.a, {
                          highlightStyle: {
                            backgroundColor: "#ffc069",
                            padding: 0,
                          },
                          searchWords: [a.state.searchText],
                          autoEscape: !0,
                          textToHighlight: t ? t.toString() : "",
                        })
                      : t;
                  },
                };
              }),
              (a.handleSearch = function (e, t, n) {
                t(), a.setState({ searchText: e[0], searchedColumn: n });
              }),
              (a.handleReset = function (e) {
                e(), a.setState({ searchText: "" });
              }),
              (a._onRefreshData = function () {
                a.setState({ isLoding: !0 }),
                  v.a.get("".concat(K, "/activity")).then(function (e) {
                    a.setState({
                      activity: e.data.data,
                      activityChangeUpdate: e.data.data,
                    });
                  }),
                  v.a.get("".concat(K, "/tenticker")).then(function (e) {
                    var t = a.props,
                      n = t.data,
                      i = t.id,
                      o = e.data.data
                        .filter(function (e) {
                          return (
                            Object(k.includes)(e.composer_name, n[i + 1][me]) &&
                            1 === e.content_status &&
                            1 === e.is_new
                          );
                        })
                        .sort(function (e, t) {
                          return null === t.add_composer_date
                            ? C()(0) - C()(e.add_composer_date)
                            : null === e.add_composer_date
                            ? C()(t.add_composer_date) - C()(0)
                            : C()(t.add_composer_date) -
                              C()(e.add_composer_date);
                        }),
                      r = Object(k.map)(o, function (e, t) {
                        return Object(b.a)(
                          Object(b.a)({}, e),
                          {},
                          { stt: t + 1 }
                        );
                      });
                    a.setState({
                      dataSource: r,
                      dataChangeUpdate: r,
                      newDataTest: r,
                      isLoding: !1,
                    });
                  });
              }),
              (a._isEditing = function (e) {
                return e.id === a.state.editingKey;
              }),
              (a.onChangeLinkContent = function (e, t) {
                var n = Object(k.map)(a.state.dataChangeUpdate, function (n) {
                  return n.id === t.id
                    ? Object(b.a)(Object(b.a)({}, n), {}, { content_raw: e })
                    : Object(b.a)({}, n);
                });
                a.setState({ dataChangeUpdate: n });
              }),
              (a.onChangeLinkAudio = function (e, t) {
                var n = Object(k.map)(a.state.dataChangeUpdate, function (n) {
                  return n.id === t.id
                    ? Object(b.a)(Object(b.a)({}, n), {}, { link_audio: e })
                    : Object(b.a)({}, n);
                });
                a.setState({ dataChangeUpdate: n });
              }),
              (a.onChangeLinkVideo = function (e, t) {
                var n = Object(k.map)(a.state.dataChangeUpdate, function (n) {
                  return n.id === t.id
                    ? Object(b.a)(Object(b.a)({}, n), {}, { link_video: e })
                    : Object(b.a)({}, n);
                });
                a.setState({ dataChangeUpdate: n });
              }),
              (a.onChangeSelect = function (e, t) {
                var n = Object(k.map)(a.state.dataChangeUpdate, function (n) {
                  return n.id === t.id
                    ? Object(b.a)(
                        Object(b.a)({}, n),
                        {},
                        {
                          writer_code: e[0],
                          writer_name: e[1],
                          writer_nick: e[2],
                        }
                      )
                    : Object(b.a)({}, n);
                });
                a.setState({ dataChangeUpdate: n });
              }),
              (a.onDuyetAC = function (e) {
                var t = Object(k.map)(a.state.dataChangeUpdate, function (t) {
                  return t.id === e.id
                    ? Object(b.a)(
                        Object(b.a)({}, t),
                        {},
                        { audio_status: 0 === e.audio_status ? 1 : 0 }
                      )
                    : Object(b.a)({}, t);
                });
                a.setState({ dataChangeUpdate: t });
              }),
              (a.onSubmitUpdate = function (e) {
                var t = {
                  data_id: e.id,
                  data: [
                    e.id,
                    e.content_code,
                    e.writer_code,
                    e.full_title,
                    e.content_raw,
                    e.writer_name,
                    e.content_status,
                    e.content_final,
                    e.content_note,
                    1 !== e.is_first_content_final ||
                    Object(k.isEmpty)(e.content_final)
                      ? null === e.content_date
                        ? null
                        : C()(e.content_date).format("YYYY-MM-DD HH:mm:ss")
                      : C()().format("YYYY-MM-DD HH:mm:ss"),
                    e.composer_code,
                    e.composer_name,
                    1 !== e.is_first_audio || Object(k.isEmpty)(e.link_audio)
                      ? null === e.audio_date
                        ? null
                        : C()(e.audio_date).format("YYYY-MM-DD HH:mm:ss")
                      : C()().format("YYYY-MM-DD HH:mm:ss"),
                    e.link_audio,
                    e.audio_status,
                    e.audio_note,
                    e.writer_nick,
                    e.composer_nick,
                    e.editor_name,
                    1 !== e.is_first_video || Object(k.isEmpty)(e.link_video)
                      ? null === e.video_date
                        ? null
                        : C()(e.video_date).format("YYYY-MM-DD HH:mm:ss")
                      : C()().format("YYYY-MM-DD HH:mm:ss"),
                    e.footage,
                    e.editor_code,
                    e.link_video,
                    e.video_status,
                    e.video_note,
                    e.link_youtube,
                    null === e.public_date
                      ? null
                      : C()(e.public_date).format("YYYY-MM-DD HH:mm:ss"),
                    Object(k.isEmpty)(e.link_youtube) || 1 !== e.is_first_public
                      ? 1
                      : 0,
                    (!Object(k.isEmpty)(e.content_final) &&
                      1 === e.is_first_content_final) ||
                    0 === e.is_first_content_final
                      ? 0
                      : 1,
                    (!Object(k.isEmpty)(e.link_audio) &&
                      1 === e.is_first_audio) ||
                    0 === e.is_first_audio
                      ? 0
                      : 1,
                    (!Object(k.isEmpty)(e.link_video) &&
                      1 === e.is_first_video) ||
                    0 === e.is_first_video
                      ? 0
                      : 1,
                    null === e.add_composer_date
                      ? null
                      : C()(e.add_composer_date).format("YYYY-MM-DD HH:mm:ss"),
                    null === e.add_ve_date
                      ? null
                      : C()(e.add_ve_date).format("YYYY-MM-DD HH:mm:ss"),
                    null === e.confirm_content_date
                      ? null
                      : C()(e.confirm_content_date).format(
                          "YYYY-MM-DD HH:mm:ss"
                        ),
                    null === e.confirm_audio_date
                      ? null
                      : C()(e.confirm_audio_date).format("YYYY-MM-DD HH:mm:ss"),
                    e.salary_index,
                    1,
                  ],
                };
                v.a.put("".concat(K, "/tenticker"), t).then(function (t) {
                  if (
                    (O.a.success({
                      message: "C\u1eadp nh\u1eadt th\xe0nh c\xf4ng",
                      style: { backgroundColor: "#f5fff8" },
                    }),
                    e.link_audio !== a.state.dataSource[e.stt - 1].link_audio)
                  ) {
                    var n =
                      "Thay \u0111\u1ed5i Link Audio c\u1ee7a ch\u1ee7 \u0111\u1ec1 "
                        .concat(
                          a.state.dataSource[e.stt - 1].full_title,
                          " t\u1eeb "
                        )
                        .concat(
                          a.state.dataSource[e.stt - 1].link_audio,
                          " th\xe0nh "
                        )
                        .concat(e.link_audio);
                    a.onUpdateActivity(n);
                  }
                  a._onRefreshData();
                }),
                  a.setState({ editingKey: "" });
              }),
              (a.onCancelEdit = function (e) {
                var t = Object(k.map)(
                  a.state.dataChangeUpdate,
                  function (t, n) {
                    return t.id === e.id
                      ? Object(b.a)({}, a.state.dataSource[n])
                      : Object(b.a)({}, t);
                  }
                );
                a.setState({ editingKey: "", dataChangeUpdate: t });
              }),
              (a._onChangeEditingKey = function (e) {
                var t = Object(k.map)(
                  a.state.dataChangeUpdate,
                  function (e, t) {
                    return e.id === a.state.id
                      ? Object(b.a)({}, a.state.dataSource[t])
                      : Object(b.a)({}, e);
                  }
                );
                a.setState({ editingKey: e.id, dataChangeUpdate: t });
              }),
              (a.onUpdateActivity = function (e) {
                v.a.get("".concat(K, "/activity")).then(function (t) {
                  var n = {
                    data: [
                      null,
                      C()().format("YYYY-MM-DD HH:mm:ss"),
                      e,
                      a.props.data[a.props.id + 1][me],
                    ],
                  };
                  v.a.post("".concat(K, "/activity/add"), n).then(function (e) {
                    v.a.get("".concat(K, "/activity")).then(function (e) {
                      a.setState({
                        activity: e.data.data,
                        activityChangeUpdate: e.data.data,
                      });
                    });
                  }),
                    a.setState({
                      activity: t.data.data,
                      activityChangeUpdate: t.data.data,
                    });
                });
              }),
              (a.handleResize = function (e) {
                return function (t, n) {
                  var i = n.size;
                  a.setState(function (t) {
                    var n = t.column,
                      a = Object(d.a)(n);
                    return (
                      (a[e] = Object(b.a)(
                        Object(b.a)({}, a[e]),
                        {},
                        { width: i.width }
                      )),
                      { column: a }
                    );
                  });
                };
              }),
              (a._handleSearch = function (e) {
                var t = a.state.dataSource.filter(function (t) {
                  var n = t.full_title;
                  return (
                    (n = n.toLowerCase()),
                    (e.target.value = e.target.value.toLowerCase()),
                    n.includes(e.target.value)
                  );
                });
                a.setState({
                  dataChangeUpdate: t,
                  searchTextMain: e.target.value,
                });
              }),
              (a.handleChange = function (e, t, n) {
                console.log("filters", t);
                var i = Object(k.filter)(a.state.newDataTest, function (e) {
                  return (
                    (t.content_code
                      ? Object(k.includes)(t.content_code, e.content_code)
                      : e) &&
                    (t.audio_status
                      ? Object(k.includes)(t.audio_status, e.audio_status)
                      : e) &&
                    (t.full_title
                      ? Object(k.includes)(t.full_title, e.full_title)
                      : e) &&
                    (t.public_date
                      ? (C()(e.public_date) <
                          C()(Object(k.get)(t, "public_date[0][1]")) &&
                          C()(e.public_date) >
                            C()(Object(k.get)(t, "public_date[0][0]"))) ||
                        C()(e.public_date).format("DDMMYYY") ===
                          C()(Object(k.get)(t, "public_date[0][0]")).format(
                            "DDMMYYY"
                          ) ||
                        C()(e.public_date).format("DDMMYYY") ===
                          C()(Object(k.get)(t, "public_date[0][1]")).format(
                            "DDMMYYY"
                          )
                      : e)
                  );
                });
                (t.content_code ||
                  t.audio_status ||
                  t.full_title ||
                  t.public_date) &&
                  a.setState({ dataChangeUpdate: i }),
                  a.setState({ filteredInfo: t, sortedInfo: n }, function () {
                    var e = Object(k.map)(a.state.column, function (e, t) {
                      return 1 === t
                        ? Object(b.a)(
                            Object(b.a)({}, e),
                            {},
                            { filteredValue: a.state.filteredInfo.content_code }
                          )
                        : Object(b.a)({}, e);
                    });
                    a.setState({ column: e });
                  });
              }),
              (a.clearFilters = function () {
                a.setState({ filteredInfo: null });
              }),
              (a.clearSorters = function () {
                a.setState({ sortedInfo: null });
              }),
              (a.clearAll = function () {
                a.setState({
                  filteredInfo: null,
                  sortedInfo: null,
                  searchTextMain: "",
                  dataChangeUpdate: a.state.dataSource,
                });
              });
            for (
              var o = e.data,
                r = e.listContentCode,
                c = [],
                l = [],
                s = [],
                h = 0;
              h < o.length;
              h++
            )
              1 == o[h][_e] &&
                c.push({ value: o[h][me], text: o[h][me], nick: o[h][ye] }),
                1 == o[h][be] &&
                  l.push({ value: o[h][me], text: o[h][me], nick: o[h][ye] }),
                1 == o[h][ge] && s.push({ value: o[h][me], text: o[h][me] });
            return (
              (a.state = {
                chuDeInput: "",
                dataSource: [],
                dataChangeUpdate: [],
                activityChangeUpdate: [],
                newDataTest: [],
                activity: [],
                searchTextMain: "",
                editingKey: "",
                isShowModal: !1,
                filteredInfo: null,
                sortedInfo: null,
                isLoding: !1,
                column: [
                  {
                    title: "STT",
                    dataIndex: "id",
                    key: "id",
                    width: 70,
                    fixed: "left",
                    defaultSortOrder: "ascend",
                    sorter: function (e, t) {
                      return e.stt - t.stt;
                    },
                    render: function (e, t) {
                      return {
                        props: {
                          style: { background: t.stt % 2 === 0 && "#fbfbfb" },
                        },
                        children: Object(T.jsx)("div", { children: e }),
                      };
                    },
                  },
                  {
                    title: "Content Code",
                    dataIndex: "content_code",
                    key: "content_code",
                    fixed: "left",
                    filteredValue: null,
                    filters: r,
                    onFilter: function (e, t) {
                      return 0 === t.content_code.indexOf(e);
                    },
                    sorter: function (e, t) {
                      return e.content_code.length - t.content_code.length;
                    },
                    ellipsis: { showTitle: !1 },
                    width: 160,
                    render: function (e, t) {
                      return {
                        props: {
                          style: { background: t.stt % 2 === 0 && "#fbfbfb" },
                        },
                        children: Object(T.jsx)("div", {
                          children: t.content_code,
                        }),
                      };
                    },
                  },
                  Object(b.a)(
                    Object(b.a)(
                      {
                        title: "Full Title",
                        dataIndex: "full_title",
                        fixed: "left",
                        key: "full_title",
                        sorter: function (e, t) {
                          return e.full_title.length - t.full_title.length;
                        },
                        ellipsis: { showTitle: !1 },
                        width: 300,
                      },
                      a.getColumnSearchProps("full_title")
                    ),
                    {},
                    {
                      render: function (e, t) {
                        return {
                          props: {
                            style: { background: t.stt % 2 === 0 && "#fbfbfb" },
                          },
                          children: Object(T.jsx)("div", {
                            children: t.full_title,
                          }),
                        };
                      },
                    }
                  ),
                  {
                    title: "Content Final",
                    dataIndex: "content_final",
                    key: "content_final",
                    sorter: function (e, t) {
                      return e.content_final.length - t.content_final.length;
                    },
                    ellipsis: { showTitle: !1 },
                    width: 130,
                    render: function (e, t) {
                      return Object(T.jsx)("a", {
                        target: "_blank",
                        href: t.content_final,
                        children: t.content_final,
                      });
                    },
                  },
                  {
                    title: "Link Audio",
                    dataIndex: "link_audio",
                    key: "link_audio",
                    sorter: function (e, t) {
                      return e.link_audio.length - t.link_audio.length;
                    },
                    ellipsis: { showTitle: !1 },
                    width: 130,
                    render: function (e, t) {
                      var n = a._isEditing(t);
                      return n
                        ? Object(T.jsx)(R.a, {
                            style: { width: "100%" },
                            disabled: !n,
                            value: t.link_audio,
                            onChange: function (e) {
                              return a.onChangeLinkAudio(e.target.value, t);
                            },
                          })
                        : Object(T.jsx)("a", {
                            target: "_blank",
                            href: t.link_audio,
                            children: t.link_audio,
                          });
                    },
                  },
                  {
                    title: "Audio Status",
                    key: "audio_status",
                    dataIndex: "audio_status",
                    filters: [
                      { text: "\u0110\xe3 duy\u1ec7t", value: 1 },
                      { text: "Ch\u01b0a duy\u1ec7t", value: 0 },
                    ],
                    filteredValue: null,
                    onFilter: function (e, t) {
                      return t.audio_status === e;
                    },
                    sorter: function (e, t) {
                      return e.audio_status - t.audio_status;
                    },
                    ellipsis: { showTitle: !1 },
                    width: 150,
                    render: function (e, t) {
                      return Object(T.jsx)(m.a, {
                        style: {
                          color: "white",
                          backgroundColor:
                            0 === t.audio_status ? "red" : "#238c31",
                          fontWeight: "bold",
                          borderRadius: 5,
                          borderColor: 0 === t.audio_status ? "red" : "#238c31",
                        },
                        type: "primary",
                        disabled: !0,
                        onClick: function () {
                          return a.onDuyetAC(t);
                        },
                        children:
                          0 === t.audio_status
                            ? "Ch\u01b0a duy\u1ec7t"
                            : "\u0110\xe3 duy\u1ec7t",
                      });
                    },
                  },
                  {
                    title: "Từ khoá",
                    dataIndex: "audio_note",
                    key: "audio_note",
                    sorter: function (e, t) {
                      return e.audio_note.length - t.audio_note.length;
                    },
                    ellipsis: { showTitle: !1 },
                    width: 100,
                    render: function (e, t) {
                      return Object(T.jsx)("div", { children: t.audio_note });
                    },
                  },
                  {
                    title: "Link Youtube",
                    dataIndex: "link_youtube",
                    key: "link_youtube",
                    sorter: function (e, t) {
                      return e.link_youtube.length - t.link_youtube.length;
                    },
                    ellipsis: { showTitle: !1 },
                    width: 130,
                    render: function (e, t) {
                      return Object(T.jsx)("a", {
                        target: "_blank",
                        href: t.link_youtube,
                        children: t.link_youtube,
                      });
                    },
                  },
                  {
                    title: "Audio Date",
                    dataIndex: "audio_date",
                    key: "audio_date",
                    sorter: function (e, t) {
                      return (
                        C()(e.audio_date).unix() - C()(t.audio_date).unix()
                      );
                    },
                    ellipsis: { showTitle: !1 },
                    width: 120,
                    render: function (e, t) {
                      return Object(T.jsx)("div", {
                        children: Object(k.isEmpty)(e)
                          ? ""
                          : C()(e).format("DD-MM-YYYY"),
                      });
                    },
                  },
                  Object(b.a)(
                    Object(b.a)(
                      {
                        title: "Public Date",
                        dataIndex: "public_date",
                        key: "public_date",
                        sorter: function (e, t) {
                          return (
                            C()(e.public_date).unix() -
                            C()(t.public_date).unix()
                          );
                        },
                      },
                      a.getColumnFilterTimeProps("public_date")
                    ),
                    {},
                    {
                      ellipsis: { showTitle: !1 },
                      width: 150,
                      render: function (e, t) {
                        return Object(T.jsx)("div", {
                          children: Object(k.isEmpty)(e)
                            ? ""
                            : C()(e).format("DD-MM-YYYY"),
                        });
                      },
                    }
                  ),
                  {
                    title: "Thao t\xe1c",
                    key: "thaoTac",
                    align: "center",
                    fixed: "right",
                    width: 155,
                    render: function (e) {
                      var t = a._isEditing(e);
                      return {
                        props: {
                          style: { background: e.stt % 2 === 0 && "#fbfbfb" },
                        },
                        children: Object(T.jsx)(T.Fragment, {
                          children: t
                            ? Object(T.jsxs)(T.Fragment, {
                                children: [
                                  Object(T.jsx)(m.a, {
                                    style: {
                                      color: "white",
                                      backgroundColor: "#238c31",
                                      fontWeight: "bold",
                                      borderRadius: 5,
                                      borderColor: "#238c31",
                                    },
                                    type: "primary",
                                    icon: Object(T.jsx)(G.a, {}),
                                    onClick: function () {
                                      return a.onSubmitUpdate(e);
                                    },
                                  }),
                                  Object(T.jsx)("span", {
                                    children: "\xa0\xa0\xa0",
                                  }),
                                  Object(T.jsx)(m.a, {
                                    style: {
                                      color: "white",
                                      backgroundColor: "#238c31",
                                      fontWeight: "bold",
                                      borderRadius: 5,
                                      borderColor: "#238c31",
                                    },
                                    type: "primary",
                                    icon: Object(T.jsx)(J.a, {}),
                                    onClick: function () {
                                      return a.onCancelEdit(e);
                                    },
                                  }),
                                  Object(T.jsx)("span", {
                                    children: "\xa0\xa0\xa0",
                                  }),
                                ],
                              })
                            : Object(T.jsx)(m.a, {
                                style: {
                                  color: "white",
                                  backgroundColor: "#238c31",
                                  fontWeight: "bold",
                                  borderRadius: 5,
                                  borderColor: "#238c31",
                                },
                                type: "primary",
                                onClick: function () {
                                  return a._onChangeEditingKey(e);
                                },
                                children: "S\u1eeda",
                              }),
                        }),
                      };
                    },
                  },
                ],
                searchText: "",
                searchedColumn: "",
              }),
              (a.refAddNewContent = i.a.createRef()),
              a
            );
          }
          return (
            Object(h.a)(n, [
              {
                key: "componentDidMount",
                value: function () {
                  this._onRefreshData();
                },
              },
              {
                key: "render",
                value: function () {
                  var e = this,
                    t = this.state,
                    n = t.dataChangeUpdate,
                    a = t.column,
                    i = t.filteredInfo,
                    o = t.sortedInfo,
                    r = t.isLoding,
                    c = t.searchTextMain,
                    l = Object(k.map)(a, function (t, n) {
                      switch (n) {
                        case 0:
                          return Object(b.a)(
                            Object(b.a)({}, t),
                            {},
                            {
                              sortOrder: Object(k.isEmpty)(o)
                                ? null
                                : "stt" === o.columnKey && o.order,
                              onHeaderCell: function (t) {
                                return {
                                  width: t.width,
                                  onResize: e.handleResize(n),
                                };
                              },
                            }
                          );
                        case 1:
                          return Object(b.a)(
                            Object(b.a)({}, t),
                            {},
                            {
                              filteredValue: Object(k.isEmpty)(i)
                                ? null
                                : i.content_code,
                              sortOrder: Object(k.isEmpty)(o)
                                ? null
                                : "content_code" === o.columnKey && o.order,
                              onHeaderCell: function (t) {
                                return {
                                  width: t.width,
                                  onResize: e.handleResize(n),
                                };
                              },
                            }
                          );
                        case 2:
                          return Object(b.a)(
                            Object(b.a)({}, t),
                            {},
                            {
                              filteredValue: Object(k.isEmpty)(i)
                                ? null
                                : i.salary_index,
                              sortOrder: Object(k.isEmpty)(o)
                                ? null
                                : "salary_index" === o.columnKey && o.order,
                              onHeaderCell: function (t) {
                                return {
                                  width: t.width,
                                  onResize: e.handleResize(n),
                                };
                              },
                            }
                          );
                        case 3:
                          return Object(b.a)(
                            Object(b.a)({}, t),
                            {},
                            {
                              filteredValue: Object(k.isEmpty)(i)
                                ? null
                                : i.full_title,
                              sortOrder: Object(k.isEmpty)(o)
                                ? null
                                : "full_title" === o.columnKey && o.order,
                              onHeaderCell: function (t) {
                                return {
                                  width: t.width,
                                  onResize: e.handleResize(n),
                                };
                              },
                            }
                          );
                        case 4:
                          return Object(b.a)(
                            Object(b.a)({}, t),
                            {},
                            {
                              sortOrder: Object(k.isEmpty)(o)
                                ? null
                                : "content_final" === o.columnKey && o.order,
                              onHeaderCell: function (t) {
                                return {
                                  width: t.width,
                                  onResize: e.handleResize(n),
                                };
                              },
                            }
                          );
                        case 5:
                          return Object(b.a)(
                            Object(b.a)({}, t),
                            {},
                            {
                              sortOrder: Object(k.isEmpty)(o)
                                ? null
                                : "link_audio" === o.columnKey && o.order,
                              onHeaderCell: function (t) {
                                return {
                                  width: t.width,
                                  onResize: e.handleResize(n),
                                };
                              },
                            }
                          );
                        case 6:
                          return Object(b.a)(
                            Object(b.a)({}, t),
                            {},
                            {
                              filteredValue: Object(k.isEmpty)(i)
                                ? null
                                : i.audio_status,
                              sortOrder: Object(k.isEmpty)(o)
                                ? null
                                : "audio_status" === o.columnKey && o.order,
                              onHeaderCell: function (t) {
                                return {
                                  width: t.width,
                                  onResize: e.handleResize(n),
                                };
                              },
                            }
                          );
                        case 7:
                          return Object(b.a)(
                            Object(b.a)({}, t),
                            {},
                            {
                              sortOrder: Object(k.isEmpty)(o)
                                ? null
                                : "audio_note" === o.columnKey && o.order,
                              onHeaderCell: function (t) {
                                return {
                                  width: t.width,
                                  onResize: e.handleResize(n),
                                };
                              },
                            }
                          );
                        case 8:
                          return Object(b.a)(
                            Object(b.a)({}, t),
                            {},
                            {
                              sortOrder: Object(k.isEmpty)(o)
                                ? null
                                : "link_youtube" === o.columnKey && o.order,
                              onHeaderCell: function (t) {
                                return {
                                  width: t.width,
                                  onResize: e.handleResize(n),
                                };
                              },
                            }
                          );
                        case 9:
                          return Object(b.a)(
                            Object(b.a)({}, t),
                            {},
                            {
                              sortOrder: Object(k.isEmpty)(o)
                                ? null
                                : "audio_date" === o.columnKey && o.order,
                              onHeaderCell: function (t) {
                                return {
                                  width: t.width,
                                  onResize: e.handleResize(n),
                                };
                              },
                            }
                          );
                        case 10:
                          return Object(b.a)(
                            Object(b.a)({}, t),
                            {},
                            {
                              filteredValue: Object(k.isEmpty)(i)
                                ? null
                                : i.public_date,
                              sortOrder: Object(k.isEmpty)(o)
                                ? null
                                : "public_date" === o.columnKey && o.order,
                              onHeaderCell: function (t) {
                                return {
                                  width: t.width,
                                  onResize: e.handleResize(n),
                                };
                              },
                            }
                          );
                        default:
                          return Object(b.a)(
                            Object(b.a)({}, t),
                            {},
                            {
                              onHeaderCell: function (t) {
                                return {
                                  width: t.width,
                                  onResize: e.handleResize(n),
                                };
                              },
                            }
                          );
                      }
                    });
                  return Object(T.jsxs)("div", {
                    children: [
                      Object(T.jsx)("div", {
                        style: { alignItems: "center", marginBottom: 10 },
                        children: Object(T.jsxs)(it.a, {
                          gutter: 12,
                          children: [
                            Object(T.jsx)(ot.a, {
                              span: 10,
                              children: Object(T.jsx)("div", {
                                style: { display: "flex", marginLeft: 10 },
                                children: Object(T.jsx)(m.a, {
                                  type: "primary",
                                  style: {
                                    backgroundColor:
                                      Object(k.isEmpty)(i) &&
                                      Object(k.isEmpty)(i) &&
                                      Object(k.isEmpty)(c)
                                        ? null
                                        : "red",
                                    borderColor:
                                      Object(k.isEmpty)(i) &&
                                      Object(k.isEmpty)(i) &&
                                      Object(k.isEmpty)(c)
                                        ? null
                                        : "red",
                                  },
                                  onClick: this.clearAll,
                                  children: "Xoá bộ lọc",
                                }),
                              }),
                            }),
                            Object(T.jsx)(ot.a, {
                              span: 6,
                              children: Object(T.jsx)(R.a, {
                                placeholder: "Tìm kiếm",
                                value: c,
                                onChange: this._handleSearch,
                                style: { width: 700, display: "flex" },
                              }),
                            }),
                          ],
                        }),
                      }),
                      Object(T.jsx)(F.a, {
                        loading: r,
                        size: "middle",
                        bordered: !0,
                        onChange: this.handleChange,
                        components: this.components,
                        style: { marginBottom: 15 },
                        rowClassName: function (e, t) {
                          if (t % 2 !== 0) return "rowBackgroundColor";
                        },
                        scroll: { x: 1500, y: 400 },
                        dataSource: n,
                        columns: l,
                        rowKey: "id",
                        pagination: n.length > 10 && { total: n.length },
                        sticky: !0,
                      }),
                      Object(T.jsx)("div", {
                        style: { height: 50 },
                        ref: this.refAddNewContent,
                      }),
                    ],
                  });
                },
              },
            ]),
            n
          );
        })(a.Component),
        st = A.a.Option,
        dt = (R.a.Search, V.a.RangePicker),
        ut = function (e) {
          var t = e.onResize,
            n = e.width,
            a = Object(j.a)(e, ["onResize", "width"]);
          return n
            ? Object(T.jsx)(x.Resizable, {
                width: n,
                height: 0,
                handle: Object(T.jsx)("span", {
                  className: "react-resizable-handle",
                  onClick: function (e) {
                    e.stopPropagation();
                  },
                }),
                onResize: t,
                draggableOpts: { enableUserSelectHack: !1 },
                children: Object(T.jsx)("th", Object(b.a)({}, a)),
              })
            : Object(T.jsx)("th", Object(b.a)({}, a));
        },
        ht = (function (e) {
          Object(_.a)(n, e);
          var t = Object(f.a)(n);
          function n(e) {
            var a;
            Object(u.a)(this, n),
              ((a = t.call(this, e)).components = { header: { cell: ut } }),
              (a.getColumnSearchProps = function (e) {
                return {
                  filterDropdown: function (t) {
                    var n = t.setSelectedKeys,
                      i = t.selectedKeys,
                      o = t.confirm,
                      r = t.clearFilters;
                    return Object(T.jsxs)("div", {
                      style: { padding: 8 },
                      children: [
                        Object(T.jsx)(R.a, {
                          ref: function (e) {
                            a.searchInput = e;
                          },
                          placeholder: "Tìm kiếm",
                          value: i[0],
                          onChange: function (e) {
                            return n(e.target.value ? [e.target.value] : []);
                          },
                          onPressEnter: function () {
                            return a.handleSearch(i, o, e);
                          },
                          style: { marginBottom: 8, display: "block" },
                        }),
                        Object(T.jsxs)(N.b, {
                          children: [
                            Object(T.jsx)(m.a, {
                              type: "primary",
                              onClick: function () {
                                return a.handleSearch(i, o, e);
                              },
                              icon: Object(T.jsx)(B.a, {}),
                              size: "small",
                              style: { width: 90 },
                              children: "Search",
                            }),
                            Object(T.jsx)(m.a, {
                              onClick: function () {
                                return a.handleReset(r);
                              },
                              size: "small",
                              style: { width: 90 },
                              children: "Reset",
                            }),
                            Object(T.jsx)(m.a, {
                              type: "link",
                              size: "small",
                              onClick: function () {
                                o({ closeDropdown: !1 }),
                                  a.setState({
                                    searchText: i[0],
                                    searchedColumn: e,
                                  });
                              },
                              children: "Filter",
                            }),
                          ],
                        }),
                      ],
                    });
                  },
                  filterIcon: function (e) {
                    return Object(T.jsx)(B.a, {
                      style: { color: e ? "#ffffff" : void 0 },
                    });
                  },
                  filteredValue: null,
                  onFilter: function (t, n) {
                    return n[e]
                      ? n[e].toString().toLowerCase().includes(t.toLowerCase())
                      : "";
                  },
                  onFilterDropdownVisibleChange: function (e) {
                    e &&
                      setTimeout(function () {
                        return a.searchInput.select();
                      }, 100);
                  },
                  render: function (t) {
                    return a.state.searchedColumn === e
                      ? Object(T.jsx)(P.a, {
                          highlightStyle: {
                            backgroundColor: "#ffc069",
                            padding: 0,
                          },
                          searchWords: [a.state.searchText],
                          autoEscape: !0,
                          textToHighlight: t ? t.toString() : "",
                        })
                      : t;
                  },
                };
              }),
              (a.getColumnFilterTimeProps = function (e) {
                return {
                  filterDropdown: function (e) {
                    var t = e.setSelectedKeys,
                      n = e.selectedKeys,
                      a = e.confirm,
                      i = e.clearFilters;
                    return Object(T.jsxs)("div", {
                      style: { padding: 8 },
                      children: [
                        Object(T.jsx)("div", {
                          children: Object(T.jsx)(dt, {
                            style: { marginBottom: 8 },
                            value: n[0],
                            onChange: function (e) {
                              t(e ? [e] : []);
                            },
                          }),
                        }),
                        Object(T.jsxs)(N.b, {
                          children: [
                            Object(T.jsx)(m.a, {
                              type: "primary",
                              onClick: function () {
                                a();
                              },
                              icon: Object(T.jsx)(B.a, {}),
                              size: "small",
                              style: { width: 90, marginLeft: 10 },
                              children: "Search",
                            }),
                            Object(T.jsx)(m.a, {
                              onClick: function () {
                                return i();
                              },
                              size: "small",
                              style: { width: 90 },
                              children: "Reset",
                            }),
                          ],
                        }),
                      ],
                    });
                  },
                  filterIcon: function (e) {
                    return Object(T.jsx)(B.a, {
                      style: { color: e ? "#ffffff" : void 0 },
                    });
                  },
                  filteredValue: null,
                  onFilter: function (t, n) {
                    return n[e]
                      ? (C()(n[e]) < C()(t[1]) && C()(n[e]) > C()(t[0])) ||
                          C()(n.public_date).format("DDMMYYY") ===
                            C()(t[0]).format("DDMMYYY") ||
                          C()(n.public_date).format("DDMMYYY") ===
                            C()(t[1]).format("DDMMYYY")
                      : "";
                  },
                  onFilterDropdownVisibleChange: function (e) {},
                  render: function (t) {
                    return a.state.searchedColumn === e
                      ? Object(T.jsx)(P.a, {
                          highlightStyle: {
                            backgroundColor: "#ffc069",
                            padding: 0,
                          },
                          searchWords: [a.state.searchText],
                          autoEscape: !0,
                          textToHighlight: t ? t.toString() : "",
                        })
                      : t;
                  },
                };
              }),
              (a.handleSearch = function (e, t, n) {
                t(), a.setState({ searchText: e[0], searchedColumn: n });
              }),
              (a.handleReset = function (e) {
                e(), a.setState({ searchText: "" });
              }),
              (a._onRefreshData = function () {
                a.setState({ isLoding: !0 }),
                  v.a.get("".concat(K, "/activity")).then(function (e) {
                    a.setState({
                      activity: e.data.data,
                      activityChangeUpdate: e.data.data,
                    });
                  }),
                  v.a.get("".concat(K, "/tenticker")).then(function (e) {
                    var t = Object(k.map)(
                        a.props.listContentCode,
                        function (e, t) {
                          return e.value;
                        }
                      ),
                      n = e.data.data
                        .filter(function (e) {
                          return (
                            1 === e.content_status &&
                            t.includes(e.content_code) &&
                            1 === e.is_new
                          );
                        })
                        .sort(function (e, t) {
                          return null === t.confirm_content_date
                            ? C()(0) - C()(e.confirm_content_date)
                            : null === e.confirm_content_date
                            ? C()(t.confirm_content_date) - C()(0)
                            : C()(t.confirm_content_date) -
                              C()(e.confirm_content_date);
                        }),
                      i = Object(k.map)(n, function (e, t) {
                        return Object(b.a)(
                          Object(b.a)({}, e),
                          {},
                          { stt: t + 1 }
                        );
                      });
                    a.setState({
                      dataSource: i,
                      dataChangeUpdate: i,
                      newDataTest: i,
                      isLoding: !1,
                    });
                  });
              }),
              (a._isEditing = function (e) {
                return e.id === a.state.editingKey;
              }),
              (a.onChangeLinkAudio = function (e, t) {
                var n = Object(k.map)(a.state.dataChangeUpdate, function (n) {
                  return n.id === t.id
                    ? Object(b.a)(Object(b.a)({}, n), {}, { link_audio: e })
                    : Object(b.a)({}, n);
                });
                a.setState({ dataChangeUpdate: n });
              }),
              (a.onChangeLinkAudioNote = function (e, t) {
                var n = Object(k.map)(a.state.dataChangeUpdate, function (n) {
                  return n.id === t.id
                    ? Object(b.a)(Object(b.a)({}, n), {}, { audio_note: e })
                    : Object(b.a)({}, n);
                });
                a.setState({ dataChangeUpdate: n });
              }),
              (a.onChangeSelect = function (e, t) {
                var n = Object(k.map)(a.state.dataChangeUpdate, function (n) {
                  return n.id === t.id
                    ? Object(b.a)(
                        Object(b.a)({}, n),
                        {},
                        {
                          writer_code: e[0],
                          writer_name: e[1],
                          writer_nick: e[2],
                        }
                      )
                    : Object(b.a)({}, n);
                });
                a.setState({ dataChangeUpdate: n });
              }),
              (a.onChangeSelectComposerName = function (e, t) {
                var n = Object(k.map)(a.state.dataChangeUpdate, function (n) {
                  return n.id === t.id
                    ? Object(b.a)(
                        Object(b.a)({}, n),
                        {},
                        {
                          composer_name: e[0],
                          composer_code: e[1],
                          composer_nick: e[2],
                        }
                      )
                    : Object(b.a)({}, n);
                });
                a.setState({ dataChangeUpdate: n });
              }),
              (a.onDuyetAC = function (e) {
                var t = Object(k.map)(a.state.dataChangeUpdate, function (t) {
                  return t.id === e.id
                    ? Object(b.a)(
                        Object(b.a)({}, t),
                        {},
                        { audio_status: 0 === e.audio_status ? 1 : 0 }
                      )
                    : Object(b.a)({}, t);
                });
                a.setState({ dataChangeUpdate: t });
              }),
              (a.onSubmitUpdate = function (e) {
                var t = {
                  data_id: e.id,
                  data: [
                    e.id,
                    e.content_code,
                    e.writer_code,
                    e.full_title,
                    e.content_raw,
                    e.writer_name,
                    e.content_status,
                    e.content_final,
                    e.content_note,
                    1 !== e.is_first_content_final ||
                    Object(k.isEmpty)(e.content_final)
                      ? null === e.content_date
                        ? null
                        : C()(e.content_date).format("YYYY-MM-DD HH:mm:ss")
                      : C()().format("YYYY-MM-DD HH:mm:ss"),
                    e.composer_code,
                    e.composer_name,
                    1 !== e.is_first_audio || Object(k.isEmpty)(e.link_audio)
                      ? null === e.audio_date
                        ? null
                        : C()(e.audio_date).format("YYYY-MM-DD HH:mm:ss")
                      : C()().format("YYYY-MM-DD HH:mm:ss"),
                    e.link_audio,
                    e.audio_status,
                    e.audio_note,
                    e.writer_nick,
                    e.composer_nick,
                    e.editor_name,
                    1 !== e.is_first_video || Object(k.isEmpty)(e.link_video)
                      ? null === e.video_date
                        ? null
                        : C()(e.video_date).format("YYYY-MM-DD HH:mm:ss")
                      : C()().format("YYYY-MM-DD HH:mm:ss"),
                    e.footage,
                    e.editor_code,
                    e.link_video,
                    e.video_status,
                    e.video_note,
                    e.link_youtube,
                    null === e.public_date
                      ? null
                      : C()(e.public_date).format("YYYY-MM-DD HH:mm:ss"),
                    Object(k.isEmpty)(e.link_youtube) || 1 !== e.is_first_public
                      ? 1
                      : 0,
                    (!Object(k.isEmpty)(e.content_final) &&
                      1 === e.is_first_content_final) ||
                    0 === e.is_first_content_final
                      ? 0
                      : 1,
                    (!Object(k.isEmpty)(e.link_audio) &&
                      1 === e.is_first_audio) ||
                    0 === e.is_first_audio
                      ? 0
                      : 1,
                    (!Object(k.isEmpty)(e.link_video) &&
                      1 === e.is_first_video) ||
                    0 === e.is_first_video
                      ? 0
                      : 1,
                    e.composer_name !==
                    a.state.dataSource[e.stt - 1].composer_name
                      ? C()().format("YYYY-MM-DD HH:mm:ss")
                      : null === e.add_composer_date
                      ? null
                      : C()(e.add_composer_date).format("YYYY-MM-DD HH:mm:ss"),
                    null === e.add_ve_date
                      ? null
                      : C()(e.add_ve_date).format("YYYY-MM-DD HH:mm:ss"),
                    null === e.confirm_content_date
                      ? null
                      : C()(e.confirm_content_date).format(
                          "YYYY-MM-DD HH:mm:ss"
                        ),
                    e.audio_status !==
                    a.state.dataSource[e.stt - 1].audio_status
                      ? C()().format("YYYY-MM-DD HH:mm:ss")
                      : null === e.confirm_audio_date
                      ? null
                      : C()(e.confirm_audio_date).format("YYYY-MM-DD HH:mm:ss"),
                    e.salary_index,
                    1,
                  ],
                };
                v.a.put("".concat(K, "/tenticker"), t).then(function (t) {
                  if (
                    (O.a.success({
                      message: "C\u1eadp nh\u1eadt th\xe0nh c\xf4ng",
                      style: { backgroundColor: "#f5fff8" },
                    }),
                    e.composer_name !==
                      a.state.dataSource[e.stt - 1].composer_name)
                  ) {
                    var n =
                      "Thay \u0111\u1ed5i Composer Name c\u1ee7a ch\u1ee7 \u0111\u1ec1 "
                        .concat(
                          a.state.dataSource[e.stt - 1].full_title,
                          " t\u1eeb "
                        )
                        .concat(
                          a.state.dataSource[e.stt - 1].composer_name,
                          " th\xe0nh "
                        )
                        .concat(e.composer_name);
                    a.onUpdateActivity(n);
                  }
                  if (
                    e.link_audio !== a.state.dataSource[e.stt - 1].link_audio
                  ) {
                    var i =
                      "Thay \u0111\u1ed5i Link Audio c\u1ee7a ch\u1ee7 \u0111\u1ec1 "
                        .concat(
                          a.state.dataSource[e.stt - 1].full_title,
                          " t\u1eeb "
                        )
                        .concat(
                          a.state.dataSource[e.stt - 1].link_audio,
                          " th\xe0nh "
                        )
                        .concat(e.link_audio);
                    a.onUpdateActivity(i);
                  }
                  if (
                    e.audio_status !==
                    a.state.dataSource[e.stt - 1].audio_status
                  ) {
                    var o =
                      "Thay \u0111\u1ed5i Audio Status c\u1ee7a ch\u1ee7 \u0111\u1ec1 "
                        .concat(
                          a.state.dataSource[e.stt - 1].full_title,
                          " t\u1eeb "
                        )
                        .concat(
                          0 === a.state.dataSource[e.stt - 1].audio_status
                            ? "Ch\u01b0a duy\u1ec7t"
                            : "\u0110\xe3 duy\u1ec7t",
                          " th\xe0nh "
                        )
                        .concat(
                          0 === e.audio_status
                            ? "Ch\u01b0a duy\u1ec7t"
                            : "\u0110\xe3 duy\u1ec7t"
                        );
                    a.onUpdateActivity(o);
                  }
                  if (
                    e.audio_note !== a.state.dataSource[e.stt - 1].audio_note
                  ) {
                    var r =
                      "Thay \u0111\u1ed5i Từ khoá c\u1ee7a ch\u1ee7 \u0111\u1ec1 "
                        .concat(
                          a.state.dataSource[e.stt - 1].full_title,
                          " t\u1eeb "
                        )
                        .concat(
                          a.state.dataSource[e.stt - 1].audio_note,
                          " th\xe0nh "
                        )
                        .concat(e.audio_note);
                    a.onUpdateActivity(r);
                  }
                  a._onRefreshData();
                }),
                  a.setState({ editingKey: "" });
              }),
              (a.onCancelEdit = function (e) {
                var t = Object(k.map)(
                  a.state.dataChangeUpdate,
                  function (t, n) {
                    return t.id === e.id
                      ? Object(b.a)({}, a.state.dataSource[n])
                      : Object(b.a)({}, t);
                  }
                );
                a.setState({ editingKey: "", dataChangeUpdate: t });
              }),
              (a.onUpdateActivity = function (e) {
                v.a.get("".concat(K, "/activity")).then(function (t) {
                  var n = {
                    data: [
                      null,
                      C()().format("YYYY-MM-DD HH:mm:ss"),
                      e,
                      a.props.data[a.props.id + 1][me],
                    ],
                  };
                  v.a.post("".concat(K, "/activity/add"), n).then(function (e) {
                    v.a.get("".concat(K, "/activity")).then(function (e) {
                      a.setState({
                        activity: e.data.data,
                        activityChangeUpdate: e.data.data,
                      });
                    });
                  }),
                    a.setState({
                      activity: t.data.data,
                      activityChangeUpdate: t.data.data,
                    });
                });
              }),
              (a._onChangeEditingKey = function (e) {
                var t = Object(k.map)(
                  a.state.dataChangeUpdate,
                  function (e, t) {
                    return e.id === a.state.id
                      ? Object(b.a)({}, a.state.dataSource[t])
                      : Object(b.a)({}, e);
                  }
                );
                a.setState({ editingKey: e.id, dataChangeUpdate: t });
              }),
              (a.handleResize = function (e) {
                return function (t, n) {
                  var i = n.size;
                  a.setState(function (t) {
                    var n = t.column,
                      a = Object(d.a)(n);
                    return (
                      (a[e] = Object(b.a)(
                        Object(b.a)({}, a[e]),
                        {},
                        { width: i.width }
                      )),
                      { column: a }
                    );
                  });
                };
              }),
              (a._onCloseModal = function () {
                a.setState({ isShowModal: !1, chuDeInput: "" });
              }),
              (a._handleSearch = function (e) {
                var t = a.state.dataSource.filter(function (t) {
                  var n = t.full_title;
                  return (
                    (n = n.toLowerCase()),
                    (e.target.value = e.target.value.toLowerCase()),
                    n.includes(e.target.value)
                  );
                });
                a.setState({
                  dataChangeUpdate: t,
                  searchTextMain: e.target.value,
                });
              }),
              (a.handleChange = function (e, t, n) {
                var i = Object(k.filter)(a.state.newDataTest, function (e) {
                  return (
                    (t.content_code
                      ? Object(k.includes)(t.content_code, e.content_code)
                      : e) &&
                    (t.audio_status
                      ? Object(k.includes)(t.audio_status, e.audio_status)
                      : e) &&
                    (t.composer_name
                      ? Object(k.includes)(t.composer_name, e.composer_name)
                      : e) &&
                    (t.full_title
                      ? Object(k.includes)(t.full_title, e.full_title)
                      : e) &&
                    (t.salary_index
                      ? Object(k.includes)(t.salary_index, e.salary_index)
                      : e) &&
                    (t.writer_name
                      ? Object(k.includes)(t.writer_name, e.writer_name)
                      : e) &&
                    (t.public_date
                      ? (C()(e.public_date) <
                          C()(Object(k.get)(t, "public_date[0][1]")) &&
                          C()(e.public_date) >
                            C()(Object(k.get)(t, "public_date[0][0]"))) ||
                        C()(e.public_date).format("DDMMYYY") ===
                          C()(Object(k.get)(t, "public_date[0][0]")).format(
                            "DDMMYYY"
                          ) ||
                        C()(e.public_date).format("DDMMYYY") ===
                          C()(Object(k.get)(t, "public_date[0][1]")).format(
                            "DDMMYYY"
                          )
                      : e)
                  );
                });
                (t.content_code ||
                  t.audio_status ||
                  t.composer_name ||
                  t.full_title ||
                  t.public_date ||
                  t.salary_index ||
                  t.writer_name) &&
                  a.setState({ dataChangeUpdate: i }),
                  a.setState({ filteredInfo: t, sortedInfo: n }, function () {
                    var e = Object(k.map)(a.state.column, function (e, t) {
                      return 1 === t
                        ? Object(b.a)(
                            Object(b.a)({}, e),
                            {},
                            { filteredValue: a.state.filteredInfo.content_code }
                          )
                        : Object(b.a)({}, e);
                    });
                    a.setState({ column: e });
                  });
              }),
              (a.clearFilters = function () {
                a.setState({ filteredInfo: null });
              }),
              (a.clearSorters = function () {
                a.setState({ sortedInfo: null });
              }),
              (a.clearAll = function () {
                a.setState({
                  filteredInfo: null,
                  sortedInfo: null,
                  searchTextMain: "",
                  dataChangeUpdate: a.state.dataSource,
                });
              });
            for (
              var o = e.data,
                r = e.listContentCode,
                c = [],
                l = [],
                s = [],
                h = 0;
              h < o.length;
              h++
            )
              1 == o[h][_e] &&
                c.push({ value: o[h][me], text: o[h][me], nick: o[h][ye] }),
                1 == o[h][be] &&
                  l.push({ value: o[h][me], text: o[h][me], nick: o[h][ye] }),
                1 == o[h][ge] && s.push({ value: o[h][me], text: o[h][me] });
            return (
              (a.state = {
                chuDeInput: "",
                dataSource: [],
                dataChangeUpdate: [],
                newDataTest: [],
                activityChangeUpdate: [],
                activity: [],
                editingKey: "",
                isShowModal: !1,
                filteredInfo: null,
                sortedInfo: null,
                isLoding: !1,
                column: [
                  {
                    title: "STT",
                    dataIndex: "id",
                    key: "id",
                    width: 70,
                    fixed: "left",
                    searchTextMain: "",
                    defaultSortOrder: "ascend",
                    sorter: function (e, t) {
                      return e.stt - t.stt;
                    },
                    render: function (e, t) {
                      return {
                        props: {
                          style: { background: t.stt % 2 === 0 && "#fbfbfb" },
                        },
                        children: Object(T.jsx)("div", { children: e }),
                      };
                    },
                  },
                  {
                    title: "Content Code",
                    dataIndex: "content_code",
                    key: "content_code",
                    fixed: "left",
                    filteredValue: null,
                    filters: r,
                    onFilter: function (e, t) {
                      return 0 === t.content_code.indexOf(e);
                    },
                    sorter: function (e, t) {
                      return e.content_code.length - t.content_code.length;
                    },
                    ellipsis: { showTitle: !1 },
                    width: 160,
                    render: function (e, t) {
                      return {
                        props: {
                          style: { background: t.stt % 2 === 0 && "#fbfbfb" },
                        },
                        children: Object(T.jsx)("div", {
                          children: t.content_code,
                        }),
                      };
                    },
                  },
                  {
                    title: "Length Script",
                    dataIndex: "salary_index",
                    key: "salary_index",
                    filteredValue: null,
                    fixed: "left",
                    filters: oe,
                    onFilter: function (e, t) {
                      return t.salary_index === e;
                    },
                    sorter: function (e, t) {
                      return e.salary_index - t.salary_index;
                    },
                    ellipsis: { showTitle: !1 },
                    width: 160,
                    render: function (e, t) {
                      return {
                        props: {
                          style: { background: t.stt % 2 === 0 && "#fbfbfb" },
                        },
                        children: Object(T.jsx)("div", {
                          children: Object(k.find)(oe, function (e) {
                            return e.value === t.salary_index;
                          }).text,
                        }),
                      };
                    },
                  },
                  Object(b.a)(
                    Object(b.a)(
                      {
                        title: "Full Title",
                        dataIndex: "full_title",
                        fixed: "left",
                        key: "full_title",
                        sorter: function (e, t) {
                          return e.full_title.length - t.full_title.length;
                        },
                        ellipsis: { showTitle: !1 },
                        width: 300,
                      },
                      a.getColumnSearchProps("full_title")
                    ),
                    {},
                    {
                      render: function (e, t) {
                        return {
                          props: {
                            style: { background: t.stt % 2 === 0 && "#fbfbfb" },
                          },
                          children: Object(T.jsx)("div", {
                            children: t.full_title,
                          }),
                        };
                      },
                    }
                  ),
                  {
                    title: "Writer Name",
                    dataIndex: "writer_name",
                    key: "writer_name",
                    sorter: function (e, t) {
                      return e.writer_name.length - t.writer_name.length;
                    },
                    ellipsis: { showTitle: !1 },
                    filters: c,
                    filteredValue: null,
                    onFilter: function (e, t) {
                      return 0 === t.writer_name.indexOf(e);
                    },
                    width: 150,
                    render: function (e, t) {
                      return Object(T.jsx)("div", { children: t.writer_name });
                    },
                  },
                  {
                    title: "Content Final",
                    dataIndex: "content_final",
                    key: "content_final",
                    sorter: function (e, t) {
                      return e.content_final.length - t.content_final.length;
                    },
                    ellipsis: { showTitle: !1 },
                    width: 130,
                    render: function (e, t) {
                      return Object(T.jsx)("a", {
                        target: "_blank",
                        href: t.content_final,
                        children: t.content_final,
                      });
                    },
                  },
                  {
                    title: "Composer Name",
                    dataIndex: "composer_name",
                    key: "composer_name",
                    sorter: function (e, t) {
                      return e.composer_name.length - t.composer_name.length;
                    },
                    ellipsis: { showTitle: !1 },
                    filters: l,
                    filteredValue: null,
                    onFilter: function (e, t) {
                      return 0 === t.composer_name.indexOf(e);
                    },
                    width: 175,
                    render: function (e, t) {
                      var n = a._isEditing(t);
                      return n
                        ? Object(T.jsx)(A.a, {
                            disabled: !n,
                            style: { width: "100%" },
                            value: [
                              t.composer_name,
                              t.composer_code,
                              t.composer_nick,
                            ],
                            onChange: function (e) {
                              return a.onChangeSelectComposerName(e, t);
                            },
                            children: Object(k.map)(l, function (e, t) {
                              return Object(T.jsx)(
                                st,
                                {
                                  className: "erpOption",
                                  value: [e.text, e.value, e.nick],
                                  children: e.text,
                                },
                                t
                              );
                            }),
                          })
                        : Object(T.jsx)("div", { children: t.composer_name });
                    },
                  },
                  {
                    title: "Audio Date",
                    dataIndex: "audio_date",
                    key: "audio_date",
                    sorter: function (e, t) {
                      return (
                        C()(e.audio_date).unix() - C()(t.audio_date).unix()
                      );
                    },
                    ellipsis: { showTitle: !1 },
                    width: 120,
                    render: function (e, t) {
                      return Object(T.jsx)("div", {
                        children: Object(k.isEmpty)(e)
                          ? ""
                          : C()(e).format("DD-MM-YYYY"),
                      });
                    },
                  },
                  {
                    title: "Link Audio",
                    dataIndex: "link_audio",
                    key: "link_audio",
                    sorter: function (e, t) {
                      return e.link_audio.length - t.link_audio.length;
                    },
                    ellipsis: { showTitle: !1 },
                    width: 130,
                    render: function (e, t) {
                      var n = a._isEditing(t);
                      return n
                        ? Object(T.jsx)(R.a, {
                            style: { width: "100%" },
                            disabled: !n,
                            value: t.link_audio,
                            onChange: function (e) {
                              return a.onChangeLinkAudio(e.target.value, t);
                            },
                          })
                        : Object(T.jsx)("a", {
                            target: "_blank",
                            href: t.link_audio,
                            children: t.link_audio,
                          });
                    },
                  },
                  {
                    title: "Audio Status",
                    key: "audio_status",
                    dataIndex: "audio_status",
                    filters: [
                      { text: "\u0110\xe3 duy\u1ec7t", value: 1 },
                      { text: "Ch\u01b0a duy\u1ec7t", value: 0 },
                    ],
                    filteredValue: null,
                    onFilter: function (e, t) {
                      return t.audio_status === e;
                    },
                    sorter: function (e, t) {
                      return e.audio_status - t.audio_status;
                    },
                    ellipsis: { showTitle: !1 },
                    width: 150,
                    render: function (e, t) {
                      var n = a._isEditing(t);
                      return Object(T.jsx)(m.a, {
                        style: {
                          color: "white",
                          backgroundColor:
                            0 === t.audio_status ? "red" : "#238c31",
                          fontWeight: "bold",
                          borderRadius: 5,
                          borderColor: 0 === t.audio_status ? "red" : "#238c31",
                        },
                        type: "primary",
                        disabled: !n,
                        onClick: function () {
                          return a.onDuyetAC(t);
                        },
                        children:
                          0 === t.audio_status
                            ? "Ch\u01b0a duy\u1ec7t"
                            : "\u0110\xe3 duy\u1ec7t",
                      });
                    },
                  },
                  {
                    title: "Từ khoá",
                    dataIndex: "audio_note",
                    key: "audio_note",
                    sorter: function (e, t) {
                      return e.audio_note.length - t.audio_note.length;
                    },
                    ellipsis: { showTitle: !1 },
                    width: 100,
                    render: function (e, t) {
                      var n = a._isEditing(t);
                      return n
                        ? Object(T.jsx)(R.a, {
                            style: { width: "100%" },
                            disabled: !n,
                            value: t.audio_note,
                            onChange: function (e) {
                              return a.onChangeLinkAudioNote(e.target.value, t);
                            },
                          })
                        : Object(T.jsx)("div", { children: t.audio_note });
                    },
                  },
                  {
                    title: "Link Youtube",
                    dataIndex: "link_youtube",
                    key: "link_youtube",
                    sorter: function (e, t) {
                      return e.link_youtube.length - t.link_youtube.length;
                    },
                    ellipsis: { showTitle: !1 },
                    width: 130,
                    render: function (e, t) {
                      return Object(T.jsx)("a", {
                        target: "_blank",
                        href: t.link_youtube,
                        children: t.link_youtube,
                      });
                    },
                  },
                  Object(b.a)(
                    Object(b.a)(
                      {
                        title: "Public Date",
                        dataIndex: "public_date",
                        key: "public_date",
                        sorter: function (e, t) {
                          return (
                            C()(e.public_date).unix() -
                            C()(t.public_date).unix()
                          );
                        },
                      },
                      a.getColumnFilterTimeProps("public_date")
                    ),
                    {},
                    {
                      ellipsis: { showTitle: !1 },
                      width: 150,
                      render: function (e, t) {
                        return Object(T.jsx)("div", {
                          children: Object(k.isEmpty)(e)
                            ? ""
                            : C()(e).format("DD-MM-YYYY"),
                        });
                      },
                    }
                  ),
                  {
                    title: "Thao t\xe1c",
                    key: "thaoTac",
                    align: "center",
                    fixed: "right",
                    width: 155,
                    render: function (e) {
                      var t = a._isEditing(e);
                      return {
                        props: {
                          style: { background: e.stt % 2 === 0 && "#fbfbfb" },
                        },
                        children: Object(T.jsx)(T.Fragment, {
                          children: t
                            ? Object(T.jsxs)(T.Fragment, {
                                children: [
                                  Object(T.jsx)(m.a, {
                                    style: {
                                      color: "white",
                                      backgroundColor: "#238c31",
                                      fontWeight: "bold",
                                      borderRadius: 5,
                                      borderColor: "#238c31",
                                    },
                                    type: "primary",
                                    icon: Object(T.jsx)(G.a, {}),
                                    onClick: function () {
                                      return a.onSubmitUpdate(e);
                                    },
                                  }),
                                  Object(T.jsx)("span", {
                                    children: "\xa0\xa0\xa0",
                                  }),
                                  Object(T.jsx)(m.a, {
                                    style: {
                                      color: "white",
                                      backgroundColor: "#238c31",
                                      fontWeight: "bold",
                                      borderRadius: 5,
                                      borderColor: "#238c31",
                                    },
                                    type: "primary",
                                    icon: Object(T.jsx)(J.a, {}),
                                    onClick: function () {
                                      return a.onCancelEdit(e);
                                    },
                                  }),
                                  Object(T.jsx)("span", {
                                    children: "\xa0\xa0\xa0",
                                  }),
                                ],
                              })
                            : Object(T.jsx)(m.a, {
                                style: {
                                  color: "white",
                                  backgroundColor: "#238c31",
                                  fontWeight: "bold",
                                  borderRadius: 5,
                                  borderColor: "#238c31",
                                },
                                type: "primary",
                                onClick: function () {
                                  return a._onChangeEditingKey(e);
                                },
                                children: "S\u1eeda",
                              }),
                        }),
                      };
                    },
                  },
                ],
                searchText: "",
                searchedColumn: "",
              }),
              (a.refAddNewContent = i.a.createRef()),
              a
            );
          }
          return (
            Object(h.a)(n, [
              {
                key: "componentDidMount",
                value: function () {
                  (this.mounted = !0), this._onRefreshData();
                },
              },
              {
                key: "UNSAFE_componentWillReceiveProps",
                value: function (e) {
                  var t = this;
                  this.props !== e &&
                    e.listContentCode &&
                    e.listContentCode !== this.props.listContentCode &&
                    this.mounted &&
                    this.setState(
                      { listContentCode: e.listContentCode },
                      function () {
                        t._onRefreshData();
                      }
                    );
                },
              },
              {
                key: "componentWillUnmount",
                value: function () {
                  this.mounted = !1;
                },
              },
              {
                key: "render",
                value: function () {
                  var e = this,
                    t = this.state,
                    n = t.dataChangeUpdate,
                    a = t.column,
                    i = t.filteredInfo,
                    o = t.sortedInfo,
                    r = t.isLoding,
                    c = t.searchTextMain,
                    l = Object(k.map)(a, function (t, n) {
                      switch (n) {
                        case 0:
                          return Object(b.a)(
                            Object(b.a)({}, t),
                            {},
                            {
                              sortOrder: Object(k.isEmpty)(o)
                                ? null
                                : "stt" === o.columnKey && o.order,
                              onHeaderCell: function (t) {
                                return {
                                  width: t.width,
                                  onResize: e.handleResize(n),
                                };
                              },
                            }
                          );
                        case 1:
                          return Object(b.a)(
                            Object(b.a)({}, t),
                            {},
                            {
                              filteredValue: Object(k.isEmpty)(i)
                                ? null
                                : i.content_code,
                              sortOrder: Object(k.isEmpty)(o)
                                ? null
                                : "content_code" === o.columnKey && o.order,
                              onHeaderCell: function (t) {
                                return {
                                  width: t.width,
                                  onResize: e.handleResize(n),
                                };
                              },
                            }
                          );
                        case 2:
                          return Object(b.a)(
                            Object(b.a)({}, t),
                            {},
                            {
                              filteredValue: Object(k.isEmpty)(i)
                                ? null
                                : i.salary_index,
                              sortOrder: Object(k.isEmpty)(o)
                                ? null
                                : "salary_index" === o.columnKey && o.order,
                              onHeaderCell: function (t) {
                                return {
                                  width: t.width,
                                  onResize: e.handleResize(n),
                                };
                              },
                            }
                          );
                        case 3:
                          return Object(b.a)(
                            Object(b.a)({}, t),
                            {},
                            {
                              filteredValue: Object(k.isEmpty)(i)
                                ? null
                                : i.full_title,
                              sortOrder: Object(k.isEmpty)(o)
                                ? null
                                : "full_title" === o.columnKey && o.order,
                              onHeaderCell: function (t) {
                                return {
                                  width: t.width,
                                  onResize: e.handleResize(n),
                                };
                              },
                            }
                          );
                        case 4:
                          return Object(b.a)(
                            Object(b.a)({}, t),
                            {},
                            {
                              filteredValue: Object(k.isEmpty)(i)
                                ? null
                                : i.writer_name,
                              sortOrder: Object(k.isEmpty)(o)
                                ? null
                                : "writer_name" === o.columnKey && o.order,
                              onHeaderCell: function (t) {
                                return {
                                  width: t.width,
                                  onResize: e.handleResize(n),
                                };
                              },
                            }
                          );
                        case 5:
                          return Object(b.a)(
                            Object(b.a)({}, t),
                            {},
                            {
                              sortOrder: Object(k.isEmpty)(o)
                                ? null
                                : "content_final" === o.columnKey && o.order,
                              onHeaderCell: function (t) {
                                return {
                                  width: t.width,
                                  onResize: e.handleResize(n),
                                };
                              },
                            }
                          );
                        case 6:
                          return Object(b.a)(
                            Object(b.a)({}, t),
                            {},
                            {
                              filteredValue: Object(k.isEmpty)(i)
                                ? null
                                : i.composer_name,
                              sortOrder: Object(k.isEmpty)(o)
                                ? null
                                : "composer_name" === o.columnKey && o.order,
                              onHeaderCell: function (t) {
                                return {
                                  width: t.width,
                                  onResize: e.handleResize(n),
                                };
                              },
                            }
                          );
                        case 7:
                          return Object(b.a)(
                            Object(b.a)({}, t),
                            {},
                            {
                              sortOrder: Object(k.isEmpty)(o)
                                ? null
                                : "audio_date" === o.columnKey && o.order,
                              onHeaderCell: function (t) {
                                return {
                                  width: t.width,
                                  onResize: e.handleResize(n),
                                };
                              },
                            }
                          );
                        case 8:
                          return Object(b.a)(
                            Object(b.a)({}, t),
                            {},
                            {
                              sortOrder: Object(k.isEmpty)(o)
                                ? null
                                : "link_audio" === o.columnKey && o.order,
                              onHeaderCell: function (t) {
                                return {
                                  width: t.width,
                                  onResize: e.handleResize(n),
                                };
                              },
                            }
                          );
                        case 9:
                          return Object(b.a)(
                            Object(b.a)({}, t),
                            {},
                            {
                              filteredValue: Object(k.isEmpty)(i)
                                ? null
                                : i.audio_status,
                              sortOrder: Object(k.isEmpty)(o)
                                ? null
                                : "audio_status" === o.columnKey && o.order,
                              onHeaderCell: function (t) {
                                return {
                                  width: t.width,
                                  onResize: e.handleResize(n),
                                };
                              },
                            }
                          );
                        case 10:
                          return Object(b.a)(
                            Object(b.a)({}, t),
                            {},
                            {
                              sortOrder: Object(k.isEmpty)(o)
                                ? null
                                : "audio_note" === o.columnKey && o.order,
                              onHeaderCell: function (t) {
                                return {
                                  width: t.width,
                                  onResize: e.handleResize(n),
                                };
                              },
                            }
                          );
                        case 11:
                          return Object(b.a)(
                            Object(b.a)({}, t),
                            {},
                            {
                              sortOrder: Object(k.isEmpty)(o)
                                ? null
                                : "link_youtube" === o.columnKey && o.order,
                              onHeaderCell: function (t) {
                                return {
                                  width: t.width,
                                  onResize: e.handleResize(n),
                                };
                              },
                            }
                          );
                        case 12:
                          return Object(b.a)(
                            Object(b.a)({}, t),
                            {},
                            {
                              filteredValue: Object(k.isEmpty)(i)
                                ? null
                                : i.public_date,
                              sortOrder: Object(k.isEmpty)(o)
                                ? null
                                : "public_date" === o.columnKey && o.order,
                              onHeaderCell: function (t) {
                                return {
                                  width: t.width,
                                  onResize: e.handleResize(n),
                                };
                              },
                            }
                          );
                        default:
                          return Object(b.a)(
                            Object(b.a)({}, t),
                            {},
                            {
                              onHeaderCell: function (t) {
                                return {
                                  width: t.width,
                                  onResize: e.handleResize(n),
                                };
                              },
                            }
                          );
                      }
                    });
                  return Object(T.jsxs)("div", {
                    children: [
                      Object(T.jsx)("div", {
                        style: { alignItems: "center", marginBottom: 10 },
                        children: Object(T.jsxs)(it.a, {
                          gutter: 12,
                          children: [
                            Object(T.jsx)(ot.a, {
                              span: 10,
                              children: Object(T.jsx)("div", {
                                style: { display: "flex", marginLeft: 10 },
                                children: Object(T.jsx)(m.a, {
                                  type: "primary",
                                  style: {
                                    backgroundColor:
                                      Object(k.isEmpty)(i) &&
                                      Object(k.isEmpty)(i) &&
                                      Object(k.isEmpty)(c)
                                        ? null
                                        : "red",
                                    borderColor:
                                      Object(k.isEmpty)(i) &&
                                      Object(k.isEmpty)(i) &&
                                      Object(k.isEmpty)(c)
                                        ? null
                                        : "red",
                                  },
                                  onClick: this.clearAll,
                                  children: "Xoá bộ lọc",
                                }),
                              }),
                            }),
                            Object(T.jsx)(ot.a, {
                              span: 6,
                              children: Object(T.jsx)(R.a, {
                                placeholder: "Tìm kiếm",
                                value: c,
                                onChange: this._handleSearch,
                                style: { width: 700, display: "flex" },
                              }),
                            }),
                          ],
                        }),
                      }),
                      Object(T.jsx)(F.a, {
                        loading: r,
                        size: "middle",
                        bordered: !0,
                        onChange: this.handleChange,
                        components: this.components,
                        style: { marginBottom: 15 },
                        rowClassName: function (e, t) {
                          if (t % 2 !== 0) return "rowBackgroundColor";
                        },
                        scroll: { x: 1500, y: 400 },
                        dataSource: n,
                        columns: l,
                        rowKey: "id",
                        pagination: n.length > 10 && { total: n.length },
                        sticky: !0,
                      }),
                      Object(T.jsx)("div", {
                        style: { height: 50 },
                        ref: this.refAddNewContent,
                      }),
                    ],
                  });
                },
              },
            ]),
            n
          );
        })(a.Component),
        _t = (R.a.Search, V.a.RangePicker),
        ft = function (e) {
          var t = e.onResize,
            n = e.width,
            a = Object(j.a)(e, ["onResize", "width"]);
          return n
            ? Object(T.jsx)(x.Resizable, {
                width: n,
                height: 0,
                handle: Object(T.jsx)("span", {
                  className: "react-resizable-handle",
                  onClick: function (e) {
                    e.stopPropagation();
                  },
                }),
                onResize: t,
                draggableOpts: { enableUserSelectHack: !1 },
                children: Object(T.jsx)("th", Object(b.a)({}, a)),
              })
            : Object(T.jsx)("th", Object(b.a)({}, a));
        },
        bt = (function (e) {
          Object(_.a)(n, e);
          var t = Object(f.a)(n);
          function n(e) {
            var a;
            Object(u.a)(this, n),
              ((a = t.call(this, e)).components = { header: { cell: ft } }),
              (a.getColumnSearchProps = function (e) {
                return {
                  filterDropdown: function (t) {
                    var n = t.setSelectedKeys,
                      i = t.selectedKeys,
                      o = t.confirm,
                      r = t.clearFilters;
                    return Object(T.jsxs)("div", {
                      style: { padding: 8 },
                      children: [
                        Object(T.jsx)(R.a, {
                          ref: function (e) {
                            a.searchInput = e;
                          },
                          placeholder: "Tìm kiếm",
                          value: i[0],
                          onChange: function (e) {
                            return n(e.target.value ? [e.target.value] : []);
                          },
                          onPressEnter: function () {
                            return a.handleSearch(i, o, e);
                          },
                          style: { marginBottom: 8, display: "block" },
                        }),
                        Object(T.jsxs)(N.b, {
                          children: [
                            Object(T.jsx)(m.a, {
                              type: "primary",
                              onClick: function () {
                                return a.handleSearch(i, o, e);
                              },
                              icon: Object(T.jsx)(B.a, {}),
                              size: "small",
                              style: { width: 90 },
                              children: "Search",
                            }),
                            Object(T.jsx)(m.a, {
                              onClick: function () {
                                return a.handleReset(r);
                              },
                              size: "small",
                              style: { width: 90 },
                              children: "Reset",
                            }),
                            Object(T.jsx)(m.a, {
                              type: "link",
                              size: "small",
                              onClick: function () {
                                o({ closeDropdown: !1 }),
                                  a.setState({
                                    searchText: i[0],
                                    searchedColumn: e,
                                  });
                              },
                              children: "Filter",
                            }),
                          ],
                        }),
                      ],
                    });
                  },
                  filterIcon: function (e) {
                    return Object(T.jsx)(B.a, {
                      style: { color: e ? "#ffffff" : void 0 },
                    });
                  },
                  filteredValue: null,
                  onFilter: function (t, n) {
                    return n[e]
                      ? n[e].toString().toLowerCase().includes(t.toLowerCase())
                      : "";
                  },
                  onFilterDropdownVisibleChange: function (e) {
                    e &&
                      setTimeout(function () {
                        return a.searchInput.select();
                      }, 100);
                  },
                  render: function (t) {
                    return a.state.searchedColumn === e
                      ? Object(T.jsx)(P.a, {
                          highlightStyle: {
                            backgroundColor: "#ffc069",
                            padding: 0,
                          },
                          searchWords: [a.state.searchText],
                          autoEscape: !0,
                          textToHighlight: t ? t.toString() : "",
                        })
                      : t;
                  },
                };
              }),
              (a.getColumnFilterTimeProps = function (e) {
                return {
                  filterDropdown: function (e) {
                    var t = e.setSelectedKeys,
                      n = e.selectedKeys,
                      a = e.confirm,
                      i = e.clearFilters;
                    return Object(T.jsxs)("div", {
                      style: { padding: 8 },
                      children: [
                        Object(T.jsx)("div", {
                          children: Object(T.jsx)(_t, {
                            style: { marginBottom: 8 },
                            value: n[0],
                            onChange: function (e) {
                              t(e ? [e] : []);
                            },
                          }),
                        }),
                        Object(T.jsxs)(N.b, {
                          children: [
                            Object(T.jsx)(m.a, {
                              type: "primary",
                              onClick: function () {
                                a();
                              },
                              icon: Object(T.jsx)(B.a, {}),
                              size: "small",
                              style: { width: 90, marginLeft: 10 },
                              children: "Search",
                            }),
                            Object(T.jsx)(m.a, {
                              onClick: function () {
                                return i();
                              },
                              size: "small",
                              style: { width: 90 },
                              children: "Reset",
                            }),
                          ],
                        }),
                      ],
                    });
                  },
                  filterIcon: function (e) {
                    return Object(T.jsx)(B.a, {
                      style: { color: e ? "#ffffff" : void 0 },
                    });
                  },
                  filteredValue: null,
                  onFilter: function (t, n) {
                    return n[e]
                      ? (C()(n[e]) < C()(t[1]) && C()(n[e]) > C()(t[0])) ||
                          C()(n.public_date).format("DDMMYYY") ===
                            C()(t[0]).format("DDMMYYY") ||
                          C()(n.public_date).format("DDMMYYY") ===
                            C()(t[1]).format("DDMMYYY")
                      : "";
                  },
                  onFilterDropdownVisibleChange: function (e) {},
                  render: function (t) {
                    return a.state.searchedColumn === e
                      ? Object(T.jsx)(P.a, {
                          highlightStyle: {
                            backgroundColor: "#ffc069",
                            padding: 0,
                          },
                          searchWords: [a.state.searchText],
                          autoEscape: !0,
                          textToHighlight: t ? t.toString() : "",
                        })
                      : t;
                  },
                };
              }),
              (a.handleSearch = function (e, t, n) {
                t(), a.setState({ searchText: e[0], searchedColumn: n });
              }),
              (a.handleReset = function (e) {
                e(), a.setState({ searchText: "" });
              }),
              (a._onRefreshData = function () {
                a.setState({ isLoding: !0 }),
                  v.a.get("".concat(K, "/activity")).then(function (e) {
                    a.setState({
                      activity: e.data.data,
                      activityChangeUpdate: e.data.data,
                    });
                  }),
                  v.a.get("".concat(K, "/tenticker")).then(function (e) {
                    var t = a.props,
                      n = t.data,
                      i = t.id,
                      o = e.data.data
                        .filter(function (e) {
                          return (
                            1 === e.audio_status &&
                            e.editor_name === n[i + 1][me] &&
                            1 === e.is_new
                          );
                        })
                        .sort(function (e, t) {
                          return null === t.add_ve_date
                            ? C()(0) - C()(e.add_ve_date)
                            : null === e.add_ve_date
                            ? C()(t.add_ve_date) - C()(0)
                            : C()(t.add_ve_date) - C()(e.add_ve_date);
                        }),
                      r = Object(k.map)(o, function (e, t) {
                        return Object(b.a)(
                          Object(b.a)({}, e),
                          {},
                          { stt: t + 1 }
                        );
                      });
                    a.setState({
                      dataSource: r,
                      dataChangeUpdate: r,
                      newDataTest: r,
                      isLoding: !1,
                    });
                  });
              }),
              (a._isEditing = function (e) {
                return e.id === a.state.editingKey;
              }),
              (a.onChangeLinkVideo = function (e, t) {
                var n = Object(k.map)(a.state.dataChangeUpdate, function (n) {
                  return n.id === t.id
                    ? Object(b.a)(Object(b.a)({}, n), {}, { link_video: e })
                    : Object(b.a)({}, n);
                });
                a.setState({ dataChangeUpdate: n });
              }),
              (a.onChangeFootage = function (e, t) {
                var n = Object(k.map)(a.state.dataChangeUpdate, function (n) {
                  return n.id === t.id
                    ? Object(b.a)(Object(b.a)({}, n), {}, { footage: e })
                    : Object(b.a)({}, n);
                });
                a.setState({ dataChangeUpdate: n });
              }),
              (a.onDuyetVE = function (e) {
                var t = Object(k.map)(a.state.dataChangeUpdate, function (t) {
                  return t.id === e.id
                    ? Object(b.a)(
                        Object(b.a)({}, t),
                        {},
                        { video_status: 0 === e.video_status ? 1 : 0 }
                      )
                    : Object(b.a)({}, t);
                });
                a.setState({ dataChangeUpdate: t });
              }),
              (a.onSubmitUpdate = function (e) {
                var t = {
                  data_id: e.id,
                  data: [
                    e.id,
                    e.content_code,
                    e.writer_code,
                    e.full_title,
                    e.content_raw,
                    e.writer_name,
                    e.content_status,
                    e.content_final,
                    e.content_note,
                    1 !== e.is_first_content_final ||
                    Object(k.isEmpty)(e.content_final)
                      ? null === e.content_date
                        ? null
                        : C()(e.content_date).format("YYYY-MM-DD HH:mm:ss")
                      : C()().format("YYYY-MM-DD HH:mm:ss"),
                    e.composer_code,
                    e.composer_name,
                    1 !== e.is_first_audio || Object(k.isEmpty)(e.link_audio)
                      ? null === e.audio_date
                        ? null
                        : C()(e.audio_date).format("YYYY-MM-DD HH:mm:ss")
                      : C()().format("YYYY-MM-DD HH:mm:ss"),
                    e.link_audio,
                    e.audio_status,
                    e.audio_note,
                    e.writer_nick,
                    e.composer_nick,
                    e.editor_name,
                    1 !== e.is_first_video || Object(k.isEmpty)(e.link_video)
                      ? null === e.video_date
                        ? null
                        : C()(e.video_date).format("YYYY-MM-DD HH:mm:ss")
                      : C()().format("YYYY-MM-DD HH:mm:ss"),
                    e.footage,
                    e.editor_code,
                    e.link_video,
                    e.video_status,
                    e.video_note,
                    e.link_youtube,
                    null === e.public_date
                      ? null
                      : C()(e.public_date).format("YYYY-MM-DD HH:mm:ss"),
                    Object(k.isEmpty)(e.link_youtube) || 1 !== e.is_first_public
                      ? 1
                      : 0,
                    (!Object(k.isEmpty)(e.content_final) &&
                      1 === e.is_first_content_final) ||
                    0 === e.is_first_content_final
                      ? 0
                      : 1,
                    (!Object(k.isEmpty)(e.link_audio) &&
                      1 === e.is_first_audio) ||
                    0 === e.is_first_audio
                      ? 0
                      : 1,
                    (!Object(k.isEmpty)(e.link_video) &&
                      1 === e.is_first_video) ||
                    0 === e.is_first_video
                      ? 0
                      : 1,
                    null === e.add_composer_date
                      ? null
                      : C()(e.add_composer_date).format("YYYY-MM-DD HH:mm:ss"),
                    null === e.add_ve_date
                      ? null
                      : C()(e.add_ve_date).format("YYYY-MM-DD HH:mm:ss"),
                    null === e.confirm_content_date
                      ? null
                      : C()(e.confirm_content_date).format(
                          "YYYY-MM-DD HH:mm:ss"
                        ),
                    null === e.confirm_audio_date
                      ? null
                      : C()(e.confirm_audio_date).format("YYYY-MM-DD HH:mm:ss"),
                    e.salary_index,
                    1,
                  ],
                };
                v.a.put("".concat(K, "/tenticker"), t).then(function (t) {
                  if (
                    (O.a.success({
                      message: "C\u1eadp nh\u1eadt th\xe0nh c\xf4ng",
                      style: { backgroundColor: "#f5fff8" },
                    }),
                    e.footage !== a.state.dataSource[e.stt - 1].footage)
                  ) {
                    var n =
                      "Thay \u0111\u1ed5i Footage c\u1ee7a ch\u1ee7 \u0111\u1ec1 "
                        .concat(
                          a.state.dataSource[e.stt - 1].full_title,
                          " t\u1eeb "
                        )
                        .concat(
                          a.state.dataSource[e.stt - 1].footage,
                          " th\xe0nh "
                        )
                        .concat(e.footage);
                    a.onUpdateActivity(n);
                  }
                  if (
                    e.link_video !== a.state.dataSource[e.stt - 1].link_video
                  ) {
                    var i =
                      "Thay \u0111\u1ed5i Link Video c\u1ee7a ch\u1ee7 \u0111\u1ec1 "
                        .concat(
                          a.state.dataSource[e.stt - 1].full_title,
                          " t\u1eeb "
                        )
                        .concat(
                          a.state.dataSource[e.stt - 1].link_video,
                          " th\xe0nh "
                        )
                        .concat(e.link_video);
                    a.onUpdateActivity(i);
                  }
                  a._onRefreshData();
                }),
                  a.setState({ editingKey: "" });
              }),
              (a.onCancelEdit = function (e) {
                var t = Object(k.map)(
                  a.state.dataChangeUpdate,
                  function (t, n) {
                    return t.id === e.id
                      ? Object(b.a)({}, a.state.dataSource[n])
                      : Object(b.a)({}, t);
                  }
                );
                a.setState({ editingKey: "", dataChangeUpdate: t });
              }),
              (a._onChangeEditingKey = function (e) {
                var t = Object(k.map)(
                  a.state.dataChangeUpdate,
                  function (e, t) {
                    return e.id === a.state.id
                      ? Object(b.a)({}, a.state.dataSource[t])
                      : Object(b.a)({}, e);
                  }
                );
                a.setState({ editingKey: e.id, dataChangeUpdate: t });
              }),
              (a.handleResize = function (e) {
                return function (t, n) {
                  var i = n.size;
                  a.setState(function (t) {
                    var n = t.column,
                      a = Object(d.a)(n);
                    return (
                      (a[e] = Object(b.a)(
                        Object(b.a)({}, a[e]),
                        {},
                        { width: i.width }
                      )),
                      { column: a }
                    );
                  });
                };
              }),
              (a._onCloseModal = function () {
                a.setState({ isShowModal: !1, chuDeInput: "" });
              }),
              (a._handleSearch = function (e) {
                var t = a.state.dataSource.filter(function (t) {
                  var n = t.full_title;
                  return (
                    (n = n.toLowerCase()),
                    (e.target.value = e.target.value.toLowerCase()),
                    n.includes(e.target.value)
                  );
                });
                a.setState({
                  dataChangeUpdate: t,
                  searchTextMain: e.target.value,
                });
              }),
              (a.onUpdateActivity = function (e) {
                v.a.get("".concat(K, "/activity")).then(function (t) {
                  var n = {
                    data: [
                      null,
                      C()().format("YYYY-MM-DD HH:mm:ss"),
                      e,
                      a.props.data[a.props.id + 1][me],
                    ],
                  };
                  v.a.post("".concat(K, "/activity/add"), n).then(function (e) {
                    v.a.get("".concat(K, "/activity")).then(function (e) {
                      a.setState({
                        activity: e.data.data,
                        activityChangeUpdate: e.data.data,
                      });
                    });
                  }),
                    a.setState({
                      activity: t.data.data,
                      activityChangeUpdate: t.data.data,
                    });
                });
              }),
              (a.handleChange = function (e, t, n) {
                var i = Object(k.filter)(a.state.newDataTest, function (e) {
                  return (
                    (t.content_code
                      ? Object(k.includes)(t.content_code, e.content_code)
                      : e) &&
                    (t.full_title
                      ? Object(k.includes)(t.full_title, e.full_title)
                      : e) &&
                    (t.salary_index
                      ? Object(k.includes)(t.salary_index, e.salary_index)
                      : e) &&
                    (t.video_status
                      ? Object(k.includes)(t.video_status, e.video_status)
                      : e) &&
                    (t.public_date
                      ? (C()(e.public_date) <
                          C()(Object(k.get)(t, "public_date[0][1]")) &&
                          C()(e.public_date) >
                            C()(Object(k.get)(t, "public_date[0][0]"))) ||
                        C()(e.public_date).format("DDMMYYY") ===
                          C()(Object(k.get)(t, "public_date[0][0]")).format(
                            "DDMMYYY"
                          ) ||
                        C()(e.public_date).format("DDMMYYY") ===
                          C()(Object(k.get)(t, "public_date[0][1]")).format(
                            "DDMMYYY"
                          )
                      : e)
                  );
                });
                (t.content_code ||
                  t.full_title ||
                  t.public_date ||
                  t.salary_index ||
                  t.video_status) &&
                  a.setState({ dataChangeUpdate: i }),
                  a.setState({ filteredInfo: t, sortedInfo: n }, function () {
                    var e = Object(k.map)(a.state.column, function (e, t) {
                      return 1 === t
                        ? Object(b.a)(
                            Object(b.a)({}, e),
                            {},
                            { filteredValue: a.state.filteredInfo.content_code }
                          )
                        : Object(b.a)({}, e);
                    });
                    a.setState({ column: e });
                  });
              }),
              (a.clearFilters = function () {
                a.setState({ filteredInfo: null });
              }),
              (a.clearSorters = function () {
                a.setState({ sortedInfo: null });
              }),
              (a.clearAll = function () {
                a.setState({
                  filteredInfo: null,
                  sortedInfo: null,
                  searchTextMain: "",
                  dataChangeUpdate: a.state.dataSource,
                });
              });
            for (
              var o = e.data,
                r = e.listContentCode,
                c = [],
                l = [],
                s = [],
                h = 0;
              h < o.length;
              h++
            )
              1 == o[h][_e] &&
                c.push({ value: o[h][me], text: o[h][me], nick: o[h][ye] }),
                1 == o[h][be] &&
                  l.push({ value: o[h][me], text: o[h][me], nick: o[h][ye] }),
                1 == o[h][ge] && s.push({ value: o[h][me], text: o[h][me] });
            return (
              (a.state = {
                chuDeInput: "",
                dataSource: [],
                dataChangeUpdate: [],
                newDataTest: [],
                activityChangeUpdate: [],
                activity: [],
                editingKey: "",
                isShowModal: !1,
                filteredInfo: null,
                searchTextMain: "",
                sortedInfo: null,
                isLoding: !1,
                column: [
                  {
                    title: "STT",
                    dataIndex: "id",
                    key: "id",
                    width: 70,
                    fixed: "left",
                    defaultSortOrder: "ascend",
                    sorter: function (e, t) {
                      return e.stt - t.stt;
                    },
                    render: function (e, t) {
                      return {
                        props: {
                          style: { background: t.stt % 2 === 0 && "#fbfbfb" },
                        },
                        children: Object(T.jsx)("div", { children: e }),
                      };
                    },
                  },
                  {
                    title: "Content Code",
                    dataIndex: "content_code",
                    key: "content_code",
                    fixed: "left",
                    filteredValue: null,
                    filters: r,
                    onFilter: function (e, t) {
                      return 0 === t.content_code.indexOf(e);
                    },
                    sorter: function (e, t) {
                      return e.content_code.length - t.content_code.length;
                    },
                    ellipsis: { showTitle: !1 },
                    width: 160,
                    render: function (e, t) {
                      return {
                        props: {
                          style: { background: t.stt % 2 === 0 && "#fbfbfb" },
                        },
                        children: Object(T.jsx)("div", {
                          children: t.content_code,
                        }),
                      };
                    },
                  },
                  {
                    title: "Length Script",
                    dataIndex: "salary_index",
                    key: "salary_index",
                    filteredValue: null,
                    fixed: "left",
                    filters: oe,
                    onFilter: function (e, t) {
                      return t.salary_index === e;
                    },
                    sorter: function (e, t) {
                      return e.salary_index - t.salary_index;
                    },
                    ellipsis: { showTitle: !1 },
                    width: 160,
                    render: function (e, t) {
                      return {
                        props: {
                          style: { background: t.stt % 2 === 0 && "#fbfbfb" },
                        },
                        children: Object(T.jsx)("div", {
                          children: Object(k.find)(oe, function (e) {
                            return e.value === t.salary_index;
                          }).text,
                        }),
                      };
                    },
                  },
                  Object(b.a)(
                    Object(b.a)(
                      {
                        title: "Full Title",
                        dataIndex: "full_title",
                        fixed: "left",
                        key: "full_title",
                        sorter: function (e, t) {
                          return e.full_title.length - t.full_title.length;
                        },
                        ellipsis: { showTitle: !1 },
                        width: 300,
                      },
                      a.getColumnSearchProps("full_title")
                    ),
                    {},
                    {
                      render: function (e, t) {
                        return {
                          props: {
                            style: { background: t.stt % 2 === 0 && "#fbfbfb" },
                          },
                          children: Object(T.jsx)("div", {
                            children: t.full_title,
                          }),
                        };
                      },
                    }
                  ),
                  {
                    title: "Content Final",
                    dataIndex: "content_final",
                    key: "content_final",
                    sorter: function (e, t) {
                      return e.content_final.length - t.content_final.length;
                    },
                    ellipsis: { showTitle: !1 },
                    width: 130,
                    render: function (e, t) {
                      return Object(T.jsx)("a", {
                        target: "_blank",
                        href: t.content_final,
                        children: t.content_final,
                      });
                    },
                  },
                  {
                    title: "Link Audio",
                    dataIndex: "link_audio",
                    key: "link_audio",
                    sorter: function (e, t) {
                      return e.link_audio.length - t.link_audio.length;
                    },
                    ellipsis: { showTitle: !1 },
                    width: 130,
                    render: function (e, t) {
                      return Object(T.jsx)("a", {
                        target: "_blank",
                        href: t.link_audio,
                        children: t.link_audio,
                      });
                    },
                  },
                  {
                    title: "Nickname người viết",
                    dataIndex: "writer_nick",
                    key: "writer_nick",
                    width: 120,
                    sorter: function (e, t) {
                      return e.writer_nick.length - t.writer_nick.length;
                    },
                    ellipsis: { showTitle: !1 },
                    render: function (e, t) {
                      return Object(T.jsx)("div", { children: t.writer_nick });
                    },
                  },
                  {
                    title: "Nickname người thu âm",
                    dataIndex: "composer_nick",
                    sorter: function (e, t) {
                      return e.composer_nick.length - t.composer_nick.length;
                    },
                    ellipsis: { showTitle: !1 },
                    key: "composer_nick",
                    width: 120,
                    render: function (e, t) {
                      return Object(T.jsx)("div", {
                        children: t.composer_nick,
                      });
                    },
                  },
                  {
                    title: "Footage",
                    dataIndex: "footage",
                    key: "footage",
                    sorter: function (e, t) {
                      return e.footage.length - t.footage.length;
                    },
                    ellipsis: { showTitle: !1 },
                    width: 130,
                    render: function (e, t) {
                      return Object(T.jsx)("a", {
                        target: "_blank",
                        href: t.footage,
                        children: t.footage,
                      });
                    },
                  },
                  {
                    title: "Link Video",
                    dataIndex: "link_video",
                    key: "link_video",
                    sorter: function (e, t) {
                      return e.link_video.length - t.link_video.length;
                    },
                    ellipsis: { showTitle: !1 },
                    width: 130,
                    render: function (e, t) {
                      var n = a._isEditing(t);
                      return n
                        ? Object(T.jsx)(R.a, {
                            style: { width: "100%" },
                            disabled: !n,
                            value: t.link_video,
                            onChange: function (e) {
                              return a.onChangeLinkVideo(e.target.value, t);
                            },
                          })
                        : Object(T.jsx)("a", {
                            target: "_blank",
                            href: t.link_video,
                            children: t.link_video,
                          });
                    },
                  },
                  {
                    title: "Video Status",
                    key: "video_status",
                    dataIndex: "video_status",
                    filters: [
                      { text: "\u0110\xe3 duy\u1ec7t", value: 1 },
                      { text: "Ch\u01b0a duy\u1ec7t", value: 0 },
                    ],
                    filteredValue: null,
                    onFilter: function (e, t) {
                      return t.video_status === e;
                    },
                    sorter: function (e, t) {
                      return e.video_status - t.video_status;
                    },
                    ellipsis: { showTitle: !1 },
                    width: 145,
                    render: function (e, t) {
                      return Object(T.jsx)(m.a, {
                        style: {
                          color: "white",
                          backgroundColor:
                            0 === t.video_status ? "red" : "#238c31",
                          fontWeight: "bold",
                          borderRadius: 5,
                          borderColor: 0 === t.video_status ? "red" : "#238c31",
                        },
                        type: "primary",
                        disabled: !0,
                        onClick: function () {
                          return a.onDuyetVE(t);
                        },
                        children:
                          0 === t.video_status
                            ? "Ch\u01b0a duy\u1ec7t"
                            : "\u0110\xe3 duy\u1ec7t",
                      });
                    },
                  },
                  {
                    title: "Ảnh thumbnail",
                    dataIndex: "video_note",
                    key: "video_note",
                    sorter: function (e, t) {
                      return e.video_note.length - t.video_note.length;
                    },
                    ellipsis: { showTitle: !1 },
                    width: 100,
                    render: function (e, t) {
                      return Object(T.jsx)("div", { children: t.video_note });
                    },
                  },
                  {
                    title: "Link Youtube",
                    dataIndex: "link_youtube",
                    key: "link_youtube",
                    sorter: function (e, t) {
                      return e.link_youtube.length - t.link_youtube.length;
                    },
                    ellipsis: { showTitle: !1 },
                    width: 130,
                    render: function (e, t) {
                      return Object(T.jsx)("a", {
                        target: "_blank",
                        href: t.link_youtube,
                        children: t.link_youtube,
                      });
                    },
                  },
                  {
                    title: "Video Date",
                    dataIndex: "video_date",
                    key: "video_date",
                    sorter: function (e, t) {
                      return (
                        C()(e.video_date).unix() - C()(t.video_date).unix()
                      );
                    },
                    ellipsis: { showTitle: !1 },
                    width: 120,
                    render: function (e, t) {
                      return Object(T.jsx)("div", {
                        children: Object(k.isEmpty)(e)
                          ? ""
                          : C()(e).format("DD-MM-YYYY"),
                      });
                    },
                  },
                  Object(b.a)(
                    Object(b.a)(
                      {
                        title: "Public Date",
                        dataIndex: "public_date",
                        key: "public_date",
                        sorter: function (e, t) {
                          return (
                            C()(e.public_date).unix() -
                            C()(t.public_date).unix()
                          );
                        },
                      },
                      a.getColumnFilterTimeProps("public_date")
                    ),
                    {},
                    {
                      ellipsis: { showTitle: !1 },
                      width: 150,
                      render: function (e, t) {
                        return Object(T.jsx)("div", {
                          children: Object(k.isEmpty)(e)
                            ? ""
                            : C()(e).format("DD-MM-YYYY"),
                        });
                      },
                    }
                  ),
                  {
                    title: "Thao t\xe1c",
                    key: "thaoTac",
                    align: "center",
                    fixed: "right",
                    width: 155,
                    render: function (e) {
                      var t = a._isEditing(e);
                      return {
                        props: {
                          style: { background: e.stt % 2 === 0 && "#fbfbfb" },
                        },
                        children: Object(T.jsx)(T.Fragment, {
                          children: t
                            ? Object(T.jsxs)(T.Fragment, {
                                children: [
                                  Object(T.jsx)(m.a, {
                                    style: {
                                      color: "white",
                                      backgroundColor: "#238c31",
                                      fontWeight: "bold",
                                      borderRadius: 5,
                                      borderColor: "#238c31",
                                    },
                                    type: "primary",
                                    icon: Object(T.jsx)(G.a, {}),
                                    onClick: function () {
                                      return a.onSubmitUpdate(e);
                                    },
                                  }),
                                  Object(T.jsx)("span", {
                                    children: "\xa0\xa0\xa0",
                                  }),
                                  Object(T.jsx)(m.a, {
                                    style: {
                                      color: "white",
                                      backgroundColor: "#238c31",
                                      fontWeight: "bold",
                                      borderRadius: 5,
                                      borderColor: "#238c31",
                                    },
                                    type: "primary",
                                    icon: Object(T.jsx)(J.a, {}),
                                    onClick: function () {
                                      return a.onCancelEdit(e);
                                    },
                                  }),
                                  Object(T.jsx)("span", {
                                    children: "\xa0\xa0\xa0",
                                  }),
                                ],
                              })
                            : Object(T.jsx)(m.a, {
                                style: {
                                  color: "white",
                                  backgroundColor: "#238c31",
                                  fontWeight: "bold",
                                  borderRadius: 5,
                                  borderColor: "#238c31",
                                },
                                type: "primary",
                                onClick: function () {
                                  return a._onChangeEditingKey(e);
                                },
                                children: "S\u1eeda",
                              }),
                        }),
                      };
                    },
                  },
                ],
                searchText: "",
                searchedColumn: "",
              }),
              (a.refAddNewContent = i.a.createRef()),
              a
            );
          }
          return (
            Object(h.a)(n, [
              {
                key: "componentDidMount",
                value: function () {
                  this._onRefreshData();
                },
              },
              {
                key: "render",
                value: function () {
                  var e = this,
                    t = this.state,
                    n = t.dataChangeUpdate,
                    a = t.column,
                    i = t.filteredInfo,
                    o = t.sortedInfo,
                    r = t.isLoding,
                    c = t.searchTextMain,
                    l = Object(k.map)(a, function (t, n) {
                      switch (n) {
                        case 0:
                          return Object(b.a)(
                            Object(b.a)({}, t),
                            {},
                            {
                              sortOrder: Object(k.isEmpty)(o)
                                ? null
                                : "stt" === o.columnKey && o.order,
                              onHeaderCell: function (t) {
                                return {
                                  width: t.width,
                                  onResize: e.handleResize(n),
                                };
                              },
                            }
                          );
                        case 1:
                          return Object(b.a)(
                            Object(b.a)({}, t),
                            {},
                            {
                              filteredValue: Object(k.isEmpty)(i)
                                ? null
                                : i.content_code,
                              sortOrder: Object(k.isEmpty)(o)
                                ? null
                                : "content_code" === o.columnKey && o.order,
                              onHeaderCell: function (t) {
                                return {
                                  width: t.width,
                                  onResize: e.handleResize(n),
                                };
                              },
                            }
                          );
                        case 2:
                          return Object(b.a)(
                            Object(b.a)({}, t),
                            {},
                            {
                              filteredValue: Object(k.isEmpty)(i)
                                ? null
                                : i.salary_index,
                              sortOrder: Object(k.isEmpty)(o)
                                ? null
                                : "salary_index" === o.columnKey && o.order,
                              onHeaderCell: function (t) {
                                return {
                                  width: t.width,
                                  onResize: e.handleResize(n),
                                };
                              },
                            }
                          );
                        case 3:
                          return Object(b.a)(
                            Object(b.a)({}, t),
                            {},
                            {
                              filteredValue: Object(k.isEmpty)(i)
                                ? null
                                : i.full_title,
                              sortOrder: Object(k.isEmpty)(o)
                                ? null
                                : "full_title" === o.columnKey && o.order,
                              onHeaderCell: function (t) {
                                return {
                                  width: t.width,
                                  onResize: e.handleResize(n),
                                };
                              },
                            }
                          );
                        case 4:
                          return Object(b.a)(
                            Object(b.a)({}, t),
                            {},
                            {
                              sortOrder: Object(k.isEmpty)(o)
                                ? null
                                : "content_final" === o.columnKey && o.order,
                              onHeaderCell: function (t) {
                                return {
                                  width: t.width,
                                  onResize: e.handleResize(n),
                                };
                              },
                            }
                          );
                        case 5:
                          return Object(b.a)(
                            Object(b.a)({}, t),
                            {},
                            {
                              sortOrder: Object(k.isEmpty)(o)
                                ? null
                                : "link_audio" === o.columnKey && o.order,
                              onHeaderCell: function (t) {
                                return {
                                  width: t.width,
                                  onResize: e.handleResize(n),
                                };
                              },
                            }
                          );
                        case 6:
                          return Object(b.a)(
                            Object(b.a)({}, t),
                            {},
                            {
                              sortOrder: Object(k.isEmpty)(o)
                                ? null
                                : "writer_nick" === o.columnKey && o.order,
                              onHeaderCell: function (t) {
                                return {
                                  width: t.width,
                                  onResize: e.handleResize(n),
                                };
                              },
                            }
                          );
                        case 7:
                          return Object(b.a)(
                            Object(b.a)({}, t),
                            {},
                            {
                              sortOrder: Object(k.isEmpty)(o)
                                ? null
                                : "composer_nick" === o.columnKey && o.order,
                              onHeaderCell: function (t) {
                                return {
                                  width: t.width,
                                  onResize: e.handleResize(n),
                                };
                              },
                            }
                          );
                        case 8:
                          return Object(b.a)(
                            Object(b.a)({}, t),
                            {},
                            {
                              sortOrder: Object(k.isEmpty)(o)
                                ? null
                                : "footage" === o.columnKey && o.order,
                              onHeaderCell: function (t) {
                                return {
                                  width: t.width,
                                  onResize: e.handleResize(n),
                                };
                              },
                            }
                          );
                        case 9:
                          return Object(b.a)(
                            Object(b.a)({}, t),
                            {},
                            {
                              sortOrder: Object(k.isEmpty)(o)
                                ? null
                                : "link_video" === o.columnKey && o.order,
                              onHeaderCell: function (t) {
                                return {
                                  width: t.width,
                                  onResize: e.handleResize(n),
                                };
                              },
                            }
                          );
                        case 10:
                          return Object(b.a)(
                            Object(b.a)({}, t),
                            {},
                            {
                              filteredValue: Object(k.isEmpty)(i)
                                ? null
                                : i.video_status,
                              sortOrder: Object(k.isEmpty)(o)
                                ? null
                                : "video_status" === o.columnKey && o.order,
                              onHeaderCell: function (t) {
                                return {
                                  width: t.width,
                                  onResize: e.handleResize(n),
                                };
                              },
                            }
                          );
                        case 11:
                          return Object(b.a)(
                            Object(b.a)({}, t),
                            {},
                            {
                              sortOrder: Object(k.isEmpty)(o)
                                ? null
                                : "video_note" === o.columnKey && o.order,
                              onHeaderCell: function (t) {
                                return {
                                  width: t.width,
                                  onResize: e.handleResize(n),
                                };
                              },
                            }
                          );
                        case 12:
                          return Object(b.a)(
                            Object(b.a)({}, t),
                            {},
                            {
                              sortOrder: Object(k.isEmpty)(o)
                                ? null
                                : "link_youtube" === o.columnKey && o.order,
                              onHeaderCell: function (t) {
                                return {
                                  width: t.width,
                                  onResize: e.handleResize(n),
                                };
                              },
                            }
                          );
                        case 13:
                          return Object(b.a)(
                            Object(b.a)({}, t),
                            {},
                            {
                              sortOrder: Object(k.isEmpty)(o)
                                ? null
                                : "video_date" === o.columnKey && o.order,
                              onHeaderCell: function (t) {
                                return {
                                  width: t.width,
                                  onResize: e.handleResize(n),
                                };
                              },
                            }
                          );
                        case 14:
                          return Object(b.a)(
                            Object(b.a)({}, t),
                            {},
                            {
                              filteredValue: Object(k.isEmpty)(i)
                                ? null
                                : i.public_date,
                              sortOrder: Object(k.isEmpty)(o)
                                ? null
                                : "public_date" === o.columnKey && o.order,
                              onHeaderCell: function (t) {
                                return {
                                  width: t.width,
                                  onResize: e.handleResize(n),
                                };
                              },
                            }
                          );
                        default:
                          return Object(b.a)(
                            Object(b.a)({}, t),
                            {},
                            {
                              onHeaderCell: function (t) {
                                return {
                                  width: t.width,
                                  onResize: e.handleResize(n),
                                };
                              },
                            }
                          );
                      }
                    });
                  return Object(T.jsxs)("div", {
                    children: [
                      Object(T.jsx)("div", {
                        style: { alignItems: "center", marginBottom: 10 },
                        children: Object(T.jsxs)(it.a, {
                          gutter: 12,
                          children: [
                            Object(T.jsx)(ot.a, {
                              span: 10,
                              children: Object(T.jsx)("div", {
                                style: { display: "flex", marginLeft: 10 },
                                children: Object(T.jsx)(m.a, {
                                  type: "primary",
                                  style: {
                                    backgroundColor:
                                      Object(k.isEmpty)(i) &&
                                      Object(k.isEmpty)(i) &&
                                      Object(k.isEmpty)(c)
                                        ? null
                                        : "red",
                                    borderColor:
                                      Object(k.isEmpty)(i) &&
                                      Object(k.isEmpty)(i) &&
                                      Object(k.isEmpty)(c)
                                        ? null
                                        : "red",
                                  },
                                  onClick: this.clearAll,
                                  children: "Xoá bộ lọc",
                                }),
                              }),
                            }),
                            Object(T.jsx)(ot.a, {
                              span: 6,
                              children: Object(T.jsx)(R.a, {
                                placeholder: "Tìm kiếm",
                                value: c,
                                onChange: this._handleSearch,
                                style: { width: 700, display: "flex" },
                              }),
                            }),
                          ],
                        }),
                      }),
                      Object(T.jsx)(F.a, {
                        loading: r,
                        size: "middle",
                        bordered: !0,
                        onChange: this.handleChange,
                        components: this.components,
                        style: { marginBottom: 15 },
                        rowClassName: function (e, t) {
                          if (t % 2 !== 0) return "rowBackgroundColor";
                        },
                        scroll: { x: 1500, y: 400 },
                        dataSource: n,
                        columns: l,
                        rowKey: "id",
                        pagination: n.length > 10 && { total: n.length },
                        sticky: !0,
                      }),
                      Object(T.jsx)("div", {
                        style: { height: 50 },
                        ref: this.refAddNewContent,
                      }),
                    ],
                  });
                },
              },
            ]),
            n
          );
        })(a.Component),
        jt = A.a.Option,
        gt = (R.a.Search, V.a.RangePicker),
        pt = function (e) {
          var t = e.onResize,
            n = e.width,
            a = Object(j.a)(e, ["onResize", "width"]);
          return n
            ? Object(T.jsx)(x.Resizable, {
                width: n,
                height: 0,
                handle: Object(T.jsx)("span", {
                  className: "react-resizable-handle",
                  onClick: function (e) {
                    e.stopPropagation();
                  },
                }),
                onResize: t,
                draggableOpts: { enableUserSelectHack: !1 },
                children: Object(T.jsx)("th", Object(b.a)({}, a)),
              })
            : Object(T.jsx)("th", Object(b.a)({}, a));
        },
        Ot = (function (e) {
          Object(_.a)(n, e);
          var t = Object(f.a)(n);
          function n(e) {
            var a;
            Object(u.a)(this, n),
              ((a = t.call(this, e)).components = { header: { cell: pt } }),
              (a.getColumnSearchProps = function (e) {
                return {
                  filterDropdown: function (t) {
                    var n = t.setSelectedKeys,
                      i = t.selectedKeys,
                      o = t.confirm,
                      r = t.clearFilters;
                    return Object(T.jsxs)("div", {
                      style: { padding: 8 },
                      children: [
                        Object(T.jsx)(R.a, {
                          ref: function (e) {
                            a.searchInput = e;
                          },
                          placeholder: "Tìm kiếm",
                          value: i[0],
                          onChange: function (e) {
                            return n(e.target.value ? [e.target.value] : []);
                          },
                          onPressEnter: function () {
                            return a.handleSearch(i, o, e);
                          },
                          style: { marginBottom: 8, display: "block" },
                        }),
                        Object(T.jsxs)(N.b, {
                          children: [
                            Object(T.jsx)(m.a, {
                              type: "primary",
                              onClick: function () {
                                return a.handleSearch(i, o, e);
                              },
                              icon: Object(T.jsx)(B.a, {}),
                              size: "small",
                              style: { width: 90 },
                              children: "Search",
                            }),
                            Object(T.jsx)(m.a, {
                              onClick: function () {
                                return a.handleReset(r);
                              },
                              size: "small",
                              style: { width: 90 },
                              children: "Reset",
                            }),
                            Object(T.jsx)(m.a, {
                              type: "link",
                              size: "small",
                              onClick: function () {
                                o({ closeDropdown: !1 }),
                                  a.setState({
                                    searchText: i[0],
                                    searchedColumn: e,
                                  });
                              },
                              children: "Filter",
                            }),
                          ],
                        }),
                      ],
                    });
                  },
                  filterIcon: function (e) {
                    return Object(T.jsx)(B.a, {
                      style: { color: e ? "#ffffff" : void 0 },
                    });
                  },
                  filteredValue: null,
                  onFilter: function (t, n) {
                    return n[e]
                      ? n[e].toString().toLowerCase().includes(t.toLowerCase())
                      : "";
                  },
                  onFilterDropdownVisibleChange: function (e) {
                    e &&
                      setTimeout(function () {
                        return a.searchInput.select();
                      }, 100);
                  },
                  render: function (t) {
                    return a.state.searchedColumn === e
                      ? Object(T.jsx)(P.a, {
                          highlightStyle: {
                            backgroundColor: "#ffc069",
                            padding: 0,
                          },
                          searchWords: [a.state.searchText],
                          autoEscape: !0,
                          textToHighlight: t ? t.toString() : "",
                        })
                      : t;
                  },
                };
              }),
              (a.getColumnFilterTimeProps = function (e) {
                return {
                  filterDropdown: function (e) {
                    var t = e.setSelectedKeys,
                      n = e.selectedKeys,
                      a = e.confirm,
                      i = e.clearFilters;
                    return Object(T.jsxs)("div", {
                      style: { padding: 8 },
                      children: [
                        Object(T.jsx)("div", {
                          children: Object(T.jsx)(gt, {
                            style: { marginBottom: 8 },
                            value: n[0],
                            onChange: function (e) {
                              t(e ? [e] : []);
                            },
                          }),
                        }),
                        Object(T.jsxs)(N.b, {
                          children: [
                            Object(T.jsx)(m.a, {
                              type: "primary",
                              onClick: function () {
                                a();
                              },
                              icon: Object(T.jsx)(B.a, {}),
                              size: "small",
                              style: { width: 90, marginLeft: 10 },
                              children: "Search",
                            }),
                            Object(T.jsx)(m.a, {
                              onClick: function () {
                                return i();
                              },
                              size: "small",
                              style: { width: 90 },
                              children: "Reset",
                            }),
                          ],
                        }),
                      ],
                    });
                  },
                  filterIcon: function (e) {
                    return Object(T.jsx)(B.a, {
                      style: { color: e ? "#ffffff" : void 0 },
                    });
                  },
                  filteredValue: null,
                  onFilter: function (t, n) {
                    return n[e]
                      ? (C()(n[e]) < C()(t[1]) && C()(n[e]) > C()(t[0])) ||
                          C()(n.public_date).format("DDMMYYY") ===
                            C()(t[0]).format("DDMMYYY") ||
                          C()(n.public_date).format("DDMMYYY") ===
                            C()(t[1]).format("DDMMYYY")
                      : "";
                  },
                  onFilterDropdownVisibleChange: function (e) {},
                  render: function (t) {
                    return a.state.searchedColumn === e
                      ? Object(T.jsx)(P.a, {
                          highlightStyle: {
                            backgroundColor: "#ffc069",
                            padding: 0,
                          },
                          searchWords: [a.state.searchText],
                          autoEscape: !0,
                          textToHighlight: t ? t.toString() : "",
                        })
                      : t;
                  },
                };
              }),
              (a.handleSearch = function (e, t, n) {
                t(), a.setState({ searchText: e[0], searchedColumn: n });
              }),
              (a.handleReset = function (e) {
                e(), a.setState({ searchText: "" });
              }),
              (a._onRefreshData = function () {
                a.setState({ isLoding: !0 }),
                  v.a.get("".concat(K, "/activity")).then(function (e) {
                    a.setState({
                      activity: e.data.data,
                      activityChangeUpdate: e.data.data,
                    });
                  }),
                  v.a.get("".concat(K, "/tenticker")).then(function (e) {
                    var t = Object(k.map)(
                        a.props.listContentCode,
                        function (e, t) {
                          return e.value;
                        }
                      ),
                      n = e.data.data
                        .filter(function (e) {
                          return (
                            1 === e.audio_status &&
                            t.includes(e.content_code) &&
                            1 === e.is_new
                          );
                        })
                        .sort(function (e, t) {
                          return null === t.confirm_audio_date
                            ? C()(0) - C()(e.confirm_audio_date)
                            : null === e.confirm_audio_date
                            ? C()(t.confirm_audio_date) - C()(0)
                            : C()(t.confirm_audio_date) -
                              C()(e.confirm_audio_date);
                        }),
                      i = Object(k.map)(n, function (e, t) {
                        return Object(b.a)(
                          Object(b.a)({}, e),
                          {},
                          { stt: t + 1 }
                        );
                      });
                    a.setState({
                      dataSource: i,
                      dataChangeUpdate: i,
                      newDataTest: i,
                      isLoding: !1,
                      editingKey: "",
                    });
                  });
              }),
              (a._isEditing = function (e) {
                return e.id === a.state.editingKey;
              }),
              (a.onChangeLinkVideo = function (e, t) {
                var n = Object(k.map)(a.state.dataChangeUpdate, function (n) {
                  return n.id === t.id
                    ? Object(b.a)(Object(b.a)({}, n), {}, { link_video: e })
                    : Object(b.a)({}, n);
                });
                a.setState({ dataChangeUpdate: n });
              }),
              (a.onChangeFootage = function (e, t) {
                var n = Object(k.map)(a.state.dataChangeUpdate, function (n) {
                  return n.id === t.id
                    ? Object(b.a)(Object(b.a)({}, n), {}, { footage: e })
                    : Object(b.a)({}, n);
                });
                a.setState({ dataChangeUpdate: n });
              }),
              (a.onChangeLinkVideoNote = function (e, t) {
                var n = Object(k.map)(a.state.dataChangeUpdate, function (n) {
                  return n.id === t.id
                    ? Object(b.a)(Object(b.a)({}, n), {}, { video_note: e })
                    : Object(b.a)({}, n);
                });
                a.setState({ dataChangeUpdate: n });
              }),
              (a.onChangeSelectEditorName = function (e, t) {
                var n = Object(k.map)(a.state.dataChangeUpdate, function (n) {
                  return n.id === t.id
                    ? Object(b.a)(
                        Object(b.a)({}, n),
                        {},
                        { editor_name: e[0], editor_code: e[1] }
                      )
                    : Object(b.a)({}, n);
                });
                a.setState({ dataChangeUpdate: n });
              }),
              (a.onDuyetVE = function (e) {
                var t = Object(k.map)(a.state.dataChangeUpdate, function (t) {
                  return t.id === e.id
                    ? Object(b.a)(
                        Object(b.a)({}, t),
                        {},
                        { video_status: 0 === e.video_status ? 1 : 0 }
                      )
                    : Object(b.a)({}, t);
                });
                a.setState({ dataChangeUpdate: t });
              }),
              (a.onSubmitUpdate = function (e) {
                var t = {
                  data_id: e.id,
                  data: [
                    e.id,
                    e.content_code,
                    e.writer_code,
                    e.full_title,
                    e.content_raw,
                    e.writer_name,
                    e.content_status,
                    e.content_final,
                    e.content_note,
                    1 !== e.is_first_content_final ||
                    Object(k.isEmpty)(e.content_final)
                      ? null === e.content_date
                        ? null
                        : C()(e.content_date).format("YYYY-MM-DD HH:mm:ss")
                      : C()().format("YYYY-MM-DD HH:mm:ss"),
                    e.composer_code,
                    e.composer_name,
                    1 !== e.is_first_audio || Object(k.isEmpty)(e.link_audio)
                      ? null === e.audio_date
                        ? null
                        : C()(e.audio_date).format("YYYY-MM-DD HH:mm:ss")
                      : C()().format("YYYY-MM-DD HH:mm:ss"),
                    e.link_audio,
                    e.audio_status,
                    e.audio_note,
                    e.writer_nick,
                    e.composer_nick,
                    e.editor_name,
                    1 !== e.is_first_video || Object(k.isEmpty)(e.link_video)
                      ? null === e.video_date
                        ? null
                        : C()(e.video_date).format("YYYY-MM-DD HH:mm:ss")
                      : C()().format("YYYY-MM-DD HH:mm:ss"),
                    e.footage,
                    e.editor_code,
                    e.link_video,
                    e.video_status,
                    e.video_note,
                    e.link_youtube,
                    null === e.public_date
                      ? null
                      : C()(e.public_date).format("YYYY-MM-DD HH:mm:ss"),
                    Object(k.isEmpty)(e.link_youtube) || 1 !== e.is_first_public
                      ? 1
                      : 0,
                    (!Object(k.isEmpty)(e.content_final) &&
                      1 === e.is_first_content_final) ||
                    0 === e.is_first_content_final
                      ? 0
                      : 1,
                    (!Object(k.isEmpty)(e.link_audio) &&
                      1 === e.is_first_audio) ||
                    0 === e.is_first_audio
                      ? 0
                      : 1,
                    (!Object(k.isEmpty)(e.link_video) &&
                      1 === e.is_first_video) ||
                    0 === e.is_first_video
                      ? 0
                      : 1,
                    null === e.add_composer_date
                      ? null
                      : C()(e.add_composer_date).format("YYYY-MM-DD HH:mm:ss"),
                    e.editor_name !== a.state.dataSource[e.stt - 1].editor_name
                      ? C()().format("YYYY-MM-DD HH:mm:ss")
                      : null === e.add_ve_date
                      ? null
                      : C()(e.add_ve_date).format("YYYY-MM-DD HH:mm:ss"),
                    null === e.confirm_content_date
                      ? null
                      : C()(e.confirm_content_date).format(
                          "YYYY-MM-DD HH:mm:ss"
                        ),
                    null === e.confirm_audio_date
                      ? null
                      : C()(e.confirm_audio_date).format("YYYY-MM-DD HH:mm:ss"),
                    e.salary_index,
                    1,
                  ],
                };
                v.a.put("".concat(K, "/tenticker"), t).then(function (t) {
                  if (
                    (O.a.success({
                      message: "C\u1eadp nh\u1eadt th\xe0nh c\xf4ng",
                      style: { backgroundColor: "#f5fff8" },
                    }),
                    e.editor_name !== a.state.dataSource[e.stt - 1].editor_name)
                  ) {
                    var n =
                      "Thay \u0111\u1ed5i Editor Name c\u1ee7a ch\u1ee7 \u0111\u1ec1 "
                        .concat(
                          a.state.dataSource[e.stt - 1].full_title,
                          " t\u1eeb "
                        )
                        .concat(
                          a.state.dataSource[e.stt - 1].editor_name,
                          " th\xe0nh "
                        )
                        .concat(e.editor_name);
                    a.onUpdateActivity(n);
                  }
                  if (e.footage !== a.state.dataSource[e.stt - 1].footage) {
                    var i =
                      "Thay \u0111\u1ed5i Footage c\u1ee7a ch\u1ee7 \u0111\u1ec1 "
                        .concat(
                          a.state.dataSource[e.stt - 1].full_title,
                          " t\u1eeb "
                        )
                        .concat(
                          a.state.dataSource[e.stt - 1].footage,
                          " th\xe0nh "
                        )
                        .concat(e.footage);
                    a.onUpdateActivity(i);
                  }
                  if (
                    e.link_video !== a.state.dataSource[e.stt - 1].link_video
                  ) {
                    var o =
                      "Thay \u0111\u1ed5i Link Video c\u1ee7a ch\u1ee7 \u0111\u1ec1 "
                        .concat(
                          a.state.dataSource[e.stt - 1].full_title,
                          " t\u1eeb "
                        )
                        .concat(
                          a.state.dataSource[e.stt - 1].link_video,
                          " th\xe0nh "
                        )
                        .concat(e.link_video);
                    a.onUpdateActivity(o);
                  }
                  if (
                    e.video_status !==
                    a.state.dataSource[e.stt - 1].video_status
                  ) {
                    var r =
                      "Thay \u0111\u1ed5i Video Status c\u1ee7a ch\u1ee7 \u0111\u1ec1 "
                        .concat(
                          a.state.dataSource[e.stt - 1].full_title,
                          " t\u1eeb "
                        )
                        .concat(
                          0 === a.state.dataSource[e.stt - 1].video_status
                            ? "Ch\u01b0a duy\u1ec7t"
                            : "\u0110\xe3 duy\u1ec7t",
                          " th\xe0nh "
                        )
                        .concat(
                          0 === e.video_status
                            ? "Ch\u01b0a duy\u1ec7t"
                            : "\u0110\xe3 duy\u1ec7t"
                        );
                    a.onUpdateActivity(r);
                  }
                  if (
                    e.video_note !== a.state.dataSource[e.stt - 1].video_note
                  ) {
                    var c =
                      "Thay \u0111\u1ed5i Ảnh thumbnail c\u1ee7a ch\u1ee7 \u0111\u1ec1 "
                        .concat(
                          a.state.dataSource[e.stt - 1].full_title,
                          " t\u1eeb "
                        )
                        .concat(
                          a.state.dataSource[e.stt - 1].video_note,
                          " th\xe0nh "
                        )
                        .concat(e.video_note);
                    a.onUpdateActivity(c);
                  }
                  a._onRefreshData();
                }),
                  a.setState({ editingKey: "" });
              }),
              (a.onCancelEdit = function (e) {
                var t = Object(k.map)(
                  a.state.dataChangeUpdate,
                  function (t, n) {
                    return t.id === e.id
                      ? Object(b.a)({}, a.state.dataSource[n])
                      : Object(b.a)({}, t);
                  }
                );
                a.setState({ editingKey: "", dataChangeUpdate: t });
              }),
              (a._onChangeEditingKey = function (e) {
                var t = Object(k.map)(
                  a.state.dataChangeUpdate,
                  function (e, t) {
                    return e.id === a.state.id
                      ? Object(b.a)({}, a.state.dataSource[t])
                      : Object(b.a)({}, e);
                  }
                );
                a.setState({ editingKey: e.id, dataChangeUpdate: t });
              }),
              (a.onUpdateActivity = function (e) {
                v.a.get("".concat(K, "/activity")).then(function (t) {
                  var n = {
                    data: [
                      null,
                      C()().format("YYYY-MM-DD HH:mm:ss"),
                      e,
                      a.props.data[a.props.id + 1][me],
                    ],
                  };
                  v.a.post("".concat(K, "/activity/add"), n).then(function (e) {
                    v.a.get("".concat(K, "/activity")).then(function (e) {
                      a.setState({
                        activity: e.data.data,
                        activityChangeUpdate: e.data.data,
                      });
                    });
                  }),
                    a.setState({
                      activity: t.data.data,
                      activityChangeUpdate: t.data.data,
                    });
                });
              }),
              (a.handleResize = function (e) {
                return function (t, n) {
                  var i = n.size;
                  a.setState(function (t) {
                    var n = t.column,
                      a = Object(d.a)(n);
                    return (
                      (a[e] = Object(b.a)(
                        Object(b.a)({}, a[e]),
                        {},
                        { width: i.width }
                      )),
                      { column: a }
                    );
                  });
                };
              }),
              (a._onCloseModal = function () {
                a.setState({ isShowModal: !1, chuDeInput: "" });
              }),
              (a._handleSearch = function (e) {
                var t = a.state.dataSource.filter(function (t) {
                  var n = t.full_title;
                  return (
                    (n = n.toLowerCase()),
                    (e.target.value = e.target.value.toLowerCase()),
                    n.includes(e.target.value)
                  );
                });
                a.setState({
                  dataChangeUpdate: t,
                  searchTextMain: e.target.value,
                });
              }),
              (a.handleChange = function (e, t, n) {
                console.log("filters", t);
                var i = Object(k.filter)(a.state.newDataTest, function (e) {
                  return (
                    (t.content_code
                      ? Object(k.includes)(t.content_code, e.content_code)
                      : e) &&
                    (t.composer_name
                      ? Object(k.includes)(t.composer_name, e.composer_name)
                      : e) &&
                    (t.editor_name
                      ? Object(k.includes)(t.editor_name, e.editor_name)
                      : e) &&
                    (t.full_title
                      ? Object(k.includes)(t.full_title, e.full_title)
                      : e) &&
                    (t.salary_index
                      ? Object(k.includes)(t.salary_index, e.salary_index)
                      : e) &&
                    (t.video_status
                      ? Object(k.includes)(t.video_status, e.video_status)
                      : e) &&
                    (t.writer_name
                      ? Object(k.includes)(t.writer_name, e.writer_name)
                      : e) &&
                    (t.public_date
                      ? (C()(e.public_date) <
                          C()(Object(k.get)(t, "public_date[0][1]")) &&
                          C()(e.public_date) >
                            C()(Object(k.get)(t, "public_date[0][0]"))) ||
                        C()(e.public_date).format("DDMMYYY") ===
                          C()(Object(k.get)(t, "public_date[0][0]")).format(
                            "DDMMYYY"
                          ) ||
                        C()(e.public_date).format("DDMMYYY") ===
                          C()(Object(k.get)(t, "public_date[0][1]")).format(
                            "DDMMYYY"
                          )
                      : e)
                  );
                });
                (t.content_code ||
                  t.composer_name ||
                  t.editor_name ||
                  t.full_title ||
                  t.public_date ||
                  t.salary_index ||
                  t.video_status ||
                  t.writer_name) &&
                  a.setState({ dataChangeUpdate: i }),
                  a.setState({ filteredInfo: t, sortedInfo: n }, function () {
                    var e = Object(k.map)(a.state.column, function (e, t) {
                      return 1 === t
                        ? Object(b.a)(
                            Object(b.a)({}, e),
                            {},
                            { filteredValue: a.state.filteredInfo.content_code }
                          )
                        : Object(b.a)({}, e);
                    });
                    a.setState({ column: e });
                  });
              }),
              (a.clearFilters = function () {
                a.setState({ filteredInfo: null });
              }),
              (a.clearSorters = function () {
                a.setState({ sortedInfo: null });
              }),
              (a.clearAll = function () {
                a.setState({
                  filteredInfo: null,
                  sortedInfo: null,
                  searchTextMain: "",
                  dataChangeUpdate: a.state.dataSource,
                });
              });
            for (
              var o = e.data,
                r = e.listContentCode,
                c = [],
                l = [],
                s = [],
                h = 0;
              h < o.length;
              h++
            )
              1 == o[h][_e] &&
                c.push({ value: o[h][me], text: o[h][me], nick: o[h][ye] }),
                1 == o[h][be] &&
                  l.push({ value: o[h][me], text: o[h][me], nick: o[h][ye] }),
                1 == o[h][ge] && s.push({ value: o[h][me], text: o[h][me] });
            return (
              (a.state = {
                chuDeInput: "",
                dataSource: [],
                dataChangeUpdate: [],
                newDataTest: [],
                activityChangeUpdate: [],
                activity: [],
                editingKey: "",
                searchTextMain: "",
                isShowModal: !1,
                filteredInfo: null,
                sortedInfo: null,
                isLoding: !1,
                column: [
                  {
                    title: "STT",
                    dataIndex: "id",
                    key: "id",
                    width: 70,
                    fixed: "left",
                    defaultSortOrder: "ascend",
                    sorter: function (e, t) {
                      return e.stt - t.stt;
                    },
                    render: function (e, t) {
                      return {
                        props: {
                          style: { background: t.stt % 2 === 0 && "#fbfbfb" },
                        },
                        children: Object(T.jsx)("div", { children: e }),
                      };
                    },
                  },
                  {
                    title: "Content Code",
                    dataIndex: "content_code",
                    key: "content_code",
                    fixed: "left",
                    filteredValue: null,
                    filters: r,
                    onFilter: function (e, t) {
                      return 0 === t.content_code.indexOf(e);
                    },
                    sorter: function (e, t) {
                      return e.content_code.length - t.content_code.length;
                    },
                    ellipsis: { showTitle: !1 },
                    width: 160,
                    render: function (e, t) {
                      return {
                        props: {
                          style: { background: t.stt % 2 === 0 && "#fbfbfb" },
                        },
                        children: Object(T.jsx)("div", {
                          children: t.content_code,
                        }),
                      };
                    },
                  },
                  {
                    title: "Length Script",
                    dataIndex: "salary_index",
                    key: "salary_index",
                    filteredValue: null,
                    fixed: "left",
                    filters: oe,
                    onFilter: function (e, t) {
                      return t.salary_index === e;
                    },
                    sorter: function (e, t) {
                      return e.salary_index - t.salary_index;
                    },
                    ellipsis: { showTitle: !1 },
                    width: 160,
                    render: function (e, t) {
                      return {
                        props: {
                          style: { background: t.stt % 2 === 0 && "#fbfbfb" },
                        },
                        children: Object(T.jsx)("div", {
                          children: Object(k.find)(oe, function (e) {
                            return e.value === t.salary_index;
                          }).text,
                        }),
                      };
                    },
                  },
                  Object(b.a)(
                    Object(b.a)(
                      {
                        title: "Full Title",
                        dataIndex: "full_title",
                        fixed: "left",
                        key: "full_title",
                        sorter: function (e, t) {
                          return e.full_title.length - t.full_title.length;
                        },
                        ellipsis: { showTitle: !1 },
                        width: 300,
                      },
                      a.getColumnSearchProps("full_title")
                    ),
                    {},
                    {
                      render: function (e, t) {
                        return {
                          props: {
                            style: { background: t.stt % 2 === 0 && "#fbfbfb" },
                          },
                          children: Object(T.jsx)("div", {
                            children: t.full_title,
                          }),
                        };
                      },
                    }
                  ),
                  {
                    title: "Writer Name",
                    dataIndex: "writer_name",
                    key: "writer_name",
                    sorter: function (e, t) {
                      return e.writer_name.length - t.writer_name.length;
                    },
                    ellipsis: { showTitle: !1 },
                    filters: c,
                    filteredValue: null,
                    onFilter: function (e, t) {
                      return 0 === t.writer_name.indexOf(e);
                    },
                    width: 150,
                    render: function (e, t) {
                      return Object(T.jsx)("div", { children: t.writer_name });
                    },
                  },
                  {
                    title: "Content Final",
                    dataIndex: "content_final",
                    key: "content_final",
                    sorter: function (e, t) {
                      return e.content_final.length - t.content_final.length;
                    },
                    ellipsis: { showTitle: !1 },
                    width: 130,
                    render: function (e, t) {
                      return Object(T.jsx)("a", {
                        target: "_blank",
                        href: t.content_final,
                        children: t.content_final,
                      });
                    },
                  },
                  {
                    title: "Composer Name",
                    dataIndex: "composer_name",
                    key: "composer_name",
                    sorter: function (e, t) {
                      return e.composer_name.length - t.composer_name.length;
                    },
                    ellipsis: { showTitle: !1 },
                    filters: l,
                    filteredValue: null,
                    onFilter: function (e, t) {
                      return 0 === t.composer_name.indexOf(e);
                    },
                    width: 175,
                    render: function (e, t) {
                      return Object(T.jsx)("div", {
                        children: t.composer_name,
                      });
                    },
                  },
                  {
                    title: "Link Audio",
                    dataIndex: "link_audio",
                    key: "link_audio",
                    sorter: function (e, t) {
                      return e.link_audio.length - t.link_audio.length;
                    },
                    ellipsis: { showTitle: !1 },
                    width: 130,
                    render: function (e, t) {
                      return Object(T.jsx)("a", {
                        target: "_blank",
                        href: t.link_audio,
                        children: t.link_audio,
                      });
                    },
                  },
                  {
                    title: "Editor Name",
                    dataIndex: "editor_name",
                    key: "editor_name",
                    sorter: function (e, t) {
                      return e.editor_name.length - t.editor_name.length;
                    },
                    ellipsis: { showTitle: !1 },
                    filters: s,
                    filteredValue: null,
                    onFilter: function (e, t) {
                      return 0 === t.editor_name.indexOf(e);
                    },
                    width: 150,
                    render: function (e, t) {
                      var n = a._isEditing(t);
                      return n
                        ? Object(T.jsx)(A.a, {
                            disabled: !n,
                            style: { width: "100%" },
                            value: [t.editor_name, t.editor_code],
                            onChange: function (e) {
                              return a.onChangeSelectEditorName(e, t);
                            },
                            children: Object(k.map)(s, function (e, t) {
                              return Object(T.jsx)(
                                jt,
                                {
                                  className: "erpOption",
                                  value: [e.text, e.value],
                                  children: e.text,
                                },
                                t
                              );
                            }),
                          })
                        : Object(T.jsx)("div", { children: t.editor_name });
                    },
                  },
                  {
                    title: "Footage",
                    dataIndex: "footage",
                    key: "footage",
                    sorter: function (e, t) {
                      return e.footage.length - t.footage.length;
                    },
                    ellipsis: { showTitle: !1 },
                    width: 130,
                    render: function (e, t) {
                      var n = a._isEditing(t);
                      return n
                        ? Object(T.jsx)(R.a, {
                            style: { width: "100%" },
                            disabled: !n,
                            value: t.footage,
                            onChange: function (e) {
                              return a.onChangeFootage(e.target.value, t);
                            },
                          })
                        : Object(T.jsx)("a", {
                            target: "_blank",
                            href: t.footage,
                            children: t.footage,
                          });
                    },
                  },
                  {
                    title: "Video Date",
                    dataIndex: "video_date",
                    key: "video_date",
                    sorter: function (e, t) {
                      return (
                        C()(e.video_date).unix() - C()(t.video_date).unix()
                      );
                    },
                    ellipsis: { showTitle: !1 },
                    width: 120,
                    render: function (e, t) {
                      return Object(T.jsx)("div", {
                        children: Object(k.isEmpty)(e)
                          ? ""
                          : C()(e).format("DD-MM-YYYY"),
                      });
                    },
                  },
                  {
                    title: "Link Video",
                    dataIndex: "link_video",
                    key: "link_video",
                    sorter: function (e, t) {
                      return e.link_video.length - t.link_video.length;
                    },
                    ellipsis: { showTitle: !1 },
                    width: 130,
                    render: function (e, t) {
                      var n = a._isEditing(t);
                      return n
                        ? Object(T.jsx)(R.a, {
                            style: { width: "100%" },
                            disabled: !n,
                            value: t.link_video,
                            onChange: function (e) {
                              return a.onChangeLinkVideo(e.target.value, t);
                            },
                          })
                        : Object(T.jsx)("a", {
                            target: "_blank",
                            href: t.link_video,
                            children: t.link_video,
                          });
                    },
                  },
                  {
                    title: "Video Status",
                    key: "video_status",
                    dataIndex: "video_status",
                    filters: [
                      { text: "\u0110\xe3 duy\u1ec7t", value: 1 },
                      { text: "Ch\u01b0a duy\u1ec7t", value: 0 },
                    ],
                    filteredValue: null,
                    onFilter: function (e, t) {
                      return t.video_status === e;
                    },
                    sorter: function (e, t) {
                      return e.video_status - t.video_status;
                    },
                    ellipsis: { showTitle: !1 },
                    width: 145,
                    render: function (e, t) {
                      var n = a._isEditing(t);
                      return Object(T.jsx)(m.a, {
                        style: {
                          color: "white",
                          backgroundColor:
                            0 === t.video_status ? "red" : "#238c31",
                          fontWeight: "bold",
                          borderRadius: 5,
                          borderColor: 0 === t.video_status ? "red" : "#238c31",
                        },
                        type: "primary",
                        disabled: !n,
                        onClick: function () {
                          return a.onDuyetVE(t);
                        },
                        children:
                          0 === t.video_status
                            ? "Ch\u01b0a duy\u1ec7t"
                            : "\u0110\xe3 duy\u1ec7t",
                      });
                    },
                  },
                  {
                    title: "Ảnh thumbnail",
                    dataIndex: "video_note",
                    key: "video_note",
                    sorter: function (e, t) {
                      return e.video_note.length - t.video_note.length;
                    },
                    ellipsis: { showTitle: !1 },
                    width: 100,
                    render: function (e, t) {
                      var n = a._isEditing(t);
                      return n
                        ? Object(T.jsx)(R.a, {
                            style: { width: "100%" },
                            disabled: !n,
                            value: t.video_note,
                            onChange: function (e) {
                              return a.onChangeLinkVideoNote(e.target.value, t);
                            },
                          })
                        : Object(T.jsx)("div", { children: t.video_note });
                    },
                  },
                  {
                    title: "Link Youtube",
                    dataIndex: "link_youtube",
                    key: "link_youtube",
                    sorter: function (e, t) {
                      return e.link_youtube.length - t.link_youtube.length;
                    },
                    ellipsis: { showTitle: !1 },
                    width: 130,
                    render: function (e, t) {
                      return Object(T.jsx)("a", {
                        target: "_blank",
                        href: t.link_youtube,
                        children: t.link_youtube,
                      });
                    },
                  },
                  Object(b.a)(
                    Object(b.a)(
                      {
                        title: "Public Date",
                        dataIndex: "public_date",
                        key: "public_date",
                        sorter: function (e, t) {
                          return (
                            C()(e.public_date).unix() -
                            C()(t.public_date).unix()
                          );
                        },
                      },
                      a.getColumnFilterTimeProps("public_date")
                    ),
                    {},
                    {
                      ellipsis: { showTitle: !1 },
                      width: 150,
                      render: function (e, t) {
                        return Object(T.jsx)("div", {
                          children: Object(k.isEmpty)(e)
                            ? ""
                            : C()(e).format("DD-MM-YYYY"),
                        });
                      },
                    }
                  ),
                  {
                    title: "Thao t\xe1c",
                    key: "thaoTac",
                    align: "center",
                    fixed: "right",
                    width: 155,
                    render: function (e) {
                      var t = a._isEditing(e);
                      return {
                        props: {
                          style: { background: e.stt % 2 === 0 && "#fbfbfb" },
                        },
                        children: Object(T.jsx)(T.Fragment, {
                          children: t
                            ? Object(T.jsxs)(T.Fragment, {
                                children: [
                                  Object(T.jsx)(m.a, {
                                    style: {
                                      color: "white",
                                      backgroundColor: "#238c31",
                                      fontWeight: "bold",
                                      borderRadius: 5,
                                      borderColor: "#238c31",
                                    },
                                    type: "primary",
                                    icon: Object(T.jsx)(G.a, {}),
                                    onClick: function () {
                                      return a.onSubmitUpdate(e);
                                    },
                                  }),
                                  Object(T.jsx)("span", {
                                    children: "\xa0\xa0\xa0",
                                  }),
                                  Object(T.jsx)(m.a, {
                                    style: {
                                      color: "white",
                                      backgroundColor: "#238c31",
                                      fontWeight: "bold",
                                      borderRadius: 5,
                                      borderColor: "#238c31",
                                    },
                                    type: "primary",
                                    icon: Object(T.jsx)(J.a, {}),
                                    onClick: function () {
                                      return a.onCancelEdit(e);
                                    },
                                  }),
                                  Object(T.jsx)("span", {
                                    children: "\xa0\xa0\xa0",
                                  }),
                                ],
                              })
                            : Object(T.jsx)(m.a, {
                                style: {
                                  color: "white",
                                  backgroundColor: "#238c31",
                                  fontWeight: "bold",
                                  borderRadius: 5,
                                  borderColor: "#238c31",
                                },
                                type: "primary",
                                onClick: function () {
                                  return a._onChangeEditingKey(e);
                                },
                                children: "S\u1eeda",
                              }),
                        }),
                      };
                    },
                  },
                ],
                searchText: "",
                searchedColumn: "",
              }),
              (a.refAddNewContent = i.a.createRef()),
              a
            );
          }
          return (
            Object(h.a)(n, [
              {
                key: "componentDidMount",
                value: function () {
                  (this.mounted = !0), this._onRefreshData();
                },
              },
              {
                key: "UNSAFE_componentWillReceiveProps",
                value: function (e) {
                  var t = this;
                  this.props !== e &&
                    e.listContentCode &&
                    e.listContentCode !== this.props.listContentCode &&
                    this.mounted &&
                    this.setState(
                      { listContentCode: e.listContentCode },
                      function () {
                        t._onRefreshData();
                      }
                    );
                },
              },
              {
                key: "componentWillUnmount",
                value: function () {
                  this.mounted = !1;
                },
              },
              {
                key: "render",
                value: function () {
                  var e = this,
                    t = this.state,
                    n = t.dataChangeUpdate,
                    a = t.column,
                    i = t.filteredInfo,
                    o = t.sortedInfo,
                    r = t.isLoding,
                    c = t.searchTextMain,
                    l = Object(k.map)(a, function (t, n) {
                      switch (n) {
                        case 0:
                          return Object(b.a)(
                            Object(b.a)({}, t),
                            {},
                            {
                              sortOrder: Object(k.isEmpty)(o)
                                ? null
                                : "stt" === o.columnKey && o.order,
                              onHeaderCell: function (t) {
                                return {
                                  width: t.width,
                                  onResize: e.handleResize(n),
                                };
                              },
                            }
                          );
                        case 1:
                          return Object(b.a)(
                            Object(b.a)({}, t),
                            {},
                            {
                              filteredValue: Object(k.isEmpty)(i)
                                ? null
                                : i.content_code,
                              sortOrder: Object(k.isEmpty)(o)
                                ? null
                                : "content_code" === o.columnKey && o.order,
                              onHeaderCell: function (t) {
                                return {
                                  width: t.width,
                                  onResize: e.handleResize(n),
                                };
                              },
                            }
                          );
                        case 2:
                          return Object(b.a)(
                            Object(b.a)({}, t),
                            {},
                            {
                              filteredValue: Object(k.isEmpty)(i)
                                ? null
                                : i.salary_index,
                              sortOrder: Object(k.isEmpty)(o)
                                ? null
                                : "salary_index" === o.columnKey && o.order,
                              onHeaderCell: function (t) {
                                return {
                                  width: t.width,
                                  onResize: e.handleResize(n),
                                };
                              },
                            }
                          );
                        case 3:
                          return Object(b.a)(
                            Object(b.a)({}, t),
                            {},
                            {
                              filteredValue: Object(k.isEmpty)(i)
                                ? null
                                : i.full_title,
                              sortOrder: Object(k.isEmpty)(o)
                                ? null
                                : "full_title" === o.columnKey && o.order,
                              onHeaderCell: function (t) {
                                return {
                                  width: t.width,
                                  onResize: e.handleResize(n),
                                };
                              },
                            }
                          );
                        case 4:
                          return Object(b.a)(
                            Object(b.a)({}, t),
                            {},
                            {
                              filteredValue: Object(k.isEmpty)(i)
                                ? null
                                : i.writer_name,
                              sortOrder: Object(k.isEmpty)(o)
                                ? null
                                : "writer_name" === o.columnKey && o.order,
                              onHeaderCell: function (t) {
                                return {
                                  width: t.width,
                                  onResize: e.handleResize(n),
                                };
                              },
                            }
                          );
                        case 5:
                          return Object(b.a)(
                            Object(b.a)({}, t),
                            {},
                            {
                              sortOrder: Object(k.isEmpty)(o)
                                ? null
                                : "content_final" === o.columnKey && o.order,
                              onHeaderCell: function (t) {
                                return {
                                  width: t.width,
                                  onResize: e.handleResize(n),
                                };
                              },
                            }
                          );
                        case 6:
                          return Object(b.a)(
                            Object(b.a)({}, t),
                            {},
                            {
                              filteredValue: Object(k.isEmpty)(i)
                                ? null
                                : i.composer_name,
                              sortOrder: Object(k.isEmpty)(o)
                                ? null
                                : "composer_name" === o.columnKey && o.order,
                              onHeaderCell: function (t) {
                                return {
                                  width: t.width,
                                  onResize: e.handleResize(n),
                                };
                              },
                            }
                          );
                        case 7:
                          return Object(b.a)(
                            Object(b.a)({}, t),
                            {},
                            {
                              sortOrder: Object(k.isEmpty)(o)
                                ? null
                                : "link_audio" === o.columnKey && o.order,
                              onHeaderCell: function (t) {
                                return {
                                  width: t.width,
                                  onResize: e.handleResize(n),
                                };
                              },
                            }
                          );
                        case 8:
                          return Object(b.a)(
                            Object(b.a)({}, t),
                            {},
                            {
                              filteredValue: Object(k.isEmpty)(i)
                                ? null
                                : i.editor_name,
                              sortOrder: Object(k.isEmpty)(o)
                                ? null
                                : "editor_name" === o.columnKey && o.order,
                              onHeaderCell: function (t) {
                                return {
                                  width: t.width,
                                  onResize: e.handleResize(n),
                                };
                              },
                            }
                          );
                        case 9:
                          return Object(b.a)(
                            Object(b.a)({}, t),
                            {},
                            {
                              sortOrder: Object(k.isEmpty)(o)
                                ? null
                                : "video_date" === o.columnKey && o.order,
                              onHeaderCell: function (t) {
                                return {
                                  width: t.width,
                                  onResize: e.handleResize(n),
                                };
                              },
                            }
                          );
                        case 10:
                          return Object(b.a)(
                            Object(b.a)({}, t),
                            {},
                            {
                              sortOrder: Object(k.isEmpty)(o)
                                ? null
                                : "footage" === o.columnKey && o.order,
                              onHeaderCell: function (t) {
                                return {
                                  width: t.width,
                                  onResize: e.handleResize(n),
                                };
                              },
                            }
                          );
                        case 11:
                          return Object(b.a)(
                            Object(b.a)({}, t),
                            {},
                            {
                              sortOrder: Object(k.isEmpty)(o)
                                ? null
                                : "link_video" === o.columnKey && o.order,
                              onHeaderCell: function (t) {
                                return {
                                  width: t.width,
                                  onResize: e.handleResize(n),
                                };
                              },
                            }
                          );
                        case 12:
                          return Object(b.a)(
                            Object(b.a)({}, t),
                            {},
                            {
                              filteredValue: Object(k.isEmpty)(i)
                                ? null
                                : i.video_status,
                              sortOrder: Object(k.isEmpty)(o)
                                ? null
                                : "video_status" === o.columnKey && o.order,
                              onHeaderCell: function (t) {
                                return {
                                  width: t.width,
                                  onResize: e.handleResize(n),
                                };
                              },
                            }
                          );
                        case 13:
                          return Object(b.a)(
                            Object(b.a)({}, t),
                            {},
                            {
                              sortOrder: Object(k.isEmpty)(o)
                                ? null
                                : "video_note" === o.columnKey && o.order,
                              onHeaderCell: function (t) {
                                return {
                                  width: t.width,
                                  onResize: e.handleResize(n),
                                };
                              },
                            }
                          );
                        case 14:
                          return Object(b.a)(
                            Object(b.a)({}, t),
                            {},
                            {
                              sortOrder: Object(k.isEmpty)(o)
                                ? null
                                : "link_youtube" === o.columnKey && o.order,
                              onHeaderCell: function (t) {
                                return {
                                  width: t.width,
                                  onResize: e.handleResize(n),
                                };
                              },
                            }
                          );
                        case 15:
                          return Object(b.a)(
                            Object(b.a)({}, t),
                            {},
                            {
                              filteredValue: Object(k.isEmpty)(i)
                                ? null
                                : i.public_date,
                              sortOrder: Object(k.isEmpty)(o)
                                ? null
                                : "public_date" === o.columnKey && o.order,
                              onHeaderCell: function (t) {
                                return {
                                  width: t.width,
                                  onResize: e.handleResize(n),
                                };
                              },
                            }
                          );
                        default:
                          return Object(b.a)(
                            Object(b.a)({}, t),
                            {},
                            {
                              onHeaderCell: function (t) {
                                return {
                                  width: t.width,
                                  onResize: e.handleResize(n),
                                };
                              },
                            }
                          );
                      }
                    });
                  return Object(T.jsxs)("div", {
                    children: [
                      Object(T.jsx)("div", {
                        style: { alignItems: "center", marginBottom: 10 },
                        children: Object(T.jsxs)(it.a, {
                          gutter: 12,
                          children: [
                            Object(T.jsx)(ot.a, {
                              span: 10,
                              children: Object(T.jsx)("div", {
                                style: { display: "flex", marginLeft: 10 },
                                children: Object(T.jsx)(m.a, {
                                  type: "primary",
                                  style: {
                                    backgroundColor:
                                      Object(k.isEmpty)(i) &&
                                      Object(k.isEmpty)(i) &&
                                      Object(k.isEmpty)(c)
                                        ? null
                                        : "red",
                                    borderColor:
                                      Object(k.isEmpty)(i) &&
                                      Object(k.isEmpty)(i) &&
                                      Object(k.isEmpty)(c)
                                        ? null
                                        : "red",
                                  },
                                  onClick: this.clearAll,
                                  children: "Xoá bộ lọc",
                                }),
                              }),
                            }),
                            Object(T.jsx)(ot.a, {
                              span: 6,
                              children: Object(T.jsx)(R.a, {
                                placeholder: "Tìm kiếm",
                                value: c,
                                onChange: this._handleSearch,
                                style: { width: 700, display: "flex" },
                              }),
                            }),
                          ],
                        }),
                      }),
                      Object(T.jsx)(F.a, {
                        loading: r,
                        size: "middle",
                        bordered: !0,
                        onChange: this.handleChange,
                        components: this.components,
                        style: { marginBottom: 15 },
                        rowClassName: function (e, t) {
                          if (t % 2 !== 0) return "rowBackgroundColor";
                        },
                        scroll: { x: 1500, y: 400 },
                        dataSource: n,
                        columns: l,
                        rowKey: "id",
                        pagination: n.length > 10 && { total: n.length },
                        sticky: !0,
                      }),
                      Object(T.jsx)("div", {
                        style: { height: 50 },
                        ref: this.refAddNewContent,
                      }),
                    ],
                  });
                },
              },
            ]),
            n
          );
        })(a.Component),
        mt =
          (v.a.create({
            baseURL: "https://www.googleapis.com/youtube/v3/videos",
            params: {
              part: "statistics",
              key: "AIzaSyD3uGEgJa2Y-PqhcZ_cessU2xVZglG-sWs",
              id: "Z2CXN2tuAXc",
            },
          }),
          n(441)),
        yt = V.a.RangePicker,
        vt =
          (R.a.Search,
          function (e) {
            var t = e.onResize,
              n = e.width,
              a = Object(j.a)(e, ["onResize", "width"]);
            return n
              ? Object(T.jsx)(x.Resizable, {
                  width: n,
                  height: 0,
                  handle: Object(T.jsx)("span", {
                    className: "react-resizable-handle",
                    onClick: function (e) {
                      e.stopPropagation();
                    },
                  }),
                  onResize: t,
                  draggableOpts: { enableUserSelectHack: !1 },
                  children: Object(T.jsx)("th", Object(b.a)({}, a)),
                })
              : Object(T.jsx)("th", Object(b.a)({}, a));
          }),
        kt = (function (e) {
          Object(_.a)(n, e);
          var t = Object(f.a)(n);
          function n(e) {
            var a;
            Object(u.a)(this, n),
              ((a = t.call(this, e)).components = { header: { cell: vt } }),
              (a._onRefreshData = function () {
                a.setState({ isLoding: !0 }),
                  v.a.get("".concat(K, "/activity")).then(function (e) {
                    var t = Object(k.map)(e.data.data, function (e, t) {
                      return Object(b.a)(
                        Object(b.a)({}, e),
                        {},
                        { stt: t + 1 }
                      );
                    });
                    a.setState({
                      activitySource: t,
                      activityChangeUpdate: t,
                      selectKeyTableNotAccept: [],
                      selectRowsTableNotAccept: [],
                      isLoding: !1,
                    });
                  });
              }),
              (a.onChangeRowTableNotAccept = function (e, t) {
                a.setState({
                  selectKeyTableNotAccept: e,
                  selectRowsTableNotAccept: t,
                });
              }),
              (a.getColumnSearchProps = function (e) {
                return {
                  filterDropdown: function (t) {
                    var n = t.setSelectedKeys,
                      i = t.selectedKeys,
                      o = t.confirm,
                      r = t.clearFilters;
                    return Object(T.jsxs)("div", {
                      style: { padding: 8 },
                      children: [
                        Object(T.jsx)(R.a, {
                          ref: function (e) {
                            a.searchInput = e;
                          },
                          placeholder: "Tìm kiếm",
                          value: i[0],
                          onChange: function (e) {
                            return n(e.target.value ? [e.target.value] : []);
                          },
                          onPressEnter: function () {
                            return a.handleSearch(i, o, e);
                          },
                          style: { marginBottom: 8, display: "block" },
                        }),
                        Object(T.jsxs)(N.b, {
                          children: [
                            Object(T.jsx)(m.a, {
                              type: "primary",
                              onClick: function () {
                                return a.handleSearch(i, o, e);
                              },
                              icon: Object(T.jsx)(B.a, {}),
                              size: "small",
                              style: { width: 90 },
                              children: "Search",
                            }),
                            Object(T.jsx)(m.a, {
                              onClick: function () {
                                return a.handleReset(r);
                              },
                              size: "small",
                              style: { width: 90 },
                              children: "Reset",
                            }),
                            Object(T.jsx)(m.a, {
                              type: "link",
                              size: "small",
                              onClick: function () {
                                o({ closeDropdown: !1 }),
                                  a.setState({
                                    searchText: i[0],
                                    searchedColumn: e,
                                  });
                              },
                              children: "Filter",
                            }),
                          ],
                        }),
                      ],
                    });
                  },
                  filterIcon: function (e) {
                    return Object(T.jsx)(B.a, {
                      style: { color: e ? "#ffffff" : void 0 },
                    });
                  },
                  filteredValue: null,
                  onFilter: function (t, n) {
                    return n[e]
                      ? n[e].toString().toLowerCase().includes(t.toLowerCase())
                      : "";
                  },
                  onFilterDropdownVisibleChange: function (e) {
                    e &&
                      setTimeout(function () {
                        return a.searchInput.select();
                      }, 100);
                  },
                  render: function (t) {
                    return a.state.searchedColumn === e
                      ? Object(T.jsx)(P.a, {
                          highlightStyle: {
                            backgroundColor: "#ffc069",
                            padding: 0,
                          },
                          searchWords: [a.state.searchText],
                          autoEscape: !0,
                          textToHighlight: t ? t.toString() : "",
                        })
                      : t;
                  },
                };
              }),
              (a.onDeleteActivity = function () {
                ee()({
                  title: "Th\xf4ng b\xe1o",
                  content:
                    "B\u1ea1n c\xf3 ch\u1eafc ch\u1eafn mu\u1ed1n xo\xe1 activity \u0111\xe3 ch\u1ecdn?",
                  okCancel: function () {},
                  onOk: function () {
                    for (
                      var e = a.state.selectRowsTableNotAccept, t = [], n = 0;
                      n < e.length;
                      n++
                    )
                      t.push(e[n].id);
                    var i = { data: { activity_id: t } };
                    v.a
                      .delete("".concat(K, "/activity/check"), i)
                      .then(function (e) {
                        O.a.success({
                          message: "Xo\xe1 th\xe0nh c\xf4ng",
                          style: { backgroundColor: "#f5fff8" },
                        }),
                          a.setState({
                            selectRowsTableNotAccept: [],
                            selectKeyTableNotAccept: [],
                          }),
                          a._onRefreshData();
                      });
                  },
                });
              }),
              (a.onDelete = function () {
                Object(k.isEmpty)(a.state.date)
                  ? O.a.warning({
                      message: "Th\xf4ng b\xe1o",
                      description:
                        "Vui l\xf2ng ch\u1ecdn kho\u1ea3ng ng\xe0y mu\u1ed1n xo\xe1",
                    })
                  : ee()({
                      title: "Th\xf4ng b\xe1o",
                      content: "B\u1ea1n c\xf3 ch\u1eafc mu\u1ed1n xo\xe1",
                      okCancel: function () {},
                      onOk: function () {
                        var e = {
                          data: {
                            activity_time: [
                              C()(a.state.date[0]).subtract(1, "days"),
                              C()(a.state.date[1]).add(1, "days"),
                            ],
                          },
                        };
                        v.a
                          .delete("".concat(K, "/activity"), e)
                          .then(function (e) {
                            O.a.success({
                              message: "Xo\xe1 th\xe0nh c\xf4ng",
                              style: { backgroundColor: "#f5fff8" },
                            }),
                              a.setState({ date: null }),
                              a._onRefreshData();
                          });
                      },
                    });
              }),
              (a.handleSearch = function (e, t, n) {
                t(), a.setState({ searchText: e[0], searchedColumn: n });
              }),
              (a.getColumnFilterTimeProps = function (e) {
                return {
                  filterDropdown: function (e) {
                    var t = e.setSelectedKeys,
                      n = e.selectedKeys,
                      a = e.confirm,
                      i = e.clearFilters;
                    return Object(T.jsxs)("div", {
                      style: { padding: 8 },
                      children: [
                        Object(T.jsx)("div", {
                          children: Object(T.jsx)(yt, {
                            style: { marginBottom: 8 },
                            value: n[0],
                            onChange: function (e) {
                              t(e ? [e] : []);
                            },
                          }),
                        }),
                        Object(T.jsxs)(N.b, {
                          children: [
                            Object(T.jsx)(m.a, {
                              type: "primary",
                              onClick: function () {
                                a();
                              },
                              icon: Object(T.jsx)(B.a, {}),
                              size: "small",
                              style: { width: 90, marginLeft: 10 },
                              children: "Search",
                            }),
                            Object(T.jsx)(m.a, {
                              onClick: function () {
                                return i();
                              },
                              size: "small",
                              style: { width: 90 },
                              children: "Reset",
                            }),
                          ],
                        }),
                      ],
                    });
                  },
                  filterIcon: function (e) {
                    return Object(T.jsx)(B.a, {
                      style: { color: e ? "#ffffff" : void 0 },
                    });
                  },
                  filteredValue: null,
                  onFilter: function (t, n) {
                    return n[e]
                      ? (C()(n[e]) < C()(t[1]) && C()(n[e]) > C()(t[0])) ||
                          C()(n.public_date).format("DDMMYYY") ===
                            C()(t[0]).format("DDMMYYY")
                      : "";
                  },
                  onFilterDropdownVisibleChange: function (e) {},
                  render: function (t) {
                    return a.state.searchedColumn === e
                      ? Object(T.jsx)(P.a, {
                          highlightStyle: {
                            backgroundColor: "#ffc069",
                            padding: 0,
                          },
                          searchWords: [a.state.searchText],
                          autoEscape: !0,
                          textToHighlight: t ? t.toString() : "",
                        })
                      : t;
                  },
                };
              }),
              (a.clearFilters = function () {
                a.setState({ filteredInfo: null });
              }),
              (a.clearSorters = function () {
                a.setState({ sortedInfo: null });
              }),
              (a.clearAll = function () {
                a.setState({
                  filteredInfo: null,
                  sortedInfo: null,
                  searchTextMain: "",
                  activityChangeUpdate: a.state.activitySource,
                });
              }),
              (a.handleChange = function (e, t, n) {
                a.setState({ filteredInfo: t, sortedInfo: n }, function () {
                  var e = Object(k.map)(a.state.column, function (e, t) {
                    return 1 === t
                      ? Object(b.a)(
                          Object(b.a)({}, e),
                          {},
                          { filteredValue: a.state.filteredInfo.content_code }
                        )
                      : Object(b.a)({}, e);
                  });
                  a.setState({ column: e });
                });
              }),
              (a._handleSearch = function (e) {
                var t = a.state.activitySource.filter(function (t) {
                  var n = t.activity;
                  return (
                    (n = n.toLowerCase()),
                    (e.target.value = e.target.value.toLowerCase()),
                    n.includes(e.target.value)
                  );
                });
                a.setState({
                  activityChangeUpdate: t,
                  searchTextMain: e.target.value,
                });
              }),
              (a.handleResize = function (e) {
                return function (t, n) {
                  var i = n.size;
                  a.setState(function (t) {
                    var n = t.column,
                      a = Object(d.a)(n);
                    return (
                      (a[e] = Object(b.a)(
                        Object(b.a)({}, a[e]),
                        {},
                        { width: i.width }
                      )),
                      { column: a }
                    );
                  });
                };
              });
            for (var i = e.data, o = [], r = 1; r < i.length; r++)
              o.push({ value: i[r][re], text: i[r][me], nick: i[r][ye] });
            return (
              (a.state = {
                activitySource: [],
                activityChangeUpdate: [],
                isLoding: !1,
                filteredInfo: null,
                searchTextMain: "",
                sortedInfo: null,
                date: null,
                selectKeyTableNotAccept: [],
                selectRowsTableNotAccept: [],
                column: [
                  {
                    title: "STT",
                    dataIndex: "stt",
                    key: "stt",
                    width: 50,
                    defaultSortOrder: "ascend",
                    sorter: function (e, t) {
                      return e.stt - t.stt;
                    },
                  },
                  Object(b.a)(
                    Object(b.a)(
                      {
                        title: "Date Time",
                        dataIndex: "activity_date",
                        key: "activity_date",
                        sorter: function (e, t) {
                          return (
                            C()(e.activity_date).unix() -
                            C()(t.activity_date).unix()
                          );
                        },
                      },
                      a.getColumnFilterTimeProps("activity_date")
                    ),
                    {},
                    {
                      width: 200,
                      render: function (e, t) {
                        return Object(T.jsx)("div", {
                          children: Object(k.isEmpty)(e)
                            ? ""
                            : C()(e).format("DD/MM/YYYY HH:mm:ss"),
                        });
                      },
                    }
                  ),
                  Object(b.a)(
                    Object(b.a)(
                      {
                        title: "Activity",
                        dataIndex: "activity",
                        key: "activity",
                        sorter: function (e, t) {
                          return e.activity.length - t.activity.length;
                        },
                        width: 700,
                      },
                      a.getColumnSearchProps("activity")
                    ),
                    {},
                    {
                      render: function (e, t) {
                        return Object(T.jsx)("div", { children: t.activity });
                      },
                    }
                  ),
                  {
                    title: "By",
                    dataIndex: "user_name",
                    key: "user_name",
                    sorter: function (e, t) {
                      return e.user_name.length - t.user_name.length;
                    },
                    filters: o,
                    filteredValue: null,
                    onFilter: function (e, t) {
                      return 0 === t.user_name.indexOf(e);
                    },
                    width: 160,
                    render: function (e, t) {
                      return Object(T.jsx)("div", { children: t.user_name });
                    },
                  },
                ],
              }),
              a
            );
          }
          return (
            Object(h.a)(n, [
              {
                key: "componentDidMount",
                value: function () {
                  this._onRefreshData();
                },
              },
              {
                key: "render",
                value: function () {
                  var e = this,
                    t = this.state,
                    n = (t.activitySource, t.activityChangeUpdate),
                    a = t.column,
                    i = t.sortedInfo,
                    o = t.filteredInfo,
                    r = t.isLoding,
                    c = t.searchTextMain,
                    l = Object(k.map)(a, function (t, n) {
                      switch (n) {
                        case 0:
                          return Object(b.a)(
                            Object(b.a)({}, t),
                            {},
                            {
                              sortOrder: Object(k.isEmpty)(i)
                                ? null
                                : "stt" === i.columnKey && i.order,
                              onHeaderCell: function (t) {
                                return {
                                  width: t.width,
                                  onResize: e.handleResize(n),
                                };
                              },
                            }
                          );
                        case 1:
                          return Object(b.a)(
                            Object(b.a)({}, t),
                            {},
                            {
                              filteredValue: Object(k.isEmpty)(o)
                                ? null
                                : o.public_date,
                              sortOrder: Object(k.isEmpty)(i)
                                ? null
                                : "activity_date" === i.columnKey && i.order,
                              onHeaderCell: function (t) {
                                return {
                                  width: t.width,
                                  onResize: e.handleResize(n),
                                };
                              },
                            }
                          );
                        case 2:
                          return Object(b.a)(
                            Object(b.a)({}, t),
                            {},
                            {
                              filteredValue: Object(k.isEmpty)(o)
                                ? null
                                : o.full_title,
                              sortOrder: Object(k.isEmpty)(i)
                                ? null
                                : "activity" === i.columnKey && i.order,
                              onHeaderCell: function (t) {
                                return {
                                  width: t.width,
                                  onResize: e.handleResize(n),
                                };
                              },
                            }
                          );
                        case 3:
                          return Object(b.a)(
                            Object(b.a)({}, t),
                            {},
                            {
                              filteredValue: Object(k.isEmpty)(o)
                                ? null
                                : o.writer_name,
                              sortOrder: Object(k.isEmpty)(i)
                                ? null
                                : "user_name" === i.columnKey && i.order,
                              onHeaderCell: function (t) {
                                return {
                                  width: t.width,
                                  onResize: e.handleResize(n),
                                };
                              },
                            }
                          );
                        default:
                          return Object(b.a)(
                            Object(b.a)({}, t),
                            {},
                            {
                              onHeaderCell: function (t) {
                                return {
                                  width: t.width,
                                  onResize: e.handleResize(n),
                                };
                              },
                            }
                          );
                      }
                    });
                  return Object(T.jsxs)("div", {
                    children: [
                      Object(T.jsx)("div", {
                        style: { alignItems: "center", marginBottom: 10 },
                        children: Object(T.jsxs)(it.a, {
                          gutter: 12,
                          children: [
                            Object(T.jsx)(ot.a, {
                              span: 10,
                              children: Object(T.jsx)("div", {
                                style: { display: "flex", marginLeft: 10 },
                                children: Object(T.jsx)(m.a, {
                                  type: "primary",
                                  style: {
                                    backgroundColor:
                                      Object(k.isEmpty)(o) &&
                                      Object(k.isEmpty)(o) &&
                                      Object(k.isEmpty)(c)
                                        ? null
                                        : "red",
                                    borderColor:
                                      Object(k.isEmpty)(o) &&
                                      Object(k.isEmpty)(o) &&
                                      Object(k.isEmpty)(c)
                                        ? null
                                        : "red",
                                  },
                                  onClick: this.clearAll,
                                  children: "Xoá bộ lọc",
                                }),
                              }),
                            }),
                            Object(T.jsx)(ot.a, {
                              span: 6,
                              children: Object(T.jsx)(R.a, {
                                placeholder: "Tìm kiếm",
                                value: c,
                                onChange: this._handleSearch,
                                style: { width: 700, display: "flex" },
                              }),
                            }),
                          ],
                        }),
                      }),
                      Object(k.isEmpty)(this.state.selectRowsTableNotAccept)
                        ? null
                        : Object(T.jsx)("div", {
                            style: {
                              display: "flex",
                              justifyContent: "flex-start",
                              marginTop: 10,
                              marginBottom: 10,
                            },
                            children: Object(T.jsx)(m.a, {
                              style: {
                                color: "white",
                                backgroundColor: "#238c31",
                                fontWeight: "bold",
                                borderRadius: 5,
                                borderColor: "#238c31",
                                marginLeft: 10,
                              },
                              icon: Object(T.jsx)(mt.a, {}),
                              type: "primary",
                              onClick: function () {
                                e.onDeleteActivity();
                              },
                              children: "Xo\xe1",
                            }),
                          }),
                      Object(T.jsx)(F.a, {
                        loading: r,
                        size: "small",
                        bordered: !0,
                        onChange: this.handleChange,
                        components: this.components,
                        style: { marginBottom: 15 },
                        rowClassName: function (e, t) {
                          if (t % 2 !== 0) return "rowBackgroundColor";
                        },
                        dataSource: n,
                        columns: l,
                        rowKey: "id",
                        pagination: n.length > 100 && { total: n.length },
                        sticky: !0,
                      }),
                    ],
                  });
                },
              },
            ]),
            n
          );
        })(a.Component),
        wt = n(247),
        Ct = n(452),
        xt = n(442),
        St = n(453),
        Rt = n(454),
        Yt = n(443),
        Dt = n(455),
        zt = n(456),
        Et = n(457),
        Tt = n(450),
        It = n(451),
        Mt = n(444),
        Ht = n(445),
        Ut = n(446),
        Kt = n(246),
        At = function (e) {
          var t = e.onResize,
            n = e.width,
            a = Object(j.a)(e, ["onResize", "width"]);
          return n
            ? Object(T.jsx)(x.Resizable, {
                width: n,
                height: 0,
                handle: Object(T.jsx)("span", {
                  className: "react-resizable-handle",
                  onClick: function (e) {
                    e.stopPropagation();
                  },
                }),
                onResize: t,
                draggableOpts: { enableUserSelectHack: !1 },
                children: Object(T.jsx)("th", Object(b.a)({}, a)),
              })
            : Object(T.jsx)("th", Object(b.a)({}, a));
        },
        Vt = (function (e) {
          Object(_.a)(n, e);
          var t = Object(f.a)(n);
          function n(e) {
            var a;
            return (
              Object(u.a)(this, n),
              ((a = t.call(this, e)).components = { header: { cell: At } }),
              (a.onChangeMonth = function (e) {
                a.setState({ month: e });
              }),
              (a.getDataReportCW = function (e) {
                v.a
                  .get("".concat(K, "/reportCW?monthYear=").concat(e))
                  .then(function (e) {
                    a.setState({ dataSource: Object(k.get)(e, "data.data") });
                  });
              }),
              (a.onFilterData = function () {
                if (Object(k.isEmpty)(a.state.month))
                  O.a.info({ message: "Vui l\xf2ng ch\u1ecdn th\xe1ng" });
                else {
                  var e = a.state.month.format("YYYYMM");
                  a.getDataReportCW(e);
                }
              }),
              (a.clearAll = function () {
                a.setState({ filteredInfo: null, sortedInfo: null });
              }),
              (a.handleChange = function (e, t, n) {
                a.setState({ filteredInfo: t, sortedInfo: n }, function () {
                  var e = Object(k.map)(a.state.column, function (e, t) {
                    return 1 === t
                      ? Object(b.a)(
                          Object(b.a)({}, e),
                          {},
                          { filteredValue: a.state.filteredInfo.content_code }
                        )
                      : Object(b.a)({}, e);
                  });
                  a.setState({ column: e });
                });
              }),
              (a.handleResize = function (e) {
                return function (t, n) {
                  var i = n.size;
                  a.setState(function (t) {
                    var n = t.column,
                      a = Object(d.a)(n);
                    return (
                      (a[e] = Object(b.a)(
                        Object(b.a)({}, a[e]),
                        {},
                        { width: i.width }
                      )),
                      { column: a }
                    );
                  });
                };
              }),
              (a.state = {
                month: null,
                isLoading: !1,
                dataSource: [],
                filteredInfo: null,
                sortedInfo: null,
                column: [
                  {
                    title: "ID",
                    dataIndex: "id",
                    key: "stt",
                    width: 70,
                    defaultSortOrder: "ascend",
                    sorter: function (e, t) {
                      return +e.id - +t.id;
                    },
                  },
                  {
                    title: "H\u1ecd t\xean",
                    dataIndex: "name",
                    key: "name",
                    width: 70,
                    defaultSortOrder: "ascend",
                    sorter: function (e, t) {
                      return e.name.length - t.name.length;
                    },
                  },
                  {
                    title: "Status",
                    dataIndex: "status",
                    key: "status",
                    filters: [
                      { text: "On", value: "On" },
                      { text: "Off", value: "Off" },
                    ],
                    filteredValue: null,
                    onFilter: function (e, t) {
                      return t.status === e;
                    },
                    width: 70,
                    defaultSortOrder: "ascend",
                    sorter: function (e, t) {
                      return e.status.length - t.status.length;
                    },
                  },
                  {
                    title: "Type",
                    dataIndex: "type",
                    key: "type",
                    filters: [
                      { text: "CTV", value: "CTV" },
                      { text: "Fulltime", value: "Fulltime" },
                      { text: "Partime", value: "Partime" },
                    ],
                    filteredValue: null,
                    onFilter: function (e, t) {
                      return t.type === e;
                    },
                    width: 70,
                    defaultSortOrder: "ascend",
                    sorter: function (e, t) {
                      return e.type.length - t.type.length;
                    },
                  },
                  {
                    title: "Content 2000 t\u1eeb",
                    dataIndex: "count_content_2k",
                    key: "count_content_2k",
                    width: 70,
                    defaultSortOrder: "ascend",
                    sorter: function (e, t) {
                      return e.count_content_2k - t.count_content_2k;
                    },
                  },
                  {
                    title: "Content 1000 t\u1eeb",
                    dataIndex: "count_content_1k",
                    key: "count_content_1k",
                    width: 70,
                    defaultSortOrder: "ascend",
                    sorter: function (e, t) {
                      return e.count_content_1k - t.count_content_1k;
                    },
                  },
                  {
                    title: "T\u1ed5ng s\u1ea3n ph\u1ea9m",
                    dataIndex: "sum_count_content",
                    key: "sum_count_content",
                    width: 70,
                    defaultSortOrder: "ascend",
                    sorter: function (e, t) {
                      return e.sum_count_content - t.sum_count_content;
                    },
                  },
                  {
                    title: "View",
                    dataIndex: "views_count",
                    key: "views_count",
                    width: 70,
                    defaultSortOrder: "ascend",
                    sorter: function (e, t) {
                      return e.views_count - t.views_count;
                    },
                    render: function (e, t) {
                      return Object(T.jsx)("div", { children: Ne(e) });
                    },
                  },
                  {
                    title: "View/S\u1ea3n ph\u1ea9m",
                    dataIndex: "views_per_content",
                    key: "views_per_content",
                    width: 70,
                    defaultSortOrder: "ascend",
                    sorter: function (e, t) {
                      return e.views_per_content - t.views_per_content;
                    },
                    render: function (e, t) {
                      return Object(T.jsx)("div", { children: Ne(e) });
                    },
                  },
                ],
              }),
              a
            );
          }
          return (
            Object(h.a)(n, [
              {
                key: "render",
                value: function () {
                  var e = this,
                    t = this.state,
                    n = t.month,
                    a = t.column,
                    i = t.isLoading,
                    o = t.dataSource,
                    r = t.sortedInfo,
                    c = t.filteredInfo,
                    l = Object(k.map)(a, function (t, n) {
                      switch (n) {
                        case 0:
                          return Object(b.a)(
                            Object(b.a)({}, t),
                            {},
                            {
                              sortOrder: Object(k.isEmpty)(r)
                                ? null
                                : "id" === r.columnKey && r.order,
                              onHeaderCell: function (t) {
                                return {
                                  width: t.width,
                                  onResize: e.handleResize(n),
                                };
                              },
                            }
                          );
                        case 1:
                          return Object(b.a)(
                            Object(b.a)({}, t),
                            {},
                            {
                              sortOrder: Object(k.isEmpty)(r)
                                ? null
                                : "name" === r.columnKey && r.order,
                              onHeaderCell: function (t) {
                                return {
                                  width: t.width,
                                  onResize: e.handleResize(n),
                                };
                              },
                            }
                          );
                        case 2:
                          return Object(b.a)(
                            Object(b.a)({}, t),
                            {},
                            {
                              filteredValue: Object(k.isEmpty)(c)
                                ? null
                                : c.status,
                              sortOrder: Object(k.isEmpty)(r)
                                ? null
                                : "status" === r.columnKey && r.order,
                              onHeaderCell: function (t) {
                                return {
                                  width: t.width,
                                  onResize: e.handleResize(n),
                                };
                              },
                            }
                          );
                        case 3:
                          return Object(b.a)(
                            Object(b.a)({}, t),
                            {},
                            {
                              filteredValue: Object(k.isEmpty)(c)
                                ? null
                                : c.type,
                              sortOrder: Object(k.isEmpty)(r)
                                ? null
                                : "type" === r.columnKey && r.order,
                              onHeaderCell: function (t) {
                                return {
                                  width: t.width,
                                  onResize: e.handleResize(n),
                                };
                              },
                            }
                          );
                        case 4:
                          return Object(b.a)(
                            Object(b.a)({}, t),
                            {},
                            {
                              sortOrder: Object(k.isEmpty)(r)
                                ? null
                                : "count_content_2k" === r.columnKey && r.order,
                              onHeaderCell: function (t) {
                                return {
                                  width: t.width,
                                  onResize: e.handleResize(n),
                                };
                              },
                            }
                          );
                        case 5:
                          return Object(b.a)(
                            Object(b.a)({}, t),
                            {},
                            {
                              sortOrder: Object(k.isEmpty)(r)
                                ? null
                                : "count_content_1k" === r.columnKey && r.order,
                              onHeaderCell: function (t) {
                                return {
                                  width: t.width,
                                  onResize: e.handleResize(n),
                                };
                              },
                            }
                          );
                        case 6:
                          return Object(b.a)(
                            Object(b.a)({}, t),
                            {},
                            {
                              sortOrder: Object(k.isEmpty)(r)
                                ? null
                                : "sum_count_content" === r.columnKey &&
                                  r.order,
                              onHeaderCell: function (t) {
                                return {
                                  width: t.width,
                                  onResize: e.handleResize(n),
                                };
                              },
                            }
                          );
                        case 7:
                          return Object(b.a)(
                            Object(b.a)({}, t),
                            {},
                            {
                              sortOrder: Object(k.isEmpty)(r)
                                ? null
                                : "views_count" === r.columnKey && r.order,
                              onHeaderCell: function (t) {
                                return {
                                  width: t.width,
                                  onResize: e.handleResize(n),
                                };
                              },
                            }
                          );
                        case 8:
                          return Object(b.a)(
                            Object(b.a)({}, t),
                            {},
                            {
                              sortOrder: Object(k.isEmpty)(r)
                                ? null
                                : "views_per_content" === r.columnKey &&
                                  r.order,
                              onHeaderCell: function (t) {
                                return {
                                  width: t.width,
                                  onResize: e.handleResize(n),
                                };
                              },
                            }
                          );
                        default:
                          return Object(b.a)(
                            Object(b.a)({}, t),
                            {},
                            {
                              onHeaderCell: function (t) {
                                return {
                                  width: t.width,
                                  onResize: e.handleResize(n),
                                };
                              },
                            }
                          );
                      }
                    });
                  return Object(T.jsxs)("div", {
                    children: [
                      Object(T.jsxs)("div", {
                        style: { display: "flex", marginLeft: 10 },
                        children: [
                          Object(T.jsx)(m.a, {
                            type: "primary",
                            style: {
                              height: 36,
                              marginLeft: 10,
                              marginRight: 500,
                              borderRadius: 3,
                              backgroundColor:
                                Object(k.isEmpty)(c) && Object(k.isEmpty)(r)
                                  ? null
                                  : "red",
                              borderColor:
                                Object(k.isEmpty)(c) && Object(k.isEmpty)(r)
                                  ? null
                                  : "red",
                            },
                            onClick: this.clearAll,
                            children: "Xoá bộ lọc",
                          }),
                          Object(T.jsx)(V.a, {
                            picker: "month",
                            inputReadOnly: !0,
                            style: {
                              height: 36,
                              width: "30%",
                              marginBottom: 10,
                            },
                            value: n,
                            format: ie,
                            placeholder: "Ch\u1ecdn th\xe1ng",
                            onChange: this.onChangeMonth,
                          }),
                          Object(T.jsx)(m.a, {
                            type: "primary",
                            style: {
                              height: 36,
                              marginLeft: 10,
                              borderRadius: 3,
                            },
                            icon: Object(T.jsx)(Kt.a, {}),
                            className: "buttonPrimary",
                            onClick: Object(k.debounce)(function () {
                              return e.onFilterData();
                            }),
                            children: "L\u1ea4Y D\u1eee LI\u1ec6U",
                          }),
                        ],
                      }),
                      Object(T.jsx)(F.a, {
                        loading: i,
                        size: "middle",
                        bordered: !0,
                        onChange: this.handleChange,
                        components: this.components,
                        style: { marginBottom: 15 },
                        rowClassName: function (e, t) {
                          if (t % 2 !== 0) return "rowBackgroundColor";
                        },
                        scroll: { x: 1500, y: 400 },
                        dataSource: o,
                        columns: l,
                        rowKey: "id",
                        pagination: !1,
                        sticky: !0,
                      }),
                    ],
                  });
                },
              },
            ]),
            n
          );
        })(a.Component),
        Nt = function (e) {
          var t = e.onResize,
            n = e.width,
            a = Object(j.a)(e, ["onResize", "width"]);
          return n
            ? Object(T.jsx)(x.Resizable, {
                width: n,
                height: 0,
                handle: Object(T.jsx)("span", {
                  className: "react-resizable-handle",
                  onClick: function (e) {
                    e.stopPropagation();
                  },
                }),
                onResize: t,
                draggableOpts: { enableUserSelectHack: !1 },
                children: Object(T.jsx)("th", Object(b.a)({}, a)),
              })
            : Object(T.jsx)("th", Object(b.a)({}, a));
        },
        Lt = (function (e) {
          Object(_.a)(n, e);
          var t = Object(f.a)(n);
          function n(e) {
            var a;
            return (
              Object(u.a)(this, n),
              ((a = t.call(this, e)).components = { header: { cell: Nt } }),
              (a.onChangeMonth = function (e) {
                a.setState({ month: e });
              }),
              (a.getDataReportCW = function (e) {
                v.a
                  .get("".concat(K, "/reportAC?monthYear=").concat(e))
                  .then(function (e) {
                    a.setState({ dataSource: Object(k.get)(e, "data.data") });
                  });
              }),
              (a.onFilterData = function () {
                if (Object(k.isEmpty)(a.state.month))
                  O.a.info({ message: "Vui l\xf2ng ch\u1ecdn th\xe1ng" });
                else {
                  var e = a.state.month.format("YYYYMM");
                  a.getDataReportCW(e);
                }
              }),
              (a.clearAll = function () {
                a.setState({ filteredInfo: null, sortedInfo: null });
              }),
              (a.handleChange = function (e, t, n) {
                a.setState({ filteredInfo: t, sortedInfo: n }, function () {
                  var e = Object(k.map)(a.state.column, function (e, t) {
                    return 1 === t
                      ? Object(b.a)(
                          Object(b.a)({}, e),
                          {},
                          { filteredValue: a.state.filteredInfo.content_code }
                        )
                      : Object(b.a)({}, e);
                  });
                  a.setState({ column: e });
                });
              }),
              (a.handleResize = function (e) {
                return function (t, n) {
                  var i = n.size;
                  a.setState(function (t) {
                    var n = t.column,
                      a = Object(d.a)(n);
                    return (
                      (a[e] = Object(b.a)(
                        Object(b.a)({}, a[e]),
                        {},
                        { width: i.width }
                      )),
                      { column: a }
                    );
                  });
                };
              }),
              (a.state = {
                month: null,
                isLoading: !1,
                dataSource: [],
                filteredInfo: null,
                sortedInfo: null,
                column: [
                  {
                    title: "ID",
                    dataIndex: "id",
                    key: "stt",
                    width: 70,
                    defaultSortOrder: "ascend",
                    sorter: function (e, t) {
                      return +e.id - +t.id;
                    },
                  },
                  {
                    title: "H\u1ecd t\xean",
                    dataIndex: "name",
                    key: "name",
                    width: 70,
                    defaultSortOrder: "ascend",
                    sorter: function (e, t) {
                      return e.name.length - t.name.length;
                    },
                  },
                  {
                    title: "Status",
                    dataIndex: "status",
                    key: "status",
                    filters: [
                      { text: "On", value: "On" },
                      { text: "Off", value: "Off" },
                    ],
                    filteredValue: null,
                    onFilter: function (e, t) {
                      return t.status === e;
                    },
                    width: 70,
                    defaultSortOrder: "ascend",
                    sorter: function (e, t) {
                      return e.status.length - t.status.length;
                    },
                  },
                  {
                    title: "Type",
                    dataIndex: "type",
                    key: "type",
                    filters: [
                      { text: "CTV", value: "CTV" },
                      { text: "Fulltime", value: "Fulltime" },
                      { text: "Partime", value: "Partime" },
                    ],
                    filteredValue: null,
                    onFilter: function (e, t) {
                      return t.type === e;
                    },
                    width: 70,
                    defaultSortOrder: "ascend",
                    sorter: function (e, t) {
                      return e.type.length - t.type.length;
                    },
                  },
                  {
                    title: "Audio",
                    dataIndex: "count_audio",
                    key: "count_audio",
                    width: 70,
                    defaultSortOrder: "ascend",
                    sorter: function (e, t) {
                      return e.count_audio - t.count_audio;
                    },
                  },
                  {
                    title: "View",
                    dataIndex: "views_count",
                    key: "views_count",
                    width: 70,
                    defaultSortOrder: "ascend",
                    sorter: function (e, t) {
                      return e.views_count - t.views_count;
                    },
                    render: function (e, t) {
                      return Object(T.jsx)("div", { children: Ne(e) });
                    },
                  },
                  {
                    title: "View/S\u1ea3n ph\u1ea9m",
                    dataIndex: "views_per_audio",
                    key: "views_per_audio",
                    width: 70,
                    defaultSortOrder: "ascend",
                    sorter: function (e, t) {
                      return e.views_per_audio - t.views_per_audio;
                    },
                    render: function (e, t) {
                      return Object(T.jsx)("div", { children: Ne(e) });
                    },
                  },
                ],
              }),
              a
            );
          }
          return (
            Object(h.a)(n, [
              {
                key: "render",
                value: function () {
                  var e = this,
                    t = this.state,
                    n = t.month,
                    a = t.column,
                    i = t.isLoading,
                    o = t.dataSource,
                    r = t.sortedInfo,
                    c = t.filteredInfo,
                    l = Object(k.map)(a, function (t, n) {
                      switch (n) {
                        case 0:
                          return Object(b.a)(
                            Object(b.a)({}, t),
                            {},
                            {
                              sortOrder: Object(k.isEmpty)(r)
                                ? null
                                : "id" === r.columnKey && r.order,
                              onHeaderCell: function (t) {
                                return {
                                  width: t.width,
                                  onResize: e.handleResize(n),
                                };
                              },
                            }
                          );
                        case 1:
                          return Object(b.a)(
                            Object(b.a)({}, t),
                            {},
                            {
                              sortOrder: Object(k.isEmpty)(r)
                                ? null
                                : "name" === r.columnKey && r.order,
                              onHeaderCell: function (t) {
                                return {
                                  width: t.width,
                                  onResize: e.handleResize(n),
                                };
                              },
                            }
                          );
                        case 2:
                          return Object(b.a)(
                            Object(b.a)({}, t),
                            {},
                            {
                              filteredValue: Object(k.isEmpty)(c)
                                ? null
                                : c.status,
                              sortOrder: Object(k.isEmpty)(r)
                                ? null
                                : "status" === r.columnKey && r.order,
                              onHeaderCell: function (t) {
                                return {
                                  width: t.width,
                                  onResize: e.handleResize(n),
                                };
                              },
                            }
                          );
                        case 3:
                          return Object(b.a)(
                            Object(b.a)({}, t),
                            {},
                            {
                              filteredValue: Object(k.isEmpty)(c)
                                ? null
                                : c.type,
                              sortOrder: Object(k.isEmpty)(r)
                                ? null
                                : "type" === r.columnKey && r.order,
                              onHeaderCell: function (t) {
                                return {
                                  width: t.width,
                                  onResize: e.handleResize(n),
                                };
                              },
                            }
                          );
                        case 4:
                          return Object(b.a)(
                            Object(b.a)({}, t),
                            {},
                            {
                              sortOrder: Object(k.isEmpty)(r)
                                ? null
                                : "count_audio" === r.columnKey && r.order,
                              onHeaderCell: function (t) {
                                return {
                                  width: t.width,
                                  onResize: e.handleResize(n),
                                };
                              },
                            }
                          );
                        case 5:
                          return Object(b.a)(
                            Object(b.a)({}, t),
                            {},
                            {
                              sortOrder: Object(k.isEmpty)(r)
                                ? null
                                : "views_count" === r.columnKey && r.order,
                              onHeaderCell: function (t) {
                                return {
                                  width: t.width,
                                  onResize: e.handleResize(n),
                                };
                              },
                            }
                          );
                        case 6:
                          return Object(b.a)(
                            Object(b.a)({}, t),
                            {},
                            {
                              sortOrder: Object(k.isEmpty)(r)
                                ? null
                                : "views_per_audio" === r.columnKey && r.order,
                              onHeaderCell: function (t) {
                                return {
                                  width: t.width,
                                  onResize: e.handleResize(n),
                                };
                              },
                            }
                          );
                        default:
                          return Object(b.a)(
                            Object(b.a)({}, t),
                            {},
                            {
                              onHeaderCell: function (t) {
                                return {
                                  width: t.width,
                                  onResize: e.handleResize(n),
                                };
                              },
                            }
                          );
                      }
                    });
                  return Object(T.jsxs)("div", {
                    children: [
                      Object(T.jsxs)("div", {
                        style: { display: "flex", marginLeft: 10 },
                        children: [
                          Object(T.jsx)(m.a, {
                            type: "primary",
                            style: {
                              height: 36,
                              marginLeft: 10,
                              marginRight: 500,
                              borderRadius: 3,
                              backgroundColor:
                                Object(k.isEmpty)(c) && Object(k.isEmpty)(r)
                                  ? null
                                  : "red",
                              borderColor:
                                Object(k.isEmpty)(c) && Object(k.isEmpty)(r)
                                  ? null
                                  : "red",
                            },
                            onClick: this.clearAll,
                            children: "Xoá bộ lọc",
                          }),
                          Object(T.jsx)(V.a, {
                            picker: "month",
                            inputReadOnly: !0,
                            style: {
                              height: 36,
                              width: "30%",
                              marginBottom: 10,
                            },
                            value: n,
                            format: ie,
                            placeholder: "Ch\u1ecdn th\xe1ng",
                            onChange: this.onChangeMonth,
                          }),
                          Object(T.jsx)(m.a, {
                            type: "primary",
                            style: {
                              height: 36,
                              marginLeft: 10,
                              borderRadius: 3,
                            },
                            icon: Object(T.jsx)(Kt.a, {}),
                            className: "buttonPrimary",
                            onClick: Object(k.debounce)(function () {
                              return e.onFilterData();
                            }),
                            children: "L\u1ea4Y D\u1eee LI\u1ec6U",
                          }),
                        ],
                      }),
                      Object(T.jsx)(F.a, {
                        loading: i,
                        size: "middle",
                        bordered: !0,
                        onChange: this.handleChange,
                        components: this.components,
                        style: { marginBottom: 15 },
                        rowClassName: function (e, t) {
                          if (t % 2 !== 0) return "rowBackgroundColor";
                        },
                        scroll: { x: 1500, y: 400 },
                        dataSource: o,
                        columns: l,
                        rowKey: "id",
                        pagination: !1,
                        sticky: !0,
                      }),
                    ],
                  });
                },
              },
            ]),
            n
          );
        })(a.Component),
        Ft = function (e) {
          var t = e.onResize,
            n = e.width,
            a = Object(j.a)(e, ["onResize", "width"]);
          return n
            ? Object(T.jsx)(x.Resizable, {
                width: n,
                height: 0,
                handle: Object(T.jsx)("span", {
                  className: "react-resizable-handle",
                  onClick: function (e) {
                    e.stopPropagation();
                  },
                }),
                onResize: t,
                draggableOpts: { enableUserSelectHack: !1 },
                children: Object(T.jsx)("th", Object(b.a)({}, a)),
              })
            : Object(T.jsx)("th", Object(b.a)({}, a));
        },
        Wt = (function (e) {
          Object(_.a)(n, e);
          var t = Object(f.a)(n);
          function n(e) {
            var a;
            return (
              Object(u.a)(this, n),
              ((a = t.call(this, e)).components = { header: { cell: Ft } }),
              (a.onChangeMonth = function (e) {
                a.setState({ month: e });
              }),
              (a.getDataReportCW = function (e) {
                v.a
                  .get("".concat(K, "/reportVE?monthYear=").concat(e))
                  .then(function (e) {
                    a.setState({ dataSource: Object(k.get)(e, "data.data") });
                  });
              }),
              (a.onFilterData = function () {
                if (Object(k.isEmpty)(a.state.month))
                  O.a.info({ message: "Vui l\xf2ng ch\u1ecdn th\xe1ng" });
                else {
                  var e = a.state.month.format("YYYYMM");
                  a.getDataReportCW(e);
                }
              }),
              (a.clearAll = function () {
                a.setState({ filteredInfo: null, sortedInfo: null });
              }),
              (a.handleChange = function (e, t, n) {
                a.setState({ filteredInfo: t, sortedInfo: n }, function () {
                  var e = Object(k.map)(a.state.column, function (e, t) {
                    return 1 === t
                      ? Object(b.a)(
                          Object(b.a)({}, e),
                          {},
                          { filteredValue: a.state.filteredInfo.content_code }
                        )
                      : Object(b.a)({}, e);
                  });
                  a.setState({ column: e });
                });
              }),
              (a.handleResize = function (e) {
                return function (t, n) {
                  var i = n.size;
                  a.setState(function (t) {
                    var n = t.column,
                      a = Object(d.a)(n);
                    return (
                      (a[e] = Object(b.a)(
                        Object(b.a)({}, a[e]),
                        {},
                        { width: i.width }
                      )),
                      { column: a }
                    );
                  });
                };
              }),
              (a.state = {
                month: null,
                isLoading: !1,
                dataSource: [],
                filteredInfo: null,
                sortedInfo: null,
                column: [
                  {
                    title: "ID",
                    dataIndex: "id",
                    key: "stt",
                    width: 70,
                    defaultSortOrder: "ascend",
                    sorter: function (e, t) {
                      return +e.id - +t.id;
                    },
                  },
                  {
                    title: "H\u1ecd t\xean",
                    dataIndex: "name",
                    key: "name",
                    width: 70,
                    defaultSortOrder: "ascend",
                    sorter: function (e, t) {
                      return e.name.length - t.name.length;
                    },
                  },
                  {
                    title: "Status",
                    dataIndex: "status",
                    key: "status",
                    filters: [
                      { text: "On", value: "On" },
                      { text: "Off", value: "Off" },
                    ],
                    filteredValue: null,
                    onFilter: function (e, t) {
                      return t.status === e;
                    },
                    width: 70,
                    defaultSortOrder: "ascend",
                    sorter: function (e, t) {
                      return e.status.length - t.status.length;
                    },
                  },
                  {
                    title: "Type",
                    dataIndex: "type",
                    key: "type",
                    filters: [
                      { text: "CTV", value: "CTV" },
                      { text: "Fulltime", value: "Fulltime" },
                      { text: "Partime", value: "Partime" },
                    ],
                    filteredValue: null,
                    onFilter: function (e, t) {
                      return t.type === e;
                    },
                    width: 70,
                    defaultSortOrder: "ascend",
                    sorter: function (e, t) {
                      return e.type.length - t.type.length;
                    },
                  },
                  {
                    title: "Video 2000 t\u1eeb",
                    dataIndex: "count_video_2k",
                    key: "count_video_2k",
                    width: 70,
                    defaultSortOrder: "ascend",
                    sorter: function (e, t) {
                      return e.count_video_2k - t.count_video_2k;
                    },
                  },
                  {
                    title: "Video 1000 t\u1eeb",
                    dataIndex: "count_video_1k",
                    key: "count_video_1k",
                    width: 70,
                    defaultSortOrder: "ascend",
                    sorter: function (e, t) {
                      return e.count_video_1k - t.count_video_1k;
                    },
                  },
                  {
                    title: "T\u1ed5ng s\u1ea3n ph\u1ea9m",
                    dataIndex: "sum_count_video",
                    key: "sum_count_video",
                    width: 70,
                    defaultSortOrder: "ascend",
                    sorter: function (e, t) {
                      return e.sum_count_content - t.sum_count_content;
                    },
                  },
                  {
                    title: "View",
                    dataIndex: "views_count",
                    key: "views_count",
                    width: 70,
                    defaultSortOrder: "ascend",
                    sorter: function (e, t) {
                      return e.views_count - t.views_count;
                    },
                    render: function (e, t) {
                      return Object(T.jsx)("div", { children: Ne(e) });
                    },
                  },
                  {
                    title: "View/S\u1ea3n ph\u1ea9m",
                    dataIndex: "views_per_video",
                    key: "views_per_video",
                    width: 70,
                    defaultSortOrder: "ascend",
                    sorter: function (e, t) {
                      return e.views_per_content - t.views_per_content;
                    },
                    render: function (e, t) {
                      return Object(T.jsx)("div", { children: Ne(e) });
                    },
                  },
                ],
              }),
              a
            );
          }
          return (
            Object(h.a)(n, [
              {
                key: "render",
                value: function () {
                  var e = this,
                    t = this.state,
                    n = t.month,
                    a = t.column,
                    i = t.isLoading,
                    o = t.dataSource,
                    r = t.sortedInfo,
                    c = t.filteredInfo,
                    l = Object(k.map)(a, function (t, n) {
                      switch (n) {
                        case 0:
                          return Object(b.a)(
                            Object(b.a)({}, t),
                            {},
                            {
                              sortOrder: Object(k.isEmpty)(r)
                                ? null
                                : "id" === r.columnKey && r.order,
                              onHeaderCell: function (t) {
                                return {
                                  width: t.width,
                                  onResize: e.handleResize(n),
                                };
                              },
                            }
                          );
                        case 1:
                          return Object(b.a)(
                            Object(b.a)({}, t),
                            {},
                            {
                              sortOrder: Object(k.isEmpty)(r)
                                ? null
                                : "name" === r.columnKey && r.order,
                              onHeaderCell: function (t) {
                                return {
                                  width: t.width,
                                  onResize: e.handleResize(n),
                                };
                              },
                            }
                          );
                        case 2:
                          return Object(b.a)(
                            Object(b.a)({}, t),
                            {},
                            {
                              filteredValue: Object(k.isEmpty)(c)
                                ? null
                                : c.status,
                              sortOrder: Object(k.isEmpty)(r)
                                ? null
                                : "status" === r.columnKey && r.order,
                              onHeaderCell: function (t) {
                                return {
                                  width: t.width,
                                  onResize: e.handleResize(n),
                                };
                              },
                            }
                          );
                        case 3:
                          return Object(b.a)(
                            Object(b.a)({}, t),
                            {},
                            {
                              filteredValue: Object(k.isEmpty)(c)
                                ? null
                                : c.type,
                              sortOrder: Object(k.isEmpty)(r)
                                ? null
                                : "type" === r.columnKey && r.order,
                              onHeaderCell: function (t) {
                                return {
                                  width: t.width,
                                  onResize: e.handleResize(n),
                                };
                              },
                            }
                          );
                        case 4:
                          return Object(b.a)(
                            Object(b.a)({}, t),
                            {},
                            {
                              sortOrder: Object(k.isEmpty)(r)
                                ? null
                                : "count_video_2k" === r.columnKey && r.order,
                              onHeaderCell: function (t) {
                                return {
                                  width: t.width,
                                  onResize: e.handleResize(n),
                                };
                              },
                            }
                          );
                        case 5:
                          return Object(b.a)(
                            Object(b.a)({}, t),
                            {},
                            {
                              sortOrder: Object(k.isEmpty)(r)
                                ? null
                                : "count_video_1k" === r.columnKey && r.order,
                              onHeaderCell: function (t) {
                                return {
                                  width: t.width,
                                  onResize: e.handleResize(n),
                                };
                              },
                            }
                          );
                        case 6:
                          return Object(b.a)(
                            Object(b.a)({}, t),
                            {},
                            {
                              sortOrder: Object(k.isEmpty)(r)
                                ? null
                                : "sum_count_content" === r.columnKey &&
                                  r.order,
                              onHeaderCell: function (t) {
                                return {
                                  width: t.width,
                                  onResize: e.handleResize(n),
                                };
                              },
                            }
                          );
                        case 7:
                          return Object(b.a)(
                            Object(b.a)({}, t),
                            {},
                            {
                              sortOrder: Object(k.isEmpty)(r)
                                ? null
                                : "views_count" === r.columnKey && r.order,
                              onHeaderCell: function (t) {
                                return {
                                  width: t.width,
                                  onResize: e.handleResize(n),
                                };
                              },
                            }
                          );
                        case 8:
                          return Object(b.a)(
                            Object(b.a)({}, t),
                            {},
                            {
                              sortOrder: Object(k.isEmpty)(r)
                                ? null
                                : "views_per_content" === r.columnKey &&
                                  r.order,
                              onHeaderCell: function (t) {
                                return {
                                  width: t.width,
                                  onResize: e.handleResize(n),
                                };
                              },
                            }
                          );
                        default:
                          return Object(b.a)(
                            Object(b.a)({}, t),
                            {},
                            {
                              onHeaderCell: function (t) {
                                return {
                                  width: t.width,
                                  onResize: e.handleResize(n),
                                };
                              },
                            }
                          );
                      }
                    });
                  return Object(T.jsxs)("div", {
                    children: [
                      Object(T.jsxs)("div", {
                        style: { display: "flex", marginLeft: 10 },
                        children: [
                          Object(T.jsx)(m.a, {
                            type: "primary",
                            style: {
                              height: 36,
                              marginLeft: 10,
                              marginRight: 500,
                              borderRadius: 3,
                              backgroundColor:
                                Object(k.isEmpty)(c) && Object(k.isEmpty)(r)
                                  ? null
                                  : "red",
                              borderColor:
                                Object(k.isEmpty)(c) && Object(k.isEmpty)(r)
                                  ? null
                                  : "red",
                            },
                            onClick: this.clearAll,
                            children: "Xoá bộ lọc",
                          }),
                          Object(T.jsx)(V.a, {
                            picker: "month",
                            inputReadOnly: !0,
                            style: {
                              height: 36,
                              width: "30%",
                              marginBottom: 10,
                            },
                            value: n,
                            format: ie,
                            placeholder: "Ch\u1ecdn th\xe1ng",
                            onChange: this.onChangeMonth,
                          }),
                          Object(T.jsx)(m.a, {
                            type: "primary",
                            style: {
                              height: 36,
                              marginLeft: 10,
                              borderRadius: 3,
                            },
                            icon: Object(T.jsx)(Kt.a, {}),
                            className: "buttonPrimary",
                            onClick: Object(k.debounce)(function () {
                              return e.onFilterData();
                            }),
                            children: "L\u1ea4Y D\u1eee LI\u1ec6U",
                          }),
                        ],
                      }),
                      Object(T.jsx)(F.a, {
                        loading: i,
                        size: "middle",
                        bordered: !0,
                        onChange: this.handleChange,
                        components: this.components,
                        style: { marginBottom: 15 },
                        rowClassName: function (e, t) {
                          if (t % 2 !== 0) return "rowBackgroundColor";
                        },
                        scroll: { x: 1500, y: 400 },
                        dataSource: o,
                        columns: l,
                        rowKey: "id",
                        pagination: !1,
                        sticky: !0,
                      }),
                    ],
                  });
                },
              },
            ]),
            n
          );
        })(a.Component),
        Pt = g.a.TabPane,
        Bt = [
          {
            value: "report_cw",
            label: "Report CW",
            icon: Object(T.jsx)(wt.a, {}),
          },
          {
            value: "report_ac",
            label: "Report AC",
            icon: Object(T.jsx)(xt.a, {}),
          },
          {
            value: "report_ve",
            label: "Report VE",
            icon: Object(T.jsx)(Yt.a, {}),
          },
        ],
        Gt = (function (e) {
          Object(_.a)(n, e);
          var t = Object(f.a)(n);
          function n(e) {
            var a;
            return (
              Object(u.a)(this, n),
              ((a = t.call(this, e))._renderTab = function (e) {
                switch (e) {
                  case "report_cw":
                    return Object(T.jsx)(Vt, {});
                  case "report_ac":
                    return Object(T.jsx)(Lt, {});
                  case "report_ve":
                    return Object(T.jsx)(Wt, {});
                  default:
                    return null;
                }
              }),
              (a.state = { valueOptions: Object(k.get)(Bt[0], "value") }),
              a
            );
          }
          return (
            Object(h.a)(n, [
              {
                key: "render",
                value: function () {
                  var e = this,
                    t = this.state.valueOptions;
                  return Object(T.jsx)("div", {
                    children: Object(T.jsx)(g.a, {
                      onChange: this.onChangeSelectOption,
                      activeKey: Object(k.get)(t),
                      style: {
                        justifyContent: "center",
                        display: "flex",
                        alignSelf: "center",
                        color: "#238c31",
                      },
                      size: "large",
                      type: "card",
                      children: Object(k.map)(Bt, function (t) {
                        return Object(T.jsx)(
                          Pt,
                          {
                            tab: Object(T.jsxs)("span", {
                              children: [t.icon, t.label],
                            }),
                            children: e._renderTab(t.value),
                          },
                          t.value
                        );
                      }),
                    }),
                  });
                },
              },
            ]),
            n
          );
        })(a.Component),
        Jt = n(435),
        Xt = "AIzaSyD3uGEgJa2Y-PqhcZ_cessU2xVZglG-sWs",
        Zt = "UUKe4Zl3MksF-dj9tHKZJaDw",
        qt =
          (g.a.TabPane,
          [
            {
              value: "report_nang_suat",
              label: "Report n\u0103ng su\u1ea5t nh\xe2n vi\xean",
              icon: Object(T.jsx)(Mt.a, {}),
            },
            {
              value: "report_youtube",
              label: "Report ch\u1ec9 s\u1ed1 Youtube",
              icon: Object(T.jsx)(Ht.a, {}),
            },
          ]),
        Qt = (function (e) {
          Object(_.a)(n, e);
          var t = Object(f.a)(n);
          function n(e) {
            var a;
            return (
              Object(u.a)(this, n),
              ((a = t.call(this, e))._renderTab = function (e) {
                switch (e) {
                  case "report_nang_suat":
                    return Object(T.jsx)(Gt, {});
                  case "report_youtube":
                    return Object(T.jsx)(n, {});
                  default:
                    return null;
                }
              }),
              (a.onChangeMonth = function (e) {
                a.setState({ month: e });
              }),
              (a.getAllVideo = Object(s.a)(
                l.a.mark(function e() {
                  var t, n, i;
                  return l.a.wrap(function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            (t = []),
                            (n = v.a.create({
                              baseURL:
                                "https://www.googleapis.com/youtube/v3/playlistItems",
                              params: {
                                part: "snippet",
                                key: Xt,
                                maxResults: 50,
                                playlistId: Zt,
                              },
                            })),
                            (e.next = 4),
                            n.get("/")
                          );
                        case 4:
                          (i = e.sent),
                            (t = [].concat(
                              Object(d.a)(t),
                              Object(d.a)(Object(k.get)(i, "data.items"))
                            ));
                        case 6:
                          if (50 !== Object(k.get)(i, "data.items.length")) {
                            e.next = 14;
                            break;
                          }
                          return (
                            (n = v.a.create({
                              baseURL:
                                "https://www.googleapis.com/youtube/v3/playlistItems",
                              params: {
                                part: "snippet",
                                key: Xt,
                                maxResults: 50,
                                pageToken: Object(k.get)(
                                  i,
                                  "data.nextPageToken"
                                ),
                                playlistId: Zt,
                              },
                            })),
                            (e.next = 10),
                            n.get("/")
                          );
                        case 10:
                          (i = e.sent),
                            (t = [].concat(
                              Object(d.a)(t),
                              Object(d.a)(Object(k.get)(i, "data.items"))
                            )),
                            (e.next = 6);
                          break;
                        case 14:
                          (t = Object(k.map)(t, function (e, t) {
                            return Object(k.get)(
                              e,
                              "snippet.resourceId.videoId"
                            );
                          })),
                            console.log("testResponse", i),
                            console.log("result", t),
                            a.setState({ videoIds: t });
                        case 18:
                        case "end":
                          return e.stop();
                      }
                  }, e);
                })
              )),
              (a.getDataChannel = Object(s.a)(
                l.a.mark(function e() {
                  var t, n, i;
                  return l.a.wrap(function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (e.next = 2), localStorage.getItem("token");
                        case 2:
                          (t = e.sent),
                            (n = JSON.parse(t))
                              ? ((i = { token: n, videoIds: [] }),
                                v.a
                                  .post("".concat(K, "/yapi"), i)
                                  .then(function (e) {
                                    if (e.data.data) {
                                      var t = e.data.data[0];
                                      a.setState({
                                        estimatedRevenue: t[0],
                                        views: t[1],
                                        comments: t[2],
                                        likes: t[3],
                                        dislikes: t[4],
                                        estimatedMinutesWatched: t[5],
                                        averageViewDuration: t[6],
                                        annotationClickThroughRate: t[7],
                                        subscribersGained: t[8],
                                        subscribersLost: t[9],
                                        redViews: t[10],
                                        shares: t[11],
                                        averageViewPercentage: t[12],
                                        yapiData: t,
                                      });
                                    }
                                  }))
                              : O.a.info({
                                  message:
                                    "Vui l\xf2ng x\xe1c th\u1ef1c tr\u01b0\u1edbc khi l\u1ea5y data",
                                  style: { backgroundColor: "#f5fff8" },
                                });
                        case 5:
                        case "end":
                          return e.stop();
                      }
                  }, e);
                })
              )),
              (a.getDataVideos = Object(s.a)(
                l.a.mark(function e() {
                  var t, n, i;
                  return l.a.wrap(function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (e.next = 2), localStorage.getItem("token");
                        case 2:
                          (t = e.sent),
                            (n = JSON.parse(t))
                              ? (a.setState({ isLoading: !0 }),
                                (i = { token: n, videoIds: a.state.videoIds }),
                                v.a
                                  .post("".concat(K, "/yapi"), i)
                                  .then(function (e) {
                                    if (e.data.data) {
                                      var t = e.data.data;
                                      console.log("yapiData", t),
                                        (t = Object(k.map)(t, function (e, t) {
                                          var n = e[0];
                                          return {
                                            stt: t + 1,
                                            videoId: a.state.videoIds[t],
                                            estimatedRevenue: n[0],
                                            views: n[1],
                                            comments: n[2],
                                            likes: n[3],
                                            dislikes: n[4],
                                            estimatedMinutesWatched: n[5],
                                            averageViewDuration: n[6],
                                            annotationClickThroughRate: n[7],
                                            subscribersGained: n[8],
                                            subscribersLost: n[9],
                                            redViews: n[10],
                                            shares: n[11],
                                            averageViewPercentage: n[12],
                                          };
                                        })),
                                        a.setState({
                                          videosData: t,
                                          isLoading: !1,
                                        });
                                    }
                                  }))
                              : O.a.info({
                                  message:
                                    "Vui l\xf2ng x\xe1c th\u1ef1c tr\u01b0\u1edbc khi l\u1ea5y data",
                                  style: { backgroundColor: "#f5fff8" },
                                });
                        case 5:
                        case "end":
                          return e.stop();
                      }
                  }, e);
                })
              )),
              (a.gup = function (e, t) {
                t || (t = window.location.href),
                  (e = e.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]"));
                var n = new RegExp("[\\?&]" + e + "=([^&#]*)").exec(t);
                return null == n ? null : n[1];
              }),
              (a.state = {
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
                isLoading: !1,
                valueOptions: Object(k.get)(qt[0], "value"),
                month: null,
              }),
              a
            );
          }
          return (
            Object(h.a)(n, [
              {
                key: "componentDidMount",
                value: (function () {
                  var e = Object(s.a)(
                    l.a.mark(function e() {
                      var t,
                        n,
                        a,
                        i,
                        o = this;
                      return l.a.wrap(
                        function (e) {
                          for (;;)
                            switch ((e.prev = e.next)) {
                              case 0:
                                return (
                                  (e.next = 2),
                                  localStorage.getItem("listToken")
                                );
                              case 2:
                                (t = e.sent),
                                  (n = t ? JSON.parse(t) : []),
                                  console.log("listToken in getData", n),
                                  this.getAllVideo(),
                                  (a = window.location.href),
                                  (i = this.gup("code", a)),
                                  console.log("url", i),
                                  this.setState({ url: i }),
                                  i &&
                                    v.a
                                      .get(
                                        ""
                                          .concat(K, "/getToken?code=")
                                          .concat(i)
                                      )
                                      .then(function (e) {
                                        if (e.data.data) {
                                          var t = e.data.data;
                                          console.log("token", t);
                                          var a = { token: t, videoIds: [] };
                                          v.a
                                            .post(
                                              "".concat(K, "/getChannelId"),
                                              a
                                            )
                                            .then(function (e) {
                                              console.log(
                                                "channelId",
                                                e.data.data
                                              );
                                              var a = {
                                                token: t,
                                                channelId: e.data.data,
                                              };
                                              (n = Object(k.filter)(
                                                n,
                                                function (t, n) {
                                                  return (
                                                    t.channelId !== e.data.data
                                                  );
                                                }
                                              )),
                                                console.log("channelInfo", a),
                                                n.push(a),
                                                console.log("listToken", n),
                                                localStorage.setItem(
                                                  "token",
                                                  JSON.stringify(t)
                                                ),
                                                localStorage.setItem(
                                                  "listToken",
                                                  JSON.stringify(n)
                                                ),
                                                o.setState({ token: t });
                                            });
                                        }
                                      }),
                                  v.a
                                    .get("".concat(K, "/authen"))
                                    .then(function (e) {
                                      o.setState({ linkAuthen: e.data.data });
                                    });
                              case 12:
                              case "end":
                                return e.stop();
                            }
                        },
                        e,
                        this
                      );
                    })
                  );
                  return function () {
                    return e.apply(this, arguments);
                  };
                })(),
              },
              {
                key: "render",
                value: function () {
                  var e = this.state,
                    t = (e.url, e.linkAuthen),
                    n =
                      (e.estimatedRevenue,
                      e.views,
                      e.comments,
                      e.likes,
                      e.dislikes,
                      e.estimatedMinutesWatched,
                      e.averageViewDuration,
                      e.yapiData,
                      e.token,
                      e.annotationClickThroughRate,
                      e.subscribersGained,
                      e.subscribersLost,
                      e.redViews,
                      e.shares,
                      e.averageViewPercentage,
                      e.videosData,
                      e.isLoading,
                      e.valueOptions,
                      e.month);
                  return Object(T.jsxs)("div", {
                    children: [
                      Object(T.jsxs)("div", {
                        style: {
                          justifyContent: "space-around",
                          display: "flex",
                        },
                        children: [
                          Object(T.jsx)(m.a, {
                            href: t,
                            style: {
                              color: "white",
                              backgroundColor: "#238c31",
                              fontWeight: "bold",
                              borderRadius: 5,
                              borderColor: "#238c31",
                              marginBottom: 20,
                              marginLeft: 20,
                            },
                            children: "Authentication",
                          }),
                          Object(T.jsx)(V.a, {
                            picker: "month",
                            inputReadOnly: !0,
                            style: {
                              height: 36,
                              width: "30%",
                              marginBottom: 10,
                            },
                            value: n,
                            format: ie,
                            placeholder: "Ch\u1ecdn th\xe1ng",
                            onChange: this.onChangeMonth,
                          }),
                        ],
                      }),
                      Object(T.jsxs)("div", {
                        className: "site-card-wrapper",
                        children: [
                          Object(T.jsxs)(it.a, {
                            gutter: 16,
                            children: [
                              Object(T.jsx)(ot.a, {
                                span: 6,
                                children: Object(T.jsxs)(Jt.a, {
                                  style: {
                                    backgroundColor: "#2a44a3",
                                    color: "white",
                                  },
                                  title: "T\u1ed4NG DOANH S\u1ed0",
                                  headStyle: {
                                    color: "white",
                                    fontSize: 28,
                                    paddingLeft: 95,
                                  },
                                  bordered: !1,
                                  bodyStyle: { padding: 0, paddingBottom: 28 },
                                  children: [
                                    Object(T.jsxs)("div", {
                                      style: { padding: 20, marginLeft: 70 },
                                      children: [
                                        Object(T.jsxs)(it.a, {
                                          gutter: 8,
                                          children: [
                                            Object(T.jsx)(ot.a, {
                                              style: {
                                                fontSize: 16,
                                                fontWeight: "bold",
                                                marginTop: 10,
                                              },
                                              span: 12,
                                              children:
                                                "TH\u1ef0C \u0110\u1ea0T",
                                            }),
                                            Object(T.jsx)(ot.a, {
                                              style: {
                                                fontSize: 24,
                                                fontWeight: "bold",
                                              },
                                              span: 12,
                                              children: "120 TR",
                                            }),
                                          ],
                                        }),
                                        " ",
                                        Object(T.jsxs)(it.a, {
                                          gutter: 8,
                                          children: [
                                            Object(T.jsx)(ot.a, {
                                              style: {
                                                fontSize: 16,
                                                fontWeight: "bold",
                                                marginTop: 10,
                                              },
                                              span: 12,
                                              children: "K\u1ebe HO\u1ea0CH",
                                            }),
                                            Object(T.jsx)(ot.a, {
                                              style: {
                                                fontSize: 24,
                                                fontWeight: "bold",
                                              },
                                              span: 12,
                                              children: "150 TR",
                                            }),
                                          ],
                                        }),
                                        Object(T.jsxs)(it.a, {
                                          gutter: 8,
                                          children: [
                                            Object(T.jsx)(ot.a, {
                                              style: {
                                                fontSize: 16,
                                                fontWeight: "bold",
                                                marginTop: 10,
                                              },
                                              span: 12,
                                              children: "% K\u1ebe HO\u1ea0CH",
                                            }),
                                            Object(T.jsx)(ot.a, {
                                              style: {
                                                fontSize: 24,
                                                fontWeight: "bold",
                                              },
                                              span: 12,
                                              children: "80 %",
                                            }),
                                          ],
                                        }),
                                      ],
                                    }),
                                    Object(T.jsx)("div", {
                                      style: {
                                        height: 1,
                                        backgroundColor: "#ffffff",
                                        marginTop: 10,
                                        marginBottom: 10,
                                      },
                                    }),
                                    Object(T.jsxs)("div", {
                                      style: { padding: 20, marginLeft: 70 },
                                      children: [
                                        Object(T.jsxs)(it.a, {
                                          gutter: 8,
                                          children: [
                                            Object(T.jsx)(ot.a, {
                                              style: {
                                                fontSize: 14,
                                                fontWeight: "bold",
                                                marginTop: 5,
                                              },
                                              span: 12,
                                              children: "DT c\u0169",
                                            }),
                                            Object(T.jsx)(ot.a, {
                                              style: {
                                                fontSize: 18,
                                                fontWeight: "bold",
                                              },
                                              span: 12,
                                              children: "100 tr",
                                            }),
                                          ],
                                        }),
                                        Object(T.jsxs)(it.a, {
                                          gutter: 8,
                                          children: [
                                            Object(T.jsx)(ot.a, {
                                              style: {
                                                fontSize: 14,
                                                fontWeight: "bold",
                                                marginTop: 5,
                                              },
                                              span: 12,
                                              children: "DT m\u1edbi",
                                            }),
                                            Object(T.jsx)(ot.a, {
                                              style: {
                                                fontSize: 18,
                                                fontWeight: "bold",
                                              },
                                              span: 12,
                                              children: "20 tr",
                                            }),
                                          ],
                                        }),
                                      ],
                                    }),
                                  ],
                                }),
                              }),
                              Object(T.jsx)(ot.a, {
                                span: 6,
                                children: Object(T.jsxs)(Jt.a, {
                                  style: {
                                    backgroundColor: "#fe8d00",
                                    color: "white",
                                  },
                                  title: "T\u1ed4NG L\u01af\u1ee2T XEM",
                                  headStyle: {
                                    color: "white",
                                    fontSize: 28,
                                    paddingLeft: 100,
                                  },
                                  bordered: !1,
                                  bodyStyle: { padding: 0, paddingBottom: 28 },
                                  children: [
                                    Object(T.jsxs)("div", {
                                      style: { padding: 20, marginLeft: 70 },
                                      children: [
                                        Object(T.jsxs)(it.a, {
                                          gutter: 8,
                                          children: [
                                            Object(T.jsx)(ot.a, {
                                              style: {
                                                fontSize: 16,
                                                fontWeight: "bold",
                                              },
                                              span: 12,
                                              children:
                                                "TH\u1ef0C \u0110\u1ea0T",
                                            }),
                                            Object(T.jsx)(ot.a, {
                                              style: {
                                                fontSize: 24,
                                                fontWeight: "bold",
                                              },
                                              span: 12,
                                              children: "12 TR",
                                            }),
                                          ],
                                        }),
                                        " ",
                                        Object(T.jsxs)(it.a, {
                                          gutter: 8,
                                          children: [
                                            Object(T.jsx)(ot.a, {
                                              style: {
                                                fontSize: 16,
                                                fontWeight: "bold",
                                              },
                                              span: 12,
                                              children: "K\u1ebe HO\u1ea0CH",
                                            }),
                                            Object(T.jsx)(ot.a, {
                                              style: {
                                                fontSize: 24,
                                                fontWeight: "bold",
                                              },
                                              span: 12,
                                              children: "15 TR",
                                            }),
                                          ],
                                        }),
                                        Object(T.jsxs)(it.a, {
                                          gutter: 8,
                                          children: [
                                            Object(T.jsx)(ot.a, {
                                              style: {
                                                fontSize: 16,
                                                fontWeight: "bold",
                                              },
                                              span: 12,
                                              children: "% K\u1ebe HO\u1ea0CH",
                                            }),
                                            Object(T.jsx)(ot.a, {
                                              style: {
                                                fontSize: 24,
                                                fontWeight: "bold",
                                              },
                                              span: 12,
                                              children: "80 %",
                                            }),
                                          ],
                                        }),
                                      ],
                                    }),
                                    Object(T.jsx)("div", {
                                      style: {
                                        height: 1,
                                        backgroundColor: "#ffffff",
                                        marginTop: 10,
                                        marginBottom: 10,
                                      },
                                    }),
                                    Object(T.jsxs)("div", {
                                      style: { padding: 20, marginLeft: 70 },
                                      children: [
                                        Object(T.jsxs)(it.a, {
                                          gutter: 8,
                                          children: [
                                            Object(T.jsx)(ot.a, {
                                              style: {
                                                fontSize: 14,
                                                fontWeight: "bold",
                                              },
                                              span: 12,
                                              children: "View c\u0169",
                                            }),
                                            Object(T.jsx)(ot.a, {
                                              style: {
                                                fontSize: 18,
                                                fontWeight: "bold",
                                              },
                                              span: 12,
                                              children: "10 tr",
                                            }),
                                          ],
                                        }),
                                        Object(T.jsxs)(it.a, {
                                          gutter: 8,
                                          children: [
                                            Object(T.jsx)(ot.a, {
                                              style: {
                                                fontSize: 14,
                                                fontWeight: "bold",
                                              },
                                              span: 12,
                                              children: "View m\u1edbi",
                                            }),
                                            Object(T.jsx)(ot.a, {
                                              style: {
                                                fontSize: 18,
                                                fontWeight: "bold",
                                              },
                                              span: 12,
                                              children: "2 tr",
                                            }),
                                          ],
                                        }),
                                      ],
                                    }),
                                  ],
                                }),
                              }),
                              Object(T.jsx)(ot.a, {
                                span: 6,
                                children: Object(T.jsxs)(Jt.a, {
                                  style: {
                                    backgroundColor: "#2cb7f2",
                                    color: "white",
                                  },
                                  title: "S\u1ea2N L\u01af\u1ee2NG",
                                  headStyle: {
                                    color: "white",
                                    fontSize: 28,
                                    paddingLeft: 130,
                                  },
                                  bordered: !1,
                                  bodyStyle: { padding: 0 },
                                  children: [
                                    Object(T.jsxs)("div", {
                                      style: { padding: 20, marginLeft: 80 },
                                      children: [
                                        Object(T.jsxs)(it.a, {
                                          gutter: 8,
                                          children: [
                                            Object(T.jsx)(ot.a, {
                                              style: {
                                                fontSize: 16,
                                                fontWeight: "bold",
                                              },
                                              span: 12,
                                              children: "VIDEO PUBLISH",
                                            }),
                                            Object(T.jsx)(ot.a, {
                                              style: {
                                                fontSize: 24,
                                                fontWeight: "bold",
                                              },
                                              span: 12,
                                              children: "72",
                                            }),
                                          ],
                                        }),
                                        " ",
                                        Object(T.jsxs)(it.a, {
                                          gutter: 8,
                                          children: [
                                            Object(T.jsx)(ot.a, {
                                              style: {
                                                fontSize: 16,
                                                fontWeight: "bold",
                                              },
                                              span: 12,
                                              children: "K\u1ebe HO\u1ea0CH",
                                            }),
                                            Object(T.jsx)(ot.a, {
                                              style: {
                                                fontSize: 24,
                                                fontWeight: "bold",
                                              },
                                              span: 12,
                                              children: "90",
                                            }),
                                          ],
                                        }),
                                        Object(T.jsxs)(it.a, {
                                          gutter: 8,
                                          children: [
                                            Object(T.jsx)(ot.a, {
                                              style: {
                                                fontSize: 16,
                                                fontWeight: "bold",
                                              },
                                              span: 12,
                                              children: "% K\u1ebe HO\u1ea0CH",
                                            }),
                                            Object(T.jsx)(ot.a, {
                                              style: {
                                                fontSize: 24,
                                                fontWeight: "bold",
                                              },
                                              span: 12,
                                              children: "80 %",
                                            }),
                                          ],
                                        }),
                                      ],
                                    }),
                                    Object(T.jsx)("div", {
                                      style: {
                                        height: 1,
                                        backgroundColor: "#ffffff",
                                        marginTop: 10,
                                        marginBottom: 10,
                                      },
                                    }),
                                    Object(T.jsxs)("div", {
                                      style: { padding: 20, marginLeft: 80 },
                                      children: [
                                        Object(T.jsxs)(it.a, {
                                          gutter: 8,
                                          children: [
                                            Object(T.jsx)(ot.a, {
                                              style: {
                                                fontSize: 14,
                                                fontWeight: "bold",
                                              },
                                              span: 12,
                                              children: "Script",
                                            }),
                                            Object(T.jsx)(ot.a, {
                                              style: {
                                                fontSize: 18,
                                                fontWeight: "bold",
                                              },
                                              span: 12,
                                              children: "100",
                                            }),
                                          ],
                                        }),
                                        Object(T.jsxs)(it.a, {
                                          gutter: 8,
                                          children: [
                                            Object(T.jsx)(ot.a, {
                                              style: {
                                                fontSize: 14,
                                                fontWeight: "bold",
                                              },
                                              span: 12,
                                              children: "Audio",
                                            }),
                                            Object(T.jsx)(ot.a, {
                                              style: {
                                                fontSize: 18,
                                                fontWeight: "bold",
                                              },
                                              span: 12,
                                              children: "90",
                                            }),
                                          ],
                                        }),
                                        Object(T.jsxs)(it.a, {
                                          gutter: 8,
                                          children: [
                                            Object(T.jsx)(ot.a, {
                                              style: {
                                                fontSize: 14,
                                                fontWeight: "bold",
                                              },
                                              span: 12,
                                              children:
                                                "Video s\u1ea3n xu\u1ea5t",
                                            }),
                                            Object(T.jsx)(ot.a, {
                                              style: {
                                                fontSize: 18,
                                                fontWeight: "bold",
                                              },
                                              span: 12,
                                              children: "75",
                                            }),
                                          ],
                                        }),
                                      ],
                                    }),
                                  ],
                                }),
                              }),
                              Object(T.jsx)(ot.a, {
                                span: 6,
                                children: Object(T.jsxs)(Jt.a, {
                                  style: {
                                    backgroundColor: "#029d01",
                                    color: "white",
                                  },
                                  title: "SUBSCRIBERS",
                                  headStyle: {
                                    color: "white",
                                    fontSize: 28,
                                    paddingLeft: 125,
                                  },
                                  bordered: !1,
                                  bodyStyle: { padding: 0, paddingBottom: 124 },
                                  children: [
                                    Object(T.jsxs)("div", {
                                      style: { padding: 20, marginLeft: 70 },
                                      children: [
                                        Object(T.jsxs)(it.a, {
                                          gutter: 8,
                                          children: [
                                            Object(T.jsx)(ot.a, {
                                              style: {
                                                fontSize: 16,
                                                fontWeight: "bold",
                                              },
                                              span: 12,
                                              children: "SUB",
                                            }),
                                            Object(T.jsx)(ot.a, {
                                              style: {
                                                fontSize: 24,
                                                fontWeight: "bold",
                                              },
                                              span: 12,
                                              children: "21000",
                                            }),
                                          ],
                                        }),
                                        " ",
                                        Object(T.jsxs)(it.a, {
                                          gutter: 8,
                                          children: [
                                            Object(T.jsx)(ot.a, {
                                              style: {
                                                fontSize: 16,
                                                fontWeight: "bold",
                                              },
                                              span: 12,
                                              children: "K\u1ebe HO\u1ea0CH",
                                            }),
                                            Object(T.jsx)(ot.a, {
                                              style: {
                                                fontSize: 24,
                                                fontWeight: "bold",
                                              },
                                              span: 12,
                                              children: "21000",
                                            }),
                                          ],
                                        }),
                                        Object(T.jsxs)(it.a, {
                                          gutter: 8,
                                          children: [
                                            Object(T.jsx)(ot.a, {
                                              style: {
                                                fontSize: 16,
                                                fontWeight: "bold",
                                              },
                                              span: 12,
                                              children: "% K\u1ebe HO\u1ea0CH",
                                            }),
                                            Object(T.jsx)(ot.a, {
                                              style: {
                                                fontSize: 24,
                                                fontWeight: "bold",
                                              },
                                              span: 12,
                                              children: "100 %",
                                            }),
                                          ],
                                        }),
                                      ],
                                    }),
                                    Object(T.jsx)("div", {
                                      style: {
                                        height: 1,
                                        backgroundColor: "#ffffff",
                                        marginTop: 10,
                                        marginBottom: 10,
                                      },
                                    }),
                                  ],
                                }),
                              }),
                            ],
                          }),
                          Object(T.jsxs)(it.a, {
                            gutter: 16,
                            style: {
                              marginTop: 40,
                              justifyContent: "space-around",
                            },
                            children: [
                              Object(T.jsx)(ot.a, {
                                span: 6,
                                children: Object(T.jsxs)(Jt.a, {
                                  style: {
                                    backgroundColor: "#433d7b",
                                    color: "white",
                                  },
                                  title: "P/L VIDEO",
                                  headStyle: {
                                    color: "white",
                                    fontSize: 28,
                                    paddingLeft: 145,
                                  },
                                  bordered: !1,
                                  bodyStyle: { padding: 0, paddingBottom: 28 },
                                  children: [
                                    Object(T.jsxs)("div", {
                                      style: {
                                        padding: 20,
                                        paddingBottom: 58,
                                        marginLeft: 80,
                                      },
                                      children: [
                                        Object(T.jsxs)(it.a, {
                                          gutter: 8,
                                          children: [
                                            Object(T.jsx)(ot.a, {
                                              style: {
                                                fontSize: 16,
                                                fontWeight: "bold",
                                              },
                                              span: 12,
                                              children: "DT/VIDEO",
                                            }),
                                            Object(T.jsx)(ot.a, {
                                              style: {
                                                fontSize: 24,
                                                fontWeight: "bold",
                                              },
                                              span: 12,
                                              children: "2 TR",
                                            }),
                                          ],
                                        }),
                                        " ",
                                        Object(T.jsxs)(it.a, {
                                          gutter: 8,
                                          children: [
                                            Object(T.jsx)(ot.a, {
                                              style: {
                                                fontSize: 16,
                                                fontWeight: "bold",
                                              },
                                              span: 12,
                                              children: "CP/VIDEO",
                                            }),
                                            Object(T.jsx)(ot.a, {
                                              style: {
                                                fontSize: 24,
                                                fontWeight: "bold",
                                              },
                                              span: 12,
                                              children: "1.5 TR",
                                            }),
                                          ],
                                        }),
                                      ],
                                    }),
                                    Object(T.jsx)("div", {
                                      style: {
                                        height: 1,
                                        backgroundColor: "#ffffff",
                                        marginTop: 10,
                                        marginBottom: 10,
                                      },
                                    }),
                                    Object(T.jsxs)("div", {
                                      style: { padding: 20, marginLeft: 80 },
                                      children: [
                                        Object(T.jsxs)(it.a, {
                                          gutter: 8,
                                          children: [
                                            Object(T.jsx)(ot.a, {
                                              style: {
                                                fontSize: 14,
                                                fontWeight: "bold",
                                              },
                                              span: 12,
                                              children:
                                                "L\u1ee3i nhu\u1eadn/Video",
                                            }),
                                            Object(T.jsx)(ot.a, {
                                              style: {
                                                fontSize: 18,
                                                fontWeight: "bold",
                                              },
                                              span: 12,
                                              children: "0.5 tr",
                                            }),
                                          ],
                                        }),
                                        Object(T.jsxs)(it.a, {
                                          gutter: 8,
                                          children: [
                                            Object(T.jsx)(ot.a, {
                                              style: {
                                                fontSize: 14,
                                                fontWeight: "bold",
                                              },
                                              span: 12,
                                              children:
                                                "%L\u1ee3i nhu\u1eadn bi\xean/Video",
                                            }),
                                            Object(T.jsx)(ot.a, {
                                              style: {
                                                fontSize: 18,
                                                fontWeight: "bold",
                                              },
                                              span: 12,
                                              children: "25%",
                                            }),
                                          ],
                                        }),
                                      ],
                                    }),
                                  ],
                                }),
                              }),
                              Object(T.jsx)(ot.a, {
                                span: 6,
                                children: Object(T.jsxs)(Jt.a, {
                                  style: {
                                    backgroundColor: "#ff0164",
                                    color: "white",
                                  },
                                  title: "P/L V\u1eacN H\xc0NH",
                                  headStyle: {
                                    color: "white",
                                    fontSize: 28,
                                    paddingLeft: 115,
                                  },
                                  bordered: !1,
                                  bodyStyle: { padding: 0, paddingBottom: 28 },
                                  children: [
                                    Object(T.jsxs)("div", {
                                      style: { padding: 20, marginLeft: 70 },
                                      children: [
                                        Object(T.jsxs)(it.a, {
                                          gutter: 8,
                                          children: [
                                            Object(T.jsx)(ot.a, {
                                              style: {
                                                fontSize: 16,
                                                fontWeight: "bold",
                                              },
                                              span: 12,
                                              children: "DOANH THU",
                                            }),
                                            Object(T.jsx)(ot.a, {
                                              style: {
                                                fontSize: 24,
                                                fontWeight: "bold",
                                              },
                                              span: 12,
                                              children: "150 TR",
                                            }),
                                          ],
                                        }),
                                        " ",
                                        Object(T.jsxs)(it.a, {
                                          gutter: 8,
                                          children: [
                                            Object(T.jsx)(ot.a, {
                                              style: {
                                                fontSize: 16,
                                                fontWeight: "bold",
                                              },
                                              span: 12,
                                              children: "CHI PH\xcd SX",
                                            }),
                                            Object(T.jsx)(ot.a, {
                                              style: {
                                                fontSize: 24,
                                                fontWeight: "bold",
                                              },
                                              span: 12,
                                              children: "30 TR",
                                            }),
                                          ],
                                        }),
                                        Object(T.jsxs)(it.a, {
                                          gutter: 8,
                                          children: [
                                            Object(T.jsx)(ot.a, {
                                              style: {
                                                fontSize: 16,
                                                fontWeight: "bold",
                                              },
                                              span: 12,
                                              children: "CHI PH\xcd QL",
                                            }),
                                            Object(T.jsx)(ot.a, {
                                              style: {
                                                fontSize: 24,
                                                fontWeight: "bold",
                                              },
                                              span: 12,
                                              children: "100 TR",
                                            }),
                                          ],
                                        }),
                                      ],
                                    }),
                                    Object(T.jsx)("div", {
                                      style: {
                                        height: 1,
                                        backgroundColor: "#ffffff",
                                        marginTop: 10,
                                        marginBottom: 10,
                                      },
                                    }),
                                    Object(T.jsxs)("div", {
                                      style: { padding: 20, marginLeft: 70 },
                                      children: [
                                        Object(T.jsxs)(it.a, {
                                          gutter: 8,
                                          children: [
                                            Object(T.jsx)(ot.a, {
                                              style: {
                                                fontSize: 14,
                                                fontWeight: "bold",
                                              },
                                              span: 12,
                                              children: "L\u1ee3i nhu\u1eadn",
                                            }),
                                            Object(T.jsx)(ot.a, {
                                              style: {
                                                fontSize: 18,
                                                fontWeight: "bold",
                                              },
                                              span: 12,
                                              children: "20 tr",
                                            }),
                                          ],
                                        }),
                                        Object(T.jsxs)(it.a, {
                                          gutter: 8,
                                          children: [
                                            Object(T.jsx)(ot.a, {
                                              style: {
                                                fontSize: 14,
                                                fontWeight: "bold",
                                              },
                                              span: 12,
                                              children:
                                                "%L\u1ee3i nhu\u1eadn bi\xean",
                                            }),
                                            Object(T.jsx)(ot.a, {
                                              style: {
                                                fontSize: 18,
                                                fontWeight: "bold",
                                              },
                                              span: 12,
                                              children: "30%",
                                            }),
                                          ],
                                        }),
                                      ],
                                    }),
                                  ],
                                }),
                              }),
                            ],
                          }),
                        ],
                      }),
                    ],
                  });
                },
              },
            ]),
            n
          );
        })(a.Component),
        $t = "AIzaSyD3uGEgJa2Y-PqhcZ_cessU2xVZglG-sWs",
        en = "UUKe4Zl3MksF-dj9tHKZJaDw",
        tn =
          (g.a.TabPane,
          [
            {
              value: "report_nang_suat",
              label: "Report n\u0103ng su\u1ea5t nh\xe2n vi\xean",
              icon: Object(T.jsx)(Mt.a, {}),
            },
            {
              value: "report_youtube",
              label: "Report ch\u1ec9 s\u1ed1 Youtube",
              icon: Object(T.jsx)(Ht.a, {}),
            },
          ]),
        nn = (function (e) {
          Object(_.a)(n, e);
          var t = Object(f.a)(n);
          function n(e) {
            var a;
            return (
              Object(u.a)(this, n),
              ((a = t.call(this, e))._renderTab = function (e) {
                switch (e) {
                  case "report_nang_suat":
                    return Object(T.jsx)(Gt, {});
                  case "report_youtube":
                    return Object(T.jsx)(ReportYoutube, {});
                  default:
                    return null;
                }
              }),
              (a.onChangeMonth = function (e) {
                a.setState({ month: e });
              }),
              (a.getAllVideo = Object(s.a)(
                l.a.mark(function e() {
                  var t, n, i;
                  return l.a.wrap(function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            (t = []),
                            (n = v.a.create({
                              baseURL:
                                "https://www.googleapis.com/youtube/v3/playlistItems",
                              params: {
                                part: "snippet",
                                key: $t,
                                maxResults: 50,
                                playlistId: en,
                              },
                            })),
                            (e.next = 4),
                            n.get("/")
                          );
                        case 4:
                          (i = e.sent),
                            (t = [].concat(
                              Object(d.a)(t),
                              Object(d.a)(Object(k.get)(i, "data.items"))
                            ));
                        case 6:
                          if (50 !== Object(k.get)(i, "data.items.length")) {
                            e.next = 14;
                            break;
                          }
                          return (
                            (n = v.a.create({
                              baseURL:
                                "https://www.googleapis.com/youtube/v3/playlistItems",
                              params: {
                                part: "snippet",
                                key: $t,
                                maxResults: 50,
                                pageToken: Object(k.get)(
                                  i,
                                  "data.nextPageToken"
                                ),
                                playlistId: en,
                              },
                            })),
                            (e.next = 10),
                            n.get("/")
                          );
                        case 10:
                          (i = e.sent),
                            (t = [].concat(
                              Object(d.a)(t),
                              Object(d.a)(Object(k.get)(i, "data.items"))
                            )),
                            (e.next = 6);
                          break;
                        case 14:
                          (t = Object(k.map)(t, function (e, t) {
                            return Object(k.get)(
                              e,
                              "snippet.resourceId.videoId"
                            );
                          })),
                            console.log("testResponse", i),
                            console.log("result", t),
                            a.setState({ videoIds: t });
                        case 18:
                        case "end":
                          return e.stop();
                      }
                  }, e);
                })
              )),
              (a.getDataChannel = Object(s.a)(
                l.a.mark(function e() {
                  var t, n, i;
                  return l.a.wrap(function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (e.next = 2), localStorage.getItem("token");
                        case 2:
                          (t = e.sent),
                            (n = JSON.parse(t))
                              ? ((i = { token: n, videoIds: [] }),
                                v.a
                                  .post("".concat(K, "/yapi"), i)
                                  .then(function (e) {
                                    if (e.data.data) {
                                      var t = e.data.data[0];
                                      a.setState({
                                        estimatedRevenue: t[0],
                                        views: t[1],
                                        comments: t[2],
                                        likes: t[3],
                                        dislikes: t[4],
                                        estimatedMinutesWatched: t[5],
                                        averageViewDuration: t[6],
                                        annotationClickThroughRate: t[7],
                                        subscribersGained: t[8],
                                        subscribersLost: t[9],
                                        redViews: t[10],
                                        shares: t[11],
                                        averageViewPercentage: t[12],
                                        yapiData: t,
                                      });
                                    }
                                  }))
                              : O.a.info({
                                  message:
                                    "Vui l\xf2ng x\xe1c th\u1ef1c tr\u01b0\u1edbc khi l\u1ea5y data",
                                  style: { backgroundColor: "#f5fff8" },
                                });
                        case 5:
                        case "end":
                          return e.stop();
                      }
                  }, e);
                })
              )),
              (a.getDataVideos = Object(s.a)(
                l.a.mark(function e() {
                  var t, n, i;
                  return l.a.wrap(function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (e.next = 2), localStorage.getItem("token");
                        case 2:
                          (t = e.sent),
                            (n = JSON.parse(t))
                              ? (a.setState({ isLoading: !0 }),
                                (i = { token: n, videoIds: a.state.videoIds }),
                                v.a
                                  .post("".concat(K, "/yapi"), i)
                                  .then(function (e) {
                                    if (e.data.data) {
                                      var t = e.data.data;
                                      console.log("yapiData", t),
                                        (t = Object(k.map)(t, function (e, t) {
                                          var n = e[0];
                                          return {
                                            stt: t + 1,
                                            videoId: a.state.videoIds[t],
                                            estimatedRevenue: n[0],
                                            views: n[1],
                                            comments: n[2],
                                            likes: n[3],
                                            dislikes: n[4],
                                            estimatedMinutesWatched: n[5],
                                            averageViewDuration: n[6],
                                            annotationClickThroughRate: n[7],
                                            subscribersGained: n[8],
                                            subscribersLost: n[9],
                                            redViews: n[10],
                                            shares: n[11],
                                            averageViewPercentage: n[12],
                                          };
                                        })),
                                        a.setState({
                                          videosData: t,
                                          isLoading: !1,
                                        });
                                    }
                                  }))
                              : O.a.info({
                                  message:
                                    "Vui l\xf2ng x\xe1c th\u1ef1c tr\u01b0\u1edbc khi l\u1ea5y data",
                                  style: { backgroundColor: "#f5fff8" },
                                });
                        case 5:
                        case "end":
                          return e.stop();
                      }
                  }, e);
                })
              )),
              (a.gup = function (e, t) {
                t || (t = location.href),
                  (e = e.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]"));
                var n = new RegExp("[\\?&]" + e + "=([^&#]*)").exec(t);
                return null == n ? null : n[1];
              }),
              (a.state = {
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
                isLoading: !1,
                valueOptions: Object(k.get)(tn[0], "value"),
                month: null,
              }),
              a
            );
          }
          return (
            Object(h.a)(n, [
              {
                key: "componentDidMount",
                value: (function () {
                  var e = Object(s.a)(
                    l.a.mark(function e() {
                      var t,
                        n,
                        a,
                        i,
                        o = this;
                      return l.a.wrap(
                        function (e) {
                          for (;;)
                            switch ((e.prev = e.next)) {
                              case 0:
                                return (
                                  (e.next = 2),
                                  localStorage.getItem("listToken")
                                );
                              case 2:
                                (t = e.sent),
                                  (n = t ? JSON.parse(t) : []),
                                  console.log("listToken in getData", n),
                                  this.getAllVideo(),
                                  (a = window.location.href),
                                  (i = this.gup("code", a)),
                                  console.log("url", i),
                                  this.setState({ url: i }),
                                  i &&
                                    v.a
                                      .get(
                                        ""
                                          .concat(K, "/getToken?code=")
                                          .concat(i)
                                      )
                                      .then(function (e) {
                                        if (e.data.data) {
                                          var t = e.data.data;
                                          console.log("token", t);
                                          var a = { token: t, videoIds: [] };
                                          v.a
                                            .post(
                                              "".concat(K, "/getChannelId"),
                                              a
                                            )
                                            .then(function (e) {
                                              console.log(
                                                "channelId",
                                                e.data.data
                                              );
                                              var a = {
                                                token: t,
                                                channelId: e.data.data,
                                              };
                                              (n = Object(k.filter)(
                                                n,
                                                function (t, n) {
                                                  return (
                                                    t.channelId !== e.data.data
                                                  );
                                                }
                                              )),
                                                console.log("channelInfo", a),
                                                n.push(a),
                                                console.log("listToken", n),
                                                localStorage.setItem(
                                                  "token",
                                                  JSON.stringify(t)
                                                ),
                                                localStorage.setItem(
                                                  "listToken",
                                                  JSON.stringify(n)
                                                ),
                                                o.setState({ token: t });
                                            });
                                        }
                                      }),
                                  v.a
                                    .get("".concat(K, "/authen"))
                                    .then(function (e) {
                                      o.setState({ linkAuthen: e.data.data });
                                    });
                              case 12:
                              case "end":
                                return e.stop();
                            }
                        },
                        e,
                        this
                      );
                    })
                  );
                  return function () {
                    return e.apply(this, arguments);
                  };
                })(),
              },
              {
                key: "render",
                value: function () {
                  var e = this.state,
                    t = (e.url, e.linkAuthen);
                  e.estimatedRevenue,
                    e.views,
                    e.comments,
                    e.likes,
                    e.dislikes,
                    e.estimatedMinutesWatched,
                    e.averageViewDuration,
                    e.yapiData,
                    e.token,
                    e.annotationClickThroughRate,
                    e.subscribersGained,
                    e.subscribersLost,
                    e.redViews,
                    e.shares,
                    e.averageViewPercentage,
                    e.videosData,
                    e.isLoading,
                    e.valueOptions,
                    e.month;
                  return Object(T.jsx)("div", {
                    children: Object(T.jsx)("div", {
                      style: {
                        justifyContent: "space-around",
                        display: "flex",
                      },
                      children: Object(T.jsx)(m.a, {
                        href: t,
                        style: {
                          color: "white",
                          backgroundColor: "#238c31",
                          fontWeight: "bold",
                          borderRadius: 5,
                          borderColor: "#238c31",
                          marginBottom: 20,
                          marginLeft: 20,
                        },
                        children: "Authentication",
                      }),
                    }),
                  });
                },
              },
            ]),
            n
          );
        })(a.Component),
        an = "AIzaSyD3uGEgJa2Y-PqhcZ_cessU2xVZglG-sWs",
        on = g.a.TabPane,
        rn = [
          {
            value: "report_nang_suat",
            label: "Report n\u0103ng su\u1ea5t nh\xe2n vi\xean",
            icon: Object(T.jsx)(Mt.a, {}),
          },
          {
            value: "report_youtube",
            label: "B\xe1o c\xe1o t\u1ed5ng quan",
            icon: Object(T.jsx)(Ht.a, {}),
          },
          {
            value: "report_youtube_time",
            label: "B\xe1o c\xe1o so s\xe1nh theo th\u1eddi gian",
            icon: Object(T.jsx)(Ut.a, {}),
          },
        ],
        cn = (function (e) {
          Object(_.a)(n, e);
          var t = Object(f.a)(n);
          function n(e) {
            var a;
            return (
              Object(u.a)(this, n),
              ((a = t.call(this, e))._renderTab = function (e) {
                switch (e) {
                  case "report_nang_suat":
                    return Object(T.jsx)(Gt, {});
                  case "report_youtube":
                    return Object(T.jsx)(Qt, {});
                  case "report_youtube_time":
                    return Object(T.jsx)(nn, {});
                  default:
                    return null;
                }
              }),
              (a.getAllVideo = Object(s.a)(
                l.a.mark(function e() {
                  var t, n, i;
                  return l.a.wrap(function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            (t = []),
                            (n = v.a.create({
                              baseURL:
                                "https://www.googleapis.com/youtube/v3/playlistItems",
                              params: {
                                part: "snippet",
                                key: an,
                                maxResults: 50,
                                playlistId: "UUKpD-XWIDMQlqyxF4Low6bw",
                              },
                            })),
                            (e.next = 4),
                            n.get("/")
                          );
                        case 4:
                          (i = e.sent),
                            (t = [].concat(
                              Object(d.a)(t),
                              Object(d.a)(Object(k.get)(i, "data.items"))
                            ));
                        case 6:
                          if (50 !== Object(k.get)(i, "data.items.length")) {
                            e.next = 14;
                            break;
                          }
                          return (
                            (n = v.a.create({
                              baseURL:
                                "https://www.googleapis.com/youtube/v3/playlistItems",
                              params: {
                                part: "snippet",
                                key: an,
                                maxResults: 50,
                                pageToken: Object(k.get)(
                                  i,
                                  "data.nextPageToken"
                                ),
                                playlistId: "UUKpD-XWIDMQlqyxF4Low6bw",
                              },
                            })),
                            (e.next = 10),
                            n.get("/")
                          );
                        case 10:
                          (i = e.sent),
                            (t = [].concat(
                              Object(d.a)(t),
                              Object(d.a)(Object(k.get)(i, "data.items"))
                            )),
                            (e.next = 6);
                          break;
                        case 14:
                          (t = Object(k.map)(t, function (e, t) {
                            return Object(k.get)(
                              e,
                              "snippet.resourceId.videoId"
                            );
                          })),
                            console.log("testResponse", i),
                            console.log("result", t),
                            a.setState({ videoIds: t });
                        case 18:
                        case "end":
                          return e.stop();
                      }
                  }, e);
                })
              )),
              (a.getDataChannel = Object(s.a)(
                l.a.mark(function e() {
                  var t, n, i;
                  return l.a.wrap(function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (e.next = 2), localStorage.getItem("token");
                        case 2:
                          (t = e.sent),
                            (n = JSON.parse(t)),
                            console.log("token in getData", n),
                            n
                              ? ((i = { token: n, videoIds: [] }),
                                v.a
                                  .post("".concat(K, "/yapi"), i)
                                  .then(function (e) {
                                    if (e.data.data) {
                                      var t = e.data.data[0];
                                      a.setState({
                                        estimatedRevenue: t[0],
                                        views: t[1],
                                        comments: t[2],
                                        likes: t[3],
                                        dislikes: t[4],
                                        estimatedMinutesWatched: t[5],
                                        averageViewDuration: t[6],
                                        annotationClickThroughRate: t[7],
                                        subscribersGained: t[8],
                                        subscribersLost: t[9],
                                        redViews: t[10],
                                        shares: t[11],
                                        averageViewPercentage: t[12],
                                        yapiData: t,
                                      });
                                    }
                                  }))
                              : O.a.info({
                                  message:
                                    "Vui l\xf2ng x\xe1c th\u1ef1c tr\u01b0\u1edbc khi l\u1ea5y data",
                                  style: { backgroundColor: "#f5fff8" },
                                });
                        case 6:
                        case "end":
                          return e.stop();
                      }
                  }, e);
                })
              )),
              (a.getDataVideos = Object(s.a)(
                l.a.mark(function e() {
                  var t, n, i;
                  return l.a.wrap(function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            a.setState({ isLoading: !0 }),
                            (e.next = 3),
                            localStorage.getItem("token")
                          );
                        case 3:
                          (t = e.sent),
                            (n = JSON.parse(t)),
                            console.log("token in getData", n),
                            n
                              ? ((i = { token: n, videoIds: a.state.videoIds }),
                                v.a
                                  .post("".concat(K, "/yapi"), i)
                                  .then(function (e) {
                                    if (e.data.data) {
                                      var t = e.data.data;
                                      console.log("yapiData", t),
                                        (t = Object(k.map)(t, function (e, t) {
                                          var n = e[0];
                                          return {
                                            stt: t + 1,
                                            videoId: a.state.videoIds[t],
                                            estimatedRevenue: n[0],
                                            views: n[1],
                                            comments: n[2],
                                            likes: n[3],
                                            dislikes: n[4],
                                            estimatedMinutesWatched: n[5],
                                            averageViewDuration: n[6],
                                            annotationClickThroughRate: n[7],
                                            subscribersGained: n[8],
                                            subscribersLost: n[9],
                                            redViews: n[10],
                                            shares: n[11],
                                            averageViewPercentage: n[12],
                                          };
                                        })),
                                        a.setState({
                                          videosData: t,
                                          isLoading: !1,
                                        });
                                    }
                                  }))
                              : O.a.info({
                                  message:
                                    "Vui l\xf2ng x\xe1c th\u1ef1c tr\u01b0\u1edbc khi l\u1ea5y data",
                                  style: { backgroundColor: "#f5fff8" },
                                });
                        case 7:
                        case "end":
                          return e.stop();
                      }
                  }, e);
                })
              )),
              (a.gup = function (e, t) {
                t || (t = location.href),
                  (e = e.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]"));
                var n = new RegExp("[\\?&]" + e + "=([^&#]*)").exec(t);
                return null == n ? null : n[1];
              }),
              (a.state = {
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
                isLoading: !1,
                valueOptions: Object(k.get)(rn[0], "value"),
              }),
              a
            );
          }
          return (
            Object(h.a)(n, [
              {
                key: "componentDidMount",
                value: function () {
                  this.getAllVideo();
                  var e = window.location.href,
                    t = this.gup("code", e);
                  console.log("url", t), this.setState({ url: t });
                },
              },
              {
                key: "render",
                value: function () {
                  var e = this,
                    t = this.state,
                    n =
                      (t.url,
                      t.linkAuthen,
                      t.estimatedRevenue,
                      t.views,
                      t.comments,
                      t.likes,
                      t.dislikes,
                      t.estimatedMinutesWatched,
                      t.averageViewDuration,
                      t.yapiData),
                    a = t.token,
                    i =
                      (t.annotationClickThroughRate,
                      t.subscribersGained,
                      t.subscribersLost,
                      t.redViews,
                      t.shares,
                      t.averageViewPercentage,
                      t.videosData),
                    o = (t.isLoading, t.valueOptions);
                  console.log("token", a),
                    console.log("yapiData", n),
                    console.log("videosData", i);
                  return Object(T.jsx)("div", {
                    children: Object(T.jsx)(g.a, {
                      onChange: this.onChangeSelectOption,
                      activeKey: Object(k.get)(o),
                      style: {
                        justifyContent: "center",
                        display: "flex",
                        alignSelf: "center",
                        color: "#238c31",
                      },
                      size: "large",
                      type: "card",
                      children: Object(k.map)(rn, function (t) {
                        return Object(T.jsx)(
                          on,
                          {
                            tab: Object(T.jsxs)("span", {
                              children: [t.icon, t.label],
                            }),
                            children: e._renderTab(t.value),
                          },
                          t.value
                        );
                      }),
                    }),
                  });
                },
              },
            ]),
            n
          );
        })(a.Component),
        ln = n(447),
        sn = n(448),
        dn = n(153),
        un = function (e) {
          var t = e.onResize,
            n = e.width,
            a = Object(j.a)(e, ["onResize", "width"]);
          return n
            ? Object(T.jsx)(x.Resizable, {
                width: n,
                height: 0,
                handle: Object(T.jsx)("span", {
                  className: "react-resizable-handle",
                  onClick: function (e) {
                    e.stopPropagation();
                  },
                }),
                onResize: t,
                draggableOpts: { enableUserSelectHack: !1 },
                children: Object(T.jsx)("th", Object(b.a)({}, a)),
              })
            : Object(T.jsx)("th", Object(b.a)({}, a));
        },
        hn = (function (e) {
          Object(_.a)(n, e);
          var t = Object(f.a)(n);
          function n(e) {
            var a;
            return (
              Object(u.a)(this, n),
              ((a = t.call(this, e)).components = { header: { cell: un } }),
              (a._onRefreshData = Object(s.a)(
                l.a.mark(function e() {
                  var t, n, i, o, r, c;
                  return l.a.wrap(function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            a.setState({ isLoading: !0 }),
                            (i = +C()().format("YYYY")),
                            (o = C()().format("YYYY")),
                            (r = []),
                            +C()().format("DD") < 10
                              ? ((t = +C()().format("MM") - 1),
                                (n = C()().subtract(1, "month").format("MM")))
                              : ((t = +C()().format("MM")),
                                (n = C()().format("MM"))),
                            (c = { month: t, year: C()().format("YYYY") }),
                            (e.next = 7),
                            v.a
                              .post("".concat(K, "/salary_temp"), c)
                              .then(function (e) {
                                r = e.data.data;
                              })
                          );
                        case 7:
                          v.a
                            .get("".concat(K, "/tenticker"))
                            .then(function (e) {
                              var c = Object(k.map)(
                                  a.props.data,
                                  function (a, r) {
                                    for (
                                      var c = 0,
                                        l = 0,
                                        s = 0,
                                        d = 0,
                                        u = 0,
                                        h = 0,
                                        _ = 0,
                                        f = 0,
                                        b = 0,
                                        j = 0,
                                        g = 0,
                                        p = 0,
                                        O = 0,
                                        m = 0,
                                        y = 0,
                                        v = 0;
                                      v < e.data.data.length;
                                      v++
                                    )
                                      Object(k.includes)(
                                        e.data.data[v].writer_name,
                                        a[me]
                                      ) &&
                                        +C()(e.data.data[v].public_date).format(
                                          "MM"
                                        ) === t &&
                                        +C()(e.data.data[v].public_date).format(
                                          "YYYY"
                                        ) === i &&
                                        (10 === e.data.data[v].salary_index
                                          ? c++
                                          : 5 === e.data.data[v].salary_index
                                          ? l++
                                          : 15 === e.data.data[v].salary_index
                                          ? s++
                                          : 20 === e.data.data[v].salary_index
                                          ? d++
                                          : 25 ===
                                              e.data.data[v].salary_index &&
                                            u++),
                                        Object(k.includes)(
                                          e.data.data[v].composer_name,
                                          a[me]
                                        ) &&
                                          +C()(
                                            e.data.data[v].public_date
                                          ).format("MM") === t &&
                                          +C()(
                                            e.data.data[v].public_date
                                          ).format("YYYY") === i &&
                                          (10 === e.data.data[v].salary_index
                                            ? _++
                                            : 5 === e.data.data[v].salary_index
                                            ? h++
                                            : 15 === e.data.data[v].salary_index
                                            ? f++
                                            : 20 === e.data.data[v].salary_index
                                            ? b++
                                            : 25 ===
                                                e.data.data[v].salary_index &&
                                              j++),
                                        Object(k.includes)(
                                          e.data.data[v].editor_name,
                                          a[me]
                                        ) &&
                                          +C()(
                                            e.data.data[v].public_date
                                          ).format("MM") === t &&
                                          +C()(
                                            e.data.data[v].public_date
                                          ).format("YYYY") === i &&
                                          (10 === e.data.data[v].salary_index
                                            ? g++
                                            : 5 === e.data.data[v].salary_index
                                            ? p++
                                            : 15 === e.data.data[v].salary_index
                                            ? O++
                                            : 20 === e.data.data[v].salary_index
                                            ? m++
                                            : 25 ===
                                                e.data.data[v].salary_index &&
                                              y++);
                                    var w =
                                      (a[Ce] ? +a[Ce].replaceAll(".", "") : 0) +
                                      c *
                                        (a[Se]
                                          ? +a[Se].replaceAll(".", "")
                                          : 0) +
                                      l *
                                        (a[xe]
                                          ? +a[xe].replaceAll(".", "")
                                          : 0) +
                                      s *
                                        (a[Re]
                                          ? +a[Re].replaceAll(".", "")
                                          : 0) +
                                      d *
                                        (a[Ye]
                                          ? +a[Ye].replaceAll(".", "")
                                          : 0) +
                                      u *
                                        (a[De]
                                          ? +a[De].replaceAll(".", "")
                                          : 0) +
                                      h *
                                        (a[ze]
                                          ? +a[ze].replaceAll(".", "")
                                          : 0) +
                                      _ *
                                        (a[Ee]
                                          ? +a[Ee].replaceAll(".", "")
                                          : 0) +
                                      f *
                                        (a[Te]
                                          ? +a[Te].replaceAll(".", "")
                                          : 0) +
                                      b *
                                        (a[Ie]
                                          ? +a[Ie].replaceAll(".", "")
                                          : 0) +
                                      j *
                                        (a[Me]
                                          ? +a[Me].replaceAll(".", "")
                                          : 0) +
                                      g *
                                        (a[Ue]
                                          ? +a[Ue].replaceAll(".", "")
                                          : 0) +
                                      O *
                                        (a[Ke]
                                          ? +a[Ke].replaceAll(".", "")
                                          : 0) +
                                      m *
                                        (a[Ae]
                                          ? +a[Ae].replaceAll(".", "")
                                          : 0) +
                                      y *
                                        (a[Ve]
                                          ? +a[Ve].replaceAll(".", "")
                                          : 0) +
                                      p *
                                        (a[He]
                                          ? +a[He].replaceAll(".", "")
                                          : 0);
                                    return {
                                      stt: r + 1,
                                      ma_nv: a[0],
                                      ho_ten: a[ce],
                                      trang_thai: "On" === a[le] ? 1 : 0,
                                      email: a[ve],
                                      stk: a[ke],
                                      note_ngan_hang: a[we],
                                      luong_cung: a[Ce],
                                      don_gia_content_2k: a[Se],
                                      don_gia_content_1k: a[xe],
                                      don_gia_audio: a[ze],
                                      don_gia_video_2k: a[Ue],
                                      don_gia_video_1k: a[He],
                                      thuong: "",
                                      phat: "",
                                      san_luong_content_2k: c,
                                      san_luong_content_1k: l,
                                      san_luong_audio: h,
                                      san_luong_video_2k: g,
                                      san_luong_video_1k: p,
                                      note_khac: "",
                                      tong_luong: w,
                                      thang: n,
                                      nam: o,
                                      don_gia_content_3k: a[Re],
                                      don_gia_content_4k: a[Ye],
                                      don_gia_content_5k: a[De],
                                      don_gia_video_3k: a[Ke],
                                      don_gia_video_4k: a[Ae],
                                      don_gia_video_5k: a[Ve],
                                      don_gia_audio_2k: a[Ee],
                                      don_gia_audio_3k: a[Te],
                                      don_gia_audio_4k: a[Ie],
                                      don_gia_audio_5k: a[Me],
                                      san_luong_content_3k: s,
                                      san_luong_content_4k: d,
                                      san_luong_content_5k: u,
                                      san_luong_audio_2k: _,
                                      san_luong_audio_3k: f,
                                      san_luong_audio_4k: b,
                                      san_luong_audio_5k: j,
                                      san_luong_video_3k: O,
                                      san_luong_video_4k: m,
                                      san_luong_video_5k: y,
                                    };
                                  }
                                ).filter(function (e, t) {
                                  return 1 === e.trang_thai && 0 !== t;
                                }),
                                l = Object(k.map)(c, function (e, t) {
                                  return Object(b.a)(
                                    Object(b.a)({}, e),
                                    {},
                                    {
                                      stt: t + 1,
                                      thuong: Object(k.get)(r[t], "thuong"),
                                      phat: Object(k.get)(r[t], "phat"),
                                      note_khac: Object(k.get)(
                                        r[t],
                                        "note_khac"
                                      ),
                                      tong_luong:
                                        e.tong_luong +
                                        (Object(k.get)(r[t], "thuong")
                                          ? +Object(k.get)(r[t], "thuong")
                                          : 0) -
                                        (Object(k.get)(r[t], "phat")
                                          ? +Object(k.get)(r[t], "phat")
                                          : 0),
                                    }
                                  );
                                });
                              a.setState({
                                salary: l,
                                salaryChangeUpdate: l,
                                isLoading: !1,
                                monthNow: t,
                                monthNowString: n,
                              });
                            });
                        case 8:
                        case "end":
                          return e.stop();
                      }
                  }, e);
                })
              )),
              (a._onChangeEditingKey = function (e) {
                var t = Object(k.map)(
                  a.state.salaryChangeUpdate,
                  function (e, t) {
                    return e.stt === a.state.stt
                      ? Object(b.a)({}, a.state.salary[t])
                      : Object(b.a)({}, e);
                  }
                );
                a.setState({ editingKey: e.stt, salaryChangeUpdate: t });
              }),
              (a._isEditing = function (e) {
                return e.stt === a.state.editingKey;
              }),
              (a.onCancelEdit = function (e) {
                var t = Object(k.map)(
                  a.state.salaryChangeUpdate,
                  function (t, n) {
                    return t.id === e.id
                      ? Object(b.a)({}, a.state.salary[n])
                      : Object(b.a)({}, t);
                  }
                );
                a.setState({ editingKey: "", salaryChangeUpdate: t });
              }),
              (a.handleResize = function (e) {
                return function (t, n) {
                  var i = n.size;
                  a.setState(function (t) {
                    var n = t.column,
                      a = Object(d.a)(n);
                    return (
                      (a[e] = Object(b.a)(
                        Object(b.a)({}, a[e]),
                        {},
                        { width: i.width }
                      )),
                      { column: a }
                    );
                  });
                };
              }),
              (a.clearFilters = function () {
                a.setState({ filteredInfo: null });
              }),
              (a.clearSorters = function () {
                a.setState({ sortedInfo: null });
              }),
              (a.clearAll = function () {
                a.setState({ filteredInfo: null, sortedInfo: null });
              }),
              (a.onSubmitUpdate = function () {
                a.setState({ editingKey: "" });
                var e = a.state.salaryChangeUpdate,
                  t = {
                    data: {
                      thang: a.state.monthNow,
                      nam: C()().format("YYYY"),
                    },
                  };
                v.a.delete("".concat(K, "/salary_temp/check"), t).then(
                  (function () {
                    var t = Object(s.a)(
                      l.a.mark(function t(n) {
                        var a, i;
                        return l.a.wrap(function (t) {
                          for (;;)
                            switch ((t.prev = t.next)) {
                              case 0:
                                (a = l.a.mark(function t(n) {
                                  var a;
                                  return l.a.wrap(function (t) {
                                    for (;;)
                                      switch ((t.prev = t.next)) {
                                        case 0:
                                          return (
                                            (a = {
                                              salary: [
                                                null,
                                                e[n].ma_nv,
                                                e[n].ho_ten,
                                                e[n].trang_thai,
                                                e[n].email,
                                                e[n].stk,
                                                e[n].note_ngan_hang,
                                                e[n].luong_cung,
                                                e[n].don_gia_content_2k,
                                                e[n].don_gia_content_1k,
                                                e[n].don_gia_audio,
                                                e[n].don_gia_video_2k,
                                                e[n].don_gia_video_1k,
                                                e[n].thuong,
                                                e[n].phat,
                                                e[n].san_luong_content_2k,
                                                e[n].san_luong_content_1k,
                                                e[n].san_luong_audio,
                                                e[n].san_luong_video_2k,
                                                e[n].san_luong_video_1k,
                                                e[n].note_khac,
                                                Ne(e[n].tong_luong),
                                                e[n].thang,
                                                e[n].nam,
                                                e[n].don_gia_content_3k,
                                                e[n].don_gia_content_4k,
                                                e[n].don_gia_content_5k,
                                                e[n].don_gia_video_3k,
                                                e[n].don_gia_video_4k,
                                                e[n].don_gia_video_5k,
                                                e[n].don_gia_audio_2k,
                                                e[n].don_gia_audio_3k,
                                                e[n].don_gia_audio_4k,
                                                e[n].don_gia_audio_5k,
                                                e[n].san_luong_content_3k,
                                                e[n].san_luong_content_4k,
                                                e[n].san_luong_content_5k,
                                                e[n].san_luong_audio_2k,
                                                e[n].san_luong_audio_3k,
                                                e[n].san_luong_audio_4k,
                                                e[n].san_luong_audio_5k,
                                                e[n].san_luong_video_3k,
                                                e[n].san_luong_video_4k,
                                                e[n].san_luong_video_5k,
                                              ],
                                            }),
                                            (t.next = 3),
                                            v.a
                                              .post(
                                                "".concat(
                                                  K,
                                                  "/salary_temp/add"
                                                ),
                                                a
                                              )
                                              .then(function (t) {
                                                n === e.length - 1 &&
                                                  O.a.success({
                                                    message:
                                                      "C\u1eadp nh\u1eadt phi\u1ebfu l\u01b0\u01a1ng th\xe0nh c\xf4ng",
                                                    style: {
                                                      backgroundColor:
                                                        "#f5fff8",
                                                    },
                                                  });
                                              })
                                          );
                                        case 3:
                                        case "end":
                                          return t.stop();
                                      }
                                  }, t);
                                })),
                                  (i = 0);
                              case 2:
                                if (!(i < e.length)) {
                                  t.next = 7;
                                  break;
                                }
                                return t.delegateYield(a(i), "t0", 4);
                              case 4:
                                i++, (t.next = 2);
                                break;
                              case 7:
                              case "end":
                                return t.stop();
                            }
                        }, t);
                      })
                    );
                    return function (e) {
                      return t.apply(this, arguments);
                    };
                  })()
                );
              }),
              (a.onChangeBonus = function (e, t) {
                var n = Object(k.map)(a.state.salaryChangeUpdate, function (n) {
                  return n.stt === t.stt
                    ? Object(b.a)(
                        Object(b.a)({}, n),
                        {},
                        {
                          thuong: e,
                          tong_luong:
                            (t.luong_cung
                              ? +t.luong_cung.replaceAll(".", "")
                              : 0) +
                            t.san_luong_content_2k *
                              (t.don_gia_content_2k
                                ? +t.don_gia_content_2k.replaceAll(".", "")
                                : 0) +
                            t.san_luong_content_1k *
                              (t.don_gia_content_1k
                                ? +t.don_gia_content_1k.replaceAll(".", "")
                                : 0) +
                            t.san_luong_content_3k *
                              (t.don_gia_content_3k
                                ? +t.don_gia_content_3k.replaceAll(".", "")
                                : 0) +
                            t.san_luong_content_4k *
                              (t.don_gia_content_4k
                                ? +t.don_gia_content_4k.replaceAll(".", "")
                                : 0) +
                            t.san_luong_content_5k *
                              (t.don_gia_content_5k
                                ? +t.don_gia_content_5k.replaceAll(".", "")
                                : 0) +
                            t.san_luong_audio *
                              (t.don_gia_audio
                                ? +t.don_gia_audio.replaceAll(".", "")
                                : 0) +
                            t.san_luong_audio_2k *
                              (t.don_gia_audio_2k
                                ? +t.don_gia_audio_2k.replaceAll(".", "")
                                : 0) +
                            t.san_luong_audio_3k *
                              (t.don_gia_audio_3k
                                ? +t.don_gia_audio_3k.replaceAll(".", "")
                                : 0) +
                            t.san_luong_audio_4k *
                              (t.don_gia_audio_4k
                                ? +t.don_gia_audio_4k.replaceAll(".", "")
                                : 0) +
                            t.san_luong_audio_5k *
                              (t.don_gia_audio_5k
                                ? +t.don_gia_audio_5k.replaceAll(".", "")
                                : 0) +
                            t.san_luong_video_2k *
                              (t.don_gia_video_2k
                                ? +t.don_gia_video_2k.replaceAll(".", "")
                                : 0) +
                            t.san_luong_video_3k *
                              (t.don_gia_video_3k
                                ? +t.don_gia_video_3k.replaceAll(".", "")
                                : 0) +
                            t.san_luong_video_4k *
                              (t.don_gia_video_4k
                                ? +t.don_gia_video_4k.replaceAll(".", "")
                                : 0) +
                            t.san_luong_video_5k *
                              (t.don_gia_video_5k
                                ? +t.don_gia_video_5k.replaceAll(".", "")
                                : 0) +
                            t.san_luong_video_1k *
                              (t.don_gia_video_1k
                                ? +t.don_gia_video_1k.replaceAll(".", "")
                                : 0) +
                            +e -
                            +t.phat,
                        }
                      )
                    : Object(b.a)({}, n);
                });
                a.setState({ salaryChangeUpdate: n });
              }),
              (a.onChangePhat = function (e, t) {
                var n = Object(k.map)(a.state.salaryChangeUpdate, function (n) {
                  return n.stt === t.stt
                    ? Object(b.a)(
                        Object(b.a)({}, n),
                        {},
                        {
                          phat: e,
                          tong_luong:
                            (t.luong_cung
                              ? +t.luong_cung.replaceAll(".", "")
                              : 0) +
                            t.san_luong_content_2k *
                              (t.don_gia_content_2k
                                ? +t.don_gia_content_2k.replaceAll(".", "")
                                : 0) +
                            t.san_luong_content_1k *
                              (t.don_gia_content_1k
                                ? +t.don_gia_content_1k.replaceAll(".", "")
                                : 0) +
                            t.san_luong_content_3k *
                              (t.don_gia_content_3k
                                ? +t.don_gia_content_3k.replaceAll(".", "")
                                : 0) +
                            t.san_luong_content_4k *
                              (t.don_gia_content_4k
                                ? +t.don_gia_content_4k.replaceAll(".", "")
                                : 0) +
                            t.san_luong_content_5k *
                              (t.don_gia_content_5k
                                ? +t.don_gia_content_5k.replaceAll(".", "")
                                : 0) +
                            t.san_luong_audio *
                              (t.don_gia_audio
                                ? +t.don_gia_audio.replaceAll(".", "")
                                : 0) +
                            t.san_luong_audio_2k *
                              (t.don_gia_audio_2k
                                ? +t.don_gia_audio_2k.replaceAll(".", "")
                                : 0) +
                            t.san_luong_audio_3k *
                              (t.don_gia_audio_3k
                                ? +t.don_gia_audio_3k.replaceAll(".", "")
                                : 0) +
                            t.san_luong_audio_4k *
                              (t.don_gia_audio_4k
                                ? +t.don_gia_audio_4k.replaceAll(".", "")
                                : 0) +
                            t.san_luong_audio_5k *
                              (t.don_gia_audio_5k
                                ? +t.don_gia_audio_5k.replaceAll(".", "")
                                : 0) +
                            t.san_luong_video_2k *
                              (t.don_gia_video_2k
                                ? +t.don_gia_video_2k.replaceAll(".", "")
                                : 0) +
                            t.san_luong_video_3k *
                              (t.don_gia_video_3k
                                ? +t.don_gia_video_3k.replaceAll(".", "")
                                : 0) +
                            t.san_luong_video_4k *
                              (t.don_gia_video_4k
                                ? +t.don_gia_video_4k.replaceAll(".", "")
                                : 0) +
                            t.san_luong_video_5k *
                              (t.don_gia_video_5k
                                ? +t.don_gia_video_5k.replaceAll(".", "")
                                : 0) +
                            t.san_luong_video_1k *
                              (t.don_gia_video_1k
                                ? +t.don_gia_video_1k.replaceAll(".", "")
                                : 0) +
                            +t.thuong -
                            +e,
                        }
                      )
                    : Object(b.a)({}, n);
                });
                a.setState({ salaryChangeUpdate: n });
              }),
              (a.onChangeNote = function (e, t) {
                var n = Object(k.map)(a.state.salaryChangeUpdate, function (n) {
                  return n.stt === t.stt
                    ? Object(b.a)(Object(b.a)({}, n), {}, { note_khac: e })
                    : Object(b.a)({}, n);
                });
                a.setState({ salaryChangeUpdate: n });
              }),
              (a.onConfirm = function () {
                ee()({
                  title: "Th\xf4ng b\xe1o",
                  content:
                    "B\u1ea1n c\xf3 ch\u1eafc mu\u1ed1n x\xe1c nh\u1eadn phi\u1ebfu l\u01b0\u01a1ng",
                  okCancel: function () {},
                  onOk: function () {
                    var e = a.state.salaryChangeUpdate,
                      t = {
                        data: {
                          thang: a.state.monthNow,
                          nam: C()().format("YYYY"),
                        },
                      };
                    v.a.delete("".concat(K, "/salary/check"), t).then(
                      (function () {
                        var t = Object(s.a)(
                          l.a.mark(function t(n) {
                            var a, i;
                            return l.a.wrap(function (t) {
                              for (;;)
                                switch ((t.prev = t.next)) {
                                  case 0:
                                    (a = l.a.mark(function t(n) {
                                      var a;
                                      return l.a.wrap(function (t) {
                                        for (;;)
                                          switch ((t.prev = t.next)) {
                                            case 0:
                                              return (
                                                (a = {
                                                  salary: [
                                                    null,
                                                    e[n].ma_nv,
                                                    e[n].ho_ten,
                                                    e[n].trang_thai,
                                                    e[n].email,
                                                    e[n].stk,
                                                    e[n].note_ngan_hang,
                                                    e[n].luong_cung,
                                                    e[n].don_gia_content_2k,
                                                    e[n].don_gia_content_1k,
                                                    e[n].don_gia_audio,
                                                    e[n].don_gia_video_2k,
                                                    e[n].don_gia_video_1k,
                                                    e[n].thuong,
                                                    e[n].phat,
                                                    e[n].san_luong_content_2k,
                                                    e[n].san_luong_content_1k,
                                                    e[n].san_luong_audio,
                                                    e[n].san_luong_video_2k,
                                                    e[n].san_luong_video_1k,
                                                    e[n].note_khac,
                                                    Ne(e[n].tong_luong),
                                                    e[n].thang,
                                                    e[n].nam,
                                                    e[n].don_gia_content_3k,
                                                    e[n].don_gia_content_4k,
                                                    e[n].don_gia_content_5k,
                                                    e[n].don_gia_video_3k,
                                                    e[n].don_gia_video_4k,
                                                    e[n].don_gia_video_5k,
                                                    e[n].don_gia_audio_2k,
                                                    e[n].don_gia_audio_3k,
                                                    e[n].don_gia_audio_4k,
                                                    e[n].don_gia_audio_5k,
                                                    e[n].san_luong_content_3k,
                                                    e[n].san_luong_content_4k,
                                                    e[n].san_luong_content_5k,
                                                    e[n].san_luong_audio_2k,
                                                    e[n].san_luong_audio_3k,
                                                    e[n].san_luong_audio_4k,
                                                    e[n].san_luong_audio_5k,
                                                    e[n].san_luong_video_3k,
                                                    e[n].san_luong_video_4k,
                                                    e[n].san_luong_video_5k,
                                                  ],
                                                }),
                                                (t.next = 3),
                                                v.a
                                                  .post(
                                                    "".concat(K, "/salary/add"),
                                                    a
                                                  )
                                                  .then(function (t) {
                                                    n === e.length - 1 &&
                                                      O.a.success({
                                                        message:
                                                          "X\xe1c nh\u1eadn phi\u1ebfu l\u01b0\u01a1ng th\xe0nh c\xf4ng",
                                                        style: {
                                                          backgroundColor:
                                                            "#f5fff8",
                                                        },
                                                      });
                                                  })
                                              );
                                            case 3:
                                            case "end":
                                              return t.stop();
                                          }
                                      }, t);
                                    })),
                                      (i = 0);
                                  case 2:
                                    if (!(i < e.length)) {
                                      t.next = 7;
                                      break;
                                    }
                                    return t.delegateYield(a(i), "t0", 4);
                                  case 4:
                                    i++, (t.next = 2);
                                    break;
                                  case 7:
                                  case "end":
                                    return t.stop();
                                }
                            }, t);
                          })
                        );
                        return function (e) {
                          return t.apply(this, arguments);
                        };
                      })()
                    );
                  },
                });
              }),
              (a.onExportExcell = function () {
                var e = Object(k.map)(
                    a.state.salaryChangeUpdate,
                    function (e, t) {
                      return {
                        STT: e.STT,
                        "Employee Id": e.ma_nv,
                        "Full Name": e.ho_ten,
                        Email: e.email,
                        "Bank Account Number": e.stk,
                        "Bank Note": e.note_ngan_hang,
                        "Fixed Salary": e.luong_cung,
                        "\u0110\u01a1n gi\xe1 Content 1000 t\u1eeb":
                          e.don_gia_content_1k,
                        "\u0110\u01a1n gi\xe1 Content 2000 t\u1eeb":
                          e.don_gia_content_2k,
                        "\u0110\u01a1n gi\xe1 Content 3000 t\u1eeb":
                          e.don_gia_content_3k,
                        "\u0110\u01a1n gi\xe1 Content 4000 t\u1eeb":
                          e.don_gia_content_4k,
                        "\u0110\u01a1n gi\xe1 Content 5000 t\u1eeb":
                          e.don_gia_content_5k,
                        "\u0110\u01a1n gi\xe1 Audio 1000 t\u1eeb":
                          e.don_gia_audio,
                        "\u0110\u01a1n gi\xe1 Audio 2000 t\u1eeb":
                          e.don_gia_audio_2k,
                        "\u0110\u01a1n gi\xe1 Audio 3000 t\u1eeb":
                          e.don_gia_audio_3k,
                        "\u0110\u01a1n gi\xe1 Audio 4000 t\u1eeb":
                          e.don_gia_audio_4k,
                        "\u0110\u01a1n gi\xe1 Audio 5000 t\u1eeb":
                          e.don_gia_audio_5k,
                        "\u0110\u01a1n gi\xe1 Video 1000 t\u1eeb":
                          e.don_gia_video_1k,
                        "\u0110\u01a1n gi\xe1 Video 2000 t\u1eeb":
                          e.don_gia_video_2k,
                        "\u0110\u01a1n gi\xe1 Video 3000 t\u1eeb":
                          e.don_gia_video_3k,
                        "\u0110\u01a1n gi\xe1 Video 4000 t\u1eeb":
                          e.don_gia_video_4k,
                        "\u0110\u01a1n gi\xe1 Video 5000 t\u1eeb":
                          e.don_gia_video_5k,
                        Bonus: e.thuong,
                        "Ph\u1ea1t": e.phat,
                        "Contents Number 1000 words": e.san_luong_content_1k,
                        "Contents Number 2000 words": e.san_luong_content_2k,
                        "Contents Number 3000 words": e.san_luong_content_3k,
                        "Contents Number 4000 words": e.san_luong_content_4k,
                        "Contents Number 5000 words": e.san_luong_content_5k,
                        "Audio Number 1000 words": e.san_luong_audio,
                        "Audio Number 2000 words": e.san_luong_audio_2k,
                        "Audio Number 3000 words": e.san_luong_audio_3k,
                        "Audio Number 4000 words": e.san_luong_audio_4k,
                        "Audio Number 5000 words": e.san_luong_audio_5k,
                        "Videos Number 1000 words": e.san_luong_video_1k,
                        "Videos Number 2000 words": e.san_luong_video_2k,
                        "Videos Number 3000 words": e.san_luong_video_3k,
                        "Videos Number 4000 words": e.san_luong_video_4k,
                        "Videos Number 5000 words": e.san_luong_video_5k,
                        Note: e.note_khac,
                        "Total Salary": e.tong_luong,
                      };
                    }
                  ),
                  t = "BAOCAOLUONG_TENTICKER".concat(C()().format("YYYYMMDD"));
                Fe(e, t, t);
              }),
              (a.state = {
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
                    sorter: function (e, t) {
                      return e.stt - t.stt;
                    },
                    render: function (e, t) {
                      return {
                        props: {
                          style: { background: t.stt % 2 === 0 && "#fbfbfb" },
                        },
                        children: Object(T.jsx)("div", { children: e }),
                      };
                    },
                  },
                  {
                    title: "Employee Id",
                    dataIndex: "ma_nv",
                    key: "ma_nv",
                    fixed: "left",
                    sorter: function (e, t) {
                      return e.ma_nv.length - t.ma_nv.length;
                    },
                    ellipsis: { showTitle: !1 },
                    width: 160,
                  },
                  {
                    title: "Full Name",
                    dataIndex: "ho_ten",
                    key: "ho_ten",
                    filteredValue: null,
                    fixed: "left",
                    sorter: function (e, t) {
                      return e.ho_ten.length - t.ho_ten.length;
                    },
                    ellipsis: { showTitle: !1 },
                    width: 160,
                  },
                  {
                    title: "Email",
                    dataIndex: "email",
                    key: "email",
                    ellipsis: { showTitle: !1 },
                    width: 150,
                    sorter: function (e, t) {
                      return e.email.length - t.email.length;
                    },
                  },
                  {
                    title: "Bank Account Number ",
                    dataIndex: "stk",
                    key: "stk",
                    sorter: function (e, t) {
                      return e.stk.length - t.stk.length;
                    },
                    ellipsis: { showTitle: !1 },
                    width: 150,
                  },
                  {
                    title: "Bank Note",
                    key: "note_ngan_hang",
                    dataIndex: "note_ngan_hang",
                    sorter: function (e, t) {
                      return e.note_ngan_hang.length - t.note_ngan_hang.length;
                    },
                    ellipsis: { showTitle: !1 },
                    width: 165,
                  },
                  {
                    title: "Fixed Salary",
                    dataIndex: "luong_cung",
                    key: "luong_cung",
                    sorter: function (e, t) {
                      return e.luong_cung.length - t.luong_cung.length;
                    },
                    ellipsis: { showTitle: !1 },
                    width: 130,
                  },
                  {
                    title: "\u0110\u01a1n gi\xe1 Script 1000 t\u1eeb",
                    dataIndex: "don_gia_content_1k",
                    key: "don_gia_content_1k",
                    sorter: function (e, t) {
                      return (
                        e.don_gia_content_1k.length -
                        t.don_gia_content_1k.length
                      );
                    },
                    ellipsis: { showTitle: !1 },
                    width: 100,
                  },
                  {
                    title: "\u0110\u01a1n gi\xe1 Script 2000 t\u1eeb",
                    dataIndex: "don_gia_content_2k",
                    key: "don_gia_content_2k",
                    sorter: function (e, t) {
                      return (
                        e.don_gia_content_2k.length -
                        t.don_gia_content_2k.length
                      );
                    },
                    ellipsis: { showTitle: !1 },
                    width: 100,
                  },
                  {
                    title: "\u0110\u01a1n gi\xe1 Script 3000 t\u1eeb",
                    dataIndex: "don_gia_content_3k",
                    key: "don_gia_content_3k",
                    sorter: function (e, t) {
                      return (
                        e.don_gia_content_3k.length -
                        t.don_gia_content_3k.length
                      );
                    },
                    ellipsis: { showTitle: !1 },
                    width: 100,
                  },
                  {
                    title: "\u0110\u01a1n gi\xe1 Script 4000 t\u1eeb",
                    dataIndex: "don_gia_content_4k",
                    key: "don_gia_content_4k",
                    sorter: function (e, t) {
                      return (
                        e.don_gia_content_4k.length -
                        t.don_gia_content_4k.length
                      );
                    },
                    ellipsis: { showTitle: !1 },
                    width: 100,
                  },
                  {
                    title: "\u0110\u01a1n gi\xe1 Script 5000 t\u1eeb",
                    dataIndex: "don_gia_content_5k",
                    key: "don_gia_content_5k",
                    sorter: function (e, t) {
                      return (
                        e.don_gia_content_5k.length -
                        t.don_gia_content_5k.length
                      );
                    },
                    ellipsis: { showTitle: !1 },
                    width: 100,
                  },
                  {
                    title: "\u0110\u01a1n gi\xe1 Audio 1000 t\u1eeb",
                    dataIndex: "don_gia_audio",
                    key: "don_gia_audio",
                    sorter: function (e, t) {
                      return e.don_gia_audio.length - t.don_gia_audio.length;
                    },
                    ellipsis: { showTitle: !1 },
                    width: 120,
                  },
                  {
                    title: "\u0110\u01a1n gi\xe1 Audio 2000 t\u1eeb",
                    dataIndex: "don_gia_audio_2k",
                    key: "don_gia_audio_2k",
                    sorter: function (e, t) {
                      return (
                        e.don_gia_audio_2k.length - t.don_gia_audio_2k.length
                      );
                    },
                    ellipsis: { showTitle: !1 },
                    width: 120,
                  },
                  {
                    title: "\u0110\u01a1n gi\xe1 Audio 3000 t\u1eeb",
                    dataIndex: "don_gia_audio_3k",
                    key: "don_gia_audio_3k",
                    sorter: function (e, t) {
                      return (
                        e.don_gia_audio_3k.length - t.don_gia_audio_3k.length
                      );
                    },
                    ellipsis: { showTitle: !1 },
                    width: 120,
                  },
                  {
                    title: "\u0110\u01a1n gi\xe1 Audio 4000 t\u1eeb",
                    dataIndex: "don_gia_audio_4k",
                    key: "don_gia_audio_4k",
                    sorter: function (e, t) {
                      return (
                        e.don_gia_audio_4k.length - t.don_gia_audio_4k.length
                      );
                    },
                    ellipsis: { showTitle: !1 },
                    width: 120,
                  },
                  {
                    title: "\u0110\u01a1n gi\xe1 Audio 5000 t\u1eeb",
                    dataIndex: "don_gia_audio_5k",
                    key: "don_gia_audio_5k",
                    sorter: function (e, t) {
                      return (
                        e.don_gia_audio_5k.length - t.don_gia_audio_5k.length
                      );
                    },
                    ellipsis: { showTitle: !1 },
                    width: 120,
                  },
                  {
                    title: "\u0110\u01a1n gi\xe1 Video 1000 t\u1eeb",
                    dataIndex: "don_gia_video_1k",
                    key: "don_gia_video_1k",
                    sorter: function (e, t) {
                      return (
                        e.don_gia_video_1k.length - t.don_gia_video_1k.length
                      );
                    },
                    ellipsis: { showTitle: !1 },
                    width: 175,
                  },
                  {
                    title: "\u0110\u01a1n gi\xe1 Video 2000 t\u1eeb",
                    dataIndex: "don_gia_video_2k",
                    key: "don_gia_video_2k",
                    sorter: function (e, t) {
                      return (
                        e.don_gia_video_2k.length - t.don_gia_video_2k.length
                      );
                    },
                    ellipsis: { showTitle: !1 },
                    width: 175,
                  },
                  {
                    title: "\u0110\u01a1n gi\xe1 Video 3000 t\u1eeb",
                    dataIndex: "don_gia_video_3k",
                    key: "don_gia_video_3k",
                    sorter: function (e, t) {
                      return (
                        e.don_gia_video_3k.length - t.don_gia_video_3k.length
                      );
                    },
                    ellipsis: { showTitle: !1 },
                    width: 175,
                  },
                  {
                    title: "\u0110\u01a1n gi\xe1 Video 4000 t\u1eeb",
                    dataIndex: "don_gia_video_4k",
                    key: "don_gia_video_4k",
                    sorter: function (e, t) {
                      return (
                        e.don_gia_video_4k.length - t.don_gia_video_4k.length
                      );
                    },
                    ellipsis: { showTitle: !1 },
                    width: 175,
                  },
                  {
                    title: "\u0110\u01a1n gi\xe1 Video 5000 t\u1eeb",
                    dataIndex: "don_gia_video_5k",
                    key: "don_gia_video_5k",
                    sorter: function (e, t) {
                      return (
                        e.don_gia_video_5k.length - t.don_gia_video_5k.length
                      );
                    },
                    ellipsis: { showTitle: !1 },
                    width: 175,
                  },
                  {
                    title: "Bonus",
                    dataIndex: "thuong",
                    key: "thuong",
                    sorter: function (e, t) {
                      return e.thuong.length - t.thuong.length;
                    },
                    ellipsis: { showTitle: !1 },
                    width: 120,
                    render: function (e, t) {
                      var n = a._isEditing(t);
                      return {
                        props: {
                          style: { background: t.stt % 2 === 0 && "#fbfbfb" },
                        },
                        children: n
                          ? Object(T.jsx)(R.a, {
                              style: { width: "100%" },
                              disabled: !n,
                              value: t.thuong,
                              onChange: function (e) {
                                return a.onChangeBonus(e.target.value, t);
                              },
                            })
                          : Object(T.jsx)("div", { children: t.thuong }),
                      };
                    },
                  },
                  {
                    title: "Ph\u1ea1t",
                    dataIndex: "phat",
                    key: "phat",
                    sorter: function (e, t) {
                      return e.phat.length - t.phat.length;
                    },
                    ellipsis: { showTitle: !1 },
                    width: 130,
                    render: function (e, t) {
                      var n = a._isEditing(t);
                      return {
                        props: {
                          style: { background: t.stt % 2 === 0 && "#fbfbfb" },
                        },
                        children: n
                          ? Object(T.jsx)(R.a, {
                              style: { width: "100%" },
                              disabled: !n,
                              value: t.phat,
                              onChange: function (e) {
                                return a.onChangePhat(e.target.value, t);
                              },
                            })
                          : Object(T.jsx)("div", { children: t.phat }),
                      };
                    },
                  },
                  {
                    title: "Contents 1000 words number",
                    key: "san_luong_content_1k",
                    dataIndex: "san_luong_content_1k",
                    sorter: function (e, t) {
                      return (
                        e.san_luong_content_1k.length -
                        t.san_luong_content_1k.length
                      );
                    },
                    ellipsis: { showTitle: !1 },
                    width: 150,
                  },
                  {
                    title: "Contents 2000 words number",
                    key: "san_luong_content_2k",
                    dataIndex: "san_luong_content_2k",
                    sorter: function (e, t) {
                      return (
                        e.san_luong_content_2k.length -
                        t.san_luong_content_2k.length
                      );
                    },
                    ellipsis: { showTitle: !1 },
                    width: 150,
                  },
                  {
                    title: "Contents 3000 words number",
                    key: "san_luong_content_3k",
                    dataIndex: "san_luong_content_3k",
                    sorter: function (e, t) {
                      return (
                        e.san_luong_content_3k.length -
                        t.san_luong_content_3k.length
                      );
                    },
                    ellipsis: { showTitle: !1 },
                    width: 150,
                  },
                  {
                    title: "Contents 4000 words number",
                    key: "san_luong_content_4k",
                    dataIndex: "san_luong_content_4k",
                    sorter: function (e, t) {
                      return (
                        e.san_luong_content_4k.length -
                        t.san_luong_content_4k.length
                      );
                    },
                    ellipsis: { showTitle: !1 },
                    width: 150,
                  },
                  {
                    title: "Contents 5000 words number",
                    key: "san_luong_content_5k",
                    dataIndex: "san_luong_content_5k",
                    sorter: function (e, t) {
                      return (
                        e.san_luong_content_5k.length -
                        t.san_luong_content_5k.length
                      );
                    },
                    ellipsis: { showTitle: !1 },
                    width: 150,
                  },
                  {
                    title: "Audio 1000 words Number",
                    dataIndex: "san_luong_audio",
                    key: "san_luong_audio",
                    sorter: function (e, t) {
                      return (
                        e.san_luong_audio.length - t.san_luong_audio.length
                      );
                    },
                    ellipsis: { showTitle: !1 },
                    width: 100,
                  },
                  {
                    title: "Audio 2000 words Number",
                    dataIndex: "san_luong_audio_2k",
                    key: "san_luong_audio_2k",
                    sorter: function (e, t) {
                      return (
                        e.san_luong_audio_2k.length -
                        t.san_luong_audio_2k.length
                      );
                    },
                    ellipsis: { showTitle: !1 },
                    width: 100,
                  },
                  {
                    title: "Audio 3000 words Number",
                    dataIndex: "san_luong_audio_3k",
                    key: "san_luong_audio_3k",
                    sorter: function (e, t) {
                      return (
                        e.san_luong_audio_3k.length -
                        t.san_luong_audio_3k.length
                      );
                    },
                    ellipsis: { showTitle: !1 },
                    width: 100,
                  },
                  {
                    title: "Audio 4000 words Number",
                    dataIndex: "san_luong_audio_4k",
                    key: "san_luong_audio_4k",
                    sorter: function (e, t) {
                      return (
                        e.san_luong_audio_4k.length -
                        t.san_luong_audio_4k.length
                      );
                    },
                    ellipsis: { showTitle: !1 },
                    width: 100,
                  },
                  {
                    title: "Audio 5000 words Number",
                    dataIndex: "san_luong_audio_5k",
                    key: "san_luong_audio_5k",
                    sorter: function (e, t) {
                      return (
                        e.san_luong_audio_5k.length -
                        t.san_luong_audio_5k.length
                      );
                    },
                    ellipsis: { showTitle: !1 },
                    width: 100,
                  },
                  {
                    title: "Videos 1000 words Number",
                    dataIndex: "san_luong_video_1k",
                    key: "san_luong_video_1k",
                    width: 120,
                    sorter: function (e, t) {
                      return (
                        e.san_luong_video_1k.length -
                        t.san_luong_video_1k.length
                      );
                    },
                    ellipsis: { showTitle: !1 },
                  },
                  {
                    title: "Videos 2000 words Number",
                    dataIndex: "san_luong_video_2k",
                    key: "san_luong_video_2k",
                    width: 120,
                    sorter: function (e, t) {
                      return (
                        e.san_luong_video_2k.length -
                        t.san_luong_video_2k.length
                      );
                    },
                    ellipsis: { showTitle: !1 },
                  },
                  {
                    title: "Videos 3000 words Number",
                    dataIndex: "san_luong_video_3k",
                    key: "san_luong_video_3k",
                    width: 120,
                    sorter: function (e, t) {
                      return (
                        e.san_luong_video_3k.length -
                        t.san_luong_video_3k.length
                      );
                    },
                    ellipsis: { showTitle: !1 },
                  },
                  {
                    title: "Videos 4000 words Number",
                    dataIndex: "san_luong_video_4k",
                    key: "san_luong_video_4k",
                    width: 120,
                    sorter: function (e, t) {
                      return (
                        e.san_luong_video_4k.length -
                        t.san_luong_video_4k.length
                      );
                    },
                    ellipsis: { showTitle: !1 },
                  },
                  {
                    title: "Videos 5000 words Number",
                    dataIndex: "san_luong_video_5k",
                    key: "san_luong_video_5k",
                    width: 120,
                    sorter: function (e, t) {
                      return (
                        e.san_luong_video_5k.length -
                        t.san_luong_video_5k.length
                      );
                    },
                    ellipsis: { showTitle: !1 },
                  },
                  {
                    title: "Note",
                    dataIndex: "note_khac",
                    key: "note_khac",
                    sorter: function (e, t) {
                      return e.note_khac.length - t.note_khac.length;
                    },
                    ellipsis: { showTitle: !1 },
                    width: 120,
                    render: function (e, t) {
                      var n = a._isEditing(t);
                      return {
                        props: {
                          style: { background: t.stt % 2 === 0 && "#fbfbfb" },
                        },
                        children: n
                          ? Object(T.jsx)(R.a, {
                              style: { width: "100%" },
                              disabled: !n,
                              value: t.note_khac,
                              onChange: function (e) {
                                return a.onChangeNote(e.target.value, t);
                              },
                            })
                          : Object(T.jsx)("div", { children: t.note_khac }),
                      };
                    },
                  },
                  {
                    title: "Total Salary",
                    dataIndex: "tong_luong",
                    key: "tong_luong",
                    sorter: function (e, t) {
                      return e.tong_luong.length - t.tong_luong.length;
                    },
                    ellipsis: { showTitle: !1 },
                    width: 150,
                    render: function (e, t) {
                      return Object(T.jsx)("div", { children: Ne(e) });
                    },
                  },
                  {
                    title: "Thao t\xe1c",
                    key: "thaoTac",
                    align: "center",
                    fixed: "right",
                    width: 155,
                    render: function (e, t) {
                      var n = a._isEditing(t);
                      return {
                        props: {
                          style: { background: t.stt % 2 === 0 && "#fbfbfb" },
                        },
                        children: Object(T.jsx)(T.Fragment, {
                          children: n
                            ? Object(T.jsxs)(T.Fragment, {
                                children: [
                                  Object(T.jsx)(m.a, {
                                    style: {
                                      color: "white",
                                      backgroundColor: "#238c31",
                                      fontWeight: "bold",
                                      borderRadius: 5,
                                      borderColor: "#238c31",
                                    },
                                    type: "primary",
                                    icon: Object(T.jsx)(G.a, {}),
                                    onClick: function () {
                                      return a.onSubmitUpdate(t);
                                    },
                                  }),
                                  Object(T.jsx)("span", {
                                    children: "\xa0\xa0\xa0",
                                  }),
                                  Object(T.jsx)(m.a, {
                                    style: {
                                      color: "white",
                                      backgroundColor: "#238c31",
                                      fontWeight: "bold",
                                      borderRadius: 5,
                                      borderColor: "#238c31",
                                    },
                                    type: "primary",
                                    icon: Object(T.jsx)(J.a, {}),
                                    onClick: function () {
                                      return a.onCancelEdit(t);
                                    },
                                  }),
                                ],
                              })
                            : Object(T.jsx)(m.a, {
                                style: {
                                  color: "white",
                                  backgroundColor: "#238c31",
                                  fontWeight: "bold",
                                  borderRadius: 5,
                                  borderColor: "#238c31",
                                },
                                type: "primary",
                                onClick: function () {
                                  return a._onChangeEditingKey(t);
                                },
                                children: "S\u1eeda",
                              }),
                        }),
                      };
                    },
                  },
                ],
              }),
              a
            );
          }
          return (
            Object(h.a)(n, [
              {
                key: "componentDidMount",
                value: function () {
                  (this.mounted = !0), this._onRefreshData();
                },
              },
              {
                key: "componentWillUnmount",
                value: function () {
                  this.mounted = !1;
                },
              },
              {
                key: "render",
                value: function () {
                  var e = this,
                    t = this.state,
                    n = t.column,
                    a = t.sortedInfo,
                    i = t.isLoading,
                    o = (t.salary, t.salaryChangeUpdate),
                    r = Object(k.map)(n, function (t, n) {
                      switch (n) {
                        case 0:
                          return Object(b.a)(
                            Object(b.a)({}, t),
                            {},
                            {
                              sortOrder: Object(k.isEmpty)(a)
                                ? null
                                : "stt" === a.columnKey && a.order,
                              onHeaderCell: function (t) {
                                return {
                                  width: t.width,
                                  onResize: e.handleResize(n),
                                };
                              },
                            }
                          );
                        case 1:
                          return Object(b.a)(
                            Object(b.a)({}, t),
                            {},
                            {
                              sortOrder: Object(k.isEmpty)(a)
                                ? null
                                : "ma_nv" === a.columnKey && a.order,
                              onHeaderCell: function (t) {
                                return {
                                  width: t.width,
                                  onResize: e.handleResize(n),
                                };
                              },
                            }
                          );
                        case 2:
                          return Object(b.a)(
                            Object(b.a)({}, t),
                            {},
                            {
                              sortOrder: Object(k.isEmpty)(a)
                                ? null
                                : "ho_ten" === a.columnKey && a.order,
                              onHeaderCell: function (t) {
                                return {
                                  width: t.width,
                                  onResize: e.handleResize(n),
                                };
                              },
                            }
                          );
                        case 3:
                          return Object(b.a)(
                            Object(b.a)({}, t),
                            {},
                            {
                              sortOrder: Object(k.isEmpty)(a)
                                ? null
                                : "trang_thai" === a.columnKey && a.order,
                              onHeaderCell: function (t) {
                                return {
                                  width: t.width,
                                  onResize: e.handleResize(n),
                                };
                              },
                            }
                          );
                        case 4:
                          return Object(b.a)(
                            Object(b.a)({}, t),
                            {},
                            {
                              sortOrder: Object(k.isEmpty)(a)
                                ? null
                                : "email" === a.columnKey && a.order,
                              onHeaderCell: function (t) {
                                return {
                                  width: t.width,
                                  onResize: e.handleResize(n),
                                };
                              },
                            }
                          );
                        case 5:
                          return Object(b.a)(
                            Object(b.a)({}, t),
                            {},
                            {
                              sortOrder: Object(k.isEmpty)(a)
                                ? null
                                : "stk" === a.columnKey && a.order,
                              onHeaderCell: function (t) {
                                return {
                                  width: t.width,
                                  onResize: e.handleResize(n),
                                };
                              },
                            }
                          );
                        case 6:
                          return Object(b.a)(
                            Object(b.a)({}, t),
                            {},
                            {
                              sortOrder: Object(k.isEmpty)(a)
                                ? null
                                : "note_ngan_hang" === a.columnKey && a.order,
                              onHeaderCell: function (t) {
                                return {
                                  width: t.width,
                                  onResize: e.handleResize(n),
                                };
                              },
                            }
                          );
                        case 7:
                          return Object(b.a)(
                            Object(b.a)({}, t),
                            {},
                            {
                              sortOrder: Object(k.isEmpty)(a)
                                ? null
                                : "luong_cung" === a.columnKey && a.order,
                              onHeaderCell: function (t) {
                                return {
                                  width: t.width,
                                  onResize: e.handleResize(n),
                                };
                              },
                            }
                          );
                        case 8:
                          return Object(b.a)(
                            Object(b.a)({}, t),
                            {},
                            {
                              sortOrder: Object(k.isEmpty)(a)
                                ? null
                                : "don_gia_content_1k" === a.columnKey &&
                                  a.order,
                              onHeaderCell: function (t) {
                                return {
                                  width: t.width,
                                  onResize: e.handleResize(n),
                                };
                              },
                            }
                          );
                        case 9:
                          return Object(b.a)(
                            Object(b.a)({}, t),
                            {},
                            {
                              sortOrder: Object(k.isEmpty)(a)
                                ? null
                                : "don_gia_content_2k" === a.columnKey &&
                                  a.order,
                              onHeaderCell: function (t) {
                                return {
                                  width: t.width,
                                  onResize: e.handleResize(n),
                                };
                              },
                            }
                          );
                        case 10:
                          return Object(b.a)(
                            Object(b.a)({}, t),
                            {},
                            {
                              sortOrder: Object(k.isEmpty)(a)
                                ? null
                                : "don_gia_content_3k" === a.columnKey &&
                                  a.order,
                              onHeaderCell: function (t) {
                                return {
                                  width: t.width,
                                  onResize: e.handleResize(n),
                                };
                              },
                            }
                          );
                        case 11:
                          return Object(b.a)(
                            Object(b.a)({}, t),
                            {},
                            {
                              sortOrder: Object(k.isEmpty)(a)
                                ? null
                                : "don_gia_content_4k" === a.columnKey &&
                                  a.order,
                              onHeaderCell: function (t) {
                                return {
                                  width: t.width,
                                  onResize: e.handleResize(n),
                                };
                              },
                            }
                          );
                        case 12:
                          return Object(b.a)(
                            Object(b.a)({}, t),
                            {},
                            {
                              sortOrder: Object(k.isEmpty)(a)
                                ? null
                                : "don_gia_content_5k" === a.columnKey &&
                                  a.order,
                              onHeaderCell: function (t) {
                                return {
                                  width: t.width,
                                  onResize: e.handleResize(n),
                                };
                              },
                            }
                          );
                        case 13:
                          return Object(b.a)(
                            Object(b.a)({}, t),
                            {},
                            {
                              sortOrder: Object(k.isEmpty)(a)
                                ? null
                                : "don_gia_audio" === a.columnKey && a.order,
                              onHeaderCell: function (t) {
                                return {
                                  width: t.width,
                                  onResize: e.handleResize(n),
                                };
                              },
                            }
                          );
                        case 14:
                          return Object(b.a)(
                            Object(b.a)({}, t),
                            {},
                            {
                              sortOrder: Object(k.isEmpty)(a)
                                ? null
                                : "don_gia_audio_2k" === a.columnKey && a.order,
                              onHeaderCell: function (t) {
                                return {
                                  width: t.width,
                                  onResize: e.handleResize(n),
                                };
                              },
                            }
                          );
                        case 15:
                          return Object(b.a)(
                            Object(b.a)({}, t),
                            {},
                            {
                              sortOrder: Object(k.isEmpty)(a)
                                ? null
                                : "don_gia_audio_3k" === a.columnKey && a.order,
                              onHeaderCell: function (t) {
                                return {
                                  width: t.width,
                                  onResize: e.handleResize(n),
                                };
                              },
                            }
                          );
                        case 16:
                          return Object(b.a)(
                            Object(b.a)({}, t),
                            {},
                            {
                              sortOrder: Object(k.isEmpty)(a)
                                ? null
                                : "don_gia_audio_4k" === a.columnKey && a.order,
                              onHeaderCell: function (t) {
                                return {
                                  width: t.width,
                                  onResize: e.handleResize(n),
                                };
                              },
                            }
                          );
                        case 17:
                          return Object(b.a)(
                            Object(b.a)({}, t),
                            {},
                            {
                              sortOrder: Object(k.isEmpty)(a)
                                ? null
                                : "don_gia_audio_5k" === a.columnKey && a.order,
                              onHeaderCell: function (t) {
                                return {
                                  width: t.width,
                                  onResize: e.handleResize(n),
                                };
                              },
                            }
                          );
                        case 18:
                          return Object(b.a)(
                            Object(b.a)({}, t),
                            {},
                            {
                              sortOrder: Object(k.isEmpty)(a)
                                ? null
                                : "don_gia_video_1k" === a.columnKey && a.order,
                              onHeaderCell: function (t) {
                                return {
                                  width: t.width,
                                  onResize: e.handleResize(n),
                                };
                              },
                            }
                          );
                        case 19:
                          return Object(b.a)(
                            Object(b.a)({}, t),
                            {},
                            {
                              sortOrder: Object(k.isEmpty)(a)
                                ? null
                                : "don_gia_video_2k" === a.columnKey && a.order,
                              onHeaderCell: function (t) {
                                return {
                                  width: t.width,
                                  onResize: e.handleResize(n),
                                };
                              },
                            }
                          );
                        case 20:
                          return Object(b.a)(
                            Object(b.a)({}, t),
                            {},
                            {
                              sortOrder: Object(k.isEmpty)(a)
                                ? null
                                : "don_gia_video_3k" === a.columnKey && a.order,
                              onHeaderCell: function (t) {
                                return {
                                  width: t.width,
                                  onResize: e.handleResize(n),
                                };
                              },
                            }
                          );
                        case 21:
                          return Object(b.a)(
                            Object(b.a)({}, t),
                            {},
                            {
                              sortOrder: Object(k.isEmpty)(a)
                                ? null
                                : "don_gia_video_4k" === a.columnKey && a.order,
                              onHeaderCell: function (t) {
                                return {
                                  width: t.width,
                                  onResize: e.handleResize(n),
                                };
                              },
                            }
                          );
                        case 22:
                          return Object(b.a)(
                            Object(b.a)({}, t),
                            {},
                            {
                              sortOrder: Object(k.isEmpty)(a)
                                ? null
                                : "don_gia_video_5k" === a.columnKey && a.order,
                              onHeaderCell: function (t) {
                                return {
                                  width: t.width,
                                  onResize: e.handleResize(n),
                                };
                              },
                            }
                          );
                        case 23:
                          return Object(b.a)(
                            Object(b.a)({}, t),
                            {},
                            {
                              sortOrder: Object(k.isEmpty)(a)
                                ? null
                                : "thuong" === a.columnKey && a.order,
                              onHeaderCell: function (t) {
                                return {
                                  width: t.width,
                                  onResize: e.handleResize(n),
                                };
                              },
                            }
                          );
                        case 24:
                          return Object(b.a)(
                            Object(b.a)({}, t),
                            {},
                            {
                              sortOrder: Object(k.isEmpty)(a)
                                ? null
                                : "phat" === a.columnKey && a.order,
                              onHeaderCell: function (t) {
                                return {
                                  width: t.width,
                                  onResize: e.handleResize(n),
                                };
                              },
                            }
                          );
                        case 25:
                          return Object(b.a)(
                            Object(b.a)({}, t),
                            {},
                            {
                              sortOrder: Object(k.isEmpty)(a)
                                ? null
                                : "san_luong_content_1k" === a.columnKey &&
                                  a.order,
                              onHeaderCell: function (t) {
                                return {
                                  width: t.width,
                                  onResize: e.handleResize(n),
                                };
                              },
                            }
                          );
                        case 26:
                          return Object(b.a)(
                            Object(b.a)({}, t),
                            {},
                            {
                              sortOrder: Object(k.isEmpty)(a)
                                ? null
                                : "san_luong_content_2k" === a.columnKey &&
                                  a.order,
                              onHeaderCell: function (t) {
                                return {
                                  width: t.width,
                                  onResize: e.handleResize(n),
                                };
                              },
                            }
                          );
                        case 27:
                          return Object(b.a)(
                            Object(b.a)({}, t),
                            {},
                            {
                              sortOrder: Object(k.isEmpty)(a)
                                ? null
                                : "san_luong_content_3k" === a.columnKey &&
                                  a.order,
                              onHeaderCell: function (t) {
                                return {
                                  width: t.width,
                                  onResize: e.handleResize(n),
                                };
                              },
                            }
                          );
                        case 28:
                          return Object(b.a)(
                            Object(b.a)({}, t),
                            {},
                            {
                              sortOrder: Object(k.isEmpty)(a)
                                ? null
                                : "san_luong_content_4k" === a.columnKey &&
                                  a.order,
                              onHeaderCell: function (t) {
                                return {
                                  width: t.width,
                                  onResize: e.handleResize(n),
                                };
                              },
                            }
                          );
                        case 29:
                          return Object(b.a)(
                            Object(b.a)({}, t),
                            {},
                            {
                              sortOrder: Object(k.isEmpty)(a)
                                ? null
                                : "san_luong_content_5k" === a.columnKey &&
                                  a.order,
                              onHeaderCell: function (t) {
                                return {
                                  width: t.width,
                                  onResize: e.handleResize(n),
                                };
                              },
                            }
                          );
                        case 30:
                          return Object(b.a)(
                            Object(b.a)({}, t),
                            {},
                            {
                              sortOrder: Object(k.isEmpty)(a)
                                ? null
                                : "san_luong_audio" === a.columnKey && a.order,
                              onHeaderCell: function (t) {
                                return {
                                  width: t.width,
                                  onResize: e.handleResize(n),
                                };
                              },
                            }
                          );
                        case 31:
                          return Object(b.a)(
                            Object(b.a)({}, t),
                            {},
                            {
                              sortOrder: Object(k.isEmpty)(a)
                                ? null
                                : "san_luong_audio_2k" === a.columnKey &&
                                  a.order,
                              onHeaderCell: function (t) {
                                return {
                                  width: t.width,
                                  onResize: e.handleResize(n),
                                };
                              },
                            }
                          );
                        case 32:
                          return Object(b.a)(
                            Object(b.a)({}, t),
                            {},
                            {
                              sortOrder: Object(k.isEmpty)(a)
                                ? null
                                : "san_luong_audio_3k" === a.columnKey &&
                                  a.order,
                              onHeaderCell: function (t) {
                                return {
                                  width: t.width,
                                  onResize: e.handleResize(n),
                                };
                              },
                            }
                          );
                        case 33:
                          return Object(b.a)(
                            Object(b.a)({}, t),
                            {},
                            {
                              sortOrder: Object(k.isEmpty)(a)
                                ? null
                                : "san_luong_audio_4k" === a.columnKey &&
                                  a.order,
                              onHeaderCell: function (t) {
                                return {
                                  width: t.width,
                                  onResize: e.handleResize(n),
                                };
                              },
                            }
                          );
                        case 34:
                          return Object(b.a)(
                            Object(b.a)({}, t),
                            {},
                            {
                              sortOrder: Object(k.isEmpty)(a)
                                ? null
                                : "san_luong_audio_5k" === a.columnKey &&
                                  a.order,
                              onHeaderCell: function (t) {
                                return {
                                  width: t.width,
                                  onResize: e.handleResize(n),
                                };
                              },
                            }
                          );
                        case 35:
                          return Object(b.a)(
                            Object(b.a)({}, t),
                            {},
                            {
                              sortOrder: Object(k.isEmpty)(a)
                                ? null
                                : "san_luong_video_1k" === a.columnKey &&
                                  a.order,
                              onHeaderCell: function (t) {
                                return {
                                  width: t.width,
                                  onResize: e.handleResize(n),
                                };
                              },
                            }
                          );
                        case 36:
                          return Object(b.a)(
                            Object(b.a)({}, t),
                            {},
                            {
                              sortOrder: Object(k.isEmpty)(a)
                                ? null
                                : "san_luong_video_2k" === a.columnKey &&
                                  a.order,
                              onHeaderCell: function (t) {
                                return {
                                  width: t.width,
                                  onResize: e.handleResize(n),
                                };
                              },
                            }
                          );
                        case 37:
                          return Object(b.a)(
                            Object(b.a)({}, t),
                            {},
                            {
                              sortOrder: Object(k.isEmpty)(a)
                                ? null
                                : "san_luong_video_3k" === a.columnKey &&
                                  a.order,
                              onHeaderCell: function (t) {
                                return {
                                  width: t.width,
                                  onResize: e.handleResize(n),
                                };
                              },
                            }
                          );
                        case 38:
                          return Object(b.a)(
                            Object(b.a)({}, t),
                            {},
                            {
                              sortOrder: Object(k.isEmpty)(a)
                                ? null
                                : "san_luong_video_4k" === a.columnKey &&
                                  a.order,
                              onHeaderCell: function (t) {
                                return {
                                  width: t.width,
                                  onResize: e.handleResize(n),
                                };
                              },
                            }
                          );
                        case 39:
                          return Object(b.a)(
                            Object(b.a)({}, t),
                            {},
                            {
                              sortOrder: Object(k.isEmpty)(a)
                                ? null
                                : "san_luong_video_5k" === a.columnKey &&
                                  a.order,
                              onHeaderCell: function (t) {
                                return {
                                  width: t.width,
                                  onResize: e.handleResize(n),
                                };
                              },
                            }
                          );
                        case 40:
                          return Object(b.a)(
                            Object(b.a)({}, t),
                            {},
                            {
                              sortOrder: Object(k.isEmpty)(a)
                                ? null
                                : "note_khac" === a.columnKey && a.order,
                              onHeaderCell: function (t) {
                                return {
                                  width: t.width,
                                  onResize: e.handleResize(n),
                                };
                              },
                            }
                          );
                        case 41:
                          return Object(b.a)(
                            Object(b.a)({}, t),
                            {},
                            {
                              sortOrder: Object(k.isEmpty)(a)
                                ? null
                                : "tong_luong" === a.columnKey && a.order,
                              onHeaderCell: function (t) {
                                return {
                                  width: t.width,
                                  onResize: e.handleResize(n),
                                };
                              },
                            }
                          );
                        default:
                          return Object(b.a)(
                            Object(b.a)({}, t),
                            {},
                            {
                              onHeaderCell: function (t) {
                                return {
                                  width: t.width,
                                  onResize: e.handleResize(n),
                                };
                              },
                            }
                          );
                      }
                    });
                  return Object(T.jsxs)("div", {
                    children: [
                      Object(T.jsxs)("div", {
                        style: {
                          display: "flex",
                          marginBottom: 10,
                          justifyContent: "flex-end",
                        },
                        children: [
                          Object(T.jsx)(m.a, {
                            type: "primary",
                            style: {
                              height: 36,
                              marginRight: 10,
                              borderRadius: 3,
                            },
                            onClick: this.onExportExcell,
                            icon: Object(T.jsx)(Z.a, {}),
                            children: "Excel",
                          }),
                          Object(T.jsx)(m.a, {
                            type: "primary",
                            style: {
                              height: 36,
                              marginRight: 10,
                              borderRadius: 3,
                            },
                            icon: Object(T.jsx)(dn.a, {}),
                            className: "buttonPrimary",
                            onClick: Object(k.debounce)(function () {
                              return e.onConfirm();
                            }),
                            children:
                              "X\xc1C NH\u1eacN PHI\u1ebeU L\u01af\u01a0NG",
                          }),
                        ],
                      }),
                      Object(T.jsx)(F.a, {
                        loading: i,
                        size: "middle",
                        bordered: !0,
                        onChange: this.handleChange,
                        components: this.components,
                        style: { marginBottom: 15 },
                        rowClassName: function (e, t) {
                          if (t % 2 !== 0) return "rowBackgroundColor";
                        },
                        scroll: { x: 1500, y: 400 },
                        dataSource: o,
                        columns: r,
                        rowKey: "stt",
                        pagination: !1,
                        sticky: !0,
                      }),
                    ],
                  });
                },
              },
            ]),
            n
          );
        })(a.Component),
        _n = function (e) {
          var t = e.onResize,
            n = e.width,
            a = Object(j.a)(e, ["onResize", "width"]);
          return n
            ? Object(T.jsx)(x.Resizable, {
                width: n,
                height: 0,
                handle: Object(T.jsx)("span", {
                  className: "react-resizable-handle",
                  onClick: function (e) {
                    e.stopPropagation();
                  },
                }),
                onResize: t,
                draggableOpts: { enableUserSelectHack: !1 },
                children: Object(T.jsx)("th", Object(b.a)({}, a)),
              })
            : Object(T.jsx)("th", Object(b.a)({}, a));
        },
        fn = (function (e) {
          Object(_.a)(n, e);
          var t = Object(f.a)(n);
          function n(e) {
            var a;
            return (
              Object(u.a)(this, n),
              ((a = t.call(this, e)).components = { header: { cell: _n } }),
              (a._onRefreshData = function (e, t) {
                a.setState({ isLoading: !0 });
                var n = { month: e, year: t };
                v.a.post("".concat(K, "/salary"), n).then(function (e) {
                  var t = Object(k.map)(e.data.data, function (e, t) {
                    return Object(b.a)(Object(b.a)({}, e), {}, { stt: t + 1 });
                  });
                  Object(k.isEmpty)(e.data.data) &&
                    O.a.info({
                      message: "Th\xf4ng b\xe1o",
                      description: "Kh\xf4ng c\xf3 d\u1eef li\u1ec7u",
                    });
                  var n = t.filter(function (e, t) {
                      return 1 === e.trang_thai && "0" !== e.tong_luong;
                    }),
                    i = Object(k.map)(n, function (e, t) {
                      return Object(b.a)(
                        Object(b.a)({}, e),
                        {},
                        { stt: t + 1 }
                      );
                    });
                  a.setState({
                    salary: i,
                    salaryChangeUpdate: i,
                    isLoading: !1,
                  });
                });
              }),
              (a.onExportExcell = function () {
                var e = Object(k.map)(
                    a.state.salaryChangeUpdate,
                    function (e, t) {
                      return {
                        STT: e.STT,
                        "Employee Id": e.ma_nv,
                        "Full Name": e.ho_ten,
                        Email: e.email,
                        "Bank Account Number": e.stk,
                        "Bank Note": e.note_ngan_hang,
                        "Fixed Salary": e.luong_cung,
                        "\u0110\u01a1n gi\xe1 Content 1000 t\u1eeb":
                          e.don_gia_content_1k,
                        "\u0110\u01a1n gi\xe1 Content 2000 t\u1eeb":
                          e.don_gia_content_2k,
                        "\u0110\u01a1n gi\xe1 Content 3000 t\u1eeb":
                          e.don_gia_content_3k,
                        "\u0110\u01a1n gi\xe1 Content 4000 t\u1eeb":
                          e.don_gia_content_4k,
                        "\u0110\u01a1n gi\xe1 Content 5000 t\u1eeb":
                          e.don_gia_content_5k,
                        "\u0110\u01a1n gi\xe1 Audio 1000 t\u1eeb":
                          e.don_gia_audio,
                        "\u0110\u01a1n gi\xe1 Audio 2000 t\u1eeb":
                          e.don_gia_audio_2k,
                        "\u0110\u01a1n gi\xe1 Audio 3000 t\u1eeb":
                          e.don_gia_audio_3k,
                        "\u0110\u01a1n gi\xe1 Audio 4000 t\u1eeb":
                          e.don_gia_audio_4k,
                        "\u0110\u01a1n gi\xe1 Audio 5000 t\u1eeb":
                          e.don_gia_audio_5k,
                        "\u0110\u01a1n gi\xe1 Video 1000 t\u1eeb":
                          e.don_gia_video_1k,
                        "\u0110\u01a1n gi\xe1 Video 2000 t\u1eeb":
                          e.don_gia_video_2k,
                        "\u0110\u01a1n gi\xe1 Video 3000 t\u1eeb":
                          e.don_gia_video_3k,
                        "\u0110\u01a1n gi\xe1 Video 4000 t\u1eeb":
                          e.don_gia_video_4k,
                        "\u0110\u01a1n gi\xe1 Video 5000 t\u1eeb":
                          e.don_gia_video_5k,
                        Bonus: e.thuong,
                        "Ph\u1ea1t": e.phat,
                        "Contents Number 1000 words": e.san_luong_content_1k,
                        "Contents Number 2000 words": e.san_luong_content_2k,
                        "Contents Number 3000 words": e.san_luong_content_3k,
                        "Contents Number 4000 words": e.san_luong_content_4k,
                        "Contents Number 5000 words": e.san_luong_content_5k,
                        "Audio Number 1000 words": e.san_luong_audio,
                        "Audio Number 2000 words": e.san_luong_audio_2k,
                        "Audio Number 3000 words": e.san_luong_audio_3k,
                        "Audio Number 4000 words": e.san_luong_audio_4k,
                        "Audio Number 5000 words": e.san_luong_audio_5k,
                        "Videos Number 1000 words": e.san_luong_video_1k,
                        "Videos Number 2000 words": e.san_luong_video_2k,
                        "Videos Number 3000 words": e.san_luong_video_3k,
                        "Videos Number 4000 words": e.san_luong_video_4k,
                        "Videos Number 5000 words": e.san_luong_video_5k,
                        Note: e.note_khac,
                        "Total Salary": e.tong_luong,
                      };
                    }
                  ),
                  t = "BAOCAOLUONG_TENTICKER".concat(C()().format("YYYYMMDD"));
                Fe(e, t, t);
              }),
              (a.handleResize = function (e) {
                return function (t, n) {
                  var i = n.size;
                  a.setState(function (t) {
                    var n = t.column,
                      a = Object(d.a)(n);
                    return (
                      (a[e] = Object(b.a)(
                        Object(b.a)({}, a[e]),
                        {},
                        { width: i.width }
                      )),
                      { column: a }
                    );
                  });
                };
              }),
              (a.clearFilters = function () {
                a.setState({ filteredInfo: null });
              }),
              (a.clearSorters = function () {
                a.setState({ sortedInfo: null });
              }),
              (a.clearAll = function () {
                a.setState({ filteredInfo: null, sortedInfo: null });
              }),
              (a.onChangeMonth = function (e) {
                a.setState({ month: e });
              }),
              (a.onFilterData = function () {
                Object(k.isEmpty)(a.state.month)
                  ? O.a.info({ message: "Ch\u01b0a ch\u1ecdn th\xe1ng" })
                  : a._onRefreshData(
                      a.state.month.format("MM"),
                      a.state.month.format("YYYY")
                    );
              }),
              (a.state = {
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
                    sorter: function (e, t) {
                      return e.stt - t.stt;
                    },
                    render: function (e, t) {
                      return {
                        props: {
                          style: { background: t.stt % 2 === 0 && "#fbfbfb" },
                        },
                        children: Object(T.jsx)("div", { children: e }),
                      };
                    },
                  },
                  {
                    title: "Employee Id",
                    dataIndex: "ma_nv",
                    key: "ma_nv",
                    fixed: "left",
                    sorter: function (e, t) {
                      return e.ma_nv.length - t.ma_nv.length;
                    },
                    ellipsis: { showTitle: !1 },
                    width: 160,
                  },
                  {
                    title: "Full Name",
                    dataIndex: "ho_ten",
                    key: "ho_ten",
                    filteredValue: null,
                    fixed: "left",
                    sorter: function (e, t) {
                      return e.ho_ten.length - t.ho_ten.length;
                    },
                    ellipsis: { showTitle: !1 },
                    width: 160,
                  },
                  {
                    title: "Email",
                    dataIndex: "email",
                    key: "email",
                    ellipsis: { showTitle: !1 },
                    width: 150,
                    sorter: function (e, t) {
                      return e.email.length - t.email.length;
                    },
                  },
                  {
                    title: "Bank Account Number ",
                    dataIndex: "stk",
                    key: "stk",
                    sorter: function (e, t) {
                      return e.stk.length - t.stk.length;
                    },
                    ellipsis: { showTitle: !1 },
                    width: 150,
                  },
                  {
                    title: "Bank Note",
                    key: "note_ngan_hang",
                    dataIndex: "note_ngan_hang",
                    sorter: function (e, t) {
                      return e.note_ngan_hang.length - t.note_ngan_hang.length;
                    },
                    ellipsis: { showTitle: !1 },
                    width: 165,
                  },
                  {
                    title: "Fixed Salary",
                    dataIndex: "luong_cung",
                    key: "luong_cung",
                    sorter: function (e, t) {
                      return e.luong_cung.length - t.luong_cung.length;
                    },
                    ellipsis: { showTitle: !1 },
                    width: 130,
                  },
                  {
                    title: "\u0110\u01a1n gi\xe1 Script 1000 t\u1eeb",
                    dataIndex: "don_gia_content_1k",
                    key: "don_gia_content_1k",
                    sorter: function (e, t) {
                      return (
                        e.don_gia_content_1k.length -
                        t.don_gia_content_1k.length
                      );
                    },
                    ellipsis: { showTitle: !1 },
                    width: 100,
                  },
                  {
                    title: "\u0110\u01a1n gi\xe1 Script 2000 t\u1eeb",
                    dataIndex: "don_gia_content_2k",
                    key: "don_gia_content_2k",
                    sorter: function (e, t) {
                      return (
                        e.don_gia_content_2k.length -
                        t.don_gia_content_2k.length
                      );
                    },
                    ellipsis: { showTitle: !1 },
                    width: 100,
                  },
                  {
                    title: "\u0110\u01a1n gi\xe1 Script 3000 t\u1eeb",
                    dataIndex: "don_gia_content_3k",
                    key: "don_gia_content_3k",
                    sorter: function (e, t) {
                      return (
                        e.don_gia_content_3k.length -
                        t.don_gia_content_3k.length
                      );
                    },
                    ellipsis: { showTitle: !1 },
                    width: 100,
                  },
                  {
                    title: "\u0110\u01a1n gi\xe1 Script 4000 t\u1eeb",
                    dataIndex: "don_gia_content_4k",
                    key: "don_gia_content_4k",
                    sorter: function (e, t) {
                      return (
                        e.don_gia_content_4k.length -
                        t.don_gia_content_4k.length
                      );
                    },
                    ellipsis: { showTitle: !1 },
                    width: 100,
                  },
                  {
                    title: "\u0110\u01a1n gi\xe1 Script 5000 t\u1eeb",
                    dataIndex: "don_gia_content_5k",
                    key: "don_gia_content_5k",
                    sorter: function (e, t) {
                      return (
                        e.don_gia_content_5k.length -
                        t.don_gia_content_5k.length
                      );
                    },
                    ellipsis: { showTitle: !1 },
                    width: 100,
                  },
                  {
                    title: "\u0110\u01a1n gi\xe1 Audio 1000 t\u1eeb",
                    dataIndex: "don_gia_audio",
                    key: "don_gia_audio",
                    sorter: function (e, t) {
                      return e.don_gia_audio.length - t.don_gia_audio.length;
                    },
                    ellipsis: { showTitle: !1 },
                    width: 120,
                  },
                  {
                    title: "\u0110\u01a1n gi\xe1 Audio 2000 t\u1eeb",
                    dataIndex: "don_gia_audio_2k",
                    key: "don_gia_audio_2k",
                    sorter: function (e, t) {
                      return (
                        e.don_gia_audio_2k.length - t.don_gia_audio_2k.length
                      );
                    },
                    ellipsis: { showTitle: !1 },
                    width: 120,
                  },
                  {
                    title: "\u0110\u01a1n gi\xe1 Audio 3000 t\u1eeb",
                    dataIndex: "don_gia_audio_3k",
                    key: "don_gia_audio_3k",
                    sorter: function (e, t) {
                      return (
                        e.don_gia_audio_3k.length - t.don_gia_audio_3k.length
                      );
                    },
                    ellipsis: { showTitle: !1 },
                    width: 120,
                  },
                  {
                    title: "\u0110\u01a1n gi\xe1 Audio 4000 t\u1eeb",
                    dataIndex: "don_gia_audio_4k",
                    key: "don_gia_audio_4k",
                    sorter: function (e, t) {
                      return (
                        e.don_gia_audio_4k.length - t.don_gia_audio_4k.length
                      );
                    },
                    ellipsis: { showTitle: !1 },
                    width: 120,
                  },
                  {
                    title: "\u0110\u01a1n gi\xe1 Audio 5000 t\u1eeb",
                    dataIndex: "don_gia_audio_5k",
                    key: "don_gia_audio_5k",
                    sorter: function (e, t) {
                      return (
                        e.don_gia_audio_5k.length - t.don_gia_audio_5k.length
                      );
                    },
                    ellipsis: { showTitle: !1 },
                    width: 120,
                  },
                  {
                    title: "\u0110\u01a1n gi\xe1 Video 1000 t\u1eeb",
                    dataIndex: "don_gia_video_1k",
                    key: "don_gia_video_1k",
                    sorter: function (e, t) {
                      return (
                        e.don_gia_video_1k.length - t.don_gia_video_1k.length
                      );
                    },
                    ellipsis: { showTitle: !1 },
                    width: 175,
                  },
                  {
                    title: "\u0110\u01a1n gi\xe1 Video 2000 t\u1eeb",
                    dataIndex: "don_gia_video_2k",
                    key: "don_gia_video_2k",
                    sorter: function (e, t) {
                      return (
                        e.don_gia_video_2k.length - t.don_gia_video_2k.length
                      );
                    },
                    ellipsis: { showTitle: !1 },
                    width: 175,
                  },
                  {
                    title: "\u0110\u01a1n gi\xe1 Video 3000 t\u1eeb",
                    dataIndex: "don_gia_video_3k",
                    key: "don_gia_video_3k",
                    sorter: function (e, t) {
                      return (
                        e.don_gia_video_3k.length - t.don_gia_video_3k.length
                      );
                    },
                    ellipsis: { showTitle: !1 },
                    width: 175,
                  },
                  {
                    title: "\u0110\u01a1n gi\xe1 Video 4000 t\u1eeb",
                    dataIndex: "don_gia_video_4k",
                    key: "don_gia_video_4k",
                    sorter: function (e, t) {
                      return (
                        e.don_gia_video_4k.length - t.don_gia_video_4k.length
                      );
                    },
                    ellipsis: { showTitle: !1 },
                    width: 175,
                  },
                  {
                    title: "\u0110\u01a1n gi\xe1 Video 5000 t\u1eeb",
                    dataIndex: "don_gia_video_5k",
                    key: "don_gia_video_5k",
                    sorter: function (e, t) {
                      return (
                        e.don_gia_video_5k.length - t.don_gia_video_5k.length
                      );
                    },
                    ellipsis: { showTitle: !1 },
                    width: 175,
                  },
                  {
                    title: "Bonus",
                    dataIndex: "thuong",
                    key: "thuong",
                    sorter: function (e, t) {
                      return e.thuong.length - t.thuong.length;
                    },
                    ellipsis: { showTitle: !1 },
                    width: 120,
                  },
                  {
                    title: "Ph\u1ea1t",
                    dataIndex: "phat",
                    key: "phat",
                    sorter: function (e, t) {
                      return e.phat.length - t.phat.length;
                    },
                    ellipsis: { showTitle: !1 },
                    width: 130,
                  },
                  {
                    title: "Contents 1000 words number",
                    key: "san_luong_content_1k",
                    dataIndex: "san_luong_content_1k",
                    sorter: function (e, t) {
                      return (
                        e.san_luong_content_1k.length -
                        t.san_luong_content_1k.length
                      );
                    },
                    ellipsis: { showTitle: !1 },
                    width: 150,
                  },
                  {
                    title: "Contents 2000 words number",
                    key: "san_luong_content_2k",
                    dataIndex: "san_luong_content_2k",
                    sorter: function (e, t) {
                      return (
                        e.san_luong_content_2k.length -
                        t.san_luong_content_2k.length
                      );
                    },
                    ellipsis: { showTitle: !1 },
                    width: 150,
                  },
                  {
                    title: "Contents 3000 words number",
                    key: "san_luong_content_3k",
                    dataIndex: "san_luong_content_3k",
                    sorter: function (e, t) {
                      return (
                        e.san_luong_content_3k.length -
                        t.san_luong_content_3k.length
                      );
                    },
                    ellipsis: { showTitle: !1 },
                    width: 150,
                  },
                  {
                    title: "Contents 4000 words number",
                    key: "san_luong_content_4k",
                    dataIndex: "san_luong_content_4k",
                    sorter: function (e, t) {
                      return (
                        e.san_luong_content_4k.length -
                        t.san_luong_content_4k.length
                      );
                    },
                    ellipsis: { showTitle: !1 },
                    width: 150,
                  },
                  {
                    title: "Contents 5000 words number",
                    key: "san_luong_content_5k",
                    dataIndex: "san_luong_content_5k",
                    sorter: function (e, t) {
                      return (
                        e.san_luong_content_5k.length -
                        t.san_luong_content_5k.length
                      );
                    },
                    ellipsis: { showTitle: !1 },
                    width: 150,
                  },
                  {
                    title: "Audio 1000 words Number",
                    dataIndex: "san_luong_audio",
                    key: "san_luong_audio",
                    sorter: function (e, t) {
                      return (
                        e.san_luong_audio.length - t.san_luong_audio.length
                      );
                    },
                    ellipsis: { showTitle: !1 },
                    width: 100,
                  },
                  {
                    title: "Audio 2000 words Number",
                    dataIndex: "san_luong_audio_2k",
                    key: "san_luong_audio_2k",
                    sorter: function (e, t) {
                      return (
                        e.san_luong_audio_2k.length -
                        t.san_luong_audio_2k.length
                      );
                    },
                    ellipsis: { showTitle: !1 },
                    width: 100,
                  },
                  {
                    title: "Audio 3000 words Number",
                    dataIndex: "san_luong_audio_3k",
                    key: "san_luong_audio_3k",
                    sorter: function (e, t) {
                      return (
                        e.san_luong_audio_3k.length -
                        t.san_luong_audio_3k.length
                      );
                    },
                    ellipsis: { showTitle: !1 },
                    width: 100,
                  },
                  {
                    title: "Audio 4000 words Number",
                    dataIndex: "san_luong_audio_4k",
                    key: "san_luong_audio_4k",
                    sorter: function (e, t) {
                      return (
                        e.san_luong_audio_4k.length -
                        t.san_luong_audio_4k.length
                      );
                    },
                    ellipsis: { showTitle: !1 },
                    width: 100,
                  },
                  {
                    title: "Audio 5000 words Number",
                    dataIndex: "san_luong_audio_5k",
                    key: "san_luong_audio_5k",
                    sorter: function (e, t) {
                      return (
                        e.san_luong_audio_5k.length -
                        t.san_luong_audio_5k.length
                      );
                    },
                    ellipsis: { showTitle: !1 },
                    width: 100,
                  },
                  {
                    title: "Videos 1000 words Number",
                    dataIndex: "san_luong_video_1k",
                    key: "san_luong_video_1k",
                    width: 120,
                    sorter: function (e, t) {
                      return (
                        e.san_luong_video_1k.length -
                        t.san_luong_video_1k.length
                      );
                    },
                    ellipsis: { showTitle: !1 },
                  },
                  {
                    title: "Videos 2000 words Number",
                    dataIndex: "san_luong_video_2k",
                    key: "san_luong_video_2k",
                    width: 120,
                    sorter: function (e, t) {
                      return (
                        e.san_luong_video_2k.length -
                        t.san_luong_video_2k.length
                      );
                    },
                    ellipsis: { showTitle: !1 },
                  },
                  {
                    title: "Videos 3000 words Number",
                    dataIndex: "san_luong_video_3k",
                    key: "san_luong_video_3k",
                    width: 120,
                    sorter: function (e, t) {
                      return (
                        e.san_luong_video_3k.length -
                        t.san_luong_video_3k.length
                      );
                    },
                    ellipsis: { showTitle: !1 },
                  },
                  {
                    title: "Videos 4000 words Number",
                    dataIndex: "san_luong_video_4k",
                    key: "san_luong_video_4k",
                    width: 120,
                    sorter: function (e, t) {
                      return (
                        e.san_luong_video_4k.length -
                        t.san_luong_video_4k.length
                      );
                    },
                    ellipsis: { showTitle: !1 },
                  },
                  {
                    title: "Videos 5000 words Number",
                    dataIndex: "san_luong_video_5k",
                    key: "san_luong_video_5k",
                    width: 120,
                    sorter: function (e, t) {
                      return (
                        e.san_luong_video_5k.length -
                        t.san_luong_video_5k.length
                      );
                    },
                    ellipsis: { showTitle: !1 },
                  },
                  {
                    title: "Note",
                    dataIndex: "note_khac",
                    key: "note_khac",
                    sorter: function (e, t) {
                      return e.note_khac.length - t.note_khac.length;
                    },
                    ellipsis: { showTitle: !1 },
                    width: 120,
                  },
                  {
                    title: "Total Salary",
                    dataIndex: "tong_luong",
                    key: "tong_luong",
                    sorter: function (e, t) {
                      return e.tong_luong.length - t.tong_luong.length;
                    },
                    ellipsis: { showTitle: !1 },
                    width: 150,
                  },
                ],
              }),
              a
            );
          }
          return (
            Object(h.a)(n, [
              {
                key: "componentDidMount",
                value: function () {
                  (this.mounted = !0),
                    this._onRefreshData(
                      C()().subtract(1, "months").format("MM"),
                      C()().format("YYYY")
                    );
                },
              },
              {
                key: "componentWillUnmount",
                value: function () {
                  this.mounted = !1;
                },
              },
              {
                key: "render",
                value: function () {
                  var e = this,
                    t = this.state,
                    n = t.column,
                    a = t.sortedInfo,
                    i = t.isLoading,
                    o = t.salary,
                    r = t.month,
                    c = Object(k.map)(n, function (t, n) {
                      switch (n) {
                        case 0:
                          return Object(b.a)(
                            Object(b.a)({}, t),
                            {},
                            {
                              sortOrder: Object(k.isEmpty)(a)
                                ? null
                                : "stt" === a.columnKey && a.order,
                              onHeaderCell: function (t) {
                                return {
                                  width: t.width,
                                  onResize: e.handleResize(n),
                                };
                              },
                            }
                          );
                        case 1:
                          return Object(b.a)(
                            Object(b.a)({}, t),
                            {},
                            {
                              sortOrder: Object(k.isEmpty)(a)
                                ? null
                                : "ma_nv" === a.columnKey && a.order,
                              onHeaderCell: function (t) {
                                return {
                                  width: t.width,
                                  onResize: e.handleResize(n),
                                };
                              },
                            }
                          );
                        case 2:
                          return Object(b.a)(
                            Object(b.a)({}, t),
                            {},
                            {
                              sortOrder: Object(k.isEmpty)(a)
                                ? null
                                : "ho_ten" === a.columnKey && a.order,
                              onHeaderCell: function (t) {
                                return {
                                  width: t.width,
                                  onResize: e.handleResize(n),
                                };
                              },
                            }
                          );
                        case 3:
                          return Object(b.a)(
                            Object(b.a)({}, t),
                            {},
                            {
                              sortOrder: Object(k.isEmpty)(a)
                                ? null
                                : "trang_thai" === a.columnKey && a.order,
                              onHeaderCell: function (t) {
                                return {
                                  width: t.width,
                                  onResize: e.handleResize(n),
                                };
                              },
                            }
                          );
                        case 4:
                          return Object(b.a)(
                            Object(b.a)({}, t),
                            {},
                            {
                              sortOrder: Object(k.isEmpty)(a)
                                ? null
                                : "email" === a.columnKey && a.order,
                              onHeaderCell: function (t) {
                                return {
                                  width: t.width,
                                  onResize: e.handleResize(n),
                                };
                              },
                            }
                          );
                        case 5:
                          return Object(b.a)(
                            Object(b.a)({}, t),
                            {},
                            {
                              sortOrder: Object(k.isEmpty)(a)
                                ? null
                                : "stk" === a.columnKey && a.order,
                              onHeaderCell: function (t) {
                                return {
                                  width: t.width,
                                  onResize: e.handleResize(n),
                                };
                              },
                            }
                          );
                        case 6:
                          return Object(b.a)(
                            Object(b.a)({}, t),
                            {},
                            {
                              sortOrder: Object(k.isEmpty)(a)
                                ? null
                                : "note_ngan_hang" === a.columnKey && a.order,
                              onHeaderCell: function (t) {
                                return {
                                  width: t.width,
                                  onResize: e.handleResize(n),
                                };
                              },
                            }
                          );
                        case 7:
                          return Object(b.a)(
                            Object(b.a)({}, t),
                            {},
                            {
                              sortOrder: Object(k.isEmpty)(a)
                                ? null
                                : "luong_cung" === a.columnKey && a.order,
                              onHeaderCell: function (t) {
                                return {
                                  width: t.width,
                                  onResize: e.handleResize(n),
                                };
                              },
                            }
                          );
                        case 8:
                          return Object(b.a)(
                            Object(b.a)({}, t),
                            {},
                            {
                              sortOrder: Object(k.isEmpty)(a)
                                ? null
                                : "don_gia_content_1k" === a.columnKey &&
                                  a.order,
                              onHeaderCell: function (t) {
                                return {
                                  width: t.width,
                                  onResize: e.handleResize(n),
                                };
                              },
                            }
                          );
                        case 9:
                          return Object(b.a)(
                            Object(b.a)({}, t),
                            {},
                            {
                              sortOrder: Object(k.isEmpty)(a)
                                ? null
                                : "don_gia_content_2k" === a.columnKey &&
                                  a.order,
                              onHeaderCell: function (t) {
                                return {
                                  width: t.width,
                                  onResize: e.handleResize(n),
                                };
                              },
                            }
                          );
                        case 10:
                          return Object(b.a)(
                            Object(b.a)({}, t),
                            {},
                            {
                              sortOrder: Object(k.isEmpty)(a)
                                ? null
                                : "don_gia_content_3k" === a.columnKey &&
                                  a.order,
                              onHeaderCell: function (t) {
                                return {
                                  width: t.width,
                                  onResize: e.handleResize(n),
                                };
                              },
                            }
                          );
                        case 11:
                          return Object(b.a)(
                            Object(b.a)({}, t),
                            {},
                            {
                              sortOrder: Object(k.isEmpty)(a)
                                ? null
                                : "don_gia_content_4k" === a.columnKey &&
                                  a.order,
                              onHeaderCell: function (t) {
                                return {
                                  width: t.width,
                                  onResize: e.handleResize(n),
                                };
                              },
                            }
                          );
                        case 12:
                          return Object(b.a)(
                            Object(b.a)({}, t),
                            {},
                            {
                              sortOrder: Object(k.isEmpty)(a)
                                ? null
                                : "don_gia_content_5k" === a.columnKey &&
                                  a.order,
                              onHeaderCell: function (t) {
                                return {
                                  width: t.width,
                                  onResize: e.handleResize(n),
                                };
                              },
                            }
                          );
                        case 13:
                          return Object(b.a)(
                            Object(b.a)({}, t),
                            {},
                            {
                              sortOrder: Object(k.isEmpty)(a)
                                ? null
                                : "don_gia_audio" === a.columnKey && a.order,
                              onHeaderCell: function (t) {
                                return {
                                  width: t.width,
                                  onResize: e.handleResize(n),
                                };
                              },
                            }
                          );
                        case 14:
                          return Object(b.a)(
                            Object(b.a)({}, t),
                            {},
                            {
                              sortOrder: Object(k.isEmpty)(a)
                                ? null
                                : "don_gia_audio_2k" === a.columnKey && a.order,
                              onHeaderCell: function (t) {
                                return {
                                  width: t.width,
                                  onResize: e.handleResize(n),
                                };
                              },
                            }
                          );
                        case 15:
                          return Object(b.a)(
                            Object(b.a)({}, t),
                            {},
                            {
                              sortOrder: Object(k.isEmpty)(a)
                                ? null
                                : "don_gia_audio_3k" === a.columnKey && a.order,
                              onHeaderCell: function (t) {
                                return {
                                  width: t.width,
                                  onResize: e.handleResize(n),
                                };
                              },
                            }
                          );
                        case 16:
                          return Object(b.a)(
                            Object(b.a)({}, t),
                            {},
                            {
                              sortOrder: Object(k.isEmpty)(a)
                                ? null
                                : "don_gia_audio_4k" === a.columnKey && a.order,
                              onHeaderCell: function (t) {
                                return {
                                  width: t.width,
                                  onResize: e.handleResize(n),
                                };
                              },
                            }
                          );
                        case 17:
                          return Object(b.a)(
                            Object(b.a)({}, t),
                            {},
                            {
                              sortOrder: Object(k.isEmpty)(a)
                                ? null
                                : "don_gia_audio_5k" === a.columnKey && a.order,
                              onHeaderCell: function (t) {
                                return {
                                  width: t.width,
                                  onResize: e.handleResize(n),
                                };
                              },
                            }
                          );
                        case 18:
                          return Object(b.a)(
                            Object(b.a)({}, t),
                            {},
                            {
                              sortOrder: Object(k.isEmpty)(a)
                                ? null
                                : "don_gia_video_1k" === a.columnKey && a.order,
                              onHeaderCell: function (t) {
                                return {
                                  width: t.width,
                                  onResize: e.handleResize(n),
                                };
                              },
                            }
                          );
                        case 19:
                          return Object(b.a)(
                            Object(b.a)({}, t),
                            {},
                            {
                              sortOrder: Object(k.isEmpty)(a)
                                ? null
                                : "don_gia_video_2k" === a.columnKey && a.order,
                              onHeaderCell: function (t) {
                                return {
                                  width: t.width,
                                  onResize: e.handleResize(n),
                                };
                              },
                            }
                          );
                        case 20:
                          return Object(b.a)(
                            Object(b.a)({}, t),
                            {},
                            {
                              sortOrder: Object(k.isEmpty)(a)
                                ? null
                                : "don_gia_video_3k" === a.columnKey && a.order,
                              onHeaderCell: function (t) {
                                return {
                                  width: t.width,
                                  onResize: e.handleResize(n),
                                };
                              },
                            }
                          );
                        case 21:
                          return Object(b.a)(
                            Object(b.a)({}, t),
                            {},
                            {
                              sortOrder: Object(k.isEmpty)(a)
                                ? null
                                : "don_gia_video_4k" === a.columnKey && a.order,
                              onHeaderCell: function (t) {
                                return {
                                  width: t.width,
                                  onResize: e.handleResize(n),
                                };
                              },
                            }
                          );
                        case 22:
                          return Object(b.a)(
                            Object(b.a)({}, t),
                            {},
                            {
                              sortOrder: Object(k.isEmpty)(a)
                                ? null
                                : "don_gia_video_5k" === a.columnKey && a.order,
                              onHeaderCell: function (t) {
                                return {
                                  width: t.width,
                                  onResize: e.handleResize(n),
                                };
                              },
                            }
                          );
                        case 23:
                          return Object(b.a)(
                            Object(b.a)({}, t),
                            {},
                            {
                              sortOrder: Object(k.isEmpty)(a)
                                ? null
                                : "thuong" === a.columnKey && a.order,
                              onHeaderCell: function (t) {
                                return {
                                  width: t.width,
                                  onResize: e.handleResize(n),
                                };
                              },
                            }
                          );
                        case 24:
                          return Object(b.a)(
                            Object(b.a)({}, t),
                            {},
                            {
                              sortOrder: Object(k.isEmpty)(a)
                                ? null
                                : "phat" === a.columnKey && a.order,
                              onHeaderCell: function (t) {
                                return {
                                  width: t.width,
                                  onResize: e.handleResize(n),
                                };
                              },
                            }
                          );
                        case 25:
                          return Object(b.a)(
                            Object(b.a)({}, t),
                            {},
                            {
                              sortOrder: Object(k.isEmpty)(a)
                                ? null
                                : "san_luong_content_1k" === a.columnKey &&
                                  a.order,
                              onHeaderCell: function (t) {
                                return {
                                  width: t.width,
                                  onResize: e.handleResize(n),
                                };
                              },
                            }
                          );
                        case 26:
                          return Object(b.a)(
                            Object(b.a)({}, t),
                            {},
                            {
                              sortOrder: Object(k.isEmpty)(a)
                                ? null
                                : "san_luong_content_2k" === a.columnKey &&
                                  a.order,
                              onHeaderCell: function (t) {
                                return {
                                  width: t.width,
                                  onResize: e.handleResize(n),
                                };
                              },
                            }
                          );
                        case 27:
                          return Object(b.a)(
                            Object(b.a)({}, t),
                            {},
                            {
                              sortOrder: Object(k.isEmpty)(a)
                                ? null
                                : "san_luong_content_3k" === a.columnKey &&
                                  a.order,
                              onHeaderCell: function (t) {
                                return {
                                  width: t.width,
                                  onResize: e.handleResize(n),
                                };
                              },
                            }
                          );
                        case 28:
                          return Object(b.a)(
                            Object(b.a)({}, t),
                            {},
                            {
                              sortOrder: Object(k.isEmpty)(a)
                                ? null
                                : "san_luong_content_4k" === a.columnKey &&
                                  a.order,
                              onHeaderCell: function (t) {
                                return {
                                  width: t.width,
                                  onResize: e.handleResize(n),
                                };
                              },
                            }
                          );
                        case 29:
                          return Object(b.a)(
                            Object(b.a)({}, t),
                            {},
                            {
                              sortOrder: Object(k.isEmpty)(a)
                                ? null
                                : "san_luong_content_5k" === a.columnKey &&
                                  a.order,
                              onHeaderCell: function (t) {
                                return {
                                  width: t.width,
                                  onResize: e.handleResize(n),
                                };
                              },
                            }
                          );
                        case 30:
                          return Object(b.a)(
                            Object(b.a)({}, t),
                            {},
                            {
                              sortOrder: Object(k.isEmpty)(a)
                                ? null
                                : "san_luong_audio" === a.columnKey && a.order,
                              onHeaderCell: function (t) {
                                return {
                                  width: t.width,
                                  onResize: e.handleResize(n),
                                };
                              },
                            }
                          );
                        case 31:
                          return Object(b.a)(
                            Object(b.a)({}, t),
                            {},
                            {
                              sortOrder: Object(k.isEmpty)(a)
                                ? null
                                : "san_luong_audio_2k" === a.columnKey &&
                                  a.order,
                              onHeaderCell: function (t) {
                                return {
                                  width: t.width,
                                  onResize: e.handleResize(n),
                                };
                              },
                            }
                          );
                        case 32:
                          return Object(b.a)(
                            Object(b.a)({}, t),
                            {},
                            {
                              sortOrder: Object(k.isEmpty)(a)
                                ? null
                                : "san_luong_audio_3k" === a.columnKey &&
                                  a.order,
                              onHeaderCell: function (t) {
                                return {
                                  width: t.width,
                                  onResize: e.handleResize(n),
                                };
                              },
                            }
                          );
                        case 33:
                          return Object(b.a)(
                            Object(b.a)({}, t),
                            {},
                            {
                              sortOrder: Object(k.isEmpty)(a)
                                ? null
                                : "san_luong_audio_4k" === a.columnKey &&
                                  a.order,
                              onHeaderCell: function (t) {
                                return {
                                  width: t.width,
                                  onResize: e.handleResize(n),
                                };
                              },
                            }
                          );
                        case 34:
                          return Object(b.a)(
                            Object(b.a)({}, t),
                            {},
                            {
                              sortOrder: Object(k.isEmpty)(a)
                                ? null
                                : "san_luong_audio_5k" === a.columnKey &&
                                  a.order,
                              onHeaderCell: function (t) {
                                return {
                                  width: t.width,
                                  onResize: e.handleResize(n),
                                };
                              },
                            }
                          );
                        case 35:
                          return Object(b.a)(
                            Object(b.a)({}, t),
                            {},
                            {
                              sortOrder: Object(k.isEmpty)(a)
                                ? null
                                : "san_luong_video_1k" === a.columnKey &&
                                  a.order,
                              onHeaderCell: function (t) {
                                return {
                                  width: t.width,
                                  onResize: e.handleResize(n),
                                };
                              },
                            }
                          );
                        case 36:
                          return Object(b.a)(
                            Object(b.a)({}, t),
                            {},
                            {
                              sortOrder: Object(k.isEmpty)(a)
                                ? null
                                : "san_luong_video_2k" === a.columnKey &&
                                  a.order,
                              onHeaderCell: function (t) {
                                return {
                                  width: t.width,
                                  onResize: e.handleResize(n),
                                };
                              },
                            }
                          );
                        case 37:
                          return Object(b.a)(
                            Object(b.a)({}, t),
                            {},
                            {
                              sortOrder: Object(k.isEmpty)(a)
                                ? null
                                : "san_luong_video_3k" === a.columnKey &&
                                  a.order,
                              onHeaderCell: function (t) {
                                return {
                                  width: t.width,
                                  onResize: e.handleResize(n),
                                };
                              },
                            }
                          );
                        case 38:
                          return Object(b.a)(
                            Object(b.a)({}, t),
                            {},
                            {
                              sortOrder: Object(k.isEmpty)(a)
                                ? null
                                : "san_luong_video_4k" === a.columnKey &&
                                  a.order,
                              onHeaderCell: function (t) {
                                return {
                                  width: t.width,
                                  onResize: e.handleResize(n),
                                };
                              },
                            }
                          );
                        case 39:
                          return Object(b.a)(
                            Object(b.a)({}, t),
                            {},
                            {
                              sortOrder: Object(k.isEmpty)(a)
                                ? null
                                : "san_luong_video_5k" === a.columnKey &&
                                  a.order,
                              onHeaderCell: function (t) {
                                return {
                                  width: t.width,
                                  onResize: e.handleResize(n),
                                };
                              },
                            }
                          );
                        case 40:
                          return Object(b.a)(
                            Object(b.a)({}, t),
                            {},
                            {
                              sortOrder: Object(k.isEmpty)(a)
                                ? null
                                : "note_khac" === a.columnKey && a.order,
                              onHeaderCell: function (t) {
                                return {
                                  width: t.width,
                                  onResize: e.handleResize(n),
                                };
                              },
                            }
                          );
                        case 41:
                          return Object(b.a)(
                            Object(b.a)({}, t),
                            {},
                            {
                              sortOrder: Object(k.isEmpty)(a)
                                ? null
                                : "tong_luong" === a.columnKey && a.order,
                              onHeaderCell: function (t) {
                                return {
                                  width: t.width,
                                  onResize: e.handleResize(n),
                                };
                              },
                            }
                          );
                        default:
                          return Object(b.a)(
                            Object(b.a)({}, t),
                            {},
                            {
                              onHeaderCell: function (t) {
                                return {
                                  width: t.width,
                                  onResize: e.handleResize(n),
                                };
                              },
                            }
                          );
                      }
                    });
                  return Object(T.jsxs)("div", {
                    children: [
                      Object(T.jsxs)("div", {
                        style: { display: "flex", marginLeft: 10 },
                        children: [
                          Object(T.jsx)(V.a, {
                            ref: this.dateRef,
                            picker: "month",
                            inputReadOnly: !0,
                            style: {
                              height: 36,
                              width: "30%",
                              marginBottom: 10,
                            },
                            value: r,
                            format: ie,
                            placeholder: "Ch\u1ecdn th\xe1ng",
                            onChange: this.onChangeMonth,
                          }),
                          Object(T.jsx)(m.a, {
                            type: "primary",
                            style: {
                              height: 36,
                              marginLeft: 10,
                              borderRadius: 3,
                            },
                            icon: Object(T.jsx)(Kt.a, {}),
                            className: "buttonPrimary",
                            onClick: Object(k.debounce)(function () {
                              return e.onFilterData();
                            }),
                            children: "L\u1ea4Y D\u1eee LI\u1ec6U",
                          }),
                        ],
                      }),
                      Object(T.jsx)("div", {
                        style: {
                          display: "flex",
                          marginBottom: 10,
                          justifyContent: "flex-end",
                        },
                        children: Object(T.jsx)(m.a, {
                          type: "primary",
                          style: {
                            height: 36,
                            marginRight: 10,
                            borderRadius: 3,
                          },
                          onClick: this.onExportExcell,
                          icon: Object(T.jsx)(Z.a, {}),
                          children: "Excel",
                        }),
                      }),
                      Object(T.jsx)(F.a, {
                        loading: i,
                        size: "middle",
                        bordered: !0,
                        onChange: this.handleChange,
                        components: this.components,
                        style: { marginBottom: 15 },
                        rowClassName: function (e, t) {
                          if (t % 2 !== 0) return "rowBackgroundColor";
                        },
                        scroll: { x: 1500, y: 400 },
                        dataSource: o,
                        columns: c,
                        rowKey: "id",
                        pagination: !1,
                        sticky: !0,
                      }),
                    ],
                  });
                },
              },
            ]),
            n
          );
        })(a.Component),
        bn = g.a.TabPane,
        jn = [
          {
            value: "salary_current",
            label: "Current Salary Report",
            icon: Object(T.jsx)(ln.a, {}),
          },
          {
            value: "salary_old",
            label: "Old Salary Report",
            icon: Object(T.jsx)(sn.a, {}),
          },
        ],
        gn = (function (e) {
          Object(_.a)(n, e);
          var t = Object(f.a)(n);
          function n(e) {
            var a;
            return (
              Object(u.a)(this, n),
              ((a = t.call(this, e))._onRefreshData = function () {
                console.log("Leu leu");
              }),
              (a._onRefresh = function () {
                "salary_old" === a.state.valueOptions &&
                  a.oldRef.current._onRefreshData(
                    C()().subtract(1, "months").format("MM")
                  );
              }),
              (a.onChangeSelectOption = function (e) {
                a.setState({ valueOptions: e }, function () {
                  a._onRefresh();
                });
              }),
              (a._renderTab = function (e) {
                switch (e) {
                  case "salary_current":
                    return Object(T.jsx)(hn, {
                      data: a.props.data,
                      ref: a.currentRef,
                    });
                  case "salary_old":
                    return Object(T.jsx)(fn, { ref: a.oldRef });
                  default:
                    return null;
                }
              }),
              (a.state = { valueOptions: Object(k.get)(jn[0], "value") }),
              (a.currentRef = i.a.createRef()),
              (a.oldRef = i.a.createRef()),
              a
            );
          }
          return (
            Object(h.a)(n, [
              {
                key: "render",
                value: function () {
                  var e = this,
                    t = this.state.valueOptions;
                  return Object(T.jsx)("div", {
                    children: Object(T.jsx)(g.a, {
                      onChange: this.onChangeSelectOption,
                      activeKey: Object(k.get)(t),
                      style: {
                        justifyContent: "center",
                        display: "flex",
                        alignSelf: "center",
                        color: "#238c31",
                      },
                      size: "large",
                      type: "card",
                      children: Object(k.map)(jn, function (t) {
                        return Object(T.jsx)(
                          bn,
                          {
                            tab: Object(T.jsxs)("span", {
                              children: [t.icon, t.label],
                            }),
                            children: e._renderTab(t.value),
                          },
                          t.value
                        );
                      }),
                    }),
                  });
                },
              },
            ]),
            n
          );
        })(a.Component),
        pn = n(449),
        On = n(236),
        mn = (a.Component, g.a.TabPane),
        yn = [
          {
            value: "salary",
            label: "Salary Report",
            icon: Object(T.jsx)(Tt.a, {}),
          },
          {
            value: "report",
            label: "Report Details",
            icon: Object(T.jsx)(It.a, {}),
          },
        ],
        vn = (function (e) {
          Object(_.a)(n, e);
          var t = Object(f.a)(n);
          function n(e) {
            var a;
            return (
              Object(u.a)(this, n),
              ((a = t.call(this, e))._onRefreshData = function () {
                console.log("Leu leu");
              }),
              (a.onChangeSelectOption = function (e) {
                a.setState({ valueOptions: e });
              }),
              (a._renderTab = function (e) {
                switch (e) {
                  case "salary":
                    return Object(T.jsx)(gn, { data: a.props.data });
                  case "report":
                    return Object(T.jsx)(cn, {});
                  default:
                    return null;
                }
              }),
              (a.state = { valueOptions: Object(k.get)(yn[0], "value") }),
              a
            );
          }
          return (
            Object(h.a)(n, [
              {
                key: "render",
                value: function () {
                  var e = this,
                    t = this.state.valueOptions;
                  return Object(T.jsx)("div", {
                    children: Object(T.jsx)(g.a, {
                      onChange: this.onChangeSelectOption,
                      activeKey: Object(k.get)(t),
                      style: {
                        justifyContent: "center",
                        display: "flex",
                        alignSelf: "center",
                        color: "#238c31",
                      },
                      size: "large",
                      type: "card",
                      children: Object(k.map)(yn, function (t) {
                        return Object(T.jsx)(
                          mn,
                          {
                            tab: Object(T.jsxs)("span", {
                              children: [t.icon, t.label],
                            }),
                            children: e._renderTab(t.value),
                          },
                          t.value
                        );
                      }),
                    }),
                  });
                },
              },
            ]),
            n
          );
        })(a.Component),
        kn = g.a.TabPane,
        wn = p.a.Title,
        Cn = function (e) {
          var t = e.onResize,
            n = e.width,
            a = Object(j.a)(e, ["onResize", "width"]);
          return n
            ? Object(T.jsx)(x.Resizable, {
                width: n,
                height: 0,
                handle: Object(T.jsx)("span", {
                  className: "react-resizable-handle",
                  onClick: function (e) {
                    e.stopPropagation();
                  },
                }),
                onResize: t,
                draggableOpts: { enableUserSelectHack: !1 },
                children: Object(T.jsx)("th", Object(b.a)({}, a)),
              })
            : Object(T.jsx)("th", Object(b.a)({}, a));
        },
        xn = (function (e) {
          Object(_.a)(n, e);
          var t = Object(f.a)(n);
          function n(e) {
            var a;
            return (
              Object(u.a)(this, n),
              ((a = t.call(this, e)).components = { header: { cell: Cn } }),
              (a._onRefresh = function () {
                "admin" === a.state.valueOptions
                  ? a.adminRef.current._onRefreshData()
                  : "CW" === a.state.valueOptions
                  ? a.cwRef.current._onRefreshData()
                  : "CM" === a.state.valueOptions
                  ? a.cmRef.current._onRefreshData()
                  : "AM" === a.state.valueOptions
                  ? a.amRef.current._onRefreshData()
                  : "AC" === a.state.valueOptions
                  ? a.acRef.current._onRefreshData()
                  : "VM" === a.state.valueOptions
                  ? a.vmRef.current._onRefreshData()
                  : "VE" === a.state.valueOptions
                  ? a.veRef.current._onRefreshData()
                  : "activity" === a.state.valueOptions
                  ? a.activityRef.current._onRefreshData()
                  : "management" === a.state.valueOptions &&
                    a.adminManagementRef.current._onRefreshData();
              }),
              (a.onRefresh = function () {
                var e = localStorage.getItem("userInfo");
                v.a
                  .get(
                    "https://sheets.googleapis.com/v4/spreadsheets/1r3xAM24KMiu52l_z1-XdIQ7D-V8wNiAhro-3Z4ZUg6Q/values:batchGet?ranges=Sheet2&majorDimension=ROWS&key=AIzaSyByXzekuWCb4pI-ZTD7yEAGVYV0224Mc6Q"
                  )
                  .then(function (e) {
                    for (
                      var t = [],
                        n = [],
                        i = [],
                        o = [],
                        r = [],
                        c = [],
                        l = [],
                        s = [],
                        u = [],
                        h = [],
                        _ = 1;
                      _ < e.data.valueRanges[0].values.length;
                      _++
                    )
                      (h = [].concat(Object(d.a)(h), [
                        e.data.valueRanges[0].values[_][le],
                      ])),
                        (t = [].concat(Object(d.a)(t), [
                          e.data.valueRanges[0].values[_][se],
                        ])),
                        (n = [].concat(Object(d.a)(n), [
                          e.data.valueRanges[0].values[_][de],
                        ])),
                        (i = [].concat(Object(d.a)(i), [
                          e.data.valueRanges[0].values[_][ue],
                        ])),
                        (o = [].concat(Object(d.a)(o), [
                          e.data.valueRanges[0].values[_][he],
                        ])),
                        (r = [].concat(Object(d.a)(r), [
                          e.data.valueRanges[0].values[_][_e],
                        ])),
                        (c = [].concat(Object(d.a)(c), [
                          e.data.valueRanges[0].values[_][fe],
                        ])),
                        (l = [].concat(Object(d.a)(l), [
                          e.data.valueRanges[0].values[_][be],
                        ])),
                        (s = [].concat(Object(d.a)(s), [
                          e.data.valueRanges[0].values[_][je],
                        ])),
                        (u = [].concat(Object(d.a)(u), [
                          e.data.valueRanges[0].values[_][ge],
                        ]));
                    for (
                      var f = localStorage.getItem("id"), b = [], j = pe;
                      j < Oe;
                      j++
                    )
                      Object(k.isEmpty)(f) ||
                        (1 ==
                          e.data.valueRanges[0].values[parseInt(f) + 1][j] &&
                          (b = [].concat(Object(d.a)(b), [
                            {
                              value: e.data.valueRanges[0].values[0][j],
                              text: e.data.valueRanges[0].values[0][j],
                            },
                          ])));
                    var g = [];
                    f &&
                      (1 == r[f] &&
                        g.push({
                          value: "CW",
                          label: "Content Writer",
                          icon: Object(T.jsx)(wt.a, {}),
                        }),
                      1 == o[f] &&
                        g.push({
                          value: "CM",
                          label: "Content Management",
                          icon: Object(T.jsx)(Ct.a, {}),
                        }),
                      1 == l[f] &&
                        g.push({
                          value: "AC",
                          label: "Audio Composer",
                          icon: Object(T.jsx)(xt.a, {}),
                        }),
                      1 == c[f] &&
                        g.push({
                          value: "AM",
                          label: "Audio Management",
                          icon: Object(T.jsx)(St.a, {}),
                        }),
                      1 == u[f] &&
                        g.push({
                          value: "VE",
                          label: "Video Editor",
                          icon: Object(T.jsx)(Rt.a, {}),
                        }),
                      1 == s[f] &&
                        g.push({
                          value: "VM",
                          label: "Video Management",
                          icon: Object(T.jsx)(Yt.a, {}),
                        }),
                      1 != i[f] ||
                        Object(k.includes)(
                          Le,
                          e.data.valueRanges[0].values[parseInt(f) + 1][re]
                        ) ||
                        (g = [
                          {
                            value: "admin",
                            label: "Admin",
                            icon: Object(T.jsx)(Dt.a, {}),
                          },
                        ].concat(Object(d.a)(g), [
                          {
                            value: "activity",
                            label: "Activity Log",
                            icon: Object(T.jsx)(zt.a, {}),
                          },
                        ])),
                      1 == i[f] &&
                        Object(k.includes)(
                          Le,
                          e.data.valueRanges[0].values[parseInt(f) + 1][re]
                        ) &&
                        (g = [
                          {
                            value: "admin",
                            label: "Admin",
                            icon: Object(T.jsx)(Dt.a, {}),
                          },
                        ].concat(Object(d.a)(g), [
                          {
                            value: "activity",
                            label: "Activity Log",
                            icon: Object(T.jsx)(zt.a, {}),
                          },
                        ]))),
                      a.setState(
                        {
                          dataExcel: e.data.valueRanges[0].values,
                          username: t,
                          password: n,
                          admin: i,
                          cm: o,
                          cw: r,
                          am: c,
                          ac: l,
                          vm: s,
                          ve: u,
                          options: g,
                          valueOptions: g[0],
                          listContentCode: b,
                          id: JSON.parse(f),
                          status: h,
                        },
                        function () {
                          a._onRefresh();
                        }
                      );
                  }),
                  e &&
                    (a.setState({ isLogin: !0, userInfo: e }),
                    v.a.get("".concat(K, "/tenticker")).then(function (e) {
                      a.setState({
                        dataSource: e.data.data,
                        dataChangeUpdate: e.data.data,
                      });
                    }),
                    v.a.get("".concat(K, "/activity")).then(function (e) {
                      a.setState({
                        activity: e.data.data,
                        activityChangeUpdate: e.data.data,
                      });
                    }));
              }),
              (a.onUpdateActivity = function (e) {
                v.a.get("".concat(K, "/activity")).then(function (t) {
                  var n = {
                    data: [null, C()().format("YYYY-MM-DD HH:mm:ss")].concat(
                      Object(d.a)(e)
                    ),
                  };
                  v.a.post("".concat(K, "/activity/add"), n).then(function (e) {
                    v.a.get("".concat(K, "/activity")).then(function (e) {
                      a.setState({
                        activity: e.data.data,
                        activityChangeUpdate: e.data.data,
                      });
                    });
                  }),
                    a.setState({
                      activity: t.data.data,
                      activityChangeUpdate: t.data.data,
                    });
                });
              }),
              (a.onLoginSuccess = function (e, t) {
                O.a.success({
                  message: "\u0110\u0103ng nh\u1eadp th\xe0nh c\xf4ng",
                  style: { backgroundColor: "#f5fff8" },
                });
                var n = [
                  "\u0110\u0103ng nh\u1eadp",
                  a.state.dataExcel[e + 1][me],
                ];
                a.onUpdateActivity(n),
                  a.setState({ isLogin: !0, id: e, userInfo: t.username });
              }),
              (a.onChangeSelectOption = function (e) {
                a.setState({ valueOptions: e }, function () {
                  a._onRefresh();
                });
              }),
              (a._renderTab = function (e) {
                switch (e) {
                  case "admin":
                    return Object(T.jsx)(Xe, {
                      data: a.state.dataExcel,
                      listContentCode: a.state.listContentCode,
                      ref: a.adminRef,
                      id: a.state.id,
                    });
                  case "CW":
                    return Object(T.jsx)($e, {
                      data: a.state.dataExcel,
                      listContentCode: a.state.listContentCode,
                      id: a.state.id,
                      ref: a.cwRef,
                    });
                  case "CM":
                    return Object(T.jsx)(at, {
                      data: a.state.dataExcel,
                      listContentCode: a.state.listContentCode,
                      ref: a.cmRef,
                      id: a.state.id,
                    });
                  case "AC":
                    return Object(T.jsx)(lt, {
                      data: a.state.dataExcel,
                      listContentCode: a.state.listContentCode,
                      id: a.state.id,
                      ref: a.acRef,
                    });
                  case "AM":
                    return Object(T.jsx)(ht, {
                      data: a.state.dataExcel,
                      listContentCode: a.state.listContentCode,
                      ref: a.amRef,
                      id: a.state.id,
                    });
                  case "VE":
                    return Object(T.jsx)(bt, {
                      data: a.state.dataExcel,
                      listContentCode: a.state.listContentCode,
                      ref: a.veRef,
                      id: a.state.id,
                    });
                  case "VM":
                    return Object(T.jsx)(Ot, {
                      data: a.state.dataExcel,
                      listContentCode: a.state.listContentCode,
                      ref: a.vmRef,
                      id: a.state.id,
                    });
                  case "activity":
                    return Object(T.jsx)(kt, {
                      data: a.state.dataExcel,
                      listContentCode: a.state.listContentCode,
                      ref: a.activityRef,
                      id: a.state.id,
                    });
                  case "management":
                    return Object(T.jsx)(vn, {
                      data: a.state.dataExcel,
                      listContentCode: a.state.listContentCode,
                      ref: a.adminManagementRef,
                      id: a.state.id,
                    });
                  default:
                    return null;
                }
              }),
              (a.state = {
                items: [],
                error: null,
                dataSource: [],
                editingKey: "",
                dataChangeUpdate: [],
                dataExcel: [],
                isLogin: !1,
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
              }),
              (a.adminRef = i.a.createRef()),
              (a.cwRef = i.a.createRef()),
              (a.cmRef = i.a.createRef()),
              (a.amRef = i.a.createRef()),
              (a.acRef = i.a.createRef()),
              (a.vmRef = i.a.createRef()),
              (a.activityRef = i.a.createRef()),
              (a.veRef = i.a.createRef()),
              (a.adminManagementRef = i.a.createRef()),
              a
            );
          }
          return (
            Object(h.a)(n, [
              {
                key: "componentDidMount",
                value: (function () {
                  var e = Object(s.a)(
                    l.a.mark(function e() {
                      return l.a.wrap(
                        function (e) {
                          for (;;)
                            switch ((e.prev = e.next)) {
                              case 0:
                                this.onRefresh();
                              case 1:
                              case "end":
                                return e.stop();
                            }
                        },
                        e,
                        this
                      );
                    })
                  );
                  return function () {
                    return e.apply(this, arguments);
                  };
                })(),
              },
              {
                key: "render",
                value: function () {
                  var e = this,
                    t = this.state,
                    n = t.isLogin,
                    a = t.username,
                    i = t.password,
                    o = t.roleCode,
                    r = t.userInfo,
                    c = t.options,
                    l = t.valueOptions,
                    s = t.status;
                  return Object(T.jsx)("div", {
                    style: { margin: 0, height: "100%" },
                    children: n
                      ? Object(T.jsxs)("div", {
                          children: [
                            Object(T.jsxs)("div", {
                              style: {
                                display: "flex",
                                flexDirection: "row",
                                alignItems: "center",
                                justifyContent: "space-between",
                              },
                              children: [
                                Object(T.jsxs)("div", {
                                  style: {
                                    display: "flex",
                                    flexDirection: "row",
                                    alignItems: "center",
                                  },
                                  children: [
                                    Object(T.jsx)("img", {
                                      src: U,
                                      alt: "Logo",
                                      width: 50,
                                      height: 50,
                                      style: { margin: 20, marginRight: 10 },
                                    }),
                                    Object(T.jsx)(wn, {
                                      level: 4,
                                      style: {
                                        color: "#238c31",
                                        margin: 20,
                                        fontWeight: 700,
                                        marginLeft: 0,
                                      },
                                      children: "EBE MEDIA",
                                    }),
                                  ],
                                }),
                                Object(T.jsxs)("div", {
                                  style: {
                                    display: "flex",
                                    flexDirection: "row",
                                    alignItems: "center",
                                  },
                                  children: [
                                    Object(T.jsxs)(wn, {
                                      level: 5,
                                      style: { margin: 20, color: "#238c31" },
                                      children: ["User: ", r],
                                    }),
                                    Object(T.jsx)(m.a, {
                                      className: "buttonPrimary",
                                      type: "primary",
                                      icon: Object(T.jsx)(Et.a, {}),
                                      style: {
                                        color: "white",
                                        backgroundColor: "red",
                                        fontWeight: "bold",
                                        borderRadius: 5,
                                        borderColor: "red",
                                        margin: 20,
                                      },
                                      onClick: function () {
                                        ee()({
                                          title: "Th\xf4ng b\xe1o",
                                          content:
                                            "B\u1ea1n c\xf3 ch\u1eafc mu\u1ed1n \u0111\u0103ng xu\u1ea5t",
                                          okCancel: function () {},
                                          onOk: function () {
                                            localStorage.clear("userInfo"),
                                              e.setState(
                                                { isLogin: !1 },
                                                function () {
                                                  O.a.success({
                                                    message:
                                                      "\u0110\u0103ng xu\u1ea5t th\xe0nh c\xf4ng",
                                                    style: {
                                                      backgroundColor:
                                                        "#f5fff8",
                                                    },
                                                  });
                                                  var t = [
                                                    "\u0110\u0103ng xu\u1ea5t",
                                                    e.state.dataExcel[
                                                      e.state.id + 1
                                                    ][me],
                                                  ];
                                                  e.onUpdateActivity(t);
                                                }
                                              );
                                          },
                                        });
                                      },
                                      children: "\u0110\u0103ng xu\u1ea5t",
                                    }),
                                  ],
                                }),
                              ],
                            }),
                            Object(T.jsx)(g.a, {
                              onChange: this.onChangeSelectOption,
                              activeKey: Object(k.get)(l),
                              style: {
                                justifyContent: "center",
                                display: "flex",
                                alignSelf: "center",
                                color: "#238c31",
                              },
                              size: "large",
                              type: "card",
                              children: Object(k.map)(c, function (t) {
                                return Object(T.jsx)(
                                  kn,
                                  {
                                    tab: Object(T.jsxs)("span", {
                                      children: [t.icon, t.label],
                                    }),
                                    children: e._renderTab(t.value),
                                  },
                                  t.value
                                );
                              }),
                            }),
                          ],
                        })
                      : Object(T.jsx)(H, {
                          onLoginSuccess: this.onLoginSuccess,
                          onRefresh: this.onRefresh,
                          username: a,
                          password: i,
                          roleCode: o,
                          status: s,
                        }),
                  });
                },
              },
            ]),
            n
          );
        })(a.Component),
        Sn = function (e) {
          e &&
            e instanceof Function &&
            n
              .e(3)
              .then(n.bind(null, 458))
              .then(function (t) {
                var n = t.getCLS,
                  a = t.getFID,
                  i = t.getFCP,
                  o = t.getLCP,
                  r = t.getTTFB;
                n(e), a(e), i(e), o(e), r(e);
              });
        };
      n(426);
      r.a.render(Object(T.jsx)(xn, {}), document.getElementById("root")), Sn();
    },
  },
  [[427, 1, 2]],
]);
//# sourceMappingURL=main.ff7a922d.chunk.js.map
