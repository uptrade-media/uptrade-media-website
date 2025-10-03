import React from 'react'
import { Link } from 'react-router-dom'
import SEOHead from '../components/SEOHead.jsx'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button.jsx'
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card.jsx'
import { Badge } from '@/components/ui/badge.jsx'
import {
  ArrowLeft,
  ShieldCheck,
  Lock,
  Cookie,
  Database,
  Share2,
  BarChart3,
  FileCheck,
  RefreshCw,
  Globe,
  UserCheck,
  Phone,
  Mail,
  MapPin
} from 'lucide-react'

function PrivacyPolicyPage() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "PrivacyPolicy",
    "name": "Uptrade Media Privacy Policy",
    "url": "https://uptrademedia.com/privacy",
    "publisher": {
      "@type": "Organization",
      "name": "Uptrade Media",
      "url": "https://uptrademedia.com",
      "logo": {
        "@type": "ImageObject",
        "url": "https://uptrademedia.com/logo.png"
      },
      "telephone": "(513) 331-0555",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "335 Manhattan Blvd",
        "addressLocality": "Dayton",
        "addressRegion": "KY",
        "postalCode": "41074",
        "addressCountry": "US"
      }
    },
    "inLanguage": "en"
  }

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' })

  return (
    <div className="min-h-screen bg-white">
      <SEOHead
        title="Privacy Policy | Uptrade Media"
        description="How Uptrade Media collects, uses, and protects your information. Learn about cookies, analytics, data sharing, retention, and your privacy rights."
        canonicalUrl="https://uptrademedia.com/privacy"
        ogImage="/design_hero.webp"
        structuredData={structuredData}
        pageType="article"
      />

      {/* Breadcrumb */}
      <div className="bg-gray-50 py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link to="/" onClick={scrollToTop} className="inline-flex items-center text-[#4bbf39] hover:text-[#39bfb0] transition-colors">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Home
          </Link>
        </div>
      </div>

      {/* Hero */}
      <section className="relative py-20 bg-gradient-to-br from-[#4bbf39] to-[#39bfb0] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <Badge className="bg-white/20 backdrop-blur-sm text-white border-white/30 mb-4">
              <ShieldCheck className="w-4 h-4 mr-2" />
              Privacy & Data Protection
            </Badge>
            <h1 className="text-4xl lg:text-6xl font-bold mb-6">Privacy Policy</h1>
            <p className="text-white/90 text-lg">
              Your privacy matters. This policy explains what we collect, how we use it, and the choices you have. It applies to
              <span className="font-semibold"> uptrademedia.com</span>, our contact forms, and our client services.
            </p>
            <p className="mt-6 text-white/80">Last updated: {new Date().toLocaleDateString(undefined, { year: 'numeric', month: 'long', day: 'numeric' })}</p>
          </motion.div>
        </div>
      </section>

      {/* Quick Summary */}
      <section className="py-14 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-6">
            <Card className="shadow-sm">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Lock className="w-5 h-5 text-[#4bbf39]" />
                  What we collect
                </CardTitle>
                <CardDescription>Contact details, site usage analytics, and project information you submit.</CardDescription>
              </CardHeader>
            </Card>
            <Card className="shadow-sm">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Share2 className="w-5 h-5 text-[#4bbf39]" />
                  How we use it
                </CardTitle>
                <CardDescription>To respond to inquiries, deliver services, improve our site, and market responsibly.</CardDescription>
              </CardHeader>
            </Card>
            <Card className="shadow-sm">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <UserCheck className="w-5 h-5 text-[#4bbf39]" />
                  Your choices
                </CardTitle>
                <CardDescription>You can access, correct, delete, or opt out of certain processing.</CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="pb-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          {/* 1. Scope */}
          <Card className="shadow-sm">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Globe className="w-5 h-5 text-[#4bbf39]" />
                Scope
              </CardTitle>
            </CardHeader>
            <CardContent className="text-gray-700 space-y-4">
              <p>
                This Privacy Policy describes how <strong>Uptrade Media</strong> (&quot;we,&quot; &quot;us,&quot; or &quot;our&quot;) collects,
                uses, and shares personal information when you visit <strong>uptrademedia.com</strong>, interact with our social and marketing
                channels, submit website forms (including Netlify forms), or engage our services.
              </p>
              <p>
                By using our website or services, you agree to the practices described here. If you disagree, please discontinue use and contact us
                with any questions.
              </p>
            </CardContent>
          </Card>

          {/* 2. Information we collect */}
          <Card className="shadow-sm">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Database className="w-5 h-5 text-[#4bbf39]" />
                Information We Collect
              </CardTitle>
            </CardHeader>
            <CardContent className="text-gray-700 space-y-4">
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  <strong>Contact & Business Details:</strong> name, email, phone, company, industry, and any project details you provide in our
                  consultation forms (e.g., web design, branding, media, UX/UI).
                </li>
                <li>
                  <strong>Usage & Analytics Data:</strong> pages viewed, links clicked, referring/exit pages, device/browser type, approximate
                  location, and time on site, collected via cookies and analytics tools (e.g., Google Analytics). We may also use pixels (e.g., Meta)
                  to measure advertising performance.
                </li>
                <li>
                  <strong>Media Interactions:</strong> when you play embedded videos (e.g., Wistia), the video host may collect view and engagement
                  metrics.
                </li>
                <li>
                  <strong>Client Project Data:</strong> assets and information necessary to deliver our services (e.g., brand materials, photography
                  references, website content).
                </li>
              </ul>
            </CardContent>
          </Card>

          {/* 3. Cookies */}
          <Card className="shadow-sm">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Cookie className="w-5 h-5 text-[#4bbf39]" />
                Cookies & Tracking
              </CardTitle>
            </CardHeader>
            <CardContent className="text-gray-700 space-y-4">
              <p>
                We use cookies, pixels, and similar technologies to operate our site, remember preferences, analyze performance, and improve
                marketing. You can control cookies via your browser settings. Some features may not function properly without cookies.
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Essential:</strong> required for core functionality (e.g., page navigation, form submissions).</li>
                <li><strong>Analytics:</strong> help us understand site performance and improve content.</li>
                <li><strong>Marketing:</strong> measure and optimize campaigns; limit repetitive ads.</li>
              </ul>
            </CardContent>
          </Card>

          {/* 4. How we use info */}
          <Card className="shadow-sm">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <BarChart3 className="w-5 h-5 text-[#4bbf39]" />
                How We Use Information
              </CardTitle>
            </CardHeader>
            <CardContent className="text-gray-700 space-y-3">
              <ul className="list-disc pl-6 space-y-2">
                <li>Respond to inquiries and provide quotes or consultations.</li>
                <li>Deliver, manage, and improve our services and client projects.</li>
                <li>Operate, analyze, and enhance our website experience and content.</li>
                <li>Send service messages and, with your consent where required, marketing communications.</li>
                <li>Protect against fraud, abuse, and security risks, and comply with legal obligations.</li>
              </ul>
              <p className="text-sm text-gray-500">
                Legal bases (where applicable): consent, performance of a contract, legitimate interests (e.g., site security, service improvement),
                and compliance with law.
              </p>
            </CardContent>
          </Card>

          {/* 5. Sharing */}
          <Card className="shadow-sm">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Share2 className="w-5 h-5 text-[#4bbf39]" />
                How We Share Information
              </CardTitle>
            </CardHeader>
            <CardContent className="text-gray-700 space-y-3">
              <p>We do not sell your personal information. We may share limited data with:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Service Providers:</strong> website hosting, form processing (e.g., Netlify Forms), analytics, email/CRM, payment or invoicing, video hosting (e.g., Wistia), and security tools.</li>
                <li><strong>Professional Advisors:</strong> legal, accounting, and insurance advisors as needed.</li>
                <li><strong>Legal & Safety:</strong> to comply with law, enforce policies, or protect rights, property, and safety.</li>
                <li><strong>Business Transfers:</strong> in a merger, acquisition, or asset sale, consistent with this policy.</li>
              </ul>
            </CardContent>
          </Card>

          {/* 6. Retention */}
          <Card className="shadow-sm">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <FileCheck className="w-5 h-5 text-[#4bbf39]" />
                Data Retention
              </CardTitle>
            </CardHeader>
            <CardContent className="text-gray-700">
              We retain personal information only as long as necessary for the purposes set out in this policy, to provide services, comply with our
              legal obligations, resolve disputes, and enforce agreements. Retention periods vary by data type and context.
            </CardContent>
          </Card>

          {/* 7. Security */}
          <Card className="shadow-sm">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Lock className="w-5 h-5 text-[#4bbf39]" />
                Security
              </CardTitle>
            </CardHeader>
            <CardContent className="text-gray-700">
              We use reasonable administrative, technical, and physical safeguards to protect personal information. No method of transmission or
              storage is 100% secure; if you believe your data has been compromised, please contact us immediately.
            </CardContent>
          </Card>

          {/* 8. Your Rights */}
          <Card className="shadow-sm">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <UserCheck className="w-5 h-5 text-[#4bbf39]" />
                Your Privacy Rights & Choices
              </CardTitle>
            </CardHeader>
            <CardContent className="text-gray-700 space-y-4">
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Access / Portability:</strong> request a copy of the data we hold about you.</li>
                <li><strong>Correction:</strong> ask us to update or correct inaccurate information.</li>
                <li><strong>Deletion:</strong> request deletion where applicable (subject to legal exceptions).</li>
                <li><strong>Opt-Out:</strong> unsubscribe from marketing or limit cookies/analytics as permitted.</li>
                <li><strong>Objection / Restriction:</strong> where applicable under GDPR or similar laws.</li>
              </ul>
              <p className="text-sm text-gray-600">
                To exercise rights, email <a href="mailto:privacy@uptrademedia.com" className="text-[#4bbf39] underline">privacy@uptrademedia.com</a> with your request and sufficient information to verify your identity.
              </p>
              <div className="rounded-lg bg-white p-4 border">
                <p className="font-medium mb-2">California (CPRA) Notice</p>
                <p className="text-sm text-gray-600">
                  California residents may request access, correction, deletion, and opt out of &quot;sharing&quot; for cross-context behavioral
                  advertising. We do not sell personal information. To make a request, contact us at the email above and include &quot;California
                  Privacy Request&quot; in the subject line.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* 9. Children */}
          <Card className="shadow-sm">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <FileCheck className="w-5 h-5 text-[#4bbf39]" />
                Children’s Privacy
              </CardTitle>
            </CardHeader>
            <CardContent className="text-gray-700">
              Our website and services are intended for business users and are not directed to children under 13. We do not knowingly collect
              personal information from children under 13. If you believe a child has provided personal information to us, please contact us so we
              can delete it.
            </CardContent>
          </Card>

          {/* 10. International transfers */}
          <Card className="shadow-sm">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Globe className="w-5 h-5 text-[#4bbf39]" />
                International Data Transfers
              </CardTitle>
            </CardHeader>
            <CardContent className="text-gray-700">
              We are based in the United States and may process information in the U.S. and other countries. If you are outside the U.S., your data
              may be transferred to jurisdictions that may not offer the same level of data protection as your home country. Where required, we take
              appropriate steps to protect such transfers.
            </CardContent>
          </Card>

          {/* 11. Third-party links */}
          <Card className="shadow-sm">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Share2 className="w-5 h-5 text-[#4bbf39]" />
                Third-Party Sites & Services
              </CardTitle>
            </CardHeader>
            <CardContent className="text-gray-700">
              Our site may link to third-party websites or include embedded content (e.g., video). Those providers have their own privacy policies
              and practices. We are not responsible for their content or privacy practices.
            </CardContent>
          </Card>

          {/* 12. Changes */}
          <Card className="shadow-sm">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <RefreshCw className="w-5 h-5 text-[#4bbf39]" />
                Changes to This Policy
              </CardTitle>
            </CardHeader>
            <CardContent className="text-gray-700">
              We may update this Privacy Policy from time to time. The &quot;Last updated&quot; date at the top indicates the most recent changes.
              Material changes will be highlighted on this page. Your continued use of our site or services after an update constitutes acceptance of
              the revised policy.
            </CardContent>
          </Card>

          {/* 13. Contact */}
          <Card className="shadow-sm">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Phone className="w-5 h-5 text-[#4bbf39]" />
                Contact Us
              </CardTitle>
            </CardHeader>
            <CardContent className="text-gray-700 space-y-2">
              <p>Questions or requests about this Privacy Policy?</p>
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="flex items-start gap-3">
                  <Mail className="w-5 h-5 text-[#4bbf39] mt-0.5" />
                  <div>
                    <div className="font-medium">Email</div>
                    <a href="mailto:privacy@uptrademedia.com" className="text-[#4bbf39] underline">privacy@uptrademedia.com</a>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Phone className="w-5 h-5 text-[#4bbf39] mt-0.5" />
                  <div>
                    <div className="font-medium">Phone</div>
                    <a href="tel:+15133310555" className="text-[#4bbf39] underline">(513) 331-0555</a>
                  </div>
                </div>
                <div className="flex items-start gap-3 sm:col-span-2">
                  <MapPin className="w-5 h-5 text-[#4bbf39] mt-0.5" />
                  <div>
                    <div className="font-medium">Mailing Address</div>
                    335 Manhattan Blvd, Dayton, KY 41074, United States
                  </div>
                </div>
              </div>
              <p className="text-xs text-gray-500 pt-2">
                This page is provided for transparency and does not constitute legal advice. For specific legal guidance, please consult your counsel.
              </p>
            </CardContent>
          </Card>

          {/* CTA */}
          <div className="text-center pt-4">
            <Link to="/contact">
              <Button size="lg" className="bg-gradient-to-r from-[#4bbf39] to-[#39bfb0] hover:from-[#39bfb0] hover:to-[#4bbf39] text-white">
                Contact Us
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

export default PrivacyPolicyPage