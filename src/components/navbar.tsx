import React, { useContext, useRef, useState } from "react";
import "../styles/navbar.css";
import instgram from "../styles/icons/instagram.svg";
import x from "../styles/icons/x.svg";
import discord from "../styles/icons/discord.svg";
import github from "../styles/icons/github.svg";
import login from "../styles/icons/login.svg";
import logout from "../styles/icons/logout.svg";
import sun from "../styles/icons/sun.svg";
import moon from "../styles/icons/moon.svg";
import arrright from "../styles/icons/arrowright.svg";
import { ThemeContext } from "../contexts/themecontext";
const Navbar = () => {
  // 클릭했을때 width넓어지게
  const [isOpen, setIsOpen] = useState();
  const { isDkMd, setIsDkMd } = useContext(ThemeContext);
  const test = useRef("root");

  // 사이드바 open|close 버튼
  const ocBtn = useRef<HTMLElement | null>(null);
  const navbar = useRef<HTMLElement | null>(null);
  const handleOCBtn = (e:React.MouseEvent<HTMLElement>) => {
    e.preventDefault();
    navbar.current?.classList.toggle('close')

  };

  //  다크모드 버튼
  const handleDarkMdBtn = (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault();
    /** 11/24 다크모드버튼을 눌렀을때 바디전체의 색이 바뀌게
     * doucment.getElId vs useRef
     * useRef를 사용하는방법도 고려
     */
    const body = document.body;
    body.classList.toggle("dark");
  };

  /** 11/25 다크모드일때 사용할 이미지 따로 구하기 | 이미지 바꾸기 */
  return (
    <nav className="navbar" ref={navbar}>
      <header className="navbar_header">
        <span className="">
                 <img className="icon logo"  />
        </span>
        <div>
          <span className="logo_name text"> 웹 이름</span>
        </div>
        <i className="header_icon" onClick={handleOCBtn} ref={ocBtn}>
          <img src={arrright} alt="우화살표 아이콘" />
        </i>
      </header>
      <div className="navbar_menubar">
        <div className="menu">
          <ul className="menu_links">
            <li className="menu_link">
              <a href="">
                <img className="icon" src={instgram} alt="인스타그램 아이콘" />
                <span className="text">인스타그램</span>
              </a>
            </li>
            <li className="menu_link">
              <a href="">
                <img className="icon" src={x} alt="트위터 아이콘" />
                <span className="text">트위터</span>
              </a>
            </li>
            <li className="menu_link">
              <a href="">
                <img className="icon" src={discord} alt="디스코드 아이콘" />
                <span className="text">디스코드</span>
              </a>
            </li>
            <li className="menu_link">
              <a href="">
                <img className="icon" src={github} alt="깃허브 아이콘" />
                <span className="text">깃허브</span>
              </a>
            </li>
          </ul>
        </div>
        <div className="navbar_btm">
          <li className="login&outbtn">
            <a href="">
              {/* <img className="icon" src={logout} alt="로그인 아이콘" />
              <span className="text">로그아웃</span> */}
              <img className="icon" src={login} alt="로그인 아이콘" />
              <span className="text">로그인</span>
            </a>
          </li>
          <li className="darkmode_toggle">
            <a className="darkmode_icon icon" href="">
              {!isDkMd ? (
                <img className="icon" src={sun} alt="해 아이콘" />
              ) : (
                <img className="icon" src={sun} alt="해 아이콘" />
              )}
            </a>
            {/* 호버됐을때 색상 안바뀌게 변경필요 */}
            {/* <span className="text">Dark Mode</span> */}
            <div className="toggle_btnwrap" onClick={handleDarkMdBtn}>
              <span className="toggle_btn"></span>
            </div>
          </li>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
