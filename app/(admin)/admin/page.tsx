import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Users, FileText, MessageSquare, TrendingUp } from 'lucide-react';

export default function AdminPage() {
  const stats = [
    {
      title: 'Total Users',
      value: '2,834',
      icon: <Users className="h-4 w-4 text-muted-foreground" />,
      trend: '+12.5%',
    },
    {
      title: 'Articles Published',
      value: '456',
      icon: <FileText className="h-4 w-4 text-muted-foreground" />,
      trend: '+8.2%',
    },
    {
      title: 'Comments',
      value: '1,289',
      icon: <MessageSquare className="h-4 w-4 text-muted-foreground" />,
      trend: '+24.1%',
    },
    {
      title: 'Page Views',
      value: '45.2K',
      icon: <TrendingUp className="h-4 w-4 text-muted-foreground" />,
      trend: '+16.8%',
    },
  ];

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Dashboard Overview</h1>
        <p className="text-muted-foreground">Welcome back, Admin</p>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat) => (
          <Card key={stat.title}>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">{stat.title}</CardTitle>
              {stat.icon}
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stat.value}</div>
              <p className="text-xs text-muted-foreground">
                <span className="text-green-500">{stat.trend}</span> from last month
              </p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}