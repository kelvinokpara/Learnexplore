

const Icons = ({icons, title}) => {

  
  return (
    <div>
      <div className="flex items-center gap-[10px]">
        <img
          src={icons}
          alt=""
          className="p-[10px] rounded-[20px] bg-[#f0e2c7]"
        />
        <span>{title}</span>
      </div>
    </div>
  );
};

export default Icons;
