import React from "react";
import { Form, Input, Button, Checkbox } from "antd";
import { SearchOutlined} from "@ant-design/icons";

export default function SerachJob() {
  return (
    <Form
      name="normal_login"
      className="search-form"
      initialValues={{ remember: true }}
    //   layout='inline'
    //   onFinish={onFinish}
    >
      <Form.Item
        name="username"
        rules={[{ required: true, message: "Please input your designation!" }]}
      >
        <Input
          prefix={<SearchOutlined className="site-form-item-icon" />}
          placeholder="Search Job"
        />
      </Form.Item>
      {/* <Form.Item>
        <Form.Item name="remember" valuePropName="checked" noStyle>
          <Checkbox>Remember me</Checkbox>
        </Form.Item>
      </Form.Item> */}
    </Form>
  );
}
