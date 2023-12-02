import DashBoardChatBox from "../components/dashboard/chatbox";
import DashBoardLgBox from "../components/dashboard/largebox";
import DashBoardMdBox from "../components/dashboard/middlebox";
import DashboardSmBox from "../components/dashboard/smallbox";
import "../styles/dashboardpage.css";

/**
 * grid에 쓸 박스 1x1 , 1,
 */

/**
 * github 에서 API로 이 프로젝트 리포지토리 불러와 데이터활용
 *
 */

const DashBoardPage = () => {
  return (
    <div className="dashboard_wrap">
      <DashboardSmBox class={"smbox1"} />
      <DashboardSmBox class={"smbox2"} />
      <DashboardSmBox class={"smbox3"} />
      <DashBoardChatBox class={"rightbox"} />
      <DashBoardMdBox class={"mdbox"} />
      <DashBoardLgBox class={"lgbox"} />
    </div>
  );
};

export default DashBoardPage;
