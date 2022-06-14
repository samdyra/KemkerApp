import "./featured.scss";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpOutlinedIcon from "@mui/icons-material/KeyboardArrowUpOutlined";

const Featured = () => {
  return (
    <div className="featured">
      <div className="top">
        <h1 className="title">Total Progress</h1>
        <MoreVertIcon fontSize="small" />
      </div>
      <div className="bottom">
        <div className="featuredChart">
          <CircularProgressbar value={0} text={"0%"} strokeWidth={5} />
        </div>
        <p className="title">Total Progress Sampai Hari Ini</p>
        <p className="desc">
          Update progress dilakukan pada malam hari setiap harinya.
        </p>
        <div className="summary">
          <div className="item">
            <div className="itemTitle">Target Besok</div>
            <div className="itemResult">
              <KeyboardArrowUpOutlinedIcon fontSize="small" />
              <div className="resultAmount">0.5%</div>
            </div>
          </div>
          <div className="item">
            <div className="itemTitle">Target Hari ini</div>
            <div className="itemResult">
              <KeyboardArrowUpOutlinedIcon fontSize="small" />
              <div className="resultAmount">0</div>
            </div>
          </div>
          <div className="item">
            <div className="itemTitle">Ketercapaian</div>
            <div className="itemResult ">
              <KeyboardArrowUpOutlinedIcon fontSize="small" />
              <div className="resultAmount">0</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Featured;
