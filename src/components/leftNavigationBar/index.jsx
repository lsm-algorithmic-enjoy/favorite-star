import React, { useState } from "react";
import { Menu } from "antd";
import menuArray from "./staritems";
import "./index.css";
import { StarOutlined, StarFilled } from "@ant-design/icons";

const LeftNavigationBar = () => {
  const [starpoint, setStarPoint] = useState(false); //즐겨찾기 여부 상태관리
  const [menuIndex, setMenuIndex] = useState(-1); //즐겨찾기로 보여줄 메뉴 인덱스 상태관리, 초기 인덱스는 가짜 인덱스 -1로 셋팅
  const onStarPoint = () => {
    setStarPoint(true);
  };
  const offStarPoint = () => {
    setStarPoint(false);
    setMenuIndex(-1);
  };
  const menuIndexHandler = (index) => {
    onStarPoint();
    setMenuIndex(index);
  };
  return (
    <div className="left-navigation-bar">
      <Menu defaultSelectedKeys={[menuArray[0].key]} mode="inline" theme="dark">
        {starpoint && (
          <Menu.Item
            icon={menuArray[menuIndex].icon}
            style={{ borderBottom: "1px solid white" }}
          >
            {menuArray[menuIndex].label} <StarFilled onClick={offStarPoint} />
          </Menu.Item>
        )}
        {menuArray.map(({ key, label, icon }, index) => (
          <Menu.Item key={key} icon={icon}>
            {label}
            <StarOutlined
              onClick={() => {
                menuIndexHandler(index);
              }}
            />
          </Menu.Item>
        ))}
      </Menu>
    </div>
  );
};

export default LeftNavigationBar;
