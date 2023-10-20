<<<<<<< HEAD

const HomePage = () => {
  return <div>
   Home
=======
import BlogList1 from "../../components/reuseableComponents/blogs/blog1";
import reactIcon from "../../assets/react.svg"

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
>>>>>>> 04b1ea6 (first commit)
  </div>;
};

export default HomePage;
