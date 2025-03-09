'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import {
  BarChart3,
  Users,
  FileText,
  FolderKanban,
  MessageSquare,
  Settings,
  Menu,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';

interface NavItem {
  title: string;
  href: string;
  icon: React.ReactNode;
}

const navItems: NavItem[] = [
  {
    title: 'Overview',
    href: '/admin',
    icon: <BarChart3 className="h-4 w-4" />,
  },
  {
    title: 'Users',
    href: '/admin/users',
    icon: <Users className="h-4 w-4" />,
  },
  {
    title: 'Articles',
    href: '/admin/articles',
    icon: <FileText className="h-4 w-4" />,
  },
  {
    title: 'Categories',
    href: '/admin/categories',
    icon: <FolderKanban className="h-4 w-4" />,
  },
  {
    title: 'Comments',
    href: '/admin/comments',
    icon: <MessageSquare className="h-4 w-4" />,
  },
  {
    title: 'Settings',
    href: '/admin/settings',
    icon: <Settings className="h-4 w-4" />,
  },
];

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex min-h-screen">
      {/* Sidebar for desktop */}
      <aside className="hidden w-64 border-r bg-muted/40 lg:block">
        <div className="flex h-full flex-col">
          <div className="border-b p-6">
            <h2 className="text-lg font-semibold">Admin Dashboard</h2>
          </div>
          <ScrollArea className="flex-1 py-4">
            <nav className="grid gap-1 px-2">
              {navItems.map((item) => (
                <Link key={item.href} href={item.href}>
                  <span
                    className={cn(
                      'group flex items-center rounded-md px-3 py-2 text-sm font-medium hover:bg-accent hover:text-accent-foreground',
                      pathname === item.href ? 'bg-accent' : 'transparent'
                    )}
                  >
                    {item.icon}
                    <span className="ml-3">{item.title}</span>
                  </span>
                </Link>
              ))}
            </nav>
          </ScrollArea>
        </div>
      </aside>

      {/* Mobile sidebar */}
      <Sheet open={isOpen} onOpenChange={setIsOpen}>
        <SheetTrigger asChild>
          <Button variant="ghost" className="lg:hidden">
            <Menu className="h-6 w-6" />
          </Button>
        </SheetTrigger>
        <SheetContent side="left" className="w-64 p-0">
          <div className="border-b p-6">
            <h2 className="text-lg font-semibold">Admin Dashboard</h2>
          </div>
          <ScrollArea className="h-[calc(100vh-5rem)] py-4">
            <nav className="grid gap-1 px-2">
              {navItems.map((item) => (
                <Link key={item.href} href={item.href} onClick={() => setIsOpen(false)}>
                  <span
                    className={cn(
                      'group flex items-center rounded-md px-3 py-2 text-sm font-medium hover:bg-accent hover:text-accent-foreground',
                      pathname === item.href ? 'bg-accent' : 'transparent'
                    )}
                  >
                    {item.icon}
                    <span className="ml-3">{item.title}</span>
                  </span>
                </Link>
              ))}
            </nav>
          </ScrollArea>
        </SheetContent>
      </Sheet>

      {/* Main content */}
      <main className="flex-1 overflow-y-auto">
        <div className="container py-6">{children}</div>
      </main>
    </div>
  );
}