import { Helmet, HelmetProvider } from 'react-helmet-async';
import Navbar from './Navbar';
import Footer from './Footer';

interface LayoutProps {
  children: React.ReactNode;
  title?: string;
  description?: string;
  keywords?: string;
}

const Layout = ({ 
  children, 
  title = "Maneet Sharma Photography - Luxury Wedding & Event Photographer in Uttarakhand",
  description = "Professional photographer in Uttarakhand specializing in wedding, pre-wedding, and event photography. Capturing timeless memories in Kashipur, Ramnagar, Jim Corbett, and beyond.",
  keywords = "Best Photographer in Uttarakhand, Wedding Photographer Kashipur, Pre Wedding Shoot Jim Corbett, Photographer Ramnagar, Event Photography Rudrapur, Professional Photographer Haridwar, Best Photography Haldwani"
}: LayoutProps) => {
  return (
    <HelmetProvider>
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:type" content="website" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        
        {/* JSON-LD Schema */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ProfessionalService",
            "name": "Maneet Sharma Photography",
            "image": "/src/assets/hero-1.jpg",
            "url": window.location.origin,
            "telephone": "+91-7248833774",
            "email": "Maneetography@gmail.com",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "Kashipur",
              "addressLocality": "Kashipur",
              "addressRegion": "Uttarakhand",
              "postalCode": "244713",
              "addressCountry": "IN"
            },
            "sameAs": [
              "https://www.instagram.com/maneet_sharmaa"
            ],
            "areaServed": [
              {
                "@type": "City",
                "name": "Kashipur"
              },
              {
                "@type": "City",
                "name": "Ramnagar"
              },
              {
                "@type": "City",
                "name": "Rudrapur"
              },
              {
                "@type": "City",
                "name": "Haldwani"
              },
              {
                "@type": "City",
                "name": "Haridwar"
              },
              {
                "@type": "Place",
                "name": "Jim Corbett National Park"
              },
              {
                "@type": "State",
                "name": "Uttarakhand"
              }
            ],
            "priceRange": "Contact for pricing"
          })}
        </script>
      </Helmet>
      
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1">
          {children}
        </main>
        <Footer />
      </div>
    </HelmetProvider>
  );
};

export default Layout;
