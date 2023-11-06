import { blogCategoryData } from "../../assets/Data/blogData";
import BlogList1 from "../reuseableComponents/blogs/blog1";

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

      
    {/* <BlogList1 
    title={"rererer"}
    image={}
    profile_image={}
    profile_name={"ereretet"}
    date={"gefr"}
    text1={"fhfgsefshefshdfghsfy"}
    text2={"ygfjysgfjsgfygfdjsgjftsegfjegdfs"}
  
    isSmallCard={true}
    /> */}


export default HomePage;


      
    </div>
  );
};

export default Blog;
