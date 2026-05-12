import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  Bath,
  BedDouble,
  Calendar,
  Check,
  ChevronLeft,
  ChevronRight,
  ChevronUp,
  Headset,
  Home,
  Instagram,
  MapPin,
  Menu,
  Mountain,
  ParkingCircle,
  Phone,
  ShieldCheck,
  Star,
  Users,
  UtensilsCrossed,
  Waves,
  Wifi,
  X,
} from "lucide-react";

const navItems = [
  { label: "About", href: "#about" },
  { label: "Rooms", href: "#rooms" },
  { label: "Gallery", href: "#gallery" },
  { label: "Amenities", href: "#amenities" },
  { label: "Contact", href: "#contact" },
];

const roomCards = [
  {
    title: "Vista Premium Room",
    price: "₹5,500",
    cadence: "/night",
    status: "Available",
    image:
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=900&q=80",
    features: ["WiFi", "Attached bathroom", "TV", "Balcony", "Hot water"],
  },
  {
    title: "Cedar Deluxe Stay",
    price: "₹10,500",
    cadence: "/month",
    status: "Few left",
    image:
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=900&q=80&sat=-20",
    features: ["WiFi", "Study desk", "Heater", "Attached bathroom", "Mountain view"],
  },
  {
    title: "Family Balcony Suite",
    price: "₹6,500",
    cadence: "/night",
    status: "Available",
    image:
      "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=900&q=80",
    features: ["Kitchenette", "TV", "Balcony", "Hot water", "4 guests"],
  },
];

const amenityCards = [
  { icon: Wifi, label: "Free WiFi" },
  { icon: ParkingCircle, label: "Parking" },
  { icon: Mountain, label: "Mountain View" },
  { icon: Bath, label: "Attached Bathroom" },
  { icon: UtensilsCrossed, label: "Kitchen" },
  { icon: Waves, label: "Hot Water" },
  { icon: ShieldCheck, label: "CCTV Security" },
  { icon: Headset, label: "24/7 Support" },
];

const galleryImages = [
  "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=900&q=80",
  "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&w=900&q=80",
  "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=900&q=80",
  "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=900&q=80",
  "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=900&q=80",
  "https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?auto=format&fit=crop&w=900&q=80",
];

const testimonials = [
  {
    name: "Aarav Mehta",
    type: "Weekend traveler",
    quote:
      "Everything felt calm, premium, and genuinely cared for. The balcony sunrise alone made the trip worth it.",
  },
  {
    name: "Naina Sood",
    type: "Student guest",
    quote:
      "Reliable WiFi, spotless rooms, and a peaceful environment near markets. It felt safe and beautifully maintained.",
  },
  {
    name: "Priya & Kunal",
    type: "Family stay",
    quote:
      "The family hosts were warm and professional. It had the polish of a boutique stay with the comfort of home.",
  },
];

const attractions = [
  {
    title: "Mall Road",
    distance: "10 mins drive",
    text: "Cafes, shopping, local handicrafts, and evening walks in the heart of town.",
  },
  {
    title: "Hadimba Temple",
    distance: "15 mins drive",
    text: "A peaceful cedar forest landmark perfect for slow sightseeing and photography.",
  },
  {
    title: "Solang Valley",
    distance: "35 mins drive",
    text: "Adventure sports, scenic mountain views, and snow season activities nearby.",
  },
  {
    title: "Jogini Falls Trail",
    distance: "25 mins drive",
    text: "A refreshing short hike for travelers who want nature, water, and quiet views.",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0 },
};

function SectionHeader({ eyebrow, title, text, align = "left" }) {
  return (
    <div className={align === "center" ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}>
      <p className="eyebrow">{eyebrow}</p>
      <h2 className="section-title mt-3">{title}</h2>
      {text ? (
        <p className="mt-5 text-base leading-8 text-slate dark:text-white/72 sm:text-lg">{text}</p>
      ) : null}
    </div>
  );
}

export default function App() {
  const [isPageLoading, setIsPageLoading] = useState(true);
  const [darkMode, setDarkMode] = useState(true);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeReview, setActiveReview] = useState(0);
  const [showTopButton, setShowTopButton] = useState(false);

  useEffect(() => {
    document.body.classList.toggle("dark", darkMode);
    document.documentElement.classList.toggle("dark", darkMode);
  }, [darkMode]);

  useEffect(() => {
    const loadTimer = window.setTimeout(() => {
      setIsPageLoading(false);
    }, 1200);

    const interval = window.setInterval(() => {
      setActiveReview((current) => (current + 1) % testimonials.length);
    }, 4500);

    const onScroll = () => setShowTopButton(window.scrollY > 500);
    onScroll();
    window.addEventListener("scroll", onScroll);

    return () => {
      window.clearTimeout(loadTimer);
      window.clearInterval(interval);
      window.removeEventListener("scroll", onScroll);
    };
  }, []);


  return (
    <div className="min-h-screen overflow-x-hidden bg-base text-ink transition-colors duration-500 dark:bg-night dark:text-white">
      <AnimatePresence>
        {isPageLoading ? (
          <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[70] flex items-center justify-center bg-[linear-gradient(135deg,#071110,#13352d)]"
          >
            <div className="text-center">
              <motion.div
                animate={{ scale: [1, 1.08, 1], opacity: [0.85, 1, 0.85] }}
                transition={{ duration: 1.8, repeat: Number.POSITIVE_INFINITY }}
                className="mx-auto flex h-24 w-24 items-center justify-center rounded-[2rem] border border-white/15 bg-white/10 shadow-glow backdrop-blur-xl"
              >
                <Mountain className="h-10 w-10 text-white" />
              </motion.div>
              <p className="mt-6 font-display text-4xl font-semibold text-white">VIJAYASHA FAMILY</p>
              <div className="mx-auto mt-4 h-1.5 w-56 overflow-hidden rounded-full bg-white/10">
                <motion.div
                  animate={{ x: ["-110%", "110%"] }}
                  transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
                  className="h-full w-28 rounded-full bg-[linear-gradient(90deg,rgba(255,255,255,0),rgba(212,178,106,0.95),rgba(255,255,255,0))]"
                />
              </div>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>

      <div className="fixed inset-x-0 top-0 z-40 border-b border-white/10 bg-black/10 backdrop-blur-2xl">
        <div className="section-shell flex h-20 items-center justify-between">
          <a href="#home" className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-white/15 text-white shadow-glow backdrop-blur-xl">
              <Home className="h-5 w-5" />
            </div>
            <div>
              <p className="font-display text-2xl font-semibold tracking-wide text-white">VIJAYASHA FAMILY</p>
            </div>
          </a>

          <div className="hidden items-center gap-8 lg:flex">
            {navItems.map((item) => (
              <a key={item.href} href={item.href} className="text-sm font-medium text-white/80 transition hover:text-white">
                {item.label}
              </a>
            ))}
          </div>


          <button
            type="button"
            className="rounded-full border border-white/15 bg-white/10 p-3 text-white lg:hidden"
            onClick={() => setMobileMenuOpen((current) => !current)}
            aria-label="Toggle navigation"
          >
            {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        <AnimatePresence>
          {mobileMenuOpen ? (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="overflow-hidden border-t border-white/10 bg-black/35 lg:hidden"
            >
              <div className="section-shell flex flex-col gap-4 py-5">
                {navItems.map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    className="text-base font-medium text-white/82"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.label}
                  </a>
                ))}
              </div>
            </motion.div>
          ) : null}
        </AnimatePresence>
      </div>

      <main id="home">
        <section className="relative isolate min-h-screen overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1518002054494-3a6f94352e9d?auto=format&fit=crop&w=1800&q=80"
            alt="VIJAYASHA FAMILY mountain homestay"
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/45 via-black/35 to-night/95" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(182,215,255,0.22),transparent_35%),radial-gradient(circle_at_bottom_right,rgba(73,136,112,0.28),transparent_28%)]" />

          <div className="section-shell relative z-10 flex min-h-screen items-center py-32">
            <div className="grid w-full gap-14 lg:grid-cols-[1.15fr_0.85fr] lg:items-end">
              <motion.div
                initial="hidden"
                animate="visible"
                variants={fadeUp}
                transition={{ duration: 0.7 }}
                className="max-w-3xl"
              >
                <p className="mb-5 text-sm font-semibold uppercase tracking-[0.4em] text-mist">
                  Premium Rooms In VIJAYASHA FAMILY
                </p>
                <h1 className="font-display text-5xl font-semibold leading-none text-white sm:text-6xl lg:text-7xl">
                  Comfortable Rooms & Peaceful Stay in VIJAYASHA FAMILY
                </h1>
                <p className="mt-6 max-w-2xl text-lg leading-8 text-white/78 sm:text-xl">
                  Affordable, clean and premium rooms for tourists, students and travelers with mountain calm,
                  trusted family hospitality, and a boutique stay feel.
                </p>

                <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                  <a
                    href="#rooms"
                    className="glass-panel rounded-full px-7 py-4 text-center text-sm font-semibold text-white transition hover:-translate-y-1"
                  >
                    View Rooms
                  </a>
                </div>

                <div className="mt-10 grid max-w-2xl gap-4 sm:grid-cols-3">
                  {[
                    ["Mountain-facing rooms", "Boutique comfort"],
                    ["Parking + WiFi", "Everyday convenience"],
                    ["Family-run hospitality", "Trusted local care"],
                  ].map(([title, subtitle]) => (
                    <div key={title} className="glass-panel rounded-3xl p-4 text-white">
                      <p className="font-semibold">{title}</p>
                      <p className="mt-1 text-sm text-white/66">{subtitle}</p>
                    </div>
                  ))}
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.75, delay: 0.2 }}
                className="glass-panel rounded-[2rem] p-5 text-white shadow-glow"
              >
                <div className="rounded-[1.7rem] border border-white/12 bg-black/18 p-5">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <p className="text-xs uppercase tracking-[0.32em] text-white/55">Featured Stay</p>
                      <h2 className="mt-3 font-display text-3xl">Mountain View Suite</h2>
                    </div>
                    <span className="rounded-full bg-emerald-400/18 px-3 py-1 text-xs font-semibold text-emerald-200">
                      Available Today
                    </span>
                  </div>

                  <div className="mt-6 overflow-hidden rounded-[1.5rem]">
                    <img
                      src="https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=900&q=80"
                      alt="Luxury mountain suite"
                      className="h-72 w-full object-cover"
                    />
                  </div>

                  <div className="mt-6 grid grid-cols-2 gap-3 text-sm text-white/72">
                    <div className="glass-panel rounded-2xl p-4">
                      <p className="font-semibold text-white">Private balcony</p>
                      <p className="mt-1">Sunrise valley view</p>
                    </div>
                    <div className="glass-panel rounded-2xl p-4">
                      <p className="font-semibold text-white">Fast internet</p>
                      <p className="mt-1">Ideal for work stays</p>
                    </div>
                  </div>

                  <div className="mt-6 flex items-center justify-between">
                    <div>
                      <p className="text-2xl font-semibold text-white">
                        ₹5,000 <span className="text-sm font-medium text-white/55">per Month</span>
                      </p>
                    </div>
                    <a
                      href="#contact"
                      className="rounded-full bg-white px-5 py-3 text-sm font-semibold text-ink transition hover:bg-mist"
                    >
                      View
                    </a>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        <section id="about" className="relative py-24 sm:py-28">
          <div className="section-shell">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={fadeUp}
              transition={{ duration: 0.6 }}
              className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center"
            >
              <div className="relative">
                <div className="absolute -left-4 top-8 h-24 w-24 rounded-full bg-mist/70 blur-3xl dark:bg-pine/50" />
                <img
                  src="https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=1100&q=80"
                  alt="Family homestay exterior"
                  className="h-[560px] w-full rounded-[2rem] object-cover shadow-glow"
                />
                <div className="glass-panel absolute -bottom-8 right-6 max-w-xs rounded-[1.75rem] p-5">
                  <p className="text-sm font-semibold uppercase tracking-[0.28em] text-pine dark:text-mist">Why guests return</p>
                  <p className="mt-3 text-lg font-semibold text-ink dark:text-white">
                    Quiet surroundings, clean rooms, scenic mountain mornings, and responsive local hosts.
                  </p>
                </div>
              </div>

              <div className="lg:pl-10">
                <SectionHeader
                  eyebrow="About The Property"
                  title="A professional and peaceful family-owned stay with boutique warmth."
                  text="VIJAYASHA FAMILY is designed for guests who want clean, premium accommodation without losing the comfort of a local Himachali home. Guests enjoy mountain views, parking, strong WiFi, nearby markets, smooth check-ins, and the quiet atmosphere that longer stays need."
                />

                <div className="mt-10 grid gap-4 sm:grid-cols-2">
                  {[
                    {
                      title: "Peaceful environment",
                      text: "Set away from crowded roads for better rest, focused work, and slower mornings.",
                    },
                    {
                      title: "Nearby essentials",
                      text: "Markets, cafes, local transport, and daily needs remain conveniently accessible.",
                    },
                    {
                      title: "Trusted comfort",
                      text: "Thoughtful housekeeping, attached bathrooms, hot water, and guest-first support.",
                    },
                    {
                      title: "Ideal for all stays",
                      text: "Suitable for tourists, families, students, and monthly guests needing value plus quality.",
                    },
                  ].map((item) => (
                    <div key={item.title} className="glass-panel rounded-[1.5rem] p-6">
                      <h3 className="text-lg font-semibold text-ink dark:text-white">{item.title}</h3>
                      <p className="mt-3 text-sm leading-7 text-slate dark:text-white/68">{item.text}</p>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        <section id="rooms" className="py-24 sm:py-28">
          <div className="section-shell">
            <SectionHeader
              eyebrow="Room Listing"
              title="Premium rooms crafted for short escapes and longer mountain stays."
              text="Each room combines practical comfort with a more elevated, hotel-style feel. Hover over a card to explore the details."
            />

            <div className="mt-14 grid gap-6 lg:grid-cols-3">
              {roomCards.map((room, index) => (
                <motion.article
                  key={room.title}
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.25 }}
                  transition={{ duration: 0.55, delay: index * 0.1 }}
                  whileHover={{ y: -8 }}
                  className="group overflow-hidden rounded-[2rem] border border-black/5 bg-white shadow-glass transition dark:border-white/10 dark:bg-white/5"
                >
                  <div className="relative overflow-hidden">
                    <img
                      src={room.image}
                      alt={room.title}
                      className="h-80 w-full object-cover transition duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-x-4 top-4 flex items-center justify-between">
                      <span className="rounded-full bg-black/40 px-3 py-1 text-xs font-semibold text-white backdrop-blur-xl">
                        {room.status}
                      </span>
                      <span className="rounded-full bg-white/80 px-3 py-1 text-xs font-semibold text-ink backdrop-blur-xl">
                        Premium
                      </span>
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <h3 className="text-xl font-semibold text-ink dark:text-white">{room.title}</h3>
                        <p className="mt-2 text-2xl font-semibold text-pine dark:text-mist">
                          {room.price}
                          <span className="ml-1 text-sm font-medium text-slate dark:text-white/55">{room.cadence}</span>
                        </p>
                      </div>
                      <BedDouble className="mt-1 h-5 w-5 text-pine dark:text-mist" />
                    </div>

                    <div className="mt-5 flex flex-wrap gap-2">
                      {room.features.map((feature) => (
                        <span
                          key={feature}
                          className="rounded-full bg-cloud px-3 py-2 text-xs font-medium text-ink dark:bg-white/10 dark:text-white/78"
                        >
                          {feature}
                        </span>
                      ))}
                    </div>

                    <button
                      type="button"
                      className="mt-6 w-full rounded-full bg-ink px-5 py-3 text-sm font-semibold text-white transition hover:bg-pine dark:bg-white dark:text-ink"
                    >
                      View
                    </button>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </section>

        <section id="gallery" className="py-24 sm:py-28">
          <div className="section-shell">
            <SectionHeader
              eyebrow="Gallery"
              title="A masonry-style visual story of mountain mornings and refined interiors."
              text="Clean lines, natural views, cozy corners, and the relaxed luxury guests expect from a modern homestay."
              align="center"
            />

            <div className="mt-14 columns-1 gap-5 space-y-5 md:columns-2 xl:columns-3">
              {galleryImages.map((image, index) => (
                <motion.div
                  key={image}
                  initial={{ opacity: 0, scale: 0.96 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true, amount: 0.18 }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                  className="group relative overflow-hidden rounded-[2rem]"
                >
                  <img
                    src={image}
                    alt={`Retreat gallery ${index + 1}`}
                    className="w-full rounded-[2rem] object-cover transition duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-transparent opacity-0 transition group-hover:opacity-100" />
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section id="amenities" className="py-24 sm:py-28">
          <div className="section-shell">
            <div className="rounded-[2.5rem] bg-mesh p-8 shadow-glass dark:bg-mesh-dark sm:p-10 lg:p-14">
              <SectionHeader
                eyebrow="Amenities"
                title="Everything essential, presented with a more premium stay experience."
                text="Functional comforts matter. These amenities are highlighted clearly so guests can book with confidence."
              />

              <div className="mt-12 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
                {amenityCards.map((item, index) => {
                  const Icon = item.icon;
                  return (
                    <motion.div
                      key={item.label}
                      initial={{ opacity: 0, y: 24 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.45, delay: index * 0.05 }}
                      whileHover={{ y: -6 }}
                      className="glass-panel rounded-[1.75rem] p-6"
                    >
                      <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-pine text-white dark:bg-white dark:text-ink">
                        <Icon className="h-6 w-6" />
                      </div>
                      <h3 className="mt-5 text-lg font-semibold text-ink dark:text-white">{item.label}</h3>
                      <p className="mt-2 text-sm leading-7 text-slate dark:text-white/66">
                        Seamless comfort that supports leisure, family travel, and longer bookings.
                      </p>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>


        <section className="py-24 sm:py-28">
          <div className="section-shell">
            <SectionHeader
              eyebrow="Testimonials"
              title="Guest feedback presented like a premium booking platform."
              text="A modern slider layout with glass cards, star ratings, and smooth transitions."
              align="center"
            />

            <div className="mt-12 rounded-[2.5rem] bg-[linear-gradient(135deg,rgba(9,15,18,0.97),rgba(18,45,38,0.92))] p-6 text-white shadow-glow sm:p-10">
              <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={testimonials[activeReview].name}
                    initial={{ opacity: 0, y: 22 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -18 }}
                    transition={{ duration: 0.35 }}
                    className="max-w-3xl"
                  >
                    <div className="mb-5 flex gap-1 text-gold">
                      {Array.from({ length: 5 }).map((_, index) => (
                        <Star key={index} className="h-5 w-5 fill-current" />
                      ))}
                    </div>
                    <p className="font-display text-3xl leading-tight sm:text-4xl">
                      “{testimonials[activeReview].quote}”
                    </p>
                    <div className="mt-6">
                      <p className="text-lg font-semibold">{testimonials[activeReview].name}</p>
                      <p className="text-sm text-white/62">{testimonials[activeReview].type}</p>
                    </div>
                  </motion.div>
                </AnimatePresence>

                <div className="flex items-center gap-3">
                  <button
                    type="button"
                    onClick={() => setActiveReview((current) => (current - 1 + testimonials.length) % testimonials.length)}
                    className="flex h-12 w-12 items-center justify-center rounded-full border border-white/15 bg-white/5 transition hover:bg-white/10"
                  >
                    <ChevronLeft className="h-5 w-5" />
                  </button>
                  <button
                    type="button"
                    onClick={() => setActiveReview((current) => (current + 1) % testimonials.length)}
                    className="flex h-12 w-12 items-center justify-center rounded-full border border-white/15 bg-white/5 transition hover:bg-white/10"
                  >
                    <ChevronRight className="h-5 w-5" />
                  </button>
                </div>
              </div>

              <div className="mt-8 grid gap-4 sm:grid-cols-3">
                {testimonials.map((item, index) => (
                  <button
                    key={item.name}
                    type="button"
                    onClick={() => setActiveReview(index)}
                    className={`rounded-[1.5rem] border p-4 text-left transition ${activeReview === index
                      ? "border-white/25 bg-white/10"
                      : "border-white/10 bg-white/5 hover:bg-white/10"
                      }`}
                  >
                    <p className="font-semibold">{item.name}</p>
                    <p className="mt-1 text-sm text-white/58">{item.type}</p>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="py-24 sm:py-28">
          <div className="section-shell">
            <SectionHeader
              eyebrow="Nearby Attractions"
              title="Popular Bhagalpur highlights within comfortable reach of the property."
              text="These interactive cards help guests imagine their itinerary before they book."
            />

            <div className="mt-14 grid gap-5 lg:grid-cols-4">
              {attractions.map((place, index) => (
                <motion.div
                  key={place.title}
                  initial={{ opacity: 0, y: 22 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.45, delay: index * 0.06 }}
                  whileHover={{ y: -6 }}
                  className="group overflow-hidden rounded-[2rem] border border-black/6 bg-white p-6 shadow-glass dark:border-white/10 dark:bg-white/5"
                >
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-cloud text-pine transition group-hover:bg-pine group-hover:text-white dark:bg-white/10 dark:text-mist">
                    <MapPin className="h-6 w-6" />
                  </div>
                  <div className="mt-5">
                    <p className="text-lg font-semibold text-ink dark:text-white">{place.title}</p>
                    <p className="mt-2 text-sm font-medium text-pine dark:text-mist">{place.distance}</p>
                    <p className="mt-4 text-sm leading-7 text-slate dark:text-white/65">{place.text}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="py-24 sm:py-28">
          <div className="section-shell">
            <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
              <div className="rounded-[2.5rem] bg-[linear-gradient(180deg,#eef4fb,#e0ebe7)] p-8 shadow-glass dark:bg-[linear-gradient(180deg,rgba(255,255,255,0.05),rgba(255,255,255,0.03))] sm:p-10">
                <SectionHeader
                  eyebrow="Contact"
                  title="Reach out for direct booking, directions, or stay details."
                  text="This section combines contact information, a WhatsApp CTA, and map presentation in a clean premium layout."
                />

                <div className="mt-10 space-y-6">
                  <div className="flex gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white text-pine shadow-sm dark:bg-white/10 dark:text-mist">
                      <Phone className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="font-semibold text-ink dark:text-white">Phone / WhatsApp</p>
                      <p className="mt-1 text-sm text-slate dark:text-white/66">+91 98765 43210</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white text-pine shadow-sm dark:bg-white/10 dark:text-mist">
                      <MapPin className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="font-semibold text-ink dark:text-white">Address</p>
                      <p className="mt-1 text-sm text-slate dark:text-white/66">
                        Near Mall Road, Manali, VIJAYASHA FAMILY, India
                      </p>
                    </div>
                  </div>
                </div>

                <a
                  href="https://wa.me/919876543210"
                  target="_blank"
                  rel="noreferrer"
                  className="mt-8 inline-flex rounded-full bg-[#25D366] px-6 py-4 text-sm font-semibold text-white transition hover:-translate-y-1"
                >
                  WhatsApp Booking
                </a>
              </div>

              <div className="glass-panel rounded-[2.5rem] p-6 sm:p-8">
                <form className="grid gap-5">
                  <div className="grid gap-5 md:grid-cols-2">
                    <input
                      type="text"
                      placeholder="Name"
                      className="w-full rounded-2xl border border-black/8 bg-white/80 px-4 py-4 outline-none transition focus:border-pine focus:ring-2 focus:ring-pine/15 dark:border-white/10 dark:bg-white/10 dark:text-white"
                    />
                    <input
                      type="email"
                      placeholder="Email"
                      className="w-full rounded-2xl border border-black/8 bg-white/80 px-4 py-4 outline-none transition focus:border-pine focus:ring-2 focus:ring-pine/15 dark:border-white/10 dark:bg-white/10 dark:text-white"
                    />
                  </div>
                  <input
                    type="text"
                    placeholder="Subject"
                    className="w-full rounded-2xl border border-black/8 bg-white/80 px-4 py-4 outline-none transition focus:border-pine focus:ring-2 focus:ring-pine/15 dark:border-white/10 dark:bg-white/10 dark:text-white"
                  />
                  <textarea
                    rows="5"
                    placeholder="Tell us about your stay dates or room requirements"
                    className="w-full rounded-2xl border border-black/8 bg-white/80 px-4 py-4 outline-none transition focus:border-pine focus:ring-2 focus:ring-pine/15 dark:border-white/10 dark:bg-white/10 dark:text-white"
                  />
                  <button
                    type="button"
                    className="rounded-full bg-ink px-6 py-4 text-sm font-semibold text-white transition hover:bg-pine dark:bg-white dark:text-ink"
                  >
                    Send Message
                  </button>
                </form>

                <div className="mt-6 overflow-hidden rounded-[2rem] border border-black/6 dark:border-white/10">
                  <iframe
                    title="Property location map"
                    src="https://www.google.com/maps?q=25.2514603,87.0377782&z=17&output=embed"
                    className="h-72 w-full"
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-black/6 py-10 dark:border-white/10">
        <div className="section-shell grid gap-8 lg:grid-cols-[1.15fr_0.7fr_0.7fr_0.9fr]">
          <div>
            <p className="font-display text-3xl font-semibold">VIJAYASHA FAMILY</p>
            <p className="mt-4 max-w-md text-sm leading-7 text-slate dark:text-white/66">
              A modern, premium room rental website concept for a family-owned Himachal homestay with direct booking, responsive UI, and trust-first design.
            </p>
          </div>
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-pine dark:text-mist">Quick Links</p>
            <div className="mt-4 space-y-3 text-sm text-slate dark:text-white/66">
              {navItems.slice(0, 4).map((item) => (
                <a key={item.href} href={item.href} className="block transition hover:text-pine dark:hover:text-white">
                  {item.label}
                </a>
              ))}
            </div>
          </div>
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-pine dark:text-mist">Contact</p>
            <div className="mt-4 space-y-3 text-sm text-slate dark:text-white/66">
              <p>+91 98765 43210</p>
              <p>stay@himalayanretreat.com</p>
              <p>Manali, VIJAYASHA FAMILY</p>
            </div>
          </div>
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-pine dark:text-mist">Follow</p>
            <div className="mt-4 flex gap-3">
              <a
                href="#home"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-black/8 transition hover:bg-ink hover:text-white dark:border-white/10"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="https://wa.me/919876543210"
                target="_blank"
                rel="noreferrer"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-black/8 transition hover:bg-ink hover:text-white dark:border-white/10"
              >
                <Phone className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
        <div className="section-shell mt-10 border-t border-black/6 pt-6 text-sm text-slate dark:border-white/10 dark:text-white/55">
          © 2026 VIJAYASHA FAMILY. All rights reserved.
        </div>
      </footer>

      <a
        href="https://wa.me/919876543210"
        target="_blank"
        rel="noreferrer"
        className="fixed bottom-6 right-6 z-30 flex h-16 w-16 items-center justify-center rounded-full bg-[#25D366] text-white shadow-glow transition hover:scale-105"
        aria-label="Book via WhatsApp"
      >
        <Phone className="h-7 w-7" />
      </a>


      <AnimatePresence>
        {showTopButton ? (
          <motion.button
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 12 }}
            type="button"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="fixed bottom-28 right-6 z-30 flex h-12 w-12 items-center justify-center rounded-full bg-ink text-white shadow-glow dark:bg-white dark:text-ink"
            aria-label="Back to top"
          >
            <ChevronUp className="h-5 w-5" />
          </motion.button>
        ) : null}
      </AnimatePresence>
    </div>
  );
}
