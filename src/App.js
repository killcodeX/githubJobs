import React from "react";
import "./App.css";
import "antd/dist/antd.css";
import JobSearch from "./Components/Layouts/serachJob";
import JobResults from "./Components/Layouts/Jobs";
import { Layout, Row, Col, Divider } from "antd";
import {
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from "@ant-design/icons";

const { Footer } = Layout;

function App() {
  return (
    <>
      <Layout className="layoutconfig">
        <div className="bg-background">
          <img alt='background' src='https://gw.alipayobjects.com/mdn/rms_08e378/afts/img/A*kJM2Q6uPXCAAAAAAAAAAAABkARQnAQ'/>
        </div>
        <Row>
          <Col span={24}>
            <h1 className="title">GitHub Jobs</h1>
          </Col>
        </Row>
        <Row>
          <Col span={12} offset={8}>
            <JobSearch />
          </Col>
        </Row>
        <Row>
          <Col span={12} offset={6}>
            <Divider/>
          </Col>
        </Row>
        <JobResults/>
      </Layout>
      <Layout>
        <Footer style={{ textAlign: "center", zIndex: "1" }}>
          GitHub Job Project ©2018 Created by <a href='https://aaquib.netlify.app' target="_blank" rel="noopener noreferrer">Aaquib Ahmed</a>
        </Footer>
      </Layout>
    </>
  );
}

export default App;
