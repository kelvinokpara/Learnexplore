import BlogList1 from "./components/reuseableComponents/blogs/blog1";
import reactIcon from "../../../assets"

const HomePage = () => {
  return <div>Home
    <BlogList1 
    title={"rererer"}
    image={reactIcon}
    profile_image={reactIcon}
    profile_name={"ereretet"}
    date={"gefr"}
    text1={"fhfgsefshefshdfghsfy"}
    text2={"ygfjysgfjsgfygfdjsgjftsegfjegdfs"}
  
    isSmallCard={true}
    />
  </div>;
};

export default HomePage;
