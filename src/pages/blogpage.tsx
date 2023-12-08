import "../styles/blogpage.css";
import React, { Suspense, useEffect, useRef, useState } from "react";
import { NotionDbQuery, TestNotionBlcok, TestNotionDb } from "../lib/notion/api";
import BlogCard from "../components/blog/card";
import LoadingPage from "./loading";
import { useQueries, useQuery } from "react-query";
import BlogCardContent from "../components/blog/cardcontent";
import { TBlogCardContent } from "../types/blog";
import testblock from '../util/testblockData.json'
const BlogPage = () => {
  /**
   * 12/03 불러오는 data property https://developers.notion.com/reference/property-object
   * content.properties : {날짜 :{..} , 이름:{..} ,태그:{...}} ,
   * 글 제목 : 이름.title[0].text.content
   */
  /**
   * 12/05 test용 데이터
   * 12/08 useQuery를 여러번사용하는거보다 useQuery를 useQueries 로 바꿔야할거같다 
   */
  const { data } = useQuery("TestData", TestNotionDb);

  const testresult = useQueries([
    {queryKey:'TestData',queryFn:TestNotionDb,suspense:true},
    {queryKey:'TestBlockData',queryFn:TestNotionBlcok,suspense:true}
  ])
  const [contentData , setContentData] = useState<TBlogCardContent>()
  const [cardId, setCardId ] = useState<string>()
  /**
   * 12/05 클릭한 카드의 ref를 얻어야하기때문에 ref를 props로 주고 다른걸 클릭하면 초기화
   */

  /**
   *   12/06 기존의 cardref는 1가지 요소만값으로 가지게되어 어떤 카드를 클릭해도 map으로 만들어진 컴포넌트중 마지막컴포넌트만 ref로 잡혔다
   *  그래서 useRef을 배열로 하고 ref값을 ref={(ele)=>{cardRef.current[index] = ele}} 이렇게 배열의 각 인덱스값에 따라 바뀌게 수정
   */
  const cardRef = useRef<HTMLElement[] | null[]>([]);
  const cardPageRef = useRef<HTMLDivElement>(null);
  /**
   * 12/04 Notion Date 타입 지정필요 , react-query로 변경
   */
  // const { data, isLoading } = useQuery("NotionData", NotionDbQuery);

  /**
   * 12/03 카드클릭시 해당 카드의 id값의 페이지 불러오기 ? 아니면 처음부터 페이지를 다불러오기 ?
   */
  const handleCardClick = (e: React.MouseEvent<HTMLElement>) => {
    setCardId(e.currentTarget.id);
    
    const changeStyle = ()=>{
      cardPageRef.current?.removeAttribute("aria-hidden");
    };
    const updateData = ()=>{
      const data = testresult[1].data?.map(item => item)
      console.log(data);
      

      
    };
    changeStyle();
    updateData();

    
    console.log('카드 클릭',cardId);


  };


  useEffect(() => {
    console.log(testresult[1]);
    
  }, [testresult[1].isLoading]);
  /**
   * 12/02 블로그 글이 카드형식으로 이미지 제목 순으로 나오고 제일 밑에 날짜 표시
   * 카드를 눌렀을 때 해당 내용을 섹션의 오른쪽에서 섹션의 중간까지 나오게 하기 or 모달로 띄우기
   * 모바일버전에선 화면 전체로 나오게 하기
   * 한줄에 데스크탑에서는 3개 태블릿은 2개 모바일은 1개씩 표시
   * 페이지네이션 6개씩 ? | 스크롤시 다음 페이지불러오기
   */

  return (
    <div className="blog_wrap">
      <h1 className="blog_title">블로그</h1>
      <div className="blog_contents">
        {/* 12/03 Suspense로 데이터 로딩처리 */}
        <Suspense fallback={<LoadingPage />}>
          {data ? (
            data.results.map((item, index) => (
              <BlogCard
                key={item.id}
                {...item}
                onClick={handleCardClick}
                ref={(card) => {
                  cardRef.current[index] = card;
                }}
              />
            ))
          ) : (
            <div> empty</div>
          )}
        </Suspense>
      </div>
            {/* <BlogCardContent page_id={cardId} data={contentData} ref={cardPageRef}/>  */}
      
    </div>
  );
};

export default BlogPage;
