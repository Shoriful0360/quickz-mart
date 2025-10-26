"use client";

import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Link from "next/link";
import { useDispatch } from "react-redux";
import { registerUser } from "../../redux/authAction";

export default function SignUpPage() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
const dispatch=useDispatch()
  // watch password field to compare with confirm password
  const password = watch("password");

  const onSubmit = (data) => {

    
    dispatch(registerUser(data.name,data.email,data.password,data.phone))
  };

  return (
    <div className="h-screen w-screen relative">
      {/* Background Image */}
      <img
        src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1920&q=80"
        alt="Nature background"
        className="absolute inset-0 h-full w-full object-cover"
      />

      {/* Blur Overlay */}
      <div className="absolute inset-0 bg-black/40 backdrop-blur-sm"></div>

      {/* Signup Form - Glass Effect */}
      <div className="relative h-full flex items-center justify-center">
        <Card className="w-full max-w-md bg-white/20 backdrop-blur-lg border border-white/30 shadow-2xl rounded-2xl">
          <CardHeader className="text-center space-y-2">
            <CardTitle className="text-3xl font-bold text-white drop-shadow">
              Create an Account
            </CardTitle>
            <CardDescription className="text-gray-200">
              Sign up and start your journey today 🚀
            </CardDescription>
          </CardHeader>

          <CardContent>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
              {/* Full Name */}
              <div className="grid gap-2">
                <Label htmlFor="name" className="text-white">
                  Full Name
                </Label>
                <Input
                  id="name"
                  {...register("name", { required: true })}
                  type="text"
                  placeholder="John Doe"
                  className="bg-white/30 border-white/40 text-white placeholder:text-gray-200"
                />
                {errors.name && (
                  <span className="text-red-500">Name is required</span>
                )}
              </div>

              {/* Email */}
              <div className="grid gap-2">
                <Label htmlFor="email" className="text-white">
                  Email
                </Label>
                <Input
                  id="email"
                  {...register("email", { required: true })}
                  type="email"
                  placeholder="m@example.com"
                  className="bg-white/30 border-white/40 text-white placeholder:text-gray-200"
                />
                {errors.email && (
                  <span className="text-red-500">Email is required</span>
                )}
              </div>
              {/* phone */}
              <div className="grid gap-2">
                <Label htmlFor="email" className="text-white">
                  Phone
                </Label>
                <Input
                  id="phone"
                  {...register("phone", { required: 'Number  is required' ,
                    minLength:{
                      value:11,
                      message:"Phone number must be 11 digits"
                    },
                    maxLength:{
                      value:11,
                      message:"Phone number must be 11 digits"
                    },
                    pattern:{
                      value:/^[0-9]{11}$/,
                      message:"Invalid phone number"
                    }
                  })}
                  type="number"
                  placeholder="01307177507"
                  className="bg-white/30 border-white/40 text-white placeholder:text-gray-200"
                />
                {errors.phone && (
                  <span className="text-red-500">{errors.phone.message}</span>
                )}
            
              </div>

              {/* Password */}
              <div className="grid gap-2">
                <Label htmlFor="password" className="text-white">
                  Password
                </Label>
                <Input
                  id="password"
                  {...register("password", {
                    required: true,
                    minLength: 6,
                    maxLength: 20,
                    pattern:
                      /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])/,
                  })}
                  type="password"
                  className="bg-white/30 border-white/40 text-white placeholder:text-gray-200"
                />
                {errors.password?.type === "required" && (
                  <span className="text-red-500">Password is required</span>
                )}
                {errors.password?.type === "minLength" && (
                  <span className="text-red-500">
                    Password must be at least 6 characters
                  </span>
                )}
                {errors.password?.type === "maxLength" && (
                  <span className="text-red-500">
                    Password cannot exceed 20 characters
                  </span>
                )}
                {errors.password?.type === "pattern" && (
                  <span className="text-red-500">
                    Must include uppercase, lowercase, number & special
                    character
                  </span>
                )}
              </div>

              {/* Confirm Password */}
              <div className="grid gap-2">
                <Label htmlFor="confirm" className="text-white">
                  Confirm Password
                </Label>
                <Input
                  id="confirm"
                  type="password"
                  {...register("confirm", {
                    required: true,
                    validate: (value) =>
                      value === password || "Passwords do not match",
                  })}
                  className="bg-white/30 border-white/40 text-white placeholder:text-gray-200"
                />
                {errors.confirm && (
                  <span className="text-red-500">
                    {errors.confirm.message}
                  </span>
                )}
              </div>

              {/* Terms */}
              <div className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  id="terms"
                  className="h-4 w-4 rounded border-gray-300"
                  {...register("terms", { required: true })}
                />
                <Label htmlFor="terms" className="text-sm text-gray-200">
                  I agree to the{" "}
                  <a href="#" className="underline hover:text-indigo-300">
                    Terms & Conditions
                  </a>
                </Label>
                {errors.terms && (
                  <span className="text-red-500 text-sm">You must accept terms</span>
                )}
              </div>

              {/* Sign Up Button */}
              <Button
                type="submit"
                className="w-full bg-indigo-600 hover:bg-indigo-700 text-white"
              >
                Sign Up
              </Button>
            </form>
          </CardContent>

          <CardFooter className="text-center">
            <p className="text-sm text-gray-200">
              Already have an account?{" "}
              <Link href="/page/authentication/Login" className="underline hover:text-indigo-300">
                Log In
              </Link>
            </p>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
}
