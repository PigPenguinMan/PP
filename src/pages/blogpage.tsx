import { useEffect } from "react";
import { NotionAPI } from "../lib/notion/api";

const BlogPage = () => {
    const fetchBlogData = async () => {
       return await NotionAPI()
    }


          useEffect(()=>{
            console.log(fetchBlogData())
          },[])
        
        


    return ( 
        <div className="blog_wrap">
            블로그페이지
        </div>
     );
}
 
export default BlogPage;