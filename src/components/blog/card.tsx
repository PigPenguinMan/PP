import { forwardRef } from "react";
import { IBlogCardProps } from "../../types/blog";
import { Timestamp } from "firebase/firestore";
import { ConvertDate } from "../../util/blog/convertdate";

/**
 * 12/05 blog페이지에서 데이터랑 ref 를 prop으로 받아온다
 * 타입지정없이 forwardRef((***,***)=>{}) 으로 사용할시 ref가 사용되지않는다
 * forward<HTMLElement,Props> 로 타입지정을 시켜야한다
 */
const BlogCard = forwardRef<HTMLElement, IBlogCardProps>(
  ({ onClick, ...item}: IBlogCardProps, ref) => {
    const cardref = ref


    const id = item.Id;
    const title = item.Title;
    const tag = item.Tag;
    const mainText = item.MainText;
    const date = ConvertDate(item.Created_At.seconds)


        

    return (
      <article id={id} className="blog_card" onClick={onClick} ref={cardref}>
        <div className="blog_cardcover">img</div>
        <div className="blog_cardtitlewrap">
          <div className="blog_cardtitle">{title}</div>
          <div className="blog_cardmtsummary">{mainText}</div>
          <span className="blog_carddate text">{date}</span>
        </div>
      </article>
    );
  }
);

export default BlogCard;
