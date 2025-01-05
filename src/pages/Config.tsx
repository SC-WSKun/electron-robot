import Header from "@/components/Header/Header";
import {
  Button,
  Checkbox,
  Form,
  FormProps,
  Input,
  notification,
  Space,
} from "antd";

import api from '@/utils/api'

type FieldType = {
  ip?: string;
  remember?: string;
};

function Config() {
  const [notificate, contextHolder] = notification.useNotification();

  const openNotification = (title: string, description: string) => {
    notificate.info({
      message: title,
      description: description,
      placement: "bottom",
    });
  };
  const onFinish: FormProps<FieldType>["onFinish"] = (values) => {
      api.defaults.baseURL = values.ip;
      openNotification("Success", "Config saved successfully");
  };

  const onFinishFailed: FormProps<FieldType>["onFinishFailed"] = (
    errorInfo
  ) => {
    openNotification("Error", "errorInfo");
  };

  const onClear = () => {
    console.log("Clear");
  };

  return (
    <>
      {contextHolder}
      <div className="app-container config">
        <div style={{ marginTop: "1rem" }}>
          <Header title="Config" isHomePage={false} />
        </div>
        <Form
          name="robot"
          labelCol={{ span: 8 }}
          wrapperCol={{ span: 16 }}
          style={{ maxWidth: 600 }}
          initialValues={{ remember: true }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
        >
          <Form.Item<FieldType>
            label="IP"
            name="ip"
            rules={[{ required: true, message: "Please input your robot IP!" }]}
          >
            <Input />
          </Form.Item>

          <Form.Item>
            <Space>
              <Button type="primary" htmlType="submit">
                Save
              </Button>
              <Button htmlType="reset" onClick={onClear}>
                Clear
              </Button>
            </Space>
          </Form.Item>
        </Form>
      </div>
    </>
  );
}

export default Config;
