import React from 'react'
import "./Sidebar.css"
import ChatIcon from '@mui/icons-material/Chat';
import DonutLargeIcon from '@mui/icons-material/DonutLarge';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { Avatar,IconButton } from '@mui/material';
import SearchOutlined from '@mui/icons-material/SearchOutlined';
import SidebarChat from './SidebarChat';
function Sidebar() {
  return (
    <div className = "sidebar">
        <div className="sidebar_header">
           <Avatar />
            <div className="sidebar_headerRight">
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
        <div className="sidebar_search">
            <div className="sidebar_searchContainer">
                <SearchOutlined />
            <input placeholder="search or type for new chat" type="text"/>

            </div>

        </div>

        <div className="sidebar_chats">
            <SidebarChat />
            <SidebarChat />
            <SidebarChat />




        </div>
    </div>
  )
}

export default Sidebar