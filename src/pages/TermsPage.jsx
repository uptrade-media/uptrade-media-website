import React from 'react'
import { Link } from 'react-router-dom'
import SEOHead from '../components/SEOHead.jsx'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button.jsx'
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card.jsx'
import { Badge } from '@/components/ui/badge.jsx'
import {
  ArrowLeft,
  FileText,
  ClipboardCheck,
  DollarSign,
  Users,
  Share2,
  RefreshCw,
  Clock,
  ShieldAlert,
  Ban,
  FileCheck,
  Phone,
  Mail,
  MapPin,
  Layout,
  Camera
} from 'lucide-react'

function TermsOfServicePage() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "TermsOfService",
    "name": "Uptrade Media Terms of Service",
    "url": "https://uptrademedia.com/terms",
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
    <div className="min-h-screen bg-white scroll-smooth">
      <SEOHead
        title="Terms of Service | Uptrade Media"
        description="Read the terms that govern your use of Uptrade Media’s website and services, including proposals, payments, timelines, deliverables, warranties, and liability."
        canonicalUrl="https://uptrademedia.com/terms"
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
              <FileText className="w-4 h-4 mr-2" />
              Legal
            </Badge>
            <h1 className="text-4xl lg:text-6xl font-bold mb-6">Terms of Service</h1>
            <p className="text-white/90 text-lg">
              These Terms govern your access to and use of <span className="font-semibold">uptrademedia.com</span> and our services,
              including design, development, branding, photography/videography, and UX/UI work.
            </p>
            <p className="mt-6 text-white/80">
              Last updated: {new Date().toLocaleDateString(undefined, { year: 'numeric', month: 'long', day: 'numeric' })}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Quick summary */}
      <section className="py-14 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-6">

            <a href="#engagements" className="group block focus:outline-none">
              <Card className="shadow-sm hover:shadow-md hover:ring-1 hover:ring-[#4bbf39]/20 transition">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <ClipboardCheck className="w-5 h-5 text-[#4bbf39]" />
                    Engagements
                  </CardTitle>
                  <CardDescription>Work begins after written approval and initial payment (if applicable).</CardDescription>
                </CardHeader>
              </Card>
            </a>

            <a href="#billing" className="group block focus:outline-none">
              <Card className="shadow-sm hover:shadow-md hover:ring-1 hover:ring-[#4bbf39]/20 transition">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <DollarSign className="w-5 h-5 text-[#4bbf39]" />
                    Billing
                  </CardTitle>
                  <CardDescription>Quoted estimates, milestone invoices, and late-fee policy.</CardDescription>
                </CardHeader>
              </Card>
            </a>

            <a href="#limits" className="group block focus:outline-none">
              <Card className="shadow-sm hover:shadow-md hover:ring-1 hover:ring-[#4bbf39]/20 transition">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <ShieldAlert className="w-5 h-5 text-[#4bbf39]" />
                    Limits
                  </CardTitle>
                  <CardDescription>Reasonable warranties; limited liability; no guarantees of ranking or results.</CardDescription>
                </CardHeader>
              </Card>
            </a>

          </div>
        </div>
      </section>

      {/* Terms body */}
      <section className="pb-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          {/* Acceptance */}
          <Card className="shadow-sm">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <FileText className="w-5 h-5 text-[#4bbf39]" />
                1. Acceptance of Terms
              </CardTitle>
            </CardHeader>
            <CardContent className="text-gray-700">
              By accessing our website or engaging our services, you agree to these Terms and our Privacy Policy. If you are entering into these
              Terms on behalf of a company, you represent that you have authority to bind that company.
            </CardContent>
          </Card>

          {/* Services & Proposals (anchor target for Engagements) */}
          <Card id="engagements" className="shadow-sm scroll-mt-28">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Layout className="w-5 h-5 text-[#4bbf39]" />
                2. Services, Proposals & Scope
              </CardTitle>
            </CardHeader>
            <CardContent className="text-gray-700 space-y-3">
              <p>
                We provide professional services including (without limitation) web design/development, branding, UX/UI, SEO-focused implementation,
                commercial photography, video production, and aerial/drone media (FAA-compliant).
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Statements of Work (SOW) / Proposals:</strong> Define deliverables, assumptions, timeline, and pricing.</li>
                <li><strong>Out-of-Scope:</strong> Items not listed in the SOW are out of scope and may require a change order.</li>
                <li><strong>Dependencies:</strong> Timelines depend on your timely feedback, content, and approvals.</li>
              </ul>
            </CardContent>
          </Card>

          {/* Approvals & Revisions */}
          <Card className="shadow-sm">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <ClipboardCheck className="w-5 h-5 text-[#4bbf39]" />
                3. Approvals, Revisions & Change Requests
              </CardTitle>
            </CardHeader>
            <CardContent className="text-gray-700 space-y-3">
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Approval Gates:</strong> Work progresses through defined checkpoints (e.g., strategy → design → build → launch).</li>
                <li><strong>Included Revisions:</strong> Your SOW specifies the number of review rounds; extra revisions may be billed at our hourly rate.</li>
                <li><strong>Change Orders:</strong> Material changes to scope/schedule are documented and may affect fees and timelines.</li>
              </ul>
            </CardContent>
          </Card>

          {/* Client Responsibilities */}
          <Card className="shadow-sm">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Users className="w-5 h-5 text-[#4bbf39]" />
                4. Client Responsibilities
              </CardTitle>
            </CardHeader>
            <CardContent className="text-gray-700 space-y-3">
              <ul className="list-disc pl-6 space-y-2">
                <li>Provide accurate, lawful content, brand assets, and timely feedback/approvals.</li>
                <li>Obtain necessary permissions for third-party content you supply.</li>
                <li>Designate a primary point of contact empowered to make decisions.</li>
              </ul>
            </CardContent>
          </Card>

          {/* Fees & Payments (anchor target for Billing) */}
          <Card id="billing" className="shadow-sm scroll-mt-28">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <DollarSign className="w-5 h-5 text-[#4bbf39]" />
                5. Fees, Deposits & Payments
              </CardTitle>
            </CardHeader>
            <CardContent className="text-gray-700 space-y-3">
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Estimates:</strong> Quotes are based on current scope and are valid for the period stated in your proposal.</li>
                <li><strong>Deposits:</strong> Projects may require an upfront deposit before scheduling or commencement.</li>
                <li><strong>Milestones:</strong> Invoices may be issued at milestones or monthly; payment is due upon receipt unless stated otherwise.</li>
                <li><strong>Late Fees:</strong> Overdue balances may incur a late fee and/or work may pause until payment is received.</li>
                <li><strong>Expenses:</strong> Pre-approved out-of-pocket costs (e.g., fonts, stock, travel, permits) are billed at cost.</li>
              </ul>
            </CardContent>
          </Card>

          {/* Content Ownership & License */}
          <Card className="shadow-sm">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <FileCheck className="w-5 h-5 text-[#4bbf39]" />
                6. Intellectual Property, Licenses & Portfolio
              </CardTitle>
            </CardHeader>
            <CardContent className="text-gray-700 space-y-3">
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Your Materials:</strong> You retain ownership of content/assets you supply. You grant us a non-exclusive license to use them to deliver the project.</li>
                <li><strong>Deliverables:</strong> Upon final payment, you receive a license (or ownership, if specified in the SOW) to use the final deliverables for their intended purpose.</li>
                <li><strong>Tools & Methods:</strong> We retain ownership of underlying tools, libraries, templates, and processes used to create deliverables.</li>
                <li><strong>Portfolio Use:</strong> You grant us the right to display non-confidential work samples (e.g., screenshots, links, select media) in our portfolio and marketing. If confidentiality is required, please specify in writing before project start.</li>
              </ul>
            </CardContent>
          </Card>

          {/* Third-Party Services */}
          <Card className="shadow-sm">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Share2 className="w-5 h-5 text-[#4bbf39]" />
                7. Third-Party Platforms & Services
              </CardTitle>
            </CardHeader>
            <CardContent className="text-gray-700 space-y-3">
              <p>
                Projects may rely on third-party services (e.g., hosting, domains, CMS, analytics, email/CRM, payment processors, Wistia video,
                Netlify Forms, or FAA authorization for drone operations). Your use of those services is subject to their respective terms and
                policies. We are not responsible for third-party outages, changes, or pricing.
              </p>
            </CardContent>
          </Card>

          {/* Schedules */}
          <Card className="shadow-sm">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Clock className="w-5 h-5 text-[#4bbf39]" />
                8. Scheduling, Timelines & Delays
              </CardTitle>
            </CardHeader>
            <CardContent className="text-gray-700 space-y-3">
              <ul className="list-disc pl-6 space-y-2">
                <li>Timelines are estimates and depend on your responsiveness and third-party constraints.</li>
                <li>Weather, location, or regulatory conditions may affect media and drone shoots; rescheduling may be required for safety/compliance.</li>
                <li>Client delays beyond a reasonable period may incur standby fees or require project re-activation fees.</li>
              </ul>
            </CardContent>
          </Card>

          {/* Warranties & Disclaimers (anchor target for Limits) */}
          <Card id="limits" className="shadow-sm scroll-mt-28">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <ShieldAlert className="w-5 h-5 text-[#4bbf39]" />
                9. Warranties & Disclaimers
              </CardTitle>
            </CardHeader>
            <CardContent className="text-gray-700 space-y-3">
              <ul className="list-disc pl-6 space-y-2">
                <li>We warrant that services will be performed with reasonable skill and care consistent with industry standards.</li>
                <li>No guarantee is made regarding specific business outcomes (e.g., rankings, traffic, conversions, sales) or third-party approvals.</li>
                <li>EXCEPT AS EXPRESSLY STATED, SERVICES ARE PROVIDED “AS IS” AND WE DISCLAIM ALL OTHER WARRANTIES, EXPRESS OR IMPLIED.</li>
              </ul>
            </CardContent>
          </Card>

          {/* Limitation of Liability */}
          <Card className="shadow-sm">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Ban className="w-5 h-5 text-[#4bbf39]" />
                10. Limitation of Liability
              </CardTitle>
            </CardHeader>
            <CardContent className="text-gray-700">
              To the maximum extent permitted by law, Uptrade Media shall not be liable for any indirect, incidental, special, consequential, or
              punitive damages, or any loss of profits, revenue, data, or business opportunities. Our total liability for any claim arising out of or
              relating to these Terms or the services shall not exceed the amount you paid for the specific services giving rise to the claim.
            </CardContent>
          </Card>

          {/* Indemnification */}
          <Card className="shadow-sm">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <ShieldAlert className="w-5 h-5 text-[#4bbf39]" />
                11. Indemnification
              </CardTitle>
            </CardHeader>
            <CardContent className="text-gray-700">
              You agree to defend, indemnify, and hold harmless Uptrade Media and its officers, employees, and contractors from and against any
              claims, damages, liabilities, costs, and expenses arising from (a) content or assets you provide, (b) your misuse of the services, or
              (c) your violation of these Terms or applicable law.
            </CardContent>
          </Card>

          {/* Termination */}
          <Card className="shadow-sm">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <RefreshCw className="w-5 h-5 text-[#4bbf39]" />
                12. Suspension & Termination
              </CardTitle>
            </CardHeader>
            <CardContent className="text-gray-700 space-y-3">
              <ul className="list-disc pl-6 space-y-2">
                <li>Either party may terminate a project for material breach if not cured within a reasonable period after written notice.</li>
                <li>You are responsible for fees for work performed and approved expenses through the termination date.</li>
                <li>Upon termination, we may deliver in-progress work & assets as-is; any additional transition support is billable.</li>
              </ul>
            </CardContent>
          </Card>

          {/* Refunds / Cancellations */}
          <Card className="shadow-sm">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <DollarSign className="w-5 h-5 text-[#4bbf39]" />
                13. Cancellations & Refunds
              </CardTitle>
            </CardHeader>
            <CardContent className="text-gray-700">
              Deposits secure scheduling and are generally non-refundable once work has begun or resources have been reserved. If you cancel, we may
              bill for time/expenses incurred to date and release any remaining deposit balance at our discretion based on the SOW terms.
            </CardContent>
          </Card>

          {/* Media & On-Site Work */}
          <Card className="shadow-sm">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Camera className="w-5 h-5 text-[#4bbf39]" />
                14. On-Site Media, Safety & Compliance
              </CardTitle>
            </CardHeader>
            <CardContent className="text-gray-700 space-y-3">
              <ul className="list-disc pl-6 space-y-2">
                <li>We follow reasonable safety practices and applicable regulations (including FAA rules for drone operations).</li>
                <li>Client must obtain location access, permits, and releases when required.</li>
                <li>Weather or safety concerns may cause rescheduling; additional travel or crew time may be billable if applicable.</li>
              </ul>
            </CardContent>
          </Card>

          {/* Governing Law */}
          <Card className="shadow-sm">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <FileText className="w-5 h-5 text-[#4bbf39]" />
                15. Governing Law & Dispute Resolution
              </CardTitle>
            </CardHeader>
            <CardContent className="text-gray-700">
              These Terms are governed by the laws of the State of Kentucky, without regard to conflict-of-law principles. Any disputes will be
              brought exclusively in the state or federal courts located in Kentucky, and the parties consent to personal jurisdiction there.
            </CardContent>
          </Card>

          {/* Changes to Terms */}
          <Card className="shadow-sm">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <RefreshCw className="w-5 h-5 text-[#4bbf39]" />
                16. Changes to These Terms
              </CardTitle>
            </CardHeader>
            <CardContent className="text-gray-700">
              We may update these Terms from time to time. The “Last updated” date above indicates the latest revision. Continued use of our site or
              services after changes become effective constitutes acceptance of the revised Terms.
            </CardContent>
          </Card>

          {/* Contact */}
          <Card className="shadow-sm">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Phone className="w-5 h-5 text-[#4bbf39]" />
                17. Contact Us
              </CardTitle>
            </CardHeader>
            <CardContent className="text-gray-700 space-y-2">
              <p>Questions about these Terms?</p>
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="flex items-start gap-3">
                  <Mail className="w-5 h-5 text-[#4bbf39] mt-0.5" />
                  <div>
                    <div className="font-medium">Email</div>
                    <a href="mailto:hello@uptrademedia.com" className="text-[#4bbf39] underline">hello@uptrademedia.com</a>
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
                This page is for general information and does not constitute legal advice. For legal guidance tailored to your business, please consult your attorney.
              </p>
            </CardContent>
          </Card>

          {/* CTA */}
          <div className="text-center pt-4">
            <Link to="/contact">
              <Button size="lg" className="bg-gradient-to-r from-[#4bbf39] to-[#39bfb0] hover:from-[#39bfb0] hover:to-[#4bbf39] text-white">
                Start a Project
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

export default TermsOfServicePage
