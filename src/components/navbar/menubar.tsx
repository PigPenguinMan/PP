import instgram from "../../styles/icons/instagram.svg";
import x from "../../styles/icons/x.svg";
import discord from "../../styles/icons/discord.svg";
import github from "../../styles/icons/github.svg";
import book from "../../styles/icons/book.svg"
import loginIcon from "../../styles/icons/login.svg";
import dashboard from "../../styles/icons/dashboard.svg";
import house from "../../styles/icons/house.svg";
import sun from "../../styles/icons/sun.svg";
import moon from "../../styles/icons/moon.svg";
import { useContext, useRef } from "react";
import { ThemeContext } from "../../contexts/themecontext";
import { MenuBarProps } from "../../types/navbar";

const MenuBar = ({
  menubar,
  isMenuBarOpen,
  setIsMenuBarOpen,
}: MenuBarProps) => {
  const { isDkMd, setIsDkMd } = useContext(ThemeContext);
  //  다크모드 버튼
  const handleDarkMdBtn = (
    e: React.MouseEvent<HTMLElement> | React.TouchEvent<HTMLElement>
  ) => {
    e.preventDefault();
    /** 11/24 다크모드버튼을 눌렀을때 바디전체의 색이 바뀌게
     * doucment.getElId vs useRef
     * useRef를 사용하는방법도 고려
     */
    const body = document.body;
    body.classList.toggle("dark");
    setIsDkMd(!isDkMd);
  };

  return (
    <div className="navbar_menubar" ref={menubar}>
      <div className="menu">
        <ul className="menu_links">
          <li className="menu_link">
            <a href="/">
              <i className="icon">
                <img src={house} alt="메인 아이콘" />
              </i>
              <span className="text">메인</span>
            </a>
          </li>
          <li className="menu_link">
            <a href="/dashboard">
              <i className="icon">
                <img src={dashboard} alt="대시보드 아이콘" />
              </i>
              <span className="text">대시보드</span>
            </a>
          </li>
          <li className="menu_link">
            <a href="/blog">
              <i className="icon">
                <img src={book} alt="블로그 아이콘" />
              </i>
              <span className="text">블로그</span>
            </a>
          </li>
          <li className="menu_link">
            <a href="">
              <i className="icon">
                <img src={github} alt="깃허브 아이콘" />
              </i>
              <span className="text">깃허브</span>
            </a>
          </li>
        </ul>
      </div>
      <div className="navbar_btm">
        <li className="login&outbtn">
          <a href="/account/signin">
            {/* <img className="icon" src={logout} alt="로그인 아이콘" />
              <span className="text">로그아웃</span> */}
            <i className="icon">
              <img src={loginIcon} alt="로그인 아이콘" />
            </i>
            <span className="text">로그인</span>
          </a>
        </li>
        <li className="darkmode_toggle">
          <a className="darkmode_icon" href="">
            {!isDkMd ? (
              <i className="icon">
                <img src={sun} alt="해 아이콘" />
              </i>
            ) : (
              <i className="icon">
                <img src={moon} alt="달 아이콘" />
              </i>
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
  );
};

export default MenuBar;
