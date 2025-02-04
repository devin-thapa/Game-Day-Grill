import React from 'react'
import Image from 'next/image'
import './globals.css'
import logo from "@/src/images/logo.png"
import backgroundImage from "@/src/images/EAT.png" // import the background image

const NavBar = () => {
  return (
    <nav>
      <ul className="navbar flex justify-between items-center">
        <li><Image src={logo} alt="Logo" className="logo" width={150} height={50}/></li>
        <div className="flex space-x-4">
          <li><a href="">HOME</a></li>
          <li><a href="contact">ABOUT US</a></li>
          <li><a href="menu">MENU</a></li>
          <li><a href="checkout">CATERING</a></li>
        </div>
      </ul>
    </nav>
  );
}

export default function Home() {
  return (
    <div>
      <NavBar />
      <Image src={backgroundImage} alt="Background" layout="responsive" width={1920} height={1080}/>
      <main>
        <div className="bg-gray">
          <h1 className="text-black">i hate</h1>
        </div>
      </main>
    </div>
  )
}
