import { IBlogCardProps } from "../../types/blog";

const BlogCard = ({onClick,...item }: IBlogCardProps) => {
  const properties = item.properties;
  const title = properties.이름.title[0].plain_text;
  const tag = properties.태그.multi_select[0];
  const date = properties.날짜.date.start;


  
  return (
    <article className="blog_card" onClick={onClick} >
      <div className="blog_cardcover">img</div>
      <div className="blog_cardtitlewrap">
        <div className="blog_cardtitle">
            {title}
        </div>
        <span className="blog_carddate text">{date}</span>
      </div>
    </article>
  );
};

export default BlogCard;
