import { useState} from 'react';
import {Chatbot} from 'supersimpledev';



export function ChatInput({chatMessages,setChatMessages}){
        
        const [inputText,setInputText] = useState('');

        function saveInputText(event){
          setInputText(event.target.value);
        }

        function sendMessage (){
            const newChatMessages = [
              ...chatMessages,
              {
                message: inputText,
                sender: 'user',
                id: crypto.randomUUID()
              }
            ]

            setChatMessages(newChatMessages);

            const response = Chatbot.getResponse(inputText);
            setChatMessages([
              ...newChatMessages,
              {
                message: response,
                sender: 'Bot',
                id: crypto.randomUUID()
              }
            ]);

            setInputText('');
        }


        return (
            <div className = 'chat-input-container'>
              <input 
                className = 'chat-input'
                placeholder= 'Ask anything to ChatBot' 
                size="30" 
                onChange = {saveInputText}
                value = {inputText} 
              />
              <button className = 'send-button'
              onClick = {sendMessage}
              >Send</button>
            </div> 
        );
      }

