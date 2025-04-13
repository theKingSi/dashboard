import RevealOnScroll from "@/components/reveal-on-scroll"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import React from "react"

export const ItWorks = () => {
    const steps = [
        {
            number: "01",
            title: "Create an Account",
            description: "School administrators set up the system and create accounts for teachers and staff members.",
        },
        {
            number: "02",
            title: "Set Up Classes",
            description: "Add classes, import student data, and set up attendance schedules for each course.",
        },
        {
            number: "03",
            title: "Take Attendance",
            description: "Teachers can quickly mark attendance using our intuitive interface on any device.",
        },
        {
            number: "04",
            title: "Generate Reports",
            description: "Access comprehensive attendance reports and analytics to track student engagement.",
        },
    ]

    return (
        <section id="how-it-works" className="py-20 bg-gradient-to-br from-cyan-500/10 to-fuchsia-500/10 ">
            <div className="container px-4 md:px-6 mx-auto max-w-7xl">
            <RevealOnScroll className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
                    <div className="space-y-2">
                        <div className="inline-block rounded-lg bg-gradient-to-r from-cyan-500/20 to-fuchsia-500/20 px-3 py-1 text-sm">
                            How It Works
                        </div>
                        <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Simple Process, Powerful Results</h2>
                        <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                            Our attendance management system is designed to be intuitive and easy to use, while providing powerful
                            features.
                        </p>
                    </div>
                    </RevealOnScroll>

                <div className="grid gap-12 lg:gap-24">
                    <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
                        {steps.map((step, index) => (
                            <RevealOnScroll key={index} className="relative">
                                <div className="absolute -top-4 -left-4 text-6xl font-bold text-gray-100">{step.number}</div>
                                <div className="relative z-10 space-y-2 p-6 bg-white rounded-lg border-2 border-gray-100 shadow-sm">
                                    <h3 className="text-xl font-bold">{step.title}</h3>
                                    <p className="text-muted-foreground">{step.description}</p>
                                </div>
                                {index < steps.length - 1 && (
                                    <div className="hidden lg:block absolute top-1/2 right-0 w-12 h-0.5 bg-gradient-to-r from-cyan-500 to-fuchsia-500 transform translate-x-6"></div>
                                )}
                            </RevealOnScroll>
                        ))}
                    </div>










                    <RevealOnScroll className="hidden md:flex flex-col md:flex-row items-center justify-center gap-8 p-8 bg-white rounded-lg border-2 border-gray-100 shadow-sm">
  <div className="flex-1 space-y-4">
    <h3 className="text-2xl font-bold">Ready to Streamline Your Attendance Process?</h3>
    <p className="text-muted-foreground">
      Join thousands of educational institutions that have transformed their attendance management with our platform.
    </p>
    <div className="flex flex-col sm:flex-row gap-3">
      <Button className="bg-gradient-to-r from-cyan-500 to-fuchsia-500 hover:from-fuchsia-500 hover:to-cyan-500 transition-all">
        Get Started Today
      </Button>
      <Button className="border-cyan-500/50">
        Schedule a Demo
      </Button>
    </div>
  </div>
  <div className="flex-1 flex justify-center">
    <div className="relative w-full max-w-md aspect-video rounded-lg overflow-hidden shadow-lg">
      <Image
        src="/images/placeholder.svg?height=270&width=480"
        alt="Platform Demo"
        width={480}
        height={270}
        className="object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500/20 to-fuchsia-500/20 flex items-center justify-center">
        <div className="h-16 w-16 rounded-full bg-white/90 flex items-center justify-center shadow-lg cursor-pointer">
          <div className="h-0 w-0 border-y-8 border-y-transparent border-l-12 border-l-cyan-500 ml-1"></div>
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
