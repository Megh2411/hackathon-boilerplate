"use client"
import { AppLayout } from "@/components/app-layout"
import { AuthGuard } from "@/components/auth-guard"
import { StatsCards } from "@/components/stats-cards"
import { RevenueChart } from "@/components/revenue-chart"
import { UserActivityChart } from "@/components/user-activity-chart"
import { RecentActivity } from "@/components/recent-activity"
import { DataTable } from "@/components/data-table"

export default function DashboardPage() {
  return (
    <AuthGuard>
      <AppLayout>
        <div className="space-y-6">
          <div>
            <h2 className="text-3xl font-bold tracking-tight">Dashboard</h2>
            <p className="text-muted-foreground">Welcome back! Here's what's happening with your projects.</p>
          </div>

          <StatsCards />

          <div className="grid gap-6 md:grid-cols-2">
            <RevenueChart />
            <UserActivityChart />
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            <RecentActivity />
            <div className="md:col-span-2">
              <DataTable />
            </div>
          </div>
        </div>
      </AppLayout>
    </AuthGuard>
  )
}
