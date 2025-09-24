

import { Switch } from "@/components/ui/switch"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import React from 'react';

const MobileMenu = ({mobileMenuOpen,darkmode,setDarkmode,setMobileMenuOpen}) => {
    return (
      <nav className="flex items-center justify-between w-10/12 mx-auto py-4">

  {/* Mobile Hamburger (left) */}
  <div className="lg:hidden order-1">
    <Button variant="ghost" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
      <IoMdMenu size={24} className="text-gray-800 dark:text-white" />
    </Button>
  </div>

  {/* Logo (center) */}
  <div className="text-xl font-bold text-gray-800 dark:text-white order-2 mx-auto">
    <Link href="/">QuickMart</Link>
  </div>

  {/* Right: DarkMode + Login/Profile (right) */}
  <div className="flex items-center space-x-2 order-3 lg:order-2">
    <Switch checked={darkmode} onCheckedChange={setDarkmode} />
    {userLoggedIn ? (
      <Avatar>
        <AvatarImage src="https://i.pravatar.cc/40" />
        <AvatarFallback>U</AvatarFallback>
      </Avatar>
    ) : (
      <Button variant="default"><Link href="/login">Login</Link></Button>
    )}
  </div>


</nav>
    );
};

export default MobileMenu;