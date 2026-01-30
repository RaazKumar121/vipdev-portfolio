import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";

const projects = [
  {
    title: "Business Management System",
    description: "Comprehensive admin dashboard with role management, analytics, and detailed reporting for enterprise operations.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80",
    tags: ["React", "Node.js", "PostgreSQL", "Analytics"],
    gradient: "from-primary/80 to-secondary/80",
  },
  {
    title: "E-Commerce Platform",
    description: "Full-featured e-commerce app with product catalog, payment integration, and real-time order tracking.",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&q=80",
    tags: ["React Native", "Stripe", "Firebase", "Redux"],
    gradient: "from-secondary/80 to-neon-pink/80",
  },
  {
    title: "Institute Management System",
    description: "Complete student management solution with fees tracking, attendance, and examination modules.",
    image: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=800&q=80",
    tags: ["Laravel", "MySQL", "Vue.js", "REST API"],
    gradient: "from-neon-blue/80 to-primary/80",
  },
  {
    title: "Hotel Booking Application",
    description: "Seamless room booking experience with admin panel management and integrated payment systems.",
    image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&q=80",
    tags: ["Next.js", "Prisma", "Tailwind", "Stripe"],
    gradient: "from-neon-purple/80 to-secondary/80",
  },
  {
    title: "Custom API Service",
    description: "Enterprise-grade API infrastructure with authentication, role-based access, and secure endpoints.",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&q=80",
    tags: ["Node.js", "Express", "MongoDB", "JWT"],
    gradient: "from-primary/80 to-neon-blue/80",
  },
  {
    title: "Healthcare Dashboard",
    description: "Real-time patient monitoring dashboard with appointment scheduling and medical records management.",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&q=80",
    tags: ["React", "D3.js", "Python", "PostgreSQL"],
    gradient: "from-secondary/80 to-primary/80",
  },
];

export function Portfolio() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="portfolio" className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-muted/20 to-background" />

      <div className="container mx-auto px-6 relative z-10" ref={ref}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary text-sm font-semibold uppercase tracking-wider">
            Our Portfolio
          </span>
          <h2 className="section-title mt-4">
            Projects We're{" "}
            <span className="gradient-text">Proud Of</span>
          </h2>
          <p className="section-subtitle">
            A showcase of our finest work demonstrating our expertise in
            delivering exceptional digital solutions.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative overflow-hidden rounded-2xl"
            >
              {/* Image */}
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div
                  className={`absolute inset-0 bg-gradient-to-t ${project.gradient} opacity-0 group-hover:opacity-90 transition-opacity duration-300`}
                />

                {/* Hover Content */}
                <div className="absolute inset-0 flex flex-col justify-end p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <h3 className="text-xl font-bold text-foreground mb-2">
                    {project.title}
                  </h3>
                  <p className="text-foreground/90 text-sm mb-4">
                    {project.description}
                  </p>
                  <div className="flex gap-3">
                    <Button variant="glass" size="sm">
                      <ExternalLink className="w-4 h-4 mr-1" />
                      View
                    </Button>
                    <Button variant="glass" size="sm">
                      <Github className="w-4 h-4 mr-1" />
                      Code
                    </Button>
                  </div>
                </div>
              </div>

              {/* Default Content */}
              <div className="glass-card p-6 -mt-2 relative z-10 group-hover:opacity-0 transition-opacity duration-300">
                <h3 className="text-lg font-semibold mb-2">{project.title}</h3>
                <div className="flex flex-wrap gap-2">
                  {project.tags.slice(0, 3).map((tag, idx) => (
                    <span
                      key={idx}
                      className="text-xs px-2 py-1 rounded-full bg-primary/10 text-primary"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center mt-12"
        >
          <Button variant="neon-outline" size="lg">
            View All Projects
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
