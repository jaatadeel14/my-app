import Link from "next/link"

const Employees = () => {
  return (
    <>
    <h2>Employees</h2>
    <ul>
        <li>
        <Link href="/employees/Adeel">Adeel</Link>
        </li>
        <li>
        <Link href="/employees/Shabbir">Shabbir</Link>
        </li>
        <li>
        <Link href="/employees/JaAt">JaAt</Link>
        </li>
    </ul>
    </>
  )
}

export default Employees