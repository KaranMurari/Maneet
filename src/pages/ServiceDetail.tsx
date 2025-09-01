import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Layout from '@/components/Layout';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  Heart, 
  Camera, 
  Plane, 
  Calendar, 
  Building, 
  Baby,
  Zap,
  Users,
  Check,
  Star
} from 'lucide-react';

// Service images
import serviceWedding from '@/assets/service-wedding.jpg';
import servicePrewedding from '@/assets/service-prewedding.jpg';
import serviceDestination from '@/assets/service-destination.jpg';
import serviceEvents from '@/assets/service-events.jpg';
import serviceCorporate from '@/assets/service-corporate.jpg';
import serviceMaternity from '@/assets/service-maternity.jpg';
import serviceDrone from '@/assets/service-drone.jpg';
import serviceGroup from '@/assets/service-group.jpg';

// Hero images for gallery
import hero1 from '@/assets/hero-1.jpg';
import hero2 from '@/assets/hero-2.jpg';
import hero3 from '@/assets/hero-3.jpg';

const ServiceDetail = () => {
  const { serviceId } = useParams();

  const services = {
    'wedding-photography': {
      id: 'wedding-photography',
      title: 'Wedding Photography',
      subtitle: 'Capturing Your Perfect Day',
      heroImage: serviceWedding,
      icon: Heart,
      description: `Your wedding day is one of the most important days of your life, filled with emotions, joy, and precious moments that deserve to be captured with artistic excellence. Our wedding photography service combines traditional poses with candid storytelling to create a comprehensive visual narrative of your special day.

We understand that every couple is unique, and we tailor our approach to reflect your personal style and vision. From the intimate getting-ready moments to the grand celebration, we ensure that every laugh, tear, and smile is beautifully preserved for generations to come.

Our wedding photography service includes pre-wedding consultation, full day coverage from bridal preparation to reception, professional editing, and a curated online gallery that you can share with family and friends.`,
      features: [
        'Full day coverage (8-12 hours)',
        'Pre-wedding consultation and planning',
        'Bridal preparation photography',
        'Ceremony and reception coverage',
        'Candid and posed photography',
        'Traditional and artistic shots',
        'Professional editing and retouching',
        'Online gallery with download options',
        'Print-ready high-resolution images',
        'USB drive with all edited photos'
      ],
      process: [
        'Initial consultation to understand your vision',
        'Pre-wedding planning and shot list creation',
        'Engagement shoot (optional add-on)',
        'Wedding day coverage',
        'Professional editing and selection',
        'Gallery delivery within 4-6 weeks'
      ],
      gallery: [hero1, hero2, hero3],
      testimonial: {
        text: "Maneet captured our wedding day so beautifully. Every emotion, every moment was perfectly preserved. We couldn't be happier with the results!",
        author: "Priya & Rohan",
        event: "Wedding Ceremony"
      }
    },
    'pre-wedding-shoot': {
      id: 'pre-wedding-shoot',
      title: 'Pre-Wedding Photography',
      subtitle: 'Celebrating Your Love Story',
      heroImage: servicePrewedding,
      icon: Camera,
      description: `Pre-wedding photography sessions are a wonderful way to celebrate your engagement and create beautiful memories before your big day. These intimate sessions allow us to capture your natural chemistry and love in stunning locations that hold special meaning to your relationship.

Our pre-wedding shoots are relaxed, fun, and romantic, designed to showcase your personalities and the unique bond you share. We scout beautiful locations, work with natural lighting, and create artistic compositions that tell your love story in the most captivating way.

These sessions also serve as a perfect opportunity for you to get comfortable with our photography style before your wedding day, ensuring that you feel completely at ease when the big moment arrives.`,
      features: [
        '2-3 hour romantic photo session',
        'Location scouting and consultation',
        'Multiple outfit changes (2-3 outfits)',
        'Couple posing guidance',
        'Natural and artistic photography',
        'Golden hour shooting for best lighting',
        'Professional editing and retouching',
        'Online gallery delivery',
        '50-100 high-resolution edited images',
        'Perfect for save-the-date cards'
      ],
      process: [
        'Consultation to discuss vision and locations',
        'Location scouting and planning',
        'Outfit and styling consultation',
        'Photo session (2-3 hours)',
        'Professional editing and selection',
        'Gallery delivery within 2-3 weeks'
      ],
      gallery: [hero2, hero1, hero3],
      testimonial: {
        text: "Our pre-wedding shoot was magical! Maneet made us feel so comfortable and captured our love beautifully. The photos exceeded our expectations!",
        author: "Anita & Vikram",
        event: "Pre-Wedding Shoot"
      }
    },
    'destination-weddings': {
      id: 'destination-weddings',
      title: 'Destination Wedding Photography',
      subtitle: 'Exotic Locations, Timeless Memories',
      heroImage: serviceDestination,
      icon: Plane,
      description: `Destination weddings offer a unique opportunity to celebrate your love in breathtaking locations, and our destination wedding photography service ensures that every moment is captured against these stunning backdrops. Whether it's a beach in Goa, a palace in Rajasthan, or the mountains of Himachal Pradesh, we travel with you to document your special day.

Our destination wedding coverage includes all the traditional elements of wedding photography while incorporating the unique beauty and culture of your chosen location. We work closely with local vendors and understand the logistics of shooting in different environments to ensure seamless coverage.

We also provide drone photography where permitted, capturing aerial perspectives that showcase the grandeur of your venue and the beauty of your celebration from unique angles.`,
      features: [
        'Multi-day event coverage',
        'Travel to any destination in India',
        'Local venue coordination',
        'Drone photography (where permitted)',
        'Cultural and traditional photography',
        'Landscape and architectural shots',
        'Guest candid photography',
        'Professional editing and storytelling',
        'Travel and accommodation included',
        'Extended online gallery'
      ],
      process: [
        'Destination consultation and planning',
        'Venue coordination and logistics',
        'Travel and accommodation arrangements',
        'Multi-day event coverage',
        'Professional editing and curation',
        'Gallery delivery within 6-8 weeks'
      ],
      gallery: [hero3, hero1, hero2],
      testimonial: {
        text: "Maneet documented our Udaipur wedding beautifully! He captured not just our ceremonies but the essence of the location. Simply outstanding work!",
        author: "Kavya & Arjun",
        event: "Destination Wedding"
      }
    },
    'event-photography': {
      id: 'event-photography',
      title: 'Event Photography',
      subtitle: 'Celebrating Life\'s Special Moments',
      heroImage: serviceEvents,
      icon: Calendar,
      description: `Life is full of special occasions worth celebrating and remembering - birthdays, anniversaries, graduations, family reunions, and other milestone events. Our event photography service captures the joy, laughter, and emotions of these important gatherings with professional excellence.

We understand that every event has its own unique atmosphere and significance. Our approach is to blend seamlessly into your celebration, capturing both planned moments and spontaneous interactions that make your event truly special.

From intimate family gatherings to large celebrations, we ensure comprehensive coverage that tells the complete story of your event, preserving memories that you'll treasure for years to come.`,
      features: [
        'Birthday and anniversary celebrations',
        'Family reunions and gatherings',
        'Graduation ceremonies',
        'Religious ceremonies and festivals',
        'Milestone celebrations',
        'Candid and group photography',
        'Event timeline documentation',
        'Guest interaction coverage',
        'Professional editing',
        'Quick turnaround time'
      ],
      process: [
        'Event consultation and planning',
        'Timeline and shot list preparation',
        'Professional event coverage',
        'Candid and posed photography',
        'Professional editing and selection',
        'Gallery delivery within 2-3 weeks'
      ],
      gallery: [hero1, hero3, hero2],
      testimonial: {
        text: "Maneet captured my daughter's birthday party perfectly! He got all the candid moments and made everyone feel comfortable. Highly recommended!",
        author: "Meera Sharma",
        event: "Birthday Celebration"
      }
    },
    'corporate-shoots': {
      id: 'corporate-shoots',
      title: 'Corporate Photography',
      subtitle: 'Professional Images for Your Business',
      heroImage: serviceCorporate,
      icon: Building,
      description: `In today's business world, professional imagery is crucial for building trust and credibility. Our corporate photography service provides high-quality business portraits, team photos, company events, and brand photography that represent your organization's professionalism and values.

We understand the importance of creating images that align with your brand identity and business objectives. Whether you need headshots for your website, team photos for marketing materials, or event coverage for corporate functions, we deliver professional results that enhance your business image.

Our corporate photography approach is efficient, professional, and minimally disruptive to your business operations while ensuring exceptional quality and consistency across all deliverables.`,
      features: [
        'Professional business portraits',
        'Executive headshots',
        'Team and group photography',
        'Corporate event coverage',
        'Brand and product photography',
        'Office environment shoots',
        'Conference and seminar coverage',
        'Professional editing and retouching',
        'Quick turnaround for business needs',
        'Multiple format deliveries'
      ],
      process: [
        'Business consultation and planning',
        'Shoot scheduling and coordination',
        'Professional photography session',
        'Team and individual portraits',
        'Professional editing and branding',
        'Delivery in multiple formats'
      ],
      gallery: [hero2, hero3, hero1],
      testimonial: {
        text: "Professional and efficient! Maneet provided excellent corporate headshots that perfectly represent our brand. Great communication and quality work.",
        author: "Rajesh Kumar",
        event: "Corporate Headshots"
      }
    },
    'maternity-baby': {
      id: 'maternity-baby',
      title: 'Maternity & Baby Photography',
      subtitle: 'Tender Moments of Growing Families',
      heroImage: serviceMaternity,
      icon: Baby,
      description: `The journey of pregnancy and early motherhood is filled with precious moments that deserve to be beautifully documented. Our maternity and baby photography service specializes in capturing the tender emotions, anticipation, and pure joy of growing families.

We create a comfortable, safe, and nurturing environment for both expecting mothers and newborns. Our sessions are patient, gentle, and designed around the needs of families, ensuring that everyone feels relaxed and comfortable throughout the experience.

From the glowing beauty of pregnancy to the delicate features of newborns, we capture these fleeting moments with artistic sensitivity and professional expertise, creating timeless images that families will treasure forever.`,
      features: [
        'Maternity portrait sessions',
        'Newborn photography (0-14 days)',
        'Baby milestone sessions',
        'Family portrait inclusion',
        'Safe and comfortable environment',
        'Props and styling included',
        'Patient and gentle approach',
        'Professional editing and retouching',
        'Print-ready image delivery',
        'Memory book creation options'
      ],
      process: [
        'Consultation and session planning',
        'Comfortable studio setup',
        'Patient photography session',
        'Safe handling of newborns',
        'Professional editing and selection',
        'Gallery delivery within 2-3 weeks'
      ],
      gallery: [hero3, hero2, hero1],
      testimonial: {
        text: "Maneet was so gentle and patient with our newborn. The photos are absolutely beautiful and captured this special time perfectly. We're so grateful!",
        author: "Neha & Amit",
        event: "Newborn Session"
      }
    },
    'drone-photography': {
      id: 'drone-photography',
      title: 'Drone Photography',
      subtitle: 'Unique Perspectives from Above',
      heroImage: serviceDrone,
      icon: Zap,
      description: `Drone photography adds a spectacular dimension to any event or location shoot, providing breathtaking aerial perspectives that showcase the grandeur and beauty of your celebration from unique vantage points. Our certified drone operations capture stunning overhead shots that are impossible to achieve with traditional photography.

Whether it's showcasing the magnificent scale of your wedding venue, capturing the natural beauty of outdoor locations, or providing dramatic aerial views of group celebrations, drone photography adds a cinematic quality to your photo collection.

We operate all drone equipment in compliance with local regulations and safety guidelines, ensuring professional and responsible aerial photography services for various events and occasions.`,
      features: [
        'Professional aerial photography',
        'High-resolution aerial images',
        'Venue and landscape coverage',
        'Group aerial photography',
        'Cinematic aerial perspectives',
        'Certified drone operations',
        'Safety-compliant flights',
        'Weather-dependent scheduling',
        'Professional editing and enhancement',
        'Integration with ground photography'
      ],
      process: [
        'Location assessment and permissions',
        'Weather and safety evaluation',
        'Flight planning and preparation',
        'Aerial photography session',
        'Professional editing and enhancement',
        'Integration with event photography'
      ],
      gallery: [hero1, hero2, hero3],
      testimonial: {
        text: "The drone shots of our wedding venue were absolutely stunning! Maneet captured perspectives we never imagined. Added so much value to our photo collection.",
        author: "Rahul & Shreya",
        event: "Wedding Aerial Coverage"
      }
    },
    'group-photography': {
      id: 'group-photography',
      title: 'Group Photography',
      subtitle: 'Bringing Everyone Together',
      heroImage: serviceGroup,
      icon: Users,
      description: `Large group photography requires special expertise in coordination, positioning, and ensuring that everyone looks their best in the final image. Our group photography service specializes in family reunions, corporate teams, school groups, and large celebrations where bringing everyone together for memorable photos is essential.

We understand the challenges of coordinating large groups and have developed efficient techniques to ensure smooth sessions with minimal waiting time. Our approach combines traditional group poses with candid interactions to create a comprehensive collection that captures both formal memories and natural group dynamics.

From intimate family gatherings to large corporate events, we ensure that every person is clearly visible and beautifully positioned, creating images that everyone will be proud to display and share.`,
      features: [
        'Large family reunion photography',
        'Corporate team photography',
        'School and organization groups',
        'Event group coordination',
        'Multiple group configurations',
        'Efficient session management',
        'Professional posing guidance',
        'Individual and group shots',
        'Quick session turnaround',
        'Group photo printing services'
      ],
      process: [
        'Group size and location planning',
        'Coordination and scheduling',
        'Efficient group photography session',
        'Multiple configurations and poses',
        'Professional editing and enhancement',
        'Group photo delivery and ordering'
      ],
      gallery: [hero2, hero1, hero3],
      testimonial: {
        text: "Organizing our family reunion photos was seamless with Maneet. He coordinated everything perfectly and made sure everyone looked great. Wonderful experience!",
        author: "The Gupta Family",
        event: "Family Reunion"
      }
    }
  };

  const service = serviceId ? services[serviceId as keyof typeof services] : null;

  if (!service) {
    return (
      <Layout title="Service Not Found">
        <div className="pt-20 min-h-screen flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-foreground mb-4">Service Not Found</h1>
            <p className="text-muted-foreground mb-8">The service you're looking for doesn't exist.</p>
            <Button asChild>
              <Link to="/services">Back to Services</Link>
            </Button>
          </div>
        </div>
      </Layout>
    );
  }

  const IconComponent = service.icon;

  return (
    <Layout
      title={`${service.title} - Professional Photography Services | Maneet Sharma`}
      description={service.description.substring(0, 160)}
      keywords={`${service.title}, Professional Photography, Uttarakhand, Wedding Photography, Event Photography`}
    >
      <div className="pt-20">
        {/* Hero Section */}
        <section className="relative h-[70vh] overflow-hidden">
          <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${service.heroImage})` }}
          >
            <div className="absolute inset-0 bg-black/50"></div>
          </div>
          
          <div className="relative z-10 h-full flex items-center justify-center text-center">
            <div className="container mx-auto px-4">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="max-w-4xl mx-auto"
              >
                <div className="w-20 h-20 rounded-full luxury-gradient flex items-center justify-center mx-auto mb-6">
                  <IconComponent className="w-10 h-10 text-white" />
                </div>
                <h1 className="font-heading text-4xl md:text-6xl font-bold text-white mb-4">
                  {service.title}
                </h1>
                <p className="text-xl md:text-2xl text-white/90 mb-8">
                  {service.subtitle}
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button variant="hero" size="xl" asChild>
                    <Link to="/book-now">Book This Service</Link>
                  </Button>
                  <Button variant="secondary" size="xl" asChild>
                    <Link to="/contact">Get Quote</Link>
                  </Button>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Service Description */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-6">
                  About This Service
                </h2>
                <div className="prose prose-lg max-w-none text-muted-foreground">
                  {service.description.split('\n\n').map((paragraph, index) => (
                    <p key={index} className="mb-4 leading-relaxed">
                      {paragraph}
                    </p>
                  ))}
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="space-y-8"
              >
                <Card className="border-0 elegant-shadow">
                  <CardContent className="p-6">
                    <h3 className="font-heading text-xl font-bold text-foreground mb-4">
                      What's Included
                    </h3>
                    <ul className="space-y-3">
                      {service.features.map((feature, index) => (
                        <li key={index} className="flex items-start space-x-3">
                          <Check className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                          <span className="text-muted-foreground">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>

                <Card className="border-0 elegant-shadow">
                  <CardContent className="p-6">
                    <h3 className="font-heading text-xl font-bold text-foreground mb-4">
                      Our Process
                    </h3>
                    <ol className="space-y-3">
                      {service.process.map((step, index) => (
                        <li key={index} className="flex items-start space-x-3">
                          <Badge variant="default" className="bg-primary text-white min-w-[24px] h-6 rounded-full flex items-center justify-center text-sm font-semibold">
                            {index + 1}
                          </Badge>
                          <span className="text-muted-foreground">{step}</span>
                        </li>
                      ))}
                    </ol>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Gallery Section */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-6">
                Sample Work
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Here are some examples of our work in this category to give you an idea of our style and quality.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              {service.gallery.map((image, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="aspect-[4/5] overflow-hidden rounded-lg elegant-shadow hover:shadow-2xl transition-luxury group"
                >
                  <img
                    src={image}
                    alt={`${service.title} sample ${index + 1}`}
                    className="w-full h-full object-cover group-hover:scale-105 transition-luxury"
                  />
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Inquiry Section */}
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
                Interested in This Service?
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
                Every event is unique, and we create custom solutions tailored to your specific needs. Contact us for personalized consultation and availability.
              </p>
              <Button variant="luxury" size="xl" asChild>
                <Link to="/contact">Inquire for Pricing & Availability</Link>
              </Button>
            </motion.div>
          </div>
        </section>

        {/* Testimonial Section */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="max-w-4xl mx-auto text-center"
            >
              <div className="mb-8">
                <div className="flex justify-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-6 h-6 text-primary fill-current" />
                  ))}
                </div>
                <blockquote className="text-xl md:text-2xl text-muted-foreground italic leading-relaxed mb-6">
                  "{service.testimonial.text}"
                </blockquote>
                <cite className="font-semibold text-foreground">
                  {service.testimonial.author}
                </cite>
                <p className="text-muted-foreground">{service.testimonial.event}</p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center max-w-3xl mx-auto"
            >
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-6">
                Ready to Book This Service?
              </h2>
              <p className="text-xl text-muted-foreground mb-8">
                Let's discuss your vision and create beautiful memories together. Contact us today to get started.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button variant="luxury" size="xl" asChild>
                  <Link to="/book-now">Book Now</Link>
                </Button>
                <Button variant="outline" size="xl" asChild>
                  <Link to="/contact">Get in Touch</Link>
                </Button>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default ServiceDetail;