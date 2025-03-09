import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export const metadata = {
  title: 'Articles',
  description: 'Explore our collection of articles on various topics',
};

export default function ArticlesPage() {
  const articles = [
    {
      id: 1,
      title: 'Getting Started with Next.js 13',
      description: 'Learn how to build modern web applications with Next.js 13 and its powerful features.',
      author: 'John Doe',
      date: 'April 1, 2024',
      readTime: '5 min read',
      category: 'Development',
      image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&q=80&w=800',
    },
    {
      id: 2,
      title: 'The Future of Web Development',
      description: 'Explore upcoming trends and technologies shaping the future of web development.',
      author: 'Jane Smith',
      date: 'March 30, 2024',
      readTime: '7 min read',
      category: 'Technology',
      image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=800',
    },
    {
      id: 3,
      title: 'Mastering TypeScript',
      description: 'Deep dive into TypeScript features and best practices for large-scale applications.',
      author: 'Mike Johnson',
      date: 'March 28, 2024',
      readTime: '10 min read',
      category: 'Programming',
      image: 'https://images.unsplash.com/photo-1516116216624-53e697fedbea?auto=format&fit=crop&q=80&w=800',
    },
  ];

  return (
    <div className="container py-8">
      <div className="mb-8">
        <h1 className="text-4xl font-bold mb-4">Articles</h1>
        <p className="text-muted-foreground">Explore our latest articles and insights</p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {articles.map((article) => (
          <Card key={article.id} className="flex flex-col">
            <div className="relative h-48">
              <img
                src={article.image}
                alt={article.title}
                className="absolute inset-0 w-full h-full object-cover rounded-t-lg"
              />
            </div>
            <CardHeader>
              <div className="flex items-center gap-2 mb-2">
                <span className="text-sm text-muted-foreground">{article.category}</span>
                <span className="text-muted-foreground">•</span>
                <span className="text-sm text-muted-foreground">{article.readTime}</span>
              </div>
              <CardTitle className="line-clamp-2">{article.title}</CardTitle>
              <CardDescription className="line-clamp-3">{article.description}</CardDescription>
            </CardHeader>
            <CardContent className="flex-grow">
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <span>{article.author}</span>
                <span>•</span>
                <span>{article.date}</span>
              </div>
            </CardContent>
            <CardFooter>
              <Link href={`/articles/${article.id}`} className="w-full">
                <Button className="w-full">Read More</Button>
              </Link>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
}