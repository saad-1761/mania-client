// "use client";
// import { motion } from "framer-motion";
// import SectionTitle from "../_components/SectionTitle";
// import reviews from "../../data/reviews.json";

// function Stars({ rating }) {
//   const full = Math.round(rating);
//   return (
//     <div className="text-sm" style={{ color: "var(--primary)" }}>
//       {"★".repeat(full)}{"☆".repeat(5 - full)}
//     </div>
//   );
// }

// export default function Reviews() {
//   return (
//     <section className="space-y-6">
//       <SectionTitle eyebrow="Real feedback" title="Customer Reviews"
//         desc="What people say after wearing Mania."
//       />
//       <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
//         {reviews.map((r, idx) => (
//           <motion.div key={r.id}
//             initial={{ opacity: 0, y: 14 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true, amount: 0.2 }}
//             transition={{ duration: 0.45, delay: idx * 0.05 }}
//             className="mania-card p-5 space-y-3"
//           >
//             <div className="flex items-center gap-3">
//               <img src={r.avatar} alt={r.user} className="w-10 h-10 rounded-full object-cover" />
//               <div>
//                 <div className="font-bold leading-tight">{r.user}</div>
//                 <div className="text-xs" style={{ color: "var(--muted)" }}>{r.date}</div>
//               </div>
//             </div>
//             <Stars rating={r.rating} />
//             <p className="text-sm" style={{ color: "var(--muted)" }}>“{r.review}”</p>
//           </motion.div>
//         ))}
//       </div>
//     </section>
//   );
// }

"use client";
import { motion } from "framer-motion";
import SectionTitle from "../_components/SectionTitle";
import reviews from "../../data/reviews.json";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

function Stars({ rating }) {
  const full = Math.round(rating);
  return (
    <div className="text-sm" style={{ color: "var(--primary)" }}>
      {"★".repeat(full)}{"☆".repeat(5 - full)}
    </div>
  );
}

export default function Reviews() {
  return (
    <section className="space-y-6">
      <SectionTitle
        eyebrow="Real feedback"
        title="Customer Reviews"
        desc="What people say after wearing Mania."
      />

      <motion.div
        initial={{ opacity: 0, y: 14 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.5 }}
      >
        <Swiper
          modules={[Autoplay]}
          loop
          speed={2500}
          autoplay={{ delay: 0, disableOnInteraction: false, pauseOnMouseEnter: true }}
          spaceBetween={16}
          slidesPerView={1.1}
          breakpoints={{
            640: { slidesPerView: 2.1 },
            1024: { slidesPerView: 3.1 },
          }}
        >
          {reviews.map((r) => (
            <SwiperSlide key={r.id}>
              <div className="mania-card p-5 space-y-3 h-50">
                <div className="flex items-center gap-3">
                  <img
                    src={r.avatar}
                    alt={r.user}
                    className="w-10 h-10 rounded-full object-cover"
                  />
                  <div>
                    <div className="font-bold leading-tight">{r.user}</div>
                    <div className="text-xs" style={{ color: "var(--muted)" }}>
                      {r.date}
                    </div>
                  </div>
                </div>

                <Stars rating={r.rating} />

                <p className="text-sm" style={{ color: "var(--muted)" }}>
                  “{r.review}”
                </p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </motion.div>
    </section>
  );
}

