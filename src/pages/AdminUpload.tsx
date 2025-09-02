import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useAuth } from '@/contexts/AuthContext';
import { useToast } from '@/hooks/use-toast';
import { supabase } from '@/integrations/supabase/client';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger } from '@/components/ui/alert-dialog';
import { Upload, LogOut, Image, Trash2, Loader2 } from 'lucide-react';

// Interface updated: 'category' property removed
interface GalleryImage {
  id: string;
  description: string | null;
  image_url: string;
  file_path: string;
  created_at: string;
}

const AdminUpload = () => {
  // State updated: 'category' state removed
  const [description, setDescription] = useState('');
  const [file, setFile] = useState<File | null>(null);
  const [uploading, setUploading] = useState(false);
  const [galleryImages, setGalleryImages] = useState<GalleryImage[]>([]);
  const [loadingGallery, setLoadingGallery] = useState(true);
  const [deletingId, setDeletingId] = useState<string | null>(null);
  const { user, signOut } = useAuth();
  const { toast } = useToast();
  const navigate = useNavigate();

  // Redirect if not authenticated
  if (!user) {
    navigate('/admin/login');
    return null;
  }

  // Fetch gallery images
  const fetchGalleryImages = async () => {
    try {
      const { data, error } = await supabase
        .from('gallery')
        .select('*')
        .order('created_at', { ascending: false });

      if (error) throw error;
      setGalleryImages(data || []);
    } catch (error) {
      console.error('Error fetching gallery images:', error);
      toast({
        title: "Error",
        description: "Failed to fetch gallery images.",
        variant: "destructive"
      });
    } finally {
      setLoadingGallery(false);
    }
  };

  useEffect(() => {
    fetchGalleryImages();
  }, []);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFile(e.target.files[0]);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // Validation updated: 'category' check removed
    if (!file) {
      toast({
        title: "Missing Information",
        description: "Please select an image to upload.",
        variant: "destructive"
      });
      return;
    }

    setUploading(true);

    try {
      // Generate unique filename
      const fileExt = file.name.split('.').pop();
      const fileName = `${Date.now()}-${Math.random().toString(36).substring(7)}.${fileExt}`;
      const filePath = `gallery/${fileName}`;

      // Upload image to Supabase Storage
      const { error: uploadError } = await supabase.storage
        .from('gallery')
        .upload(filePath, file);

      if (uploadError) {
        throw uploadError;
      }

      // Get public URL
      const { data: { publicUrl } } = supabase.storage
        .from('gallery')
        .getPublicUrl(filePath);

      // Save metadata to database - 'category' property removed from insert object
      const { error: dbError } = await supabase
        .from('gallery')
        .insert({
          description: description || null,
          image_url: publicUrl,
          file_path: filePath
        });

      if (dbError) {
        throw dbError;
      }

      toast({
        title: "Success",
        description: "Image uploaded and added to the gallery successfully.",
      });

      // Reset form state - setCategory removed
      setDescription('');
      setFile(null);
      // Manually reset the file input visually
      const fileInput = document.getElementById('image-upload') as HTMLInputElement;
      if (fileInput) {
        fileInput.value = '';
      }
      
      // Refresh gallery
      fetchGalleryImages();

    } catch (error) {
      console.error('Error uploading image:', error);
      toast({
        title: "Upload Error",
        description: "Something went wrong during the upload. Please try again.",
        variant: "destructive"
      });
    } finally {
      setUploading(false);
    }
  };
  
  const handleDelete = async (image: GalleryImage) => {
    setDeletingId(image.id);
    try {
      // 1. Delete the file from storage
      const { error: storageError } = await supabase.storage
        .from('gallery')
        .remove([image.file_path]);

      if (storageError) {
        throw storageError;
      }

      // 2. Delete the record from the database
      const { error: dbError } = await supabase
        .from('gallery')
        .delete()
        .eq('id', image.id);

      if (dbError) {
        throw dbError;
      }

      toast({
        title: "Deleted",
        description: "The image has been successfully deleted.",
      });
      
      // Update UI in real-time
      setGalleryImages(galleryImages.filter(img => img.id !== image.id));

    } catch (error) {
      console.error('Error deleting image:', error);
      toast({
        title: "Deletion Error",
        description: "Failed to delete the image. Please try again.",
        variant: "destructive"
      });
    } finally {
      setDeletingId(null);
    }
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="sticky top-0 z-10 bg-background/80 backdrop-blur-sm border-b">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <h1 className="text-xl font-bold">Admin Dashboard</h1>
            <Button variant
