import { H1 } from "@/components/H1/H1";
import "./style/Navigation.less";

const Navigation = () => {
    const labelList = [
        {
            name: "label",
            position:{
                x: 0,
                y: 0,
            }
        }
    ]
  return (
    <div className="navigation">
      <div style={{ padding: "8px 16px" }}>
        <H1>Navigation</H1>
      </div>
      <div className="navigation__label-list">
        {
            labelList.map((lable: Label)=>{
                return <LabelCard {...lable}/>
            })
        }
      </div>
    </div>
  );
};

const LabelCard = (props: Label) => {
    return (
        <div>
            111
        </div>
    )
}

export default Navigation;
