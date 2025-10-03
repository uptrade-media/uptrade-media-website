import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button.jsx";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card.jsx";
import { Monitor, Brush, Users, Palette, Award, TrendingUp, Target, CheckCircle, Search, ArrowRight } from "lucide-react";
import { getPostsByTag } from "@/utils/blogManager.js";

const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

/* ---------- Design Insights (latest 3 tagged "design") ---------- */
function DesignInsightsSection() {
  const [posts, setPosts] = React.useState([]);
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    let cancelled = false;
    (async () => {
      try {
        setLoading(true);
        const data = await getPostsByTag("design", { limit: 3, includeCategory: true });
        if (!cancelled) setPosts(data || []);
      } catch {
        if (!cancelled) setPosts([]);
      } finally {
        if (!cancelled) setLoading(false);
      }
    })();
    return () => { cancelled = true; };
  }, []);

  if (loading) {
    return (
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Design Insights</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Practical design, UX, and branding tactics from our team.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[0,1,2].map((i) => (
              <div key={i} className="animate-pulse">
                <div className="h-48 w-full bg-gray-200 rounded-lg mb-4" />
                <div className="h-4 bg-gray-200 rounded w-3/4 mb-2" />
                <div className="h-4 bg-gray-200 rounded w-5/6 mb-2" />
                <div className="h-4 bg-gray-200 rounded w-2/3" />
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  if (!posts.length) return null;

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Design Insights</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Beautiful, usable, and conversion-driven design—deconstructed.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {posts.map((post, index) => {
            const category = Array.isArray(post.category) ? post.category[0] : post.category || "";
            const slug = typeof post.slug === "string" ? post.slug : "";
            const href = slug.startsWith("insights/") ? `/${slug}` : `/insights/${slug}`;

            return (
              <motion.div
                key={slug || index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full hover:shadow-xs transition-shadow duration-300 bg-white border-0 overflow-hidden p-0">
                  <div className="relative">
                    <img
                      src={post.image || "/insights/placeholder.webp"}
                      alt={post.title}
                      loading="lazy"
                      decoding="async"
                      className="w-full h-48 object-cover"
                      onError={(e) => { e.currentTarget.src = "/insights/placeholder.webp"; }}
                    />
                    {!!category && (
                      <div className="absolute top-4 right-4">
                        <span className="bg-white/90 backdrop-blur-sm text-gray-700 border border-white/30 px-3 py-1 rounded-full text-sm font-medium capitalize">
                          {category}
                        </span>
                      </div>
                    )}
                  </div>

                  <CardContent className="p-6">
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-sm text-gray-500">{post.readTime}</span>
                    </div>
                    <h3 className="text-xl font-semibold mb-3 line-clamp-2">{post.title}</h3>
                    <p className="text-gray-600 mb-4 line-clamp-3">{post.excerpt}</p>

                    <Link
                      to={href}
                      className="inline-flex items-center text-[#4bbf39] hover:text-[#39bfb0] font-medium transition-colors"
                      onClick={scrollToTop}
                    >
                      Read More
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </Link>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>

        <div className="text-center">
          <Button
            asChild
            size="lg"
            variant="outline"
            className="w-full sm:w-auto border-[#4bbf39] text-[#4bbf39] hover:bg-[#4bbf39] hover:text-white px-8 py-3 transition-transform duration-200 hover:scale-[1.02] active:scale-[0.98]"
          >
            <Link to="/insights?category=design" onClick={scrollToTop}>
              View All Design Insights
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}

/* -------------------- Page -------------------- */
export default function DesignPage() {
  const services = [
    {
      title: "Web Design & Development",
      icon: <Monitor className="w-8 h-8" />,
      description: "Conversion-first sites—fast, mobile-optimized, and SEO-ready from day one.",
      features: ["Custom Design", "Mobile Optimization", "SEO Structure", "Fast Loads", "Clean Code", "CRO"],
      link: "/design/web-design",
    },
    {
      title: "Brand Identity & Logo Design",
      icon: <Brush className="w-8 h-8" />,
      description: "Cohesive identities that cut through noise and stick in memory.",
      features: ["Logo Systems", "Brand Guidelines", "Type Systems", "Color Palettes", "Use Cases", "Visual Identity"],
      link: "/design/branding",
    },
    {
      title: "UX/UI Design",
      icon: <Users className="w-8 h-8" />,
      description: "Frictionless flows, clear hierarchy, and calls-to-action that get clicks.",
      features: ["UX Strategy", "UI Design", "Wireframes", "Prototypes", "User Testing", "CRO"],
      link: "/design/ux",
    },
    {
      title: "Graphic Design",
      icon: <Palette className="w-8 h-8" />,
      description: "On-brand assets for web, print, and everything in between.",
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
    { title: "Design Systems That Scale", icon: <Monitor className="w-8 h-8" />, desc: "Reusable components keep teams fast and experiences consistent." },
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
          poster="/design_hero.webp"
          className="absolute inset-0 w-full h-full object-cover"
        >
            <source src="/videos/design_page_hero_video.webm" type="video/webm" />
        </video>
        <div className="absolute inset-0 bg-black/50" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex items-center min-h-[60vh]">
          <div className="text-center w-full text-white">
            <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}
              className="text-4xl md:text-6xl font-bold mb-6">Design Solutions</motion.h1>
            <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xl mb-8 max-w-3xl mx-auto text-white/90">
              Design that’s easy to use and engineered to convert.
            </motion.p>

            {/* Full-width on mobile + hover expand */}
            <Button
                    asChild
                    className="w-full sm:w-auto bg-white/20 backdrop-blur-sm border border-white/30 text-white hover:bg-white/90 hover:text-[#4bbf39] px-8 py-3 transition-all duration-200 shadow-xs hover:scale-[1.02] active:scale-[0.98]"
                  >
              <Link to="/design/web-design" onClick={scrollToTop}>
                Start Your Web Design Project
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Full-Stack Design for Modern Brands</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Cohesive identities, intuitive interfaces, and conversion-focused websites built for growth.
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
                      {s.features.map((f) => (
                        <li key={f} className="flex items-center text-sm text-gray-600">
                          <CheckCircle className="w-4 h-4 text-[#4bbf39] mr-2" /> {f}
                        </li>
                      ))}
                    </ul>

                    {/* Stretch on all breakpoints + hover expand */}
                    <Button
                      asChild
                      className="w-full bg-gradient-to-r from-[#4bbf39] to-[#39bfb0] hover:from-[#39bfb0] hover:to-[#4bbf39] text-white transition-transform duration-200 hover:scale-[1.02] active:scale-[0.98]"
                    >
                      <Link to={s.link} onClick={scrollToTop}>
                        Learn More
                        <ArrowRight className="ml-2 w-4 h-4" />
                      </Link>
                    </Button>
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
    {/* 3x2 at lg (1 col on mobile, 2 on sm, 3 on lg) */}
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
      {benefits.map((b, i) => (
        <motion.div
          key={b.title}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: i * 0.1 }}
          viewport={{ once: true }}
          className="text-center"
        >
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

      {/* Design Insights */}
      <DesignInsightsSection />

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-[#4bbf39] to-[#39bfb0] text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Why Choose Uptrade Media?</h2>
          <p className="text-xl mb-8 opacity-90">We design for business impact—not just aesthetics.</p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              size="lg"
              className="w-full sm:w-auto bg-white text-[#4bbf39] hover:bg-gray-100 px-8 py-3 transition-transform duration-200 hover:scale-[1.02] active:scale-[0.98]"
            >
              <Link to="/free-audit" onClick={scrollToTop}>
                Get Your Free Audit
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>

            <Button
              asChild
              size="lg"
              className="w-full sm:w-auto bg-white/20 border border-white/30 text-white hover:bg-white/90 hover:text-[#4bbf39] px-8 py-3 transition-transform duration-200 hover:scale-[1.02] active:scale-[0.98]"
            >
              <a href="tel:+15133310555">(513) 331-0555</a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
