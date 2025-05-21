import HeroBanner from '@/components/home/hero-banner';
import FeaturedCategories from '@/components/home/featured-categories';
import FeaturedProducts from '@/components/home/featured-products';
import TrendingProducts from '@/components/home/trending-products';
import DealsSection from '@/components/home/deals-section';
import BrandsSection from '@/components/home/brands-section';
import NewsletterSignup from '@/components/home/newsletter-signup';

export default function Home() {
  return (
    <div className="flex flex-col gap-12 pb-12">
      <HeroBanner />
      <div className="container mx-auto px-4">
        <FeaturedCategories />
        <FeaturedProducts />
        <DealsSection />
        <TrendingProducts />
        <BrandsSection />
        <NewsletterSignup />
      </div>
    </div>
  );
}