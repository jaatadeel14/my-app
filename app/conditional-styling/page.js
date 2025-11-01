'use client'
import { useState } from "react"
import style from "../conditionalStyling.module.css"
const ConditionalStyling = () => {
    useState('blue');
    const [color,setColor]=useState('blue')
    const {green} = style;
  return (
    <>
        <h2 className={style.heading}>Conditional styling in next js 14</h2>
        {/* <h3 className={color=='blue'?style.green: style.pink}>Hello AdeAl</h3> */}
        {/* <h3 style={{backgroundColor: color=='blue'? 'yellow': 'purple'}}>Hello AdeAl</h3> */}
        {/* <h3 id={style.my}>Hello AdeAl</h3> */}

        <h3 className={green}>Hello AdeAl</h3>
        <h3 className={green}>Hello AdeAl</h3>
        <h3 className={green}>Hello AdeAl</h3>
        <h3 className={green}>Hello AdeAl</h3>

        <button onClick={()=>setColor('red')}>Change Color</button>
    </>
  )
}

export default ConditionalStyling