import { filterData } from "../../../assets/Data/filterData";



const Filter = () => {

   

  return (
    <div>
      <div className="border mt-[100px] w-[370px] rounded-[10px] mb-[30px] shadow-[0_1px_6px_0px_rgba(52, 64, 71, 0.16)]">
        {/* stage 1 */}
        <div className="flex items-center justify-between p-[20px] border rounded-t-[10px]">
          <span className="text-[#2F394B] font-[600] text-[20px]">Filter</span>
          <span className="text-[#0AAFFF] text-[16px]">Clear</span>
        </div>

        {/* stage 2 */}
        <div className="border bg-[#F8F9FC]">
          <p className=" flex items-center justify-between p-[20px]">
            <span className="text-[#7887A8]">Rating</span>
            <span className="bg-[#0AAFFF] text-[20px] w-[14px] h-[1.5px] rounded-[40px]"></span>
          </p>

          <div className="flex-col gap-[15px]">
            {filterData &&
              filterData.slice(0, 4).map((filter) => {
                return (
                  <div
                    className="flex gap-[20px] pl-[20px] mb-[10px] text-[15px] text-[#495D80] font-[400]"
                    key={filter.id}
                  >
                    <span>
                      <input type="checkbox" className="w-[20px] h-[20px]" />
                    </span>
                    <span>{filter.text}</span>
                  </div>
                );
              })}
          </div>
        </div>

        {/* stage 3 */}
        <div className="border bg-[#F8F9FC]">
          <p className=" flex items-center justify-between p-[20px]">
            <span className="text-[#7887A8]">Price</span>
            <span className="text-[#0AAFFF] text-[25px] ">+</span>
          </p>

          <p className="pl-[20px]">
          <input
        type="range"
        min="0"
        max="1000"
        className="thumb thumb--zindex-3"
      />
      <input
        type="range"
        min="0"
        max="1000"
        className="thumb thumb--zindex-4"
      />
          </p>
<p className="pl-[30px] text-[#0AAFFF] pt-[30px] pb-[20px]">$0 - $150</p>
        
        
        
        </div>

        {/* stage 4 */}

        <div>
        <p className=" flex items-center justify-between p-[12px] border">
            <span className="text-[#7887A8]">Duration</span>
            <span className="text-[#0AAFFF] text-[25px] ">+</span>
          </p>

          <div className="border bg-[#F8F9FC]">
          <p className=" flex items-center justify-between p-[20px]">
            <span className="text-[#7887A8]">Language</span>
            <span className="bg-[#0AAFFF] text-[20px] w-[14px] h-[1.5px] rounded-[40px]"></span>
          </p>

          <div className="flex-col gap-[15px]">
            {filterData &&
              filterData.slice(4, 8).map((filter) => {
                return (
                  <div
                    className="flex gap-[20px] pl-[20px] mb-[10px] text-[15px] text-[#495D80] font-[400]"
                    key={filter.id}
                  >
                    <span>
                      <input type="checkbox" className="w-[20px] h-[20px]" />
                    </span>
                    <span>{filter.text}</span>
                  </div>
                );
              })}
          </div>

          </div>

          <div className="border bg-[#F8F9FC] rounded-b-[10px]">
          <p className=" flex items-center justify-between p-[20px]">
            <span className="text-[#7887A8]">Subcategory</span>
            <span className="bg-[#0AAFFF] text-[20px] w-[14px] h-[1.5px] rounded-[40px]"></span>
          </p>

          <div className="flex-col gap-[15px]">
            {filterData &&
              filterData.slice(8, 12).map((filter) => {
                return (
                  <div
                    className="flex gap-[20px] pl-[20px] mb-[10px] text-[15px] text-[#495D80] font-[400]"
                    key={filter.id}
                  >
                    <span>
                      <input type="checkbox" className="w-[20px] h-[20px]" />
                    </span>
                    <span>{filter.text}</span>
                  </div>
                );
              })}
          </div>

</div>

         

          


        </div>


      </div>
    </div>
  );
};



export default Filter;
