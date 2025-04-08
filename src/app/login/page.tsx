"use client"

import React from "react"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import { FiBookOpen } from "react-icons/fi"
import Link from "next/link"

const TeacherLogin = () => {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="w-full max-w-md p-6 bg-white rounded-lg border border-gray-200 shadow-md">
        
        {/* Logo Section */}
        <div className="flex justify-center items-center space-x-2 mb-4">
          <FiBookOpen className="text-3xl text-cyan-500" />
          <div className="font-bold font-[cursive] leading-tight">
            <span className="text-cyan-500 text-1xl">King</span>
            <span className="text-fuchsia-500 text-1xl">Dance</span>
          </div>
        </div>

        {/* Header */}
        <div className="text-center mb-6">
          <h1 className="text-2xl font-bold">Login</h1>
          <p className="text-sm text-gray-500">Sign in to manage your attendance</p>
        </div>

        {/* Login Form */}
        <form className="space-y-4">
          <div>
            <Label htmlFor="email">Email</Label>
            <Input id="email" type="email" placeholder="johnDoe@gmail.edu" />
          </div>

          <div>
            <Label htmlFor="password">Password</Label>
            <Input id="password" type="password" />
          </div>

          <div className="flex justify-between items-center text-sm">
            <div className="flex items-center space-x-2">
              <input type="checkbox" id="remember" className="cursor-pointer" />
              <Label htmlFor="remember">Remember me</Label>
            </div>
            <a href="#" className="text-cyan-500 hover:underline">Forgot password?</a>
          </div>

          <Button className="w-full bg-cyan-500 hover:bg-cyan-700 text-white cursor-pointer">
            Sign In
          </Button>
        </form>

        <p className="text-sm text-center mt-4">
          Don&apos;t have an account?{" "}
          <Link href="/signup" className="text-cyan-500 font-medium hover:underline">
            Register here
          </Link>
        </p>

        <p className="text-xs text-gray-500 text-center mt-6">
          © 2025 School Attendance System. All rights reserved.
        </p>
      </div>
    </div>
  )
}

export default TeacherLogin
