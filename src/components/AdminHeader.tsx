"use client"
import { LayoutDashboard, Search } from "lucide-react"
import { useEffect, useState } from "react"


import { Input } from "@/components/ui/input"
import { UserButton } from "@clerk/nextjs"

export function AdminHeader() {
  const [isClient, setIsClient] = useState(false); // State to track client-side rendering

  useEffect(() => {
    setIsClient(true); // Set to true when the component is rendered on the client
  }, []);

  if (!isClient) {
    return null; // Render nothing or a loading state while on the server
  }

  return (
    <header className="flex h-16 items-center gap-4 border-b bg-background px-6">
      <div className="flex items-center gap-2 font-semibold">
        <div className="size-8 rounded bg-primary text-primary-foreground grid place-items-center">
          <LayoutDashboard size={24}/>
        </div>
        Dashboard
      </div>
      <div className="flex-1">
        <form className="w-full max-w-[600px]">
          <div className="relative">
            <Input type="search" placeholder="Search..." className="pl-8" />
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
          </div>
        </form>
      </div>

      <UserButton />
    </header>
  );
}
