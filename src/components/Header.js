import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="ui secondary pointing menu">
      <Link to={"/"} className="item">
        Streamer
      </Link>
      <div className="right menu">
        <Link to={"/"} className="item">
          All Streams
        </Link>
      </div>
    </div>
  );
};
export default Header;

//57017216157-219qg8q35475hio4aqad3q4kuvnd4aoq.apps.googleusercontent.com
