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
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger } from '@/components/ui/alert-dialog';
import { Upload, LogOut, Image, Trash2, Loader2 } from 'lucide-react';

interface GalleryImage {
  id: string;
  title: string;
  category: string;
  description: string | null;
  image_url: string;
  file_path: string;
  created_at: string;
}

const AdminUpload = () => {
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState('');
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

  const categories = [
    'Wedding',
    'Pre-Wedding',
    'Event',
    'Party',
    'Corporate',
    'Maternity',
    'Drone',
    'Portrait'
  ];

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
    if (!file || !title || !category) {
      toast({
        title: "Missing Information",
        description: "Please fill in all required fields and select an image.",
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

      // Save metadata to database
      const { error: dbError } = await supabase
        .from('gallery')
        .insert({
          title,
          category,
          description: description || null,
          image_url: publicUrl,
          file_path: filePath
        });

      if (dbError) {
        throw dbError;
      }

      toast({
        title: "Success!",
        description: "Image uploaded successfully and will appear in the gallery."
      });

      // Reset form
      setTitle('');
      setCategory('');
      setDescription('');
      setFile(null);
      // Reset file input
      const fileInput = document.getElementById('file') as HTMLInputElement;
      if (fileInput) fileInput.value = '';

      // Refresh gallery
      fetchGalleryImages();

    } catch (error) {
      console.error('Upload error:', error);
      toast({
        title: "Upload Failed",
        description: "There was an error uploading your image. Please try again.",
        variant: "destructive"
      });
    }

    setUploading(false);
  };

  const handleDelete = async (image: GalleryImage) => {
    setDeletingId(image.id);

    try {
      // First delete the file from storage
      const { error: storageError } = await supabase.storage
        .from('gallery')
        .remove([image.file_path]);

      if (storageError) {
        throw storageError;
      }

      // Then delete the record from database
      const { error: dbError } = await supabase
        .from('gallery')
        .delete()
        .eq('id', image.id);

      if (dbError) {
        throw dbError;
      }

      // Update local state to remove the deleted image
      setGalleryImages(prev => prev.filter(img => img.id !== image.id));

      toast({
        title: "Success!",
        description: "Image deleted successfully."
      });

    } catch (error) {
      console.error('Delete error:', error);
      toast({
        title: "Delete Failed",
        description: "There was an error deleting the image. Please try again.",
        variant: "destructive"
      });
    } finally {
      setDeletingId(null);
    }
  };

  const handleSignOut = async () => {
    await signOut();
    navigate('/admin/login');
  };

  return (
    <div className="min-h-screen bg-muted/30 px-4 py-8">
      <div className="container mx-auto max-w-6xl">
        <div className="flex justify-between items-center mb-8">
          <motion.h1
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-3xl font-heading font-bold"
          >
            Admin Upload Panel
          </motion.h1>
          <Button variant="outline" onClick={handleSignOut}>
            <LogOut className="w-4 h-4 mr-2" />
            Sign Out
          </Button>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Card className="elegant-shadow">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Image className="w-5 h-5" />
                Upload New Gallery Image
              </CardTitle>
              <CardDescription>
                Add a new image to the gallery with title, category, and optional description.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="title">Title *</Label>
                  <Input
                    id="title"
                    type="text"
                    placeholder="Enter image title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="category">Category *</Label>
                  <Select value={category} onValueChange={setCategory} required>
                    <SelectTrigger>
                      <SelectValue placeholder="Select a category" />
                    </SelectTrigger>
                    <SelectContent>
                      {categories.map((cat) => (
                        <SelectItem key={cat} value={cat.toLowerCase()}>
                          {cat}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="description">Description (Optional)</Label>
                  <Textarea
                    id="description"
                    placeholder="Enter image description"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    rows={3}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="file">Image File *</Label>
                  <Input
                    id="file"
                    type="file"
                    accept="image/*"
                    onChange={handleFileChange}
                    required
                  />
                  {file && (
                    <p className="text-sm text-muted-foreground">
                      Selected: {file.name}
                    </p>
                  )}
                </div>

                <Button 
                  type="submit" 
                  className="w-full" 
                  disabled={uploading}
                >
                  {uploading ? (
                    <>
                      <Upload className="w-4 h-4 mr-2 animate-spin" />
                      Uploading...
                    </>
                  ) : (
                    <>
                      <Upload className="w-4 h-4 mr-2" />
                      Upload Image
                    </>
                  )}
                </Button>
              </form>
            </CardContent>
          </Card>
        </motion.div>

        {/* Gallery Management Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-12"
        >
          <Card className="elegant-shadow">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Image className="w-5 h-5" />
                Gallery Management
              </CardTitle>
              <CardDescription>
                View and manage existing gallery images. Click the delete button to permanently remove images.
              </CardDescription>
            </CardHeader>
            <CardContent>
              {loadingGallery ? (
                <div className="flex items-center justify-center py-12">
                  <Loader2 className="w-8 h-8 animate-spin text-primary" />
                  <span className="ml-2 text-muted-foreground">Loading gallery...</span>
                </div>
              ) : galleryImages.length === 0 ? (
                <div className="text-center py-12">
                  <Image className="w-16 h-16 mx-auto text-muted-foreground mb-4" />
                  <p className="text-muted-foreground">No images in gallery yet.</p>
                  <p className="text-sm text-muted-foreground">Upload your first image above!</p>
                </div>
              ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                  {galleryImages.map((image) => (
                    <div key={image.id} className="group relative">
                      <div className="aspect-square rounded-lg overflow-hidden bg-muted">
                        <img
                          src={image.image_url}
                          alt={image.title}
                          className="w-full h-full object-cover transition-transform group-hover:scale-105"
                        />
                      </div>
                      <div className="mt-3 space-y-1">
                        <h4 className="font-medium text-sm leading-tight">{image.title}</h4>
                        <p className="text-xs text-muted-foreground capitalize">{image.category}</p>
                        {image.description && (
                          <p className="text-xs text-muted-foreground line-clamp-2">{image.description}</p>
                        )}
                      </div>
                      <div className="mt-3">
                        <AlertDialog>
                          <AlertDialogTrigger asChild>
                            <Button
                              variant="outline"
                              size="sm"
                              className="w-full text-destructive border-destructive hover:bg-destructive hover:text-destructive-foreground"
                              disabled={deletingId === image.id}
                            >
                              {deletingId === image.id ? (
                                <>
                                  <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                                  Deleting...
                                </>
                              ) : (
                                <>
                                  <Trash2 className="w-4 h-4 mr-2" />
                                  Delete
                                </>
                              )}
                            </Button>
                          </AlertDialogTrigger>
                          <AlertDialogContent>
                            <AlertDialogHeader>
                              <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
                              <AlertDialogDescription>
                                This action cannot be undone. This will permanently delete the image file from storage and remove it from your gallery.
                              </AlertDialogDescription>
                            </AlertDialogHeader>
                            <AlertDialogFooter>
                              <AlertDialogCancel>Cancel</AlertDialogCancel>
                              <AlertDialogAction
                                onClick={() => handleDelete(image)}
                                className="bg-destructive text-destructive-foreground hover:bg-destructive/90"
                              >
                                Continue
                              </AlertDialogAction>
                            </AlertDialogFooter>
                          </AlertDialogContent>
                        </AlertDialog>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  );
};

export default AdminUpload;