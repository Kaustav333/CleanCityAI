import { DashboardLayout } from '@/components/DashboardLayout'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'

const DUMMY_REPORTS = [
  { id: 'REP-1042', type: 'Overflowing Bin', location: 'Connaught Place, Block A', status: 'Pending', severity: 'High', date: '2026-10-25' },
  { id: 'REP-1041', type: 'Illegal Dumping', location: 'Yamuna River Bank, Sector 4', status: 'Verified', severity: 'High', date: '2026-10-24' },
  { id: 'REP-1040', type: 'Damaged Bin', location: 'Lodi Gardens, Gate 2', status: 'Assigned', severity: 'Low', date: '2026-10-23' },
  { id: 'REP-1039', type: 'Overflowing Bin', location: 'Hauz Khas Village', status: 'Resolved', severity: 'Medium', date: '2026-10-22' },
]

export default function ReportManagementPage() {
  return (
    <DashboardLayout role="municipal">
      <div className="space-y-6">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold tracking-tight">Manage Reports</h1>
            <p className="text-gray-500">Review and update the status of citizen reports.</p>
          </div>
          <Button variant="outline">Export Data</Button>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Recent Reports</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <table className="w-full text-sm text-left">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50">
                  <tr>
                    <th className="px-4 py-3">ID</th>
                    <th className="px-4 py-3">Type</th>
                    <th className="px-4 py-3">Location</th>
                    <th className="px-4 py-3">Date</th>
                    <th className="px-4 py-3">Severity</th>
                    <th className="px-4 py-3">Status</th>
                    <th className="px-4 py-3">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {DUMMY_REPORTS.map((report) => (
                    <tr key={report.id} className="border-b hover:bg-gray-50">
                      <td className="px-4 py-3 font-medium text-gray-900">{report.id}</td>
                      <td className="px-4 py-3">{report.type}</td>
                      <td className="px-4 py-3">{report.location}</td>
                      <td className="px-4 py-3">{report.date}</td>
                      <td className="px-4 py-3">
                        <span className={`px-2 py-1 rounded-full text-xs font-medium
                          ${report.severity === 'High' ? 'bg-red-100 text-red-700' : 
                            report.severity === 'Medium' ? 'bg-yellow-100 text-yellow-700' : 
                            'bg-blue-100 text-blue-700'}`}>
                          {report.severity}
                        </span>
                      </td>
                      <td className="px-4 py-3">
                        <span className={`px-2 py-1 rounded-full text-xs font-medium
                          ${report.status === 'Resolved' ? 'bg-green-100 text-green-700' : 
                            report.status === 'Pending' ? 'bg-gray-100 text-gray-700' : 
                            'bg-purple-100 text-purple-700'}`}>
                          {report.status}
                        </span>
                      </td>
                      <td className="px-4 py-3">
                        <Button variant="link" className="text-blue-600 p-0 h-auto">Review</Button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  )
}
