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

  const mapMessages = () => {
    return messages.map((message, i) => <li key={i}>{message.content}</li>);
  };

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
    <div className="Chat">
      <ActionCableProvider cable={cable}></ActionCableProvider>
      <h2>Messages</h2>
      <ul>{mapMessages()}</ul>
      <form onSubmit={ (e) => {handleMessageSubmit(e)}}>
        <input name="message" type="text" />
        <input type="submit" value="Send message" />
      </form>
    </div>
  );
}
export default Chat;
