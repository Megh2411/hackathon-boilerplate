import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"

const activities = [
  {
    id: 1,
    user: {
      name: "John Doe",
      email: "john@example.com",
      avatar: "/abstract-geometric-shapes.png",
    },
    action: "Created new project",
    time: "2 minutes ago",
    status: "success",
  },
  {
    id: 2,
    user: {
      name: "Jane Smith",
      email: "jane@example.com",
      avatar: "/abstract-geometric-shapes.png",
    },
    action: "Updated profile settings",
    time: "5 minutes ago",
    status: "info",
  },
  {
    id: 3,
    user: {
      name: "Mike Johnson",
      email: "mike@example.com",
      avatar: "/diverse-group-collaborating.png",
    },
    action: "Deleted old files",
    time: "10 minutes ago",
    status: "warning",
  },
  {
    id: 4,
    user: {
      name: "Sarah Wilson",
      email: "sarah@example.com",
      avatar: "/abstract-geometric-shapes.png",
    },
    action: "Completed task review",
    time: "15 minutes ago",
    status: "success",
  },
  {
    id: 5,
    user: {
      name: "Tom Brown",
      email: "tom@example.com",
      avatar: "/abstract-geometric-shapes.png",
    },
    action: "Failed login attempt",
    time: "20 minutes ago",
    status: "destructive",
  },
]

export function RecentActivity() {
  return (
    <Card className="animate-slide-in-right" style={{ animationDelay: "300ms" }}>
      <CardHeader>
        <CardTitle>Recent Activity</CardTitle>
        <CardDescription>Latest user actions and system events</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {activities.map((activity) => (
            <div key={activity.id} className="flex items-center space-x-4">
              <Avatar className="h-8 w-8">
                <AvatarImage src={activity.user.avatar || "/placeholder.svg"} alt={activity.user.name} />
                <AvatarFallback>
                  {activity.user.name
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                </AvatarFallback>
              </Avatar>
              <div className="flex-1 space-y-1">
                <p className="text-sm font-medium leading-none">{activity.user.name}</p>
                <p className="text-sm text-muted-foreground">{activity.action}</p>
              </div>
              <div className="flex items-center space-x-2">
                <Badge variant={activity.status as any} className="text-xs">
                  {activity.status}
                </Badge>
                <div className="text-xs text-muted-foreground">{activity.time}</div>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
