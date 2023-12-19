import React, { Suspense, forwardRef, useEffect, useState } from "react";
import { IBlogCardContentProps, IBlogCardProps } from "../../types/blog";
import calendar from "../../styles/icons/calendar.svg";
import clock from "../../styles/icons/clock.svg";
import authoricon from "../../styles/icons/author.svg";
import { useQuery, useSuspenseQuery } from "@tanstack/react-query";
import { TestNotionGetBlock, TestText } from "../../lib/notion/api";
import LoadingPage from "../../pages/loading";
import { ConvertDate } from "../../util/blog/convertdate";
import { FetchClickedData } from "../../lib/firebase/data/blogcontent";
const BlogCardContent = forwardRef<HTMLDivElement, IBlogCardContentProps>(
  ({  ...clickedCardData }, ref) => {

    const {data,isLoading} = useSuspenseQuery({
      queryKey:['doc',clickedCardData.Id] , queryFn: ({queryKey}) =>FetchClickedData(queryKey[1])
    })
    const handleClick = (e: React.MouseEvent<HTMLElement>) => {};
    /**
     * 12/09 동적데이터에 대한 타입지정
     * 이런식으로 사용해도 되나 ???
     */
  
    const title = clickedCardData.Title;
    const createdAt = ConvertDate(clickedCardData.Created_At.seconds);
    const updatedAt = ConvertDate(clickedCardData.Updated_At?.seconds);
    const mainText = clickedCardData.MainText ; 
    const tag = clickedCardData.Tag ;
    const reply = clickedCardData.Reply ;

    useEffect(() => {

      // data?.forEach(item => console.log(item))
    }, []);
    useEffect(() => {}, []);
    return (
      <div
        className="blog_innercontent"
        ref={ref}
        onClick={handleClick}
        aria-hidden
      >
        <div className="content_wrap">
          <div className="content_header">
            {/* 화면 닫기 버튼 등 도구 탭  */}
          </div>
          <div className="content_article">
            {/* 태그 제목 글쓴이 날짜 쓰여진시간 ( or 지난시간)  */}
            <div className="titlewrap">
              <div className="tag">  </div>
              <h1 className="title">{title} </h1>
              <div className="info">
                <div>
                  <i className="icon">
                    <img src={authoricon} alt="글쓴이 아이콘" />
                  </i>
                  <span className="text">희성</span>
                </div>
                <div>
                  <i className="icon">
                    <img src={calendar} alt="달력 아이콘" />
                  </i>
                  <span className="text"></span>
                </div>
                <div>
                  <i className="icon">
                    <img src={clock} alt="시계 아이콘" />
                  </i>
                  <span className="text"></span>
                </div>
              </div>
            </div>
            <div className="maintextwrap">
              {  (
                <Suspense fallback={<LoadingPage />}>
                  <div className="maintext">
                   
                  </div>
                </Suspense>
              )}
            </div>
          </div>
        </div>
      </div>
    );
  }
);
export default BlogCardContent;
