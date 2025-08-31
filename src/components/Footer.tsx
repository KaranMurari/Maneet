import { Link } from 'react-router-dom';
import { Instagram, Phone, Mail, MessageCircle, Camera } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <footer className="bg-elegant-gray text-white relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {/* Brand Section */}
          <div className="space-y-4 order-3 md:order-1">
            <div className="flex items-center space-x-2">
              <Camera className="w-6 h-6 text-primary" />
              <span className="font-heading text-xl font-bold">
                Maneet Sharma Photography
              </span>
            </div>
            <p className="text-gray-300 leading-relaxed">
              Capturing timeless memories through luxury photography across Uttarakhand. 
              Specializing in weddings, pre-wedding shoots, and special events.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4 order-1 md:order-2">
            <h3 className="font-heading text-lg font-semibold text-primary">
              Quick Links
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {quickLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className="text-gray-300 hover:text-primary transition-luxury"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-4 order-2 md:order-3">
            <h3 className="font-heading text-lg font-semibold text-primary">
              Get In Touch
            </h3>
            <div className="space-y-3">
              <a
                href="tel:+917248833774"
                className="flex items-center space-x-3 text-gray-300 hover:text-primary transition-luxury"
              >
                <Phone className="w-5 h-5" />
                <span>+91 72488 33774</span>
              </a>
              <a
                href="mailto:Maneetography@gmail.com"
                className="flex items-center space-x-3 text-gray-300 hover:text-primary transition-luxury"
              >
                <Mail className="w-5 h-5" />
                <span>Maneetography@gmail.com</span>
              </a>
              <a
                href="https://wa.me/917248833774"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-3 text-gray-300 hover:text-primary transition-luxury"
              >
                <MessageCircle className="w-5 h-5" />
                <span>WhatsApp</span>
              </a>
              <a
                href="https://www.instagram.com/maneet_sharmaa"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-3 text-gray-300 hover:text-primary transition-luxury"
              >
                <Instagram className="w-5 h-5" />
                <span>@maneet_sharmaa</span>
              </a>
            </div>
          </div>
        </div>
        
        {/* Copyright and Credit - Bottom Left */}
        <div className="mt-8 pt-6 border-t border-gray-700">
          <div className="flex flex-col space-y-1">
            <p className="text-sm text-gray-400">
              © {currentYear} Maneet Sharma Photography. All rights reserved.
            </p>
            <p className="text-sm text-gray-400">
              Designed by{" "}
              <a
                href="https://karanmurari.online"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#d4af37] hover:underline"
              >
                Karan Murari
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
