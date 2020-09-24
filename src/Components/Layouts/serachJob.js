import React, { useState, useContext } from "react";
import { MyContext } from '../Context/stateManager';
import { Form, Input, Button, Checkbox, Row, Col } from "antd";
import { SearchOutlined, InsertRowBelowOutlined } from "@ant-design/icons";


export default function SerachJob() {

  const {  getParams } = useContext(MyContext);

  const [desc, setDesc] = useState("");
  const [location, setlocation] = useState("");
  const [fulltime, setfulltime] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("desc --->", desc);
    console.log("fulltime --->", fulltime);
    console.log("location --->", location);

    let params = {
      description: desc,
      location : location,
      full_time: fulltime
    }

    getParams(params)

    setfulltime(false)
    setlocation('')
    setDesc('')
  };

  return (
    <Form
      name="normal_login"
      className="search-form"
      initialValues={{ remember: true }}
      //   layout='inline'
     onSubmitCapture={handleSubmit}
    >
      <Row>
        <Col span={16}>
          <Form.Item
            name="description"
            rules={[
              { required: true, message: "Please input your Job description!" },
            ]}
          >
            <Input
              name={desc}
              prefix={<SearchOutlined className="site-form-item-icon" />}
              placeholder="Job Description"
              onChange={(e) => setDesc(e.target.value)}
            />
          </Form.Item>
        </Col>
      </Row>
      <Row>
        <Col span={10}>
          <Form.Item
            name="location"
            rules={[{ required: true, message: "Please input your Location!" }]}
          >
            <Input
              name={location}
              prefix={
                <InsertRowBelowOutlined className="site-form-item-icon" />
              }
              placeholder="Location"
              onChange={(e) => setlocation(e.target.value)}
            />
          </Form.Item>
        </Col>
        <Col offset={2}>
          <Form.Item>
            <Form.Item
              name="checkbox"
              valuePropName="checked"
              checked={fulltime} 
              noStyle
            >
              <Checkbox onChange={e => setfulltime(!fulltime)} >Full Time</Checkbox>
            </Form.Item>
          </Form.Item>
        </Col>
      </Row>
      <Row>
        <Col span={12}>
          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              className="search-form-button"
              size='large'
              style={{width:'133%'}}
            >
              Search Job
            </Button>
          </Form.Item>
        </Col>
      </Row>
    </Form>
  );
}
