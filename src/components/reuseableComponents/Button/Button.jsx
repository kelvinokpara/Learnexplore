

const Button = ({bg,texts,text,w}) => {
  return (
    <div>
      <button className=
        {`${bg ? bg : "bg-red-400"} 
        ${text ? text : "text-black"}
        ${w ? w : "w-[60px]"} 
         p-[5px] border-gray-600 
         {bg-white ? border-[1px] : border-none}
          rounded-[60px] `}>
          {texts ? texts : "button"}
      </button>
    </div>
  );
};

export default Button;
