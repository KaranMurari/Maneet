import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { supabase } from '@/integrations/supabase/client';
import { useToast } from '@/hooks/use-toast';

interface GalleryImage {
  id: string;
  title: string;
  category: string;
  description?: string;
  image_url: string;
  file_path: string;
  created_at: string;
}

const GalleryPreview = () => {
  const [recentImages, setRecentImages] = useState<GalleryImage[]>([]);
  const [loading, setLoading] = useState(true);
  const { toast } = useToast();

  useEffect(() => {
    fetchRecentImages();
  }, []);

  const fetchRecentImages = async () => {
    try {
      const { data, error } = await supabase
        .from('gallery')
        .select('*')
        .order('created_at', { ascending: false })
        .limit(6);

      if (error) {
        throw error;
      }

      setRecentImages(data || []);
    } catch (error) {
      console.error('Error fetching recent images:', error);
      toast({
        title: "Error",
        description: "Failed to load recent images.",
        variant: "destructive"
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
            Recent <span className="text-primary">Work</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Take a glimpse at our latest captured moments - each frame tells a unique story of love, joy, and celebration.
          </p>
        </motion.div>

        {loading ? (
          <div className="text-center">
            <p className="text-muted-foreground">Loading recent work...</p>
          </div>
        ) : recentImages.length > 0 ? (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-12"
            >
              {recentImages.map((image, index) => (
                <motion.div
                  key={image.id}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="relative aspect-square overflow-hidden rounded-lg group"
                >
                  <Link to="/gallery" className="block w-full h-full">
                    <img
                      src={image.image_url}
                      alt={image.description || 'Maneet Sharma Photography recent work'}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </Link>
                </motion.div>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <Button variant="hero" size="lg" asChild>
                <Link to="/gallery">View Full Gallery</Link>
              </Button>
            </motion.div>
          </>
        ) : (
          <div className="text-center">
            <p className="text-muted-foreground">No images available yet.</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default GalleryPreview;