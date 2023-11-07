
import Input from "../../Components/reuseableComponents/inputs/Input";
import SelectSidePage from "../SelectSidePage/SelectSidePage";

const HomePage = () => {
  return (
    <div>
      <SelectSidePage />
      <div className="w-2/5">
        <Input type={"text"} useType="auth" label={"email"} />
      </div>
    </div>
  );
};

export default HomePage;
