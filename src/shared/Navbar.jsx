"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { useState, useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"
import { logOutUser } from "@/app/page/redux/authAction"

import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuLink
} from "@/components/ui/navigation-menu"

import { Switch } from "@/components/ui/switch"
import { Button } from "@/components/ui/button"
import { IoMdMenu } from "react-icons/io"
import { MdOutlineShoppingCartCheckout } from "react-icons/md"
import { useRole } from "@/app/hook/useCart"

export default function Navbar() {
  const pathname = usePathname()
  const dispatch = useDispatch()
  const {user,loading} = useSelector(state => state.auth)
  const carts = useSelector(state => state.cart.items)

  const [darkmode, setDarkmode] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [isClient, setIsClient] = useState(false)
const role=useRole()

  // Set client-side rendering
  useEffect(() => {
    setIsClient(true)
  }, [])

  // Load theme from localStorage + system preference
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme")
    if (savedTheme === "dark") {
      setDarkmode(true)
      document.documentElement.classList.add("dark")
    }
  }, [])

  // Update theme on toggle
  useEffect(() => {
    if (darkmode) {
      document.documentElement.classList.add("dark")
      localStorage.setItem("theme", "dark")
    } else {
      document.documentElement.classList.remove("dark")
      localStorage.setItem("theme", "light")
    }
  }, [darkmode])


 

  const links = [
    { href: "/", label: "Home" },
    { href: "/page/atar", label: "Atar" },
    { href: "/page/panjabi", label: "Panjabi" },
    { href: "/page/shirt", label: "Shirt" },
    { href: "/page/pant&trouser", label: "Pant & Trouser" },
    { href: "/page/t_shirt", label: "T-Shirt" },
    user? { href: "/page/dashboard", label: "Dashboard", }:'',
     role?.role==="admin"?{ href: "/page/admin/manageOrder", label: "Order List" }:""
 
  ]

  // Cart count component to avoid hydration issues
  const CartCount = () => (
    <span
      className="absolute top-1 right-1 sm:-top-2 sm:-right-2 bg-red-500 text-white w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 flex items-center justify-center text-[10px] sm:text-xs md:text-sm rounded-full shadow-md"
    >
      {isClient ? carts.length : 0}
    </span>
  )

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
            <NavigationMenuItem className="flex items-center gap-4 font-medium">
              {links.map((link,idx) => (
            
                <NavigationMenuLink
                  key={idx}
                  href={link.href}
                  className={`text-lg hover:text-red-500 ${
                    pathname === link.href ? "text-red-500 font-bold" : "text-gray-800 dark:text-white"
                  }`}
                >
                  {link.label}
                </NavigationMenuLink>
              ))}

              {/* Cart Icon */}
              <Link href="/page/carts" className="relative group hidden lg:block">
                <div className="relative flex items-center justify-center p-2 text-2xl sm:text-3xl md:text-4xl rounded-full transition-all duration-300 group-hover:bg-gray-100 dark:group-hover:bg-gray-800">
                  <MdOutlineShoppingCartCheckout className="transition-all duration-300 group-hover:scale-110" />
                  <CartCount />
                </div>
              </Link>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>

        {/* Right Side: Darkmode + Login/Profile */}
        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-2 text-gray-800 dark:text-white">
            <span className="hidden lg:block">Dark Mode</span>
            <Switch checked={darkmode} onCheckedChange={setDarkmode} />
          </div>

          {user ? (
            <Button onClick={() => dispatch(logOutUser())} variant="default">
              Logout
            </Button>
          ) : (
            <>
              <Button variant="default">
                <Link href="/page/authentication/Login">Login</Link>
              </Button>

              {/* Mobile Cart */}
              <Link href="/page/carts" className="relative lg:hidden group">
                <div className="relative flex items-center justify-center p-2 text-2xl sm:text-3xl md:text-4xl rounded-full transition-all duration-300 group-hover:bg-gray-100 dark:group-hover:bg-gray-800">
                  <MdOutlineShoppingCartCheckout className="transition-all duration-300 group-hover:scale-110" />
                  <CartCount />
                </div>
              </Link>
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

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white dark:bg-gray-900 shadow-lg w-10/12 mx-auto rounded-md p-4 flex flex-col space-y-4 mt-2">
          <ul className="ml-4 mt-2 flex flex-col space-y-1 text-gray-600 dark:text-gray-300">
            {links.map(link => (
              <NavigationMenuLink
                key={link.href}
                href={link.href}
                className={`text-lg hover:text-red-500 ${
                  pathname === link.href ? "text-red-500 font-bold" : "text-gray-800 dark:text-white"
                }`}
              >
                {link.label}
              </NavigationMenuLink>
            ))}
          </ul>
        </div>
      )}
    </header>
  )
}