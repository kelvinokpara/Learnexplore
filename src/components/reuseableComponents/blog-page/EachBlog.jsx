import BlogList1 from "../blogs/blog1";
import { blogPageData } from "../../../assets/Data/blogPageData";
import { useParams, Link } from "react-router-dom";
import Back from "../back/Back";


const EachBlog = () => {
  const { id } = useParams("id");

  // array.filter(function(currentValue, index, arr), thisValue)

  console.log(id);

  const singleBlog = blogPageData.filter((blog) => {

    if (blog.id === +id) {
      console.log(blog.id === id);
      console.log(blog.id);
      console.log(blog);
      console.log(+id);
      return blog;
    }

  });
  console.log(singleBlog);
  return (
    <div className="flex justify-center ml-[50px] mr-[50px] gap-[40px] mt-[50px]">
     
      <div>
     <Link to={'/blog'}><div className=" mb-[45px]"><Back/></div></Link> 
        {singleBlog.map((blog, id) => {
          return (
            <>
              <div className="w-[850px]" key={id}>
                <img src={blog.image} alt="blogImage" className="w-[980px]" />

                <div className="flex justify-between items-center mt-[20px]">
                  <p className=" flex gap-[10px]">
                    <span className="text-[#FF7D51] bg-[#facbbb9e] rounded-[8px] px-[15px] py-[8px]">
                      Maths
                    </span>
                    <span className="px-[15px] py-[8px] text-[#7551E9] bg-[#e1daf9] rounded-[8px]">
                      E-learning
                    </span>
                  </p>
                  <p className="text-[#7887A8] flex gap-[20px]">
                    <span>{blog.date}</span>
                    <span className="flex gap-[10px]">
                      <img src={blog.profile_image} alt="profile" />
                      {blog.profile_name}
                    </span>
                  </p>
                </div>

                <p className="text-[#2F394B] text-[36px] font-[700]">
                  Shannon Tipton&apos;s Learning Rebels Blog
                </p>
                <p className="text-[16px] text-[#7887A8] ">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit ut
                  aliquam, purus sit amet luctus venenatis magnaor rhoncus dolor
                  purus non enim praesent elementum facilisis leo, vel fringilla
                  est ullamcorper eget nulla facilisi etiam dignissim diam quis
                  enim lobortis scelerisque fermentum dui faucibus in ornare
                  quam viverra orci sagittis eu volutpat odio facilisis mauris
                  sit amet massa vitae tortor condimentum lacinia quis eros
                  donec ac odio tempor orci dapibus ultrices in iaculis nunc sed
                  augue lacus, viverra vitae congue eu, consequat ac felis donec
                  et odio pellentesque diam volutpat commodo sed egestas .
                  <p className="pt-[25px]">
                    Lorer condimentum lacinia quis eros donec ac odio tempor
                    orci dapibus ultrices in iaculis nunc sed augue lacus,
                    viverra vitae congue eu, consequat ac felis donec et odio
                    pellentesque diam volutpat commodo sed egestas.
                  </p>
                  <p className="pt-[25px]">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit ut
                    aliquam, purus sit amet luctus venenatis magnaor rhoncus
                    dolor purus non enim praesent elementum facilisis leo, vel
                    fringilla est ullamcorper eget nulla facilisi etiam
                    dignissim diam quis enim lobortis scelerisque fermentum dui
                    faucibus in ornare quam viverra orci sagittis eu volutpat
                    odio facilisis mauris sit amet massa vitae tortor
                    condimentum lacinia quis eros donec ac odio tempor orci
                    dapibus ultrices in iaculis nunc sed augue lacus, viverra
                    vitae congue eu, consequat ac felis donec et odio
                    pellentesque diam volutpat commodo sed egestas.
                  </p>
                  <p className="pt-[25px]">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit ut
                    aliquam, purus sit amet luctus venenatis magnaor rhoncus
                    dolor purus non enim praesent elementum facilisis leo, vel
                    fringilla est ullamcorper eget nulla facilisi etiam
                    dignissim diam quis enim lobortis scelerisque fermentum dui
                    faucibus in ornare quam viverra orci sagittis eu volutpat
                    odio facilisis mauris sit amet massa vitae tortor
                    condimentum lacinia quis eros donec ac odio tempor orci
                    dapibus ultrices in iaculis nunc sed augue lacus, viverra
                    vitae congue eu, consequat ac felis donec et odio
                    pellentesque diam volutpat commodo sed egestas.
                  </p>
                </p>
              </div>
            </>
          );
        })}
      </div>

      <div>
      <div className="text-[24px] font-[700] mb-[30px]">Other Blogs</div>
        {blogPageData.map((blog) => (
          <BlogList1
            key={blog.index}
            title={blog.title}
            image={blog.image}
            text1={blog.text1}
            id={blog.id}
            isSmallCard={true}
          />
        ))}
      </div>
    </div>
  );
};

export default EachBlog;
