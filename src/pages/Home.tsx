import Layout from '@/components/Layout';
import HeroSection from '@/components/HeroSection';
import ServicesPreview from '@/components/ServicesPreview';
import GalleryPreview from '@/components/GalleryPreview';
import AboutPreview from '@/components/AboutPreview';
import ReviewsSection from '@/components/ReviewsSection';
import ContactForm from '@/components/ContactForm';
import ContactPreview from '@/components/ContactPreview';

const Home = () => {
  return (
    <Layout>
      <HeroSection />
      <ServicesPreview />
      <GalleryPreview />
      <AboutPreview />
      <ReviewsSection />
      <ContactForm />
      <ContactPreview />
    </Layout>
  );
};

export default Home;