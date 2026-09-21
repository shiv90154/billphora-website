import {
  Receipt,
  ChefHat,
  LayoutGrid,
  Bike,
  WifiOff,
  Boxes,
  ShieldCheck,
  BarChart3,
  Store,
  type LucideIcon,
} from "lucide-react";

export const site = {
  name: "Billphora",
  domain: "billphora.inphora.in",
  url: "https://billphora.inphora.in",
  tagline: "Restaurant billing that never stops",
  description:
    "Billphora is a GST-ready restaurant billing and POS system with KOT, table management, delivery and offline-first billing, plus an owner dashboard for sales, staff and stock.",
  company: "Inphora Pvt. Ltd.",
  companyUrl: "https://inphora.in",
  city: "Mohali, Punjab, India",
  address: "Plot No. F-177, Kailash Tower, 3rd Floor, Phase 8B, Sector 74, Mohali",
  phone: "+91 86999 41978",
  whatsapp: "918699941978",
  email: "contact@inphora.in",
  loginUrl: "https://srv1975591.hstgr.cloud",
};

export const navLinks = [
  { label: "Features", href: "/features" },
  { label: "How it works", href: "/how-it-works" },
  { label: "Pricing", href: "/pricing" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export const stats = [
  { value: 100, suffix: "%", label: "Billing works offline" },
  { value: 5, suffix: "%", label: "GST & cess handled" },
  { value: 3, suffix: "", label: "Order modes in one app" },
  { value: 0, suffix: "", label: "Bills lost to bad internet" },
];

export const features: { icon: LucideIcon; title: string; body: string }[] = [
  {
    icon: Receipt,
    title: "GST-ready billing",
    body: "Automatic GST and cess, discounts, split taxes and clean printable bills in seconds.",
  },
  {
    icon: ChefHat,
    title: "KOT to kitchen",
    body: "Send Kitchen Order Tickets instantly so the kitchen always knows what to cook next.",
  },
  {
    icon: LayoutGrid,
    title: "Table management",
    body: "See free and running tables at a glance, move orders and merge bills without confusion.",
  },
  {
    icon: Bike,
    title: "Takeaway & delivery",
    body: "Dine-in, takeaway and home delivery in one flow with customer details attached.",
  },
  {
    icon: WifiOff,
    title: "Offline-first",
    body: "Every bill saves on your device. No internet needed to take an order, ever.",
  },
  {
    icon: Boxes,
    title: "Stock & purchase",
    body: "Suppliers, purchase orders and goods inward so your stock always matches reality.",
  },
  {
    icon: ShieldCheck,
    title: "Staff roles",
    body: "Give cashiers, captains and managers exactly the access they need, nothing more.",
  },
  {
    icon: BarChart3,
    title: "Owner reports",
    body: "Daily sales, top items and settlements on your phone, from anywhere.",
  },
  {
    icon: Store,
    title: "Built for Indian F&B",
    body: "Made for cafes, restaurants, cloud kitchens and sweet shops that bill all day.",
  },
];

export const offlineSteps = [
  { title: "Bill on the counter", body: "Take orders and print bills. Everything saves on the device instantly." },
  { title: "Keep working offline", body: "Internet down? Nothing changes. Staff never wait, customers never queue." },
  { title: "Sync when you want", body: "Tap Sync to Cloud when online. Bills reach your dashboard safely, never twice." },
];

export const steps = [
  { title: "We set up your restaurant", body: "Your outlet, menu, tables, taxes and staff logins are created for you." },
  { title: "Install the billing app", body: "Log in once on your Android device and start billing right away." },
  { title: "Watch it on your dashboard", body: "Sync bills and see sales, staff and stock reports as the day goes." },
  { title: "Grow with confidence", body: "Use reports and settlements to spot best sellers and control costs." },
];

export const plans = [
  {
    name: "Starter",
    blurb: "For a single counter or small cafe.",
    points: ["Offline billing app", "GST bills & KOT", "Owner dashboard", "Email support"],
    featured: false,
  },
  {
    name: "Growth",
    blurb: "For busy restaurants with staff and tables.",
    points: ["Everything in Starter", "Table & delivery flows", "Staff roles & permissions", "Stock & purchase orders", "Priority support"],
    featured: true,
  },
  {
    name: "Multi-outlet",
    blurb: "For groups running several restaurants.",
    points: ["Everything in Growth", "Multiple outlets", "Custom onboarding", "Dedicated manager"],
    featured: false,
  },
];

export const faqs = [
  {
    q: "Does Billphora work without internet?",
    a: "Yes. Billing is fully offline. Bills are saved on your device and you sync them to the cloud whenever you choose.",
  },
  {
    q: "Is it GST compliant?",
    a: "Billphora calculates GST and cess on every bill and prints clean, tax-ready invoices.",
  },
  {
    q: "Which devices do I need?",
    a: "The billing app runs on Android phones and tablets. The owner dashboard works in any browser.",
  },
  {
    q: "Can I control what my staff can do?",
    a: "Yes. Create roles and permissions so cashiers, captains and managers only see what they need.",
  },
  {
    q: "How do I get started?",
    a: "Book a free demo. We will set up your restaurant and help your team get going.",
  },
];

export function whatsappLink(message: string) {
  return `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(message)}`;
}
