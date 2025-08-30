import Layout from '@/components/Layout';
import { motion } from 'framer-motion';
import { Award, Camera, Heart, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import photographerPortrait from '@/assets/profilePicture.jpg';

const About = () => {
  const achievements = [
    {
      icon: Camera,
      title: '10+ Years Experience',
      description: 'Professional photography across various specialties'
    },
    {
      icon: Heart,
      title: '100+ Happy Couples',
      description: 'Beautiful weddings captured with artistic vision'
    },
    {
      icon: Users,
      title: '500+ Events Covered',
      description: 'From intimate gatherings to grand celebrations'
    },
    {
      icon: Award,
      title: 'Professional Equipment',
      description: 'Latest cameras, lenses, and drone technology'
    }
  ];

  return (
    <Layout
      title="About Maneet Sharma - Professional Wedding & Event Photographer in Uttarakhand"
      description="Meet Maneet Sharma, a passionate photographer based in Uttarakhand specializing in wedding photography, pre-wedding shoots, and event coverage. Learn about his journey and artistic vision."
      keywords="About Maneet Sharma Photography, Professional Photographer Uttarakhand, Wedding Photographer Biography, Photography Services Kashipur, Photographer Experience"
    >
      <div className="pt-20">
        {/* Hero Section */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Image */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="relative"
              >
                <div className="relative overflow-hidden rounded-2xl elegant-shadow">
                  <img
                    src={photographerPortrait}
                    alt="Maneet Sharma - Professional Photographer"
                    className="w-full h-[700px] object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                </div>
              </motion.div>

              {/* Content */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="space-y-6"
              >
                <div>
                  <h1 className="font-heading text-4xl md:text-6xl font-bold text-foreground mb-6">
                    Hello, I'm <span className="text-primary">Maneet Sharma</span>
                  </h1>
                  <p className="text-xl text-muted-foreground leading-relaxed">
                    A passionate photographer dedicated to capturing life's most precious moments 
                    with artistic vision and heartfelt storytelling.
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Story Section */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="text-center mb-16"
              >
                <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-6">
                  My <span className="text-primary">Journey</span>
                </h2>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="prose prose-lg max-w-none"
              >
                <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
                  <p>
                    My journey into photography began over five years ago when I first picked up a camera 
                    during a friend's wedding. What started as casual documentation quickly evolved into 
                    a deep passion for capturing the authentic emotions and fleeting moments that make 
                    each celebration unique.
                  </p>
                  
                  <p>
                    Based in the breathtaking state of Uttarakhand, I've had the privilege of documenting 
                    love stories against some of India's most stunning backdrops. From the serene landscapes 
                    of Jim Corbett National Park to the majestic hills surrounding Kashipur, each location 
                    offers its own magical canvas for storytelling.
                  </p>
                  
                  <p>
                    What drives me is the belief that every couple, every family, and every celebration 
                    has a unique story worth telling. My approach combines technical expertise with 
                    genuine care for my clients, ensuring that each photograph not only captures how 
                    you looked, but how you felt in those precious moments.
                  </p>
                  
                  <p>
                    When I'm not behind the camera, you'll find me exploring new locations, studying 
                    light and composition, or planning the next creative shoot. Photography isn't just 
                    my profession – it's my passion, and I'm honored to be part of your special moments.
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Achievements Section */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-6">
                Why Choose <span className="text-primary">Me?</span>
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Years of experience, countless happy clients, and a commitment to excellence 
                in every shot I take.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {achievements.map((achievement, index) => (
                <motion.div
                  key={achievement.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="text-center h-full border-0 elegant-shadow hover:shadow-lg transition-luxury">
                    <CardContent className="p-8">
                      <div className="mb-6 flex justify-center">
                        <div className="w-16 h-16 rounded-full luxury-gradient flex items-center justify-center">
                          <achievement.icon className="w-8 h-8 text-white" />
                        </div>
                      </div>
                      <h3 className="font-heading text-xl font-bold text-foreground mb-3">
                        {achievement.title}
                      </h3>
                      <p className="text-muted-foreground">
                        {achievement.description}
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Philosophy Section */}
        <section className="py-20 bg-elegant-gray text-white">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center max-w-4xl mx-auto"
            >
              <h2 className="font-heading text-4xl md:text-5xl font-bold mb-8">
                My <span className="text-primary">Philosophy</span>
              </h2>
              <p className="text-xl leading-relaxed text-gray-300 mb-8">
                "Every photograph should tell a story, evoke an emotion, and preserve a memory 
                that will be treasured for generations. My role is not just to document moments, 
                but to capture the essence of who you are and the love you share."
              </p>
              <Button variant="hero" size="xl" asChild>
                <a href="https://wa.me/917248833774" target="_blank" rel="noopener noreferrer">
                  Let's Create Magic Together
                </a>
              </Button>
            </motion.div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default About;
