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
import { useNavigate } from "react-router-dom";

const MenuBar = ({
  menubar,
  isMenuBarOpen,
  setIsMenuBarOpen,
  crrPage,
  setCrrPage
}: MenuBarProps) => {
  const { isDkMd, setIsDkMd } = useContext(ThemeContext);
  const navigate =useNavigate();
  const menuList = [
    {name: '메인' , href : '/', img:house},
    {name: '대시보드', href : '/dashboard',img:dashboard},
    {name: '블로그', href : '/blog',img:book},
    {name: '깃허브', href : '',img:github},
  ];
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

  // 메뉴 버튼 
  const handleMenuListBtn = (e: React.MouseEvent<HTMLElement> | React.TouchEvent<HTMLElement>,href:string)=>{
    e.preventDefault();
    setCrrPage(e.currentTarget.id);
    navigate(href);
    
  };

  return (
    <div className="navbar_menubar" ref={menubar}>
      <div className="menu">
        <ul className="menu_links">
          {/* 
            12/03 메뉴에 쓸내용 배열로 만든후 map으로 코드 간소화
            a태그 ->  navigate 로 변경
          */}
          {menuList.map((menu,index)=>(
            <li  id={menu.name}  onClick={(e)=>handleMenuListBtn(e,menu.href)}  key={`menu${index}`} className="menu_link">
              <div  >
                <i className="icon">
                  <img src={menu.img} alt={`${menu} 아이콘`} />
                </i>
                <span className="text">{menu.name}</span>
              </div>
            </li>
          ))}
         
        </ul>
      </div>
      <div className="navbar_btm">
        <li className="login&outbtn">
          <div onClick={()=>navigate('/account/signin')}>
            {/* <img className="icon" src={logout} alt="로그인 아이콘" />
              <span className="text">로그아웃</span> */}
            <i className="icon">
              <img src={loginIcon} alt="로그인 아이콘" />
            </i>
            <span className="text">로그인</span>
          </div>
        </li>
        <li className="darkmode_toggle">
          <div className="darkmode_icon" >
            {!isDkMd ? (
              <i className="icon">
                <img src={sun} alt="해 아이콘" />
              </i>
            ) : (
              <i className="icon">
                <img src={moon} alt="달 아이콘" />
              </i>
            )}
          </div>
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