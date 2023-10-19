import React from 'react'

const CoursesList = ({title, lessons, duration, price, image, teacher}) => {
  return (
    <div>
        <div className='border w-[270px] p-[15px] rounded-[25px]'>
            <div className='flex justify-between'>
                <div className='flex gap-[13px] items-center'><img src='/login-assets/pantt.png' alt='' className='p-[8px] bg-[#ee9d9d4c] rounded-[8px]'/><span>{title}</span></div>
                <div><img src='/login-assets/heart.png' alt='' className='p-[8px] bg-[#FEE9F1] rounded-[50%]'/></div>
            </div>
            {/* end */}
            <div className='flex gap-[15px] mt-[20px]'>
                <div>
                    <p>{lessons}</p><p className='text-[#7887A8]'>Lessons</p>
                </div>
                <div className='bg-[#E6E9F0] w-[1px]'></div>
                <div>
                    <p>{duration}min</p><p className='text-[#7887A8]'>Duration</p>
                </div>
                <div className='bg-[#E6E9F0] w-[1px]'></div>
                <div>
                    <p>{price}$</p><p className='text-[#7887A8]'>Price</p>
                </div>
            </div>
            {/* end */}
            <div>
                <div className='h-[1px] bg-[#E6E9F0] mt-[17px] mb-[17px]'></div>
        
                <div className='flex justify-between items-center'>
                    <div>
                        <p className='text-[#7887A8]'>Teach by</p>
                        <p className='flex items-center gap-[10px]'><img src={image} alt=''/><span>{teacher}</span></p>
                    </div>
                    <div><img src='/login-assets/shopping-cart.png' alt='' className='rounded-[15px] bg-[#FF8258] p-[12px]'/></div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default CoursesList