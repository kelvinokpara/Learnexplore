import { blogCategoryData } from "../../assets/Data/blogData";
import BlogList1 from "../reuseableComponents/blogs/blog1";
import { blogPageData } from "../../assets/Data/blogPageData";

const Blog = () => {
  return (
    <div>
      <p className="text-[48px] font-[700] text-center pt-[60px]">Blogs</p>

      <div className="flex gap-[30px] justify-center items-center mt-[50px]">
      {blogCategoryData.map((blog, id) => (
        <span
          className="text-center px-[30px] py-[10px] border rounded-[60px] w-[150px] hover:bg-[#FF7D51]"
          key={id}
        >
          {blog}
        </span>
      ))}
      </div>

      <div className="flex flex-wrap justify-center gap-[20px] mt-[100px] mb-[100px]">
      {blogPageData && blogPageData.map((blog) => (

<BlogList1 
key={blog.id}
title={blog.title}
image={blog.image}
profile_image={blog.profile_image}
profile_name={blog.profile_name}
date={blog.date}
text1={blog.text1}
text2={blog.text2}

isSmallCard={false}
/>

))}

      </div>



      
    </div>
  );
};

export default Blog;
