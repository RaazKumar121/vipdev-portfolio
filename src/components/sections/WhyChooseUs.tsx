import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  Zap,
  Shield,
  Clock,
  Users,
  Award,
  HeadphonesIcon,
} from "lucide-react";

const reasons = [
  {
    icon: Zap,
    title: "Cutting-Edge Technology",
    description: "We use the latest frameworks and tools to ensure your product is built with the best technology available.",
  },
  {
    icon: Shield,
    title: "Security First",
    description: "Enterprise-grade security practices to protect your data and your users' information.",
  },
  {
    icon: Clock,
    title: "On-Time Delivery",
    description: "We understand deadlines matter. Our agile process ensures timely delivery without compromising quality.",
  },
  {
    icon: Users,
    title: "Dedicated Team",
    description: "A passionate team of developers, designers, and strategists committed to your project's success.",
  },
  {
    icon: Award,
    title: "Quality Assured",
    description: "Rigorous testing and code reviews ensure every product meets the highest standards.",
  },
  {
    icon: HeadphonesIcon,
    title: "24/7 Support",
    description: "Round-the-clock support to address your concerns and ensure smooth operations.",
  },
];

export function WhyChooseUs() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-primary/5 via-transparent to-secondary/5" />
      </div>

      <div className="container mx-auto px-6 relative z-10" ref={ref}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary text-sm font-semibold uppercase tracking-wider">
            Why Choose Us
          </span>
          <h2 className="section-title mt-4">
            Your Success Is Our{" "}
            <span className="gradient-text">Priority</span>
          </h2>
          <p className="section-subtitle">
            We go beyond code to deliver complete solutions that drive real
            business results.
          </p>
        </motion.div>

        {/* Reasons Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass-card p-8 group hover:border-primary/30 transition-all duration-300"
            >
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:shadow-lg group-hover:shadow-primary/20 transition-all duration-300">
                <reason.icon className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3">{reason.title}</h3>
              <p className="text-muted-foreground leading-relaxed">
                {reason.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Bottom Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-20 glass-card p-8 md:p-12"
        >
          <div className="grid md:grid-cols-4 gap-8 text-center">
            {[
              { value: "99.9%", label: "Uptime Guarantee" },
              { value: "< 24h", label: "Response Time" },
              { value: "100+", label: "Happy Clients" },
              { value: "3x", label: "Faster Delivery" },
            ].map((stat, index) => (
              <div key={index}>
                <div className="text-4xl md:text-5xl font-bold gradient-text mb-2">
                  {stat.value}
                </div>
                <div className="text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
