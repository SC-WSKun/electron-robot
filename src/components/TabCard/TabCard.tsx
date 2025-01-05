import { useNavigate } from "react-router";
import "./TabCard.less";
interface ITabCard {
    title: string;
    subTitle: string;
    icon: string;
    target: string;
  }
function TabCard(props: ITabCard) {
  const navigate = useNavigate();
  const { title, subTitle, icon, target } = props;
  const navigatePage = () => {
    navigate(target);
  };
  return (
    <div className="tab-card__box" onClick={navigatePage}>
      <div className="tab-card__img">
        <img src={icon}></img>
      </div>
      <div className="tab-card__content">
        <div className="tab-card__content__title">{title}</div>
        <div className="tab-card__content__sub-title">{subTitle}</div>
      </div>
    </div>
  );
}

export default TabCard;
