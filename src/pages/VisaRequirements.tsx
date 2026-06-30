import React from 'react';
import { PageHeader } from '../components/layout/PageHeader';
import { motion } from 'framer-motion';
import {
  CheckCircle2Icon,
  FileTextIcon,
  ClockIcon,
  CreditCardIcon,
  AlertCircleIcon } from
'lucide-react';
import { Link } from 'react-router-dom';
const steps = [
{
  icon: FileTextIcon,
  title: 'Apply for ETA',
  desc: 'Complete the online Electronic Travel Authorization form before you travel. We can assist you with the process.'
},
{
  icon: CreditCardIcon,
  title: 'Pay the Fee',
  desc: 'Tourist ETA fees vary by region of origin. Payment is made securely online during the application.'
},
{
  icon: ClockIcon,
  title: 'Receive Approval',
  desc: 'Most approvals arrive within 24–72 hours. Print or save a digital copy for immigration on arrival.'
},
{
  icon: CheckCircle2Icon,
  title: 'Arrive & Enjoy',
  desc: 'Present your ETA and passport at Bandaranaike International Airport. Your guide will be waiting for you.'
}];

const requirements = [
'Passport valid for at least 6 months from arrival',
'Approved Electronic Travel Authorization (ETA)',
'Proof of onward or return travel',
'Confirmed accommodation details (we provide these)',
'Sufficient funds for your stay'];

export function VisaRequirements() {
  return (
    <div className="flex flex-col w-full bg-light">
      <PageHeader
        title="Visa & Travel Requirements"
        subtitle="A simple guide to entering Sri Lanka smoothly and stress-free."
        image="/images/tours/colombo-city-tour/hero.jpg"
        breadcrumbs={[
        {
          label: 'Visa & Requirements'
        }]
        } />
      

      <section className="py-16 md:py-20 bg-watermark">
        <div className="container mx-auto px-4 md:px-8 max-w-5xl">
          <div className="text-center mb-14 max-w-2xl mx-auto">
            <h2 className="font-heading text-3xl text-primary font-semibold mb-4">
              Entry in Four Simple Steps
            </h2>
            <p className="text-dark/70">
              Most travelers require an ETA. The process is straightforward, and
              our team is happy to guide you through every step.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
            {steps.map((step, i) =>
            <motion.div
              key={i}
              initial={{
                opacity: 0,
                y: 20
              }}
              whileInView={{
                opacity: 1,
                y: 0
              }}
              viewport={{
                once: true
              }}
              transition={{
                duration: 0.5,
                delay: i * 0.1
              }}
              className="bg-white rounded-2xl p-6 shadow-card border border-gray-100 text-center relative">
              
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-7 h-7 rounded-full bg-accent text-white text-sm font-semibold flex items-center justify-center">
                  {i + 1}
                </div>
                <div className="w-14 h-14 mx-auto bg-secondary/10 text-secondary rounded-full flex items-center justify-center mb-4 mt-2">
                  <step.icon className="w-7 h-7" />
                </div>
                <h3 className="font-heading text-lg font-semibold text-primary mb-2">
                  {step.title}
                </h3>
                <p className="text-dark/70 text-sm leading-relaxed">
                  {step.desc}
                </p>
              </motion.div>
            )}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="bg-white rounded-2xl p-8 shadow-card border border-gray-100">
              <h3 className="font-heading text-2xl text-primary font-semibold mb-6">
                What You'll Need
              </h3>
              <ul className="space-y-4">
                {requirements.map((req, i) =>
                <li key={i} className="flex items-start gap-3 text-dark/80">
                    <CheckCircle2Icon className="w-5 h-5 text-success shrink-0 mt-0.5" />
                    <span>{req}</span>
                  </li>
                )}
              </ul>
            </div>

            <div className="bg-primary rounded-2xl p-8 text-white flex flex-col">
              <div className="flex items-center gap-3 mb-4">
                <AlertCircleIcon className="w-6 h-6 text-accent" />
                <h3 className="font-heading text-2xl font-semibold">
                  Good to Know
                </h3>
              </div>
              <p className="text-white/80 leading-relaxed mb-4">
                Visa policies can change and requirements differ by nationality.
                We always confirm the latest entry rules for your specific
                passport before you travel.
              </p>
              <p className="text-white/80 leading-relaxed mb-8">
                When you book with Ceylon Escapes, our concierge team will guide
                you through your ETA application and ensure every document is in
                order.
              </p>
              <Link
                to="/contact"
                className="mt-auto inline-block text-center px-8 py-3.5 bg-accent text-white rounded-full font-semibold hover:bg-white hover:text-primary transition-colors">
                
                Ask Our Visa Concierge
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>);

}