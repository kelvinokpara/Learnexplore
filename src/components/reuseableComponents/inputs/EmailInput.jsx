import React, { useState } from 'react';
import { AiOutlineEyeInvisible, AiOutlineEye } from 'react-icons/ai';

const EmailInput = ({ id, type, placeholder }) => {
    const [showPassword, setShowPassword] = useState(false);
    const [password, setPassword] = useState('');

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    return (
        <div className="w-96 mx-auto">
            <div className='relative'>
                <label className="block text-gray-400 text-lg mb-1 absolute top-1 left-1 z-10 origin-[0] -translate-y-4 scale-75 transform cursor-text select-none bg-white px-2 duration-300 peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:scale-100 peer-focus:top-2 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:px-2 peer-focus:text-blue-600" htmlFor={id}>
                    Email Address
                </label>
                <input
                    className="appearance-none border mb-6 rounded w-full py-4 px-3 text-gray-400 leading-tight focus:outline-none"
                    id={id}
                    type={type}
                    placeholder={placeholder}
                />
            </div>

            <div className="relative">
                <input
                    className="appearance-none border rounded w-full py-4 px-3 text-gray-700 leading-tight focus:outline-none"
                    id="password"
                    type={showPassword ? 'text' : 'password'}
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <span
                    onClick={togglePasswordVisibility}
                    className="absolute right-0 top-1/2 -translate-y-1/2 mr-3 text-gray-700 cursor-pointer"
                >
                    {showPassword ? <AiOutlineEyeInvisible className='text-2xl'/> : <AiOutlineEye className='text-2xl'/>}
                </span>
            </div>
        </div>
    );
};

export default EmailInput;
