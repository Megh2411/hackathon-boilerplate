import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { MoreHorizontal, Eye, Edit, Trash2 } from "lucide-react"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"

const tableData = [
  {
    id: "1",
    name: "Project Alpha",
    status: "active",
    priority: "high",
    assignee: "John Doe",
    dueDate: "2025-01-15",
    progress: 75,
  },
  {
    id: "2",
    name: "Website Redesign",
    status: "in-progress",
    priority: "medium",
    assignee: "Jane Smith",
    dueDate: "2025-01-20",
    progress: 45,
  },
  {
    id: "3",
    name: "Mobile App",
    status: "pending",
    priority: "low",
    assignee: "Mike Johnson",
    dueDate: "2025-02-01",
    progress: 20,
  },
  {
    id: "4",
    name: "API Integration",
    status: "completed",
    priority: "high",
    assignee: "Sarah Wilson",
    dueDate: "2025-01-10",
    progress: 100,
  },
  {
    id: "5",
    name: "Database Migration",
    status: "active",
    priority: "medium",
    assignee: "Tom Brown",
    dueDate: "2025-01-25",
    progress: 60,
  },
]

const getStatusColor = (status: string) => {
  switch (status) {
    case "active":
      return "default"
    case "in-progress":
      return "secondary"
    case "pending":
      return "outline"
    case "completed":
      return "success"
    default:
      return "default"
  }
}

const getPriorityColor = (priority: string) => {
  switch (priority) {
    case "high":
      return "destructive"
    case "medium":
      return "secondary"
    case "low":
      return "outline"
    default:
      return "default"
  }
}

export function DataTable() {
  return (
    <Card className="animate-fade-in" style={{ animationDelay: "400ms" }}>
      <CardHeader>
        <CardTitle>Projects Overview</CardTitle>
        <CardDescription>Manage and track your project progress</CardDescription>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Name</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Priority</TableHead>
              <TableHead>Assignee</TableHead>
              <TableHead>Due Date</TableHead>
              <TableHead>Progress</TableHead>
              <TableHead className="w-[50px]"></TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {tableData.map((item) => (
              <TableRow key={item.id}>
                <TableCell className="font-medium">{item.name}</TableCell>
                <TableCell>
                  <Badge variant={getStatusColor(item.status) as any}>{item.status}</Badge>
                </TableCell>
                <TableCell>
                  <Badge variant={getPriorityColor(item.priority) as any}>{item.priority}</Badge>
                </TableCell>
                <TableCell>{item.assignee}</TableCell>
                <TableCell>{item.dueDate}</TableCell>
                <TableCell>
                  <div className="flex items-center space-x-2">
                    <div className="w-full bg-secondary rounded-full h-2">
                      <div
                        className="bg-primary h-2 rounded-full transition-all"
                        style={{ width: `${item.progress}%` }}
                      />
                    </div>
                    <span className="text-sm text-muted-foreground min-w-[3rem]">{item.progress}%</span>
                  </div>
                </TableCell>
                <TableCell>
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost" size="icon">
                        <MoreHorizontal className="h-4 w-4" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuItem>
                        <Eye className="mr-2 h-4 w-4" />
                        View
                      </DropdownMenuItem>
                      <DropdownMenuItem>
                        <Edit className="mr-2 h-4 w-4" />
                        Edit
                      </DropdownMenuItem>
                      <DropdownMenuItem className="text-destructive">
                        <Trash2 className="mr-2 h-4 w-4" />
                        Delete
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  )
}
