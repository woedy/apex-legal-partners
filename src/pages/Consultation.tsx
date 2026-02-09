import { useState } from "react";
import { motion } from "framer-motion";
import { CheckCircle, Shield } from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { practiceAreas } from "@/data/siteData";

const consultationSchema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100),
  email: z.string().trim().email("Please enter a valid email").max(255),
  phone: z.string().trim().min(1, "Phone number is required").max(30),
  practiceArea: z.string().min(1, "Please select a practice area"),
  contactMethod: z.string().min(1, "Please select a preferred contact method"),
  description: z
    .string()
    .trim()
    .min(10, "Please provide at least a brief description")
    .max(3000, "Description must be less than 3000 characters"),
});

type ConsultationFormValues = z.infer<typeof consultationSchema>;

const Consultation = () => {
  const [submitted, setSubmitted] = useState(false);

  const form = useForm<ConsultationFormValues>({
    resolver: zodResolver(consultationSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      practiceArea: "",
      contactMethod: "",
      description: "",
    },
  });

  const onSubmit = (_data: ConsultationFormValues) => {
    setSubmitted(true);
  };

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
              Get Started
            </p>
            <h1 className="text-4xl md:text-5xl font-heading mb-4">
              Book a Consultation
            </h1>
            <p className="text-primary-foreground/70 font-body text-lg max-w-2xl">
              Tell us about your legal matter and we'll connect you with the
              right attorney. Your initial 30-minute consultation is
              complimentary.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container max-w-2xl">
          {submitted ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="bg-muted rounded-lg p-8 md:p-12 text-center"
            >
              <CheckCircle className="w-14 h-14 text-accent mx-auto mb-4" />
              <h2 className="text-2xl font-heading text-foreground mb-2">
                Consultation Request Received
              </h2>
              <p className="text-muted-foreground font-body mb-2">
                Thank you for reaching out. A member of our team will contact
                you within one business day to schedule your consultation.
              </p>
              <p className="text-sm text-muted-foreground/60 font-body mb-6">
                If your matter is urgent, please call us directly at{" "}
                <a href="tel:(212) 555-0190" className="text-accent">
                  (212) 555-0190
                </a>
                .
              </p>
              <Button
                variant="outline"
                onClick={() => {
                  setSubmitted(false);
                  form.reset();
                }}
              >
                Submit Another Request
              </Button>
            </motion.div>
          ) : (
            <>
              <div className="flex items-center gap-2 mb-6 p-3 bg-muted rounded-md">
                <Shield className="w-5 h-5 text-accent shrink-0" />
                <p className="text-sm text-muted-foreground font-body">
                  Your information is kept strictly confidential. Submitting this
                  form does not create an attorney-client relationship.
                </p>
              </div>

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

                  <div className="grid sm:grid-cols-2 gap-6">
                    <FormField
                      control={form.control}
                      name="phone"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="font-body">Phone *</FormLabel>
                          <FormControl>
                            <Input
                              type="tel"
                              placeholder="(555) 123-4567"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="contactMethod"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="font-body">
                            Preferred Contact Method *
                          </FormLabel>
                          <Select
                            onValueChange={field.onChange}
                            defaultValue={field.value}
                          >
                            <FormControl>
                              <SelectTrigger>
                                <SelectValue placeholder="Select method" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              <SelectItem value="phone">Phone Call</SelectItem>
                              <SelectItem value="email">Email</SelectItem>
                              <SelectItem value="either">No Preference</SelectItem>
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <FormField
                    control={form.control}
                    name="practiceArea"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="font-body">Practice Area *</FormLabel>
                        <Select
                          onValueChange={field.onChange}
                          defaultValue={field.value}
                        >
                          <FormControl>
                            <SelectTrigger>
                              <SelectValue placeholder="Select a practice area" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            {practiceAreas.map((area) => (
                              <SelectItem key={area.id} value={area.title}>
                                {area.title}
                              </SelectItem>
                            ))}
                            <SelectItem value="other">
                              Other / Not Sure
                            </SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="description"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="font-body">
                          Brief Description of Your Matter *
                        </FormLabel>
                        <FormControl>
                          <Textarea
                            placeholder="Please provide a brief overview of your legal matter. The more context you share, the better prepared we'll be for our conversation."
                            rows={5}
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <Button type="submit" variant="accent" size="lg" className="w-full">
                    Request Consultation
                  </Button>

                  <p className="text-xs text-muted-foreground/60 font-body text-center">
                    By submitting this form, you acknowledge that this does not
                    create an attorney-client relationship. All information
                    provided will be treated as confidential.
                  </p>
                </form>
              </Form>
            </>
          )}
        </div>
      </section>
    </Layout>
  );
};

export default Consultation;
