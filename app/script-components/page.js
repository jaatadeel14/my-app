"use client"
import Script from 'next/script'
import React from 'react'

const ScriptCoponent = () => {
  return (
    <>
     <h2>Script Components in Next Js Adeel!</h2> 
     <Script
     src='/feature.js'
     onLoad={()=>{
        console.log("Feature Executed Adeel")
     }}
     />
    </>
  )
}

export default ScriptCoponent
