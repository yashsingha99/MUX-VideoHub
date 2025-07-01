"use client"

import { useEffect, useRef } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { User, Settings, BarChart3, Video, Upload, Download, Eye, Clock, TrendingUp, Globe } from "lucide-react"
import { useAuth } from "@/contexts/auth-context"
import { gsap } from "gsap"

export default function ProfileDashboard() {
  const { user } = useAuth()
  const dashboardRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (dashboardRef.current) {
      gsap.fromTo(
        dashboardRef.current.children,
        { y: 50, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, ease: "power2.out", stagger: 0.1 },
      )
    }
  }, [])

  if (!user) return null

  const usagePercentage = {
    encoding: (user.usage.encodingMinutes / 5000) * 100,
    storage: (user.usage.storageGB / 100) * 100,
    delivery: (user.usage.deliveryGB / 1000) * 100,
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 to-orange-50 dark:from-gray-900 dark:to-amber-950 py-8">
      <div className="container mx-auto px-4">
        <div ref={dashboardRef} className="space-y-8">
          {/* Profile Header */}
          <Card className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border-amber-200 dark:border-amber-800">
            <CardContent className="p-8">
              <div className="flex items-center space-x-6">
                <div className="w-20 h-20 bg-gradient-to-r from-amber-500 to-orange-500 rounded-full flex items-center justify-center">
                  <User className="w-10 h-10 text-white" />
                </div>
                <div className="flex-1">
                  <h1 className="text-3xl font-bold text-amber-900 dark:text-amber-100 mb-2">
                    Welcome back, {user.name}!
                  </h1>
                  <p className="text-amber-700 dark:text-amber-300 mb-4">{user.email}</p>
                  <div className="flex items-center space-x-4">
                    <span className="px-3 py-1 bg-gradient-to-r from-amber-500 to-orange-500 text-white rounded-full text-sm font-medium capitalize">
                      {user.plan} Plan
                    </span>
                    <Button
                      variant="outline"
                      size="sm"
                      className="border-amber-300 text-amber-700 hover:bg-amber-50 bg-transparent"
                    >
                      <Settings className="w-4 h-4 mr-2" />
                      Settings
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Usage Overview */}
          <div className="grid md:grid-cols-3 gap-6">
            <Card className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border-amber-200 dark:border-amber-800">
              <CardHeader className="pb-3">
                <CardTitle className="flex items-center text-amber-900 dark:text-amber-100">
                  <Video className="w-5 h-5 mr-2 text-blue-500" />
                  Encoding Minutes
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-2xl font-bold text-amber-900 dark:text-amber-100">
                      {user.usage.encodingMinutes.toLocaleString()}
                    </span>
                    <span className="text-sm text-amber-600 dark:text-amber-400">/ 5,000</span>
                  </div>
                  <Progress value={usagePercentage.encoding} className="h-2" />
                  <p className="text-sm text-amber-700 dark:text-amber-300">
                    {Math.round(usagePercentage.encoding)}% used this month
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border-amber-200 dark:border-amber-800">
              <CardHeader className="pb-3">
                <CardTitle className="flex items-center text-amber-900 dark:text-amber-100">
                  <Upload className="w-5 h-5 mr-2 text-green-500" />
                  Storage Used
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-2xl font-bold text-amber-900 dark:text-amber-100">
                      {user.usage.storageGB} GB
                    </span>
                    <span className="text-sm text-amber-600 dark:text-amber-400">/ 100 GB</span>
                  </div>
                  <Progress value={usagePercentage.storage} className="h-2" />
                  <p className="text-sm text-amber-700 dark:text-amber-300">
                    {Math.round(usagePercentage.storage)}% of storage used
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border-amber-200 dark:border-amber-800">
              <CardHeader className="pb-3">
                <CardTitle className="flex items-center text-amber-900 dark:text-amber-100">
                  <Download className="w-5 h-5 mr-2 text-purple-500" />
                  Delivery
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-2xl font-bold text-amber-900 dark:text-amber-100">
                      {user.usage.deliveryGB} GB
                    </span>
                    <span className="text-sm text-amber-600 dark:text-amber-400">/ 1,000 GB</span>
                  </div>
                  <Progress value={usagePercentage.delivery} className="h-2" />
                  <p className="text-sm text-amber-700 dark:text-amber-300">
                    {Math.round(usagePercentage.delivery)}% delivered this month
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Analytics Dashboard */}
          <div className="grid lg:grid-cols-2 gap-6">
            <Card className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border-amber-200 dark:border-amber-800">
              <CardHeader>
                <CardTitle className="flex items-center text-amber-900 dark:text-amber-100">
                  <BarChart3 className="w-5 h-5 mr-2 text-blue-500" />
                  Performance Metrics
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div className="flex items-center justify-between p-4 bg-gradient-to-r from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/20 rounded-lg">
                    <div className="flex items-center space-x-3">
                      <Eye className="w-5 h-5 text-blue-500" />
                      <span className="font-medium">Total Views</span>
                    </div>
                    <span className="text-2xl font-bold text-blue-600">1.2M</span>
                  </div>

                  <div className="flex items-center justify-between p-4 bg-gradient-to-r from-green-50 to-green-100 dark:from-green-900/20 dark:to-green-800/20 rounded-lg">
                    <div className="flex items-center space-x-3">
                      <Clock className="w-5 h-5 text-green-500" />
                      <span className="font-medium">Avg. Watch Time</span>
                    </div>
                    <span className="text-2xl font-bold text-green-600">4:32</span>
                  </div>

                  <div className="flex items-center justify-between p-4 bg-gradient-to-r from-purple-50 to-purple-100 dark:from-purple-900/20 dark:to-purple-800/20 rounded-lg">
                    <div className="flex items-center space-x-3">
                      <TrendingUp className="w-5 h-5 text-purple-500" />
                      <span className="font-medium">Quality Score</span>
                    </div>
                    <span className="text-2xl font-bold text-purple-600">94.2</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border-amber-200 dark:border-amber-800">
              <CardHeader>
                <CardTitle className="flex items-center text-amber-900 dark:text-amber-100">
                  <Globe className="w-5 h-5 mr-2 text-orange-500" />
                  Global Reach
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="text-center mb-6">
                    <div className="text-4xl font-bold bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent mb-2">
                      47
                    </div>
                    <p className="text-amber-700 dark:text-amber-300">Countries Reached</p>
                  </div>

                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-medium">United States</span>
                      <span className="text-sm text-amber-600 dark:text-amber-400">34%</span>
                    </div>
                    <Progress value={34} className="h-2" />

                    <div className="flex justify-between items-center">
                      <span className="text-sm font-medium">United Kingdom</span>
                      <span className="text-sm text-amber-600 dark:text-amber-400">18%</span>
                    </div>
                    <Progress value={18} className="h-2" />

                    <div className="flex justify-between items-center">
                      <span className="text-sm font-medium">Germany</span>
                      <span className="text-sm text-amber-600 dark:text-amber-400">12%</span>
                    </div>
                    <Progress value={12} className="h-2" />

                    <div className="flex justify-between items-center">
                      <span className="text-sm font-medium">Others</span>
                      <span className="text-sm text-amber-600 dark:text-amber-400">36%</span>
                    </div>
                    <Progress value={36} className="h-2" />
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Quick Actions */}
          <Card className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border-amber-200 dark:border-amber-800">
            <CardHeader>
              <CardTitle className="text-amber-900 dark:text-amber-100">Quick Actions</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-4 gap-4">
                <Button className="bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white p-6 h-auto flex-col space-y-2">
                  <Upload className="w-6 h-6" />
                  <span>Upload Video</span>
                </Button>
                <Button
                  variant="outline"
                  className="border-amber-300 text-amber-700 hover:bg-amber-50 p-6 h-auto flex-col space-y-2 bg-transparent"
                >
                  <BarChart3 className="w-6 h-6" />
                  <span>View Analytics</span>
                </Button>
                <Button
                  variant="outline"
                  className="border-amber-300 text-amber-700 hover:bg-amber-50 p-6 h-auto flex-col space-y-2 bg-transparent"
                >
                  <Settings className="w-6 h-6" />
                  <span>API Settings</span>
                </Button>
                <Button
                  variant="outline"
                  className="border-amber-300 text-amber-700 hover:bg-amber-50 p-6 h-auto flex-col space-y-2 bg-transparent"
                >
                  <User className="w-6 h-6" />
                  <span>Account</span>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
