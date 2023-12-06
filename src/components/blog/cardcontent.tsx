import React, { forwardRef } from "react";
import { IBlogCardContentProps } from "../../types/blog";

const BlogCardContent = forwardRef<HTMLDivElement,IBlogCardContentProps>(({},ref)  => {
    const handleClick = (e:React.MouseEvent<HTMLElement>)=>{
        console.log(e);
        
    }

    return ( 
        /**
         * 12/05 디폴트상태에선 aria-hidden = true 이고 클릭했을때 false로 바뀌면서 위치가 움직이게
         */
        <div className="blog_innercontent" ref={ref} onClick={handleClick} aria-hidden>
            
        </div>
     );
}) 
export default BlogCardContent;  