import {
  Receipt,
  ChefHat,
  LayoutGrid,
  WifiOff,
  Boxes,
  ShieldCheck,
  BarChart3,
  Store,
  Building2,
  Printer,
  Utensils,
  Pill,
  ShoppingBag,
  Gem,
  ScanBarcode,
  CalendarClock,
  BadgeCheck,
  type LucideIcon,
} from "lucide-react";

export const site = {
  name: "Billphora",
  domain: "billphora.inphora.in",
  url: "https://billphora.inphora.in",
  tagline: "Smart billing for every business",
  description:
    "Billphora is a GST-ready, offline-first billing and POS system for restaurants, pharmacies, retail stores and jewellers, plus an owner dashboard for sales, staff and stock.",
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
  { label: "Industries", href: "/industries" },
  { label: "Features", href: "/features" },
  { label: "How it works", href: "/how-it-works" },
  { label: "Pricing", href: "/pricing" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export const stats = [
  { value: 100, suffix: "%", label: "Billing works offline" },
  { value: 24, suffix: "/7", label: "Call support" },
  { value: 4, suffix: "", label: "Business types, one brand" },
  { value: 0, suffix: "", label: "Bills lost to bad internet" },
];

export const features: { icon: LucideIcon; title: string; body: string }[] = [
  {
    icon: Receipt,
    title: "GST-ready billing",
    body: "Automatic GST and cess, discounts, split taxes and clean printable bills in seconds.",
  },
  {
    icon: WifiOff,
    title: "Offline-first",
    body: "Every bill saves on your device. No internet needed to take an order, ever.",
  },
  {
    icon: LayoutGrid,
    title: "Workflows for your trade",
    body: "Kitchen tickets and tables, batch and expiry, barcodes, gold rate and making charges, all in one platform.",
  },
  {
    icon: Boxes,
    title: "Stock & purchase",
    body: "Suppliers, purchase orders and goods inward so your stock always matches reality.",
  },
  {
    icon: ShieldCheck,
    title: "Staff roles",
    body: "Give cashiers, pharmacists, sales staff and managers exactly the access they need, nothing more.",
  },
  {
    icon: BarChart3,
    title: "Owner reports",
    body: "Daily sales, top sellers and settlements on your phone, from anywhere.",
  },
  {
    icon: Building2,
    title: "Multiple outlets",
    body: "Run several outlets or branches and see every one of them from a single dashboard.",
  },
  {
    icon: Printer,
    title: "Print-ready bills",
    body: "Clean, tax-ready bills and receipts your customers can trust, printed at the counter.",
  },
  {
    icon: Store,
    title: "Built for Indian business",
    body: "Made for restaurants, pharmacies, retail stores and jewellers that bill all day.",
  },
];

export type Industry = {
  name: string;
  icon: LucideIcon;
  accent: string;
  ideal: string[];
  blurb: string;
  points: string[];
  bill: {
    meta: string;
    items: [string, string][];
    tax: [string, string];
    total: string;
    chips: { icon: LucideIcon; label: string; value: string }[];
  };
};

export const industries: Industry[] = [
  {
    name: "Restaurant",
    icon: Utensils,
    accent: "from-orange-500 to-amber-400",
    ideal: ["Cafes", "Restaurants", "Cloud kitchens", "Sweet shops"],
    blurb: "Fast billing for cafes, restaurants, cloud kitchens and sweet shops.",
    points: ["KOT sent straight to the kitchen", "Table management and bill merging", "Dine-in, takeaway and delivery", "Item-wise sales and settlements"],
    bill: {
      meta: "Table 5 · Dine-in",
      items: [
        ["Paneer Tikka", "1 × ₹260"],
        ["Butter Naan", "4 × ₹45"],
        ["Masala Chai", "2 × ₹30"],
      ],
      tax: ["GST 5%", "₹25.00"],
      total: "₹525",
      chips: [
        { icon: ChefHat, label: "KOT sent", value: "Kitchen · 2 items" },
        { icon: LayoutGrid, label: "Tables", value: "3 free · 1 billing" },
      ],
    },
  },
  {
    name: "Pharmacy",
    icon: Pill,
    accent: "from-emerald-500 to-teal-400",
    ideal: ["Medical stores", "Chemists", "Wholesale pharmacies"],
    blurb: "Accurate, compliant billing for medical stores and chemists.",
    points: ["Batch and expiry tracking", "Expiry alerts before stock is wasted", "Medicine-wise GST rates", "Purchase from suppliers, stock in seconds"],
    bill: {
      meta: "Counter sale · Rx #4821",
      items: [
        ["Paracetamol 500 mg", "2 × ₹30"],
        ["Cough Syrup 100 ml", "1 × ₹110"],
        ["Vitamin C Tablets", "1 × ₹130"],
      ],
      tax: ["GST 12%", "₹36.00"],
      total: "₹336",
      chips: [
        { icon: CalendarClock, label: "Expiry alert", value: "3 batches this month" },
        { icon: Boxes, label: "Stock", value: "Auto-updated" },
      ],
    },
  },
  {
    name: "Retail",
    icon: ShoppingBag,
    accent: "from-violet-500 to-indigo-400",
    ideal: ["Garments", "Grocery", "Electronics", "Gift shops"],
    blurb: "Quick checkout for garment, grocery, electronics and general stores.",
    points: ["Barcode scan billing", "Live stock across items", "Discounts and split payments", "Multiple outlets, one dashboard"],
    bill: {
      meta: "Counter 2 · Walk-in",
      items: [
        ["Cotton T-Shirt", "2 × ₹400"],
        ["Socks (3 pack)", "1 × ₹150"],
        ["Cap", "1 × ₹50"],
      ],
      tax: ["GST 5%", "₹50.00"],
      total: "₹1,050",
      chips: [
        { icon: ScanBarcode, label: "Barcode", value: "Scanned in 1 tap" },
        { icon: Boxes, label: "Stock", value: "42 left" },
      ],
    },
  },
  {
    name: "Jewellery",
    icon: Gem,
    accent: "from-amber-500 to-yellow-400",
    ideal: ["Jewellers", "Showrooms", "Gold and silver shops"],
    blurb: "Precise, transparent billing for jewellers and showrooms.",
    points: ["Weight-based pricing at today's rate", "Making charges added automatically", "Hallmark details on every bill", "Clear GST breakup for the customer"],
    bill: {
      meta: "Invoice J-0031 · Hallmarked",
      items: [
        ["Gold Ring 22K · 5 g", "5 g × ₹7,000"],
        ["Making charges 8%", "₹2,800"],
      ],
      tax: ["GST 3%", "₹1,134.00"],
      total: "₹38,934",
      chips: [
        { icon: Gem, label: "Gold rate", value: "₹7,000 / g" },
        { icon: BadgeCheck, label: "Hallmark", value: "HUID verified" },
      ],
    },
  },
];

export const trades = [
  "Restaurants",
  "Cafes",
  "Cloud kitchens",
  "Medical stores",
  "Chemists",
  "Garment stores",
  "Grocery shops",
  "Electronics",
  "Jewellers",
  "Showrooms",
  "Sweet shops",
  "Gift shops",
];

export const offlineSteps = [
  { title: "Bill on the counter", body: "Take orders and print bills. Everything saves on the device instantly." },
  { title: "Keep working offline", body: "Internet down? Nothing changes. Staff never wait, customers never queue." },
  { title: "Sync when you want", body: "Tap Sync to Cloud when online. Bills reach your dashboard safely, never twice." },
];

export const steps = [
  { title: "We set up your business", body: "Your outlet, catalogue, taxes and staff logins are created for you." },
  { title: "Install the billing app", body: "Log in once on your Android device and start billing right away." },
  { title: "Watch it on your dashboard", body: "Sync bills and see sales, staff and stock reports as the day goes." },
  { title: "Grow with confidence", body: "Use reports and settlements to spot best sellers and control costs." },
];

export const plans = [
  {
    name: "Starter",
    blurb: "For a single counter or small shop.",
    points: ["Offline billing app", "GST bills & receipts", "Owner dashboard", "Free demo and setup"],
    featured: false,
  },
  {
    name: "Growth",
    blurb: "For busy stores with staff and stock.",
    points: ["Everything in Starter", "Workflows for your trade", "Staff roles & permissions", "Stock & purchase orders"],
    featured: true,
  },
  {
    name: "Multi-outlet",
    blurb: "For groups running several outlets.",
    points: ["Everything in Growth", "Multiple outlets", "Custom onboarding", "Tailored support"],
    featured: false,
  },
];

export const faqs = [
  {
    q: "Which businesses is Billphora for?",
    a: "Restaurants, pharmacies, retail stores and jewellers. Each business type gets billing flows made for that trade.",
  },
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
    a: "Yes. Create roles and permissions so cashiers, sales staff and managers only see what they need.",
  },
  {
    q: "How do I get started?",
    a: "Book a free demo. We will set up your business and help your team get going.",
  },
];

export function whatsappLink(message: string) {
  return `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(message)}`;
}
