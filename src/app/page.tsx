"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import ContactCTA from '@/components/sections/contact/ContactCTA';
import FaqDouble from '@/components/sections/faq/FaqDouble';
import FeatureBento from '@/components/sections/feature/FeatureBento';
import FeatureHoverPattern from '@/components/sections/feature/featureHoverPattern/FeatureHoverPattern';
import FooterBaseCard from '@/components/sections/footer/FooterBaseCard';
import HeroBillboardDashboard from '@/components/sections/hero/HeroBillboardDashboard';
import MetricSplitMediaAbout from '@/components/sections/about/MetricSplitMediaAbout';
import NavbarStyleFullscreen from '@/components/navbar/NavbarStyleFullscreen/NavbarStyleFullscreen';
import PricingCardThree from '@/components/sections/pricing/PricingCardThree';
import TestimonialCardSix from '@/components/sections/testimonial/TestimonialCardSix';
import { Cloud, Code2, Layers, LayoutDashboard, Monitor, Palette, Smartphone, Target, Zap } from "lucide-react";

export default function LandingPage() {
  return (
    <ThemeProvider
        defaultButtonVariant="icon-arrow"
        defaultTextAnimation="background-highlight"
        borderRadius="rounded"
        contentWidth="medium"
        sizing="medium"
        background="none"
        cardStyle="gradient-bordered"
        primaryButtonStyle="gradient"
        secondaryButtonStyle="layered"
        headingFontWeight="semibold"
    >
      <ReactLenis root>
  <div id="nav" data-section="nav">
      <NavbarStyleFullscreen
      navItems={[
        {
          name: "Home",          id: "hero"},
        {
          name: "About",          id: "about"},
        {
          name: "Services",          id: "pricing"},
        {
          name: "Contact",          id: "contact"},
      ]}
      brandName="Aery"
    />
  </div>

  <div id="hero" data-section="hero">
      <HeroBillboardDashboard
      background={{ variant: "plain" }}
      title="Defining the Digital Frontier."
      description="Aery is a premier web design agency crafting bespoke digital experiences for forward-thinking brands."
      dashboard={{
        title: "Aery Project Workspace",        stats: [
          { title: "Projects", values: [120, 150, 180], description: "Successfully Delivered" },
          { title: "Clients", values: [80, 95, 110], description: "Global Partners" },
          { title: "Impact", values: [98, 99, 100], description: "Client Satisfaction" }
        ],
        logoIcon: Zap,
        sidebarItems: [
          { icon: LayoutDashboard },
          { icon: Layers }
        ],
        imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3Bd1NdKllAX9yoN57kugrHXLZ5t/a-futuristic-software-agency-dashboard-i-1774804170161-00450f37.png",        listItems: []
      }}
    />
  </div>

  <div id="features-bento" data-section="features-bento">
      <FeatureBento
      animationType="slide-up"
      textboxLayout="default"
      useInvertedBackground={false}
      features={[
        {
          title: "UX Strategy",          description: "Deep research-backed design.",          bentoComponent: "reveal-icon",          icon: Target
        },
        {
          title: "Development",          description: "High-performance code.",          bentoComponent: "reveal-icon",          icon: Code2
        },
        {
          title: "Branding",          description: "Visual identity systems.",          bentoComponent: "reveal-icon",          icon: Palette
        }
      ]}
      title="Modern Capabilities"
      description="We blend artistic precision with deep engineering."
    />
  </div>

  <div id="features-hover" data-section="features-hover">
      <FeatureHoverPattern
      animationType="scale-rotate"
      textboxLayout="default"
      useInvertedBackground={false}
      features={[
        {
          title: "Web Design",          description: "Pixel perfect interfaces.",          icon: Monitor
        },
        {
          title: "Mobile Apps",          description: "Native mobile experiences.",          icon: Smartphone
        },
        {
          title: "Cloud Ops",          description: "Scalable infra solutions.",          icon: Cloud
        }
      ]}
      title="Elevating Brands"
      description="Full-cycle digital transformation solutions."
    />
  </div>

  <div id="about" data-section="about">
      <MetricSplitMediaAbout
      useInvertedBackground={false}
      title="Born in 2025, Built for the Future"
      description="At Aery, we bridge the gap between creative vision and technical execution. Our team of designers and engineers work tirelessly to set new standards in digital craft."
      metrics={[
        { value: "5+", title: "Years Combined" },
        { value: "50+", title: "Projects" }
      ]}
      imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3Bd1NdKllAX9yoN57kugrHXLZ5t/an-abstract-minimalist-architectural-pho-1774804169050-3ba7c161.png"
      mediaAnimation="blur-reveal"
      metricsAnimation="slide-up"
    />
  </div>

  <div id="testimonials" data-section="testimonials">
      <TestimonialCardSix
      animationType="slide-up"
      textboxLayout="default"
      useInvertedBackground={false}
      testimonials={[
        { id: "1", name: "Sarah Miller", handle: "@sarah", testimonial: "Aery transformed our web presence completely.", imageSrc: "http://img.b2bpic.net/free-photo/portrait-man-black-suit_23-2148401442.jpg" },
        { id: "2", name: "Mark Chen", handle: "@mark", testimonial: "Exceptional communication and design sense.", imageSrc: "http://img.b2bpic.net/free-photo/portrait-happy-woman-black-jacket-happy-short-haired-girl-dark-suit-widely-sincerely-smiles-isolated-background_197531-18508.jpg" },
        { id: "3", name: "Elena Ross", handle: "@elena", testimonial: "Their attention to detail is truly unparalleled.", imageSrc: "http://img.b2bpic.net/free-photo/redhead-bearded-male-dressed-suit-eyeglasses-smoking-tradition-pipe-dark-grey-background_613910-15584.jpg" },
        { id: "4", name: "David Wu", handle: "@dwu", testimonial: "The best design agency we've ever engaged with.", imageSrc: "http://img.b2bpic.net/free-photo/close-up-portrait-handsome-confident-middle-aged-businessman-black-background_176420-5560.jpg" },
        { id: "5", name: "Chloe Vance", handle: "@cvance", testimonial: "Professional, efficient, and highly creative.", imageSrc: "http://img.b2bpic.net/free-photo/portrait-man-black-suit_23-2148401442.jpg" }
      ]}
      title="Trusted by Visionaries"
      description="Hear what our partners say about working with Aery."
    />
  </div>

  <div id="pricing" data-section="pricing">
      <PricingCardThree
      animationType="slide-up"
      textboxLayout="default"
      useInvertedBackground={false}
      plans={[
        { id: "starter", name: "Starter", price: "$5k", buttons: [{ text: "Get Started", href: "#" }], features: ["Responsive Design", "Basic SEO", "Fast Hosting"] },
        { id: "growth", name: "Growth", price: "$15k", buttons: [{ text: "Get Started", href: "#" }], features: ["UX Strategy", "Advanced SEO", "Content Mgmt"] },
        { id: "enterprise", name: "Enterprise", price: "$50k+", buttons: [{ text: "Contact Us", href: "#" }], features: ["Custom Dev", "Dedicated Support", "Full Analytics"] }
      ]}
      title="Transparent Engagement"
      description="Tailored packages for every business stage."
    />
  </div>

  <div id="faq" data-section="faq">
      <FaqDouble
      textboxLayout="default"
      useInvertedBackground={false}
      faqs={[
        { id: "q1", title: "How long does a design take?", content: "Depending on complexity, 4-8 weeks." },
        { id: "q2", title: "What is the process?", content: "Discovery, Design, Dev, Deploy." },
        { id: "q3", title: "Do you provide support?", content: "Yes, monthly maintenance plans." }
      ]}
      title="Questions Answered"
      description="Common inquiries about our process."
      faqsAnimation="slide-up"
    />
  </div>

  <div id="contact" data-section="contact">
      <ContactCTA
      useInvertedBackground={false}
      background={{ variant: "plain" }}
      tag="Get in touch"
      title="Ready to launch?"
      description="Let's build something extraordinary together."
      buttons={[{ text: "Start Project", href: "#" }]}
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterBaseCard
      logoText="Aery"
      columns={[
        {
          title: "Agency",          items: [
            { label: "Services", href: "#pricing" },
            { label: "Contact", href: "#contact" }
          ]
        }
      ]}
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}
