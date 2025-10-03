import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button.jsx";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card.jsx";
import {
  Search,
  Target,
  MessageSquare,
  Mail,
  Star,
  BarChart3,
  CheckCircle,
  ArrowRight,
} from "lucide-react";

const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

export default function MarketingPage() {
  const services = [
    {
      title: "SEO & Local SEO",
      icon: <Search className="w-8 h-8" />,
      description:
        "Not just traffic—market share. Technical SEO + content + links, built to capture demand.",
      features: [
        "Keyword Strategy",
        "Technical SEO",
        "Local Optimization",
        "Content Strategy",
        "Link Building",
        "Performance Tracking",
      ],
      link: "/marketing/seo",
    },
    {
      title: "Paid Ads Management",
      icon: <Target className="w-8 h-8" />,
      description:
        "Google, Meta, YouTube—full-funnel ads. Creative, targeting, testing, and scaling.",
      features: [
        "Google Ads",
        "Meta Campaigns",
        "YouTube Ads",
        "Optimization",
        "A/B Testing",
        "ROI Tracking",
      ],
      link: "/marketing/ad-management",
    },
    {
      title: "Content Marketing & Blogging",
      icon: <MessageSquare className="w-8 h-8" />,
      description:
        "Authority-building content that educates, ranks, and converts.",
      features: [
        "Content Calendar",
        "SEO Articles",
        "Industry Insights",
        "Lead Magnets",
        "Distribution",
        "Analytics",
      ],
      link: "/marketing/content-marketing",
    },
    {
      title: "Email & Social Campaigns",
      icon: <Mail className="w-8 h-8" />,
      description:
        "Lifecycle emails and social that nurture, retain, and reactivate customers.",
      features: [
        "Automation",
        "Newsletter Design",
        "Segmentation",
        "Social Strategy",
        "Performance",
        "Lead Nurturing",
      ],
      link: "/marketing/email-social-marketing",
    },
    {
      title: "Review & Reputation",
      icon: <Star className="w-8 h-8" />,
      description:
        "Generate, respond, and showcase reviews to win trust and clicks.",
      features: [
        "Review Generation",
        "Response Playbooks",
        "Monitoring",
        "Showcase Widgets",
        "Crisis Handling",
        "Brand Protection",
      ],
      link: "/marketing/reputation-management",
    },
    {
      title: "Sales Funnels",
      icon: <BarChart3 className="w-8 h-8" />,
      description:
        "From hook to hand-raise—landing pages and sequences that convert.",
      features: [
        "Funnel Strategy",
        "LP Design",
        "Lead Magnets",
        "Email Sequences",
        "CRO",
        "Tracking",
      ],
      link: "/marketing/sales-funnels",
    },
  ];

  const benefits = [
    { title: "Maximized ROI", icon: <BarChart3 className="w-8 h-8" />, desc: "Spend smarter with data-backed decisions." },
    { title: "Higher Conversions", icon: <Target className="w-8 h-8" />, desc: "Clear CTAs and funnel flow increase action." },
    { title: "Stronger Brand Presence", icon: <Star className="w-8 h-8" />, desc: "Be seen—and chosen—more often." },
    { title: "Scalable Growth", icon: <CheckCircle className="w-8 h-8" />, desc: "Systems that scale without chaos." },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0">
          <video
            autoPlay
            loop
            muted
            playsInline
            preload="metadata"
            poster="/marketing_hero.webp"
            className="absolute inset-0 w-full h-full object-cover"
          >
            <source src="/videos/marketing_page_hero_video.webm" type="video/webm" />
            <source src="/videos/marketing_hero.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-black/70" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}
            className="text-4xl md:text-6xl font-bold mb-6">
            Marketing Solutions
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl mb-8 max-w-3xl mx-auto text-white/90">
            Smart. Strategic. Results-driven. Outpace competitors with campaigns engineered to convert.
          </motion.p>
          <Link to="/contact" onClick={scrollToTop}>
            <Button className="bg-white/20 backdrop-blur-sm border border-white/30 text-white hover:bg-white/30 px-8 py-3 text-lg">
              Schedule a Consultation
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </Link>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Comprehensive Marketing Services</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We build campaigns that convert—not just campaigns that look good.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {services.map((s, i) => (
              <motion.div key={s.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.1 }} viewport={{ once: true }}>
                <Card className="h-full hover:shadow-xl transition-all duration-300 border-0 bg-white">
                  <CardHeader>
                    <div className="w-16 h-16 mb-4 rounded-full bg-gradient-to-r from-[#4bbf39] to-[#39bfb0] text-white flex items-center justify-center">
                      {s.icon}
                    </div>
                    <CardTitle className="text-xl font-bold text-gray-900 mb-2">{s.title}</CardTitle>
                    <CardDescription className="text-gray-600">{s.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 mb-6">
                      {s.features.map(f => (
                        <li key={f} className="flex items-center text-sm text-gray-600">
                          <CheckCircle className="w-4 h-4 text-[#4bbf39] mr-2" /> {f}
                        </li>
                      ))}
                    </ul>
                    <Link to={s.link} onClick={scrollToTop}>
                      <Button className="w-full bg-gradient-to-r from-[#4bbf39] to-[#39bfb0] text-white">
                        Learn More
                        <ArrowRight className="ml-2 w-4 h-4" />
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">How We Drive Growth</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {benefits.map((b, i) => (
              <motion.div key={b.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.1 }} viewport={{ once: true }} className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-[#4bbf39] to-[#39bfb0] text-white flex items-center justify-center">
                  {b.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{b.title}</h3>
                <p className="text-gray-600">{b.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-[#4bbf39] to-[#39bfb0] text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to get started?</h2>
          <p className="text-xl mb-8 opacity-90">Book a quick consult or grab a free audit—your call.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/free-audit">
              <Button size="lg" className="bg-white text-[#4bbf39] hover:bg-gray-100 px-8 py-3">
                Get Your Free Audit
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
            <a href="tel:+15133310555">
              <Button size="lg" className="bg-white/20 border border-white/30 text-white hover:bg-white/90 hover:text-[#4bbf39] px-8 py-3">
                (513) 331-0555
              </Button>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}