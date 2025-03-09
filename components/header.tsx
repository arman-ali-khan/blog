'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { ThemeToggle } from '@/components/theme-toggle';
import { NavigationMenu, NavigationMenuItem, NavigationMenuLink, NavigationMenuList } from '@/components/ui/navigation-menu';
import { Pen } from 'lucide-react';

export default function Header() {
  const pathname = usePathname();
  
  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'Articles', href: '/articles' },
    { name: 'Categories', href: '/categories' },
    { name: 'About', href: '/about' },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center space-x-2">
          <Pen className="h-6 w-6" />
          <span className="font-bold">Modern Blog</span>
        </Link>

        <NavigationMenu>
          <NavigationMenuList>
            {navigation.map((item) => (
              <NavigationMenuItem key={item.name}>
                <Link href={item.href} legacyBehavior passHref>
                  <NavigationMenuLink
                    className={`px-4 py-2 ${
                      pathname === item.href
                        ? 'text-primary font-medium'
                        : 'text-muted-foreground'
                    }`}
                  >
                    {item.name}
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>

        <div className="flex items-center space-x-4">
          <ThemeToggle />
          <Button>
            <Pen className="mr-2 h-4 w-4" />
            Write
          </Button>
        </div>
      </div>
    </header>
  );
}