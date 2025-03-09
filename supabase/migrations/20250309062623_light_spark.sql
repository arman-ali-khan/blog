/*
  # Blog Schema Setup

  1. New Tables
    - users (extends auth.users)
    - posts
    - comments
    - categories
    - tags
    - post_tags
    - newsletters

  2. Security
    - Enable RLS on all tables
    - Add policies for authenticated users
    - Add policies for post authors
*/

-- Create custom user profile table
CREATE TABLE IF NOT EXISTS public.profiles (
  id uuid PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,
  username text UNIQUE,
  full_name text,
  avatar_url text,
  bio text,
  website text,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Create posts table
CREATE TABLE IF NOT EXISTS public.posts (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  title text NOT NULL,
  slug text UNIQUE NOT NULL,
  content text NOT NULL,
  excerpt text,
  featured_image text,
  author_id uuid REFERENCES public.profiles(id) ON DELETE CASCADE NOT NULL,
  status text DEFAULT 'draft' CHECK (status IN ('draft', 'published', 'archived')),
  published_at timestamptz,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Create comments table
CREATE TABLE IF NOT EXISTS public.comments (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  post_id uuid REFERENCES public.posts(id) ON DELETE CASCADE NOT NULL,
  author_id uuid REFERENCES public.profiles(id) ON DELETE CASCADE NOT NULL,
  content text NOT NULL,
  status text DEFAULT 'pending' CHECK (status IN ('pending', 'approved', 'rejected')),
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Create categories table
CREATE TABLE IF NOT EXISTS public.categories (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text UNIQUE NOT NULL,
  slug text UNIQUE NOT NULL,
  description text,
  created_at timestamptz DEFAULT now()
);

-- Create tags table
CREATE TABLE IF NOT EXISTS public.tags (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text UNIQUE NOT NULL,
  slug text UNIQUE NOT NULL,
  created_at timestamptz DEFAULT now()
);

-- Create post_tags junction table
CREATE TABLE IF NOT EXISTS public.post_tags (
  post_id uuid REFERENCES public.posts(id) ON DELETE CASCADE,
  tag_id uuid REFERENCES public.tags(id) ON DELETE CASCADE,
  PRIMARY KEY (post_id, tag_id)
);

-- Create newsletters table
CREATE TABLE IF NOT EXISTS public.newsletters (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  email text UNIQUE NOT NULL,
  status text DEFAULT 'subscribed' CHECK (status IN ('subscribed', 'unsubscribed')),
  created_at timestamptz DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE public.profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.posts ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.comments ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.categories ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.tags ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.post_tags ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.newsletters ENABLE ROW LEVEL SECURITY;

-- Profiles policies
CREATE POLICY "Public profiles are viewable by everyone"
  ON public.profiles FOR SELECT
  USING (true);

CREATE POLICY "Users can update own profile"
  ON public.profiles FOR UPDATE
  USING (auth.uid() = id);

-- Posts policies
CREATE POLICY "Published posts are viewable by everyone"
  ON public.posts FOR SELECT
  USING (status = 'published' OR auth.uid() = author_id);

CREATE POLICY "Authors can create posts"
  ON public.posts FOR INSERT
  WITH CHECK (auth.uid() = author_id);

CREATE POLICY "Authors can update own posts"
  ON public.posts FOR UPDATE
  USING (auth.uid() = author_id);

-- Comments policies
CREATE POLICY "Approved comments are viewable by everyone"
  ON public.comments FOR SELECT
  USING (status = 'approved' OR auth.uid() = author_id);

CREATE POLICY "Authenticated users can create comments"
  ON public.comments FOR INSERT
  WITH CHECK (auth.uid() = author_id);

CREATE POLICY "Users can update own comments"
  ON public.comments FOR UPDATE
  USING (auth.uid() = author_id);

-- Categories and tags policies
CREATE POLICY "Categories are viewable by everyone"
  ON public.categories FOR SELECT
  USING (true);

CREATE POLICY "Tags are viewable by everyone"
  ON public.tags FOR SELECT
  USING (true);

-- Newsletter policies
CREATE POLICY "Users can subscribe to newsletter"
  ON public.newsletters FOR INSERT
  WITH CHECK (true);

-- Create functions and triggers
CREATE OR REPLACE FUNCTION public.handle_updated_at()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Add updated_at triggers
CREATE TRIGGER handle_updated_at
  BEFORE UPDATE ON public.profiles
  FOR EACH ROW
  EXECUTE FUNCTION public.handle_updated_at();

CREATE TRIGGER handle_updated_at
  BEFORE UPDATE ON public.posts
  FOR EACH ROW
  EXECUTE FUNCTION public.handle_updated_at();

CREATE TRIGGER handle_updated_at
  BEFORE UPDATE ON public.comments
  FOR EACH ROW
  EXECUTE FUNCTION public.handle_updated_at();