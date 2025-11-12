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
