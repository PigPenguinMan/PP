import "../styles/blogpage.css";
import { useEffect, useState } from "react";
import { NotionAPI } from "../lib/notion/api";
import BlogCard from "../components/blog/card";

const BlogPage = () => {
  /**
   * 12/03 불러오는 data property https://developers.notion.com/reference/property-object
   * content.properties : {날짜 :{..} , 이름:{..} ,태그:{...}} ,
   * 글 제목 : 이름.title[0].text.content
   * 
   */
  const [blogData, setBlogData] = useState([]);
  const fetchBlogData = () => {
    const response = NotionAPI().then((result) => console.log(result.results));
    return response;
  };

  /**
   * 12/03 카드클릭시 해당 카드의 id값의 페이지 불러오기 ? 아니면 처음부터 페이지를 다불러오기 ?
   */
  const handleCardClick =()=>{

  }
  useEffect(() => {
    fetchBlogData()
  }, []);

  /**
   * 12/02 블로그 글이 카드형식으로 이미지 제목 순으로 나오고 제일 밑에 날짜 표시
   * 카드를 눌렀을 때 해당 내용을 섹션의 오른쪽에서 섹션의 중간까지 나오게 하기 or 모달로 띄우기
   * 모바일버전에선 화면 전체로 나오게 하기
   * 한줄에 데스크탑에서는 3개 태블릿은 2개 모바일은 1개씩 표시
   * 페이지네이션 6개씩 ? | 스크롤시 다음 페이지불러오기 
   *
   */
  return (
    <div className="blog_wrap">
      <h1 className="blog_title">블로그</h1>
      <div className="blog_contents">
        <BlogCard />
        <BlogCard />
        <BlogCard />
        <BlogCard />
        <BlogCard />
        <BlogCard />
        <BlogCard />
      </div>
    </div>
  );
};

export default BlogPage;
