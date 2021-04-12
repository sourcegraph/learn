import React, { useState } from 'react'

/**
 * Demo component for MDX
 */
const Counter = () => {
    const [count, setCount] = useState(0)
    const incrementCount = () => setCount(count + 1)
    return (
        <button className="btn btn-primary my-3" onClick={incrementCount}>
            I have been clicked {count} times
        </button>
    )
}

export default Counter
