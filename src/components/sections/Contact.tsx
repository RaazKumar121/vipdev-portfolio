import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Mail, Phone, MapPin, Send, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log("Form submitted:", formState);
  };

  const handleWhatsApp = () => {
    window.open("https://wa.me/919876543210?text=Hi, I'm interested in your services!", "_blank");
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-primary/5 blur-3xl" />
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] rounded-full bg-secondary/5 blur-3xl" />
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
            Get In Touch
          </span>
          <h2 className="section-title mt-4">
            Let's Build Something{" "}
            <span className="gradient-text">Amazing</span>
          </h2>
          <p className="section-subtitle">
            Ready to transform your idea into reality? Get in touch and let's
            discuss your project.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
            <p className="text-muted-foreground mb-8">
              Fill out the form or reach out directly. We typically respond
              within 24 hours.
            </p>

            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                  <Mail className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <div className="text-sm text-muted-foreground">Email</div>
                  <a href="mailto:contact@vipdev.in" className="font-medium hover:text-primary transition-colors">
                    contact@vipdev.in
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                  <Phone className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <div className="text-sm text-muted-foreground">Phone</div>
                  <a href="tel:+919876543210" className="font-medium hover:text-primary transition-colors">
                    +91 98765 43210
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <div className="text-sm text-muted-foreground">Location</div>
                  <span className="font-medium">India (Remote Friendly)</span>
                </div>
              </div>
            </div>

            {/* WhatsApp CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mt-10"
            >
              <Button
                onClick={handleWhatsApp}
                size="xl"
                className="w-full bg-green-600 hover:bg-green-700 text-white shadow-[0_0_20px_rgba(34,197,94,0.3)] hover:shadow-[0_0_30px_rgba(34,197,94,0.5)]"
              >
                <MessageCircle className="w-5 h-5 mr-2" />
                Chat on WhatsApp
              </Button>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <form onSubmit={handleSubmit} className="glass-card p-8 space-y-6">
              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium mb-2">Name</label>
                  <Input
                    placeholder="Your name"
                    value={formState.name}
                    onChange={(e) =>
                      setFormState({ ...formState, name: e.target.value })
                    }
                    className="bg-muted/50 border-border focus:border-primary"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Email</label>
                  <Input
                    type="email"
                    placeholder="your@email.com"
                    value={formState.email}
                    onChange={(e) =>
                      setFormState({ ...formState, email: e.target.value })
                    }
                    className="bg-muted/50 border-border focus:border-primary"
                  />
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium mb-2">Phone</label>
                  <Input
                    placeholder="+91 xxxxx xxxxx"
                    value={formState.phone}
                    onChange={(e) =>
                      setFormState({ ...formState, phone: e.target.value })
                    }
                    className="bg-muted/50 border-border focus:border-primary"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Subject</label>
                  <Input
                    placeholder="Project inquiry"
                    value={formState.subject}
                    onChange={(e) =>
                      setFormState({ ...formState, subject: e.target.value })
                    }
                    className="bg-muted/50 border-border focus:border-primary"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Message</label>
                <Textarea
                  placeholder="Tell us about your project..."
                  rows={5}
                  value={formState.message}
                  onChange={(e) =>
                    setFormState({ ...formState, message: e.target.value })
                  }
                  className="bg-muted/50 border-border focus:border-primary resize-none"
                />
              </div>

              <Button type="submit" variant="gradient" size="xl" className="w-full">
                <Send className="w-5 h-5 mr-2" />
                Send Message
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
