"use client"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"
import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis } from "recharts"

const data = [
  { day: "Mon", active: 120, new: 20 },
  { day: "Tue", active: 150, new: 35 },
  { day: "Wed", active: 180, new: 45 },
  { day: "Thu", active: 200, new: 30 },
  { day: "Fri", active: 240, new: 55 },
  { day: "Sat", active: 160, new: 25 },
  { day: "Sun", active: 140, new: 15 },
]

const chartConfig = {
  active: {
    label: "Active Users",
    color: "hsl(var(--chart-2))",
  },
  new: {
    label: "New Users",
    color: "hsl(var(--chart-3))",
  },
}

export function UserActivityChart() {
  return (
    <Card className="animate-slide-in-left" style={{ animationDelay: "200ms" }}>
      <CardHeader>
        <CardTitle>User Activity</CardTitle>
        <CardDescription>Daily active and new users this week</CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig}>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={data}>
              <XAxis dataKey="day" axisLine={false} tickLine={false} tick={{ fontSize: 12 }} />
              <YAxis axisLine={false} tickLine={false} tick={{ fontSize: 12 }} />
              <ChartTooltip content={<ChartTooltipContent />} />
              <Bar dataKey="active" fill="hsl(var(--chart-2))" radius={[4, 4, 0, 0]} />
              <Bar dataKey="new" fill="hsl(var(--chart-3))" radius={[4, 4, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </ChartContainer>
      </CardContent>
    </Card>
  )
}
