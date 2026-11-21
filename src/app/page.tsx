import Image from "next/image";
import { Header } from "@/components/Header";
import { Reveal } from "@/components/Reveal";
import {
  ArrowIcon,
  CalendarIcon,
  CheckIcon,
  ClockIcon,
  DoctorIcon,
  EquipmentIcon,
  HeartCareIcon,
  HospitalIcon,
  ImplantIcon,
  MailIcon,
  OrthoIcon,
  PhoneIcon,
  PinIcon,
  ShieldIcon,
  SparkleToothIcon,
  StarIcon,
  ToothIcon,
} from "@/components/Icons";

const services = [
  {
    title: "General Dentistry",
    description:
      "Routine checkups, cleanings, fillings and more for lasting oral health.",
    icon: ToothIcon,
  },
  {
    title: "Cosmetic Dentistry",
    description:
      "From whitening to veneers, we help transform the smile you show the world.",
    icon: SparkleToothIcon,
  },
  {
    title: "Dental Implants",
    description:
      "Durable, natural-looking solutions for missing teeth that feel like your own.",
    icon: ImplantIcon,
  },
  {
    title: "Orthodontics",
    description:
      "Braces and clear aligners to straighten teeth and improve your bite.",
    icon: OrthoIcon,
  },
  {
    title: "Preventive Care",
    description:
      "Protective treatments designed to keep your smile bright for years ahead.",
    icon: ShieldIcon,
  },
  {
    title: "Emergency Dentistry",
    description:
      "Prompt, professional care when unexpected dental pain or injury strikes.",
    icon: ClockIcon,
  },
];

const heroFeatures = [
  { title: "Trusted clinic", icon: HospitalIcon },
  { title: "Specialized doctors", icon: DoctorIcon },
  { title: "Modern equipment", icon: EquipmentIcon },
  { title: "Healthy solutions", icon: HeartCareIcon },
];

const aboutPoints = [
  "Experienced and caring dental team",
  "State-of-the-art technology",
  "Comprehensive range of dental services",
  "Flexible and convenient appointment times",
];

const whyItems = [
  {
    title: "Patient-centered care",
    description: "Every visit is tailored around your comfort and goals.",
    icon: HeartCareIcon,
  },
  {
    title: "Cutting-edge technology",
    description: "Advanced tools for precise, gentle treatment.",
    icon: EquipmentIcon,
  },
  {
    title: "Skilled professionals",
    description: "Experienced dentists focused on lasting results.",
    icon: DoctorIcon,
  },
  {
    title: "Flexible scheduling",
    description: "Convenient appointment times that fit your life.",
    icon: CalendarIcon,
  },
  {
    title: "Trusted care",
    description: "Relationships built on honesty and happy smiles.",
    icon: ShieldIcon,
  },
];

const testimonials = [
  {
    quote:
      "The team is amazing! I felt comfortable from the moment I walked in. My teeth have never felt better.",
    name: "Sarah J.",
    place: "New York, NY",
  },
  {
    quote:
      "Excellent care and professional staff. They explained everything clearly and made my visit stress-free.",
    name: "Michael R.",
    place: "Boston, MA",
  },
  {
    quote:
      "I love my new smile! The cosmetic work was simple, careful, and completely painless.",
    name: "Jessica L.",
    place: "Manhattan, NY",
  },
];

export default function Home() {
  return (
    <>
      <Header />
      <main>
        {/* Hero */}
        <section id="home" className="hero-shell overflow-hidden">
          <div className="mx-auto grid max-w-6xl items-center gap-10 px-5 pt-10 pb-8 md:px-8 md:pt-16 md:pb-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-14">
            <div>
              <p className="animate-fade-up text-xs font-semibold tracking-[0.22em] text-teal uppercase">
                Welcome to Bright Smiles
              </p>
              <h1 className="animate-fade-up delay-1 mt-4 max-w-xl font-display text-[2.35rem] leading-[1.08] font-semibold text-navy md:text-5xl lg:text-[3.35rem]">
                Exceptional Dental Care for the Whole Family
              </h1>
              <p className="animate-fade-up delay-2 mt-5 max-w-lg text-base leading-relaxed text-muted md:text-[1.05rem]">
                We combine advanced technology with gentle, patient-centered care
                to give you the healthier, brighter smile you deserve.
              </p>
              <div className="animate-fade-up delay-3 mt-8 flex flex-col gap-3 sm:flex-row">
                <a
                  href="#contact"
                  className="inline-flex items-center justify-center gap-2 rounded-md bg-teal px-5 py-3.5 text-sm font-semibold text-white transition hover:bg-teal-dark"
                >
                  Book appointment
                  <ArrowIcon className="size-4" />
                </a>
                <a
                  href="#services"
                  className="inline-flex items-center justify-center gap-2 rounded-md border border-line bg-surface px-5 py-3.5 text-sm font-semibold text-navy transition hover:border-teal/40 hover:text-teal"
                >
                  Explore services
                  <ArrowIcon className="size-4" />
                </a>
              </div>
            </div>

            <div className="animate-soft-scale relative">
              <div className="hero-media overflow-hidden rounded-[1.4rem] shadow-[0_24px_60px_rgba(6,37,58,0.16)] md:rounded-[1.75rem]">
                <Image
                  src="/images/hero.jpg"
                  alt="Patient smiling during a gentle dental checkup"
                  width={1600}
                  height={1200}
                  priority
                  className="aspect-4/3 h-full w-full object-cover"
                />
              </div>
            </div>
          </div>

          <div className="border-y border-line/80 bg-surface/80 backdrop-blur-sm">
            <div className="mx-auto grid max-w-6xl grid-cols-2 gap-px bg-line/60 md:grid-cols-4">
              {heroFeatures.map((item, index) => {
                const Icon = item.icon;
                return (
                  <div
                    key={item.title}
                    className={`animate-fade-up flex items-center gap-3 bg-surface px-5 py-5 md:px-7 delay-${index + 1}`}
                  >
                    <span className="flex size-10 shrink-0 items-center justify-center rounded-full bg-ice text-teal">
                      <Icon className="size-5" />
                    </span>
                    <p className="text-sm font-medium text-navy">{item.title}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Services */}
        <section id="services" className="bg-surface py-16 md:py-24">
          <div className="mx-auto max-w-6xl px-5 md:px-8">
            <Reveal>
              <div className="grid gap-4 md:grid-cols-[0.9fr_1.1fr] md:items-end md:gap-10">
                <div>
                  <p className="text-xs font-semibold tracking-[0.2em] text-teal uppercase">
                    Our services
                  </p>
                  <h2 className="mt-3 max-w-md font-display text-3xl leading-tight font-semibold text-navy md:text-4xl">
                    Comprehensive care for a healthy smile.
                  </h2>
                </div>
                <p className="max-w-xl text-muted md:justify-self-end md:text-right">
                  From preventive visits to restorative and cosmetic treatments,
                  Bright Smiles offers complete family dentistry under one roof.
                </p>
              </div>
            </Reveal>

            <div className="mt-12 grid gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
              {services.map((service, index) => {
                const Icon = service.icon;
                return (
                  <Reveal key={service.title} delay={index * 60}>
                    <article className="group h-full">
                      <span className="flex size-12 items-center justify-center rounded-full bg-ice text-teal transition group-hover:bg-teal group-hover:text-white">
                        <Icon className="size-6" />
                      </span>
                      <h3 className="mt-5 font-display text-xl font-semibold text-navy">
                        {service.title}
                      </h3>
                      <p className="mt-3 text-sm leading-relaxed text-muted">
                        {service.description}
                      </p>
                      <a
                        href="#contact"
                        className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-teal transition group-hover:gap-2.5"
                      >
                        Learn more
                        <ArrowIcon className="size-4" />
                      </a>
                    </article>
                  </Reveal>
                );
              })}
            </div>
          </div>
        </section>

        {/* About */}
        <section id="about" className="bg-ice-soft py-16 md:py-24">
          <div className="mx-auto grid max-w-6xl items-center gap-10 px-5 md:grid-cols-2 md:gap-14 md:px-8">
            <Reveal>
              <div className="overflow-hidden rounded-3xl shadow-[0_20px_50px_rgba(6,37,58,0.12)]">
                <Image
                  src="/images/team.jpg"
                  alt="Bright Smiles dental team smiling in the clinic"
                  width={1400}
                  height={936}
                  className="aspect-5/4 w-full object-cover"
                />
              </div>
            </Reveal>

            <Reveal delay={120}>
              <div>
                <p className="text-xs font-semibold tracking-[0.2em] text-teal uppercase">
                  About us
                </p>
                <h2 className="mt-3 font-display text-3xl leading-tight font-semibold text-navy md:text-4xl">
                  Your smile is our top priority.
                </h2>
                <p className="mt-5 text-muted leading-relaxed">
                  At Bright Smiles Dental Care, we provide personalized,
                  high-quality treatment in a calm, friendly environment —
                  designed for every member of your family.
                </p>
                <ul className="mt-7 space-y-3.5">
                  {aboutPoints.map((point) => (
                    <li key={point} className="flex items-start gap-3 text-sm text-navy">
                      <CheckIcon className="mt-0.5 size-5 shrink-0 text-teal" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
                <a
                  href="#contact"
                  className="mt-8 inline-flex items-center gap-2 rounded-md border border-teal/30 bg-surface px-5 py-3 text-sm font-semibold text-teal transition hover:border-teal hover:bg-teal hover:text-white"
                >
                  More about us
                  <ArrowIcon className="size-4" />
                </a>
              </div>
            </Reveal>
          </div>
        </section>

        {/* Why choose us */}
        <section className="bg-ice py-16 md:py-20">
          <div className="mx-auto max-w-6xl px-5 md:px-8">
            <Reveal>
              <p className="text-xs font-semibold tracking-[0.2em] text-teal uppercase">
                Why choose us
              </p>
              <h2 className="mt-3 max-w-xl font-display text-3xl leading-tight font-semibold text-navy md:text-4xl">
                Thoughtful care. Every step of the way.
              </h2>
            </Reveal>

            <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-5">
              {whyItems.map((item, index) => {
                const Icon = item.icon;
                return (
                  <Reveal key={item.title} delay={index * 70}>
                    <div className="h-full">
                      <span className="flex size-11 items-center justify-center rounded-full bg-surface text-teal shadow-sm">
                        <Icon className="size-5" />
                      </span>
                      <h3 className="mt-4 text-base font-semibold text-navy">
                        {item.title}
                      </h3>
                      <p className="mt-2 text-sm leading-relaxed text-muted">
                        {item.description}
                      </p>
                    </div>
                  </Reveal>
                );
              })}
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section id="reviews" className="bg-surface py-16 md:py-24">
          <div className="mx-auto max-w-6xl px-5 md:px-8">
            <Reveal>
              <p className="text-xs font-semibold tracking-[0.2em] text-teal uppercase">
                Happy clients
              </p>
              <h2 className="mt-3 max-w-xl font-display text-3xl leading-tight font-semibold text-navy md:text-4xl">
                Trusted by hundreds of happy smiles.
              </h2>
            </Reveal>

            <div className="mt-12 grid gap-5 md:grid-cols-3">
              {testimonials.map((item, index) => (
                <Reveal key={item.name} delay={index * 90}>
                  <figure className="flex h-full flex-col rounded-2xl bg-ice-soft p-6 md:p-7">
                    <div className="flex gap-1 text-star" aria-label="5 star rating">
                      {Array.from({ length: 5 }).map((_, star) => (
                        <StarIcon key={star} className="size-4" />
                      ))}
                    </div>
                    <blockquote className="mt-4 flex-1 text-[0.95rem] leading-relaxed text-foreground/85 italic">
                      “{item.quote}”
                    </blockquote>
                    <figcaption className="mt-6">
                      <p className="font-semibold text-navy">{item.name}</p>
                      <p className="text-sm text-muted">{item.place}</p>
                    </figcaption>
                  </figure>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section id="contact" className="bg-teal">
          <div className="mx-auto flex max-w-6xl flex-col gap-8 px-5 py-14 md:flex-row md:items-center md:justify-between md:px-8 md:py-16">
            <Reveal>
              <div className="max-w-xl">
                <h2 className="font-display text-3xl leading-tight font-semibold text-white md:text-4xl">
                  Ready for a healthier smile?
                </h2>
                <p className="mt-3 text-white/85">
                  Book a visit today and take the next step toward lasting oral
                  health with Bright Smiles.
                </p>
                <a
                  href="tel:+11234567890"
                  className="mt-7 inline-flex items-center gap-2 rounded-md bg-surface px-5 py-3.5 text-sm font-semibold text-teal transition hover:bg-ice"
                >
                  Book appointment
                  <ArrowIcon className="size-4" />
                </a>
              </div>
            </Reveal>

            <Reveal delay={120}>
              <div className="space-y-3 text-white md:text-right">
                <a
                  href="tel:+11234567890"
                  className="flex items-center gap-3 md:justify-end"
                >
                  <PhoneIcon className="size-5 opacity-90" />
                  <span className="text-lg font-medium">(123) 456-7890</span>
                </a>
                <p className="flex items-center gap-3 text-white/85 md:justify-end">
                  <PinIcon className="size-5 opacity-90" />
                  <span>1234 Dental Way, Suite 100</span>
                </p>
                <a
                  href="mailto:info@brightsmilesdental.com"
                  className="flex items-center gap-3 text-white/85 md:justify-end"
                >
                  <MailIcon className="size-5 opacity-90" />
                  <span>info@brightsmilesdental.com</span>
                </a>
              </div>
            </Reveal>
          </div>
        </section>
      </main>

      <footer className="bg-navy-deep text-white">
        <div className="mx-auto grid max-w-6xl gap-10 px-5 py-14 md:grid-cols-2 md:px-8 lg:grid-cols-4">
          <div>
            <div className="flex items-center gap-2.5">
              <span className="flex size-10 items-center justify-center rounded-full bg-white/10 text-white">
                <ToothIcon className="size-5" />
              </span>
              <div>
                <p className="font-display text-sm font-semibold tracking-[0.08em] uppercase">
                  Bright Smiles
                </p>
                <p className="text-[10px] tracking-[0.2em] text-white/65 uppercase">
                  Dental Care
                </p>
              </div>
            </div>
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-white/70">
              High-quality dental care for the whole family in a comfortable,
              friendly environment.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold tracking-wide text-white">
              Quick links
            </h3>
            <ul className="mt-4 space-y-2.5 text-sm text-white/70">
              {["Home", "About us", "Services", "Reviews", "Contact"].map((label) => (
                <li key={label}>
                  <a href={`#${label === "Home" ? "home" : label === "About us" ? "about" : label === "Reviews" ? "reviews" : label.toLowerCase()}`} className="transition hover:text-white">
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold tracking-wide text-white">
              Our services
            </h3>
            <ul className="mt-4 space-y-2.5 text-sm text-white/70">
              {services.map((service) => (
                <li key={service.title}>
                  <a href="#services" className="transition hover:text-white">
                    {service.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold tracking-wide text-white">
              Contact us
            </h3>
            <ul className="mt-4 space-y-3 text-sm text-white/70">
              <li className="flex gap-3">
                <PinIcon className="mt-0.5 size-4 shrink-0" />
                1234 Dental Way, Suite 100
              </li>
              <li className="flex gap-3">
                <PhoneIcon className="mt-0.5 size-4 shrink-0" />
                (123) 456-7890
              </li>
              <li className="flex gap-3">
                <MailIcon className="mt-0.5 size-4 shrink-0" />
                info@brightsmilesdental.com
              </li>
              <li className="flex gap-3">
                <ClockIcon className="mt-0.5 size-4 shrink-0" />
                Mon–Fri 8AM–5PM · Sat 9AM–2PM
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10">
          <div className="mx-auto flex max-w-6xl flex-col gap-3 px-5 py-5 text-xs text-white/55 md:flex-row md:items-center md:justify-between md:px-8">
            <p>© 2026 Bright Smiles Dental Care. All rights reserved.</p>
            <div className="flex gap-5">
              <a href="#contact" className="transition hover:text-white">
                Privacy Policy
              </a>
              <a href="#contact" className="transition hover:text-white">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
