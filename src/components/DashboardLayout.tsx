import Link from 'next/link'
import { Leaf, MapPin, Camera, Award, LayoutDashboard, Settings, LogOut, Trash2, Map } from 'lucide-react'
import { Button } from '@/components/ui/button'

const citizenNav = [
  { name: 'Dashboard', href: '/dashboard', icon: LayoutDashboard },
  { name: 'Map Explorer', href: '/map', icon: Map },
  { name: 'Report Issue', href: '/report', icon: Trash2 },
  { name: 'AI Scanner', href: '/scanner', icon: Camera },
  { name: 'Rewards', href: '/rewards', icon: Award },
]

const municipalNav = [
  { name: 'Dashboard', href: '/municipal', icon: LayoutDashboard },
  { name: 'Manage Reports', href: '/municipal/reports', icon: Trash2 },
  { name: 'Hotspot Map', href: '/municipal/hotspots', icon: MapPin },
]

const adminNav = [
  { name: 'Platform Overview', href: '/admin', icon: LayoutDashboard },
  { name: 'Users', href: '/admin/users', icon: Settings },
]

export function DashboardLayout({ 
  children, 
  role = 'citizen' 
}: { 
  children: React.ReactNode
  role?: 'citizen' | 'municipal' | 'admin' 
}) {
  
  const navItems = role === 'citizen' ? citizenNav : role === 'municipal' ? municipalNav : adminNav

  return (
    <div className="flex min-h-[calc(100vh-4rem)]">
      {/* Sidebar */}
      <aside className="w-64 border-r bg-gray-50 hidden md:block">
        <div className="flex flex-col h-full py-6 px-4">
          <div className="flex-1 space-y-1">
            {navItems.map((item) => {
              const Icon = item.icon
              return (
                <Link key={item.name} href={item.href}>
                  <Button variant="ghost" className="w-full justify-start gap-3 mb-1">
                    <Icon className="h-5 w-5 text-gray-500" />
                    {item.name}
                  </Button>
                </Link>
              )
            })}
          </div>
          
          <div className="pt-6 border-t">
            <Link href="/settings">
              <Button variant="ghost" className="w-full justify-start gap-3 mb-1">
                <Settings className="h-5 w-5 text-gray-500" />
                Settings
              </Button>
            </Link>
            <Button variant="ghost" className="w-full justify-start gap-3 text-red-600 hover:text-red-700 hover:bg-red-50">
              <LogOut className="h-5 w-5" />
              Sign Out
            </Button>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-6 md:p-8 bg-white">
        {children}
      </main>
    </div>
  )
}
