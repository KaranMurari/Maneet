import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import photographerPortrait from '@/assets/profilePicture.jpg';

const AboutPreview = () => {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative overflow-hidden rounded-2xl elegant-shadow">
              <img
                src={photographerPortrait}
                alt="Maneet Sharma - Professional Photographer"
                className="w-full h-[600px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div>
              <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-6">
                Meet <span className="text-primary">Maneet Sharma</span>
              </h2>
              <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
                <p>
                  With a passion for capturing life's most precious moments, I've dedicated my career 
                  to creating timeless photographs that tell your unique story.
                </p>
                <p>
                  Based in the beautiful state of Uttarakhand, I specialize in wedding photography, 
                  pre-wedding shoots, and event coverage across scenic locations from Kashipur to 
                  Jim Corbett National Park.
                </p>
                <p>
                  Every photograph is crafted with attention to detail, artistic vision, and a deep 
                  understanding of the emotions that make each moment special.
                </p>
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex items-center space-x-4">
                <div className="w-2 h-2 rounded-full bg-primary"></div>
                <span className="text-foreground font-medium">5+ Years of Experience</span>
              </div>
              <div className="flex items-center space-x-4">
                <div className="w-2 h-2 rounded-full bg-primary"></div>
                <span className="text-foreground font-medium">100+ Happy Couples</span>
              </div>
              <div className="flex items-center space-x-4">
                <div className="w-2 h-2 rounded-full bg-primary"></div>
                <span className="text-foreground font-medium">Professional Equipment</span>
              </div>
            </div>

            <div className="pt-6">
              <Button variant="elegant" size="lg" asChild>
                <Link to="/about">Read My Story</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutPreview;
