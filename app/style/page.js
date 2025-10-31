'use client'

import { useState } from "react"

const StyleWithNextJS = () => {
    const [style,setStyle]= useState({backgroundColor:'aqua'})
  return (
    <>
        {/* <h2>Style with Next Js 14</h2> */}
        <h3 style={style}>Style with the Adeel</h3>
        <button onClick={()=>setStyle({backgroundColor:'yellow'})}>Change Color</button>
    </>
  )
}

export default StyleWithNextJS