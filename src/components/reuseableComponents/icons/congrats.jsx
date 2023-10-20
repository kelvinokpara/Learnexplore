import React from 'react'

export default function congrats() {
  return (
    <div className="border-2 w-72 h-20">
      <div className="flex h-10 space-x-1 mt-2 ml-2">
        <img src="./images/chat.png" alt="chat" />
        <div>
          <b>Congratulations!</b>
          <h3>You are a graduate of learning</h3>
        </div>
      </div>
    </div>
  );
}
