'use client';

import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Trust from '@/components/Trust';
import Features from '@/components/Features';
import ContentSection from '@/components/ContentSection';
import VisionBanner from '@/components/VisionBanner';
import ImageCollage from '@/components/ImageCollage';
import InternshipEcosystem from '@/components/InternshipEcosystem';
import Podcasts from '@/components/Podcasts';
import Insights from '@/components/Insights';
import CTABanner from '@/components/CTABanner';
import FAQ from '@/components/FAQ';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="bg-[#0B0B0B]">
      <Navbar />
      <Hero />
      <Trust />
      <Features />
      <ContentSection />
      <VisionBanner />
      <ImageCollage />
      <InternshipEcosystem />
      <Podcasts />
      <Insights />
      <CTABanner />
      <FAQ />
      <Contact />
      <Footer />
    </main>
  );
}

