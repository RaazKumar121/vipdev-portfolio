import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const technologies = [
  { name: "React Native", category: "Mobile" },
  { name: "Expo", category: "Mobile" },
  { name: "Next.js", category: "Frontend" },
  { name: "React.js", category: "Frontend" },
  { name: "Laravel", category: "Backend" },
  { name: "PHP", category: "Backend" },
  { name: "TypeScript", category: "Language" },
  { name: "Tailwind CSS", category: "Styling" },
  { name: "MySQL", category: "Database" },
  { name: "PostgreSQL", category: "Database" },
  { name: "MongoDB", category: "Database" },
  { name: "REST APIs", category: "Backend" },
  { name: "Node.js", category: "Backend" },
  { name: "Docker", category: "DevOps" },
  { name: "AWS", category: "Cloud" },
  { name: "Firebase", category: "Cloud" },
];

const categories = [
  { name: "Mobile", color: "from-primary to-primary/50" },
  { name: "Frontend", color: "from-secondary to-secondary/50" },
  { name: "Backend", color: "from-neon-blue to-neon-blue/50" },
  { name: "Database", color: "from-neon-purple to-neon-purple/50" },
  { name: "Language", color: "from-primary to-secondary" },
  { name: "Styling", color: "from-neon-cyan to-neon-purple" },
  { name: "DevOps", color: "from-accent to-accent/50" },
  { name: "Cloud", color: "from-secondary to-primary" },
];

export function TechStack() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="tech" className="py-24 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-primary/5 blur-3xl" />
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
            Technology Stack
          </span>
          <h2 className="section-title mt-4">
            Built with{" "}
            <span className="gradient-text">Modern Technologies</span>
          </h2>
          <p className="section-subtitle">
            We use industry-leading technologies to build robust, scalable, and
            high-performance applications.
          </p>
        </motion.div>

        {/* Tech Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4">
          {technologies.map((tech, index) => {
            const category = categories.find((c) => c.name === tech.category);
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="glass-card p-4 text-center cursor-pointer group"
              >
                <div
                  className={`w-12 h-12 mx-auto rounded-lg bg-gradient-to-br ${category?.color} flex items-center justify-center mb-3 group-hover:shadow-lg group-hover:shadow-primary/20 transition-shadow`}
                >
                  <span className="text-lg font-bold text-primary-foreground">
                    {tech.name.charAt(0)}
                  </span>
                </div>
                <span className="text-sm font-medium">{tech.name}</span>
                <span className="text-xs text-muted-foreground block mt-1">
                  {tech.category}
                </span>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-16 text-center"
        >
          <p className="text-muted-foreground mb-4">
            Need a specific technology? We adapt to your requirements.
          </p>
          <a
            href="#contact"
            className="text-primary hover:underline font-medium"
          >
            Let's discuss your tech stack →
          </a>
        </motion.div>
      </div>
    </section>
  );
}
