"use client"

import React, { useState } from 'react'

const Test = () => {
    const [num, setNum] = useState(Math.random() * 100)



    return (
        <div> {num} <button onClick={() => {
            setNum(Math.random() * 100)
        }}>update num</button> </div>
    )
}

export default Test