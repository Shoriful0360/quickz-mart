'use client'
import { Button } from "@/components/ui/button"
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import Link from "next/link"
import { useDispatch } from "react-redux"
import { logIn } from "../../redux/authAction"

export default function Login() {
  const dispatch=useDispatch()
  // handle login
  const handleLogin=async(e)=>{
e.preventDefault()
const email=e.target.email.value;
const password=e.target.password.value;
 dispatch(logIn(email,password))
  }
  return (
    <div className=" min-h-screen flex items-center justify-center">
      <Card className="w-full max-w-sm mx-auto">
      <CardHeader>
        <CardTitle>Login to your account</CardTitle>
        <CardDescription>
          Enter your email below to login to your account
        </CardDescription>
        <CardAction>
      <Link href={'/page/authentication/Register'}>    <Button variant="link" className={'cursor-pointer'}>Sign Up</Button></Link>
        </CardAction>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleLogin}>
          <div className="flex flex-col gap-6">
            <div className="grid gap-2">
              <Label htmlFor="email">Email</Label>
              <Input
              name='email'
                id="email"
                type="email"
                placeholder="m@example.com"
                required
              />
            </div>
            <div className="grid gap-2">
              <div className="flex items-center">
                <Label htmlFor="password">Password</Label>
                <Link
                  href="/page/authentication/forgetPassword"
                  className="ml-auto inline-block text-sm underline-offset-4 hover:underline"
                >
                  Forgot your password?
                </Link>
              </div>
              <Input name='password' id="password" type="password" required />
            </div>
            <div>
                 <CardFooter className="flex-col gap-2 w-full">
        <Button type="submit" className="w-full">
          Login
        </Button>
      
      </CardFooter>
            </div>
          </div>
           
        </form>
          <Button variant="outline" className="w-full mt-2">
          Login with Google
        </Button>
      </CardContent>
  
    </Card>
    </div>
  )
}
