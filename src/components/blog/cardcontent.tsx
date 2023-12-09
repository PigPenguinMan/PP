import React, { Suspense, forwardRef, useEffect, useState } from "react";
import { IBlogCardContentProps, IBlogCardMainText, IImageBlogMainText, IParagraphBlogMainText } from "../../types/blog";
import calendar from "../../styles/icons/calendar.svg";
import clock from "../../styles/icons/clock.svg";
import authoricon from "../../styles/icons/author.svg";
import { useQuery } from "@tanstack/react-query";
import { TestNotionGetBlock } from "../../lib/notion/api";
import LoadingPage from "../../pages/loading";
const BlogCardContent = forwardRef<HTMLDivElement, IBlogCardContentProps>(
  ({ contentdata, page_id }, ref) => {
    const [mainText, setMainText] = useState();
    const { data, isLoading } = useQuery({
      queryKey: ["data", page_id],
      queryFn: ({ queryKey }) => TestNotionGetBlock(queryKey[1]),
    });
    const handleClick = (e: React.MouseEvent<HTMLElement>) => {};
    /**
     * 12/09 동적데이터에 대한 동적 타입지정 
     * 이런식으로 사용해도 되나 ??? 
     */
    const processDataType = (block : IBlogCardMainText) =>{
        if(block.data ==='image'){
            const imageData = block.data as IImageBlogMainText;

        } else if (block.data === 'paragraph'){
            const paraData = block.data as IParagraphBlogMainText; 
        }

    }
    /**
     * 12/09 data의 type에 따라 동적으로 인터페이스를 지정해줘야 할꺼같다 
     */


    /**
     * 12/08 지금은 태그가 1개지만 나중에는 수정필요
     */
    const tag = contentdata?.properties.태그.multi_select[0].name;
    const title = contentdata?.properties.이름.title[0].text.content;
    const author = contentdata?.created_by.id;
    const createdTime = contentdata?.created_time.slice(0, 10);
    const lastEditedTime = contentdata?.last_edited_time.slice(0, 10);
    const url = contentdata?.url;

    useEffect(() => {
        console.log(data?.results);
        
    }, [data]);
    useEffect(()=>{
        console.log(page_id);
        // data?.forEach(item => console.log(item))
        
    },[page_id])
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
              {data && <Suspense fallback={<LoadingPage />}>
                 
                </Suspense>}
            </div>
          </div>
        </div>
      </div>
    );
  }
);
export default BlogCardContent;
