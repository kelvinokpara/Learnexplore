import React from "react";

const BlogList2 = ({ title, text1 }) => {
  return (
    <div>
      {/* container 2 */}
      <div className="border bg-white w-[500px] p-[15px] rounded-[20px] mb-[13px]">
        <div className="flex items-center gap-[15px]">
          <img src="/home/blog-img3.png" alt="" />
          <div>
            <p className="text-[22px] font-semibold">{title}</p>
            <p className="text-[#7887A8] text-[16px] text-ellipsis">{text1}</p>
          </div>
        </div>

        <div className="flex justify-between items-center mt-[20px]">
          <p className=" flex gap-[10px]">
            <span className="text-[#FF7D51] bg-[#facbbb9e] rounded-[8px] px-[15px] py-[8px]">
              Maths
            </span>
            <span className="px-[15px] py-[8px] text-[#7551E9] bg-[#e1daf9] rounded-[8px]">
              E-learning
            </span>
          </p>
          <p className="text-[#0AAFFF]">Read Blog</p>
        </div>
      </div>
    </div>
  );
};

export default BlogList2;
