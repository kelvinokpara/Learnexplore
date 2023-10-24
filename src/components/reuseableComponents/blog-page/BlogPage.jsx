const BlogPage = ({ profile_image }) => {
    return (
      <div className="w-[980px]">
        <img src="" alt="blogImage" />
  
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
            <span>12 june 2023</span>
            <span className="flex gap-[10px]">
              <img src={profile_image} alt="profile" />
              Roy Nina
            </span>
          </p>
        </div>
  
        <p className="text-[#2F394B] text-[36px] font-[700]">
          Shannon Tipton's Learning Rebels Blog
        </p>
        <p className="text-[16px] text-[#7887A8] ">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam,
          purus sit amet luctus venenatis magnaor rhoncus dolor purus non enim
          praesent elementum facilisis leo, vel fringilla est ullamcorper eget
          nulla facilisi etiam dignissim diam quis enim lobortis scelerisque
          fermentum dui faucibus in ornare quam viverra orci sagittis eu volutpat
          odio facilisis mauris sit amet massa vitae tortor condimentum lacinia
          quis eros donec ac odio tempor orci dapibus ultrices in iaculis nunc sed
          augue lacus, viverra vitae congue eu, consequat ac felis donec et odio
          pellentesque diam volutpat commodo sed egestas .
          <p className="pt-[25px]">
            Lorer condimentum lacinia quis eros donec ac odio tempor orci dapibus
            ultrices in iaculis nunc sed augue lacus, viverra vitae congue eu,
            consequat ac felis donec et odio pellentesque diam volutpat commodo
            sed egestas.
          </p>
          <p className="pt-[25px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam,
            purus sit amet luctus venenatis magnaor rhoncus dolor purus non enim
            praesent elementum facilisis leo, vel fringilla est ullamcorper eget
            nulla facilisi etiam dignissim diam quis enim lobortis scelerisque
            fermentum dui faucibus in ornare quam viverra orci sagittis eu
            volutpat odio facilisis mauris sit amet massa vitae tortor condimentum
            lacinia quis eros donec ac odio tempor orci dapibus ultrices in
            iaculis nunc sed augue lacus, viverra vitae congue eu, consequat ac
            felis donec et odio pellentesque diam volutpat commodo sed egestas.
          </p>
          <p className="pt-[25px]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam,
          purus sit amet luctus venenatis magnaor rhoncus dolor purus non enim
          praesent elementum facilisis leo, vel fringilla est ullamcorper eget
          nulla facilisi etiam dignissim diam quis enim lobortis scelerisque
          fermentum dui faucibus in ornare quam viverra orci sagittis eu volutpat
          odio facilisis mauris sit amet massa vitae tortor condimentum lacinia
          quis eros donec ac odio tempor orci dapibus ultrices in iaculis nunc sed
          augue lacus, viverra vitae congue eu, consequat ac felis donec et odio
          pellentesque diam volutpat commodo sed egestas.
          </p>
          
        </p>
      </div>
    );
  };
  
  export default BlogPage;
  