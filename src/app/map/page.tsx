'use client'

import { DashboardLayout } from '@/components/DashboardLayout'
import dynamic from 'next/dynamic'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'

const MapWithNoSSR = dynamic(() => import('@/components/MapComponent'), {
  ssr: false,
  loading: () => <div className="h-[600px] w-full bg-gray-100 animate-pulse rounded-lg flex items-center justify-center">Loading Map...</div>
})

export default function MapPage() {
  return (
    <DashboardLayout role="citizen">
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Map Explorer</h1>
          <p className="text-gray-500">Find nearby public dustbins and recycling centers.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="md:col-span-3">
            <Card>
              <CardContent className="p-0">
                <MapWithNoSSR />
              </CardContent>
            </Card>
          </div>
          
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Filters</CardTitle>
                <CardDescription>Refine your search</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center space-x-2">
                  <input type="checkbox" id="public" defaultChecked className="rounded text-green-600 focus:ring-green-600" />
                  <label htmlFor="public" className="text-sm font-medium leading-none">Public Bins</label>
                </div>
                <div className="flex items-center space-x-2">
                  <input type="checkbox" id="recycling" defaultChecked className="rounded text-green-600 focus:ring-green-600" />
                  <label htmlFor="recycling" className="text-sm font-medium leading-none">Recycling Centers</label>
                </div>
                <div className="flex items-center space-x-2">
                  <input type="checkbox" id="ewaste" defaultChecked className="rounded text-green-600 focus:ring-green-600" />
                  <label htmlFor="ewaste" className="text-sm font-medium leading-none">E-Waste Points</label>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle>Legend</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2 text-sm">
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                  <span>Normal</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <span>Overflowing</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </DashboardLayout>
  )
}
