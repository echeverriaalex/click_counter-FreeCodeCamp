import React from 'react'
import '../styles/Counter.css'

function Counter({ numclicks }){
    return (
        <div className='counter'>
            { numclicks }
        </div>
    )
}

export default Counter