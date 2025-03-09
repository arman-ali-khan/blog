'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { MoreHorizontal, Search } from 'lucide-react';

interface Article {
  id: string;
  title: string;
  author: string;
  category: string;
  status: string;
  publishDate: string;
  views: number;
}

const articles: Article[] = [
  {
    id: '1',
    title: 'Getting Started with Next.js 13',
    author: 'John Doe',
    category: 'Development',
    status: 'Published',
    publishDate: '2024-03-15',
    views: 1234,
  },
  {
    id: '2',
    title: 'The Future of Web Development',
    author: 'Jane Smith',
    category: 'Technology',
    status: 'Draft',
    publishDate: '2024-03-20',
    views: 0,
  },
  {
    id: '3',
    title: 'Mastering TypeScript',
    author: 'Mike Johnson',
    category: 'Programming',
    status: 'Published',
    publishDate: '2024-03-10',
    views: 2567,
  },
];

export default function ArticlesPage() {
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">Articles</h1>
          <p className="text-muted-foreground">Manage blog posts and content</p>
        </div>
        <Button>New Article</Button>
      </div>

      <div className="flex items-center gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Search articles..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-8"
          />
        </div>
      </div>

      <div className="rounded-md border">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Title</TableHead>
              <TableHead>Author</TableHead>
              <TableHead>Category</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Publish Date</TableHead>
              <TableHead>Views</TableHead>
              <TableHead className="w-[50px]"></TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {articles.map((article) => (
              <TableRow key={article.id}>
                <TableCell>{article.title}</TableCell>
                <TableCell>{article.author}</TableCell>
                <TableCell>{article.category}</TableCell>
                <TableCell>
                  <span
                    className={`inline-flex items-center rounded-full px-2 py-1 text-xs font-medium ${
                      article.status === 'Published'
                        ? 'bg-green-50 text-green-700 dark:bg-green-900/20 dark:text-green-400'
                        : 'bg-yellow-50 text-yellow-700 dark:bg-yellow-900/20 dark:text-yellow-400'
                    }`}
                  >
                    {article.status}
                  </span>
                </TableCell>
                <TableCell>{article.publishDate}</TableCell>
                <TableCell>{article.views.toLocaleString()}</TableCell>
                <TableCell>
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost" className="h-8 w-8 p-0">
                        <MoreHorizontal className="h-4 w-4" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuItem>Edit</DropdownMenuItem>
                      <DropdownMenuItem>View</DropdownMenuItem>
                      <DropdownMenuItem className="text-red-600">Delete</DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}