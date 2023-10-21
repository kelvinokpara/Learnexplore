

const Button = ({bg,texts,text,w,border}) => {
  return (
    <div>
      <button className=
        {`${bg ? bg : "bg-red-400"} 
        ${text ? text : "text-black"}
        ${w ? w : "w-[60px]"} 
         p-[5px] border-gray-600 
         ${  border ? border : "border-0"}
          rounded-[60px] `}>
          {texts ? texts : "button"}
      </button>
    </div>
  );
};

export default Button;
