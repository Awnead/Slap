import React from 'react'

const Avatar = (props) => {
    const imageUrl = `https://api.adorable.io/avatars/40/${props.user.email}.png`
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

const style={
    height: '40px',
    width: '40px',
    fontSize: 'irem',
    borderRadius: '29px',
    marginRight: '0.Srem',
}

export default Avatar