import React from "react"
import Navbar from "@/components/Navbar"
import Sidebar from "@/components/Sidebar"
import "./layout.css"

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex flex-col sm:flex-row overflow-x-hidden h-screen">
      <div className="w-screen hidden sm:flex sm:w-[7vw] bg-blue-400 sm:h-full">
        <Sidebar />
      </div>
      <div className="w-screen md:w-[93vw] flex flex-col">
        <Navbar />
        <div className="w-full h-auto">{children}</div>
      </div>
      <div className="w-screen sm:w-[7vw] bg-blue-400 sm:hidden">
        <Sidebar />
      </div>
    </div>
  )
}

export default Layout
