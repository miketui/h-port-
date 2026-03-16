import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { motion } from "framer-motion";
import { PageTransition } from "@/components/layout/PageTransition";
import { useToast } from "@/hooks/use-toast";

const contactSchema = z.object({
  name: z.string().min(2, "Name is required"),
  email: z.string().email("Invalid email address"),
  projectType: z.string().min(1, "Please select a project type"),
  message: z.string().min(10, "Please provide more details about your inquiry"),
});

type ContactFormValues = z.infer<typeof contactSchema>;

export default function Contact() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: "",
      email: "",
      projectType: "",
      message: "",
    },
  });

  const onSubmit = async (data: ContactFormValues) => {
    setIsSubmitting(true);
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    setIsSubmitting(false);
    
    toast({
      title: "Inquiry Sent",
      description: "Thank you. Aria's team will be in touch shortly.",
      duration: 5000,
    });
    
    form.reset();
  };

  return (
    <PageTransition>
      <div className="container mx-auto px-6 md:px-12 pt-12 pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5"
          >
            <h1 className="text-5xl md:text-7xl font-display mb-8">Contact</h1>
            <p className="text-muted-foreground text-lg mb-12 max-w-md leading-relaxed">
              For booking inquiries, editorial commissions, and private styling requests.
            </p>

            <div className="space-y-12">
              <div>
                <h3 className="text-xs uppercase tracking-[0.2em] text-primary mb-4">Representation</h3>
                <p className="font-display text-2xl text-foreground">The Magnet Agency</p>
                <a href="mailto:booking@themagnetagency.com" className="text-muted-foreground hover:text-foreground transition-colors mt-2 block">
                  booking@themagnetagency.com
                </a>
              </div>

              <div>
                <h3 className="text-xs uppercase tracking-[0.2em] text-primary mb-4">Direct Studio</h3>
                <a href="mailto:studio@arianoir.com" className="font-display text-2xl text-foreground hover:text-primary transition-colors">
                  studio@arianoir.com
                </a>
              </div>

              <div>
                <h3 className="text-xs uppercase tracking-[0.2em] text-primary mb-4">Locations</h3>
                <ul className="space-y-2 text-muted-foreground font-display text-xl">
                  <li>London (Base)</li>
                  <li>New York</li>
                  <li>Paris</li>
                </ul>
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-7 bg-[#050505] border border-white/5 p-8 md:p-12"
          >
            <h2 className="text-2xl font-display mb-8">Send an Inquiry</h2>
            
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs uppercase tracking-widest text-muted-foreground">Name</label>
                  <input 
                    {...form.register("name")}
                    className="w-full bg-background border border-border px-4 py-3 text-foreground focus:outline-none focus:border-primary transition-colors"
                    placeholder="Jane Doe"
                  />
                  {form.formState.errors.name && (
                    <p className="text-destructive text-xs">{form.formState.errors.name.message}</p>
                  )}
                </div>

                <div className="space-y-2">
                  <label className="text-xs uppercase tracking-widest text-muted-foreground">Email</label>
                  <input 
                    {...form.register("email")}
                    type="email"
                    className="w-full bg-background border border-border px-4 py-3 text-foreground focus:outline-none focus:border-primary transition-colors"
                    placeholder="jane@example.com"
                  />
                  {form.formState.errors.email && (
                    <p className="text-destructive text-xs">{form.formState.errors.email.message}</p>
                  )}
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-xs uppercase tracking-widest text-muted-foreground">Project Type</label>
                <div className="relative">
                  <select 
                    {...form.register("projectType")}
                    className="w-full bg-background border border-border px-4 py-3 text-foreground focus:outline-none focus:border-primary transition-colors appearance-none"
                  >
                    <option value="">Select a category</option>
                    <option value="editorial">Editorial / Magazine</option>
                    <option value="red_carpet">Red Carpet / Event</option>
                    <option value="commercial">Commercial / Campaign</option>
                    <option value="celebrity">Celebrity Personal Styling</option>
                    <option value="other">Other</option>
                  </select>
                  <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-muted-foreground">
                    ▼
                  </div>
                </div>
                {form.formState.errors.projectType && (
                  <p className="text-destructive text-xs">{form.formState.errors.projectType.message}</p>
                )}
              </div>

              <div className="space-y-2">
                <label className="text-xs uppercase tracking-widest text-muted-foreground">Project Details</label>
                <textarea 
                  {...form.register("message")}
                  rows={6}
                  className="w-full bg-background border border-border px-4 py-3 text-foreground focus:outline-none focus:border-primary transition-colors resize-none"
                  placeholder="Please provide dates, locations, and creative direction..."
                />
                {form.formState.errors.message && (
                  <p className="text-destructive text-xs">{form.formState.errors.message.message}</p>
                )}
              </div>

              <button 
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-foreground text-background py-4 uppercase tracking-widest text-sm font-medium hover:bg-primary hover:text-primary-foreground transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? "Sending..." : "Submit Inquiry"}
              </button>

            </form>
          </motion.div>

        </div>
      </div>
    </PageTransition>
  );
}
