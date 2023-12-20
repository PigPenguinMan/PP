import React, { Suspense, forwardRef, useEffect } from "react";
import { IBlogCardContentProps } from "../../types/blog";
import calendar from "../../styles/icons/calendar.svg";
import clock from "../../styles/icons/clock.svg";
import authoricon from "../../styles/icons/author.svg";
import closeIcon from "../../styles/icons/doubleleft.svg";
import LoadingPage from "../../pages/loading";
import replyIcon from '../../styles/icons/reply.svg';
import { ConvertDate, GetElapsedTime } from "../../util/blog/convertdate";

const BlogCardContent = forwardRef<HTMLDivElement, IBlogCardContentProps>(
  ({ ...clickedCardData }, ref) => {
    const handleCloseBtn = (e: React.MouseEvent<HTMLElement>) => {
      clickedCardData.setIsCardOpen(false);
    };
    const title = clickedCardData.Title;
    const createdAt = ConvertDate(clickedCardData.Created_At.seconds);

    const mainText = clickedCardData.MainText;
    const elapsedTime = GetElapsedTime(createdAt);
    // const elapsedTime = ;
    const tag = clickedCardData.Tag;
    const reply = clickedCardData.Reply;

    useEffect(() => {}, []);
    return (
      <div className="blog_innercontent" ref={ref} aria-hidden>
        <div className="content_wrap">
          <div className="content_header">
            <i className="icon" onClick={handleCloseBtn}>
              <img className="logo" src={closeIcon} alt="닫기 아이콘" />
            </i>
            {/* 화면 닫기 버튼 등 도구 탭  */}
          </div>
          <div className="content_article">
            {/* 태그 제목 글쓴이 날짜 쓰여진시간 ( or 지난시간)  */}
            <div className="titlewrap">
              <span className="tag">
                <span className="text">{tag}</span>
              </span>
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
                  <span className="text">{createdAt}</span>
                </div>
                <div>
                  <i className="icon">
                    <img src={clock} alt="시계 아이콘" />
                  </i>
                  <span className="text">{elapsedTime}</span>
                </div>
              </div>
            </div>
            <div className="maintextwrap">
              {
                <Suspense fallback={<LoadingPage />}>
                  <div className="maintext">{mainText}</div>
                </Suspense>
              }
            </div>
          </div>
          <div className="content_footer">
              <span className="text">{reply?.length}</span>
              <i className="icon">
                  <img className="logo" src={replyIcon} alt="댓글 아이콘" />
              </i>
          </div>
        </div>
      </div>
    );
  }
);
export default BlogCardContent;
