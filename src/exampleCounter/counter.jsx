import React, { useState } from 'react'

function Counter() {
    const [c, setC] = useState(0)
    function handleClick() {
        setC(c + 1)
    }
    return <button onClick={handleClick}>{c}</button>
}

export { Counter }

// import ReactDOM from 'react-dom'
// ReactDOM.render(<Counter />, document.getElementById('root'))
