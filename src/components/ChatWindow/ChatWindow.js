import React, { useRef, useEffect } from "react";
import TextMessageBox from '../TextMessageBox'

function ChatWindow({ messages, user }) {

  let scroll = useRef(null);

  useEffect(() => {

    scroll.current.scrollIntoView({ behaviour: "smooth"})

  }, [messages])

  return (
    <div className={`chatWindow`}>
      {messages && messages.map((message) => {
        return <TextMessageBox message={message} key={message.id} user={user} />;
      })}
      <div ref={scroll} />
    </div>
  );
}

export default ChatWindow;