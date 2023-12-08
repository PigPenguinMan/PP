import React, { forwardRef, useEffect, useState } from "react";
import { IBlogCardContentProps } from "../../types/blog";
import calendar from "../../styles/icons/calendar.svg";
import clock from "../../styles/icons/clock.svg";
import authoricon from "../../styles/icons/author.svg";
const BlogCardContent = forwardRef<HTMLDivElement, IBlogCardContentProps>(
  ({ data,page_id }, ref) => {
    const handleClick = (e: React.MouseEvent<HTMLElement>) => {
      console.log(data);
    };
    
    /**
     * 12/08 지금은 태그가 1개지만 나중에는 수정필요
     */
    const tag = data?.properties.태그.multi_select[0].name;
    const title = data?.properties.이름.title[0].text.content;
    const author = data?.created_by.id;
    const createdTime = data?.created_time.slice(0, 10);
    const lastEditedTime = data?.last_edited_time.slice(0, 10);
    const url = data?.url;

    return (
      /**
       * 12/05 디폴트상태에선 aria-hidden = true 이고 클릭했을때 false로 바뀌면서 위치가 움직이게
       */
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
              <div className="tag"> {tag} </div>
              <h1 className="title">{title}</h1>
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
                  <span className="text">{createdTime}</span>
                </div>
                <div>
                  <i className="icon">
                    <img src={clock} alt="시계 아이콘" />
                  </i>
                  <span className="text">{lastEditedTime}</span>
                </div>
              </div>
            </div>
            <div className="maintextwrap">
                 
                 </div>
          </div>
        </div>
      </div>
    );
  }
);
export default BlogCardContent;
