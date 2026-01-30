import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Target, Lightbulb, Rocket, Shield } from "lucide-react";

const features = [
  {
    icon: Target,
    title: "Mission Driven",
    description: "We focus on delivering solutions that directly impact your business growth.",
  },
  {
    icon: Lightbulb,
    title: "Innovation First",
    description: "Leveraging cutting-edge technologies to build future-ready applications.",
  },
  {
    icon: Rocket,
    title: "Fast Delivery",
    description: "Agile development process ensuring quick turnaround without compromising quality.",
  },
  {
    icon: Shield,
    title: "Secure & Scalable",
    description: "Enterprise-grade security with architecture designed to scale with your growth.",
  },
];

export function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-24 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-secondary/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-6 relative z-10" ref={ref}>
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <span className="text-primary text-sm font-semibold uppercase tracking-wider">
              About VIPDEV.IN
            </span>
            <h2 className="section-title mt-4">
              We Transform Ideas into{" "}
              <span className="gradient-text">Digital Reality</span>
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              At VIPDEV.IN, we build secure, scalable, and modern digital solutions
              tailored to business needs. Our expertise in mobile apps, web platforms,
              and backend systems ensures high performance, user-friendly design, and
              future-ready architecture.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed">
              We focus on quality, fast delivery, and long-term client success. Whether
              you're a startup looking to launch your MVP or an enterprise seeking to
              modernize your tech stack, we've got you covered.
            </p>
          </motion.div>

          {/* Right Content - Features Grid */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid sm:grid-cols-2 gap-6"
          >
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                className="glass-card p-6 group hover:border-primary/30 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <feature.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                <p className="text-muted-foreground text-sm">{feature.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
