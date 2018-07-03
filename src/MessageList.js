import React from 'react'

import Message from './Message'

const MessageList = (props) => {
    return(
        <div clasName="MessageList">
        {props.messages.map(msg => (
            <Message message={msg} key={msg.id}/>
        )) }
        </div>
    )
}

export default MessageList