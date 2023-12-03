import DashBoardChatBox from "../components/dashboard/chatbox";
import DashBoardLgBox from "../components/dashboard/largebox";
import DashBoardMdBox from "../components/dashboard/middlebox";
import DashboardSmBox from "../components/dashboard/smallbox";
import { GithubAPI } from "../lib/github/api";
import "../styles/dashboardpage.css";

/**
 * grid에 쓸 박스 1x1 , 1,
 */

/**
 * github 에서 API로 이 프로젝트 리포지토리 불러와 데이터활용
 *
 */
const fetchGitData =()=>{
  const response = GithubAPI().then((result)=>console.log(result))
}

const DashBoardPage = () => {
  return (
    <div className="dashboard_wrap">
      {/* smbox 커밋횟수 , 블로그 업데이트횟수 , 다른내용 1개 필요 */}
      <DashboardSmBox class={"smbox1"} />
      <DashboardSmBox class={"smbox2"} />
      <DashboardSmBox class={"smbox3"} />
      {/* 채팅같은 기능 있으면 좋을거같음 */}
      <DashBoardChatBox class={"rightbox"} />
      {/* 막대그래프 | 다른 그래프류  */}
      <DashBoardMdBox class={"mdbox"} />
      {/* 로그? 원형 비율바?  */}
      <DashBoardLgBox class={"lgbox"} />
    </div>
  );
};

export default DashBoardPage;
