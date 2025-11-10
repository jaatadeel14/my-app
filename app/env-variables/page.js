import React from 'react'

const EnvironmentVariables = () => {
    // console.log(process.env)
    console.log(process.env.GOOGLEMAPSAPIKEYS)
    return (
        <>
            <h2>Environment Variables in Next js</h2>
            {/* {
                process.env.NODE_ENV == 'development' ? 
                <h3>Development Mode</h3> : <h3>Production mode</h3>
            } */}
        </>
    )
}

export default EnvironmentVariables
