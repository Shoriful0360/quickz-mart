'use client'

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"
import { Switch } from "@/components/ui/switch"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import Link from "next/link"
import { IoMdMenu } from "react-icons/io"
import { usePathname } from "next/navigation"
import { useEffect, useState } from "react"

function Navbar() {
  const pathname = usePathname()
  const [darkmode, setDarkmode] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [userLoggedIn, setUserLoggedIn] = useState(false) // example state

  // Load theme from localStorage
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme")
    if (savedTheme === "dark") {
      setDarkmode(true)
      document.documentElement.classList.add("dark")
    }
  }, [])

  useEffect(() => {
    if (darkmode) {
      document.documentElement.classList.add("dark")
      localStorage.setItem("theme", "dark")
    } else {
      document.documentElement.classList.remove("dark")
      localStorage.setItem("theme", "light")
    }
  }, [darkmode])

 const link = <>
  <NavigationMenuLink 
    href="/"
    className={`hover:text-red-500 ${pathname === "/" ? "text-red-500 font-bold und" : "text-gray-800 dark:text-white"}`}
  >
 Home
  </NavigationMenuLink>
  <NavigationMenuLink 
    href="/page/atar"
    className={`hover:text-red-500 ${pathname === "/page/atar" ? "text-red-500 font-bold und" : "text-gray-800 dark:text-white"}`}
  >
    Atar
  </NavigationMenuLink>

  <NavigationMenuLink 
    href="/page/panjabi"
    className={`hover:text-red-500 ${pathname === "/page/panjabi" ? "text-red-500 font-bold" : "text-gray-800 dark:text-white"}`}
  >
    Panjabi
  </NavigationMenuLink>

  <NavigationMenuLink 
    href="/page/shirt"
    className={`hover:text-red-500 ${pathname === "/page/shirt" ? "text-red-500 font-bold" : "text-gray-800 dark:text-white"}`}
  >
    Shirt
  </NavigationMenuLink>

  <NavigationMenuLink 
    href="/page/trouser"
    className={`hover:text-red-500 ${pathname === "/page/trouser" ? "text-red-500 font-bold" : "text-gray-800 dark:text-white"}`}
  >
    Pant & Trouser
  </NavigationMenuLink>
</>


  return (
    <header className="shadow-xl bg-white dark:bg-gray-900">
      <nav className="flex items-center justify-between w-10/12 mx-auto py-4">

        {/* Logo */}
        <div className="text-xl font-bold text-gray-800 dark:text-white">
          <Link href="/">QuickMart</Link>
        </div>

        {/* Desktop Navigation */}
        <NavigationMenu className="hidden lg:flex">
          <NavigationMenuList>
            <NavigationMenuItem className="flex items-center gap-4">
              {link}
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>

        {/* Desktop Right: DarkMode + Login/Profile */}
        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-2 text-gray-800 dark:text-white">
            <span className="hidden lg:block">Dark Mode</span>
            <Switch checked={darkmode} onCheckedChange={setDarkmode} />
          </div>

          {userLoggedIn ? (
            <Avatar>
              <AvatarImage src="https://i.pravatar.cc/40" />
              <AvatarFallback>U</AvatarFallback>
            </Avatar>
          ) : (
            <>
              <Button variant="default"><Link href="/page/authentication/Login">Login</Link></Button>
              {/* <Button variant="outline"><Link href="/register">Register</Link></Button> */}
            </>
          )}
        </div>

        {/* Mobile Hamburger */}
        <div className="lg:hidden">
          <Button variant="ghost" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            <IoMdMenu size={24} className="text-gray-800 dark:text-white" />
          </Button>
        </div>

      </nav>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white dark:bg-gray-900 shadow-lg w-10/12 mx-auto rounded-md p-4 flex flex-col space-y-4 mt-2">
          <Link href="/news" className="hover:text-red-500 text-gray-800 dark:text-white">News</Link>
          <div>
            <span className="text-gray-800 dark:text-white font-semibold">Services</span>
            <ul className="ml-4 mt-2 flex flex-col space-y-1 text-gray-600 dark:text-gray-300">
      {link}
            </ul>
          </div>
          <Link href="/about" className="hover:text-red-500 text-gray-800 dark:text-white">About</Link>
          <Link href="/contact" className="hover:text-red-500 text-gray-800 dark:text-white">Contact</Link>

          <div className="flex items-center justify-between mt-4">
            <div className="flex items-center space-x-2">
              <span className="text-gray-800 dark:text-white">Dark Mode</span>
              <Switch checked={darkmode} onCheckedChange={setDarkmode} />
            </div>
         
          </div>
        </div>
      )}
    </header>
  )
}

export default Navbar
