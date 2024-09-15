import React, { useState } from 'react'

const JobType = () => {

    const [JobTypeData] = useState([
        {
            id: 1,
            title: "full-time",
            checked: false
        },
        {
            id: 2,
            title: "part-time",
            checked: false
        },
        {
            id: 3,
            title: "Remove job",
            checked: false
        },
    ])


    return (
        <ul className='flex py-3 flex-col'>
            {
                JobTypeData.map((item) => {
                    return <li key={item.id}>
                        <input type="checkbox" name={item.title} checked={false} />
                        <span>{item.title}</span>
                    </li>
                })
            }
        </ul>
    )
}

export default JobType