"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const slides = [
  {
    src: "/images/hero-slides/slide-1.jpg",
    alt: "Pacijent tokom stomatološkog pregleda",
  },
  {
    src: "/images/hero-slides/slide-2.jpg",
    alt: "Osmeh pacijenta u stomatološkoj ordinaciji",
  },
  {
    src: "/images/hero-slides/slide-3.jpg",
    alt: "Nežna stomatološka nega",
  },
  {
    src: "/images/hero-slides/slide-4.jpg",
    alt: "Stomatolog i pacijent u ordinaciji",
  },
  {
    src: "/images/hero-slides/slide-5.jpg",
    alt: "Moderni stomatološki tretman",
  },
];

const INTERVAL_MS = 10000;

export function HeroSlider() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const id = window.setInterval(() => {
      setActive((current) => (current + 1) % slides.length);
    }, INTERVAL_MS);

    return () => window.clearInterval(id);
  }, []);

  return (
    <div className="hero-media relative aspect-4/3 overflow-hidden rounded-[1.4rem] md:rounded-[1.75rem]">
      {slides.map((slide, index) => (
        <Image
          key={slide.src}
          src={slide.src}
          alt={slide.alt}
          width={1600}
          height={1200}
          priority={index === 0}
          className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-[2000ms] ease-[cubic-bezier(0.4,0,0.2,1)] ${
            index === active ? "opacity-100" : "opacity-0"
          }`}
        />
      ))}
    </div>
  );
}
