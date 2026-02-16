import { useState } from "react";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Clock, CheckCircle, ExternalLink } from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { siteInfo } from "@/data/siteData";

const contactSchema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100, "Name must be less than 100 characters"),
  email: z.string().trim().email("Please enter a valid email address").max(255),
  phone: z.string().trim().max(30, "Phone number is too long").optional().or(z.literal("")),
  message: z.string().trim().min(1, "Message is required").max(2000, "Message must be less than 2000 characters"),
});

type ContactFormValues = z.infer<typeof contactSchema>;

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);

  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
    defaultValues: { name: "", email: "", phone: "", message: "" },
  });

  const onSubmit = (_data: ContactFormValues) => {
    setSubmitted(true);
  };

  const mailtoHref = `mailto:${siteInfo.email}?subject=${encodeURIComponent("General Inquiry")}&body=${encodeURIComponent("Hello, I would like to inquire about...")}`;

  return (
    <Layout>
      <section className="page-header">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-accent font-body text-sm tracking-[0.2em] uppercase mb-3">
              Get in Touch
            </p>
            <h1 className="text-4xl md:text-5xl font-heading mb-4">
              Contact Us
            </h1>
            <p className="text-primary-foreground/70 font-body text-lg max-w-2xl">
              We're here to help. Reach out with any questions or to schedule a
              conversation with one of our attorneys.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Form */}
            <div className="lg:col-span-2">
              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="bg-muted rounded-lg p-8 md:p-12 text-center"
                >
                  <CheckCircle className="w-12 h-12 text-accent mx-auto mb-4" />
                  <h2 className="text-2xl font-heading text-foreground mb-2">
                    Message Received
                  </h2>
                  <p className="text-muted-foreground font-body mb-6">
                    Thank you for reaching out. A member of our team will respond
                    within one business day.
                  </p>
                  <Button
                    variant="outline"
                    onClick={() => {
                      setSubmitted(false);
                      form.reset();
                    }}
                  >
                    Send Another Message
                  </Button>
                </motion.div>
              ) : (
                <Form {...form}>
                  <form
                    onSubmit={form.handleSubmit(onSubmit)}
                    className="space-y-6"
                  >
                    <div className="grid sm:grid-cols-2 gap-6">
                      <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="font-body">Full Name *</FormLabel>
                            <FormControl>
                              <Input placeholder="Jane Doe" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="font-body">Email *</FormLabel>
                            <FormControl>
                              <Input
                                type="email"
                                placeholder="jane@example.com"
                                {...field}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                    <FormField
                      control={form.control}
                      name="phone"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="font-body">Phone (optional)</FormLabel>
                          <FormControl>
                            <Input
                              type="tel"
                              placeholder="+41 44 000 00 00"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="message"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="font-body">Message *</FormLabel>
                          <FormControl>
                            <Textarea
                              placeholder="How can we help you?"
                              rows={5}
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <div className="flex flex-col sm:flex-row gap-3">
                      <Button type="submit" variant="accent" size="lg">
                        Send Message
                      </Button>
                      <Button asChild variant="outline" size="lg">
                        <a href={mailtoHref}>
                          <ExternalLink className="w-4 h-4 mr-1" />
                          Open in Email Client
                        </a>
                      </Button>
                    </div>
                  </form>
                </Form>
              )}
            </div>

            {/* Sidebar */}
            <aside className="space-y-6">
              <div className="bg-muted rounded-lg p-6">
                <h3 className="font-heading text-foreground text-lg mb-4">
                  Office Information
                </h3>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                    <span className="text-sm font-body text-muted-foreground whitespace-pre-line">
                      {siteInfo.address}
                    </span>
                  </li>
                  <li className="flex items-center gap-3">
                    <Phone className="w-5 h-5 text-accent shrink-0" />
                    <a
                      href={`tel:${siteInfo.phone}`}
                      className="text-sm font-body text-muted-foreground hover:text-accent transition-colors"
                    >
                      {siteInfo.phone}
                    </a>
                  </li>
                  <li className="flex items-center gap-3">
                    <Mail className="w-5 h-5 text-accent shrink-0" />
                    <a
                      href={`mailto:${siteInfo.email}`}
                      className="text-sm font-body text-muted-foreground hover:text-accent transition-colors"
                    >
                      {siteInfo.email}
                    </a>
                  </li>
                  <li className="flex items-center gap-3">
                    <Clock className="w-5 h-5 text-accent shrink-0" />
                    <span className="text-sm font-body text-muted-foreground">
                      {siteInfo.hours}
                    </span>
                  </li>
                </ul>
              </div>

              <div className="bg-primary rounded-lg p-6 text-primary-foreground">
                <h3 className="font-heading text-lg mb-2">
                  Prefer to Schedule Directly?
                </h3>
                <p className="text-primary-foreground/70 text-sm font-body mb-4">
                  Book a free 30-minute consultation online.
                </p>
                <Button asChild variant="accent" className="w-full">
                  <a href="/consultation">Book a Consultation</a>
                </Button>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
