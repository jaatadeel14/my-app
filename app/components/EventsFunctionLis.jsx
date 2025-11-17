import React, { useState } from 'react'

const EventsFunctionLis = () => {
    const [firstName,setFirstName]=useState("AdeEl")

    // const sayHello=(name)=>{
    //     alert(`Hello ${name}`)
    // }
    const changeName=()=>{
        setFirstName("Jaat")
    }

  return (
    <>
        <h1>Hello this is Adeel Jaat</h1>
        {/* <button onClick={()=> sayHello("Adeel")}>Click me</button> */}
        <h3>My name is : {firstName}</h3>
        <button onClick={changeName}>Click me</button>

    </>
  )
}

export default EventsFunctionLis











































































// import React, { useState } from 'react'

// const EventsFunctionLis = () => {
//     const [firstName,setFirstName]=useState("AdeEl")

//     // const sayHello=(name)=>{
//     //     alert(`Hello ${name}`)
//     // }
//     const changeName=()=>{
//         setFirstName("Jaat")
//     }

//   return (
//     <>
//         <h1>Hello this is Adeel Jaat</h1>
//         {/* <button onClick={()=> sayHello("Adeel")}>Click me</button> */}
//         <h3>My name is : {firstName}</h3>
//         <button onClick={changeName}>Click me</button>

//     </>
//   )
// }

// export default EventsFunctionLis
















// import React, { useState } from 'react'

// const EventsFunctionLis = () => {
//     const [firstName,setFirstName]=useState("AdeEl")

//     // const sayHello=(name)=>{
//     //     alert(`Hello ${name}`)
//     // }
//     const changeName=()=>{
//         setFirstName("Jaat")
//     }

//   return (
//     <>
//         <h1>Hello this is Adeel Jaat</h1>
//         {/* <button onClick={()=> sayHello("Adeel")}>Click me</button> */}
//         <h3>My name is : {firstName}</h3>
//         <button onClick={changeName}>Click me</button>

//     </>
//   )
// }

// export default EventsFunctionLis