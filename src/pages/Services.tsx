import Layout from '@/components/Layout';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { 
  Heart, 
  Camera, 
  Plane, 
  Calendar, 
  Building, 
  Baby,
  Zap,
  Users
} from 'lucide-react';

const Services = () => {
  const services = [
    {
      id: 'wedding-photography',
      title: 'Wedding Photography',
      description: 'Complete wedding day coverage with artistic storytelling, candid moments, and traditional ceremonies. Includes pre-wedding consultation, full day coverage, and edited gallery.',
      icon: Heart,
      features: ['Full Day Coverage', 'Candid & Posed Shots', 'Traditional Ceremonies', 'Edited Gallery'],
      
    },
    {
      id: 'pre-wedding-shoot',
      title: 'Pre-Wedding Shoot',
      description: 'Romantic couple sessions in beautiful locations. Perfect for save-the-date cards, wedding invitations, or simply celebrating your love story.',
      icon: Camera,
      features: ['2-3 Hour Session', 'Multiple Outfits', 'Location Scouting', 'High-Res Images'],
      
    },
    {
      id: 'destination-weddings',
      title: 'Destination Weddings',
      description: 'Stunning coverage for weddings in exotic locations. We travel with you to capture your special day against breathtaking backdrops.',
      icon: Plane,
      features: ['Travel Coverage', 'Multi-Day Events', 'Local Coordination', 'Drone Photography'],
      
    },
    {
      id: 'event-photography',
      title: 'Event Photography',
      description: 'Professional coverage for birthdays, anniversaries, celebrations, and special occasions. Capturing joy and creating lasting memories.',
      icon: Calendar,
      features: ['Event Coverage', 'Group Photos', 'Candid Moments', 'Quick Turnaround'],
      
    },
    {
      id: 'corporate-shoots',
      title: 'Corporate Photography',
      description: 'Business portraits, company events, team photos, and corporate headshots. Professional images for your business needs.',
      icon: Building,
      features: ['Business Portraits', 'Team Photos', 'Event Coverage', 'Brand Photography'],
      
    },
    {
      id: 'maternity-baby',
      title: 'Maternity & Baby Photography',
      description: 'Tender moments of growing families. Maternity sessions and newborn photography handled with care and creativity.',
      icon: Baby,
      features: ['Maternity Sessions', 'Newborn Photos', 'Family Portraits', 'Safe Environment'],
      
    },
    {
      id: 'drone-photography',
      title: 'Drone Photography',
      description: 'Aerial perspectives that add a unique dimension to your photography. Perfect for weddings, events, and landscape shots.',
      icon: Zap,
      features: ['Aerial Views', 'Landscape Shots', 'Event Coverage', 'High Resolution'],
      
    },
    {
      id: 'group-photography',
      title: 'Group Photography',
      description: 'Family reunions, group celebrations, and large gatherings. Coordinated sessions to capture everyone at their best.',
      icon: Users,
      features: ['Large Groups', 'Family Reunions', 'Coordinated Poses', 'Multiple Shots'],
      
    },
  ];

  return (
    <Layout
      title="Photography Services - Wedding, Pre-Wedding & Event Photography | Maneet Sharma"
      description="Professional photography services in Uttarakhand including wedding photography, pre-wedding shoots, corporate events, maternity photography and more. Contact for custom solutions."
      keywords="Wedding Photography Services, Pre Wedding Shoot Services, Event Photography Uttarakhand, Corporate Photography, Maternity Photography, Drone Photography Services"
    >
      <div className="pt-20">
        {/* Hero Section */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h1 className="font-heading text-4xl md:text-6xl font-bold text-foreground mb-6">
                Our Photography <span className="text-primary">Services</span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                From intimate moments to grand celebrations, we offer comprehensive photography services 
                tailored to capture your unique story with artistic excellence.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="h-full hover:shadow-lg transition-luxury group border-0 elegant-shadow">
                    <CardContent className="p-8">
                      <div className="mb-6 flex justify-center">
                        <div className="w-20 h-20 rounded-full luxury-gradient flex items-center justify-center group-hover:scale-110 transition-luxury">
                          <service.icon className="w-10 h-10 text-white" />
                        </div>
                      </div>
                      
                      <h3 className="font-heading text-2xl font-bold text-foreground mb-4 text-center">
                        {service.title}
                      </h3>
                      
                      <p className="text-muted-foreground leading-relaxed mb-6">
                        {service.description}
                      </p>
                      
                      <div className="space-y-2 mb-6">
                        {service.features.map((feature, i) => (
                          <div key={i} className="flex items-center space-x-2">
                            <div className="w-1.5 h-1.5 rounded-full bg-primary"></div>
                            <span className="text-sm text-muted-foreground">{feature}</span>
                          </div>
                        ))}
                      </div>
                      
                      <div className="border-t border-border pt-6">
                        <div className="space-y-3">
                          <Button variant="luxury" size="default" className="w-full" asChild>
                            <Link to={`/services/${service.id}`}>Learn More</Link>
                          </Button>
                          <Button variant="outline" size="default" className="w-full" asChild>
                            <Link to="/contact">Inquire for Pricing & Availability</Link>
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-6">
                Ready to Book Your Session?
              </h2>
              <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                Let's discuss your vision and create a custom solution that perfectly fits your needs.
              </p>
              <div className="space-x-4">
                <Button variant="hero" size="xl" asChild>
                  <Link to="/contact">Get in Touch</Link>
                </Button>
                <Button variant="outline" size="xl" asChild>
                  <Link to="/gallery">View Gallery</Link>
                </Button>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default Services;