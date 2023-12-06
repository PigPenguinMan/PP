import "../styles/dashboardpage.css";
import { useEffect } from "react";
import DashBoardChatBox from "../components/dashboard/chatbox";
import DashBoardLgBox from "../components/dashboard/largebox";
import DashBoardMdBox from "../components/dashboard/middlebox";
import DashboardSmBox from "../components/dashboard/smallbox";
import { useQuery } from "react-query";
import { GithubGetCommits } from "../lib/github/api";
import { IGithubCommitResponse } from "../types/github";

/**
 * github API로 이 프로젝트 리포지토리를  불러와 데이터활용
 *
 */

const DashBoardPage = () => {
  /**
   * 12/04 react-query 사용을 위한 data 추가
   * ref https://tanstack.com/query/v3/docs/react/reference/useQuery
   */
  // const { data, isLoading } = useQuery("GitData", GithubGetCommits);
  
  /* ---------- */
  /** 12/04 불러온 data에서 날짜만 뽑아내기 
   * smbox에 들어갈 비교오소들이 여러가지 사용하기에 함수화 시켜 사용하기 
  */
  // date1Arr.length = 1일전 커밋한 횟수
  let date1Arr: IGithubCommitResponse[] = [] ;
  // date2Arr.length =  2일전 커밋한 횟수
  let date2Arr: IGithubCommitResponse[] = [] ;

 
  let today = new Date();
  const date1 = new Date(today.setDate(today.getDate() - 1))
    .toISOString()
    .slice(0, 10);
  today = new Date();
  const date2 = new Date(today.setDate(today.getDate() - 2))
    .toISOString()
    .slice(0, 10);

  // if (data != undefined) {
  //   data.forEach((item) => {
  //     let commitDate = item.commit?.author?.date?.slice(0, 10);
  //     if (commitDate == date1){
  //       date1Arr.push(item);
  //     } else if ( commitDate == date2 ){
  //       date2Arr.push(item);
  //     }
  //   });
  // }
  /* --------- */
  useEffect(() => {
    
    
  }, []);

  return (
    <div className="dashboard_wrap">
      {/* smbox 커밋횟수 , 블로그 업데이트횟수 , 다른내용 1개 필요 */}
      {/* {data && isLoading ? 
    
    :
    
    } */}
      {/* 총 커밋횟수 , 전날 커밋횟수 , 그전날의 커밋횟수와 비교
       * 데이터 계산을 상위컴포넌트? 하위컴포넌트
       */}
      <DashboardSmBox class={"smbox1"} yester_date_data={date1Arr} before_yester_date_date2={date2Arr}/>
      {/* <DashboardSmBox class={"smbox2"} content="" />
      <DashboardSmBox class={"smbox3"} content="" /> */}
      {/* 채팅같은 기능 있으면 좋을거같음 */}
      <DashBoardChatBox class={"rightbox"} content="" />
      {/* 막대그래프 | 다른 그래프류  */}
      <DashBoardMdBox class={"mdbox"} content="" />
      {/* 로그? 원형 비율바?  */}
      <DashBoardLgBox class={"lgbox"} content="" />
    </div>
  );
};

export default DashBoardPage;
