import getData from "@/services/getdata";

const UserId = async ({ params }) => {

    const { id } = await params; // ✅ params ko await karo

    const users = await getData(); 
    const userInfo = users[id - 1];

    return (
        <>
            <h2>User Info</h2>
            <h3>ID: {userInfo.id}</h3>
            <h3>USERNAME: {userInfo.username}</h3>
            <h3>EMAIL: {userInfo.email}</h3>
        </>
    )
}

export default UserId;


export const generateStaticParams = async ()=>{
    const data = getData();
    const users =  await data;
    return users.map(user=>({
        id: user.id.toString()
    })) 
}
