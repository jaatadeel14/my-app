'use client'
import React from 'react'

const Employees = ({ params }) => {
  const resolvedParams = React.use(params); // ✅ unwrap the promise
  console.log(resolvedParams);

  return (
    <>
      <h2>Employee Details</h2>
      <h3>Employee Name: {resolvedParams.details}</h3>
    </>
  )
}

export default Employees;
