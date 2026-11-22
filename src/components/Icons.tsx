import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement>;

function base(props: IconProps) {
  return {
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.85,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    ...props,
  };
}

export function ToothIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...base(props)}>
      <path d="M8.2 3.5c-2.1.2-3.7 2.2-3.5 4.4.3 2.6 1.4 4.2 2 7.2.3 1.5.2 3.4 1.5 4.1 1 .5 1.7-.4 2-1.5.4-1.4.7-2.8 1.8-2.8s1.4 1.4 1.8 2.8c.3 1.1 1 2 2 1.5 1.3-.7 1.2-2.6 1.5-4.1.6-3 1.7-4.6 2-7.2.2-2.2-1.4-4.2-3.5-4.4-1.4-.1-2.6.5-3.8.5s-2.4-.6-3.8-.5Z" />
    </svg>
  );
}

export function SparkleToothIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...base(props)}>
      <path d="M9 4.2c-1.7.2-3 1.8-2.8 3.5.2 2 1.1 3.2 1.6 5.5.2 1.1.1 2.5 1.1 3 .8.4 1.3-.3 1.5-1.1.3-1 .5-2 1.4-2s1.1 1 1.4 2c.2.8.7 1.5 1.5 1.1 1-.5.9-1.9 1.1-3 .5-2.3 1.4-3.5 1.6-5.5.2-1.7-1.1-3.3-2.8-3.5C12.9 4 12 4.4 11 4.4S9.1 4 9 4.2Z" />
      <path d="M18.2 3.5 18.8 5l1.5.6-1.5.6-.6 1.5-.6-1.5-1.5-.6 1.5-.6.6-1.5Z" />
    </svg>
  );
}

export function ImplantIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...base(props)}>
      <path d="M12 3v7" />
      <path d="M9.5 10h5" />
      <path d="M10 10.5c0 4 1 7.5 2 10.5 1-3 2-6.5 2-10.5" />
      <path d="M9 14h6M9.5 17h5" />
    </svg>
  );
}

export function OrthoIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...base(props)}>
      <path d="M5 10c0-2.5 1.8-4.5 4-4.5h6c2.2 0 4 2 4 4.5v1c0 2.5-1.8 4.5-4 4.5H9c-2.2 0-4-2-4-4.5v-1Z" />
      <path d="M8 10.5h8M8 13h8" />
    </svg>
  );
}

export function ShieldIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...base(props)}>
      <path d="M12 3.5 5.5 6v5.2c0 4.2 2.8 7.4 6.5 8.8 3.7-1.4 6.5-4.6 6.5-8.8V6L12 3.5Z" />
      <path d="m9.2 12 1.9 1.9 3.7-3.8" />
    </svg>
  );
}

export function ClockIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...base(props)}>
      <circle cx="12" cy="12" r="8" />
      <path d="M12 8v4.5l3 1.5" />
    </svg>
  );
}

export function HospitalIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...base(props)}>
      <path d="M5 20V7.5A1.5 1.5 0 0 1 6.5 6H17.5A1.5 1.5 0 0 1 19 7.5V20" />
      <path d="M3.5 20h17" />
      <path d="M12 6V3.5M10.5 5h3" />
      <path d="M9 11h2v2H9v-2Zm4 0h2v2h-2v-2Zm-4 4h2v2H9v-2Zm4 0h2v2h-2v-2Z" />
    </svg>
  );
}

export function DoctorIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...base(props)}>
      <circle cx="12" cy="8" r="3" />
      <path d="M6.5 19.5c.8-3 3-4.5 5.5-4.5s4.7 1.5 5.5 4.5" />
      <path d="M17.5 8.5v3M16 10h3" />
    </svg>
  );
}

export function EquipmentIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...base(props)}>
      <path d="M8 20V9.5A2.5 2.5 0 0 1 10.5 7h3A2.5 2.5 0 0 1 16 9.5V20" />
      <path d="M7 20h10" />
      <path d="M12 7V4.5" />
      <circle cx="12" cy="13" r="1.5" />
    </svg>
  );
}

export function HeartCareIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...base(props)}>
      <path d="M12 19s-6.5-4.1-6.5-8.2A3.6 3.6 0 0 1 12 8.2a3.6 3.6 0 0 1 6.5 2.6C18.5 14.9 12 19 12 19Z" />
    </svg>
  );
}

export function CalendarIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...base(props)}>
      <rect x="4" y="5.5" width="16" height="14" rx="2" />
      <path d="M8 3.5v4M16 3.5v4M4 10h16" />
    </svg>
  );
}

export function PhoneIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...base(props)}>
      <path d="M8.2 4.8c.4-.4 1-.5 1.5-.3l2 1c.5.2.8.7.8 1.2v1.8c0 .4-.2.8-.5 1.1l-1 1c1.2 2.3 2.9 4 5.2 5.2l1-1c.3-.3.7-.5 1.1-.5h1.8c.5 0 1 .3 1.2.8l1 2c.2.5.1 1.1-.3 1.5l-1.2 1.2c-.4.4-1 .6-1.6.5-4.4-.7-8.4-3.4-11.1-7.1C5.2 10.5 3.8 6.8 4.3 2.9c.1-.6.3-1.2.7-1.6L6.2 0" />
    </svg>
  );
}

export function PinIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...base(props)}>
      <path d="M12 21s6-5.2 6-10a6 6 0 1 0-12 0c0 4.8 6 10 6 10Z" />
      <circle cx="12" cy="11" r="2.2" />
    </svg>
  );
}

export function MailIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...base(props)}>
      <rect x="3.5" y="6" width="17" height="12" rx="2" />
      <path d="m4.5 8 7.5 5 7.5-5" />
    </svg>
  );
}

export function CheckIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...base(props)}>
      <circle cx="12" cy="12" r="8.2" />
      <path d="m8.8 12.2 2.2 2.2 4.2-4.4" />
    </svg>
  );
}

export function ArrowIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...base(props)}>
      <path d="M5 12h14M13 6l6 6-6 6" />
    </svg>
  );
}

export function MenuIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...base(props)}>
      <path d="M4 7h16M4 12h16M4 17h16" />
    </svg>
  );
}

export function CloseIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...base(props)}>
      <path d="M6 6l12 12M18 6 6 18" />
    </svg>
  );
}

export function StarIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        fill="currentColor"
        d="m12 3.4 2.4 4.9 5.4.8-3.9 3.8.9 5.4L12 15.8 7.2 18.3l.9-5.4-3.9-3.8 5.4-.8L12 3.4Z"
      />
    </svg>
  );
}
