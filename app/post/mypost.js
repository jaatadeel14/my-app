
"use client"
const MyPost = ({data}) => {
  return (
    <>
    {/* <button onClick={() => alert('Hello AdeAl')}>Click me</button> */}
    <button onClick={() => alert(data)}>Click me</button>

    </>
  )
}

export default MyPost