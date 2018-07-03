import React, {Component} from 'react'

import Sidebar from './Sidebar'
import ChatHeader from './ChatHeader'
import Chat from './Chat'

class Main extends Component {
    render() {
        return (
            <div className="Main" style={styles}>
                <Sidebar />
                <ChatHeader />
                <Chat />
            </div>
        )
    }
}

const styles = {
    display: 'flex',
    alignItems: 'stretch',
    height: '100vh',
}

export default Main