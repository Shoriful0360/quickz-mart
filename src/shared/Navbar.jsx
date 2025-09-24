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
              <NavigationMenuLink
                href="/news"
                className={`hover:text-red-500 ${pathname === "/news" ? "text-red-500 font-bold" : "text-gray-800 dark:text-white"}`}
              >
                News
              </NavigationMenuLink>

              <NavigationMenuLink
                href="/services"
                className={`hover:text-red-500 ${pathname === "/services" ? "text-red-500 font-bold" : "text-gray-800 dark:text-white"}`}
              >
                <NavigationMenuTrigger>Services</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="bg-white dark:bg-gray-800 shadow-md px-5 py-4 space-y-2 rounded-md text-gray-600 dark:text-gray-300">
                    <li><NavigationMenuLink href="/services/web_development">Web Development</NavigationMenuLink></li>
                    <li><NavigationMenuLink href="/services/Graphic_Design">Graphics Design</NavigationMenuLink></li>
                    <li><NavigationMenuLink href="/services/Digital_Marketting">Digital Marketing</NavigationMenuLink></li>
                    <li><NavigationMenuLink href="/services/Business_Learning">Business Learning</NavigationMenuLink></li>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuLink>

              <NavigationMenuLink
                href="/about"
                className={`hover:text-red-500 ${pathname === "/about" ? "text-red-500 font-bold" : "text-gray-800 dark:text-white"}`}
              >
                About
              </NavigationMenuLink>

              <NavigationMenuLink
                href="/contact"
                className={`hover:text-red-500 ${pathname === "/contact" ? "text-red-500 font-bold" : "text-gray-800 dark:text-white"}`}
              >
                Contact
              </NavigationMenuLink>
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
              <Button variant="default"><Link href="/login">Login</Link></Button>
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
              <li><Link href="/services/web_development">Web Development</Link></li>
              <li><Link href="/services/Graphic_Design">Graphics Design</Link></li>
              <li><Link href="/services/Digital_Marketting">Digital Marketing</Link></li>
              <li><Link href="/services/Business_Learning">Business Learning</Link></li>
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
