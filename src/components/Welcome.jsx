import React from 'react'
import './Welcome.css'

export const Welcome = (props) => {
    return (
        <><div className='title-component-page'>
            Home
        </div>
            <div className='main'>

                <div className='welcome-card margin-top' onClick={() => { props.todos(); }}>
                    <h1>Welcome</h1>
                </div>
            </div>
        </>
    )
}
