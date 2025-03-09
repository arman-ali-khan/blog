'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Card } from '@/components/ui/card';

export default function WritePage() {
  const [preview, setPreview] = useState(false);

  return (
    <div className="container py-8">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-4xl font-bold">Write an Article</h1>
          <div className="flex gap-4">
            <Button variant="outline" onClick={() => setPreview(!preview)}>
              {preview ? 'Edit' : 'Preview'}
            </Button>
            <Button>Publish</Button>
          </div>
        </div>

        <div className="grid gap-6">
          <div>
            <Input
              type="text"
              placeholder="Article Title"
              className="text-2xl font-semibold"
            />
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="Select category" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="development">Development</SelectItem>
                <SelectItem value="technology">Technology</SelectItem>
                <SelectItem value="programming">Programming</SelectItem>
              </SelectContent>
            </Select>

            <Input type="text" placeholder="Tags (comma separated)" />
          </div>

          <div>
            <Input type="text" placeholder="Featured image URL" />
          </div>

          <div>
            <Textarea
              placeholder="Write your article content in Markdown..."
              className="min-h-[400px] font-mono"
            />
          </div>

          {preview && (
            <Card className="p-6 prose dark:prose-invert max-w-none">
              <h2>Preview will appear here</h2>
              <p>Your formatted content will be displayed in this area when you write in the editor above.</p>
            </Card>
          )}
        </div>
      </div>
    </div>
  );
}