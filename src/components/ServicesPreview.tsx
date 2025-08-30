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

const ServicesPreview = () => {
  const services = [
    {
      id: 'wedding-photography',
      title: 'Wedding Photography',
      description: 'Capturing your special day with elegance and artistry',
      icon: Heart,
    },
    {
      id: 'pre-wedding-shoot',
      title: 'Pre-Wedding Shoot',
      description: 'Romantic sessions to celebrate your love story',
      icon: Camera,
    },
    {
      id: 'destination-weddings',
      title: 'Destination Weddings',
      description: 'Beautiful ceremonies in stunning locations',
      icon: Plane,
    },
    {
      id: 'event-photography',
      title: 'Event Photography',
      description: 'Professional coverage for birthdays and celebrations',
      icon: Calendar,
    },
    {
      id: 'corporate-shoots',
      title: 'Corporate Shoots',
      description: 'Business portraits and company event photography',
      icon: Building,
    },
    {
      id: 'maternity-baby',
      title: 'Maternity & Baby',
      description: 'Tender moments of growing families',
      icon: Baby,
    },
    {
      id: 'drone-photography',
      title: 'Drone Photography',
      description: 'Aerial perspectives for unique storytelling',
      icon: Zap,
    },
    {
      id: 'group-photography',
      title: 'Group Photography',
      description: 'Family reunions and group celebrations',
      icon: Users,
    },
  ];

  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4 sm:mb-6">
            Our <span className="text-primary">Services</span>
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto px-4 sm:px-0">
            From intimate moments to grand celebrations, we capture every emotion with artistic precision
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 sm:gap-8 mb-8 sm:mb-12">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full hover:shadow-lg transition-luxury group cursor-pointer border-0 elegant-shadow">
                <CardContent className="p-6 text-center">
                  <div className="mb-4 flex justify-center">
                    <div className="w-16 h-16 rounded-full luxury-gradient flex items-center justify-center group-hover:scale-110 transition-luxury">
                      <service.icon className="w-8 h-8 text-white" />
                    </div>
                  </div>
                  <h3 className="font-heading text-lg font-semibold text-foreground mb-3">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                    {service.description}
                  </p>
                  <Button variant="outline" size="sm" asChild>
                    <Link to={`/services/${service.id}`}>
                      View Details
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <Button variant="luxury" size="lg" asChild>
            <Link to="/services">View All Services</Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesPreview;