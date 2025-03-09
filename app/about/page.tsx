import { Button } from '@/components/ui/button';
import Link from 'next/link';

export const metadata = {
  title: 'About Us',
  description: 'Learn more about Modern Blog and our mission',
};

export default function AboutPage() {
  return (
    <div className="container py-8">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold mb-6">About Modern Blog</h1>
        
        <div className="prose dark:prose-invert max-w-none">
          <p className="text-xl text-muted-foreground mb-8">
            Modern Blog is a platform dedicated to sharing knowledge, insights, and stories about technology, development, and digital innovation.
          </p>

          <div className="grid gap-8 md:grid-cols-2 mb-12">
            <div>
              <h3 className="text-2xl font-semibold mb-4">Our Mission</h3>
              <p className="text-muted-foreground">
                To create a space where developers, technologists, and innovators can share their knowledge and experiences, fostering a community of continuous learning and growth.
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-semibold mb-4">Our Vision</h3>
              <p className="text-muted-foreground">
                To become the go-to platform for high-quality technical content, empowering developers worldwide to learn, grow, and connect.
              </p>
            </div>
          </div>

          <div className="bg-muted p-8 rounded-lg mb-12">
            <h3 className="text-2xl font-semibold mb-4">Join Our Community</h3>
            <p className="text-muted-foreground mb-6">
              Share your knowledge, connect with other developers, and be part of our growing community.
            </p>
            <div className="flex gap-4">
              <Link href="/register">
                <Button size="lg">Get Started</Button>
              </Link>
              <Link href="/contact">
                <Button variant="outline" size="lg">Contact Us</Button>
              </Link>
            </div>
          </div>

          <div className="space-y-6">
            <h3 className="text-2xl font-semibold">Our Values</h3>
            <div className="grid gap-6 md:grid-cols-3">
              <div>
                <h4 className="font-semibold mb-2">Quality</h4>
                <p className="text-muted-foreground">We prioritize high-quality, well-researched content that provides real value.</p>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Community</h4>
                <p className="text-muted-foreground">We foster an inclusive environment where everyone can learn and grow together.</p>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Innovation</h4>
                <p className="text-muted-foreground">We stay at the forefront of technology and encourage innovative thinking.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}