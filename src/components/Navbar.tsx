'use client'

import Link from 'next/link'
import { Leaf, Menu, LogOut, User } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { useEffect, useState } from 'react'
import { createClient } from '@/utils/supabase/client'
import { useRouter } from 'next/navigation'

export function Navbar() {
  const [user, setUser] = useState<any>(null)
  const [userName, setUserName] = useState<string | null>(null)
  const [loading, setLoading] = useState(true)
  const router = useRouter()
  const supabase = createClient()

  useEffect(() => {
    const getUser = async () => {
      const { data: { user } } = await supabase.auth.getUser()
      setUser(user)
      if (user) {
        setUserName(user.user_metadata?.name || user.email?.split('@')[0] || 'User')
      }
      setLoading(false)
    }
    getUser()

    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      if (session?.user) {
        setUser(session.user)
        setUserName(session.user.user_metadata?.name || session.user.email?.split('@')[0] || 'User')
      } else {
        setUser(null)
        setUserName(null)
      }
    })

    return () => subscription.unsubscribe()
  }, [])

  const handleSignOut = async () => {
    await supabase.auth.signOut()
    setUser(null)
    setUserName(null)
    router.push('/')
  }

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <Leaf className="h-6 w-6 text-green-600" />
          <Link href="/" className="flex items-center space-x-2">
            <span className="font-bold text-xl inline-block text-green-700">CleanCity AI</span>
          </Link>
        </div>
        <nav className="hidden md:flex gap-6">
          <Link href="/#features" className="text-sm font-medium hover:text-green-600 transition-colors">
            Features
          </Link>
          <Link href="/#impact" className="text-sm font-medium hover:text-green-600 transition-colors">
            Impact
          </Link>
          <Link href="/#about" className="text-sm font-medium hover:text-green-600 transition-colors">
            About
          </Link>
        </nav>
        <div className="flex items-center gap-4">
          {loading ? (
            <div className="h-8 w-24 bg-gray-100 animate-pulse rounded-md" />
          ) : user ? (
            <>
              <div className="hidden md:flex items-center gap-2 text-sm">
                <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center">
                  <User className="h-4 w-4 text-green-700" />
                </div>
                <span className="font-medium text-gray-700">{userName}</span>
              </div>
              <Button
                variant="ghost"
                size="sm"
                onClick={handleSignOut}
                className="text-gray-500 hover:text-red-600"
              >
                <LogOut className="h-4 w-4 mr-1" />
                <span className="hidden md:inline">Sign Out</span>
              </Button>
            </>
          ) : (
            <>
              <Link href="/login">
                <Button variant="ghost" className="hidden md:flex">Sign In</Button>
              </Link>
              <Link href="/register">
                <Button className="bg-green-600 hover:bg-green-700 text-white">Get Started</Button>
              </Link>
            </>
          )}
          <Button variant="ghost" size="icon" className="md:hidden">
            <Menu className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </header>
  )
}
