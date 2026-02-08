'use client';

import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Trust from '@/components/Trust';
import Features from '@/components/Features';
import Podcasts from '@/components/Podcasts';
import ContentSection from '@/components/ContentSection';
import Insights from '@/components/Insights';
import FAQ from '@/components/FAQ';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Trust />
      <Features />
      <Podcasts />
      <ContentSection />
      <Insights />
      <FAQ />
      <Contact />
      <Footer />
    </main>
  );
}

