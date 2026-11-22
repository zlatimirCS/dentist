import Image from "next/image";
import { Header } from "@/components/Header";
import { HeroSlider } from "@/components/HeroSlider";
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
    title: "Opšta stomatologija",
    description:
      "Redovni pregledi, čišćenje zuba, plombe i druge usluge za dugotrajno oralno zdravlje.",
    icon: ToothIcon,
  },
  {
    title: "Estetska stomatologija",
    description:
      "Od beljenja do keramičkih faseta — pomažemo vam da osvojite osmeh koji želite da pokažete svetu.",
    icon: SparkleToothIcon,
  },
  {
    title: "Dentalni implanti",
    description:
      "Trajna i prirodno izgledajuća rešenja za nedostajuće zube, koja se osećaju kao vaši.",
    icon: ImplantIcon,
  },
  {
    title: "Ortodoncija",
    description:
      "Fiksne proteze i providne alinjere za ravnije zube i bolji zagrižaj.",
    icon: OrthoIcon,
  },
  {
    title: "Preventivna nega",
    description:
      "Zaštitni tretmani koji pomažu da vam osmeh ostane zdrav i sjajan godinama unapred.",
    icon: ShieldIcon,
  },
  {
    title: "Hitna stomatološka pomoć",
    description:
      "Brza i stručna pomoć kada se jave neočekivani bolovi ili povrede zuba.",
    icon: ClockIcon,
  },
];

const heroFeatures = [
  { title: "Pouzdana ordinacija", icon: HospitalIcon },
  { title: "Specijalizovani lekari", icon: DoctorIcon },
  { title: "Moderna oprema", icon: EquipmentIcon },
  { title: "Zdrava rešenja", icon: HeartCareIcon },
];

const aboutPoints = [
  "Iskusni i pažljivi stomatološki tim",
  "Najsavremenija tehnologija",
  "Širok spektar stomatoloških usluga",
  "Fleksibilni i pogodni termini",
];

const whyItems = [
  {
    title: "Nega usmerena na pacijenta",
    description: "Svaka poseta je prilagođena vašoj udobnosti i ciljevima.",
    icon: HeartCareIcon,
  },
  {
    title: "Savremena tehnologija",
    description: "Napredni instrumenti za precizan i nežan tretman.",
    icon: EquipmentIcon,
  },
  {
    title: "Stručni stomatolozi",
    description: "Iskusni lekari usmereni na dugoročne rezultate.",
    icon: DoctorIcon,
  },
  {
    title: "Fleksibilno zakazivanje",
    description: "Termini koji se uklapaju u vaš ritam života.",
    icon: CalendarIcon,
  },
];

const testimonials = [
  {
    quote:
      "Tim je sjajan! Od prvog trenutka sam se osećala opušteno. Zubi mi nikada nisu bili u boljem stanju.",
    name: "Sarah J.",
    place: "New York, NY",
  },
  {
    quote:
      "Izuzetna nega i profesionalno osoblje. Sve su mi jasno objasnili i poseta je prošla bez stresa.",
    name: "Michael R.",
    place: "Boston, MA",
  },
  {
    quote:
      "Obožavam svoj novi osmeh! Estetski rad je bio jednostavan, pažljiv i potpuno bezbolan.",
    name: "Jessica L.",
    place: "Manhattan, NY",
  },
];

const quickLinks = [
  { href: "#home", label: "Početna" },
  { href: "#about", label: "O nama" },
  { href: "#services", label: "Usluge" },
  { href: "#reviews", label: "Utisci" },
  { href: "#contact", label: "Kontakt" },
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
                Dobrodošli u Bright Smiles
              </p>
              <h1
                className="font-display animate-fade-up delay-1 mt-4 max-w-xl text-[2.35rem] leading-[1.08] font-semibold text-navy md:text-5xl lg:text-[3.35rem]"
              >
                Zdrav i blistav osmeh počinje brigom koja vam pruža sigurnost.
              </h1>
              <p className="animate-fade-up delay-2 mt-5 max-w-lg text-base leading-relaxed text-muted md:text-[1.05rem]">
                Uz savremenu stomatologiju i pažljiv pristup, pomažemo vam da se
                osećate prijatno, sigurno i zadovoljno svojim osmehom.
              </p>
              <div className="animate-fade-up delay-3 mt-8 flex flex-col gap-3 sm:flex-row">
                <a
                  href="#contact"
                  className="inline-flex items-center justify-center gap-2 rounded-md bg-teal px-5 py-3.5 text-sm font-semibold text-white transition hover:bg-teal-dark"
                >
                  Zakažite pregled
                  <ArrowIcon className="size-5" />
                </a>
                <a
                  href="#services"
                  className="inline-flex items-center justify-center gap-2 rounded-md border border-line bg-surface px-5 py-3.5 text-sm font-semibold text-navy transition hover:border-teal/40 hover:text-teal"
                >
                  Pogledajte usluge
                  <ArrowIcon className="size-5" />
                </a>
              </div>
            </div>

            <div className="animate-soft-scale relative">
              <HeroSlider />
            </div>
          </div>

          <div className="bg-surface/80 backdrop-blur-sm">
            <div className="mx-auto grid max-w-6xl grid-cols-2 md:grid-cols-4">
              {heroFeatures.map((item, index) => {
                const Icon = item.icon;
                return (
                  <div
                    key={item.title}
                    className={`animate-fade-up flex items-center gap-3 bg-surface px-5 py-5 md:px-7 delay-${index + 1}`}
                  >
                    <span className="flex size-11 shrink-0 items-center justify-center rounded-full bg-ice text-teal">
                      <Icon className="size-6" />
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
                    Naše usluge
                  </p>
                  <h2 className="font-display mt-3 max-w-md text-3xl leading-tight font-semibold text-navy md:text-4xl">
                    Sveobuhvatna nega za zdrav osmeh.
                  </h2>
                </div>
                <p className="max-w-xl text-muted md:justify-self-end md:text-right">
                  Od preventivnih pregleda do restaurativnih i estetskih tretmana,
                  Bright Smiles nudi kompletnu porodičnu stomatologiju na
                  jednom&nbsp;mestu.
                </p>
              </div>
            </Reveal>

            <div className="mt-12 grid gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
              {services.map((service, index) => {
                const Icon = service.icon;
                return (
                  <Reveal key={service.title} delay={index * 60}>
                    <article className="group h-full">
                      <span className="flex size-14 items-center justify-center rounded-full bg-ice text-teal transition group-hover:bg-teal group-hover:text-white">
                        <Icon className="size-7" />
                      </span>
                      <h3 className="font-display mt-5 text-xl font-semibold text-navy">
                        {service.title}
                      </h3>
                      <p className="mt-3 text-sm leading-relaxed text-muted">
                        {service.description}
                      </p>
                      <a
                        href="#contact"
                        className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-teal transition group-hover:gap-2.5"
                      >
                        Saznajte više
                        <ArrowIcon className="size-5" />
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
                  alt="Stomatološki tim Bright Smiles u ordinaciji"
                  width={1400}
                  height={936}
                  className="aspect-5/4 w-full object-cover"
                />
              </div>
            </Reveal>

            <Reveal delay={120}>
              <div>
                <p className="text-xs font-semibold tracking-[0.2em] text-teal uppercase">
                  O nama
                </p>
                <h2 className="font-display mt-3 text-3xl leading-tight font-semibold text-navy md:text-4xl">
                  Vaš osmeh nam je na prvom&nbsp;mestu.
                </h2>
                <p className="mt-5 text-muted leading-relaxed">
                  U Bright Smiles Dental Care pružamo personalizovanu,
                  kvalitetnu negu u mirnom i prijateljskom okruženju —
                  namenjenu svakom članu vaše porodice.
                </p>
                <ul className="mt-7 space-y-3.5">
                  {aboutPoints.map((point) => (
                    <li key={point} className="flex items-start gap-3 text-sm text-muted">
                      <CheckIcon className="mt-0.5 size-6 shrink-0 text-teal" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
                <a
                  href="#contact"
                  className="mt-8 inline-flex items-center gap-2 rounded-md border border-teal/30 bg-surface px-5 py-3 text-sm font-semibold text-teal transition hover:border-teal hover:bg-teal hover:text-white"
                >
                  Više o nama
                  <ArrowIcon className="size-5" />
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
                Zašto baš mi
              </p>
              <h2 className="font-display mt-3 max-w-xl text-3xl leading-tight font-semibold text-navy md:text-4xl">
                Pažljiva nega. U svakom koraku.
              </h2>
            </Reveal>

            <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
              {whyItems.map((item, index) => {
                const Icon = item.icon;
                return (
                  <Reveal key={item.title} delay={index * 70}>
                    <div className="h-full">
                      <span className="flex size-12 items-center justify-center rounded-full bg-surface text-teal shadow-sm">
                        <Icon className="size-6" />
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
                Zadovoljni pacijenti
              </p>
              <h2 className="font-display mt-3 max-w-xl text-3xl leading-tight font-semibold text-navy md:text-4xl">
                Poverenje stotina srećnih osmeha.
              </h2>
            </Reveal>

            <div className="mt-12 grid gap-5 md:grid-cols-3">
              {testimonials.map((item, index) => (
                <Reveal key={item.name} delay={index * 90}>
                  <figure className="flex h-full flex-col rounded-2xl bg-ice-soft p-6 md:p-7">
                    <div className="flex gap-1 text-star" aria-label="Ocena 5 zvezdica">
                      {Array.from({ length: 5 }).map((_, star) => (
                        <StarIcon key={star} className="size-5" />
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
                  Spremni za zdraviji osmeh?
                </h2>
                <p className="mt-3 text-white/85">
                  Zakažite posetu već danas i napravite sledeći korak ka
                  dugotrajnom oralnom zdravlju uz Bright Smiles.
                </p>
                <a
                  href="tel:+11234567890"
                  className="mt-7 inline-flex items-center gap-2 rounded-md bg-surface px-5 py-3.5 text-sm font-semibold text-teal transition hover:bg-ice"
                >
                  Zakažite pregled
                  <ArrowIcon className="size-5" />
                </a>
              </div>
            </Reveal>

            <Reveal delay={120}>
              <div className="space-y-3 text-white md:text-right">
                <a
                  href="tel:+11234567890"
                  className="flex items-center gap-3 md:justify-end"
                >
                  <PhoneIcon className="size-6 opacity-90" />
                  <span className="text-lg font-medium">(123) 456-7890</span>
                </a>
                <p className="flex items-center gap-3 text-white/85 md:justify-end">
                  <PinIcon className="size-6 opacity-90" />
                  <span>1234 Dental Way, Suite 100</span>
                </p>
                <a
                  href="mailto:info@brightsmilesdental.com"
                  className="flex items-center gap-3 text-white/85 md:justify-end"
                >
                  <MailIcon className="size-6 opacity-90" />
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
              <span className="flex size-11 items-center justify-center rounded-full bg-white/10 text-white">
                <ToothIcon className="size-6" />
              </span>
              <div>
                <p className="font-display text-sm font-semibold tracking-[0.08em] uppercase">
                  Bright Smiles
                </p>
                <p className="text-[10px] tracking-[0.2em] text-white/65 uppercase">
                  Stomatološka nega
                </p>
              </div>
            </div>
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-white/70">
              Kvalitetna stomatološka nega za celu porodicu, u udobnom i
              prijateljskom okruženju.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold tracking-wide text-white">
              Brzi linkovi
            </h3>
            <ul className="mt-4 space-y-2.5 text-sm text-white/70">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="transition hover:text-white">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold tracking-wide text-white">
              Naše usluge
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
              Kontakt
            </h3>
            <ul className="mt-4 space-y-3 text-sm text-white/70">
              <li className="flex gap-3">
                <PinIcon className="mt-0.5 size-5 shrink-0" />
                1234 Dental Way, Suite 100
              </li>
              <li className="flex gap-3">
                <PhoneIcon className="mt-0.5 size-5 shrink-0" />
                (123) 456-7890
              </li>
              <li className="flex gap-3">
                <MailIcon className="mt-0.5 size-5 shrink-0" />
                info@brightsmilesdental.com
              </li>
              <li className="flex gap-3">
                <ClockIcon className="mt-0.5 size-5 shrink-0" />
                Pon–Pet 8–17h · Sub 9–14h
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10">
          <div className="mx-auto flex max-w-6xl flex-col gap-3 px-5 py-5 text-xs text-white/55 md:flex-row md:items-center md:justify-between md:px-8">
            <p>© 2026 Bright Smiles Dental Care. Sva prava zadržana.</p>
            <div className="flex gap-5">
              <a href="#contact" className="transition hover:text-white">
                Politika privatnosti
              </a>
              <a href="#contact" className="transition hover:text-white">
                Uslovi korišćenja
              </a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
