import React, { useState, useEffect } from "react";
import ActionCable from 'actioncable';
import ActionCableProvider from "react-actioncable-provider";
import './styles/chat.style.css'

function Chat(props) {
  const [messages, setMessages] = useState([]);

  const cable = ActionCable.createConsumer("ws://localhost:3000/cable");

  const fetchMessages = () => {
    fetch("http://localhost:3000/messages")
      .then((res) => res.json())
      .then((messages) => setMessages(messages));
  };

  const createSubscription = () => {
    cable.subscriptions.create(
      { channel: "MessagesChannel" },
      { received: (message) => handleReceivedMessage(message) }
    );
  };

  useEffect(() => {
    fetchMessages();
    createSubscription();
    // handleReceivedMessage();
  }, []);


  const handleReceivedMessage = (message) => {
    setMessages([...messages, message]);
  };

  const handleMessageSubmit = (e) => {
    e.preventDefault();
    const messageObj = {
      message: {
        content: e.target.message.value,
      },
    };
    const fetchObj = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(messageObj),
    };
    fetch("http://localhost:3000/messages", fetchObj);
    e.target.reset();
    setMessages([...messages, messageObj.message]);
  };

  return (
    <div className="chat">
      <ActionCableProvider cable={cable}></ActionCableProvider>
      <h2>Messages</h2>
      <div className="messageContainer">
        <ul>
          { 
            messages.map((message, i) => (
            <li key={i}>
              <div className="row-flex no-wrap">
                <div className="userLogo">
                  <i class="fas fa-user-circle"></i>
                </div>
                <div className="message">
                  {message.content}
                </div>
              </div>
            </li>
            ))
          }
        </ul>
      </div>
      <form onSubmit={(e) => handleMessageSubmit(e)} className="w-100">
        <div className="row-flex w-100">
          <textarea name="message" placeholder="..." type="text"></textarea>
          <button type="submit">envoyer</button>
        </div>
      </form>
    </div>
  );
}
export default Chat;
