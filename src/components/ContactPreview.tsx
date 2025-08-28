import { motion } from 'framer-motion';
import { Phone, Mail, MessageCircle, Instagram } from 'lucide-react';
import { Button } from '@/components/ui/button';

const ContactPreview = () => {
  return (
    <section className="py-20 bg-elegant-gray text-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="font-heading text-4xl md:text-5xl font-bold mb-6">
            Get In <span className="text-primary">Touch</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-8">
            Let's create something beautiful together. Ready to capture your special moments?
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          <motion.a
            href="tel:+917248833774"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="group"
          >
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center hover:bg-white/20 transition-luxury group-hover:scale-105">
              <Phone className="w-8 h-8 text-primary mx-auto mb-4" />
              <h3 className="font-medium text-white mb-2">Call Us</h3>
              <p className="text-gray-300 text-sm">+91 72488 33774</p>
            </div>
          </motion.a>

          <motion.a
            href="mailto:Maneetography@gmail.com"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="group"
          >
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center hover:bg-white/20 transition-luxury group-hover:scale-105">
              <Mail className="w-8 h-8 text-primary mx-auto mb-4" />
              <h3 className="font-medium text-white mb-2">Email</h3>
              <p className="text-gray-300 text-sm">Maneetography@gmail.com</p>
            </div>
          </motion.a>

          <motion.a
            href="https://wa.me/917248833774"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="group"
          >
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center hover:bg-white/20 transition-luxury group-hover:scale-105">
              <MessageCircle className="w-8 h-8 text-primary mx-auto mb-4" />
              <h3 className="font-medium text-white mb-2">WhatsApp</h3>
              <p className="text-gray-300 text-sm">Chat with us</p>
            </div>
          </motion.a>

          <motion.a
            href="https://www.instagram.com/maneet_sharmaa"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="group"
          >
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center hover:bg-white/20 transition-luxury group-hover:scale-105">
              <Instagram className="w-8 h-8 text-primary mx-auto mb-4" />
              <h3 className="font-medium text-white mb-2">Instagram</h3>
              <p className="text-gray-300 text-sm">@maneet_sharmaa</p>
            </div>
          </motion.a>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <Button variant="hero" size="xl" asChild>
            <a href="https://wa.me/917248833774" target="_blank" rel="noopener noreferrer">
              Start Your Journey
            </a>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactPreview;