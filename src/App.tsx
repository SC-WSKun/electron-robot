import "./global.less";
import searchIcon from "./assets/svg/search.svg";
import robotIcon from "@/assets/svg/robot.svg"
import configIcon from "@/assets/svg/config.svg"
import navigationIcon from "./assets/svg/navigation.svg";
import communicateIcon from "./assets/svg/communicate.svg";
import Header from "./components/Header/Header";
import TabCard from "./components/TabCard/TabCard";

function App() {
  const tabConfig = [
    {
      title: "Robot",
      subTitle: "check infomation of robot",
      icon: robotIcon,
      target: "/info",
    },
    {
      title: "Config",
      subTitle: "config infomation of robot",
      icon: configIcon,
      target: "/config",
    },
    {
      title: "Navigation",
      subTitle: "navigate to the target",
      icon: navigationIcon,
      target: "/navigation",
    },
    {
      title: "Communicate",
      subTitle: "communicate with robot",
      icon: communicateIcon,
      target: "/communicate",
    },
  ];
  return (
    <div className="app-container">
      <div style={{marginTop: '1rem'}}>
        <Header title="Robot Controller" isHomePage={true} />
      </div>
      <div className="tab-card__wrapper">
        {tabConfig.map((item, index) => {
          return <TabCard {...item} key={"tab-card-" + index} />;
        })}
      </div>
    </div>
  );
}




export default App;
