import Input from "../../Components/reuseableComponents/inputs/Input";
import { CiMail } from "react-icons/ci";

const HomePage = () => {
  return (
    <div className="bg-opacity-10 bg-white">
      <div className="w-2/5">
        <Input
          type={"text"}
          useType="contact"
          label={"Fullname"}
          placeHolder={"John Doe"}
          icon={<CiMail />}
        />
        <Input
          type={"text"}
          useType="contact"
          label={"Email address"}
          placeHolder={"123@example.com"}
          icon={<CiMail />}
        />
        <Input
          type={"text"}
          useType="contact"
          label={"subject"}
          placeHolder={"Enter your motive of message"}
          icon={<CiMail />}
        />
        <Input
          type={"text"}
          useType="textarea"
          label={"Message"}
          placeHolder={"Enter your message"}
          icon={<CiMail />}
        />
      </div>
    </div>
  );
};

export default HomePage;
