import React from 'react'

import UserInfo from './UserInfo'

const Sidebar= (props) => {
    return (
        <div className="Sidebar">
            <UserInfo user={props.user}/>
        </div>
    )
}

export default Sidebar