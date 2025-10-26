'use client'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import React from 'react'

const Home = () => {
  const router = useRouter();
  const handleNavigation = (routernam)=> { 
    router.push(routernam)

  }
  return (
    <>
    <h2>Home</h2>
    {/* <Link href="/about">About </Link>
    <br/>
    <Link href="/contact">Contact </Link> */}
    {/* <button onClick={()=>router.push('/about')}>About</button>
    <button onClick={()=>router.push('/contact')}>Contact</button> */}
    <button onClick={()=>handleNavigation('/about')}>About</button>
    <br/>
    <button onClick={()=>handleNavigation('/contact')}>Contact</button>
    </>
  )
}

export default Home