import Layout from '@/components/Layout';
import HeroSection from '@/components/HeroSection';
import ServicesPreview from '@/components/ServicesPreview';
import AboutPreview from '@/components/AboutPreview';
import ReviewsSection from '@/components/ReviewsSection';
import ContactPreview from '@/components/ContactPreview';

const Home = () => {
  return (
    <Layout>
      <HeroSection />
      <ServicesPreview />
      <AboutPreview />
      <ReviewsSection />
      <ContactPreview />
    </Layout>
  );
};

export default Home;