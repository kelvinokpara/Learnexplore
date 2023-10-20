

const Footer = () => {
  return (
    <div className='bg-[#06061d]'>
        <div className='flex bg-[#06061d] justify-center pl-[30px]'>
    <div className='bg-[#06061d] mb-[50px] mt-[50px]'>
            <div className='flex items-center gap-2 mb-[30px]'>
            <img src='/navigation/logo.png' alt='logo'/>
            <div className='font-Sansita text-[white] text-[24px]'>Learnxplore</div>
            </div>

            <div className='flex gap-[110px]'>
                {/* content 1 */}
                <div className=''>
                    <ul className='text-[grey] cursor-pointer'>
                        <li className='hover:text-white mb-3'>Home</li>
                        <li className='hover:text-white mb-3'>About us</li>
                        <li className='hover:text-white'>Category</li>
                    </ul>
                </div>
                        
                {/* content 2 */}
                <div>
                    <ul className='text-[grey] cursor-pointer'>
                        <li className='hover:text-white mb-3'>Blogs</li>
                        <li className='hover:text-white mb-3'>Pricing</li>
                        <li className='hover:text-white'>Contact</li>
                    </ul>
                </div>

                {/* content 3 */}
                <div>
                    <ul className='text-[grey] cursor-pointer'>
                        <li className='hover:text-white mb-3'>Privacy Policy</li>
                        <li className='hover:text-white mb-3'>Terms & Conditions</li>
                    </ul>
                </div>
                
                {/* content 4 */}
                <div className='mt-[6px]'>
                    <p className='text-white mb-[15px]'>Subcribe to newsletter</p>
                    <div className='bg-[#181717] flex items-center rounded-[15px] w-[300px] pl-[20px] h-[50px]'>
                        <img src='/footer/sms.png' alt='' className='pr-[7px]'/>
                        <input type='text' placeholder='Email id' className='text-[white] bg-transparent w-[200px] h-[35px]'/>
                        <button className=' text-white bg-gradient-to-r from-[#bebef2fa] to-[#0AAFFF] p-2 pl-[20px] pr-[20px] rounded-[10px]'>Send</button>
                    </div>
                </div>

                {/* content 5 */}
                <div className='mt-[6px]'>
                    <p className='text-white mb-[25px]'>Social links</p>
                    <div className='flex gap-6'>
                        <img src='/footer/facebook.png' alt='facebooklogo' className='p-[7px] bg-[#1f1e1e] rounded-[100%]'/>
                        <img src='/footer/twitter.png' alt='twitterlogo' className='p-[7px] bg-[#1d1c1c] rounded-[100%]'/>
                        <img src='/footer/instagram.png' alt='instagramlogo' className='p-[7px] bg-[#1e1e1e] rounded-[100%]'/>
                    </div>
                </div>
                
            </div>
    </div>
    
    </div>
    <hr className='text-[#242323] pb-5'/>
                <div className='flex justify-center text-[grey] gap-[570px] pb-5'>
                <span className=''>&copy Copyright 2022. Learnxplore All Rights Reserved</span>
                <span className=''>Design By DeleMontStudio</span>
                </div>
    </div>
  )
}

export default Footer