import React from "react";

const onSubmit = (e) => {
  e.preventDefault();
  
}

function ChannelList({ messages, user }) {

  return (
    <div className={`channel`}>
      <p>Channel list</p>
      <button onClick={onSubmit}>General</button>
      <button onClick={onSubmit}>Photos</button>
      <button onClick={onSubmit}>Hi</button>
    </div>
  );
}

export default ChannelList;