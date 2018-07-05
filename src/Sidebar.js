import React from 'react'

import UserInfo from './UserInfo'

const Sidebar= (props) => {
    return (
        <div className="Sidebar">
            <aside className="Sidebar" style = {styles.Sidebar}>
                <div className="UserInfo" style={styles.Children}>
                    <div className="Avatar"></div>
                    <div className="user">
                        <UserInfo user={props.user}/>
                    </div>
                </div>
                <h1 style={styles.h1}>XTBC 18</h1>
                <nav className="RoomList" style={styles.Children}>
                    <h2>Rooms</h2>
                    <ul>
                    <li><a href="#">general</a></li>
                    <li><a href="#">random</a></li>
                    </ul>
                </nav>
            </aside>

            
        </div>
    )
}

const styles = {
    Sidebar: {
        backgroundColor: '#333344',
        color: 'rgba(255, 255, 255, 0.8)',
        width: '15rem',
        padding: '1rem 0',
        display: 'flex',
        flexDirection: 'column',
    },
      
    Children: {
        padding: '0 1rem',
    },
      
    h1: {
        color: 'white',
        fontSize: '1.2rem',
        marginTop: 0,
        padding: '0 1rem',
    }
}

export default Sidebar