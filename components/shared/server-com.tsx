// "use client"
// import { delay } from '@/lib'
// import React, { useEffect, useState } from 'react'
// import Test from './test'

// const ServerComponent = () => {


//     const [loading, setLoading] = useState(true)
//     useEffect(() => {
//         try {
//             delay(2000).then(() => setLoading(false))
//         } catch (error) {

//         }
//     }, [])

//     if (loading) {
//         return <p>Loading... child</p>
//     }


//     return (
//         <div>ServerComponent  </div>
//     )
// }

// export default ServerComponent


import { delay } from '@/lib'

const ServerComponent = async () => {


    await delay(8000)

    return (
        <div>ServerComponent  </div>
    )
}

export default ServerComponent