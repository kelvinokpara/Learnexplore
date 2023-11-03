import Input from "../../Components/reuseableComponents/inputs/Input";
import CiMail from "react-icons/ci";

const HomePage = () => {
  return (
    <div>
      <div className="w-2/5">
        <Input type={"text"} useType="auth" label={"email"} />
        <CiMail />
      </div>
    </div>
  );
};

export default HomePage;
