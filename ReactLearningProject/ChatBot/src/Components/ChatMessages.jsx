import { useRef,useEffect } from 'react';
import { ChatMessage } from "./ChatMessage";



function ChatMessages({chatMessages}) {
        const chatMessagesRef = useRef(null);

        useEffect(()=>{
          const containerElem = chatMessagesRef.current;
          if(containerElem){
            containerElem.scrollTop = containerElem.scrollHeight;
          }
        },[chatMessages]) 

        return(
          <div className = 'chat-messages-container'
          ref ={chatMessagesRef}>
            {chatMessages.map( (chatmessage)=>{
              return (
                <ChatMessage
                  message = {chatmessage.message}
                  sender = {chatmessage.sender} 
                  key = {chatmessage.id}
                  />
              );
            })}
          </div>    
        );
  }

export default ChatMessages