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
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { IoMdMenu } from "react-icons/io"
import { usePathname } from "next/navigation"
import { useEffect, useState } from "react"

function Navbar() {
  const pathname=usePathname()
  const[darkmode,setIsDarkMode]=useState(false)

  // load previous theme from localStorage
  useEffect(()=>{
    const saveTheme=localStorage.getItem("theme")
    if(saveTheme==='dark'){
      setIsDarkMode(true)
      document.documentElement.classList.add('dark')
    }
  },[])
  useEffect(()=>{
    if(darkmode){
      document.documentElement.classList.add('dark')
      localStorage.setItem('theme','dark')
    }else{
      document.documentElement.classList.remove('dark')
      localStorage.setItem('theme','light')
    }
  },[darkmode])

  return (
    <header className="py-4 shadow-xl">
      <nav className="flex items-center justify-between w-10/12 mx-auto ">
        {/* logo */}
        <div className="text-xl font-bold">
          <Link href='/'>Daily News</Link>
        </div>

        {/* desktop menu start */}
        <NavigationMenu className={'hidden lg:flex'}>
          <NavigationMenuList>
            <NavigationMenuItem className={'flex items-center gap-2'}>
              <NavigationMenuLink href='/news'  className={`${pathname === '/news' ? 'text-red-500 font-bold' : ''} hover:text-red-500`}>News</NavigationMenuLink>
              <NavigationMenuLink href='/services'   className={`${pathname === '/services' ? 'text-red-500 font-bold' : ''} hover:text-red-500`}>
                <NavigationMenuTrigger  > Services </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="text-gray-600 shadow-md px-5 py-4 space-y-2">
                    <li>
                      <NavigationMenuLink href="/services/web_development">Web Development</NavigationMenuLink>
                    </li>
                    <li>
                      <NavigationMenuLink href="/services/Graphic_Design">Graphics Design</NavigationMenuLink>
                    </li>
                    <li>

                      <NavigationMenuLink href="/services/Digital_Marketting">Digital Marketting</NavigationMenuLink>
                    </li>
                    <li>
                      <NavigationMenuLink href="/services/Business_Learning">Business Learning</NavigationMenuLink>
                    </li>
                  </ul>



                </NavigationMenuContent>
              </NavigationMenuLink>
              <NavigationMenuLink href='/about'  className={`${pathname==='/about'?"text-red-500 font-bold":""} hover:text-red-500`}  >About</NavigationMenuLink>
              <NavigationMenuLink href='/contact ' className={`${pathname==='/contact'?"text-red-500  font-extrabold ":""}hover:text-red-500`} >Contact</NavigationMenuLink>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
        {/* desktop menu end */}

        {/* darkmode and login button start*/}
    <div className="hidden lg:flex space-x-2">
        <div className="flex justify-between items-center space-x-2">
        <span >Dark Mode</span>
        <Switch checked={darkmode} onCheckedChange={setIsDarkMode}/>
      </div>
      <Button variant="default">Button</Button>
    </div>
        {/* darkmode and login button end*/}

        {/* mobile hamber menu start */}
        <div className="lg:hidden">
          <Button >
            <IoMdMenu size={24} />
            </Button>
        </div>
        {/* mobile hamber menu end */}
      </nav>
    </header>
  )
}

export default Navbar