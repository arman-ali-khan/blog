import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';

export default function Home() {
  const featuredPosts = [
    {
      id: 1,
      title: 'Getting Started with Next.js 13',
      description: 'Learn how to build modern web applications with Next.js 13 and its powerful features.',
      author: 'John Doe',
      date: 'April 1, 2024',
      readTime: '5 min read',
      image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&q=80&w=800',
    },
    {
      id: 2,
      title: 'The Future of Web Development',
      description: 'Explore upcoming trends and technologies shaping the future of web development.',
      author: 'Jane Smith',
      date: 'March 30, 2024',
      readTime: '7 min read',
      image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=800',
    },
    {
      id: 3,
      title: 'Mastering TypeScript',
      description: 'Deep dive into TypeScript features and best practices for large-scale applications.',
      author: 'Mike Johnson',
      date: 'March 28, 2024',
      readTime: '10 min read',
      image: 'https://images.unsplash.com/photo-1516116216624-53e697fedbea?auto=format&fit=crop&q=80&w=800',
    },
  ];

  return (
    <>
      <section className="relative">
        <div className="absolute inset-0 bg-gradient-to-r from-primary to-primary/50 opacity-10" />
        <div className="container relative py-24 sm:py-32">
          <div className="mx-auto max-w-2xl text-center">
            <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">
              Share Your Stories with the World
            </h1>
            <p className="mt-6 text-lg leading-8 text-muted-foreground">
              Welcome to Modern Blog, where ideas come to life. Start writing and sharing your stories with readers around the globe.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Button size="lg">Start Writing</Button>
              <Button variant="outline" size="lg">
                Explore Articles
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="container py-16">
        <div className="mb-12">
          <h2 className="text-3xl font-bold">Featured Articles</h2>
          <p className="mt-2 text-muted-foreground">
            Discover our most popular and engaging content
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {featuredPosts.map((post) => (
            <Card key={post.id} className="overflow-hidden">
              <img
                src={post.image}
                alt={post.title}
                className="h-48 w-full object-cover"
              />
              <CardHeader>
                <CardTitle>{post.title}</CardTitle>
                <CardDescription>{post.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                  <span>{post.author}</span>
                  <span>•</span>
                  <span>{post.date}</span>
                  <span>•</span>
                  <span>{post.readTime}</span>
                </div>
              </CardContent>
              <CardFooter>
                <Link href={`/articles/${post.id}`} className="w-full">
                  <Button className="w-full">Read More</Button>
                </Link>
              </CardFooter>
            </Card>
          ))}
        </div>
      </section>
    </>
  );
}