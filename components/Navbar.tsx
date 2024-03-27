import Image from 'next/image'
import Link from 'next/link'
import * as React from "react";
import Button from './Button'

const Navbar = () => {

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-dark flexBetween max-container padding-container relative z-25 py-3">

    <div className="flex items-center">
      <Link href="/" className="rtl:space-x-reverse flex items-center h-8">
        <Image
          src="/sqilco.svg"
          alt="Sqilco-logo"
          width={74}
          height={29}
        />
      </Link>
    </div>
  
    <div className="absolute inset-y-0 right-0 flex items-center sm:static sm:inset-auto sm:ml-6 sm:pr-0">
      <Link href="/Register" className="nav-link flex space-x-5 p-3 sm:pr-5" aria-current="page">
        <p style={{ color: 'white', fontWeight: 'bold' }}>Register</p>
      </Link>
  
      <Link href="/Login" className="nav-link flex space-x-4" aria-current="page">
        <Button type="button" title="Login" variant="btn_pink_orange" />
      </Link>
    </div>
  </nav>
  
  )
}

export default Navbar