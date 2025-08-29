-- Create gallery table for image metadata
CREATE TABLE public.gallery (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  title TEXT NOT NULL,
  category TEXT NOT NULL,
  description TEXT,
  image_url TEXT NOT NULL,
  file_path TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE public.gallery ENABLE ROW LEVEL SECURITY;

-- Create policies for gallery table
CREATE POLICY "Gallery images are viewable by everyone" 
ON public.gallery 
FOR SELECT 
USING (true);

CREATE POLICY "Only authenticated users can insert gallery images" 
ON public.gallery 
FOR INSERT 
TO authenticated
WITH CHECK (true);

CREATE POLICY "Only authenticated users can update gallery images" 
ON public.gallery 
FOR UPDATE 
TO authenticated
USING (true);

CREATE POLICY "Only authenticated users can delete gallery images" 
ON public.gallery 
FOR DELETE 
TO authenticated
USING (true);

-- Create storage bucket for gallery images
INSERT INTO storage.buckets (id, name, public) VALUES ('gallery', 'gallery', true);

-- Create storage policies for gallery bucket
CREATE POLICY "Gallery images are publicly accessible" 
ON storage.objects 
FOR SELECT 
USING (bucket_id = 'gallery');

CREATE POLICY "Authenticated users can upload gallery images" 
ON storage.objects 
FOR INSERT 
TO authenticated
WITH CHECK (bucket_id = 'gallery');

CREATE POLICY "Authenticated users can update gallery images" 
ON storage.objects 
FOR UPDATE 
TO authenticated
USING (bucket_id = 'gallery');

CREATE POLICY "Authenticated users can delete gallery images" 
ON storage.objects 
FOR DELETE 
TO authenticated
USING (bucket_id = 'gallery');

-- Create function to update timestamps
CREATE OR REPLACE FUNCTION public.update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
NEW.updated_at = now();
RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Create trigger for automatic timestamp updates
CREATE TRIGGER update_gallery_updated_at
BEFORE UPDATE ON public.gallery
FOR EACH ROW
EXECUTE FUNCTION public.update_updated_at_column();