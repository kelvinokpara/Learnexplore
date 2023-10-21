import React from 'react'

export default function medal() {
  return (
    <div className="border-4 w-60 h-16 border-r-5">
      <div className="flex h-10 space-x-2 mt-1 ml-2">
        <img src="./images/medal-star.png" class="bg-yellow-300" alt="medal" />
        <div>
          <p className="font-bold">40+</p>
          <h3>Professional teacher</h3>
        </div>
      </div>
    </div>
  );
}
