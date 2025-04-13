"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, Phone, MapPin, Send, CheckCircle2, Loader2 } from "lucide-react"
import RevealOnScroll from "@/components/reveal-on-scroll"
import { Card, CardContent } from "@/components/ui/card"

export default function ContactSection() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [activeField, setActiveField] = useState<string | null>(null)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500))
    setIsSubmitting(false)
    setIsSubmitted(true)

    // Reset form after showing success message
    setTimeout(() => {
      setIsSubmitted(false)
      setFormState({
        name: "",
        email: "",
        subject: "",
        message: "",
      })
    }, 3000)
  }

  return (
    <section id="contact" className="py-20 bg-white relative z-10 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 -z-10 w-96 h-96 rounded-full bg-cyan-500/10 blur-3xl"></div>
      <div className="absolute bottom-0 left-0 -z-10 w-96 h-96 rounded-full bg-fuchsia-500/10 blur-3xl"></div>

      <div className="container px-4 md:px-6">
        <RevealOnScroll className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-gradient-to-r from-cyan-500/20 to-fuchsia-500/20 px-3 py-1 text-sm">
              Get In Touch
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Contact Us</h2>
            <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Have questions about our attendance management system? We're here to help.
            </p>
          </div>
        </RevealOnScroll>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          <RevealOnScroll className="order-2 md:order-1">
            <Card
              className={`border-2 border-gray-100 shadow-lg overflow-hidden transition-all duration-500 ${
                isSubmitted ? "animate-success-bounce" : "hover:border-cyan-500/30"
              }`}
            >
              <CardContent className="p-6">
                {isSubmitted ? (
                  <div className="flex flex-col items-center justify-center py-12 space-y-4 text-center">
                    <div className="rounded-full bg-green-100 p-3">
                      <CheckCircle2 className="h-12 w-12 text-green-600" />
                    </div>
                    <h3 className="text-2xl font-bold text-green-600">Message Sent!</h3>
                    <p className="text-muted-foreground">Thank you for contacting us. We'll get back to you shortly.</p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <h3 className="text-xl font-bold mb-4">Send us a message</h3>
                    <div className="space-y-4">
                      <div
                        className={`relative transition-all duration-300 ${
                          activeField === "name" ? "transform -translate-y-1" : ""
                        }`}
                      >
                        <Input
                          name="name"
                          placeholder="Your Name"
                          value={formState.name}
                          onChange={handleChange}
                          onFocus={() => setActiveField("name")}
                          onBlur={() => setActiveField(null)}
                          className={`border-2 bg-transparent transition-all duration-300 ${
                            activeField === "name"
                              ? "border-cyan-500 shadow-[0_0_15px_rgba(6,182,212,0.25)]"
                              : "border-gray-200"
                          }`}
                          required
                        />
                        {activeField === "name" && (
                          <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-cyan-500 rounded-full animate-ping"></div>
                        )}
                      </div>

                      <div
                        className={`relative transition-all duration-300 ${
                          activeField === "email" ? "transform -translate-y-1" : ""
                        }`}
                      >
                        <Input
                          name="email"
                          type="email"
                          placeholder="Your Email"
                          value={formState.email}
                          onChange={handleChange}
                          onFocus={() => setActiveField("email")}
                          onBlur={() => setActiveField(null)}
                          className={`border-2 bg-transparent transition-all duration-300 ${
                            activeField === "email"
                              ? "border-fuchsia-500 shadow-[0_0_15px_rgba(217,70,239,0.25)]"
                              : "border-gray-200"
                          }`}
                          required
                        />
                        {activeField === "email" && (
                          <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-fuchsia-500 rounded-full animate-ping"></div>
                        )}
                      </div>

                      <div
                        className={`relative transition-all duration-300 ${
                          activeField === "subject" ? "transform -translate-y-1" : ""
                        }`}
                      >
                        <Input
                          name="subject"
                          placeholder="Subject"
                          value={formState.subject}
                          onChange={handleChange}
                          onFocus={() => setActiveField("subject")}
                          onBlur={() => setActiveField(null)}
                          className={`border-2 bg-transparent transition-all duration-300 ${
                            activeField === "subject"
                              ? "border-cyan-500 shadow-[0_0_15px_rgba(6,182,212,0.25)]"
                              : "border-gray-200"
                          }`}
                          required
                        />
                        {activeField === "subject" && (
                          <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-cyan-500 rounded-full animate-ping"></div>
                        )}
                      </div>

                      <div
                        className={`relative transition-all duration-300 ${
                          activeField === "message" ? "transform -translate-y-1" : ""
                        }`}
                      >
                        <Textarea
                          name="message"
                          placeholder="Your Message"
                          value={formState.message}
                          onChange={handleChange}
                          onFocus={() => setActiveField("message")}
                          onBlur={() => setActiveField(null)}
                          className={`min-h-[120px] border-2 bg-transparent resize-none transition-all duration-300 ${
                            activeField === "message"
                              ? "border-fuchsia-500 shadow-[0_0_15px_rgba(217,70,239,0.25)]"
                              : "border-gray-200"
                          }`}
                          required
                        />
                        {activeField === "message" && (
                          <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-fuchsia-500 rounded-full animate-ping"></div>
                        )}
                      </div>
                    </div>

                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-gradient-to-r from-cyan-500 to-fuchsia-500 hover:from-fuchsia-500 hover:to-cyan-500 transition-all hover:scale-105 group"
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                          Sending...
                        </>
                      ) : (
                        <>
                          <Send className="mr-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                          Send Message
                        </>
                      )}
                    </Button>
                  </form>
                )}
              </CardContent>
            </Card>
          </RevealOnScroll>

          <RevealOnScroll delay={200} className="order-1 md:order-2">
            <div className="space-y-8">
              <div className="space-y-6">
                <h3 className="text-xl font-bold">Contact Information</h3>
                <p className="text-muted-foreground">
                  Reach out to us for any questions about our attendance management system. Our team is ready to assist
                  you.
                </p>

                <div className="space-y-4">
                  <div className="flex items-start space-x-4 group">
                    <div className="bg-gradient-to-br from-cyan-500 to-fuchsia-500 p-3 rounded-full transform transition-transform group-hover:scale-110">
                      <MapPin className="h-5 w-5 text-white" />
                    </div>
                    <div className="space-y-1">
                      <p className="font-medium">Our Location</p>
                      <p className="text-muted-foreground">123 Education Street, Academic City, 10001</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4 group">
                    <div className="bg-gradient-to-br from-cyan-500 to-fuchsia-500 p-3 rounded-full transform transition-transform group-hover:scale-110">
                      <Mail className="h-5 w-5 text-white" />
                    </div>
                    <div className="space-y-1">
                      <p className="font-medium">Email Us</p>
                      <a
                        href="mailto:info@edutrack.com"
                        className="text-cyan-500 hover:text-fuchsia-500 transition-colors"
                      >
                        info@edutrack.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4 group">
                    <div className="bg-gradient-to-br from-cyan-500 to-fuchsia-500 p-3 rounded-full transform transition-transform group-hover:scale-110">
                      <Phone className="h-5 w-5 text-white" />
                    </div>
                    <div className="space-y-1">
                      <p className="font-medium">Call Us</p>
                      <a href="tel:+1234567890" className="text-cyan-500 hover:text-fuchsia-500 transition-colors">
                        +1 (234) 567-890
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="text-xl font-bold">Office Hours</h3>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Monday - Friday:</span>
                    <span>9:00 AM - 5:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Saturday:</span>
                    <span>10:00 AM - 2:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Sunday:</span>
                    <span>Closed</span>
                  </div>
                </div>
              </div>
</div>
        
          </RevealOnScroll>
        </div>
      </div>
    </section>
  )
}
