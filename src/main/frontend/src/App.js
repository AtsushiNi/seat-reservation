import React from "react";
import { BrowserRouter, Routes, Route, Link, useLocation } from "react-router-dom";
import { Menu, Layout } from "antd";
import "./App.css";
import SeatMapPage from "./pages/SeatMapPage";
import AdminPage from "./pages/AdminPage";

const { Header, Content } = Layout;

const AppInner = () => {
  const location = useLocation();

  return (
    <>
      <Layout>
        <Header style={{ display: "flex", alignItems: "center" }}>
          <div style={{ lineHeight: 32, color: "white", fontSize: 16 }}>
            座席予約ツール
          </div>
          <Menu
            theme="dark"
            mode="horizontal"
            selectedKeys={[location.pathname]}
            style={{ flex: 1, minWidth: 0, justifyContent: "flex-end" }}
          >
            <Menu.Item key="/">
              <Link to="/">マップ</Link>
            </Menu.Item>
            <Menu.Item key="/search">
              <Link to="/search">予約情報検索</Link>
            </Menu.Item>
            <Menu.Item key="/admin">
              <Link to="/admin">管理画面</Link>
            </Menu.Item>
          </Menu>
        </Header>
        <Content>
          <Routes>
            <Route path="/" element={<SeatMapPage />} />
            <Route path="/admin" element={<AdminPage />} />
          </Routes>
        </Content>
      </Layout>
    </>
  );
}

const App = () => (
  <BrowserRouter>
    <AppInner />
  </BrowserRouter>
);

export default App;
