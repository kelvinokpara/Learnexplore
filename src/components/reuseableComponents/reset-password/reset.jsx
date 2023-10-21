

const reset = ({padlock, blue_polygon, question_mark}) => {
  return (
    <div>
      <div className="relative top-3 left-0 w-1/2 h-[850px] bg-[#f4ded6] -z-20 rounded-[15px]">
        <div className="">
          <div>
            <div className="">
              <img
                src="/login-assets/boy2.png"
                alt="boy"
                className="mt-[100px] ml-24 rounded-full"
              />
            </div>
            <div className=" bg-[#7551E9] w-[450px] h-[450px] rounded-full absolute top-[290px] left-40 -z-10 flex-shrink-0"></div>
          </div>
        </div>
        <div className="">
          <img
            src="/login-assets/blue-polygon.png"
            alt="polygon"
            className="absolute top-[230px] left-[170px]"
          />
        </div>
        <img
          src="/login-assets/message-question.png"
          alt="question"
          className="absolute top-[130px] left-[500px]"
        />

        <img
          src={padlock}
          alt="lock"
          className="absolute top-[560px] left-[130px]"
        />

        <img
          src={question_mark}
          alt="question"
          className="absolute top-[660px] left-[520px]"
        />

        <img
          src={blue_polygon}
          alt="polygon"
          className="absolute top-[730px] left-[508px]"
        />
      </div>
    </div>
  );
};

export default reset;
