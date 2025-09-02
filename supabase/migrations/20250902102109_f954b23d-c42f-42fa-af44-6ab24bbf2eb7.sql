-- Add missing category column to gallery table
ALTER TABLE public.gallery 
ADD COLUMN IF NOT EXISTS category text DEFAULT 'general',
ADD COLUMN IF NOT EXISTS title text DEFAULT '';