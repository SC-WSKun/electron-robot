import backIcon from "@/assets/svg/back.svg";
import "./Header.less";
import { H1 } from "../H1/H1";
import { useNavigate } from "react-router";

interface IHeader {
  isHomePage: boolean;
  title: string;
  onBack?: () => void;
}

function Header(props: IHeader) {
  const { isHomePage, title, onBack } = props;
  const navigate = useNavigate()
  const backToPrevPage = () => {
    navigate(-1)
  }
  return (
    <div className="header">
      {!isHomePage && <img src={backIcon} onClick={props.onBack || backToPrevPage}></img>}
      <H1 className="header__title">{props.title}</H1>
    </div>
  );
}

export default Header;
