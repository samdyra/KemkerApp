import "./widget.scss";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import AccountBalanceWalletOutlinedIcon from "@mui/icons-material/AccountBalanceWalletOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import MonetizationOnOutlinedIcon from "@mui/icons-material/MonetizationOnOutlined";

const Widget = ({ type }) => {
  let data;

  //temporary
  const amount = 100;
  const diff = 20;

  switch (type) {
    case "user":
      data = {
        title: "PENGUKURAN GNSS",
        isMoney: false,
      };
      break;
    case "order":
      data = {
        title: "PENGUKURAN KDH",
        isMoney: false,
      };
      break;
    case "earning":
      data = {
        title: "PENGUKURAN KDV",
        isMoney: false,
      };
      break;
    case "balance":
      data = {
        title: "PENGOLAHAN DATA",
        isMoney: false,
      };
      break;
    default:
      break;
  }

  return (
    <div className="widget">
      <div className="left">
        <span className="title">{data.title}</span>
        <span className="counter">{data.isMoney && "$"} 0%</span>
        <span className="link">{data.link}</span>
      </div>
      <div className="right">
        <div className="percentage positive"></div>
        {data.icon}
      </div>
    </div>
  );
};

export default Widget;
