import { Avatar } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Switch } from '@/components/ui/switch';
import { Link } from 'lucide-react';
import React from 'react';

const MobileMenu = ({darkmode,setDarkmode}) => {
    return (
   <div >
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
            {userLoggedIn ? (
              <Avatar>
                <AvatarImage src="https://i.pravatar.cc/40" />
                <AvatarFallback>U</AvatarFallback>
              </Avatar>
            ) : (
              <div className="flex space-x-2">
                <Button variant="default"><Link href="/login">Login</Link></Button>
                <Button variant="outline"><Link href="/register">Register</Link></Button>
              </div>
            )}
          </div>
        </div>
    );
};

export default MobileMenu;