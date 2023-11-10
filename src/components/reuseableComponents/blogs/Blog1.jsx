
import { Link } from "react-router-dom";

const BlogList1 = ({
  title,
  image,
  profile_image,
  profile_name,
  date,
  text1,
  text2,
  id,
  isSmallCard  = true
}) => {

  return (

    
    <>
    
    {isSmallCard === true ? (<div>

      {/* container 2 */}
      <div className="border bg-white w-[500px] p-[15px] rounded-[20px] mb-[13px]">
        <div className="flex items-center gap-[15px]">
          <img src={image} alt=""  className="w-[105px] rounded-[10px]"/>
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
          <Link to={`/eachblog/${id}`}><p className="text-[#0AAFFF]">Read Blog</p></Link>
        </div>
      </div>
    </div>) : (<div>
      {/* container 1 */}

      <div className="bg-[white] p-[15px] border w-[390px] rounded-[20px] ">
        <img src={image} alt=""/>

        <div className="flex justify-between items-center relative bottom-[60px] pl-[29px] pr-[18px] text-white w-[350px]">
        <p className="flex items-center gap-2">
          <img src={profile_image} alt=""/>
          <span className="font-semibold">{profile_name}</span>
        </p>
        <p>{date}</p>
      </div>

        <p className="text-[20px] font-semibold mt-[10px] mb-[10px]">{title}</p>
        <p className="text-[14px] text-[grey]">
          {text1}
          <br />
          {text2}
        </p>

        <div className="flex justify-between items-center mt-[15px]">
          <p className=" flex gap-[10px]">
            <span className="text-[#FF7D51] bg-[#facbbb9e] rounded-[8px] px-[15px] py-[8px]">
              Maths
            </span>
            <span className="px-[15px] py-[8px] text-[#7551E9] bg-[#e1daf9] rounded-[8px]">
              E-learning
            </span>
          </p>
          <Link to={`/eachblog/${id}`}><p className="text-[#0AAFFF]">Read Blog</p></Link>
        </div>
      </div>

    
    </div>) }
    </>
  );
};

export default BlogList1;
