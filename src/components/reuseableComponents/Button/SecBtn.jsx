import React from 'react'

const SecBtn = ({bg,texts,text,w,border,hover}) => {
  return (
    <div>
         <button className=
          {`${bg ? bg : "bg-red-400"} 
          ${text ? text : "text-black"}
          ${w ? w : "w-[60px]"} 
           p-[5px] border-gray-600 
           font-inter
           ${  border ? border : "border-0"}
           ${hover ? hover : "bg-blue-300" }
            rounded-[60px] `}>
            {texts ? texts : "button"}</button>

    </div>
  )
}

export default SecBtn




       