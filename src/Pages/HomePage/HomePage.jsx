import Input from "../../Components/reuseableComponents/inputs/Input";
import { CiMail } from "react-icons/ci";

const HomePage = () => {
  return (
    <div>
      <div className="w-2/5">
        <Input
          type={"email"}
          useType="auth"
          label={"email address"}
          icon={<CiMail />}
        />
        <Input
          type={"text"}
          useType="contact"
          label={"Contact address"}
          icon={<CiMail />}
        />
        <Input
          type={"text"}
          useType="textarea"
          label={"Message"}
          icon={<CiMail />}
        />
        <CiMail />
      </div>
    </div>
  );
};

export default HomePage;
