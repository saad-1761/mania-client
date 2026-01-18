"use client";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

const slides = [
  "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=1600&q=80",
  "https://images.unsplash.com/photo-1524805444758-089113d48a6d?w=1600&q=80",
  "https://images.unsplash.com/photo-1522312346375-d1a52e2b99b3?w=1600&q=80"
];

export default function Hero() {
  return (
    <section className="grid gap-8 lg:grid-cols-2 items-center">
      <motion.div
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6 }}
        className="space-y-4"
      >
        <div className="inline-flex items-center gap-2 rounded-full px-3 py-1 text-sm border"
          style={{ borderColor: "var(--border)", background: "var(--primary-soft)" }}
        >
          <span>✨</span>
          <span>Premium style. Everyday confidence.</span>
        </div>

        <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">
          Wear time with <span style={{ color: "var(--primary)" }}>Mania</span>.
        </h1>

        <p className="text-base md:text-lg" style={{ color: "var(--muted)" }}>
          Discover watches designed for modern gentlemen — clean, durable, and built to elevate your look.
        </p>

        <div className="flex flex-wrap gap-3">
          <a href="/products" className="mania-btn">Explore Products</a>
          <a href="/login" className="mania-btn-ghost">Join Community</a>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.98 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6 }}
        className="mania-card overflow-hidden"
      >
        <Swiper modules={[Autoplay]} loop autoplay={{ delay: 2500, disableOnInteraction: false }}
          className="h-[320px] md:h-[420px]"
        >
          {slides.map((src) => (
            <SwiperSlide key={src}>
              <img src={src} alt="Mania watch" className="w-full h-full object-cover" />
            </SwiperSlide>
          ))}
        </Swiper>
      </motion.div>
    </section>
  );
}
