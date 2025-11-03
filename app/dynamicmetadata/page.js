
const DynamicMetaData = () => {
  return (
    <>
    {/* <title>Dynamic MetaData</title> */}
      <h2>Dynamic Meta Data in Next Js 16 by Adeel</h2>
    </>
  )
}

export default DynamicMetaData

export function generateMetadata(){
     return{
        title:"My First Project",
        description: "This is Adeel first next js 16 project"
     }
}
