import React from "react";
import SideBar from "./LeftContent";
import RightContent from "./RightContent";

const Content = () => {
  return (
    <div>
      <div id="content">
        <SideBar />
        <RightContent />
      </div>
    </div>
  );
};

export default Content;
