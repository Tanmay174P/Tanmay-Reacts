import BotProfileImage from '../assets/robot.png'
import UserProfileImage from '../assets/user.png'


export function ChatMessage({message,sender}){
          return(
            <div className = {
              sender === 'Bot'
              ?'chat-message-bot'
              :'chat-message-user'
            }>
              {sender === "Bot" && (
                <img src={BotProfileImage}
                className = 'chat-message-profile'/>
              )}
              <div className = 'chat-message-text'> {message} </div>
              {sender === "user" && (
                <img src={UserProfileImage}
                className = 'chat-message-profile' />
              )}  
            </div>
        )
      }