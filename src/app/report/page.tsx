import { DashboardLayout } from '@/components/DashboardLayout'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { MapPin, UploadCloud } from 'lucide-react'

export default function ReportIssuePage() {
  return (
    <DashboardLayout role="citizen">
      <div className="space-y-6 max-w-2xl mx-auto">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Report Issue</h1>
          <p className="text-gray-500">Help keep the city clean by reporting overflowing bins or illegal dumping.</p>
        </div>
        
        <Card>
          <CardHeader>
            <CardTitle>Issue Details</CardTitle>
            <CardDescription>Provide information about the waste issue.</CardDescription>
          </CardHeader>
          <CardContent>
            <form className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="issue-type">Issue Type</Label>
                <select id="issue-type" className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2">
                  <option value="overflow">Overflowing Dustbin</option>
                  <option value="illegal_dumping">Illegal Dumping</option>
                  <option value="damaged">Damaged Dustbin</option>
                </select>
              </div>
              
              <div className="space-y-2">
                <Label>Location</Label>
                <div className="flex gap-2">
                  <Input placeholder="Enter address or fetch location..." />
                  <Button type="button" variant="outline" className="shrink-0 gap-2">
                    <MapPin className="h-4 w-4" />
                    Locate Me
                  </Button>
                </div>
              </div>
              
              <div className="space-y-2">
                <Label>Photo Evidence</Label>
                <div className="border-2 border-dashed rounded-lg p-12 text-center hover:bg-gray-50 transition-colors cursor-pointer">
                  <UploadCloud className="mx-auto h-8 w-8 text-gray-400 mb-4" />
                  <div className="text-sm text-gray-600">
                    <span className="text-green-600 font-semibold hover:underline">Click to upload</span> or drag and drop
                  </div>
                  <p className="text-xs text-gray-500 mt-2">PNG, JPG up to 10MB</p>
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="description">Description (Optional)</Label>
                <textarea 
                  id="description" 
                  rows={4}
                  className="flex w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
                  placeholder="Provide any additional details..."
                />
              </div>

              <Button type="button" className="w-full bg-green-600 hover:bg-green-700 text-white">
                Submit Report
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  )
}
