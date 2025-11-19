import { useState } from 'react';
import { ChatInput } from './Components/ChatInput';
import  ChatMessages from "./Components/ChatMessages";

import './App.css'

function App() {
         const [chatMessages,setChatMessages] = useState([
          {
            message:'hello',
            sender: 'user',
            id : 'id1'
          },
          {
            message:'Hello! How can I help you?',
            sender: 'Bot',
            id : 'id2'
          },
          {
            message : 'can you tell me todays date',
            sender: 'user',
            id : 'id3'
          },
          {
            message :'Today is November 14',
            sender:'Bot',
            id : 'id4'
          },   
        ]); 

        return(
          <div className ='app-container'>
            <ChatMessages
              chatMessages = {chatMessages}
            />
          0  <ChatInput 
              chatMessages = {chatMessages}
              setChatMessages = {setChatMessages}
            />
          </div>
        );  
  }

export default App
