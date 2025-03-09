import { Card, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import Link from 'next/link';

export const metadata = {
  title: 'Categories',
  description: 'Browse articles by category',
};

export default function CategoriesPage() {
  const categories = [
    {
      name: 'Development',
      description: 'Web development tutorials and best practices',
      count: 15,
      image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&q=80&w=800',
    },
    {
      name: 'Technology',
      description: 'Latest tech news and innovations',
      count: 12,
      image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=800',
    },
    {
      name: 'Programming',
      description: 'Programming languages and software engineering',
      count: 18,
      image: 'https://images.unsplash.com/photo-1516116216624-53e697fedbea?auto=format&fit=crop&q=80&w=800',
    },
  ];

  return (
    <div className="container py-8">
      <div className="mb-8">
        <h1 className="text-4xl font-bold mb-4">Categories</h1>
        <p className="text-muted-foreground">Browse articles by topic</p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {categories.map((category) => (
          <Link key={category.name} href={`/categories/${category.name.toLowerCase()}`}>
            <Card className="group hover:shadow-lg transition-shadow">
              <div className="relative h-48">
                <img
                  src={category.image}
                  alt={category.name}
                  className="absolute inset-0 w-full h-full object-cover rounded-t-lg group-hover:opacity-90 transition-opacity"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-background/20" />
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="text-xl font-semibold text-white mb-1">{category.name}</h3>
                  <p className="text-white/80 text-sm">{category.count} articles</p>
                </div>
              </div>
              <CardHeader>
                <CardDescription>{category.description}</CardDescription>
              </CardHeader>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  );
}