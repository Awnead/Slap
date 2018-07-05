import React from 'react'

const Avatar = ({user}) => {
    const imageUrl = `https://api.adorable.io/avatars/40/${user.email}.png`
    return (
        <div
        className="Avatar"
        style={{
            ...styles,
            backgroundImage: `url(${imageUrl})`,
        }}
        ></div>
    )
}

const styles={
    height: '40px',
    width: '40px',
    fontSize: 'irem',
    borderRadius: '29px',
    marginRight: '0.Srem',
}

export default Avatar