// import { employee } from "@/app/db/db";
// import { NextResponse } from "next/server";

// export const GET = (req, value) => {
//     // const { empid } = await value.params; // ✅ await required
//     // console.log(empid);
//     // const data = employee;
//     const empData = employee.filter((item) => item.employeeId == value.params.empid)
//     let result = empData.length == 0 ? { result: 'No Employee Found' } : { result: empData }
//     return NextResponse.json(result)
// }


// --------------------------------------------------------------------------------------------



// import { employee } from "@/app/db/db";
// import { NextResponse } from "next/server";

// export const GET = (req, value) => {
//     // const { empid } = await value.params; // ✅ await required
//     // console.log(empid);
//     // const data = employee;
//     const empData = employee.filter((item) => item.employeeId == value.params.empid)
//     let result = empData.length == 0 ? { result: 'No Employee Found' } : { result: empData }
//     return NextResponse.json(result)
// }

import { employee } from "@/app/db/db";
import { NextResponse } from "next/server";

export const GET = async (req, context) => {

    const params = await context.params;   // ✅ params ko await karo
    const empid = await params.empid;      // ✅ empid ko bhi await karo

    const empData = employee.filter((item) => item.employeeId == empid);

    const result = empData.length === 0
        ? { result: "No Employee Found" }
        : { result: empData };

    return NextResponse.json(result);
};


// export const DELETE = (req, value) => {
//     let employeeId = value.params.empid;
//     if (employeeId) {
//         return NextResponse.json({ result: "Employee Info Dleted Successfully" }, { status: 200 })
//     }

//     else {
//         return NextResponse.json({ result: "Employee not found" }, { status: 404 })
//     }
// }




export const DELETE = async (req, { params }) => {
    const employeeId = (await params).empid;

    if (employeeId) {
        return NextResponse.json(
            { result: "Employee Info Deleted Successfully" },
            { status: 200 }
        );
    }

    return NextResponse.json({ result: "Employee Not Found" }, { status: 404 });
};