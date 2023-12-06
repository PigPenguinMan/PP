import { forwardRef } from "react";
import { IBlogCardProps } from "../../types/blog";

/**
 * 12/05 blog페이지에서 데이터랑 ref 를 prop으로 받아온다
 * 타입지정없이 forwardRef((***,***)=>{}) 으로 사용할시 ref가 사용되지않는다
 * forward<HTMLElement,Props> 로 타입지정을 시켜야한다
 */
const BlogCard = forwardRef<HTMLElement, IBlogCardProps>(
  ({ onClick, ...item }: IBlogCardProps, ref) => {
    const cardref = ref
    const properties = item.properties;
    const title = properties.이름.title[0].plain_text;
    const tag = properties.태그.multi_select[0];
    const date = properties.날짜.date.start;

    return (
      <article id={item.id} className="blog_card" onClick={onClick} ref={cardref}>
        <div className="blog_cardcover">img</div>
        <div className="blog_cardtitlewrap">
          <div className="blog_cardtitle">{title}</div>
          <span className="blog_carddate text">{date}</span>
        </div>
      </article>
    );
  }
);

export default BlogCard;
