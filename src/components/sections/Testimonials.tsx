import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { ChevronLeft, ChevronRight, Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Rahul Sharma",
    role: "CEO, TechStart India",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&q=80",
    content: "VIPDEV.IN transformed our business idea into a reality. Their team delivered a flawless mobile app that exceeded our expectations. Highly recommended!",
    rating: 5,
  },
  {
    name: "Priya Patel",
    role: "Founder, EduLearn",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&q=80",
    content: "The institute management system they built has streamlined our entire operations. Professional team, excellent communication, and outstanding results.",
    rating: 5,
  },
  {
    name: "Amit Kumar",
    role: "CTO, RetailPlus",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&q=80",
    content: "Our e-commerce platform handles thousands of transactions daily without any issues. The architecture is solid and scales beautifully.",
    rating: 5,
  },
  {
    name: "Sarah Johnson",
    role: "Director, HealthFirst",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&q=80",
    content: "Working with VIPDEV.IN was a game-changer. They understood our healthcare compliance needs and delivered a secure, user-friendly solution.",
    rating: 5,
  },
];

export function Testimonials() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [currentIndex, setCurrentIndex] = useState(0);

  const next = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prev = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section id="testimonials" className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-secondary/5 to-transparent" />

      <div className="container mx-auto px-6 relative z-10" ref={ref}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary text-sm font-semibold uppercase tracking-wider">
            Testimonials
          </span>
          <h2 className="section-title mt-4">
            What Our{" "}
            <span className="gradient-text">Clients Say</span>
          </h2>
          <p className="section-subtitle">
            Don't just take our word for it - hear from some of our satisfied
            clients.
          </p>
        </motion.div>

        {/* Testimonials Carousel */}
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6 }}
            className="glass-card p-8 md:p-12 relative"
          >
            {/* Quote Icon */}
            <Quote className="absolute top-8 right-8 w-16 h-16 text-primary/10" />

            {/* Content */}
            <div className="text-center">
              {/* Stars */}
              <div className="flex justify-center gap-1 mb-6">
                {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                ))}
              </div>

              {/* Testimonial Text */}
              <motion.p
                key={currentIndex}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
                className="text-xl md:text-2xl text-foreground leading-relaxed mb-8"
              >
                "{testimonials[currentIndex].content}"
              </motion.p>

              {/* Author */}
              <motion.div
                key={`author-${currentIndex}`}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.4, delay: 0.1 }}
                className="flex flex-col items-center"
              >
                <img
                  src={testimonials[currentIndex].image}
                  alt={testimonials[currentIndex].name}
                  className="w-16 h-16 rounded-full object-cover border-2 border-primary mb-3"
                />
                <div className="font-semibold text-lg">
                  {testimonials[currentIndex].name}
                </div>
                <div className="text-muted-foreground">
                  {testimonials[currentIndex].role}
                </div>
              </motion.div>
            </div>

            {/* Navigation */}
            <div className="flex justify-center gap-4 mt-8">
              <button
                onClick={prev}
                className="w-12 h-12 rounded-full glass-card flex items-center justify-center hover:bg-primary/10 transition-colors"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              <button
                onClick={next}
                className="w-12 h-12 rounded-full glass-card flex items-center justify-center hover:bg-primary/10 transition-colors"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>

            {/* Dots */}
            <div className="flex justify-center gap-2 mt-6">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    index === currentIndex
                      ? "w-8 bg-primary"
                      : "bg-muted-foreground/30 hover:bg-muted-foreground/50"
                  }`}
                />
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
