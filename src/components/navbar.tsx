import React, { useContext, useRef, useState } from "react";
import "../styles/navbar.css";
import arrright from "../styles/icons/arrowright.svg";
import arrleft from "../styles/icons/arrowleft.svg";
import logo from "../styles/icons/logo.svg";
import menu from "../styles/icons/menu.svg";
import { ThemeContext } from "../contexts/themecontext";
import { LoginContext } from "../contexts/logincontext";
import MenuBar from "./navbar/menubar";


const Navbar = () => {
  // 클릭했을때 width넓어지게
  const [isSideBarOpen , setIsSideBarOpen] = useState<boolean>(true);
  const [isMenuBarOpen , setIsMenuBarOpen ] = useState<boolean>(false);
  const { isDkMd, setIsDkMd } = useContext(ThemeContext);


  
  // 사이드바 open|close 버튼
  const ocBtn = useRef<HTMLElement | null>(null);
  const navbar = useRef<HTMLElement | null>(null);
  const handleOCBtn = (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault();
    navbar.current?.classList.toggle("close");
    setIsSideBarOpen(!isSideBarOpen);
  };

  /** 11/28 지금까지 모바일버전은 생각안하고 클릭이벤트를 마우스이벤트로만 지정했는데
   * 이번엔 반응형으로 만드는걸 전제로 만들기때문에 모바일버전에서는 클릭이벤트가 아닌 터치이벤트도 넣어보기
   * 메뉴버튼을 누르면 상단에서 메뉴가 커튼처럼 내려오게 하기
   *
   */


  const menuBar = useRef<HTMLDivElement | null >(null)
  // 모바일크기 메뉴버튼
  const menuBtn = useRef<HTMLElement | null>(null);
  const handleMnBtn = (
    e: React.MouseEvent<HTMLElement> | React.TouchEvent<HTMLElement>
  ) => {
    e.preventDefault();
    menuBar.current?.classList.add('open') 
  };

  

  /** 11/25 다크모드일때 사용할 이미지 따로 구하기 | 이미지 바꾸기 */
  return (
    <nav className="navbar" ref={navbar}>
      <header className="navbar_header">
        <span className="navbar_header_logo">
          <i className="icon">
            <img className="logo" src={logo} />
          </i>
        </span>
        <div>
          <span className="logo_name text">PP</span>
        </div>
        <i className="header_icon" onClick={handleOCBtn} ref={ocBtn}>
          {isSideBarOpen ? (
            <img src={arrleft} alt="좌화살표 아이콘" />
          ) : (
            <img src={arrright} alt="우화살표 아이콘" />
          )}
        </i>
        <i
          className="m_header_icon icon"
          onClick={handleMnBtn}
          onTouchEnd={handleMnBtn}
          ref={menuBtn}
        >
          <img src={menu} alt="메뉴 아이콘" />
        </i>
      </header>
        <MenuBar menubar={menuBar} isMenuBarOpen={isMenuBarOpen} setIsMenuBarOpen={setIsMenuBarOpen}/>
    </nav>
  );
};

export default Navbar;
