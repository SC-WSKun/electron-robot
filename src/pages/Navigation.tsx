import { H1 } from "@/components/H1/H1";
import "./style/Navigation.less";
import positionIcon from "@/assets/svg/position.svg";
import { getLabelList, navigateToLabel } from "@/api/label";
import { useEffect, useState } from "react";
import Header from "@/components/Header/Header";
import { Card } from "antd";
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
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const fetchData = () => {
    setIsLoading(true);
    getLabelList()
      .then((res: any) => {
        console.log(res.data);
        if (res.data && res.data.result === true) {
          setLabelList(res.data.labels);
        } else {
          throw new Error(res);
        }
      })
      .catch((err) => {
        console.error("获取标签列表失败");
        console.error(err);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="navigation">
      <Header title="Navigation" isHomePage={false} />
      <div className="navigation__label-list">
        {labelList.map((lable: Label, index: number) => {
          return <LabelCard key={"label" + index} {...lable} />;
        })}
      </div>
    </div>
  );
};

const goToLabelPosition = (label_name: string) => {
  const result = navigateToLabel(label_name)
  console.log('导航结果', result)
};

const LabelCard = (props: Label) => {
  const { label_name, pose } = props;

  return (
    <Card
      hoverable
      style={{ width: '100%', overflow: 'hidden', borderWidth: '2px' }}
      onClick={() => {
        goToLabelPosition(label_name);
      }}
    >
      <Meta title={label_name} description="点击导航到目的地" />
    </Card>
  );
};

export default Navigation;
