import React from 'react'

const Connect: React.FC = () => {
    return (
        <div className='connect'>
            <h1>Connect</h1>
            <form onSubmit={console.log}>
                <div><input /></div>
            </form>
        </div>
    )
}

export default Connect
