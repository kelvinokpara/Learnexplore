import React from 'react';
import { BiEnvelope } from 'react-icons/bi';

const ContactInput = ({ placeholder }) => {
  return (
    <div className="relative w-64">
      <input
        type="text"
        className="pl-8 pr-4 py-3 rounded border border-gray-300 w-full"
        placeholder={placeholder}
      />
      <div className="absolute inset-y-0 left-0 flex items-center pl-3">
        <BiEnvelope className="text-gray-500 text-2xl" />
      </div>
    </div>
  );
};

export default ContactInput;
