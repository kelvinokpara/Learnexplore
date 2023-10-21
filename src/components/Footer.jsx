
import Logo from "../assets/Icons/logo.png"
import {BiLogoFacebookSquare, BiLogoTwitter, BiLogoInstagram} from "react-icons/bi"
import {HiOutlineMail} from "react-icons/hi"
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <>
    <footer className='bg-footerBg p-4'>
        <div className='mx-12 my-0'>
        <div className='flex justify-left mb-4 items-center'>
        <img src={Logo} alt='logo'/>
        <p className='font-sansita font-bold text-white text-[20px]'>Learnxplore</p>
        </div>

        <div className=' md:flex lg:flex flex-wrap justify-between items-center font-inter font-medium'>
                   <ul className='text-[grey] mb-4  cursor-pointer'>
                    <Link to="/">
                    <li className='hover:text-white pb-2'>Home</li>
                    </Link>
                    <Link to="/about">
                    <li className='hover:text-white pb-2 '>About us</li>
                    </Link>
                   <li className='hover:text-white'>Category</li>
                </ul>
                <ul className='text-[grey] mb-4  cursor-pointer'>
                   <li className='hover:text-white pb-2'>Blogs</li>
                  <li className='hover:text-white pb-2 '>Pricing</li>
                  <Link to="/contact">
                   <li className='hover:text-white'>Contact</li>
                   </Link>
                </ul>
                <ul className='text-[grey] mb-6  cursor-pointer'>
                    <Link to="/privacy">
                    <li className='hover:text-white pb-2 '>Privacy Policy</li>
                    </Link>
                    <Link to="terms/condition">
                     <li className='hover:text-white pb-2'>Terms & Conditions</li>
                     </Link>
               </ul>

               <div className='mb-4'>
                 <p className='text-white pb-4 font-inter'>Subcribe to newsletter</p>
                <div className='bg-[#181717] flex items-center rounded-[15px] w-[200px] md:w-[300px] lg:w-[300px] pl-[20px] h-[45px]'>
                    <HiOutlineMail className='pr-2 text-white text-2xl'/>
                    <input type='text' placeholder='Email id' className='text-[white] bg-transparent w-[100px] md:w-[200px] lg:w-[200px]  h-[33px]'/>
                    <button className='text-white bg-gradient-to-r from-[#bebef2fa] to-[#0AAFFF] p-2 pl-[20px] pr-[20px] rounded-[10px]'>Send</button>
                </div>
             </div>

             
             <div className='mb-8'>
                 <p className='text-white mb-4 lg:text-right'>Social links</p>
                <div className='flex items-center gap-4'>
                    <div className='w-[40px] cursor-pointer relative h-[40px] rounded-full bg-[#181717]'>
                        <BiLogoFacebookSquare className='text-2xl text-white absolute top-2 left-2'/>
                    </div>
                    <div className='w-[40px] cursor-pointer relative h-[40px] rounded-full bg-[#181717]'>
                        <BiLogoTwitter className='text-2xl text-white absolute top-2 left-2'/>
                    </div>
                    <div className='w-[40px] cursor-pointer relative h-[40px] rounded-full bg-[#181717]'>
                        <BiLogoInstagram className='text-2xl text-white absolute top-2 left-2'/>
                    </div>

                    
                 </div>
                 </div>
           </div>

           

        </div>
       
        <hr className='border-[#2f394b] mb-4 border-[1px] '/>
                <div className='flex justify-between text-[12px] md:text-[18px] lg:text-[18px] flex-wrap items-center  text-[grey] mx-12 my-0'>
                <span className='font-inter pb-2'>&copy; Copyright 2022. Learnxplore All Rights Reserved</span>
                <span className='font-inter'>Design By DeleMontStudio</span>
                </div>
    </footer>
    </>
  )
}

export default Footer


