import { useState } from "react";
import Hero from "../../Components/reuseableComponents/Hero/Hero";
import Girl from "../../assets/images/position-component/position-girl2.png";
// import tabLeft from "../../assets/images/position-component/tab-left-2.png";
import positionTeacher2 from "../../assets/images/position-component/position-teacher2.png";
import student from "../../assets/Icons/features-icons/features-people.png";
import support from "../../assets/Icons/why-choose-icons/features-stat.png";
import Button from "../../components/reuseableComponents/Button/Button";
import CategoriesList from "../../Components/reuseableComponents/categories/Cat";
import CoursesList from "../../Components/reuseableComponents/courses/courses";
import { courseData } from "../../assets/Data/coursesData";
import { category, features1, features2 } from "../../assets/Data/homeData";
import { blogPageData } from "../../assets/Data/blogPageData";
import BlogList1 from "../../Components/reuseableComponents/blogs/Blog1";
import { pricingData } from "../../assets/Data/pricingData";
import PaymentList from "../../Components/reuseableComponents/payments/Payments";
import scholar from "../../assets/Icons/why-choose-icons/features-scholar.png";
import badge from "../../assets/Icons/why-choose-icons/features-badge.png";
import tag from "../../assets/Icons/why-choose-icons/features-tag.png";
import stat from "../../assets/Icons/why-choose-icons/features-stat.png";
const LandingPage = () => {
  const [first] = useState(true);
  const courses = first === true ? courseData.slice(0, 8) : courseData;
  const blogPage = first === true ? blogPageData.slice(0, 2) : blogPageData;
  const blogData = first === true ? blogPageData.slice(0, 3) : blogPageData;
  return (
    <div>
      <div className="flex justify-center">
        <div className="flex rounded-[30px] w-[1300px] h-[700px] top-28 items-center justify-between bg-[#F1FAFF]">
          <div className="w-[647px] ml-20 h-[414px] top-[266px] gap-[36px] ">
            <div>
              <h2 className="  text-[#141736] font-bold text-4xl">
                Investing in knowldge and
                <span className=" ml-2 text-[#0AAFFF]"> your future</span>{" "}
              </h2>
            </div>
            <p>
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Velitofficia consequat duis enim velit mollit.
              Exercitation veniam consequat sunt nostrud amet.
            </p>
            <div className="mt-8">
              <Button defButton="blue"> Get Started</Button>
              <Button>Watch video</Button>
            </div>
          </div>
          <div className=" w-[700.68px] h-[612.21px] top-40">
            <Hero mainImg={Girl} bg={"bg-transparent "} />
          </div>
        </div>
      </div>
      <div className=" flex justify-center w-[1440px] h-[150px] gap-10 ">
        {features1.map((features, index) => {
          return (
            <div key={index} className="flex items-center gap-3 text-2xl ">
              <img src={features.icon} alt="" />
              <h2>{features.label} </h2>
            </div>
          );
        })}
      </div>
      <div>
        <div className=" w-[1300px]  bg-gradient-to-r from-[#F8F9FC] to-[#F8F9FC00]">
          <div className="flex justify-center items-center">
            <div className="flex justify-center mr-[100px]">
              <div>
                <div className=" w-[339px] p-[20px] h-[223px] m-8 rounded-xl p[15px] bg-[#FFFFFF] ">
                  <img src={scholar} alt="" className="mb-3" />
                  <h1>Well structured programme </h1>
                  <p>
                    Amet minim mollit non deserunt ullamco est sit aliqua dolor
                    do amet sint.
                  </p>
                </div>

                <div className=" w-[339px] p-[20px] h-[223px] m-8 rounded-xl p[15px] bg-[#FFFFFF] ">
                  <img src={badge} alt="" className="mb-3" />
                  <h1>Learn From Certified Tutors </h1>
                  <p>
                    Amet minim mollit non deserunt ullamco est sit aliqua dolor
                    do amet sint.
                  </p>
                </div>
              </div>
              <div className="mt-[100px]">
                <div className=" w-[339px] p-[20px] h-[223px] m-8 rounded-xl p[15px] bg-[#FFFFFF] ">
                  <img src={tag} alt="" className="mb-3" />
                  <h1>Get membership </h1>
                  <p>
                    Amet minim mollit non deserunt ullamco est sit aliqua dolor
                    do amet sint.
                  </p>
                </div>
                <div className=" w-[339px] p-[20px] h-[223px] m-8 rounded-xl p[15px] bg-[#FFFFFF] ">
                  <img src={stat} alt="" className="mb-3" />
                  <h1> Track Earning & Traffic</h1>
                  <p>
                    Amet minim mollit non deserunt ullamco est sit aliqua dolor
                    do amet sint.
                  </p>
                </div>
              </div>
            </div>
            <div className="w-[481px] h-[275px]">
              <h2 className=" text-[#141736]  font-bold text-4xl">
                Why choose <span className=" text-[#0AAFFF]">Learnxplore</span>
                as first place
              </h2>
              <p>
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                sint. Velitofficia consequat duis enim velit mollit. Exercitati
                veniam consequat sunt nostrud amet.
              </p>
              <div className="mt-5">
                <Button defButton="blue"> Get Started</Button>
              </div>
            </div>
          </div>
          <div className="w-[1440px] h-[748px] top-[2042px] left-60 gap-[50px] grid ml-20">
            <div className="flex justify-center ">
              <button className="  px-4 py-4 rounded-full  bg-[#2F2B323B] w-72  h-14 relative ">
                Popular courses
              </button>
              <div className=" ">
                <button className=" h-14 px-4  py-4 gap-1 bg-[#7551E9] rounded-full absolute left-[900px]">
                  Recently added Courses
                </button>
              </div>
            </div>
            {/* title, lessons, duration, price, image, teacher */}
            <div className="w-[1300px] xl:grid-cols-4 grid md:grid-cols-3 grid-cols-2">
              {courses.map((data, index) => {
                return (
                  <CoursesList
                    key={index}
                    title={data.title}
                    lessons={data.lessons}
                    duration={data.duration}
                    price={data.price}
                    image={data.courseIcon}
                    teacher={data.teacher}
                  />
                );
              })}
            </div>
          </div>
          <div className="flex justify-center">
            <Button defButton="blue"> See All Courses</Button>
          </div>
        </div>
      </div>
      <div>
        <div className="w-[322] h-[63px]">
          <h1 className=" text-[#141736] flex justify-center font-bold text-4xl">
            Top <span className=" ml-2 text-[#0AAFFF]">Catergories</span>
          </h1>
        </div>
        <div className=" grid grid-cols-5">
          {category.map((category, index) => {
            return (
              <CategoriesList
                key={index}
                bg={category.bg}
                image={category.icon}
                cat={category.label}
              />
            );
          })}
        </div>
      </div>
      <div className="">
        <div className="w-[322] h-[63px]">
          <h2 className=" text-[#141736] flex justify-center font-bold text-4xl">
            Become <span className=" ml-2 text-[#0AAFFF]">Tutor</span>
          </h2>
        </div>
        <div className="flex justify-center gap-5 ">
          <div className=" flex  w-4/5 gap-2">
            {blogPage.map((blogPageData) => {
              return (
                <BlogList1
                  key={blogPageData.id}
                  title={blogPageData.title}
                  image={blogPageData.image}
                  profile_image={blogPageData.profile_image}
                  profile_name={blogPageData.profile_name}
                  text1={blogPageData.text1}
                  text2={blogPageData.text2}
                  date={blogPageData.date}
                  isSmallCard={false}
                />
              );
            })}
          </div>
          <div>
            <div className=" w-1/5 gap-2 ">
              {blogData.map((blogPageData) => {
                return (
                  <BlogList1
                    key={blogPageData.id}
                    title={blogPageData.title}
                    image={blogPageData.image}
                    profile_image={blogPageData.profile_image}
                    profile_name={blogPageData.profile_name}
                    text1={blogPageData.text1}
                    text2={blogPageData.text2}
                    date={blogPageData.date}
                  />
                );
              })}
            </div>
          </div>
        </div>
      </div>
      <div className=" ml-20 flex w-[1300px] h-[724.15px] top-[4785px] left-[240px] justify-between items-center">
        <div className="w-2/4 h-[329px] ">
          <h2 className=" text-[#141736] font-bold text-4xl">
            Become <span className=" ml-2 text-[#0AAFFF]">Tutor</span>
          </h2>
          <p>
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia consequat duis enim velit mollit. Amet minim
            mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit
            officia consequat duis enim velit mollit. Amet minim mollit non
            deserunt ullamco est sit aliqua dolor do amet sint. Velit officia
            consequat duis enim velit mollit.
          </p>
          <div className="mt-5 mb-5">
            <Button defButton="blue"> Get Started</Button>
          </div>
          <div className=" flex gap-12">
            <div className=" flex gap-3 items-center">
              <img src={student} alt="" />
              <h3>70k + Students</h3>
            </div>
            <div className=" flex gap-3 items-center">
              <img src={support} alt="" />
              <h3>24*7 Support</h3>
            </div>
          </div>
        </div>
        <div className="w-2/4">
          <Hero bg={"bg-transparent "} mainImg={positionTeacher2} />
        </div>
      </div>
      <div>
        <div className="w-[322] h-[163px] ">
          <h2 className=" text-[#141736] flex justify-center font-bold text-4xl">
            Our
            <span className=" ml-2 text-[#0AAFFF]"> Pricing</span>
          </h2>
          <p className="mt-5 text-center">
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit duis enim velit mollit.
          </p>
        </div>

        <div className="flex justify-center gap-4">
          {pricingData.map((pricingData, index) => {
            return (
              <PaymentList
                key={index}
                title={pricingData.priceType}
                price={pricingData.price}
                image={pricingData.mainIcon}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
