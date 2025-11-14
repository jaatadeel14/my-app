import { NextResponse } from "next/server"

export const POST = async (req, res) => {
    let data = await req.json();
    console.log(data)
    if(!data.username || !data.age){
        return NextResponse.json({result:"Bad Request"},{status:400})
    }
    // return NextResponse.json({ name: "Adeel", age: 23 })
     return NextResponse.json({result:"Success" },{status:200})
}






// This API route receives student data from the client. It reads the JSON body, checks that both username and age are provided, and returns a 400 Bad Request response if any field is missing. If all required data is present, it returns a 200 Success response.