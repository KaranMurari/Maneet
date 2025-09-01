import { useState } from 'react';
import Layout from '@/components/Layout';
import { motion } from 'framer-motion';
import { Phone, Mail, MessageCircle, Instagram, MapPin, Clock, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useToast } from '@/hooks/use-toast';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Create WhatsApp message
    const message = `Hi! I'm interested in your photography services.
    
Name: ${formData.name}
Email: ${formData.email}
Phone: ${formData.phone}
Service: ${formData.service}
Message: ${formData.message}`;
    
    const whatsappUrl = `https://wa.me/917248833774?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
    
    toast({
      title: "Message sent!",
      description: "You'll be redirected to WhatsApp to complete your inquiry.",
    });
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const contactInfo = [
    {
      icon: Phone,
      title: 'Call Us',
      value: '+91 72488 33774',
      action: 'tel:+917248833774'
    },
    {
      icon: Mail,
      title: 'Email',
      value: 'Maneetography@gmail.com',
      action: 'mailto:Maneetography@gmail.com'
    },
    {
      icon: MessageCircle,
      title: 'WhatsApp',
      value: 'Chat with us',
      action: 'https://wa.me/917248833774'
    },
    {
      icon: Instagram,
      title: 'Instagram',
      value: '@maneet_sharmaa',
      action: 'https://www.instagram.com/maneet_sharmaa'
    }
  ];

  return (
    <Layout
      title="Contact Maneet Sharma Photography - Book Your Session Today"
      description="Get in touch with Maneet Sharma Photography for wedding photography, pre-wedding shoots, and event coverage in Uttarakhand. Contact us for custom solutions and bookings."
      keywords="Contact Photography Services, Book Wedding Photographer, Photography Booking Uttarakhand, Maneet Sharma Contact, Photography Consultation"
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
                Let's <span className="text-primary">Connect</span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Ready to capture your special moments? Get in touch to discuss your vision, 
                explore our services, and create a custom solution that's perfect for you.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Contact Information */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
              {contactInfo.map((info, index) => (
                <motion.a
                  key={info.title}
                  href={info.action}
                  target={info.action.startsWith('http') ? '_blank' : undefined}
                  rel={info.action.startsWith('http') ? 'noopener noreferrer' : undefined}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="group"
                >
                  <Card className="text-center h-full border-0 elegant-shadow hover:shadow-lg transition-luxury group-hover:scale-105">
                    <CardContent className="p-8">
                      <div className="mb-6 flex justify-center">
                        <div className="w-16 h-16 rounded-full luxury-gradient flex items-center justify-center">
                          <info.icon className="w-8 h-8 text-white" />
                        </div>
                      </div>
                      <h3 className="font-heading text-lg font-bold text-foreground mb-2">
                        {info.title}
                      </h3>
                      <p className="text-muted-foreground">
                        {info.value}
                      </p>
                    </CardContent>
                  </Card>
                </motion.a>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Form & Info */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Contact Form */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <Card className="border-0 elegant-shadow">
                  <CardContent className="p-8">
                    <h2 className="font-heading text-3xl font-bold text-foreground mb-6">
                      Send us a Message
                    </h2>
                    
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <Label htmlFor="name">Full Name *</Label>
                          <Input
                            id="name"
                            value={formData.name}
                            onChange={(e) => handleInputChange('name', e.target.value)}
                            placeholder="Enter your full name"
                            required
                          />
                        </div>
                        <div>
                          <Label htmlFor="phone">Phone Number *</Label>
                          <Input
                            id="phone"
                            type="tel"
                            value={formData.phone}
                            onChange={(e) => handleInputChange('phone', e.target.value)}
                            placeholder="Enter your phone number"
                            required
                          />
                        </div>
                      </div>
                      
                      <div>
                        <Label htmlFor="email">Email Address *</Label>
                        <Input
                          id="email"
                          type="email"
                          value={formData.email}
                          onChange={(e) => handleInputChange('email', e.target.value)}
                          placeholder="Enter your email address"
                          required
                        />
                      </div>
                      
                      <div>
                        <Label htmlFor="service">Service of Interest</Label>
                        <Select value={formData.service} onValueChange={(value) => handleInputChange('service', value)}>
                          <SelectTrigger>
                            <SelectValue placeholder="Select a service" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="wedding-photography">Wedding Photography</SelectItem>
                            <SelectItem value="pre-wedding-shoot">Pre-Wedding Shoot</SelectItem>
                            <SelectItem value="destination-wedding">Destination Wedding</SelectItem>
                            <SelectItem value="event-photography">Event Photography</SelectItem>
                            <SelectItem value="corporate-shoots">Corporate Photography</SelectItem>
                            <SelectItem value="maternity-baby">Maternity & Baby</SelectItem>
                            <SelectItem value="other">Other</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      
                      <div>
                        <Label htmlFor="message">Message</Label>
                        <Textarea
                          id="message"
                          value={formData.message}
                          onChange={(e) => handleInputChange('message', e.target.value)}
                          placeholder="Tell us about your event, vision, and any specific requirements..."
                          rows={5}
                        />
                      </div>
                      
                      <Button type="submit" variant="hero" size="lg" className="w-full">
                        <Send className="w-5 h-5 mr-2" />
                        Send Message via WhatsApp
                      </Button>
                    </form>
                  </CardContent>
                </Card>
              </motion.div>

              {/* Additional Info */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="space-y-8"
              >
                <div>
                  <h2 className="font-heading text-3xl font-bold text-foreground mb-6">
                    Let's Discuss Your Vision
                  </h2>
                  <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                    Every event is unique, and I believe your photography should reflect that. 
                    Whether you're planning an intimate ceremony or a grand celebration, I'm here 
                    to listen to your ideas and create a custom solution that fits your needs perfectly.
                  </p>
                </div>

                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <MapPin className="w-6 h-6 text-primary mt-1" />
                    <div>
                      <h3 className="font-semibold text-foreground mb-2">Service Areas</h3>
                      <p className="text-muted-foreground">
                        Kashipur, Ramnagar, Jim Corbett, Rudrapur, Haldwani, Haridwar, 
                        and throughout Uttarakhand. Destination coverage available.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <Clock className="w-6 h-6 text-primary mt-1" />
                    <div>
                      <h3 className="font-semibold text-foreground mb-2">Response Time</h3>
                      <p className="text-muted-foreground">
                        I typically respond to all inquiries within 24 hours. For urgent bookings, 
                        please call or WhatsApp directly.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-muted/50 rounded-lg p-6">
                  <h3 className="font-heading text-xl font-bold text-foreground mb-4">
                    Quick Contact
                  </h3>
                  <div className="space-y-3">
                    <Button variant="luxury" size="lg" className="w-full" asChild>
                      <a href="https://wa.me/917248833774" target="_blank" rel="noopener noreferrer">
                        WhatsApp: +91 72488 33774
                      </a>
                    </Button>
                    <Button variant="outline" size="lg" className="w-full" asChild>
                      <a href="tel:+917248833774">
                        Call: +91 72488 33774
                      </a>
                    </Button>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Map Section */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
                Find Us in Uttarakhand
              </h2>
              <p className="text-xl text-muted-foreground">
                Based in the beautiful state of Uttarakhand, serving couples across the region
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="rounded-lg overflow-hidden elegant-shadow"
            >
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d110104.86530568729!2d78.86969355!3d29.2183096!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39a1adb91625fb2d%3A0xb69ac1e9e2485c48!2sKashipur%2C%20Uttarakhand!5e0!3m2!1sen!2sin!4v1698765432198!5m2!1sen!2sin"
                width="100%"
                height="400"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Maneet Sharma Photography Location"
              />
            </motion.div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default Contact;