'use client'
import { usePathname } from "next/navigation"

export default function Layout({children}){
       const currentPathName = usePathname()
       console.log(currentPathName)
    return(
        <>
        {
            currentPathName !== '/contact/company' ? 
            <h2>Comman Layout for contact</h2> : null
        }
        
        {children}
        </>

    )
}