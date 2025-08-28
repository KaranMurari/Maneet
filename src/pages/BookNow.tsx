import { useState } from 'react';
import Layout from '@/components/Layout';
import { motion } from 'framer-motion';
import { Calendar, MapPin, Camera, Send, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useToast } from '@/hooks/use-toast';

const BookNow = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    eventType: '',
    eventDate: '',
    eventLocation: '',
    message: ''
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Create WhatsApp message
    const message = `🎯 NEW BOOKING INQUIRY 🎯

📸 Event Details:
👤 Name: ${formData.fullName}
📞 Phone: ${formData.phone}
📧 Email: ${formData.email}

🎪 Event Type: ${formData.eventType}
📅 Event Date: ${formData.eventDate}
📍 Location: ${formData.eventLocation}

💬 Additional Message:
${formData.message}

Looking forward to capturing your special moments!`;
    
    const whatsappUrl = `https://wa.me/917248833774?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
    
    toast({
      title: "Booking inquiry sent!",
      description: "You'll be redirected to WhatsApp to complete your booking request.",
    });
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const packages = [
    {
      title: 'Wedding Photography',
      price: 'Starting ₹25,000',
      features: [
        'Full day coverage (8-10 hours)',
        'Pre-wedding consultation',
        'Candid & traditional shots',
        '300+ edited high-res images',
        'Online gallery delivery',
        'Print-ready files'
      ]
    },
    {
      title: 'Pre-Wedding Shoot',
      price: 'Starting ₹15,000',
      features: [
        '2-3 hour session',
        'Multiple outfit changes',
        'Location scouting included',
        '100+ edited images',
        'Social media ready files',
        'Quick turnaround (3-5 days)'
      ]
    },
    {
      title: 'Event Photography',
      price: 'Starting ₹8,000',
      features: [
        'Event coverage (4-6 hours)',
        'Candid moments capture',
        'Group photography',
        '150+ edited images',
        'Same day preview',
        'Digital delivery'
      ]
    }
  ];

  return (
    <Layout
      title="Book Your Photography Session - Maneet Sharma Photography"
      description="Book your wedding photography, pre-wedding shoot, or event coverage with Maneet Sharma Photography. Easy booking process with custom packages available."
      keywords="Book Photography Session, Wedding Photography Booking, Pre Wedding Shoot Booking, Event Photography Booking, Photography Packages Uttarakhand"
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
                Book Your <span className="text-primary">Session</span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Ready to capture your special moments? Fill out the form below and I'll get back 
                to you within 24 hours with a custom quote tailored to your needs.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Popular Packages */}
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
                Popular Packages
              </h2>
              <p className="text-xl text-muted-foreground">
                Choose a package that fits your needs, or let's create a custom solution
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              {packages.map((pkg, index) => (
                <motion.div
                  key={pkg.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="h-full border-0 elegant-shadow hover:shadow-lg transition-luxury">
                    <CardHeader className="text-center">
                      <CardTitle className="font-heading text-2xl text-foreground">
                        {pkg.title}
                      </CardTitle>
                      <p className="text-2xl font-bold text-primary">{pkg.price}</p>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      {pkg.features.map((feature, i) => (
                        <div key={i} className="flex items-center space-x-3">
                          <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                          <span className="text-muted-foreground">{feature}</span>
                        </div>
                      ))}
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Booking Form */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <Card className="border-0 elegant-shadow">
                  <CardHeader className="text-center">
                    <CardTitle className="font-heading text-3xl text-foreground">
                      Book Your Photography Session
                    </CardTitle>
                    <p className="text-muted-foreground">
                      Fill out the details below and I'll create a custom quote for you
                    </p>
                  </CardHeader>
                  <CardContent className="p-8">
                    <form onSubmit={handleSubmit} className="space-y-6">
                      {/* Personal Information */}
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <Label htmlFor="fullName">Full Name *</Label>
                          <Input
                            id="fullName"
                            value={formData.fullName}
                            onChange={(e) => handleInputChange('fullName', e.target.value)}
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
                            placeholder="+91 XXXXX XXXXX"
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
                          placeholder="your.email@example.com"
                          required
                        />
                      </div>

                      {/* Event Details */}
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <Label htmlFor="eventType">Event Type *</Label>
                          <Select value={formData.eventType} onValueChange={(value) => handleInputChange('eventType', value)} required>
                            <SelectTrigger>
                              <SelectValue placeholder="Select event type" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="wedding">Wedding</SelectItem>
                              <SelectItem value="pre-wedding">Pre-Wedding Shoot</SelectItem>
                              <SelectItem value="destination-wedding">Destination Wedding</SelectItem>
                              <SelectItem value="engagement">Engagement</SelectItem>
                              <SelectItem value="birthday">Birthday Party</SelectItem>
                              <SelectItem value="anniversary">Anniversary</SelectItem>
                              <SelectItem value="corporate">Corporate Event</SelectItem>
                              <SelectItem value="maternity">Maternity Shoot</SelectItem>
                              <SelectItem value="baby">Baby Photography</SelectItem>
                              <SelectItem value="family">Family Portrait</SelectItem>
                              <SelectItem value="other">Other</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                        <div>
                          <Label htmlFor="eventDate">Event Date *</Label>
                          <Input
                            id="eventDate"
                            type="date"
                            value={formData.eventDate}
                            onChange={(e) => handleInputChange('eventDate', e.target.value)}
                            required
                          />
                        </div>
                      </div>

                      <div>
                        <Label htmlFor="eventLocation">Event Location / City *</Label>
                        <Input
                          id="eventLocation"
                          value={formData.eventLocation}
                          onChange={(e) => handleInputChange('eventLocation', e.target.value)}
                          placeholder="e.g., Kashipur, Jim Corbett, Ramnagar, etc."
                          required
                        />
                      </div>

                      <div>
                        <Label htmlFor="message">Additional Details</Label>
                        <Textarea
                          id="message"
                          value={formData.message}
                          onChange={(e) => handleInputChange('message', e.target.value)}
                          placeholder="Tell me about your vision, specific requirements, number of guests, preferred photography style, budget range, or any other details..."
                          rows={5}
                        />
                      </div>

                      {/* Submit Button */}
                      <div className="text-center pt-6">
                        <Button type="submit" variant="hero" size="xl" className="px-12">
                          <Send className="w-5 h-5 mr-2" />
                          Send Booking Request
                        </Button>
                        <p className="text-sm text-muted-foreground mt-4">
                          Your inquiry will be sent via WhatsApp for quick response
                        </p>
                      </div>
                    </form>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </div>
        </section>

        {/* What Happens Next */}
        <section className="py-20 bg-elegant-gray text-white">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="font-heading text-3xl md:text-4xl font-bold mb-6">
                What Happens <span className="text-primary">Next?</span>
              </h2>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  step: '01',
                  title: 'Quick Response',
                  description: 'I\'ll review your inquiry and respond within 24 hours with availability and initial thoughts.',
                  icon: Send
                },
                {
                  step: '02',
                  title: 'Consultation Call',
                  description: 'We\'ll have a detailed discussion about your vision, requirements, and create a custom package.',
                  icon: Camera
                },
                {
                  step: '03',
                  title: 'Booking Confirmation',
                  description: 'Once you\'re happy with the proposal, we\'ll confirm your booking with a contract and advance.',
                  icon: CheckCircle
                }
              ].map((item, index) => (
                <motion.div
                  key={item.step}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className="text-center"
                >
                  <div className="mb-6 flex justify-center">
                    <div className="w-20 h-20 rounded-full luxury-gradient flex items-center justify-center relative">
                      <item.icon className="w-8 h-8 text-white" />
                      <div className="absolute -top-2 -right-2 w-8 h-8 bg-white rounded-full flex items-center justify-center">
                        <span className="text-sm font-bold text-elegant-gray">{item.step}</span>
                      </div>
                    </div>
                  </div>
                  <h3 className="font-heading text-xl font-bold mb-4">{item.title}</h3>
                  <p className="text-gray-300 leading-relaxed">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default BookNow;