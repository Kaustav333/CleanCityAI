'use client'

import { DashboardLayout } from '@/components/DashboardLayout'
import dynamic from 'next/dynamic'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'

const HotspotMapWithNoSSR = dynamic(() => import('@/components/HotspotMapComponent'), {
  ssr: false,
  loading: () => <div className="h-[600px] w-full bg-gray-100 animate-pulse rounded-lg flex items-center justify-center">Loading Heatmap...</div>
})

export default function HotspotMapPage() {
  return (
    <DashboardLayout role="municipal">
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Waste Hotspots</h1>
          <p className="text-gray-500">Visualize problem areas based on report frequency and severity.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="md:col-span-3">
            <Card>
              <CardContent className="p-0">
                <HotspotMapWithNoSSR />
              </CardContent>
            </Card>
          </div>
          
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Filters</CardTitle>
                <CardDescription>Analyze specific issues</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center space-x-2">
                  <input type="checkbox" id="overflow" defaultChecked className="rounded text-red-600 focus:ring-red-600" />
                  <label htmlFor="overflow" className="text-sm font-medium leading-none">Overflowing Bins</label>
                </div>
                <div className="flex items-center space-x-2">
                  <input type="checkbox" id="dumping" defaultChecked className="rounded text-red-600 focus:ring-red-600" />
                  <label htmlFor="dumping" className="text-sm font-medium leading-none">Illegal Dumping</label>
                </div>
                <div className="flex items-center space-x-2">
                  <input type="checkbox" id="damaged" defaultChecked className="rounded text-red-600 focus:ring-red-600" />
                  <label htmlFor="damaged" className="text-sm font-medium leading-none">Damaged Infrastructure</label>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle>Action Suggestions</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4 text-sm">
                  <div className="p-3 bg-red-50 border border-red-100 rounded-md">
                    <p className="font-semibold text-red-800">Severe Dumping Alert</p>
                    <p className="text-red-600 mt-1">Sector 4 River Bank requires immediate cleanup dispatch.</p>
                  </div>
                  <div className="p-3 bg-yellow-50 border border-yellow-100 rounded-md">
                    <p className="font-semibold text-yellow-800">Route Optimization</p>
                    <p className="text-yellow-700 mt-1">Consider increasing collection frequency in Connaught Place.</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </DashboardLayout>
  )
}
