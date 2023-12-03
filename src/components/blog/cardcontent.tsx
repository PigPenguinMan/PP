import { NotionAPI } from "../../lib/notion/api";

const BlogCardContent = () => {
    let pageId =''
    const fetchContentData = ()=>{
        const response = NotionAPI({'requestType':'GetPage','requestContent':pageId})
    }
    return ( 
        <div>
            
        </div>
     );
}
 
export default BlogCardContent;