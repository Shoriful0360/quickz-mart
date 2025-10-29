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
import { useDispatch, useSelector } from "react-redux"
import { logOutUser } from "@/app/page/redux/authAction"
import { MdOutlineShoppingCartCheckout } from "react-icons/md";


function Navbar() {
  const pathname = usePathname()
  const [darkmode, setDarkmode] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
const dispatch=useDispatch()
  const  user  = useSelector((state) => state.auth.user);
  const carts=useSelector((state)=>state.cart.items)

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
    className={`text-lg hover:text-red-500 ${pathname === "/" ? "text-red-500 font-bold" : "text-gray-800 dark:text-white"}`}
  >
    Home
  </NavigationMenuLink>

  <NavigationMenuLink 
    href="/page/atar"
    className={`text-lg hover:text-red-500 ${pathname === "/page/atar" ? "text-red-500 font-bold" : "text-gray-800 dark:text-white"}`}
  >
    Atar
  </NavigationMenuLink>

  <NavigationMenuLink 
    href="/page/panjabi"
    className={`text-lg hover:text-red-500 ${pathname === "/page/panjabi" ? "text-red-500 font-bold" : "text-gray-800 dark:text-white"}`}
  >
    Panjabi
  </NavigationMenuLink>

  <NavigationMenuLink 
    href="/page/shirt"
    className={`text-lg hover:text-red-500 ${pathname === "/page/shirt" ? "text-red-500 font-bold" : "text-gray-800 dark:text-white"}`}
  >
    Shirt
  </NavigationMenuLink>

  <NavigationMenuLink 
    href="/page/pant&trouser"
    className={`text-lg hover:text-red-500 ${pathname === "/page/trouser" ? "text-red-500 font-bold" : "text-gray-800 dark:text-white"}`}
  >
    Pant & Trouser
  </NavigationMenuLink>
<Link
  href="/page/carts"
  className={`relative group hidden lg:block ${
    pathname === "/page/cart"
      ? "text-red-500"
      : "text-gray-800 dark:text-white"
  }`}
>
  {/* Icon wrapper */}
  <div className="
    relative flex items-center justify-center 
    p-2 
    text-2xl sm:text-3xl md:text-4xl    /* Responsive icon size */
    rounded-full 
    transition-all duration-300 
    group-hover:bg-gray-100 dark:group-hover:bg-gray-800
  ">
    <MdOutlineShoppingCartCheckout className="transition-all duration-300 group-hover:scale-110" />

    {/* Badge / Cart Count */}
    <span
      className="
        absolute 
        top-1 right-1 sm:-top-2 sm:-right-2   
        bg-red-500 text-white 
        text-[10px] sm:text-xs md:text-sm      
        w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6    
        flex items-center justify-center 
        rounded-full shadow-md
      "
    >
      {carts.length}
    </span>
  </div>
</Link>








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
            <NavigationMenuItem className="flex items-center gap-4 font-medium ">
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

          {user ? (
           
         
               <Button 
               onClick={()=>dispatch(logOutUser())}
               variant="default">logout</Button>
            
          ) : (
            <>
              <Button variant="default"><Link href="/page/authentication/Login">Login</Link></Button>
              <Link
  href="/page/carts"
  className={`relative lg:hidden group ${
    pathname === "/page/cart"
      ? "text-red-500"
      : "text-gray-800 dark:text-white"
  }`}
>
  {/* Icon wrapper */}
  <div className="
    relative flex items-center justify-center 
    p-2 
    text-2xl sm:text-3xl md:text-4xl    /* Responsive icon size */
    rounded-full 
    transition-all duration-300 
    group-hover:bg-gray-100 dark:group-hover:bg-gray-800
  ">
    <MdOutlineShoppingCartCheckout className="transition-all duration-300 group-hover:scale-110" />

    {/* Badge / Cart Count */}
    <span
      className="
        absolute 
        top-1 right-1 sm:-top-2 sm:-right-2   
        bg-red-500 text-white 
        text-[10px] sm:text-xs md:text-sm      
        w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6    
        flex items-center justify-center 
        rounded-full shadow-md
      "
    >
    {carts.length}
    </span>
  </div>
</Link>
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
      
          
       
            <ul className="ml-4 mt-2 flex flex-col space-y-1 text-gray-600 dark:text-gray-300">
      {link}
            </ul>
        
    
        </div>
      )}
    </header>
  )
}

export default Navbar
