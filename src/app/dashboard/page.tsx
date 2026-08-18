import { DashboardLayout } from '@/components/DashboardLayout'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Leaf, Award, Camera, MapPin } from 'lucide-react'
import Link from 'next/link'

export default function DashboardPage() {
  return (
    <DashboardLayout role="citizen">
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Welcome back!</h1>
          <p className="text-muted-foreground mt-1">Here is an overview of your activity and impact.</p>
        </div>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Reports</CardTitle>
              <Camera className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">12</div>
              <p className="text-xs text-muted-foreground">+2 from last month</p>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Reward Points</CardTitle>
              <Award className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-green-600">850</div>
              <p className="text-xs text-muted-foreground">Top 15% of contributors</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Waste Scanned</CardTitle>
              <Leaf className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">24 items</div>
              <p className="text-xs text-muted-foreground">Mostly Recyclable</p>
            </CardContent>
          </Card>
        </div>

        <h2 className="text-xl font-semibold mt-8 mb-4">Quick Actions</h2>
        <div className="grid gap-4 md:grid-cols-2">
          <Link href="/map" className="block">
            <Card className="hover:border-green-500 transition-colors cursor-pointer">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <MapPin className="h-5 w-5 text-green-600" />
                  Find Nearest Bin
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-500">Explore the map to find public dustbins and recycling centers near you.</p>
              </CardContent>
            </Card>
          </Link>
          
          <Link href="/scanner" className="block">
            <Card className="hover:border-green-500 transition-colors cursor-pointer">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Camera className="h-5 w-5 text-green-600" />
                  Scan Waste
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-500">Use AI to classify your waste and learn how to dispose of it properly.</p>
              </CardContent>
            </Card>
          </Link>
        </div>
      </div>
    </DashboardLayout>
  )
}
