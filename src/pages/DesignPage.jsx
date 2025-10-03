import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button.jsx";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card.jsx";
import { Monitor, Brush, Users, Palette, Award, TrendingUp, Target, CheckCircle, Search, ArrowRight } from "lucide-react";

const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

export default function DesignPage() {
  const services = [
    {
      title: "Web Design & Development",
      icon: <Monitor className="w-8 h-8" />,
      description:
        "Conversion-first sites—fast, mobile-optimized, and SEO-ready from day one.",
      features: ["Custom Design", "Mobile Optimization", "SEO Structure", "Fast Loads", "Clean Code", "CRO"],
      link: "/design/web-design",
    },
    {
      title: "Brand Identity & Logo Design",
      icon: <Brush className="w-8 h-8" />,
      description:
        "Cohesive identities that cut through noise and stick in memory.",
      features: ["Logo Systems", "Brand Guidelines", "Type Systems", "Color Palettes", "Use Cases", "Visual Identity"],
      link: "/design/branding",
    },
    {
      title: "UX/UI Design",
      icon: <Users className="w-8 h-8" />,
      description:
        "Frictionless flows, clear hierarchy, and calls-to-action that get clicks.",
      features: ["UX Strategy", "UI Design", "Wireframes", "Prototypes", "User Testing", "CRO"],
      link: "/design/ux",
    },
    {
      title: "Graphic Design",
      icon: <Palette className="w-8 h-8" />,
      description:
        "On-brand assets for web, print, and everything in between.",
      features: ["Business Cards", "Brochures", "Social Graphics", "Ads", "Print", "Digital Assets"],
      link: "/design/graphic-design",
    },
  ];

  const benefits = [
    { title: "Improved Brand Recognition", icon: <Award className="w-8 h-8" />, desc: "Consistent, high-quality design gets remembered." },
    { title: "Higher Conversion Rates", icon: <TrendingUp className="w-8 h-8" />, desc: "Design that guides action = more leads/sales." },
    { title: "Competitive Advantage", icon: <Target className="w-8 h-8" />, desc: "Differentiate with polish and clarity." },
    { title: "Enhanced Credibility", icon: <CheckCircle className="w-8 h-8" />, desc: "Professional aesthetics build trust fast." },
    { title: "Better SEO Outcomes", icon: <Search className="w-8 h-8" />, desc: "Semantic, fast, mobile-friendly foundations." },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className="relative overflow-hidden py-20">
        <video
          autoPlay
          loop
          muted
          playsInline
          preload="metadata"
          poster="/media_hero.webp"
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="/videos/media_page_hero_video.webm" type="video/webm" />
          <source src="/videos/media_hero.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-black/50" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex items-center min-h-[60vh]">
          <div className="text-center w-full text-white">
            <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}
              className="text-4xl md:text-6xl font-bold mb-6">Design Solutions</motion.h1>
            <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xl mb-8 max-w-3xl mx-auto text-white/90">
              Beautiful, usable, and built to convert—design that pulls its weight.
            </motion.p>
            <Link to="/design/web-design" onClick={scrollToTop}>
              <Button className="bg-white/20 border border-white/30 text-white hover:bg-white/30 px-8 py-3 text-lg">
                Start Your Web Design Project
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Websites Built to Win</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We design for outcomes—rankings, conversions, and scale.
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
                      <Button className="w-full bg-gradient-to-r from-[#4bbf39] to-[#39bfb0] hover:from-[#39bfb0] hover:to-[#4bbf39] text-white">
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
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Why Design Matters</h2>
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
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Why Choose Uptrade Media?</h2>
          <p className="text-xl mb-8 opacity-90">We design for business impact—not just aesthetics.</p>
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
