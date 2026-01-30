import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  Smartphone,
  Globe,
  Server,
  Palette,
  PenTool,
  Search,
  Database,
  Boxes,
} from "lucide-react";

const services = [
  {
    icon: Smartphone,
    title: "Mobile App Development",
    description: "Native and cross-platform mobile apps using React Native and Expo for iOS and Android.",
    tech: ["React Native", "Expo", "TypeScript"],
  },
  {
    icon: Globe,
    title: "Web Development",
    description: "Modern, responsive web applications and platforms built with cutting-edge frameworks.",
    tech: ["Next.js", "React.js", "Laravel"],
  },
  {
    icon: Server,
    title: "Backend Development",
    description: "Robust, secure API development and backend systems that scale with your business.",
    tech: ["Node.js", "Laravel", "REST APIs"],
  },
  {
    icon: Palette,
    title: "UI/UX Design",
    description: "User-centered design that creates intuitive and visually stunning digital experiences.",
    tech: ["Figma", "Adobe XD", "Prototyping"],
  },
  {
    icon: PenTool,
    title: "Graphic Design",
    description: "Brand identity, marketing materials, and visual assets that make your brand stand out.",
    tech: ["Branding", "Marketing", "Print"],
  },
  {
    icon: Search,
    title: "SEO Optimization",
    description: "Data-driven SEO strategies to improve your visibility and organic traffic.",
    tech: ["Technical SEO", "Content", "Analytics"],
  },
  {
    icon: Database,
    title: "Database Architecture",
    description: "Efficient database design and optimization for high-performance applications.",
    tech: ["MySQL", "PostgreSQL", "MongoDB"],
  },
  {
    icon: Boxes,
    title: "Microservices Systems",
    description: "Scalable microservices architecture for complex enterprise applications.",
    tech: ["Docker", "Kubernetes", "CI/CD"],
  },
];

export function Services() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="services" className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />

      <div className="container mx-auto px-6 relative z-10" ref={ref}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary text-sm font-semibold uppercase tracking-wider">
            Our Services
          </span>
          <h2 className="section-title mt-4">
            Solutions That{" "}
            <span className="gradient-text">Drive Growth</span>
          </h2>
          <p className="section-subtitle">
            From concept to deployment, we offer end-to-end software development
            services tailored to your unique business needs.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass-card p-6 group hover:border-primary/30 transition-all duration-300 cursor-pointer"
            >
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300">
                <service.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
              <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                {service.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {service.tech.map((tech, idx) => (
                  <span
                    key={idx}
                    className="text-xs px-2 py-1 rounded-full bg-primary/10 text-primary"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
