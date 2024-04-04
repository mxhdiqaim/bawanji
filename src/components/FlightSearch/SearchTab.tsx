import LocationOnIcon from "@mui/icons-material/LocationOn";

import { RiAccountPinCircleLine } from "react-icons/ri";
import { RxCalendar } from "react-icons/rx";

const SearchTab = () => {
  return (
    <div className="searchInputs flex">
      <div className="singleInput flex">
        <div className="iconDiv">
          <LocationOnIcon />
        </div>
        <div className="texts">
          <h4>Location</h4>
          <input type="text" placeholder="Where would you like to go?" />
        </div>
      </div>
      <div className="singleInput flex">
        <div className="iconDiv">
          <RiAccountPinCircleLine className="icon" />
        </div>
        <div className="texts">
          <h4>Travelers</h4>
          <input type="text" placeholder="Add guests" />
        </div>
      </div>

      <div className="singleInput flex">
        <div className="iconDiv">
          <RxCalendar className="icon" />
        </div>
        <div className="texts">
          <h4>Check In</h4>
          <input type="text" placeholder="Add date" />
        </div>
      </div>
      <div className="singleInput flex">
        <div className="iconDiv">
          <RxCalendar className="icon" />
        </div>
        <div className="texts">
          <h4>Check Out</h4>
          <input type="text" placeholder="Add date" />
        </div>
      </div>
      <button className="btn btnBlock flex">Search Flights</button>
    </div>
  );
};

export default SearchTab;
