"use client"

import React from "react"
import { FiBookOpen } from "react-icons/fi"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"

const Signup = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="w-full max-w-md p-6 bg-white rounded-lg border border-gray-200 shadow-md">

        {/* Logo */}
        <div className="flex justify-center items-center space-x-2 mb-4">
          <FiBookOpen className="text-3xl text-cyan-500" />
          <div className="font-bold font-[cursive] leading-tight">
            <span className="text-cyan-500 text-1xl">King</span>
            <span className="text-fuchsia-500 text-1xl">Dance</span>
          </div>
        </div>

        {/* Header */}
        <div className="text-center mb-6">
          <h1 className="text-2xl font-bold">Sign Up</h1>
          <p className="text-sm text-gray-500">Create your account to get started</p>
        </div>

        <Tabs defaultValue="teacher" className="w-full">
          <TabsList className="grid grid-cols-2 w-full bg-fuchsia-100 mb-4 rounded">
            <TabsTrigger value="teacher" className="data-[state=active]:bg-cyan-500 data-[state=active]:text-white rounded cursor-pointer">
              Teacher
            </TabsTrigger>
            <TabsTrigger value="student" className="data-[state=active]:bg-cyan-500 data-[state=active]:text-white rounded cursor-pointer">
              Student
            </TabsTrigger>
          </TabsList>

          {/* Teacher Signup Form */}
          <TabsContent value="teacher">
            <form className="space-y-4">
              <div>
                <Label htmlFor="fullName">Full Name</Label>
                <Input id="fullName" type="text" placeholder="John Doe" />
              </div>

              <div>
                <Label htmlFor="teacherId">Teacher ID</Label>
                <Input id="teacherId" type="text" placeholder="TCH/001/2025" />
              </div>

              <div>
                <Label htmlFor="teacherEmail">Email</Label>
                <Input id="teacherEmail" type="email" placeholder="teacher@school.edu" />
              </div>

              <div>
                <Label htmlFor="password">Password</Label>
                <Input id="password" type="password" />
              </div>

              <div>
                <Label htmlFor="confirmPassword">Confirm Password</Label>
                <Input id="confirmPassword" type="password" />
              </div>

              <Button className="w-full bg-cyan-500 hover:bg-cyan-700 text-white cursor-pointer">
                Create Teacher Account
              </Button>
            </form>
            <p className="text-sm text-center mt-4">
              Already have an account?{" "}
              <a href="/login" className="text-cyan-500 font-medium hover:underline">Login here</a>
            </p>
          </TabsContent>

          {/* Student Signup Form */}
          <TabsContent value="student">
            <form className="space-y-4">
              <div>
                <Label htmlFor="fullNameStudent">Full Name</Label>
                <Input id="fullNameStudent" type="text" placeholder="Jane Doe" />
              </div>

              <div>
                <Label htmlFor="matric">Matric Number</Label>
                <Input id="matric" type="text" placeholder="210903072" />
              </div>

              <div>
                <Label htmlFor="studentEmail">Email</Label>
                <Input id="studentEmail" type="email" placeholder="student@school.edu" />
              </div>

              <div>
                <Label htmlFor="studentPassword">Password</Label>
                <Input id="studentPassword" type="password" />
              </div>

              <div>
                <Label htmlFor="confirmStudentPassword">Confirm Password</Label>
                <Input id="confirmStudentPassword" type="password" />
              </div>

              <Button className="w-full bg-cyan-500 hover:bg-cyan-700 text-white cursor-pointer">
                Create Student Account
              </Button>
            </form>
            <p className="text-sm text-center mt-4">
              Already have an account?{" "}
              <a href="/login" className="text-cyan-500 font-medium hover:underline">Login here</a>
            </p>
          </TabsContent>
        </Tabs>

        {/* Footer */}
        <p className="text-xs text-gray-500 text-center mt-6">
          © 2025 School Attendance System. All rights reserved.
        </p>
      </div>
    </div>
  )
}

export default Signup
