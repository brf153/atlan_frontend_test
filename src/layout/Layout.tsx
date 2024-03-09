import React from 'react'
import Navbar from '@/components/Navbar';
import Sidebar from '@/components/Sidebar';
import "./layout.css"

const Layout = ({ children }: { children: React.ReactNode }) => {

    return (
      <div className="App overflow-x-hidden">
        <div className='w-[7vw]'>
            <Sidebar />
            </div>
          <div className="w-[93vw] flex flex-col">
            <Navbar />
            <div className="w-full h-auto">{children}</div>
          </div>
      </div>
    )
  }

export default Layout