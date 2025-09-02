import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-luxury ${
        isScrolled
          ? 'bg-background/95 backdrop-blur-md elegant-shadow'
          : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link 
            to="/" 
            className="flex items-center space-x-2 font-heading text-lg sm:text-xl font-bold text-foreground hover:text-primary transition-luxury"
          >
            <img 
              src="/lovable-uploads/bbf7d3bc-54d4-43e8-bcae-6d24e0c8fcc4.png" 
              alt="Maneet Sharma Photography Logo" 
              className="w-8 h-8 sm:w-10 sm:h-10" 
            />
            <span className="hidden sm:block">Maneet Sharma Photography</span>
            <span className="block sm:hidden">Maneet Sharma Photography</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`font-medium transition-luxury hover:text-primary ${
                  location.pathname === item.path
                    ? 'text-primary'
                    : 'text-foreground'
                }`}
              >
                {item.name}
              </Link>
            ))}
            
            <Button variant="hero" size="default" asChild  className="text-gray-800">
              <Link to="/book-now">Book Now</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden text-foreground hover:text-primary transition-luxury"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          className="md:hidden bg-background/95 backdrop-blur-md border-t border-border"
        >
          <div className="container mx-auto px-4 py-6 space-y-4">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                onClick={() => setIsMobileMenuOpen(false)}
                className={`block py-2 font-medium transition-luxury hover:text-primary ${
                  location.pathname === item.path
                    ? 'text-primary'
                    : 'text-foreground'
                }`}
              >
                {item.name}
              </Link>
            ))}
            
            <Button variant="hero" size="default" className="w-full" asChild>
              <Link to="/book-now" onClick={() => setIsMobileMenuOpen(false)}>
                Book Now
              </Link>
            </Button>
          </div>
        </motion.div>
      )}
    </motion.nav>
  );
};

export default Navbar;
