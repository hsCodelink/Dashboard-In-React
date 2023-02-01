import React, { useEffect } from "react";
import style from "./Sidemenu.module.css";
import { BsThreeDots as MenuIcon } from "react-icons/bs";
import { GoPrimitiveDot } from "react-icons/go";
import { MdDashboard } from "react-icons/md";
import { FaRegUser } from "react-icons/fa";
import { AiTwotoneSetting } from "react-icons/ai";
import { RiFolderSettingsFill } from "react-icons/ri";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { useState } from "react";
import { Link } from "react-router-dom";

const Sidemenu = () => {
  const [value, onChange] = useState(new Date());
  const [currentIndex, setCurrentIndex] = useState(null);
  const [userStatus, setuserStatus] = useState(true);
  return (
    <div className={style.sideMenuWrapper}>
      <div className={style.sideMenuTopBar}>
        <div className={style.profileContent}>
          <div className={style.profilrStatus}>
            <h2>
              {" "}
              <span>
                <GoPrimitiveDot
                  color={userStatus ? "#00FF38" : "red"}
                  fontSize="20px"
                />
              </span>
              {userStatus ? "Active" : "InActive"}
            </h2>
          </div>
          <div className={style.menuIcon}>
            <MenuIcon className={style.mainMenu}/>
            <ul className={style.subMenu}>
              <Link to="#">
                <li>Login</li>
              </Link>
              <Link to="#">
                <li>Sign Up</li>
              </Link>
              <Link to="#">
                <li>Log Out</li>
              </Link>
            </ul>
          </div>
        </div>
        <div className={style.imgWrapper}>
          <img src={require("../../asset/image/Profile.png")} />
        </div>
        <div className={style.userDetails}>
          <h3>Inam Ur Rehman</h3>
          <a>inaamajay007@gmail.com</a>
        </div>
      </div>
      <div className={style.sideMenuBottomBar}>
        <ul>
          <li>
            <Link
              to="/Dashboard"
              className={currentIndex === 0 && style.active}
              onClick={() => {
                setCurrentIndex(0);
              }}
            >
              <span>
                <MdDashboard />
              </span>
              <h4>Dashboard</h4>
            </Link>
          </li>
          <li>
            <Link
              to="/Profile"
              className={currentIndex === 1 && style.active}
              onClick={() => {
                setCurrentIndex(1);
              }}
            >
              {" "}
              <span>
                <FaRegUser />
              </span>
              <h4>Profiles</h4>
            </Link>
          </li>
          <li>
            <Link
              to="/Subscription"
              className={currentIndex === 2 && style.active}
              onClick={() => {
                setCurrentIndex(2);
              }}
            >
              <span>
                <AiTwotoneSetting />
              </span>
              <h4>Subscription</h4>
            </Link>
          </li>
          <li>
            <Link
              to="/Customization"
              className={currentIndex === 3 && style.active}
              onClick={() => {
                setCurrentIndex(3);
              }}
            >
              <span>
                <RiFolderSettingsFill />
              </span>{" "}
              <h4>Customization</h4>
            </Link>
          </li>
        </ul>

        <div className={style.calendarSection}>
          <Calendar onChange={onChange} value={value} />
          <div className={style.calendarWrapper}>
            <div className={style.Heading}></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidemenu;
