//  export async function GET(request){
//     return new Response("HELLO ADEEL API ROUTE")
//  }

import { NextResponse } from "next/server"


export const GET = (request) => {
    return NextResponse.json({ name: "Adeel", age: 23, department: "CE" })
} 