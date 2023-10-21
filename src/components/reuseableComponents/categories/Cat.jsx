import React from 'react'

const CategoriesList = ({bg, cat, image}) => {
  return (
    <div>
        <div
              className={`bg-${[bg]} border w-[200px] py-[50px] px-[60px] rounded-[50px] mr-auto ml-auto mb-[20px]`}
            >
              <p>
                <img
                  src={image}
                  alt="math"
                  className="p-[22px] bg-white rounded-[45%]"
                />
              </p>
              <p className="flex mt-[20px] items-center justify-center">
                {cat}
              </p>
            </div>
    </div>
  )
}

export default CategoriesList