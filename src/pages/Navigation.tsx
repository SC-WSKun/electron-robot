import { getLabelList, navigateToLabel } from "@/api/label";
import { useEffect, useState } from "react";
import Header from "@/components/Header/Header";
import { Card, notification } from "antd";
import { NotificationPlacement } from "antd/es/notification/interface";
import "./style/Navigation.less";
const { Meta } = Card;

const mockData = [
  {
    label_name: "label11111111111111",
    pose: {
      position: {
        x: 0,
        y: 0,
        z: 0,
      },
    },
  },
  {
    label_name: "label1",
    pose: {
      position: {
        x: 0,
        y: 0,
        z: 0,
      },
    },
  },
  {
    label_name: "label2",
    pose: {
      position: {
        x: 0,
        y: 0,
        z: 0,
      },
    },
  },
  {
    label_name: "label3",
    pose: {
      position: {
        x: 0,
        y: 0,
        z: 0,
      },
    },
  },
  {
    label_name: "label4",
    pose: {
      position: {
        x: 0,
        y: 0,
        z: 0,
      },
    },
  },
  {
    label_name: "label5",
    pose: {
      position: {
        x: 0,
        y: 0,
        z: 0,
      },
    },
  },
];

const Navigation = () => {
  const [labelList, setLabelList] = useState<Label[]>([]);
  const [api, contextHolder] = notification.useNotification();

  const openNotification = (title: string, description: string) => {
    api.info({
      message: title,
      description: description,
      placement: "bottom",
    });
  };
  const fetchData = async () => {
    return new Promise((resolve, reject) => {
      getLabelList()
        .then((res: any) => {
          console.log("标签:", res.data);
          if (res.data && res.data.result === true) {
            setLabelList(res.data.labels);
          } else {
            throw new Error(res);
          }
        })
        .catch((err) => {
          openNotification("获取标签失败", err.message);
          reject(err);
        });
    });
  };

  useEffect(() => {
    const result = fetchData();
  }, []);

  return (
    <>
      {contextHolder}
      <div className="navigation">
        <Header title="Navigation" isHomePage={false} />
        <div className="navigation__label-list">
          {labelList.map((lable: Label, index: number) => {
            return <LabelCard key={"label" + index} {...lable} />;
          })}
        </div>
      </div>
    </>
  );
};

const goToLabelPosition = (label_name: string) => {
  const result = navigateToLabel(label_name);
  console.log("导航结果", result);
};

const LabelCard = (props: Label) => {
  const { label_name, pose } = props;
  return (
    <Card
      hoverable
      style={{ width: "100%", overflow: "hidden", borderWidth: "2px" }}
      onClick={() => {
        goToLabelPosition(label_name);
      }}
    >
      <Meta title={label_name} description="点击导航到目的地" />
    </Card>
  );
};

export default Navigation;
