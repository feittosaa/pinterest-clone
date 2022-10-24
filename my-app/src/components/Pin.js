import React from 'react'

function Pin(props, { id, likes, description }) {
    return (
        <>
            <div style={{
                ...styles.pin,
                ...styles[props.size]
            }}>
                <img src={id} alt="foto" className="foto" />
            </div>
            {/* <h1>{description}</h1>
            <h1>{likes}</h1> */}
        </>
    )
}

const styles = {
    pin: {
        margin: '15px 10px',
        padding: 0,
        borderRadius: '16px',
        backgroundColor: 'red'
    },
    small: {
        gridRowEnd: 'span 26'

    },
    medium: {
        gridRowEnd: 'span 33'

    },
    large: {
        gridRowEnd: 'span 45'

    },
}

export default Pin;