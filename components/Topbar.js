"use client"

import { Bell } from "lucide-react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"

export default function Topbar() {
  return (
    <div className="flex items-center justify-between bg-white p-4 rounded-xl shadow-sm mb-6">
      
      <h1 className="text-lg md:text-xl font-semibold text-gray-800">
        
      </h1>

      
      <div className="flex items-center gap-3">
        <Button
          variant="ghost"
          size="icon"
          className="hover:bg-gray-100 text-gray-600"
        >
          <Bell size={20} />
        </Button>

        <Avatar className="h-9 w-9">
          <AvatarImage src="/" alt="User" />
          <AvatarFallback>DS</AvatarFallback>
        </Avatar>
      </div>
    </div>
  )
}
