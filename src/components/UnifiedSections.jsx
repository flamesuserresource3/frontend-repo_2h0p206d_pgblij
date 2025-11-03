import React, { useState } from 'react';
import { Phone, Calendar, Repeat, ShieldCheck, FileText, LineChart, Star } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const services = [
  {
    icon: Phone,
    title: 'AI Receptionist & Front Desk Automation',
    desc: '24/7 call handling, intake, and intelligent routing so your team focuses on care.'
  },
  {
    icon: Calendar,
    title: 'Appointment Booking, Rescheduling, Follow-ups',
    desc: 'Frictionless scheduling and reminders across phone, SMS, and email.'
  },
  {
    icon: Repeat,
    title: 'Recall Calls & Reminder Systems',
    desc: 'Automated recall sequences that increase show-up rates and reduce no-shows.'
  },
  {
    icon: ShieldCheck,
    title: 'Insurance Verification & Payment Processing',
    desc: 'AI-assisted eligibility checks and streamlined billing workflows.'
  },
  {
    icon: FileText,
    title: 'Lead Generation & Re-Engagement',
    desc: 'Convert new patients and re-activate dormant ones with compliant outreach.'
  },
  {
    icon: LineChart,
    title: 'Analytics Dashboard & Reports',
    desc: 'Track KPIs, ROI, and operational efficiency in a single view.'
  },
];

const caseStudies = [
  {
    id: 'park-dental',
    client: 'Park Dental Group',
    overview: 'Multi-location clinic modernizing patient intake and reminders.',
    results: '31% fewer no-shows, +22% booking rate, 120 hrs/month saved.',
  },
  {
    id: 'smile-labs',
    client: 'Smile Labs',
    overview: 'Scaled front desk with AI voice agent while staying compliant.',
    results: '2.1x response speed, +18% reactivation of dormant patients.',
  },
  {
    id: 'riverfront',
    client: 'Riverfront Family Dental',
    overview: 'Automated insurance eligibility and post-visit follow-ups.',
    results: 'Claims errors down 28%, collections cycle -17% time.',
  },
];

const faqs = [
  {
    q: 'How long does implementation take?',
    a: 'Most clinics go live in 10–14 days, including integration, testing, and staff enablement.'
  },
  {
    q: 'Is the AI compliant and secure?',
    a: 'Yes. Data is encrypted in transit and at rest. We follow strict access controls and compliance best practices.'
  },
  {
    q: 'How do you price the platform?',
    a: 'Simple monthly pricing based on clinic size and usage. Custom plans available for multi-location groups.'
  },
  {
    q: 'Will this replace our front desk?',
    a: 'No. It augments your team by automating repetitive tasks so staff can focus on high-value patient interactions.'
  },
  {
    q: 'What kind of ROI can we expect?',
    a: 'Typical clinics see 20–40% fewer no-shows, faster response times, and material admin time savings.'
  },
];

const UnifiedSections = () => {
  const [openIdx, setOpenIdx] = useState<number | null>(null);

  return (
    <div className="bg-white">
      {/* About */}
      <section id="about" className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-12 gap-10 items-center">
          <div className="md:col-span-7">
            <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight">Built for high-performing dental teams</h2>
            <p className="mt-4 text-black/80">
              Velodent deploys a compliant AI voice and workflow layer across your patient journey — from first contact to post-visit follow-up —
              reducing administrative load while improving patient experience.
            </p>
          </div>
          <div className="md:col-span-5">
            <div className="rounded-2xl border border-black/10 p-6">
              <ul className="space-y-3 text-sm">
                <li>• Seamless with your existing tools</li>
                <li>• 24/7 call handling and scheduling</li>
                <li>• Human-in-the-loop review where it matters</li>
                <li>• Clear analytics and continuous optimization</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-16">
        <h3 className="text-center text-2xl sm:text-3xl font-semibold">Services</h3>
        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map(({ icon: Icon, title, desc }) => (
            <div
              key={title}
              className="group rounded-2xl border border-black/10 p-6 hover:shadow-md transition-shadow bg-white"
            >
              <div className="flex items-center gap-3">
                <div className="rounded-full border border-black/10 p-2">
                  <Icon className="h-5 w-5" />
                </div>
                <h4 className="font-medium">{title}</h4>
              </div>
              <p className="mt-3 text-sm text-black/80">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Case Studies */}
      <section id="case-studies" className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="flex items-end justify-between">
          <h3 className="text-2xl sm:text-3xl font-semibold">Case Studies</h3>
          <a href="#case-studies" className="text-sm underline">View all</a>
        </div>
        <div className="mt-8 grid md:grid-cols-3 gap-6">
          {caseStudies.map((c) => (
            <div key={c.id} className="rounded-2xl border border-black/10 p-6 bg-white hover:shadow-md transition-shadow">
              <div className="flex items-center gap-2">
                <div className="h-8 w-8 rounded-full bg-black/5 flex items-center justify-center">
                  <Star className="h-4 w-4" />
                </div>
                <h4 className="font-medium">{c.client}</h4>
              </div>
              <p className="mt-3 text-sm text-black/80">{c.overview}</p>
              <p className="mt-2 text-sm font-medium">{c.results}</p>
              <div className="mt-4">
                <a
                  href={`/case-studies/${c.id}`}
                  className="inline-flex items-center rounded-full border border-black px-4 py-2 text-sm hover:bg-black hover:text-white transition-colors"
                >
                  Read More
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-16">
        <h3 className="text-center text-2xl sm:text-3xl font-semibold">What Our Clients Say</h3>
        <div className="mt-10 grid md:grid-cols-3 gap-6">
          {[1, 2, 3].map((i) => (
            <div key={i} className="rounded-2xl border border-black/10 p-6 bg-white">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-full bg-black/5" />
                  <div>
                    <p className="font-medium">{i === 1 ? 'Dr. Patel' : i === 2 ? 'Dr. Nguyen' : 'Dr. Lopez'}</p>
                    <p className="text-xs text-black/60">{i === 1 ? 'Park Dental' : i === 2 ? 'Smile Labs' : 'Riverfront Dental'}</p>
                  </div>
                </div>
                <div className="flex gap-1 text-black">
                  {Array.from({ length: 5 }).map((_, idx) => (
                    <Star key={idx} className="h-4 w-4 fill-black" />
                  ))}
                </div>
              </div>
              <p className="mt-4 text-sm text-black/80">
                {i === 1 && 'We cut no-shows by nearly a third and freed up our front desk instantly.'}
                {i === 2 && 'Our phones are answered 24/7 and bookings increased without adding headcount.'}
                {i === 3 && 'Insurance verification is smoother and our collections cycle is faster.'}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-16">
        <h3 className="text-center text-2xl sm:text-3xl font-semibold">Frequently Asked Questions</h3>
        <div className="mt-8 divide-y divide-black/10 rounded-2xl border border-black/10 overflow-hidden">
          {faqs.map((item, idx) => (
            <div key={item.q}>
              <button
                className="w-full text-left px-6 py-5 flex items-center justify-between hover:bg-black/5 transition-colors"
                onClick={() => setOpenIdx(openIdx === idx ? null : idx)}
              >
                <span className="font-medium">{item.q}</span>
                <span className="text-xl">{openIdx === idx ? '−' : '+'}</span>
              </button>
              <AnimatePresence initial={false}>
                {openIdx === idx && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.25 }}
                  >
                    <div className="px-6 pb-5 text-sm text-black/80">{item.a}</div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </section>

      {/* Contact / Book Now */}
      <section id="contact" className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="rounded-2xl border border-black/10 p-8 text-center bg-white">
          <h3 className="text-xl sm:text-2xl font-semibold">Ready to see Velodent in action?</h3>
          <p className="mt-2 text-black/80">Book a quick discovery call and we’ll tailor a plan for your clinic.</p>
          <div className="mt-6">
            <a
              href="https://cal.com/velodent-ogbkfv/20min"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center rounded-full border border-black px-6 py-3 text-sm font-medium hover:bg-black hover:text-white transition-colors"
            >
              Book Now
            </a>
          </div>
          <p className="mt-4 text-sm">Or email us at <a href="mailto:Velodent.ia@gmail.com" className="underline">Velodent.ia@gmail.com</a></p>
        </div>
      </section>
    </div>
  );
};

export default UnifiedSections;
