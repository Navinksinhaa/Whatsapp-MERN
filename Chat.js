import { Avatar } from '@mui/material'
import React from 'react'
import "./Chat.css"
import ChatIcon from '@mui/icons-material/Chat';
import DonutLargeIcon from '@mui/icons-material/DonutLarge';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { IconButton } from '@mui/material';
import EmojiEmotionsSharpIcon from '@mui/icons-material/EmojiEmotionsSharp';
import MicNoneSharpIcon from '@mui/icons-material/MicNoneSharp';

function Chat() {
  return (
    <div className ="chat" >
        <div className="chat_header">
            <Avatar />
            <div className="chat_headerInfo">
                <h3>Room Name</h3>
                <p>Last seen At ..</p>

            </div>
            <div className="chat_headerRight">
                <IconButton>
                   <ChatIcon />
                </IconButton>
                <IconButton>
                   <DonutLargeIcon />
                </IconButton>
                <IconButton>
                   <MoreVertIcon />
                </IconButton>


            </div>

        </div>

    <div className="chat_body">
        <p className="chat_message">
            <span className="chat_name">Navin</span>
            This is a Message
            <span className="chat_timestamp">
            {new Date().toUTCString()}</span>
        </p>

        <p className="chat_message chat_reciever">
            <span className="chat_name">Navin</span>
            This is a Message
            <span className="chat_timestamp">
            {new Date().toUTCString()}</span>
        </p>
    </div>
    <div className="chat_footer">
        <EmojiEmotionsSharpIcon />
        <form>
            <input placeholder="Type a mesage"
             type="text"
             />
             <button type="submit">
                Send a Message
             </button>
        </form>
        <MicNoneSharpIcon />

    </div>

    </div>
  )
}

export default Chat