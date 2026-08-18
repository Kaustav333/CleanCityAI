import { DashboardLayout } from '@/components/DashboardLayout'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Award, Star, TrendingUp } from 'lucide-react'

export default function RewardsPage() {
  return (
    <DashboardLayout role="citizen">
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Rewards & Leaderboard</h1>
          <p className="text-gray-500">Earn points by keeping the city clean and compete with others.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card className="bg-gradient-to-br from-green-500 to-green-600 text-white border-none">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Star className="h-5 w-5" />
                Your Points
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-5xl font-bold">1,250</div>
              <p className="text-green-100 mt-2">Rank: Eco Warrior</p>
            </CardContent>
          </Card>

          <Card className="md:col-span-2">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <TrendingUp className="h-5 w-5 text-green-600" />
                Recent Activity
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex justify-between items-center border-b pb-2">
                  <div>
                    <p className="font-medium text-gray-800">Reported Overflowing Bin</p>
                    <p className="text-sm text-gray-500">Verified on Oct 24, 2026</p>
                  </div>
                  <span className="font-bold text-green-600">+50 pts</span>
                </div>
                <div className="flex justify-between items-center border-b pb-2">
                  <div>
                    <p className="font-medium text-gray-800">Scanned Recyclable Item</p>
                    <p className="text-sm text-gray-500">Oct 22, 2026</p>
                  </div>
                  <span className="font-bold text-green-600">+10 pts</span>
                </div>
                <div className="flex justify-between items-center">
                  <div>
                    <p className="font-medium text-gray-800">Community Cleanup Event</p>
                    <p className="text-sm text-gray-500">Oct 15, 2026</p>
                  </div>
                  <span className="font-bold text-green-600">+200 pts</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Award className="h-5 w-5 text-yellow-500" />
              City Leaderboard
            </CardTitle>
            <CardDescription>Top contributors this month</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[
                { rank: 1, name: 'Sarah M.', points: '4,500' },
                { rank: 2, name: 'John D.', points: '3,820' },
                { rank: 3, name: 'EcoClub Team', points: '3,100' },
                { rank: 4, name: 'Priya K.', points: '2,950' },
                { rank: 5, name: 'You', points: '1,250' },
              ].map((user) => (
                <div key={user.rank} className={`flex items-center justify-between p-3 rounded-lg ${user.name === 'You' ? 'bg-green-50 border border-green-200' : 'bg-gray-50'}`}>
                  <div className="flex items-center gap-4">
                    <span className={`font-bold w-6 ${user.rank <= 3 ? 'text-yellow-600' : 'text-gray-500'}`}>#{user.rank}</span>
                    <span className="font-medium text-gray-900">{user.name}</span>
                  </div>
                  <span className="font-bold text-green-700">{user.points}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  )
}
