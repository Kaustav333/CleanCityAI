import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Leaf, MapPin, Camera, Award, Trash2 } from 'lucide-react'

export default function Home() {
  return (
    <div className="flex flex-col items-center">
      {/* Hero Section */}
      <section className="w-full py-24 md:py-32 lg:py-40 bg-gradient-to-b from-green-50 to-white flex justify-center text-center">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center space-y-4">
            <div className="space-y-2 max-w-[800px]">
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl/none text-green-900">
                Smarter Waste Management for a <span className="text-green-600">Cleaner City</span>
              </h1>
              <p className="mx-auto max-w-[700px] text-gray-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed pt-4">
                Join our citizen-powered platform. Find nearby dustbins, report issues, classify waste with AI, and earn rewards for keeping our city clean.
              </p>
            </div>
            <div className="space-x-4 pt-8">
              <Link href="/register">
                <Button size="lg" className="bg-green-600 hover:bg-green-700 text-white px-8">
                  Join Now
                </Button>
              </Link>
              <Link href="/map">
                <Button size="lg" variant="outline" className="border-green-600 text-green-600 hover:bg-green-50">
                  Explore Map
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="w-full py-20 bg-white">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-gray-900">Platform Features</h2>
            <p className="mt-4 text-lg text-gray-600">Everything you need to make a positive impact on your environment.</p>
          </div>
          <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
            <FeatureCard 
              icon={<MapPin className="h-10 w-10 text-green-600" />}
              title="Smart Locator"
              description="Find public dustbins, recycling centers, and e-waste collection points near you instantly."
            />
            <FeatureCard 
              icon={<Camera className="h-10 w-10 text-green-600" />}
              title="AI Waste Scanner"
              description="Not sure how to dispose of something? Take a photo and our AI will classify it for you."
            />
            <FeatureCard 
              icon={<Trash2 className="h-10 w-10 text-green-600" />}
              title="Report Issues"
              description="Easily report overflowing bins or illegal dumping directly to municipal authorities."
            />
            <FeatureCard 
              icon={<Award className="h-10 w-10 text-green-600" />}
              title="Earn Rewards"
              description="Get points for your positive actions and climb the community leaderboard."
            />
          </div>
        </div>
      </section>

      {/* Impact Section */}
      <section id="impact" className="w-full py-20 bg-green-900 text-white">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="grid gap-12 lg:grid-cols-2 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Our City's Impact</h2>
              <p className="text-lg text-green-100 max-w-[600px]">
                Together, we are making a measurable difference. Our platform connects citizens and authorities to create a sustainable, clean environment.
              </p>
              <div className="grid grid-cols-2 gap-6 pt-4">
                <div className="flex flex-col">
                  <span className="text-4xl font-bold text-green-400">12K+</span>
                  <span className="text-sm text-green-100 font-medium">Reports Resolved</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-4xl font-bold text-green-400">8,500</span>
                  <span className="text-sm text-green-100 font-medium">Active Citizens</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-4xl font-bold text-green-400">500+</span>
                  <span className="text-sm text-green-100 font-medium">Mapped Bins</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-4xl font-bold text-green-400">45 tons</span>
                  <span className="text-sm text-green-100 font-medium">Waste Recycled</span>
                </div>
              </div>
            </div>
            <div className="relative h-[400px] w-full rounded-2xl overflow-hidden bg-green-800/50 border border-green-700/50 flex items-center justify-center">
              <Leaf className="h-32 w-32 text-green-700/50 absolute" />
              {/* Replace with actual dashboard mockup image later */}
              <div className="z-10 text-center p-6 bg-green-900/80 backdrop-blur-sm rounded-xl border border-green-600">
                <h3 className="font-semibold text-xl mb-2">Municipal Dashboard Overview</h3>
                <p className="text-sm text-green-100">Real-time tracking of city cleanliness</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="w-full py-6 bg-gray-50 border-t border-gray-200 text-center">
        <p className="text-sm text-gray-500">© 2026 CleanCity AI. All rights reserved.</p>
      </footer>
    </div>
  )
}

function FeatureCard({ icon, title, description }: { icon: React.ReactNode, title: string, description: string }) {
  return (
    <div className="flex flex-col items-center text-center p-6 bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
      <div className="p-4 bg-green-50 rounded-full mb-6">
        {icon}
      </div>
      <h3 className="text-xl font-bold mb-3 text-gray-900">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  )
}
