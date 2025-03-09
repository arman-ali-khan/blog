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

interface Comment {
  id: string;
  content: string;
  author: string;
  article: string;
  status: string;
  date: string;
}

const comments: Comment[] = [
  {
    id: '1',
    content: 'Great article! Very informative.',
    author: 'John Doe',
    article: 'Getting Started with Next.js 13',
    status: 'Approved',
    date: '2024-03-15',
  },
  {
    id: '2',
    content: 'Thanks for sharing this knowledge.',
    author: 'Jane Smith',
    article: 'The Future of Web Development',
    status: 'Pending',
    date: '2024-03-20',
  },
  {
    id: '3',
    content: 'This helped me understand TypeScript better.',
    author: 'Mike Johnson',
    article: 'Mastering TypeScript',
    status: 'Approved',
    date: '2024-03-10',
  },
];

export default function CommentsPage() {
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">Comments</h1>
          <p className="text-muted-foreground">Manage and moderate user comments</p>
        </div>
      </div>

      <div className="flex items-center gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Search comments..."
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
              <TableHead>Content</TableHead>
              <TableHead>Author</TableHead>
              <TableHead>Article</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Date</TableHead>
              <TableHead className="w-[50px]"></TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {comments.map((comment) => (
              <TableRow key={comment.id}>
                <TableCell className="max-w-[300px] truncate">{comment.content}</TableCell>
                <TableCell>{comment.author}</TableCell>
                <TableCell className="max-w-[200px] truncate">{comment.article}</TableCell>
                <TableCell>
                  <span
                    className={`inline-flex items-center rounded-full px-2 py-1 text-xs font-medium ${
                      comment.status === 'Approved'
                        ? 'bg-green-50 text-green-700 dark:bg-green-900/20 dark:text-green-400'
                        : 'bg-yellow-50 text-yellow-700 dark:bg-yellow-900/20 dark:text-yellow-400'
                    }`}
                  >
                    {comment.status}
                  </span>
                </TableCell>
                <TableCell>{comment.date}</TableCell>
                <TableCell>
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost" className="h-8 w-8 p-0">
                        <MoreHorizontal className="h-4 w-4" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuItem>Approve</DropdownMenuItem>
                      <DropdownMenuItem>Reply</DropdownMenuItem>
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